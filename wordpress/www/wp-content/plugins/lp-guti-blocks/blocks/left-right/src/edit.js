/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import $ from "jquery";
import {
	__experimentalGrid as ToolbarGroup,
	Grid,
	Placeholder,
	ToolbarButton,
	TextareaControl,
	TextControl,
	Button,
	ResponsiveWrapper,
	CheckboxControl,
} from "@wordpress/components";
const { MediaUpload, MediaUploadCheck, RichText } = wp.blockEditor;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment, useState } = wp.element;
import LeftRight from "../../../../../../../../gatsby-sites/www/src/components/blocks/LeftRight";
import BackgroundSelectorMenu from "../../BackgroundSelector";
import MediaPicker from "../../MediaPicker";
import LottieFilePlayer from "../../LottieFilePlayer";
import Anchor from "../../Anchor";
import LinkControl from "../../LinkControl";
import AutoApproveLanguage from "../../AutoApproveLanguage";
import LineBreaks from "../../LineBreaks";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, BlockControls } from "@wordpress/block-editor";
import { useInstanceId } from "@wordpress/compose";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, isSelected }) {
	const instanceId = useInstanceId(TextControl);

	const setChecked = function (state) {
		setAttributes({
			flipped: state,
		});
	};
	const setCheckedRepeat = function (state) {
		setAttributes({
			repeat: state,
		});
	};

	let kickerControl = (
		<TextControl
			value={attributes.kicker}
			onChange={(val) => setAttributes({ kicker: val })}
			className="embedded-input"
			placeholder="Kicker Text"
		/>
	);

	let contentControl = (
		<RichText
			tagName="p"
			value={attributes.text}
			onChange={(val) => setAttributes({ text: val })}
			allowedFormats={[
				"core/bold",
				"core/italic",
				"core/link",
				"core/image",
				"lp-guti-blocks/heading",
			]}
		/>
	);

	let titleControl = (
		<RichText
			value={attributes.title}
			onChange={(val) => setAttributes({ title: val })}
			className="embedded-input"
			placeholder="Section H2 Header"
			allowedFormats={[
				"core/bold",
				"core/italic",
				"core/strikethrough",
				"core/text-color",
				"core/image",
			]}
		/>
	);

	let sectionBodyControl = (
		<RichText
			tagName="p"
			value={attributes.sectionBody}
			onChange={(val) => setAttributes({ sectionBody: val })}
			allowedFormats={[
				"core/bold",
				"core/italic",
				"core/link",
				"core/image",
				"lp-guti-blocks/heading",
			]}
		/>
	);

	let headerControl = (
		<RichText
			value={attributes.header}
			onChange={(val) => setAttributes({ header: val })}
			className="embedded-input"
			placeholder="Leading Header"
			allowedFormats={[
				"core/bold",
				"core/italic",
				"core/strikethrough",
				"core/text-color",
				"core/image",
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

	let vimeoUrlControls = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Vimeo URL" initialOpen={false}>
					<TextControl
						value={attributes.vimeoUrl}
						onChange={function (value) {
							setAttributes({ vimeoUrl: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let linkTextControl = (
		<LinkControl
			text={attributes.linkText}
			url={attributes.linkUrl}
			external={attributes.linkExternal}
			callback={function (text, url, external) {
				setAttributes({
					linkText: text,
					linkUrl: url,
					linkExternal: external,
				});
			}}
		/>
	);

	let linkSecondaryTextControl = (
		<LinkControl
			text={attributes.linkSecondaryText}
			url={attributes.linkSecondaryUrl}
			external={attributes.linkSecondaryExternal}
			callback={function (text, url, external) {
				setAttributes({
					linkSecondaryText: text,
					linkSecondaryUrl: url,
					linkSecondaryExternal: external,
				});
			}}
		/>
	);

	let changeBackground = function (color) {
		setAttributes({ backgroundColor: color });
	};

	let changeAlignment = function () {
		if (attributes.alignment == "left") {
			setAttributes({ alignment: "center" });
		} else {
			setAttributes({ alignment: "left" });
		}
	};

	let changeHeadLevel = function () {
		if (attributes.headLevel == "h2") {
			setAttributes({ headLevel: "h3" });
		} else {
			setAttributes({ headLevel: "h2" });
		}
	};

	let changeColumns = function () {
		let width = attributes.colWidth;
		if (width < 12) {
			setAttributes({ colWidth: width + 1 });
		} else {
			setAttributes({ colWidth: 6 });
		}
	};

	let addButton = (
		<BlockControls>
			<ToolbarButton
				icon={`editor-align${attributes.alignment}`}
				label="Alignment"
				onClick={changeAlignment}
			/>
			<ToolbarButton
				icon="heading"
				label="Head Level H2/H3"
				onClick={changeHeadLevel}
			/>
			<ToolbarButton
				icon="image-flip-horizontal"
				label="Width"
				onClick={changeColumns}
			/>
			<AutoApproveLanguage
				callback={function () {
					setAttributes({ autoApproveLang: !attributes.autoApproveLang });
				}}
				selected={attributes.autoApproveLang}
			/>
			<BackgroundSelectorMenu
				callback={changeBackground}
				selected={attributes.backgroundColor}
			/>
		</BlockControls>
	);

	if (isSelected)
		return (
			<div {...useBlockProps()}>
				{addButton}
				{vimeoUrlControls}
				<Anchor
					value={attributes.anchor}
					callback={function (val) {
						setAttributes({ anchor: val });
					}}
				/>
				<LeftRight
					headLevel={attributes.headLevel}
					kicker={kickerControl}
					backgroundColor={attributes.backgroundColor}
					repeat={attributes.repeat}
					linkText={linkTextControl}
					linkSecondaryText={linkSecondaryTextControl}
					body={contentControl}
					sectionBody={sectionBodyControl}
					title={titleControl}
					header={headerControl}
					flipColumns={attributes.flipped}
					imgCtl={!attributes.vimeoUrl && imageControl}
					lottieFile={attributes.lottieFile}
					vimeoUrl={attributes.vimeoUrl}
					anchor={attributes.anchor}
					autoApprove={attributes.autoApproveLang}
					colWidth={attributes.colWidth}
					alignmentClass={`text-${attributes.alignment}`}
				/>
				<Fragment>
					<InspectorControls>
						<div>
							<PanelBody title="Orientation" initialOpen={false}>
								<CheckboxControl
									label="Flip Module"
									help="Should the image be flipped to other side?"
									checked={attributes.flipped}
									onChange={setChecked}
								/>
							</PanelBody>
							<PanelBody title="Repeated" initialOpen={false}>
								<CheckboxControl
									label="Repeated"
									help="Check this if you're putting this module back to back with another just like it."
									checked={attributes.repeat}
									onChange={setCheckedRepeat}
								/>
							</PanelBody>
						</div>
					</InspectorControls>
				</Fragment>
			</div>
		);

	return (
		<div {...useBlockProps()}>
			<LeftRight
				headLevel={attributes.headLevel}
				kicker={attributes.kicker}
				backgroundColor={attributes.backgroundColor}
				repeat={attributes.repeat}
				linkUrl={attributes.linkUrl}
				linkText={attributes.linkText}
				linkExternal={attributes.linkExternal}
				linkSecondaryUrl={attributes.linkSecondaryUrl}
				linkSecondaryText={attributes.linkSecondaryText}
				linkSecondaryExternal={attributes.linkSecondaryExternal}
				colWidth={attributes.colWidth}
				body={attributes.text}
				sectionBody={attributes.sectionBody}
				title={attributes.title}
				header={attributes.header}
				flipColumns={attributes.flipped}
				imgSrc={!attributes.vimeoUrl && attributes.mediaUrl}
				imgAlt={attributes.mediaAlt}
				imgWidth={attributes.mediaWidth}
				imgHeight={attributes.mediaHeight}
				lottiePlayer={!attributes.vimeoUrl && lottiePlayerElement}
				vimeoUrl={attributes.vimeoUrl}
				anchor={attributes.anchor}
				autoApprove={attributes.autoApproveLang}
				alignmentClass={`text-${attributes.alignment}`}
			/>
		</div>
	);
}
