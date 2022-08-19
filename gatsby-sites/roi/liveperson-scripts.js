import $ from 'jquery';
import lottie from "lottie-web";
import { Cookie, Query, LivePerson } from "./liveperson-attribution";

window.lottie = lottie;

window.readyTimeout = null;

window.lp_attr = {};

window.lpCallbacks = window.lpCallbacks || [];

window.testGated = function() {
	$('.pane.gated').slideDown();
}


window.documentReadyFn = function() {


	  

	
	
	
	window.lottieFiles = [];
	
	window.lpCallbacks.forEach(function(item) {
		try {
			if (item) {
				item($);
				console.log("cb called");
			}
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
		LivePerson.waitForChat(function() {
			LivePerson.BindToChat();
		});
	});
	
	console.log('Document ready.');
	
	
		
		$('body').off('click', 'a.mobileForm').on('click', 'a.mobileForm', function(e) {
			e.preventDefault();
			$('.form--sticky').toggleClass('expanded');
			$('.form--sticky .mktoForm').slideToggle(300);
			$('.span1').toggleClass('swap');
			$('.span2').toggleClass('swap');
		});
	
		setTimeout(function(){
			// console.log('This is load scroll position: ' + window.scrollY);
			if (window.scrollY > 100){
				$('.pane .container').animate({'opacity':'1'},1000);
			} else{
				$(window).off('scroll').on('scroll', function(){
					$('.pane:not(.hero, .pane-form, .gated) .container').each( function(i){
						var bottom_of_object = $(this).position().top;
						var bottom_of_window = $(window).scrollTop() + $(window).height();
						if( bottom_of_window > bottom_of_object ){
							$(this).animate({'opacity':'1'},1000);
						}
					}); 
				});
			}
		}, 1000);
		
		$('body').on('input', 'textarea', function() {
			this.style.height = "auto";
			  this.style.height = (this.scrollHeight) + "px";
		});
		
		$('body').on('click', '.edit-post-visual-editor .wp-block', function() {
			$('textarea').each(function() {
				this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
			});
		});

		//hotjar
		// window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
		// $('.nav-menu + a').click(function(){
		// 	hj('tagRecording', ['Sign in button clicked']);
		// });
		
 
		//widowFix
		// !function(t){$.fn.widowFix=function(i){var n=t.extend({letterLimit:null,prevLimit:null,linkFix:!1,dashes:!1},i);if(this.length)return this.each(function(){var i,e=t(this);if(n.linkFix){var r=e.find("a:last");r.wrap("<var>");var l=t("var").html();i=r.contents()[0],r.contents().unwrap()}var a=t(this).html().split(" "),h=a.pop();if(!(a.length<=1)){if(function t(){""===h&&(h=a.pop(),t())}(),n.dashes){t.each(["-","–","—"],function(t,i){if(h.indexOf(i)>0)return h='<span style="white-space:nowrap;">'+h+"</span>",!1})}var s=a[a.length-1];if(n.linkFix){if(null!==n.letterLimit&&i.length>=n.letterLimit)return void e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()});if(null!==n.prevLimit&&s.length>=n.prevLimit)return void e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()})}else{if(null!==n.letterLimit&&h.length>=n.letterLimit)return;if(null!==n.prevLimit&&s.length>=n.prevLimit)return}var u=a.join(" ")+"&nbsp;"+h;e.html(u),n.linkFix&&e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()})}})}}($);
		// $('h1, h2, h3, h4, h5, p, li').widowFix({
		// 	letterLimit: 12,
		// 	prevLimit: 8,
		// 	//linkFix: false
		// });

		// GA events
		setTimeout(function() {
			$(".LPMcontainer .LPMimage").attr("onclick", "ga('send', 'event', 'chat', 'click', 'site-wide button')");
			$(".LPMcontainer").attr("onclick", "ga('send', 'event', 'form', 'submit', 'Chat engagement clicks')");
			$('.vimeoContainer').attr("onclick", "ga('send', 'event', 'Web 22', 'Click', 'Vimeo Container')");
		}, 3000);

		
}
