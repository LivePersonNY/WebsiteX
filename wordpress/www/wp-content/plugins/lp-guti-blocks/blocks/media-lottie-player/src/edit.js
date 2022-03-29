/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import $ from 'jquery';
import { __experimentalAlignmentMatrixControl as AlignmentMatrixControl, __experimentalGrid as ToolbarGroup,Grid,Placeholder, ToolbarButton, TextareaControl, TextControl, Button, ResponsiveWrapper, CheckboxControl, ToolbarDropdownMenu, PanelBody } from '@wordpress/components';
const { MediaUpload, MediaUploadCheck, RichText, InspectorControls, BlockControls, useBlockProps } = wp.blockEditor;
const { Fragment, useState } = wp.element;
import MediaPicker from '../../MediaPicker';
import LottieFilePlayer from '../../LottieFilePlayer';
import Anchor from '../../Anchor';

import LineBreaks from '../../LineBreaks';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useInstanceId } from '@wordpress/compose';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes, isSelected, clientId}) {

	if (isSelected) {
		return (
			<div {...useBlockProps()}>
				<div className={`lottie-container ${attributes.widthSetting} ${attributes.alignment}`}>
					<BlockControls>
						<ToolbarDropdownMenu
							icon={attributes.alignment}
							controls={[
								{
									title: "Left",
									icon: "align-left",
									onClick: () => setAttributes({
										alignment: "align-left",
									}),
									isActive: attributes.alignment == 'align-left'
								},
								{
									title: "Right",
									icon: "align-right",
									onClick: () => setAttributes({
										alignment: "align-right",
									}),
									isActive: attributes.alignment == 'align-right'
								},
								{
									title: "Center",
									icon: "align-center",
									onClick: () => setAttributes({
										alignment: "align-center",
									}),
									isActive: attributes.alignment == 'align-center'
								}
							]}
						/>
						<ToolbarDropdownMenu
							icon="align-wide"
							controls={[
								{
									title: "50%",
									onClick: () => setAttributes({
										widthSetting: "w-50"
									}),
									isActive: attributes.widthSetting == 'w-50'
								},
								{
									title: "75%",
									onClick: () => setAttributes({
										widthSetting: "w-75"
									}),
									isActive: attributes.widthSetting == 'w-75'
								},
								{
									title: "100%",
									onClick: () => setAttributes({
										widthSetting: "w-100"
									}),
									isActive: attributes.widthSetting == 'w-100'
								}
							]}
						/>
					</BlockControls>
					<MediaPicker attributes={attributes} setAttributes={setAttributes} allowLottie={true} cssClass="mx-auto d-block" clientId={clientId} />
				</div>
			</div>
		);
	}

	return (
		<div {...useBlockProps()}>
			<div className={`lottie-container ${attributes.widthSetting} ${attributes.alignment}`}>
				<LottieFilePlayer lottieFile={attributes.lottieFile} autoplay={true} loop={true} cssClass="mx-auto d-block" />
			</div>
		</div>
	);

}
