import $ from 'jquery';

$(document).ready(function() {
	console.log('Document ready.');
	
	$('body').on('click', 'h4.accordion-header button', function(e) {
		console.log('clicked');
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
});