import $ from 'jquery';
import lottie from "lottie-web";

window.documentReadyFn = function() {
	
	window.lottie = lottie;
	
	Array.from(document.scripts).forEach(function(item) {
		if (item.attributes['data-type']?.value == 'pageScript') {
			console.log("executing form script...");
			eval(item.text);
		}
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
	
}
