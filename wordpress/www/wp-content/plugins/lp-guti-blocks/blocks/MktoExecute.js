import { LivePerson, MktoForms } from '../../../../../../gatsby-sites/www/liveperson-attribution';

export default function MktoExecute(props) {

	MktoForms.Bind(function(MktoForms2, $) {
		console.log('binding called');
		$('form').each(function() {
		  var formId = $(this).attr('mkto');
		  var afterMessage = $(`mkto-after[mkto="${formId}"]`).remove().html();
		  MktoForms2.loadForm(
			'//info.liveperson.com',
			'501-BLE-979',
			$(this).attr('mkto'),
			function(form) {

			  console.log("form loading", formId);
			  form.onSuccess(function(values, followUpUrl) {
				console.log('Success');

				form.getFormElem().html(`<p class="thank-you-message">${afterMessage}</p>`);

			  //dataLayer.push({'event' : 'request-demo-form'});

				return false;
			  });
			}
		  )
		});
		MktoForms2.whenReady(function(form) {
		  LivePerson.FormReady(form, function(form) {
			LivePerson.Validate(form);
		  });
		});

	  });

	return (
		<></>
	);

}
