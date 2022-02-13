import $ from 'jquery';

const EmailBlacklist = require("./blacklist.json");

const Cookie = {
	set: function(name, value, days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
		document.cookie = name + "=" + value + expires + "; path=/; domain=liveperson.com;";
	},
	get: function(name) {
		return (name = new RegExp('(?:^|;\\s*)lp-leadSource=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
	}
}

const Query = {
	get: function(key) {
		var match = RegExp('[?&]' + key + '=([^&]*)').exec(window.location.search);
		var value = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		return value;
	}
}

const MktoForms = {
	Bind: function(callback) {
		if (window.formsBinded) return;
		if (!window.MktoForms2) {
			window.lpAttrWaitForM = setTimeout(function() {
				MktoForms.Bind(callback);
			}, 100);
		} else {
			window.formsBinded = true;
			clearTimeout(window.lpAttrWaitForM);
			if (callback) callback(window.MktoForms2, $);
		}
	}
}

const LivePerson = {
	
	decodeHtml: function(html) {
		var txt = document.createElement("textarea");
		txt.innerHTML = html;
		return txt.value;
	},
	
	SetFullName: function(a, b, c, form) {
		String.prototype.capitalize = function () {
			return this.replace(/(^)([a-z])/g, function (m, p1, p2) {
				return p1 + p2.toUpperCase();
			});
		};
		
		var fullName, first, last;
		fullName = form.getValues().wholeName;
		
		if ((fullName.match(/ /g) || []).length === 0 || fullName.substring(fullName.indexOf(" ") + 1, fullName.length) === "") {
			first = fullName.capitalize();
			last = "null";
		} else if (fullName.substring(0, fullName.indexOf(" ")).indexOf(".") > -1) {
			first = fullName.substring(0, fullName.indexOf(" ")).capitalize() + " " + fullName.substring(fullName.indexOf(" ") + 1, fullName.length).substring(0, fullName.substring(fullName.indexOf(" ") + 1, fullName.length).indexOf(" ")).capitalize();
			last = fullName.substring(first.length + 1, fullName.length).capitalize();
		} else {
			first = fullName.substring(0, fullName.indexOf(" ")).capitalize();
			last = fullName.substring(fullName.indexOf(" ") + 1, fullName.length).capitalize();
		}
		var vals = {
			FirstName: first,
			LastName: last,
			wholeName: fullName
		};
		form.setValues(vals);
		return;
	},
	
	FormReady: function(form, callback) {
		
		var _this = this;
		// TODO Address form directly, not all labels.
		
		form.getFormElem().find('label').each(function() {
			$(this).attr('aria-label', $(this).attr('for'));
		});
		
		if (callback) callback(form);
	},
	
	Validate: function(form, callback) {
		
		console.log("lp Validate", form);
		
		var _this = this;
		form.onValidate(function () {
			
			console.log("form onValidate", form);
						
			if (form.getValues().wholeName !== undefined && form.getValues().wholeName !== '') {
				_this.SetFullName("FirstName", "LastName", "wholeName", form);
			}
	
			var formID = form.getId();
			var emailField = form.getFormElem().find('#Email').first();
			var emailVal = emailField.val();
	
			//Hotjar recording tag
			_this.HotJar('Form fill - Attempt');
	
			if (!_this.EmailGood(emailVal)) {
				console.log("Email Invalid " + emailVal, form.vals());
				form.submittable(false);
				form.showErrorMessage("Must be Business email.", emailField);
			} else { 			
				//continueDemandbase(formID);
				form.vals({
					'GCLID__c': window.lp_attr.gclid,
					'MSCLIKID__c': window.lp_attr.msclkid,
					'LeadSource': window.lp_attr.leadSource,
					'Referring_URL__c': window.lp_attr.referringUrl,
					'campaignSearchKeywords__c': window.lp_attr.searchTearms,
					'campaignID__c': window.lp_attr.campaign,
					'campaignSource__c': window.lp_attr.campaignSource,
					'campaignMedium__c': window.lp_attr.campaignMedium,
					'campaignCreative__c': window.lp_attr.campaignContent
				});				
				form.submittable(true);
				console.log("Submitting values: " + JSON.stringify(form.vals()));
			}
		});
	},
	
	ShouldSubmit: function(form) {
		
	},
	
	EmailGood: function(email) {
		email = email.toLowerCase();
		var valid = true;
		
		EmailBlacklist.emails.forEach(function(domain) {
			if (email.indexOf(domain) >= 0 || email === '' || email.indexOf('@') < 0 || email.indexOf('.') < 0) {
				valid = false;
			}
		});
		
		return valid;
	},
	
	HotJar: function(tag) {
		window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
		hj('tagRecording', [tag]);
	}
	
}

export {
	Query,
	Cookie,
	LivePerson,
	MktoForms
}