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

const LivePerson = {
	
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
		
		callback(form);
	},
	
	Validate: function(form, callback) {
		form.onValidate(function () {
						
			if (form.getValues().wholeName !== undefined && form.getValues().wholeName !== '') {
				_this.SetFullName("FirstName", "LastName", "wholeName", form);
			}
	
			var formID = form.getId();
			var emailField = form.getFormElem().find('#Email');
			var emailVal = emailField.val();
	
			//Hotjar recording tag
			_this.HotJar('Form fill - Attempt');
	
			if (!_this.EmailGood(emailVal)) {
				form.submittable(false);
				form.showErrorMessage("Must be Business email.", emailField);
			} else { 			
				//continueDemandbase(formID);
				form.vals({
					'GCLID__c': gclid,
					'MSCLIKID__c': msclkid,
					'LeadSource': leadSourceCookie,
					'Referring_URL__c': lsRef,
					'campaignSearchKeywords__c': lsTerms,
					'campaignID__c': lsCampaign,
					'campaignSource__c': lsSource,
					'campaignMedium__c': lsMedium,
					'campaignCreative__c': lsContent
				});				
				form.submittable(true);
				vals = form.vals();
				console.log("Submitted values: " + JSON.stringify(vals));
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
	LivePerson
}