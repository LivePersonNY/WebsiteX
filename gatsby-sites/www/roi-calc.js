import $ from 'jquery';

export default ROICalc = {
	
	config: config,
	init: function(options) {
		init(options)
	},
	debug: debug,
	model: model,
	results: results,
	controller: controller,
	
}

var config = {
	inputs: {
		fields: [
			'sales-traffic',
			'sales-conv-rate',
			'sales-avg-order',
			'care-call-volume',
			'care-cost-per-call',
			'care-contact-resolution'
		],
		event: 'change',
		eventField: {},
		callbacks: {}
	},
	outputs: {
		callbacks: {},
	},
	debug: false,
};

function init(options) {
	model.config(options);
	controller.init();
	
	model.updateAll();
	model.calculate.sales.run();
	model.calculate.care.run();
	model.calculate.totals.run();
	
	//Debug info
	debug.info("Init succeeded.");
}

const debug = {
	info: function(message, data) {
		if (!config.debug) return false;
		window.console.info(message, data || null);
	}
}

const model = {
	config: function(options) {
		config = $.extend(true, config, options);
	},
	inputs: {},
	update: function(field, value) {
		this.inputs[field] = parseFloat(value);
	},
	updateAll: function() {
		config.inputs.fields.forEach(function(field) {
			var val = $('[data-roi="' + field + '"]').val().replace(/[^0-9.]/g, "");
			model.update(field, val);
		});
	},
	calculate: {
		sales: {
			run: function() {
				debug.info('Inputs', model.inputs);
				this.formula(model.inputs['sales-traffic'], model.inputs['sales-conv-rate'], model.inputs['sales-avg-order']);
			},
			increments: {
				baseline: {
					acc_rate: 0,
					ord_incr: 0,
					chan_growth: 0,
					conv_rate_m: 1,
				},
				year1: {
					acc_rate: .01,
					ord_incr: .10,
					chan_growth: 0,
					conv_rate_m: 2,
				},
				year2: {
					acc_rate: .035,
					ord_incr: .15,
					chan_growth: 0,
					conv_rate_m: 5,
				},
				year3: {
					acc_rate: .05,
					ord_incr: .20,
					chan_growth: 0,
					conv_rate_m: 10,
				}
			},
			formula: function(traffic, conv_rate, avg_order) {
				conv_rate = conv_rate / 100;
				for (const key in this.increments) {
					var digital_orders = traffic * conv_rate;
					var convo_started = (traffic - digital_orders) * this.increments[key].acc_rate;
					var convo_w_channels = convo_started * this.increments[key].chan_growth;
					var total_convos = convo_started + convo_w_channels;
					var self_sales_conversion_rate = conv_rate * this.increments[key].conv_rate_m;
					var mess_assisted_sales = total_convos * (conv_rate * this.increments[key].conv_rate_m);
					var avg_order_value = avg_order + (avg_order * this.increments[key].ord_incr);
					
					results.sales.raw[key] = {
						digital_orders: digital_orders,
						convo_started: convo_started,
						convo_w_channels: convo_w_channels,
						total_convos: total_convos,
						self_sales_conversion_rate: self_sales_conversion_rate,
						mess_assisted_sales: mess_assisted_sales,
						avg_order_value: avg_order_value,
					};
					
					results.sales.increase[key] = avg_order * mess_assisted_sales;
					results.sales.average_order_value[key] = (avg_order_value - avg_order) * mess_assisted_sales;
					controller.update("sales-increase-" + key, results.sales.increase[key]);
					controller.update("sales-avg-order-" + key, results.sales.average_order_value[key]);
				}
				return results;
			},
			
		},
		care: {
			run: function() {
				debug.info('Inputs', model.inputs);
				this.formula(model.inputs['care-call-volume'], model.inputs['care-cost-per-call'], model.inputs['care-contact-resolution']);
			},
			increments: {
				baseline: {
					shift_rate: 0,
					fcr_rate_m: 0,
					bcr_rate: 0,
					eff_ratio: 0,
				},
				year1: {
					shift_rate: .1,
					fcr_rate_m: 1.05,
					bcr_rate: .1,
					eff_ratio: 1.4, // F59
				},
				year2: {
					shift_rate: .3,
					fcr_rate_m: 1.1,
					bcr_rate: .3,
					eff_ratio: 1.7, // G59
				},
				year3: {
					shift_rate: .5,
					fcr_rate_m: 1.15,
					bcr_rate: .5,
					eff_ratio: 2, // H59
				}
			},
			formula: function(call_volume /*C20*/, cost_per_call /*C25/F53/F58*/, fcr_rate /*C32/F44*/) {
				fcr_rate = fcr_rate / 100;
				for (const key in this.increments) {
					/*F43*/ var conversations_shifted = call_volume * this.increments[key].shift_rate;
					/*F45*/ var messaging_fcr = fcr_rate * this.increments[key].fcr_rate_m;
					/*F46*/ var repeat_conversations = (conversations_shifted * (1 - fcr_rate)) - (conversations_shifted * (1 - messaging_fcr));
					
					/*F47*/ results.care.fcr[key] = repeat_conversations * cost_per_call;
							controller.update("care-fcr-" + key, results.care.fcr[key]);
					
					/*F50*/ var remaining_conversations = conversations_shifted - repeat_conversations;
					/*F52*/ var bot_contained_conversations = remaining_conversations * this.increments[key].bcr_rate;
					
					/*F54*/ results.care.ai_scale[key] = bot_contained_conversations * cost_per_call;
							controller.update("care-ai-scale-" + key, results.care.ai_scale[key]);
					
					/*F57*/ var remaining_agent_conversations = remaining_conversations - bot_contained_conversations;
					/*F60*/ var cost_per_messaging_conversation = this.increments[key].eff_ratio > 0 ? (cost_per_call / this.increments[key].eff_ratio) : 0;
					/*F61*/ var agent_cost_at_baseline = remaining_agent_conversations * cost_per_call;
					/*F62*/ var agent_cost_with_bots = remaining_agent_conversations * cost_per_messaging_conversation;
					/*F63*/ results.care.efficiency[key] = agent_cost_at_baseline - agent_cost_with_bots;
							controller.update("care-efficiency-" + key, results.care.efficiency[key]);
							
							results.care.raw[key] = {
								conversations_shifted: conversations_shifted,
								messaging_fcr: messaging_fcr,
								repeat_conversations: repeat_conversations,
								remaining_conversations: remaining_conversations,
								bot_contained_conversations: bot_contained_conversations,
								remaining_agent_conversations: remaining_agent_conversations,
								cost_per_messaging_conversation: cost_per_messaging_conversation,
								agent_cost_at_baseline: agent_cost_at_baseline,
								agent_cost_with_bots: agent_cost_with_bots
							};
				}
				return results;
			}
		},
		totals: {
			increments: {
				baseline: {},
				year1: {},
				year2: {},
				year3: {}
			},
			run: function() {
				for (const key in this.increments) {
					results.totals.savings[key] = results.care.fcr[key] + results.care.ai_scale[key] + results.care.efficiency[key];
					results.totals.growth[key] = results.sales.increase[key] + results.sales.average_order_value[key];
					results.totals.total_benefit[key] = results.totals.savings[key] + results.totals.growth[key];
					
					controller.update("total-savings-" + key, results.totals.savings[key]);
					controller.update("total-growth-" + key, results.totals.growth[key]);
					controller.update("total-total-benefit-" + key, results.totals.total_benefit[key]);
				}
				return results;
			},
		}
	}
}

var results = {
	sales: {
		increase: {},
		average_order_value: {},
		raw: {}
	},
	care: {
		fcr: {},
		ai_scale: {},
		efficiency: {},
		raw: {}
	},
	totals: {
		savings: {},
		growth: {},
		total_benefit: {},
		raw: {}
	}
}

const controller = {
	init: function() {
		config.inputs.fields.forEach(function(field) {
			$('[data-roi="' + field + '"]').on(config.inputs.eventField[field] || config.inputs.event, function(e) {
				debug.info("Field changed: ", {
					field: field,
					value: $(this).val()
				});
				if (config.inputs.callbacks[field] !== undefined) {
					config.inputs.callbacks[field]($(this).val(), results);
				}
				model.updateAll();
				model.calculate.sales.run();
				model.calculate.care.run();
				model.calculate.totals.run();
			});
		});
		debug.info("View Instantiated.");
	},
	update: function(field, value) {
		$('[data-roi="' + field + '"]').text(currency.format(value));
		if (config.outputs.callbacks[field] !== undefined) {
			config.outputs.callbacks[field](value, results, currency.format(value));
		}
	}
}

// Create our number formatter.
var currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});