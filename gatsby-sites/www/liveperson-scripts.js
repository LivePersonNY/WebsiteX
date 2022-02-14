import $ from 'jquery';
import lottie from "lottie-web";
import { Cookie, Query, LivePerson } from "./liveperson-attribution";

window.lottie = lottie;

window.readyTimeout = null;

window.lp_attr = {};
window.lpCallbacks = window.lpCallbacks || [];

window.documentReadyFn = function() {
	
	window.lottieFiles = [];
	
	window.lpCallbacks.forEach(function(item) {
		try {
			if (item) item($);
		} catch (error) {
			console.log("callback failed", error);
		}
		
	});
		
	Array.from(document.scripts).forEach(function(item) {
		if (item.attributes['data-type']?.value == 'pageScript') {
			console.log("executing script...");
			eval(item.text);
		}
	});
	
	LivePerson.HydrateAttributes(function() {
		LivePerson.BindToChat();
	});
	
	console.log('Document ready.');
		
		$('body').off('click', 'a.mobileForm').on('click', 'a.mobileForm', function(e) {
			e.preventDefault();
			$('.form--sticky').toggleClass('expanded');
			$('.form--sticky .mktoForm').slideToggle(300);
			$('.span1').toggleClass('swap');
			$('.span2').toggleClass('swap');
		});
		
		$('body').off('click', '.comp-tabs-a h4.accordion-header button').on('click', '.comp-tabs-a h4.accordion-header button', function(e) {
			e.preventDefault();
			$('.comp-tabs-a .accordion-item').removeClass('accordion-item-active');
			$(this).parents('.accordion-item').addClass('accordion-item-active');
			let tabIndex = $(this).data('tab');
			$(`.comp-tabs-a .comp-tabs-img[data-tab-content="${tabIndex}"]`).fadeIn();
			$(`.comp-tabs-a .comp-tabs-img:not([data-tab-content="${tabIndex}"])`).hide();
		});
		
		$('body').off('click', '.comp-tabs-b h4.comp-tab').on('click', '.comp-tabs-b h4.comp-tab', function(e) {
			e.preventDefault();
			$('.comp-tabs-b .comp-tabs-list-container h4').removeClass('comp-tab-active');
			$(this).addClass('comp-tab-active');
			let tabIndex = $(this).data('tab');
			$(`.comp-tabs-b .comp-tabs-content[data-tab-content="${tabIndex}"], .comp-tabs-b .comp-tabs-img[data-tab-content="${tabIndex}"]`).fadeIn();
			$(`.comp-tabs-b .comp-tabs-content:not([data-tab-content="${tabIndex}"]), .comp-tabs-b .comp-tabs-img:not([data-tab-content="${tabIndex}"])`).hide();
		});
		
		$('body').off('click', '.comp-tabs-c .btn.pill').on('click', '.comp-tabs-c .btn.pill', function(e) {
			e.preventDefault();
			$('.comp-tabs-c .btn.pill').removeClass('pill-active');
			$(e.target).addClass('pill-active');
			let tabIndex = $(e.target).data('tab');
			$(`.comp-tabs-c .comp-tabs-content[data-tab-content="${tabIndex}"]`).fadeIn();
			$(`.comp-tabs-c .comp-tabs-content:not([data-tab-content="${tabIndex}"])`).hide();
		});
	
		$(window).off('scroll').on('scroll', function(){
			$('.pane:not(.hero, .pane-form)').each( function(i){
				var bottom_of_object = $(this).position().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				if( bottom_of_window > bottom_of_object ){
					$(this).animate({'opacity':'1'},1000);
				}
			}); 
		});
		
		$('body').on('input', 'textarea', function() {
			this.style.height = "auto";
			  this.style.height = (this.scrollHeight) + "px";
		});
		
		$('body').on('click', '.edit-post-visual-editor .wp-block', function() {
			$('textarea').each(function() {
				this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
			});
		});
		
		
	
		$('body').off('click', '.comp-faq h4.accordion-header button').on('click', '.comp-faq h4.accordion-header button', function(e) {
			$('.comp-faq .accordion-item').removeClass('accordion-item-active');
			$(this).parents('.accordion-item').addClass('accordion-item-active');
		});

		//hotjar
		window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
		$('.nav-menu + a').click(function(){
			hj('tagRecording', ['Sign in button clicked']);
		});
		
		
		// Uncomment below when we have GTM loaded
		setTimeout(function(){
			var sixSenseData = JSON.parse(localStorage.getItem('_6senseCompanyDetails'));
			if (!sixSenseData) return;
			hj('identify', null, {
		 		'6S_Company': sixSenseData.company.name,
		 		'6S_Industry' : sixSenseData.company.industry
		 	});
		}, 5000);
		
		
		var timeOnSite = sessionStorage.getItem('timeOnSite') || Math.round(performance.now());
		var timerInterval = setInterval(function(){
		  timeOnSite = parseInt(sessionStorage.getItem('timeOnSite'))? parseInt(sessionStorage.getItem('timeOnSite')) + 15000 : 15000;
		  sessionStorage.setItem('timeOnSite', timeOnSite);
		  hj('identify', null, {
			'timeOnSite': timeOnSite
		  });
		  if(timeOnSite >= 30000){
			clearInterval(timerInterval);
		  }
		}, 15000);
 
		//widowFix
		!function(t){$.fn.widowFix=function(i){var n=t.extend({letterLimit:null,prevLimit:null,linkFix:!1,dashes:!1},i);if(this.length)return this.each(function(){var i,e=t(this);if(n.linkFix){var r=e.find("a:last");r.wrap("<var>");var l=t("var").html();i=r.contents()[0],r.contents().unwrap()}var a=t(this).html().split(" "),h=a.pop();if(!(a.length<=1)){if(function t(){""===h&&(h=a.pop(),t())}(),n.dashes){t.each(["-","–","—"],function(t,i){if(h.indexOf(i)>0)return h='<span style="white-space:nowrap;">'+h+"</span>",!1})}var s=a[a.length-1];if(n.linkFix){if(null!==n.letterLimit&&i.length>=n.letterLimit)return void e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()});if(null!==n.prevLimit&&s.length>=n.prevLimit)return void e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()})}else{if(null!==n.letterLimit&&h.length>=n.letterLimit)return;if(null!==n.prevLimit&&s.length>=n.prevLimit)return}var u=a.join(" ")+"&nbsp;"+h;e.html(u),n.linkFix&&e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()})}})}}($);
		$('h1, h2, h3, h4, h5, p, li').widowFix({
			letterLimit: 12,
			prevLimit: 8,
			//linkFix: false
		});

		// GA events
		setTimeout(function() {
			$(".LPMcontainer .LPMimage").attr("onclick", "ga('send', 'event', 'chat', 'click', 'site-wide button')");
			$(".LPMcontainer").attr("onclick", "ga('send', 'event', 'form', 'submit', 'Chat engagement clicks')");
		}, 3000);
		
}
