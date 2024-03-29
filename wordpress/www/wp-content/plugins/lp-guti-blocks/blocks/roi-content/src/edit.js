/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import bootstrap from 'bootstrap';

import '../../../../../../../../gatsby-sites/www/liveperson-scripts';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, MediaUpload, MediaUploadCheck, BlockControls, InnerBlocks, ButtonBlockerAppender  } from '@wordpress/block-editor';
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment, useState } = wp.element;
import RoiCalcContentWP from '../../../../../../../../gatsby-sites/www/src/components/blocks/RoiCalcContentWP';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, Button, ResponsiveWrapper, ToolbarGroup, ToolbarButton, Dashicon } from '@wordpress/components';

import AddItemButton from '../../AddItemButton';
import ItemControls from '../../ItemControls';
import LinkControl from '../../LinkControl';
import BackgroundSelectorMenu from '../../BackgroundSelector';
import AutoApproveLanguage from '../../AutoApproveLanguage';
import MediaPicker from '../../MediaPicker';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import RoiTemplateSelector from '../../RoiTemplateSelector';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, isSelected, setAttributes, onChange}) {

	let execSummaryTitleControl = (
		<TextControl
			value={ attributes.execSummaryTitle }
			onChange={ ( val ) => setAttributes( { execSummaryTitle: val } ) }
			className="embedded-input"
			placeholder="Enormous opportunities for both cost savings and revenue growth"
		/>
	);

	let execSummaryTextControl = (
		<TextControl
			value={ attributes.execSummaryText }
			onChange={ ( val ) => setAttributes( { execSummaryText: val } ) }
			className="embedded-input"
			placeholder="LivePerson experts across the globe have led some of the world's largest enterprise brands through the transformation to becoming an intent-driven business, leveraging our industry-recognized conversational AI product suite."
		/>
	);

	let imgSrcLeftControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Left Image Src" initialOpen={ true }>
					<TextControl value={attributes.imgSrcLeft} onChange={function(value) {
						setAttributes({imgSrcLeft: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let imgSrcRightControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Right Image Src" initialOpen={ true }>
					<TextControl value={attributes.imgSrcRight} onChange={function(value) {
						setAttributes({imgSrcRight: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let templateControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Template" initialOpen={ true }>
					<RoiTemplateSelector selected={attributes.template} callback={function(value) {
						setAttributes({template: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	if (isSelected)	return (

		<div {...useBlockProps()}>
			{templateControl}
			{imgSrcLeftControl}
			{imgSrcRightControl} 
			<RoiCalcContentWP 
				template={templateControl}
				execSummaryTitle={execSummaryTitleControl}
				execSummaryText={execSummaryTextControl}
				imgSrcLeft={imgSrcLeftControl}
				imgSrcRight={imgSrcRightControl} 
			/>
		</div>
	);

	return (
		<div {...useBlockProps()}>
			<RoiCalcContentWP 
				template={attributes.template}
				execSummaryTitle={attributes.execSummaryTitle}
				execSummaryText={attributes.execSummaryText}
				imgSrcLeft={attributes.imgSrcLeft}
				imgSrcRight={attributes.imgSrcRight} 
			/>
		</div>
	)

}
