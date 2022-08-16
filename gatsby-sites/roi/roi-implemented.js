import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.css';
import ROICalc from './roi-calc';

function setProgress(percent, selector, text, caption) {
    var circle = document.querySelector(selector);
    var circleText = document.querySelector(selector + "-val");
    var circleCap = document.querySelector(selector + "-cap");
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    
    const offset = circumference - percent / 100 * circumference;
    circleText.innerHTML = text || numberShort(percent);
    circleCap.innerHTML = caption || 'Savings';
    circle.style.strokeDashoffset = offset;
}


function numberShort(value, precision) {
    if (value < 1000) return numberShortFormat(locNumber(value, 'currency', undefined, 0, 0), '');
    if (value < 1000000) return numberShortFormat(locNumber(value / 1000, 'currency', undefined, precision, precision), 'K');
    if (value < 10000000) return numberShortFormat(locNumber(value / 1000000, 'currency', undefined, precision, precision), 'M');
    if (value < 1000000000) return numberShortFormat(locNumber(value / 1000000, 'currency', undefined, precision, precision), 'M');
    if (value < 10000000000) return numberShortFormat(locNumber(value / 1000000000, 'currency', undefined, precision, precision), 'B');
    if (value < 1000000000000) return numberShortFormat(locNumber(value / 1000000000, 'currency', undefined, precision, precision), 'B');
    return numberShortFormat(value, '');
}

function numberShortFormat(value, appender) {
    return value.toString().replace(/^0\./, '.') + appender;
}

function locNumber(value, type, curr, accuracy, accuracyMax, loc) {
    if (type == 'integer') return value.toLocaleString(loc || window.showLoc || 'en-US');
    return value.toLocaleString(loc || window.showLoc || 'en-US', {style: type || 'currency', currency: curr || window.showCurrency || 'USD', minimumFractionDigits: (accuracy>=0) ? accuracy : 2, maximumFractionDigits: (accuracyMax>=0) ? accuracyMax : 2});
}

