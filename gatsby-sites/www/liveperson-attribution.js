import $ from 'jquery';

const Dictionary = require("./dictionary.json");

const Cookie = {
	set: function(name, value, days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
		document.cookie = name + "=" + value + expires + "; path=/; domain=liveperson.com;";
	},
	get: function(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for(let i = 0; i <ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
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
	Bind: function() {
		
		if (!window.formsBinded) {
			window.formsBinded = true;
			MktoForms2.whenReady(function(form) {
				LivePerson.FormReady(form);
				form.onValidate(function() {
					LivePerson.Validate(form);
				});
				
				form.onSuccess(function(values, forwardUrl) {
					LivePerson.ShowAfterMessage(form);
					window.dataLayer && dataLayer.push({'event' : 'request-demo-form'});
					return false;
				});
			});
		}
		
		$('form:not(.mktoForm)').each(function() {
			const formId = $(this).attr('mkto');
			if (!formId) return;
			MktoForms2.loadForm('https://info.liveperson.com', '501-BLE-979', formId);
		});		
		
	}
}

const LivePerson = {
	
	HydrateAttributes: function() {
		var leadSourceCookie = Cookie.get("lp-leadSource");
		var lsRef = Cookie.get("lp-lsRef");
		var lsTerms = Cookie.get("lp-lsTerms");
		var lsCampaign = Cookie.get("lp-lsCampaign");
		var lsSource = Cookie.get("lp-lsSource");
		var lsMedium = Cookie.get("lp-lsMedium");
		var lsContent = Cookie.get("lp-lsContent");
		var queryString = Cookie.get("lp-queryString");
		var _mkto_trk = Cookie.get("_mkto_trk");
		
		if (lsTerms === '') {
			lsTerms = Query.get('utm_term') || Query.get('keywords') || Query.get('keyword') || Query.get('oquery') || Query.get('query') || Query.get('_bk');
			Cookie.set('lp-lsTerms', lsTerms, 30);
		}
		
		if (lsCampaign === '') {
			lsCampaign = Query.get('utm_campaign');
			Cookie.set('lp-lsCampaign', lsCampaign, 30);
		}
		
		if (lsSource === '') {
			lsSource = Query.get('utm_source');
			Cookie.set('lp-lsSource', lsSource, 30);
		}
		
		if (lsMedium === '') {
			lsMedium = Query.get('utm_medium');
			Cookie.set('lp-lsMedium', lsMedium, 30);
		}
		
		if (lsContent === '') {
			lsContent = Query.get('utm_content');
			Cookie.set('lp-lsContent', lsContent, 30);
		}
		
		if (queryString === '') {
			queryString = window.location.search;
			Cookie.set('lp-queryString', queryString, 30);
		}
		
		if (lsRef === '') {
			Cookie.set('lp-lsRef', document.referrer, 1);
			lsRef = document.referrer;
		}
		
		var lpindex = lsRef.indexOf('liveperson.com') || lsRef.indexOf('us.platform.sh');
		
		if (leadSourceCookie === '') {
		
			if (Query.get('utm_medium') == 'remarketing') { // Remarketing
				Cookie.set('lp-leadSource', 'Remarketing', 30);
				leadSourceCookie = 'Remarketing';
				Cookie.set('lp-lsRef', lsRef, 30);
			} else if (Query.get('utm_medium') == 'display') { // Display
				Cookie.set('lp-leadSource', 'Display', 30);
				leadSourceCookie = 'Display';
				Cookie.set('lp-lsRef', lsRef, 30);
			} else if (Query.get('utm_medium') == 'social') { // Social
				Cookie.set('lp-leadSource', 'Social', 30);
				leadSourceCookie = 'Social';
				Cookie.set('lp-lsRef', lsRef, 30);
			} else if (Query.get('gclid')) { // Paid Search
				Cookie.set('lp-leadSource', 'Paid search', 30);
				leadSourceCookie = 'Paid search';
				Cookie.set('lp-lsRef', lsRef, 30);
			} else if (Query.get('msclkid')) { // Paid Search
				Cookie.set('lp-leadSource', 'Paid search', 30);
				leadSourceCookie = 'Paid search';
				Cookie.set('lp-lsRef', lsRef, 30);
			} else if (Query.get('utm_medium') === 'email') { // Email
				Cookie.set('lp-leadSource', 'Email', 1);
				leadSourceCookie = 'Email';
			} else if (lsRef.indexOf('go.liveperson.com') >= 0 || lsRef.indexOf('mkto-g0178.com') >= 0) {
				Cookie.set('lp-leadSource', 'Email', 1);
				leadSourceCookie = 'Email';
			} else if (lsRef === '' || !lsRef || (lpindex > -1 && lpindex < 15)) { // Direct
				Cookie.set('lp-leadSource', 'Direct', 1);
				leadSourceCookie = 'Direct';
				lsRef = document.location.href;
				Cookie.set('lp-lsRef', document.location.href, 1);
			} else {
				// Everything else
				for (var i = 0; i < Dictionary.organicSites.length; i++) {
					if (lsRef.indexOf(Dictionary.organicSites[i]) !== -1) {
						Cookie.set('lp-leadSource', 'Organic', 1);
						leadSourceCookie = 'Organic';
						return false;
					}
				}
				for (var i = 0; i < Dictionary.socialSites.length; i++) {
					if (lsRef.indexOf(Dictionary.socialSites[i]) !== -1) {
						Cookie.set('lp-leadSource', 'Social', 30);
						Cookie.set('lp-lsRef', lsRef, 30);
						leadSourceCookie = 'Social';
						return false;
					}
				}
				for (var i = 0; i < Dictionary.reviewSites.length; i++) {
					if (lsRef.indexOf(Dictionary.reviewSites[i]) !== -1) {
						Cookie.set('lp-leadSource', 'Review website', 30);
						Cookie.set('lp-lsRef', lsRef, 30);
						leadSourceCookie = 'Review website';
						return false;
					}
				}
				for (var i = 0; i < Dictionary.prSites.length; i++) {
					if (lsRef.indexOf(Dictionary.prSites[i]) !== -1) {
						Cookie.set('lp-leadSource', 'PR', 1);
						leadSourceCookie = 'PR';
						return false;
					}
				}
				
				Cookie.set('lp-leadSource', 'Other referral', 1);
				leadSourceCookie = 'Other referral';
			}
		
		}
	},
	
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
	
	FormReady: function(form) {
		
		var _this = this;
		// TODO Address form directly, not all labels.
		
		form.getFormElem().find('label').each(function() {
			$(this).attr('aria-label', $(this).attr('for'));
		});
		
	},
	
	ShowAfterMessage: function(form) {
		const element = form.getFormElem().next();
		console.log(element.text().replaceAll("”", "\"").replaceAll("’", "\""));
		var messageParagraph = $('<p>').addClass('thank-you-message').append(element.text().replaceAll("”", "\"").replaceAll("’", "\""));
		form.getFormElem().html("").append(messageParagraph);
	},
	
	Validate: function(form) {
										
		if (form.getValues().wholeName !== undefined && form.getValues().wholeName !== '') {
			LivePerson.SetFullName("FirstName", "LastName", "wholeName", form);
		}

		var formID = form.getId();
		var emailField = form.getFormElem().find('#Email').first();
		var emailVal = emailField.val();

		//Hotjar recording tag
		LivePerson.HotJar('Form fill - Attempt');

		if (!LivePerson.EmailGood(emailVal)) {
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
		
	},

	EmailGood: function(email) {
		email = email.toLowerCase();
		var valid = true;
		
		Dictionary.personalEmails.forEach(function(domain) {
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