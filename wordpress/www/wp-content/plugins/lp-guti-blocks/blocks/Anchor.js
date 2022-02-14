import { TextControl, PanelBody } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';

export default function Anchor({ value, callback }) {
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Anchor ID" initialOpen={ false }>
					<TextControl value={value} onChange={(val) => callback(val)} />
					<p>Assign an ID to this module to use as an href in hyperlinks.</p>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}
