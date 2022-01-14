/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import MktoForm from '../../../../../../../../gatsby-sites/www/src/components/blocks/MktoForm';

import React, { useEffect } from 'react';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {

	let mktoFormScript = `
	  window.MktoForms2.loadForm(
		'//info.liveperson.com',
		'501-BLE-979',
		${attributes.mktoFormId},
		function(form){
		  console.log('its loaded');
		  form.onSuccess(function(values, followUpUrl) {
			$('#NumberOfEmployees').parents('.mktoFieldDescriptor.mktoFormCol').addClass('mkto-dd-field');
			$('#NumberOfEmployees').addClass('select-placeholder');
			$('#NumberOfEmployees').on('change', function(){
			  if ($(this).val() === ""){
				$(this).addClass('select-placeholder');
			  } else {
				$(this).removeClass('select-placeholder');
			  }
			});
			$('form').html('<p class="thank-you-message">Thank you! One of our experts will contact you shortly. <img style="display: inline;width: 30px;top: -3px;position: relative;left: 5px;padding:0;" src="https://d1hryyr5hiabsc.cloudfront.net/web2020/img/intents/thumbs-up_1f44d.png" /></p>');
			formSubmissionComplete('request a demo');
			dataLayer.push({'event' : 'request-demo-form'});

			return false;
		  });
		}
	  );
	`;

	return (
		<div {...useBlockProps.save()}>
			<MktoForm formId={attributes.mktoFormId} />
			<script>{mktoFormScript}</script>
		</div>
	);
}
