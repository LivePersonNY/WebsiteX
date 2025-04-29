import $ from 'jquery';

const Dictionary = require('./dictionary.json');

const Cookie = {
    set: function (name, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        var expires = '; expires=' + date.toGMTString();
        document.cookie = name + '=' + value + expires + '; path=/; domain=liveperson.com;';
    },
    get: function (cname) {
        let name = cname + '=';
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    },
};

const Query = {
    get: function (key) {
        var match = RegExp('[?&]' + key + '=([^&]*)').exec(window.location.search);
        var value = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
        return value;
    },
};

const MktoForms = {
    Bind: function () {
        if (!window.formsBinded) {
            window.formsBinded = true;
            MktoForms2.whenReady(function (form) {
                const formId = form.getId();
                const ctaString = Dictionary.ctas[formId];

                const buttonLabel = form.getFormElem().find('.mktoButton').text();

                form.getFormElem().siblings('a.mobileForm').find('.span1').text(buttonLabel);

                let formImplicit = LivePerson.FormReady(form);

                form.onValidate(function () {
                    LivePerson.Validate(form, formImplicit);
                });

                form.onSuccess(function (values, forwardUrl) {
                    window.dataLayer && dataLayer.push({ event: ctaString });

                    if (formId == 5133) {
                        console.log('5133 onSuccess');
                        return false;
                    }

                    $('.pane.gated').slideDown();
                    // Do not change anything in the following two lines
                    window.VWO = window.VWO || [];
                    VWO.event =
                        VWO.event ||
                        function () {
                            VWO.push(['event'].concat([].slice.call(arguments)));
                        };

                    // Replace the property values with your actual values
                    VWO.event('webpageFormSubmission', {
                        testprop: formId,
                    });

                    window.VWO.push(['track.goalConversion', 11]);
                    window.VWO.push(['track.goalConversion', 16]);
                    window.VWO.push(['track.goalConversion', 19]);
                    window.VWO.push(['track.goalConversion', 22]);
                    window.VWO.push(['track.goalConversion', 26]);
                    window.VWO.push(['track.goalConversion', 28]);

                    // if (document.querySelector('.mkto-resource-asset')) {
                    if (formId == 3524 || formId == 3458 || formId == 2581 || formId == 4067 || formId == 5104) {
                        location.href = `/thanks-download/?resourceasseturl=${encodeURIComponent(
                            document.querySelector('.mkto-resource-asset').dataset.resourceasseturl
                        )}`;
                        return false;
                    }
                    if (formId == 5041) {
                        location.href = `/thanks-download/?resourceasseturl=https%3A%2F%2Fliveperson.docsend.com%2Fview%2Fgy45wua3p94tz6hz`;
                        return false;
                    }
                    if (formId == 2580) {
                        location.href = '/thanks-demo/';
                        return false;
                    }
                    if (formId == 4956) {
                        sessionStorage.setItem('guided-demo-email', values.Email);
                        location.href = '/guided-demo-library/';
                        return false;
                    }
                    if (formId == 5011) {
                        location.href = 'https://demo.liveperson.com/demo/b8b3e093adac4b07bde3edcb2bca0e68';
                        return false;
                    }
                    if (formId == 5038) {
                        let playbookChosen = values.conversationalDigitalTransformationPlaybookIndustryChoice;
                        let playbookLink = 'https://liveperson.docsend.com/view/iqypsy9iap58m2iu';
                        if (playbookChosen === 'Airline') {
                            playbookLink = 'https://liveperson.docsend.com/view/hub4r8t64a68jv35';
                        } else if (playbookChosen === 'Banking') {
                            playbookLink = 'https://liveperson.docsend.com/view/qt6id3gkvz6fvdhe';
                        } else if (playbookChosen === 'Telecom') {
                            playbookLink = 'https://liveperson.docsend.com/view/3gi72tauxymi99xh';
                        } else if (playbookChosen === 'Agnostic') {
                            playbookLink = 'https://liveperson.docsend.com/view/iqypsy9iap58m2iu';
                        }
                        let messageParagraph = `<a href="${playbookLink}" target="_blank" rel="noreferrer noopener">Access the digital transformation playbook here!</a>`;
                        form.getFormElem().html('').append(messageParagraph);
                        return false;
                    }

                    LivePerson.ShowAfterMessage(form);

                    return false;
                });
            });
        }

        $('form:not(.mktoForm)').each(function () {
            const formId = $(this).attr('mkto');
            if (!formId) return;
            MktoForms2.loadForm('https://info.liveperson.com', '501-BLE-979', formId);
        });
    },
};

