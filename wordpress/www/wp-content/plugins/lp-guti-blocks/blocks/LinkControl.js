import { TextControl, CheckboxControl } from '@wordpress/components';

export default function LinkControl({ text, url, external, callback }) {

	var attributes = {
		text: text,
		url: url,
		ext: external
	}


	const executeCallback = function(text, url, external) {
		attributes.text = text;
		attributes.url = url;
		attributes.ext = external;

		callback(text, url, external);
	}

	const externalControl = (
		<CheckboxControl
			label="Open in new tab"
			checked={ attributes.ext }
			onChange={ (val) => executeCallback(attributes.text, attributes.url, !attributes.ext) }
		/>
	)

	return (
		<div className="wp-control-wrapper">

			<TextControl
				value={ attributes.text }
				onChange={ ( val ) => executeCallback(val, attributes.url, attributes.ext) }
				className="embedded-input"
				placeholder="Link Text"
			/>

			<TextControl
				value={ attributes.url }
				onChange={ ( val ) => executeCallback(attributes.text, val, attributes.ext) }
				placeholder="Link URL"
			/>

			{external !== undefined && externalControl}

		</div>
	)
}
