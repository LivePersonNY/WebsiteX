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
import RoiHeaderWP from '../../../../../../../../gatsby-sites/www/src/components/blocks/RoiHeaderWP';
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

	let brandLogoControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Brand Logo" initialOpen={ true }>
					<TextControl value={attributes.brandLogo} onChange={function(value) {
						setAttributes({brandLogo: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	if (isSelected)	return (

		<div {...useBlockProps()}>
			{brandLogoControl}
			<RoiHeaderWP 
				brandLogo={brandLogoControl}
			/>
		</div>
	);

	return (
		<div {...useBlockProps()}>
			<RoiHeaderWP 
				brandLogo={attributes.brandLogo}
			/>
		</div>
	)

}
