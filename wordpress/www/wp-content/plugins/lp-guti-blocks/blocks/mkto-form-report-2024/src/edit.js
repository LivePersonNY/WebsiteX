/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import $ from "jquery";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	BlockControls,
	InspectorControls,
	RichText,
	InnerBlocks,
} from "@wordpress/block-editor";
import MktoFormReport2024 from "../../../../../../../../gatsby-sites/www/src/components/blocks/MktoFormReport2024";
import {
	__experimentalGrid as Panel,
	PanelBody,
	Grid,
	Placeholder,
	TextareaControl,
	ToolbarButton,
	TextControl,
	Button,
	ResponsiveWrapper,
	ToolbarGroup,
	CheckboxControl,
} from "@wordpress/components";
const { Fragment, useState, useEffect } = wp.element;
import BackgroundSelectorMenu from "../../BackgroundSelector";
import AutoApproveLanguage from "../../AutoApproveLanguage";
import { MktoForms } from "../../../../../../../../gatsby-sites/www/liveperson-attribution";
import MediaPicker from "../../MediaPicker";
import LottieFilePlayer from "../../LottieFilePlayer";

import Anchor from "../../Anchor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

const marketoScriptId = "mktoForms";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, isSelected, setAttributes }) {

	var mktoId = attributes.mktoFormId;

	let titleControl = (
		<RichText
			value={attributes.title}
			onChange={(val) => setAttributes({ title: val })}
			className="embedded-input"
			placeholder="Header"
			allowedFormats={[
				"core/bold",
				"core/italic",
				"core/link",
				"core/image",
				"core/text-color",
				"core/strikethrough",
			]}
		/>
	);

	let imageControl = (
		<MediaPicker
			attributes={attributes}
			setAttributes={setAttributes}
			allowLottie={true}
		/>
	);

	let lottiePlayerElement = (
		<LottieFilePlayer
			lottieFile={attributes.lottieFile}
			autoplay={true}
			loop={true}
		/>
	);

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<TextControl
					value={attributes.mktoFormId}
					className="form-selector"
					onChange={(val) => {
						window
							.jQuery(`#mktoForm_${mktoId}`)
							.after(`<form id="mktoForm_${val}"></form>`)
							.remove();
						mktoId = val;
						setAttributes({ mktoFormId: val });
					}}
				/>

				<ToolbarButton
					icon="yes-alt"
					label="Thank you message"
					onClick={function () {
						window.jQuery(`#mktoForm_${mktoId}`).toggle();
						window
							.jQuery(`#mktoForm_${mktoId}`)
							.next()
							.toggleClass("thank-you-message");
					}}
				/>

			</ToolbarGroup>
		</BlockControls>
	);

	let thankyouControl = (
		<>
			<RichText
				{...useBlockProps()}
				tagName="p"
				value={attributes.thankyou}
				onChange={(val) => setAttributes({ thankyou: val })}
				allowedFormats={[
					"core/bold",
					"core/italic",
					"core/image",
					"core/link",
					"core/color",
				]}
				placeholder="Thank you message after submitting the form."
			/>
		</>
	);

	let resourceassetControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Resource Asset Name" initialOpen={true}>
					<TextControl
						value={attributes.resourceasset}
						onChange={function (value) {
							setAttributes({ resourceasset: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let resourceAssetURLControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Resource Asset Url" initialOpen={true}>
					<TextControl
						value={attributes.resourceAssetURL}
						onChange={function (value) {
							setAttributes({ resourceAssetURL: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	if (isSelected) {
		return (
			<div {...useBlockProps()}>
				{addButton}
				{resourceassetControl}
				{resourceAssetURLControl}
				<MktoFormReport2024
					runFilters={true}
					cssClasses={attributes.className}
					thankyouControl={thankyouControl}
					title={titleControl}
					formId={attributes.mktoFormId}
					anchor={attributes.anchor}
					imgCtl={imageControl}
					lottieFile={attributes.lottieFile}
					resourceassetControl={resourceassetControl}
					resourceAssetURLControl={resourceAssetURLControl}
				/>
				<Anchor
					value={attributes.anchor}
					callback={function (val) {
						setAttributes({ anchor: val });
					}}
				/>
			</div>
		);
	}

	return (
		<div {...useBlockProps()}>
			<MktoFormReport2024
				runFilters={true}
				cssClasses={attributes.className}
				thankyou={attributes.thankyou}
				formId={attributes.mktoFormId}
				title={attributes.title}
				anchor={attributes.anchor}
				imgSrc={attributes.imgSrc}
				imgAlt={attributes.imgAlt}
				imgWidth={attributes.imgWidth}
				imgHeight={attributes.imgHeight}
				lottiePlayer={lottiePlayerElement}
				resourceasset={attributes.resourceasset}
				resourceAssetURL={attributes.resourceAssetURL}
			/>
		</div>
	);
}