function updateTableCells(cellName, valueObj, valueStyle, subKey, accuracy, accuracyMax) {
    const cols = [
        'baseline', 'year1', 'year2', 'year3'
    ];
    cols.forEach(function(item) {
        var value = valueObj[item];
        if (subKey) {
            value = valueObj[item][subKey];
        }
        if(accuracy == undefined){
            accuracy = valueStyle == 'percent' ? 1 : 2;
        }
        $(cellName + "-" + item).text(locNumber(value, valueStyle, undefined, accuracy, accuracyMax));
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const runRoi = function() {
    
    ROICalc.init({
        debug: true,
        inputs: {
            event: 'input'
        }
    });

    $('.jqslider-styles').each(function () {
        var sliderMin = $(this).data('min');
        var sliderMax = $(this).data('max');
        var sliderStep = $(this).data('step');
        var sliderValue = $(this).data('value').toLocaleString();
        
        $(this).slider({
            range: 'min',
            min: parseFloat(sliderMin),
            max: parseFloat(sliderMax),
            step: parseFloat(sliderStep),
            value: parseFloat(sliderValue.replace(/,/g, '')),
            slide: function (event, ui) {
                var pref = '';
                var suff = '';
                var type = $('#' + $(this).attr('id') + '-value').data('numtype') || 'integer';
                var symb = $('#' + $(this).attr('id') + '-value').data('symbol');
                var maxDec = 0;
                var minDec = 0;
                var value = ui.value;
                switch (type) {
                    case 'percent':
                        suff='%';
                        value = value / 100;
                        maxDec = 2;
                        break;
                    case 'currency':
                        maxDec = 2;
                        minDec = 2;
                        break;
                    default:
                        pref=symb;
                        break;
                }
                $('#' + $(this).attr('id') + '-value').val(locNumber(value, type, undefined, minDec, maxDec));
                //$('#' + $(this).attr('id') + '-value').val(pref + ui.value.toLocaleString() + suff);
                updateChart();
            }
        });
    });

    $('.slider-value').each(function () {
        // var testnum = $('#' + $(this).data('slider-ref')).slider('value');
        // testnum = testnum.toLocaleString();
        var pref = '';
        var suff = '';
        var maxDec = 0;
        var minDec = 0;
        var type = $(this).data('numtype') || 'integer';
        var symb = $(this).data('symbol');
        var value = $('#' + $(this).data('slider-ref')).slider('value');
        switch (type) {
            case 'percent':
                suff='%';
                type='percent';
                maxDec = 2;
                value = value / 100;
                break;
            case 'currency':
                maxDec = 2;
                minDec = 2;
                break;
            default:
                pref=symb;
                break;
        }
        $(this).val(locNumber(value, type, undefined, minDec, maxDec));
        //$(this).val(pref + $('#' + $(this).data('slider-ref')).slider('value').toLocaleString() + suff);
        $(this).on('input', function () {
            var val = $(this).val();
            var valFloat = parseFloat(val.replace(/[^0-9-.]/g, '')); 
            $('#' + $(this).data('slider-ref')).slider('value', valFloat);
            //$(this).val(pref + valFloat.toLocaleString() + suff);
            $(this).val(locNumber(valFloat, type, undefined, minDec, maxDec));
            updateChart();
        })
    });
    
        
    
        var updateChart = async function(){ 
            
            var currentDate = new Date();
            var thisYear = currentDate.getFullYear();
            
            // $('.label.year1').text(thisYear+1);
            // $('.label.year2').text(thisYear+2);
            // $('.label.year3').text(thisYear+3);
    
            await Promise.all([
                ROICalc.model.updateAll(),
                ROICalc.model.calculate.sales.run(),
                ROICalc.model.calculate.care.run(),
                ROICalc.model.calculate.totals.run()
            ]);
    
            var estimatedTotalBenefit = 0;
            //$('#two .bar').find('.tooltip').empty();
    
            var oneObj = {
                element: [{
                    name: "#two",
                    numbers: [ROICalc.results.totals.growth.year1, ROICalc.results.totals.savings.year1, ROICalc.results.totals.growth.year2, ROICalc.results.totals.savings.year2, ROICalc.results.totals.growth.year3, ROICalc.results.totals.savings.year3],
                    totals: [ROICalc.results.totals.total_benefit.year1, ROICalc.results.totals.total_benefit.year2, ROICalc.results.totals.total_benefit.year3]
                }]
            }
            
            
            var totalBenefit = ROICalc.results.totals.total_benefit.year1 + ROICalc.results.totals.total_benefit.year2 + ROICalc.results.totals.total_benefit.year3;
            var circle1val = ROICalc.results.sales.increase.year1 + ROICalc.results.sales.increase.year2 + ROICalc.results.sales.increase.year3;
            var circle2val = ROICalc.results.sales.average_order_value.year1 + ROICalc.results.sales.average_order_value.year2 + ROICalc.results.sales.average_order_value.year3;
            var fcr = ROICalc.results.care.fcr.year1 + ROICalc.results.care.fcr.year2 + ROICalc.results.care.fcr.year3;
            var circle5val = ROICalc.results.care.efficiency.year1 + ROICalc.results.care.efficiency.year2 + ROICalc.results.care.efficiency.year3;
            var circle4val = ROICalc.results.care.ai_scale.year1 + ROICalc.results.care.ai_scale.year2 + ROICalc.results.care.ai_scale.year3;
            setProgress(((circle1val / totalBenefit)*100).toFixed(), '#circle1', numberShort(circle1val, 0), 'Growth');
            setProgress(((circle2val / circle1val)*100).toFixed(), '#circle2', numberShort(circle2val, 0), 'Growth');
            setProgress(((fcr / totalBenefit)*100).toFixed(), '#circle3', numberShort(fcr, 0), 'Growth');
            setProgress(((circle4val / totalBenefit)*100).toFixed(), '#circle4', numberShort(circle4val, 0), 'Savings');
            setProgress(((circle5val / totalBenefit)*100).toFixed(), '#circle5', numberShort(circle5val, 0), 'Savings');
            
            $('#text_total_benefit').text(numberShort(totalBenefit));
            $('#text_year1').text(numberShort(ROICalc.results.totals.total_benefit.year1));
            $('#text_year2').text(numberShort(ROICalc.results.totals.total_benefit.year2));
            $('#text_year3').text(numberShort(ROICalc.results.totals.total_benefit.year3));
            $('#text-incr').text(numberShort(circle1val));
            $('#text-ai-savings').text(numberShort(circle4val));
            $('#text-efficiency').text(numberShort(circle5val));
            $('#cost-per-convo-phone').text(locNumber(ROICalc.model.inputs['care-cost-per-call'], 'currency'));
            $('#cost-per-convo-mess').text(locNumber((ROICalc.model.inputs['care-cost-per-call'] / ROICalc.model.calculate.care.increments.year3.eff_ratio), 'currency'));
            
            var conv_rate = ROICalc.model.inputs['sales-conv-rate']/100;
            updateTableCells("#rev", ROICalc.results.sales.increase, 'currency', undefined, '0', '0');
            $('.annual_traffic').text(ROICalc.model.inputs['sales-traffic'].toLocaleString());
            $('.conv_rate').text(locNumber(ROICalc.model.inputs['sales-conv-rate']/100, 'percent', null, 2));
            var web_orders = ROICalc.model.inputs['sales-traffic'] * conv_rate;
            $('.digi_orders').text(web_orders.toLocaleString());
            var started_convos = (ROICalc.model.inputs['sales-traffic'] - web_orders);
            $('.remaining_traffic').text(started_convos.toLocaleString());
            updateTableCells("#acr", ROICalc.model.calculate.sales.increments, 'percent', 'acc_rate');
            updateTableCells("#tmc", {
                baseline: 0,
                year1: started_convos * ROICalc.model.calculate.sales.increments.year1.acc_rate,
                year2: started_convos * ROICalc.model.calculate.sales.increments.year2.acc_rate,
                year3: started_convos * ROICalc.model.calculate.sales.increments.year3.acc_rate
            }, 'integer');
            updateTableCells("#scr", {
                baseline: conv_rate,
                year1: conv_rate * ROICalc.model.calculate.sales.increments.year1.conv_rate_m,
                year2: conv_rate * ROICalc.model.calculate.sales.increments.year2.conv_rate_m,
                year3: conv_rate * ROICalc.model.calculate.sales.increments.year3.conv_rate_m
            }, 'percent');
            updateTableCells("#mas", ROICalc.results.sales.raw, 'currency', 'mess_assisted_sales');
            updateTableCells("#avg", ROICalc.results.sales.raw, 'currency', 'avg_order_value');
            //updateTableCells("#total_convos", ROICalc.results.sales.raw, 'integer', 'total_convos');
            updateTableCells("#total_convos", {
                baseline: ROICalc.model.inputs['care-call-volume'],
                year1:ROICalc.model.inputs['care-call-volume'],
                year2:ROICalc.model.inputs['care-call-volume'],
                year3:ROICalc.model.inputs['care-call-volume']
            }, 'integer');
            updateTableCells("#shift", ROICalc.model.calculate.care.increments, 'percent', 'shift_rate');
            updateTableCells("#convos_shifted", ROICalc.results.care.raw, 'integer', 'conversations_shifted');
            updateTableCells("#fcr-perc", ROICalc.results.care.raw, 'percent', 'messaging_fcr');
            updateTableCells("#repeat", ROICalc.results.care.raw, 'integer', 'repeat_conversations');
            updateTableCells("#rem-mess", ROICalc.results.care.raw, 'integer', 'remaining_conversations');
            updateTableCells("#bot-rate", ROICalc.model.calculate.care.increments, 'percent', 'bcr_rate');
            updateTableCells("#bot", ROICalc.results.care.raw, 'integer', 'bot_contained_conversations');
            
            updateTableCells("#agent", ROICalc.results.care.raw, 'integer', 'remaining_agent_conversations');
            updateTableCells("#cost", ROICalc.results.care.raw, 'currency', 'agent_cost_at_baseline');
            
            updateTableCells("#cost", {
                baseline: ROICalc.model.inputs['care-cost-per-call'],
                year1:ROICalc.model.inputs['care-cost-per-call'],
                year2:ROICalc.model.inputs['care-cost-per-call'],
                year3:ROICalc.model.inputs['care-cost-per-call']
            }, 'currency');
            
            updateTableCells("#mess-eff", ROICalc.model.calculate.care.increments, 'decimal', 'eff_ratio');
            updateTableCells("#cost-convo", ROICalc.results.care.raw, 'currency', 'cost_per_messaging_conversation');
                    
            updateTableCells("#inc", ROICalc.results.sales.average_order_value, 'currency', undefined, '0', '0');
            updateTableCells("#fcr", ROICalc.results.care.fcr, 'currency', undefined, '0', '0');
            updateTableCells("#mess", ROICalc.results.care.ai_scale, 'currency', undefined, '0', '0');
            updateTableCells("#eff", ROICalc.results.care.efficiency, 'currency', undefined, '0', '0');
            
            $('#totals-year1').text(numberShort(ROICalc.results.totals.total_benefit.year1));
            $('#totals-year2').text(numberShort(ROICalc.results.totals.total_benefit.year2));
            $('#totals-year3').text(numberShort(ROICalc.results.totals.total_benefit.year3));
            //
            setTimeout(function () {
                $('#two .bar').each(function (index) {
                    // To better represent % of height
                    var numberAlter = (oneObj.element[0].numbers[index] / 1000000).toFixed(2);
                    //var numbersFull = numberAlter * 3;
                    var year = 0;
                    var barDivider = .33;
                    if(index > 1 && index < 4){
                        year = 1;
                        barDivider = .66;
                    } else if(index > 3){
                        year = 2;
                        barDivider = 1;
                    }
                    var calcHeight = ((oneObj.element[0].numbers[index] / oneObj.element[0].totals[year]) * 100) * barDivider;
                    //console.log('year: ' + year + ', number: ' + oneObj.element[0].numbers[index] + ', total:' + oneObj.element[0].totals[year] + ', height:' + calcHeight);
                    $(this).css({
                        'height': calcHeight + '%'
                    });
                    // Create tooltip
                    $(this).find('.tooltip').text(numberShort(oneObj.element[0].numbers[index], 2));
                    // $('<span class="tooltip">' + oneObj.element[0].numbers[index] + 'M</span>')
                    //     .prependTo(this);
                });
    
                $('#two .total-year-benefit').each(function (year) {
                    estimatedTotalBenefit += oneObj.element[0].totals[year];
                    //var numberAlter = (oneObj.element[0].totals[year] / 1000000).toFixed(2);
                    $(this).text(numberShort(oneObj.element[0].totals[year], 2));
                    //var estimatedTotalBenefitAlter = (estimatedTotalBenefit / 1000000).toFixed(2);
                    $('#two .estimated-total-benefit').text(numberShort(estimatedTotalBenefit, 2));
                });
    
                
    
            }, 500);
        }
    
        $('.industry-select').change(function(){
            var salesConvRate = $(this).find(':selected').data('sales-conv-rate');
            var salesAvgOrder = $(this).find(':selected').data('sales-avg-order');
            var careCostPerCall = $(this).find(':selected').data('care-cost-per-call');
            var careContactResolution = $(this).find(':selected').data('care-contact-resolution');
            $('#slider2-value').val(salesConvRate);
            $('#slider2').slider('value', salesConvRate);
            $('#slider3-value').val(salesAvgOrder);
            $('#slider3').slider('value', salesAvgOrder);
            $('#slider5-value').val(careCostPerCall);
            $('#slider5').slider('value', careCostPerCall);
            $('#slider6-value').val(careContactResolution);
            $('#slider6').slider('value', careContactResolution);
            ROICalc.init();
            updateChart();
        })
    
        updateChart();
    
        $('.calc-container').addClass('loaded');

}

export default runRoi;