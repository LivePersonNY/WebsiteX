import $ from 'jquery';

$(document).ready(function() {
	console.log('Document ready.');
	
	$('body').on('click', '.comp-tabs-a h4.accordion-header button', function(e) {
		$('.comp-tabs-a .accordion-item').removeClass('accordion-item-active');
		$(this).parents('.accordion-item').addClass('accordion-item-active');
		let tabIndex = $(this).data('tab');
		$(`.comp-tabs-a .comp-tabs-img[data-tab-content="${tabIndex}"]`).fadeIn();
		$(`.comp-tabs-a .comp-tabs-img:not([data-tab-content="${tabIndex}"])`).hide();
	});
	
	$('body').on('click', '.comp-tabs-b h4.comp-tab', function(e) {
		$('.comp-tabs-b .comp-tabs-list-container h4').removeClass('comp-tab-active');
		$(this).addClass('comp-tab-active');
		let tabIndex = $(this).data('tab');
		$(`.comp-tabs-b .comp-tabs-content[data-tab-content="${tabIndex}"], .comp-tabs-b .comp-tabs-img[data-tab-content="${tabIndex}"]`).fadeIn();
		$(`.comp-tabs-b .comp-tabs-content:not([data-tab-content="${tabIndex}"]), .comp-tabs-b .comp-tabs-img:not([data-tab-content="${tabIndex}"])`).hide();
	});
	
	$('body').on('click', '.comp-tabs-c .btn.pill', function(e) {
		$('.comp-tabs-c .btn.pill').removeClass('pill-active');
		$(e.target).addClass('pill-active');
		let tabIndex = $(e.target).data('tab');
		$(`.comp-tabs-c .comp-tabs-content[data-tab-content="${tabIndex}"]`).fadeIn();
		$(`.comp-tabs-c .comp-tabs-content:not([data-tab-content="${tabIndex}"])`).hide();
	});

	$(window).on('scroll', function(){
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

	$('body').on('click', '.comp-faq h4.accordion-header button', function(e) {
		$('.comp-faq .accordion-item').removeClass('accordion-item-active');
		$(this).parents('.accordion-item').addClass('accordion-item-active');
	});

});