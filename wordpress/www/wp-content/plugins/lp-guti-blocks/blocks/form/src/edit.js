/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, BlockControls, InspectorControls, RichText } from '@wordpress/block-editor';
import MktoForm from '../../../../../../../../gatsby-sites/www/src/components/blocks/MktoForm';
import { __experimentalGrid as Panel, PanelBody, Grid,Placeholder, TextareaControl, ToolbarButton, TextControl, Button, ResponsiveWrapper, ToolbarGroup } from '@wordpress/components';
const { Fragment, useState, useEffect } = wp.element;
import BackgroundSelectorMenu from '../../BackgroundSelector';
import { MktoForms } from '../../../../../../../../gatsby-sites/www/liveperson-attribution';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const marketoScriptId = 'mktoForms';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, isSelected, setAttributes}) {

	let changeBackground = function(color) {
		setAttributes({ backgroundColor: color });
	}

	var mktoId = attributes.mktoFormId;

	let toggleSticky = function() {
		if (attributes.sticky) {
			setAttributes({ sticky: false });
		} else {
			setAttributes({ sticky: true });
		}
	}

	let titleControl = (
		<TextControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
			placeholder="Section Header"
		/>
	);

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="admin-post"
					label="Toggle Sticky Form Status"
					isActive={attributes.sticky}
					onClick={toggleSticky}
				/>
				<TextControl value={attributes.mktoFormId} className="form-selector" onChange={ ( val ) => {

						window.jQuery(`#mktoForm_${mktoId}`).after(`<form id="mktoForm_${val}"></form>`).remove();
						mktoId = val;
						setAttributes( { mktoFormId: val } );

				}} />
				<BackgroundSelectorMenu callback={changeBackground} selected={attributes.backgroundColor} />
			</ToolbarGroup>
		</BlockControls>
	);

	let thankyouControl = (
		<RichText {...useBlockProps()}
			tagName="p"
			value={attributes.thankyou}
			onChange={ (val) => setAttributes({thankyou: val}) }
			allowedFormats={ [ 'core/bold', 'core/italic', 'core/image', 'core/link'] }
			placeholder="Thank you message after submitting the form."
		/>

	);

	if (isSelected)	{


		return (
			<div {...useBlockProps()}>
				{addButton}
				<Fragment>
					<InspectorControls>
						<div>
							<PanelBody title="Thank you message" initialOpen={ true }>
								{thankyouControl}
								<Button icon="welcome-view-site" variant="primary" onClick={ function() {
									window.jQuery(`#mktoForm_${mktoId}`).html(`<p class="thank-you-message">${attributes.thankyou}</p>`);
									setTimeout(function() {
										setAttributes({ mktoFormId: 0});
									}, 2000);
									setTimeout(function() {
										window.jQuery('.thank-you-message').remove();
										setAttributes({ mktoFormId: mktoId});
									}, 2010);
								}
							 	}>Preview</Button>
							</PanelBody>
						</div>
					</InspectorControls>
				</Fragment>
				<MktoForm thankyou={attributes.thankyou} header={titleControl} sticky={attributes.sticky} backgroundColor={attributes.backgroundColor} formId={attributes.mktoFormId} runFilters={true} />
			</div>
		);
	}

	return (
		<div {...useBlockProps()}>
			<MktoForm thankyou={attributes.thankyou} header={attributes.header} sticky={attributes.sticky} backgroundColor={attributes.backgroundColor} formId={attributes.mktoFormId} runFilters={true} />
		</div>
	)

}