const LivePerson = {
    HydrateAttributes: function (callback) {
        var leadSourceCookie = Cookie.get('lp-leadSource');
        var lsRef = Cookie.get('lp-lsRef');
        var lsTerms = Cookie.get('lp-lsTerms');
        var lsCampaign = Cookie.get('lp-lsCampaign');
        var lsSource = Cookie.get('lp-lsSource');
        var lsMedium = Cookie.get('lp-lsMedium');
        var lsContent = Cookie.get('lp-lsContent');
        var lsGclid = Cookie.get('lp-lsGclid');
        var lsMsclkid = Cookie.get('lp-lsMsclkid');
        var queryString = Cookie.get('lp-queryString');
        var _mkto_trk = Cookie.get('_mkto_trk');

        if (!lsTerms) {
            // console.log('setting terms...');
            lsTerms =
                Query.get('utm_term') ||
                Query.get('keywords') ||
                Query.get('keyword') ||
                Query.get('oquery') ||
                Query.get('query') ||
                Query.get('_bk');
            Cookie.set('lp-lsTerms', lsTerms, 30);
            // console.log('setting terms... done.', lsTerms);
        }

        if (!lsCampaign) {
            // console.log('setting campaign...');
            lsCampaign = Query.get('utm_campaign');
            Cookie.set('lp-lsCampaign', lsCampaign, 30);
            // console.log('setting campaign... done.', lsCampaign);
        }

        if (!lsSource) {
            // console.log('setting source...');
            lsSource = Query.get('utm_source');
            Cookie.set('lp-lsSource', lsSource, 30);
            // console.log('setting source... done.', lsSource);
        }

        if (!lsMedium) {
            // console.log('setting medium...');
            lsMedium = Query.get('utm_medium');
            Cookie.set('lp-lsMedium', lsMedium, 30);
            // console.log('setting medium... done.', lsMedium);
        }

        if (!lsContent) {
            // console.log('setting content...');
            lsContent = Query.get('utm_content');
            Cookie.set('lp-lsContent', lsContent, 30);
            // console.log('setting content... done.', lsContent);
        }

        if (!queryString) {
            // console.log('setting string...');
            queryString = window.location.search;
            Cookie.set('lp-queryString', queryString, 30);
            // console.log('setting string... done.', queryString);
        }

        if (!lsRef) {
            // console.log('setting referrer...');
            Cookie.set('lp-lsRef', document.referrer, 1);
            lsRef = document.referrer;
            // console.log('setting referrer... done.', lsRef);
        }

        if (!lsGclid) {
            lsGclid = Query.get('gclid');
            Cookie.set('lp-lsGclid', lsGclid, 30);
        }

        if (!lsMsclkid) {
            lsMsclkid = Query.get('msclkid');
            Cookie.set('lp-lsMsclkid', lsMsclkid, 30);
        }

        var lpindex = lsRef.indexOf('liveperson.com');

        if (leadSourceCookie === '') {
            if (Query.get('utm_medium') == 'remarketing') {
                // Remarketing
                Cookie.set('lp-leadSource', 'Remarketing', 30);
                leadSourceCookie = 'Remarketing';
                Cookie.set('lp-lsRef', lsRef, 30);
            } else if (Query.get('utm_medium') == 'display') {
                // Display
                Cookie.set('lp-leadSource', 'Display', 30);
                leadSourceCookie = 'Display';
                Cookie.set('lp-lsRef', lsRef, 30);
            } else if (Query.get('utm_medium') == 'social') {
                // Social
                Cookie.set('lp-leadSource', 'Social', 30);
                leadSourceCookie = 'Social';
                Cookie.set('lp-lsRef', lsRef, 30);
            } else if (Query.get('gclid')) {
                // Paid Search
                Cookie.set('lp-leadSource', 'Paid search', 30);
                leadSourceCookie = 'Paid search';
                Cookie.set('lp-lsRef', lsRef, 30);
            } else if (Query.get('msclkid')) {
                // Paid Search
                Cookie.set('lp-leadSource', 'Paid search', 30);
                leadSourceCookie = 'Paid search';
                Cookie.set('lp-lsRef', lsRef, 30);
            } else if (Query.get('utm_medium') === 'email') {
                // Email
                Cookie.set('lp-leadSource', 'Email', 1);
                leadSourceCookie = 'Email';
            } else if (lsRef.indexOf('go.liveperson.com') >= 0 || lsRef.indexOf('mkto-g0178.com') >= 0) {
                Cookie.set('lp-leadSource', 'Email', 1);
                leadSourceCookie = 'Email';
            } else if (lsRef === '' || !lsRef || (lpindex > -1 && lpindex < 15)) {
                // Direct
                Cookie.set('lp-leadSource', 'Direct', 1);
                leadSourceCookie = 'Direct';
                lsRef = document.location.href;
                Cookie.set('lp-lsRef', document.location.href, 1);
            } else {
                console.log('Checking everything else for lead sources...');
                // Everything else
                for (var i = 0; i < Dictionary.organicSites.length; i++) {
                    if (lsRef.indexOf(Dictionary.organicSites[i]) !== -1) {
                        console.log('It is organic!');
                        Cookie.set('lp-leadSource', 'Organic', 1);
                        leadSourceCookie = 'Organic';
                    }
                }
                for (var i = 0; i < Dictionary.socialSites.length; i++) {
                    if (lsRef.indexOf(Dictionary.socialSites[i]) !== -1) {
                        console.log('It is social!');
                        Cookie.set('lp-leadSource', 'Social', 30);
                        Cookie.set('lp-lsRef', lsRef, 30);
                        leadSourceCookie = 'Social';
                    }
                }
                for (var i = 0; i < Dictionary.reviewSites.length; i++) {
                    if (lsRef.indexOf(Dictionary.reviewSites[i]) !== -1) {
                        console.log('It is review!');
                        Cookie.set('lp-leadSource', 'Review website', 30);
                        Cookie.set('lp-lsRef', lsRef, 30);
                        leadSourceCookie = 'Review website';
                    }
                }
                for (var i = 0; i < Dictionary.prSites.length; i++) {
                    if (lsRef.indexOf(Dictionary.prSites[i]) !== -1) {
                        console.log('It is public relations!');
                        Cookie.set('lp-leadSource', 'PR', 1);
                        leadSourceCookie = 'PR';
                    }
                }

                if (!leadSourceCookie) {
                    Cookie.set('lp-leadSource', 'Other referral', 1);
                    leadSourceCookie = 'Other referral';
                }
            }
        }

        window.lp_attr = $.extend(window.lp_attr || {}, {
            gclid: lsGclid,
            msclkid: lsMsclkid,
            leadSource: leadSourceCookie,
            referringUrl: lsRef,
            searchTerms: lsTerms,
            campaign: lsCampaign,
            campaignSource: lsSource,
            campaignMedium: lsMedium,
            campaignContent: lsContent,
            query: queryString,
            mkto: _mkto_trk,
            cookies: window.navigator ? window.navigator.cookieEnabled : false,
            onetrust: window.OnetrustActiveGroups,
        });

        console.log('Hydration complete.', window.lp_attr);

        if (callback) callback();
    },

    waitForChat: function (callback) {
        if (window.lpTag) {
            console.log('LP Tag present.');
            if (callback) callback();
        } else {
            setTimeout(this.waitForChat, 100);
        }
    },

    decodeHtml: function (html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    },

    GetCompany: function (email, form) {
        var emailSplit = email.split('@');
        emailSplit = emailSplit[1].split('.');

        var companyField = form.getFormElem().find('#Company').first();
        var companyValue = companyField.val();

        if (companyField.attr('type') == 'text') return companyValue;

        return emailSplit[0] || '';
    },

    SetFullName: function (a, b, c, form) {
        String.prototype.capitalize = function () {
            return this.replace(/(^)([a-z])/g, function (m, p1, p2) {
                return p1 + p2.toUpperCase();
            });
        };

        var fullName, first, last;
        fullName = form.getValues().wholeName;

        if (
            (fullName.match(/ /g) || []).length === 0 ||
            fullName.substring(fullName.indexOf(' ') + 1, fullName.length) === ''
        ) {
            first = fullName.capitalize();
            last = 'null';
        } else if (fullName.substring(0, fullName.indexOf(' ')).indexOf('.') > -1) {
            first =
                fullName.substring(0, fullName.indexOf(' ')).capitalize() +
                ' ' +
                fullName
                    .substring(fullName.indexOf(' ') + 1, fullName.length)
                    .substring(0, fullName.substring(fullName.indexOf(' ') + 1, fullName.length).indexOf(' '))
                    .capitalize();
            last = fullName.substring(first.length + 1, fullName.length).capitalize();
        } else {
            first = fullName.substring(0, fullName.indexOf(' ')).capitalize();
            last = fullName.substring(fullName.indexOf(' ') + 1, fullName.length).capitalize();
        }
        var vals = {
            FirstName: first,
            LastName: last,
            wholeName: fullName,
        };
        form.setValues(vals);
        return;
    },

    FormReady: function (form) {
        var _this = this;

        form.getFormElem().find('.opt-in-content').closest('.mktoFormRow').addClass('mktoRow-opt-in');

        let legalCountryCodes = ["BH", "BR", "HR", "SV", "FI", "IN", "IE", "MA", "PY", "PE", "PH", "RU", "SA", "SG", "SK", "LK", "SE", "TH", "AE", "GB", "US"]
        let oTLocation = '';
        window.OneTrust ? oTLocation = OneTrust.getGeolocationData().country : '';
        if (legalCountryCodes.includes(oTLocation)) {
            form.getFormElem().find('.opt-in-content:not(.noBox)').closest('.mktoFormRow').addClass('display-none');
            return 'true';
        } else {
            return '';
        }
    },

    ShowAfterMessage: function (form) {
        const element = form.getFormElem().next();
        console.log(element.text().replaceAll('”', '"').replaceAll('’', '"'));
        var messageParagraph = $('<p>')
            .addClass('thank-you-message')
            .append(element.html().replaceAll('”', '"').replaceAll('’', '"'));
        form.getFormElem().html('').append(messageParagraph);
    },

    BindToChat: function () {
        if (window.lpTag.newPage) {
            window.lpTag.newPage(window.location.href, {
                section: ['salesPages'],
            });
        }

        window.lpTag.sdes = window.lpTag.sdes || [];
        window.lpTag.sdes.push({
            type: 'ctmrinfo', //MANDATORY
            info: {
                cstatus: window.lp_attr.leadSource, // LEAD SOURCE
                ctype: window.lp_attr.mkto, // Munchkin cookie
                companyBranch: window.lp_attr.referringUrl, // REFERING URL
                socialId: window.lp_attr.query, // URL QUERY
                accountName: '', // AB TEST KEY
                role: window.lp_attr.searchTerms || '', // SEARCH TERMS
                imei: window.lp_attr.campaign || '', // CAMPAIGN NAME
            },
        });
        window.lpTag.sdes.push({
            type: 'personal', //MANDATORY
            personal: {
                company: window.location.href, // VISITOR COMPANY NAME
            },
        });

        console.log('Bind to chat complete.');
    },

    Validate: function (form, formImplicit) {
        if (form.getValues().wholeName !== undefined && form.getValues().wholeName !== '') {
            LivePerson.SetFullName('FirstName', 'LastName', 'wholeName', form);
        }

        var formID = form.getId();
        var emailField = form.getFormElem().find('#Email').first();
        var emailVal = emailField.val();

        if (!LivePerson.EmailGood(emailVal)) {
            console.log('Email Invalid ' + emailVal, form.vals());
            form.submittable(false);
            form.showErrorMessage('Must be Business email.', emailField);
        } else {
            var vals = {
                GCLID__c: window.lp_attr.gclid,
                MSCLIKID__c: window.lp_attr.msclkid,
                LeadSource: window.lp_attr.leadSource,
                Referring_URL__c: window.lp_attr.referringUrl,
                campaignSearchKeywords__c: window.lp_attr.searchTerms,
                campaignID__c: window.lp_attr.campaign,
                campaignSource__c: window.lp_attr.campaignSource,
                campaignMedium__c: window.lp_attr.campaignMedium,
                campaignCreative__c: window.lp_attr.campaignContent,
                cookiesEnabled: window.lp_attr.cookies,
                oneTrustActiveGroups: window.OnetrustActiveGroups,
                Company: LivePerson.GetCompany(emailVal, form),
                resourceasset: document.querySelector('.mkto-resource-asset')
                    ? document.querySelector('.mkto-resource-asset').dataset.resourceasset
                    : '',
                resourceAssetURL: document.querySelector('.mkto-resource-asset')
                    ? document.querySelector('.mkto-resource-asset').dataset.resourceasseturl
                    : '',
            };

            form.vals(vals);

            form.addHiddenFields({
                Referrer_URL_c: window.location.href,
                alexTestField: window.lp_attr.leadSource + ' , ' + window.lp_attr.referringUrl,
                thisIsPrevPage: window.previousPath,
                implicitCountry: formImplicit,
            });


            form.submittable(true);
            console.log('Submitting values:', form.vals());
        }
    },

    EmailGood: function (email) {
        email = email.toLowerCase();
        var valid = true;

        Dictionary.personalEmails.forEach(function (domain) {
            if (email.indexOf(domain) >= 0 || email === '' || email.indexOf('@') < 0 || email.indexOf('.') < 0) {
                valid = false;
            }
        });

        return valid;
    },
};

export { Query, Cookie, LivePerson, MktoForms };
