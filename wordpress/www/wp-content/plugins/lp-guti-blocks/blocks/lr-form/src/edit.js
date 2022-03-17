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
import LRForm from '../../../../../../../../gatsby-sites/www/src/components/blocks/LRForm';
import { __experimentalGrid as Panel, PanelBody, Grid,Placeholder, TextareaControl, ToolbarButton, TextControl, Button, ResponsiveWrapper, ToolbarGroup, CheckboxControl } from '@wordpress/components';
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

	let kickerControl = (
		<TextControl
			value={attributes.kicker}
			onChange={ (val) => setAttributes( { kicker: val } ) }
			className="embedded-input"
			placeholder="Kicker Text"
		/>
	);

	let contentControl = (
		<RichText
			tagName="p"
			value={ attributes.text }
			onChange={ ( val ) => setAttributes( { text: val } ) }
			allowedFormats={ [ 'core/bold', 'core/italic', 'core/link', 'core/image', 'lp-guti-blocks/heading'] }
		/>
	);

	let titleControl = (
		<TextControl
			value={ attributes.title }
			onChange={ ( val ) => setAttributes( { title: val } ) }
			className="embedded-input"
			placeholder="Section H2 Header"
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

	const setChecked = function(state) {
		setAttributes({
			flipped: state
		});
	}

	if (isSelected)	{


		return (
			<div {...useBlockProps()}>
				{addButton}
				<LRForm
					cssClasses={attributes.className}
					thankyouControl={thankyouControl}
					header={titleControl}
					sticky={attributes.sticky}
					backgroundColor={attributes.backgroundColor}
					formId={attributes.mktoFormId}
					runFilters={true}
					flipColumns={attributes.flipped}
					body={contentControl}
					title={titleControl}
					kicker={kickerControl}
					headLevel={attributes.headLevel}
				/>
				<Fragment>
					<InspectorControls>
						<PanelBody title="Orientation" initialOpen={ false }>
							<CheckboxControl
								label="Flip Module"
								help="Should the image be flipped to other side?"
								checked={ attributes.flipped }
								onChange={ setChecked }
							/>
						</PanelBody>
					</InspectorControls>
				</Fragment>
			</div>
		);
	}

	return (
		<div {...useBlockProps()}>
			<LRForm
				cssClasses={attributes.className}
				thankyou={attributes.thankyou}
				header={attributes.header}
				sticky={attributes.sticky}
				backgroundColor={attributes.backgroundColor}
				formId={attributes.mktoFormId}
				runFilters={true}
				flipColumns={attributes.flipped}
				kicker={attributes.kicker}
				body={attributes.text}
				title={attributes.title}
				headLevel={attributes.headLevel}
			/>
		</div>
	)

}
