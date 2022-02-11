// cookie functions
function setCookie(name, value, days) {
	var date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	var expires = "; expires=" + date.toGMTString();
	document.cookie = name + "=" + value + expires + "; path=/; domain=liveperson.com;";
}

function formSubmissionComplete(pixelEvent, gtmEvent) {

	var downloads = [
		'get report',
		'watch now'
	];
	if (downloads.indexOf(pixelEvent) >= 0) {
		dataLayer.push({'event' : 'resource-download-form'});
	}
	if (pixelEvent === 'request consultation') {
		dataLayer.push({'event' : 'request-consultation-form'});
	}
    ga('send', 'event', 'form', 'submit', pixelEvent);
    dataLayer.push({'event' : gtmEvent || 'form-submitted'});
    var capterra_vkey = '2204790610e633c11ee2cfb2140ab50a',
    capterra_vid = '491',
    capterra_prefix = (('https:' == document.location.protocol) ? 'https://ct.capterra.com' : 'http://ct.capterra.com');
    (function() {
    var ct = document.createElement('script'); ct.type = 'text/javascript'; ct.async = true;
    ct.src = capterra_prefix + '/capterra_tracker.js?vid=' + capterra_vid + '&vkey=' + capterra_vkey;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ct, s);
    })();
    window.uetq = window.uetq || [];
    window.uetq.push
    ({ 'ec':'form', 'ea':'submit', 'el':pixelEvent});

    (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"21000157"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");

	//Hotjar recording tag
	window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
	hj('tagRecording', ['Form fill - Complete']);
}

function getParam(p) {
	var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
	var gclid = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	return gclid;
}

