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
import { useBlockProps, BlockControls, InspectorControls, RichText, InnerBlocks } from '@wordpress/block-editor';
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

				<TextControl value={attributes.mktoFormId} className="form-selector" onChange={ ( val ) => {

						window.jQuery(`#mktoForm_${mktoId}`).after(`<form id="mktoForm_${val}"></form>`).remove();
						mktoId = val;
						setAttributes( { mktoFormId: val } );

				}} />
				<ToolbarButton
					icon="admin-post"
					label="Toggle Sticky Form Status"
					isActive={attributes.sticky}
					onClick={toggleSticky}
				/>
				<BackgroundSelectorMenu callback={changeBackground} selected={attributes.backgroundColor} />
				<ToolbarButton
					icon="yes-alt"
					label="Thank you message"
					onClick={function() {
						window.jQuery(`#mktoForm_${mktoId}`).toggle();
						window.jQuery(`#mktoForm_${mktoId}`).next().toggleClass('thank-you-message');
					}}
				/>
			</ToolbarGroup>
		</BlockControls>
	);

	let thankyouControl = (
		<>
			<RichText {...useBlockProps()}
				tagName="p"
				value={attributes.thankyou}
				onChange={ (val) => setAttributes({thankyou: val}) }
				allowedFormats={ [ 'core/bold', 'core/italic', 'core/image', 'core/link', 'core/color'] }
				placeholder="Thank you message after submitting the form."
			/>
		</>
	);

	if (isSelected)	{


		return (
			<div {...useBlockProps()}>
				{addButton}
				<MktoForm cssClasses={attributes.className} thankyouControl={thankyouControl} header={titleControl} sticky={attributes.sticky} backgroundColor={attributes.backgroundColor} formId={attributes.mktoFormId} runFilters={true} />

			</div>
		);
	}

	return (
		<div {...useBlockProps()}>
			<MktoForm cssClasses={attributes.className} thankyou={attributes.thankyou} header={attributes.header} sticky={attributes.sticky} backgroundColor={attributes.backgroundColor} formId={attributes.mktoFormId} runFilters={true} />
		</div>
	)

}