var leadSourceCookie = (name = new RegExp('(?:^|;\\s*)lp-leadSource=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
var lsRef = (name = new RegExp('(?:^|;\\s*)lp-lsRef=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
var lsTerms = (name = new RegExp('(?:^|;\\s*)lp-lsTerms=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
var lsCampaign = (name = new RegExp('(?:^|;\\s*)lp-lsCampaign=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
var lsSource = (name = new RegExp('(?:^|;\\s*)lp-lsSource=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
var lsMedium = (name = new RegExp('(?:^|;\\s*)lp-lsMedium=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
var lsContent = (name = new RegExp('(?:^|;\\s*)lp-lsContent=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
var queryString = (name = new RegExp('(?:^|;\\s*)lp-queryString=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
var _mkto_trk = (name = new RegExp('(?:^|;\\s*)_mkto_trk=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
var convoId, leadData;

if (lsTerms === '') {
	lsTerms = getParam('utm_term');
	if (!lsTerms) { lsTerms = getParam('keywords'); }
	if (!lsTerms) { lsTerms = getParam('keyword'); }
	if (!lsTerms) { lsTerms = getParam('oquery'); }
	if (!lsTerms) { lsTerms = getParam('query'); }
	if (!lsTerms) { lsTerms = getParam('_bk'); }
	setCookie('lp-lsTerms', lsTerms, 30);
}

if (lsCampaign === '') {
	lsCampaign = getParam('utm_campaign');
	setCookie('lp-lsCampaign', lsCampaign, 30);
}

if (lsSource === '') {
	lsSource = getParam('utm_source');
	setCookie('lp-lsSource', lsSource, 30);
}

if (lsMedium === '') {
	lsMedium = getParam('utm_medium');
	setCookie('lp-lsMedium', lsMedium, 30);
}

if (lsContent === '') {
	lsContent = getParam('utm_content');
	setCookie('lp-lsContent', lsContent, 30);
}

if (queryString === '') {
	queryString = window.location.search;
	setCookie('lp-queryString', queryString, 30);
}

if (lsRef === '') {
	setCookie('lp-lsRef', document.referrer, 1);
	lsRef = document.referrer;
}
var lsOrganic = ['www.google.', 'com.google', 'www.bing.', 'www.yahoo.', 'search.yahoo.', 'cn.bing.'];
var lsSocial = ['plus.url.google.com', 'plus.google.com', 'facebook.com', 'linkedin.com', 'twitter.com', '//t.co', 'youtube.com', 'pinterest.com', 't.umblr.com', 'instagram.com', 'lnkd.in', 'com.linkedin'];
var lsReview = ['capterra.', 'capmain.com', 'crozdesk.com', 'discovercloud.com', 'financesonline.com', 'g2crowd.com', 'consumersadvocate.org', 'saasgenius.com', 'softwareadvice.com', 'getapp.com', 'itcentralstation.com', 'financesonline.com', 'business.com', 'saasgenius.com', 'itcentralstation.com', 'selecthub.com', 'siftery.com', 'picksaas.com', 'bestcompany.com', 'softwaresuggest.com', 'serchen.com', 'ketchell.com', 'shanebarker.com'];
var lsPR = ['www.wsj.com', 'www.emarketer.com', 'www.inc.com', 'www.msn.com', 'www.bandt.com.au', 'www.christianpost.com', 'sg.news.yahoo.com', 'www.nasdaq.com', 'www.bizjournals.com', 'www.bloomberg.com', 'www.crmirewards.com', 'www.bizreport.com', 'mobilemarketingwatch.com', 'www.applianceretailer.com.au', 'www.independent.ie', 'detroit.cbslocal.com', 'truepundit.com', 'www.ibm.comblogs', 'www.businessinsider.com', 'www.everyjoe.com', 'www.bizreport.com', 'praisecleveland.com', 'www.breitbart.com', 'www.newsweek.com', 'uk.news.yahoo.com', 'redpilltimes.com', 'wtkr.com', 'www.cbs8.com', 'next.aftrs.edu.au', 'stlouis.cbslocal.com', 'baltimore.cbslocal.com', 'connecticut.cbslocal.com', 'philadelphia.cbslocal.com', 'denver.cbslocal.com', 'miami.cbslocal.com', 'dfw.cbslocal.com', 'www.studyfinds.org', 'www.chainstoreage.com', 'ciokurator.com', 'istart.com.au', 'www.medianet.com.au', 'www.mybusiness.com.au', 'www.dailymail.co.uk', 'www.governmentnews.com.au', 'marketingland.com', 'thenextweb.com', 'venturebeat.com', 'www.itwire.com', 'www.loyalty360.org', 'www.nojitter.com', 'www.huffingtonpost.de', 'www.huffingtonpost.com', 'www.nytimes.com', 'www.amny.com', 'www.metro.us', 'www.crainsnewyork.com', 'www.tnooz.com', 'www.travolution.com', 'www.thegrocer.co.uk', 'www.mycustomer.com', 'www.marconomy.de', 'www.cmo.com.au', 'www.cmo.com', 'www.usatoday.com', 'www.usnews.com', 'www.handelsblatt.com', 'fortune.com', 'www.entrepreneur.comus', 'www.financial-news.co.uk', 'www.ft.com', 'www.itproportal.com', 'www.smartertravel.com', 'www.smartcustomerservice.com', 'businesstech.co.za', 'skift.com', 'www.ags-airlinegroundservices.com', 'airlinegeeks.com', 'www.mobilemarketer.com', 'www.frequentbusinesstraveler.com', 'www.lead-digital.de', 'insidesmallbusiness.com.au', 'www.topbots.com', 'www.ibusiness.de', 'www.werbewoche.ch', 'www.contentmanager.de', 'www.markenartikel-magazin.de', 'www.tagesspiegel.de', 'www.startupsense.net', 'www.standard.co.uk', 'www.thetimes.co.uk', 'www.nbc29.com', 'www.richmond.com', 'www.computerworld.com.au', 'www.computerworld.com', 'www.itnews.com.au', 'www.globaladvisors.biz', 'magazineclick.com', 'www.thenibbler.com.au', 'thehustle.co', 'www.thrillist.com', 'qz.com', 'www.destinationcrmblog.com', 'www.nbcnews.com', 'www.cnbc.com', 'www.cnn.com', 'www.ibtimes.com', 'www.marketwatch.com', 'www.investors.com', 'www.retaildive.com', 'www.digitalcommerce360.com', 'www.wiwo.de', 'www.traveltalkmag.com.au', 'www.adnews.com.au', 'www.rfigroup.com', 'www.dynamicbusiness.com.au', 'www.deutschlandfunk.de', 'martechseries.com', 'martechtoday.com', 'www.retaildive.com', 'risnews.com', 'www.zdnet.de', 'www.content-technology.com', 'www.zdnet.com', 'www.theaustralian.com.au', 'www.marketingdive.com', 'www.techrepublic.com', 'www.newsbytesapp.com', 'www.ubergizmo.com', 'techgroundnews.com', 'sk8.tech', 'www.digitaltrends.com', 'www.inquisitr.com', 'www.macrumors.com', 'www.techtimes.com', 'appleinsider.com', 'techcrunch.com', 'www.thedrum.com', 'www.travelweekly.com.au', 'www.bbc.com', 'www.futureofeverything.io', 'www.bankingtech.com', 'www.finextra.com', 'wwd.com', 'www.cmswire.com', 'adexchanger.com', 'www.cable.co.uk', 'www.globalbankingandfinance.com', 'www.thesun.ie', 'internetretailing.net', 'www.express.co.uk', 'www.ciodive.com', 'www.paymentssource.com', 'chatbotsmagazine.com', 'www.marketingweek.com', 'www.pymnts.com', 'www.autonews.com', 'www.mediapost.com', 'www.foxbusiness.com', 'www.reuters.com', 'adage.com', 'www.adweek.com', 'www.ap.org', 'www.buzzfeed.com', 'digiday.com', 'www.fastcompany.com', 'www.forbes.com', 'hbr.org', 'mashable.com', 'www.recode.net', 'www.theverge.com', 'www.washingtonpost.com', 'www.vice.com', 'www.americanbanker.com', 'www.wired.com', 'arstechnica.com', 'bankinnovation.net', 'www.banktech.com', 'www.bankingtech.com', 'bgr.com', 'www.chiefmarketer.com', 'www.cnet.com', 'www.engadget.com', 'gizmodo.com', 'www.informationweek.com', 'multichannelmerchant.com', 'www.pcmag.com', 'www.retailtouchpoints.com', 'stores.org', 'www.techradar.com', 'www.theinquirer.net', 'www.travelpulse.com', 'www.economist.com', 'www.theguardian.com', 'www.itproportal.com', 'www.metro.us', 'www.techworld.com', 'www.cbr.com', 'www.information-age.com', 'www.financedigest.com', 'digitalmarketingmagazine.co.uk', 'cxm.co.uk', 'cxm.world', 'www.thebanker.com', 'www.marketingtechnews.net', 'www.computerweekly.com', 'uxmag.com', 'businessnewsdaily.com', 'prnewswire.com', 'channelpronetwork.com', 'crn.com', 'e-channelnews.com', 'channelpartnersonline.com', 'channelnomics.com', 'channelbuzz.ca', 'channelfutures.com', 'comptia.org', 'channele2e.com', 'channelinfo.net', 'channelinsider.com', 'smbnation.com', 'ascii.com', 'the2112group.com', '451research.com', 'channelemea.com', 'canalys.com', 'iteuropa.com', 'channelexecutivemag.com', 'independent.co.uk'];

function lsList() {
	for (i = 0; i < lsOrganic.length; i++) {
		if (lsRef.indexOf(lsOrganic[i]) !== -1) {
			setCookie('lp-leadSource', 'Organic', 1);
			leadSourceCookie = 'Organic';
			return false;
		}
	}
	for (i = 0; i < lsSocial.length; i++) {
		if (lsRef.indexOf(lsSocial[i]) !== -1) {
			setCookie('lp-leadSource', 'Social', 30);
			setCookie('lp-lsRef', lsRef, 30);
			leadSourceCookie = 'Social';
			return false;
		}
	}
	for (i = 0; i < lsReview.length; i++) {
		if (lsRef.indexOf(lsReview[i]) !== -1) {
			setCookie('lp-leadSource', 'Review website', 30);
			setCookie('lp-lsRef', lsRef, 30);
			leadSourceCookie = 'Review website';
			return false;
		}
	}
	for (i = 0; i < lsPR.length; i++) {
		if (lsRef.indexOf(lsPR[i]) !== -1) {
			setCookie('lp-leadSource', 'PR', 1);
			leadSourceCookie = 'PR';
			return false;
		}
	}

	setCookie('lp-leadSource', 'Other referral', 1);
	leadSourceCookie = 'Other referral';
}

var lpindex = lsRef.indexOf('liveperson.com') || lsRef.indexOf('us.platform.sh');

if (leadSourceCookie === '') {

	if (getParam('utm_medium') == 'remarketing') { // Remarketing
		setCookie('lp-leadSource', 'Remarketing', 30);
		leadSourceCookie = 'Remarketing';
		setCookie('lp-lsRef', lsRef, 30);
	} else if (getParam('utm_medium') == 'display') { // Display
		setCookie('lp-leadSource', 'Display', 30);
		leadSourceCookie = 'Display';
		setCookie('lp-lsRef', lsRef, 30);
	} else if (getParam('utm_medium') == 'social') { // Social
		setCookie('lp-leadSource', 'Social', 30);
		leadSourceCookie = 'Social';
		setCookie('lp-lsRef', lsRef, 30);
	} else if (getParam('gclid')) { // Paid Search
		setCookie('lp-leadSource', 'Paid search', 30);
		leadSourceCookie = 'Paid search';
		setCookie('lp-lsRef', lsRef, 30);
	} else if (getParam('msclkid')) { // Paid Search
		setCookie('lp-leadSource', 'Paid search', 30);
		leadSourceCookie = 'Paid search';
		setCookie('lp-lsRef', lsRef, 30);
	} else if (getParam('utm_medium') === 'email') { // Email
		setCookie('lp-leadSource', 'Email', 1);
		leadSourceCookie = 'Email';
	} else if (lsRef.indexOf('go.liveperson.com') >= 0 || lsRef.indexOf('mkto-g0178.com') >= 0) {
		setCookie('lp-leadSource', 'Email', 1);
		leadSourceCookie = 'Email';
	} else if (lsRef === '' || !lsRef || (lpindex > -1 && lpindex < 15)) { // Direct
		setCookie('lp-leadSource', 'Direct', 1);
		leadSourceCookie = 'Direct';
		lsRef = document.location.href;
		setCookie('lp-lsRef', document.location.href, 1);
	} else {
		lsList(); // Everything else
	}

}


// cookie user with gclid
var gclid = getParam('gclid');
if (gclid) {
	//console.log('gclid is ' + gclid);
	var gclsrc = getParam('gclsrc');
	if (!gclsrc || gclsrc.indexOf('aw') !== -1) {
		setCookie('gclid', gclid, 30);
	}
} else {
	gclid = (name = new RegExp('(?:^|;\\s*)gclid=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
}

// cookie user with msclkid
var msclkid = getParam('msclkid');
if (msclkid) {
	setCookie('msclkid', msclkid, 30);
} else {
	msclkid = (name = new RegExp('(?:^|;\\s*)msclkid=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
}

function mobileCheck() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

window.mobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
	var r = (mobile.Android() || mobile.BlackBerry() || mobile.iOS() || mobile.Opera() || mobile.Windows()) || [];
	var dev = r.pop();
	console.log(dev);
    return dev;
  }
};


var pixelFire = false;
var pixelFireSalesBot = false;
var JWTPayload = {
    "type": "ctmrinfo",  //MANDATORY
    "info": {
       "cstatus": leadSourceCookie, // LEAD SOURCE
       "ctype": _mkto_trk,  // Munchkin cookie
       "companyBranch": lsRef,  // REFERING URL
       "socialId": queryString,  // URL QUERY
       "accountName": typeof ABTest !== 'undefined' ? ABTest : "",  // AB TEST KEY
       "role": lsTerms || '',  // SEARCH TERMS
       "imei": lsCampaign || '',  // CAMPAIGN NAME
    }
};
console.log(JWTPayload);
console.log(window.device);

var personalInfo = {
    "type": "personal", //MANDATORY
    "personal": {
		"company": window.location.href // VISITOR COMPANY NAME
    }
}

var cart = {
    "type": "cart",  //MANDATORY
    "total": 1,  //TOTAL VALUE OF THE CART AFTER DISCOUNT
    "currency": "USD",  //CURRENCY CODE
    "numItems": 6,  //NUMBER OF ITEMS IN CART
    "products": [{
        "product": {
	        "name": leadSourceCookie.toLowerCase() + "-" + (mobileCheck() ? "mobile" : "desktop"),  //PRODUCT NAME
	        "category": (leadSourceCookie.toLowerCase() == 'direct') ? 'imessage' : 'normal',  //PRODUCT CATEGORY NAME
	        "sku": window.mobile.any() || 'Desktop',  //PRODUCT SKU OR UNIQUE IDENTIFIER
	        "price": 1  //SINGLE PRODUCT PRICE
        },
		"quantity": 1  //NUMBER OF PRODUCTS
    }]
}
console.log(cart.products[0].product);

var pushSDEData = function() {
	lpTag.sdes.push(JWTPayload);
	lpTag.sdes.push(personalInfo);
	lpTag.sdes.push(cart);
}

function messageStartBot(message){
	if ($('body:not(.cio) #lpChat div[data-lp-point="lines_area"]').length < 1) {
		setTimeout(function () {
			messageStartBot(message);
		}, 500);
	} else {
		sendDirectMessage(message);
	}
}

function updateLpTags() {
	lpTag.sdes = lpTag.sdes||[];
	pushSDEData();
	//setInterval(pushSDEData, 2000);
	if(localStorage.getItem('applyInputMute') === 'yes'){
		console.log('applyInputMute is true, engagementId is ' + localStorage.getItem('engagementId'));
		showMenuHack(localStorage.getItem('engagementId'));
	}
	lpTag.events.bind("lpUnifiedWindow", "conversationInfo", function(d) {
		console.log('Convo Info', d);
		if (d.conversationId) {
			convoId = d.conversationId;
			$.ajax({
				url: 'https://mktg-util.liveperson.com/api/temp-cache/' + convoId,
				method: 'PUT',
				contentType: "application/json",
				processData: false,
				data: JSON.stringify(leadData)
			}).done(function(result) {
				console.log('Temp cache updated for ' + convoId, result);
			});
		}
		inputUnMute();
		localStorage.setItem('applyInputMute', 'no');
			if (d.skill == 1236328214 && !pixelFireSalesBot) {
				dataLayer.push({'event':'bot-connected'});
				pixelFireSalesBot = true;
			}
			if (d.skill == 1989549130) {
				ga('send', 'event', 'Website chat', 'Conversation started', 'Convo X Bot');
			}
			if (d.skill == 1875640030) {
				ga('send', 'event', 'Website chat', 'Conversation started', 'Meeting Bot - SELF');
			}
			if (d.skill == 17 || d.skill == 1236327114 || d.skill == 1522489114 && !pixelFire) {
				console.log('pixel Fired.');
				//dataLayer.push({'event':'agent-connected'});
				pushSDEData();
				pixelFire = true;
				//formSubmissionComplete('Sales agent connections', 'agent-connected');

			}
		});
	lpTag.events.bind("LP_OFFERS", "OFFER_CLICK", function(e) {
		console.log(e);
		ga('send', 'event', 'Website chat', 'Engagement clicked', 'Engagement');
		//Hotjar recording tag
		window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
		hj('tagRecording', ['Engagement clicked']);
		if (e.engagementId == 1864678630 || e.engagementId == 2455213230 || e.engagementId == 2499891030 || e.engagementId == 2499863530){
			ga('send', 'event', 'Website chat', 'Engagement clicked', 'Meeting Bot - SELF');
			console.log('Hero engagement clicked');
			messageStartBot('Request Demo');
		} else if (e.engagementId == 2103873030){
			messageStartBot('Request Info');
		} else if (e.engagementId == 2521602130){
			messageStartBot('Download Automation for WhatsApp guide');
		} else if (e.engagementId == 2582925930){
			messageStartBot('I\'d like to chat with an agent about a custom plan.');
		} else if (e.engagementId == 2308971330){
			messageStartBot('I\'m interested in becoming a partner.');
		} else if (e.engagementId == 1940071730){
			ga('send', 'event', 'Website chat', 'Engagement clicked', 'Convo X Bot');
			console.log('convo-x engagement start');
			setTimeout(function(){
				showMenuHack(e.engagementId);
			}, 1500);
		} else if (e.engagementId == 2190768130){
			messageStartBot('Request Pricing');
		} else if (e.engagementId != 1911263130 && e.engagementId != 1872297230 && typeof messageFromPage !== undefined){
			console.log('messsageFromPage found as: ' + messageFromPage);
			messageStartBot(messageFromPage);
		} else {
			console.log('Execute menu hack...');
			setTimeout(showMenuHack, 1500);
		}
	});

	lpTag.events.bind("LP_OFFERS", "OFFER_IMPRESSION", function(e) {
		console.log('Engagement offered' , e);
		setTimeout(function(){
			$('body').addClass('engagement-offered');
		},500);

	});

}

function waitForLpTags() {
	if (window.lpTag) {
		updateLpTags();
	} else {
		setTimeout(waitForLpTags, 500);
	}
}

function sendLPButtonText(target) {
	var text = $(target).html().replace(/&nbsp;/g, ' ');
    $('.lpview_form_textarea').val(text);
	$('.lp_paper_plane_button').prop('disabled', false).trigger('click');
	$('.conversation-starter').hide();
}

// same as above but you pass the message as a parameter
function sendDirectMessage(message) {
    $('.lpview_form_textarea').val(message);
	$('.lp_paper_plane_button').prop('disabled', false).trigger('click');
	$('.conversation-starter').hide();
}


var conversationStarter = false;
var mutedTimeout = false;

function inputMute() {
	if(document.querySelector('.lp_bottom_area')){
 		document.querySelector('.lp_bottom_area').style.display = 'none';
 		document.querySelector('.lp_location_bottom').style.opacity = '.25';
 		document.querySelector('.lp_lpview_agent_is_typing.lp_agent_is_typing').style.color = '#000000';
 	}
}

function inputUnMute() {
	if(document.querySelector('.lp_bottom_area')){
 		document.querySelector('.lp_bottom_area').style.display = 'block';
 		document.querySelector('.lp_location_bottom').style.opacity = '1';
 		document.querySelector('.lp_lpview_agent_is_typing.lp_agent_is_typing').style.color = '#6d6e70';
 	}
}

function showMenuHack(engagementId) {
	console.log('Trying to run hack...');
	var engagementId = engagementId;
	if ($('body:not(.cio) #lpChat div[data-lp-point="lines_area"]').length < 1) {
		setTimeout(function(){
			showMenuHack(engagementId);
		}, 500);
	} else {
		console.log('Ok. Running hack.');
		localStorage.setItem('applyInputMute', 'yes');
		if(localStorage.getItem('engagementId') === null){
			localStorage.setItem('engagementId', engagementId);
			console.log('setting localStorage engID ' + engagementId);
		}
		else{
			console.log('this is the current engID ' + engagementId);
		}
		console.log('adding local storage');
		inputMute();

		if (document.querySelector('.lp_header .lp_top-text') && document.querySelector('.lp_header .lp_top-text').textContent.toLowerCase() === 'message us'){
			if(!conversationStarter && $('body.cio #lp_line_0 .lp_title_text').text() === 'How can I help you today?'){
				$('body.cio #lp_line_0 .lp_title_text').text('I\'m the LivePerson concierge bot. I can tell you more about AI-powered conversational commerce.');
			}
			else if(!conversationStarter && $('body').hasClass('rapid-deploy')){
				conversationStarter = true;
				$('#lp_line_0').remove();
				var message = 'Let\'s talk about upgrading my account.';
				sendDirectMessage(message);
			}
			else if(engagementId == 1940071730){
				console.log('convo-x window');
				conversationStarter = true;
				inputMute();
			}

		}
	}
}

(function ($) {

	setInterval(function () {

		if (document.querySelector('.lp_slider') && !$('.lp_notification_number.wsdkNotification').hasClass('lpHide') && $('.lp_agent.lp_chat_line_wrapper:last-child .lp_title_text, .lp_agent.lp_chat_line_wrapper:nth-last-child(2) .lp_title_text').text().indexOf('https://lvper.sn') > -1) {
			document.querySelector('.lp_slider').click();
			document.querySelector('.lpview_form_textarea').focus();
			document.querySelector('.lpview_form_textarea').blur();
		}

	}, 1000);

	//GA chat tracking
	setTimeout(waitForLpTags, 500);

	var blacklist = ['@aim.com', '@aol.com', '@att.net', '@comcast.net', '@earthlink', '@email', '@embarqmail', '@facebook.com', '@gmail', '@gmx', '@googlemail', '@hotmail.co.uk', '@hotmail', '@hush', '@icloud', '@inbox.com', '@juno', '@live.', '@mac.', '@mail.com', '@me.com', '@msn', '@outlook', '@rocketmail', '@safe-mail', '@sbcglobal', '@tmails', '@yahoo', '@yandex', '@verizon.net', '@ymail', '@yourdomain.com', '@247.ai',
	'@247-inc',
	'@8x8',
	'@bold360',
	'@creativevirtual',
	'@dimelo',
	'@drift',
	'@five9',
	'@frontapp',
	'@genesys',
	'@genesyslab',
	'@genesysmicro',
	'@iadvize',
	'@intercom',
	'@inthechat',
	'@kayako',
	'@kustomer',
	'@layer',
	'@livechatinc',
	'@nuance',
	'@olark',
	'@pubble',
	'@pypestream',
	'@salemove',
	'@salesforce',
	'@snapengage',
	'@sparkcentral',
	'@userlike',
	'@verint',
	'@verintsystems',
	'@wechat',
	'@zendesk',
	'@zopim'];

	//because the form is being loaded from the marketo front-end, use whenReady
	MktoForms2.whenReady(function (form) {
		
		$('label').each(function() {
			$(this).attr('aria-label', $(this).attr('for'));
		});

		form.onValidate(function () {

			if (form.getValues().wholeName !== undefined && form.getValues().wholeName !== '') {
				splitFullName("FirstName", "LastName", "wholeName", form);
			}

			formID = form.getId();
			var emailField = $('#mktoForm_' + formID + ' #Email');
			var emailVal = emailField.val();

			//Hotjar recording tag
			window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
			hj('tagRecording', ['Form fill - Attempt']);

            if (!isEmailGood(emailVal)) {
                form.submittable(false);
                form.showErrorMessage("Must be Business email.", emailField);
            } else {			
                continueDemandbase(formID);
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
	});


	function isEmailGood(email) {
		email = email.toLowerCase();
		for (var i = 0; i < blacklist.length; i++) {
			if (email.indexOf(blacklist[i]) != -1 || email === '' || email.indexOf('@') < 0 || email.indexOf('.') < 0) {
				return false;
			}
		}
		return true;
	}

	function continueDemandbase(formID) {
		var emailVal = $('#mktoForm_' + formID + ' #Email').val();
		var emailSplit = emailVal.split('@');
		emailSplit = emailSplit[1].split('.');
		$('#mktoForm_' + formID + ' input[name=Company]').val(emailSplit[0]);
	}

	function removeNotification() {
		setCookie('mobile-notif', true, 4);
		$('.notification-image').remove();
	}

	function setAppleButtonClick() {
		window.appleurl = 'https://bcrw.apple.com/sms:open?service=iMessage&body=%2A%2AHit%20send%20to%20get%20connected%20to%20the%20LivePerson%20chatbot%2A%2A&recipient=urn:biz:9c27617e-f108-4e9e-a010-81ea843471e4&biz-group-id=' + leadSourceCookie + '&biz-intent-id=' + window.location.href;
		$('img[src*="banner_"]').click(function(e) {
			e.preventDefault();

			console.log('clicked...' + window.appleurl);
			ga('send', 'event', 'mobile', 'click', 'abc');
			window.open(window.appleurl, '_blank');
		});
	}

	function waitForSelector(selector, callback, time) {
		if (time === null) time = 500;
		if ($(selector).length) {
			(callback)(selector);
		} else {
			setTimeout(function() {
				waitForSelector(selector, callback, time);
			}, time);
		}
	}

	$(window).on('load', function(){

		waitForSelector('img[src*="banner_"]', function() {
			setAppleButtonClick();
		});

		var chatShutdown = (name = new RegExp('(?:^|;\\s*)chat-shutdown=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
		var mobileNotification = (name = new RegExp('(?:^|;\\s*)mobile-notif=([^;]*)').exec(document.cookie)) ? name.split(",")[1] : "";
		console.log(chatShutdown);

		if (!mobileNotification) {
			var mNotif = $('<img>');
			mNotif.attr('src', 'https://s3.amazonaws.com/lp-site-engagements/button_graphics/alert.svg');

			mNotif.addClass('notification-image');
			mNotif.click(function() {
				removeNotification();
			});

			waitForSelector('img[src*="/lp-site-engagements/button_graphics"]', function(selector) {
				$(selector).parent().append(mNotif);
			});

		}

		if(!chatShutdown){
			waitForSelector('img[src*="/lp-site-engagements/button_graphics"]', function(selector) {
				var xControl = $('<img>');
				xControl.addClass('chat-shutdown');
				if ($('img[src*="qr_pr"]').length) {
					xControl.attr('style', 'position:fixed;right:7px !important;bottom:198px;z-index:99999999;left:auto !important;cursor:pointer;width:20px !important;top:unset !important;');
				} else {
					xControl.attr('style', 'position:fixed;right:25px !important;bottom:165px;z-index:99999999;left:auto !important;cursor:pointer;width:20px !important;top:unset !important;');
				}
				xControl.attr('src', 'https://s3.amazonaws.com/lp-site-engagements/button_graphics/Close+button.svg');
				xControl.click(function(){
					setCookie('chat-shutdown', true, 4);
					$(this).remove();
					$('img[src*="bubble-"]').remove();
					$('img[src*="qr_pr"]').remove();
				});
				$(selector).parent().after(xControl);
			}, 2000);
		}
		else{
			setTimeout(function() {
				$('img[src*="bubble-"]').remove();
				$('img[src*="qr_pr"]').remove();
			}, 1000);
			$('img[src*="bubble-"]').remove();
			$('img[src*="qr_pr"]').remove();
		}
	});


	setTimeout(function(){
		$('form[id^=mktoForm]').each(function(){
			var formId = $(this).attr('id');
			var el = $(this).find('input[name=Email]');
			if( !el.length ){
				
				ga('send', 'event', 'error', 'load', 'form not loaded');
			};
		});
	}, 5000);

})(jQuery);

var splitFullName = function (a, b, c, form) {
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
};

if( window.parent !== undefined ){
	window.parent.postMessage(JWTPayload, 'https://www.livepersonautomotive.com');
}
