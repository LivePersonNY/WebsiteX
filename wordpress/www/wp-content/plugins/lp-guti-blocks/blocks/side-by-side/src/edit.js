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
	MediaUpload,
	MediaUploadCheck,
	RichText,
	CheckboxControl,
} from "@wordpress/block-editor";
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment, useState } = wp.element;
import SideBySide from "../../../../../../../../gatsby-sites/www/src/components/blocks/SideBySide";
import {
	__experimentalGrid as Grid,
	Placeholder,
	TextControl,
	Button,
	TextareaControl,
	ResponsiveWrapper,
	ToolbarGroup,
	ToolbarButton,
} from "@wordpress/components";
import BackgroundSelectorMenu from "../../BackgroundSelector";
import AutoApproveLanguage from "../../AutoApproveLanguage";
import Anchor from "../../Anchor";

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
export default function Edit({ attributes, isSelected, setAttributes }) {
	let sectionHeaderControl = (
		<RichText
			value={attributes.sectionHeader}
			onChange={(val) => setAttributes({ sectionHeader: val })}
			className="embedded-input"
			placeholder="Section Header Text"
			allowedFormats={["core/bold", "core/italic", "core/strikethrough"]}
		/>
	);

	let leadTextControl = (
		<TextControl
			value={attributes.leadText}
			onChange={(val) => setAttributes({ leadText: val })}
			className="embedded-input"
			placeholder="Lead Text"
		/>
	);

	let headerLeftControl = (
		<TextareaControl
			value={attributes.headerLeft}
			onChange={(val) => setAttributes({ headerLeft: val })}
			className="embedded-input"
			placeholder="Header Text"
			rows="1"
		/>
	);

	let headerRightControl = (
		<TextareaControl
			value={attributes.headerRight}
			onChange={(val) => setAttributes({ headerRight: val })}
			className="embedded-input"
			placeholder="Header Text"
			rows="1"
		/>
	);

	let contentLeftControl = (
		<RichText
			tagName="p"
			value={attributes.bodyLeft}
			onChange={(val) => setAttributes({ bodyLeft: val })}
			className="embedded-input"
			allowedFormats={["core/bold", "core/italic", "core/link"]}
			placeholder="Body Copy"
		/>
	);

	let contentRightControl = (
		<RichText
			tagName="p"
			value={attributes.bodyRight}
			onChange={(val) => setAttributes({ bodyRight: val })}
			className="embedded-input"
			allowedFormats={["core/bold", "core/italic", "core/link"]}
			placeholder="Body Copy"
		/>
	);

	let imageLeftControl = (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={function (media) {
					setAttributes({
						imgLeftSrc: media.url,
						imgLeftId: media.id,
						imgLeftAlt: media.alt || "",
					});
				}}
				value={attributes.imgLeftId}
				allowedTypes={["image"]}
				render={({ open }) => (
					<img
						className="imageSelector"
						src={attributes.imgLeftSrc}
						onClick={open}
					/>
				)}
				render={({ open }) => (
					<>
						{(attributes.imgLeftSrc && (
							<img
								className="imageSelector"
								src={attributes.imgLeftSrc}
								onClick={open}
							/>
						)) || (
							<Button className="mt-2" variant="link" onClick={open}>
								Select Image
							</Button>
						)}
						<Button
							className="mt-2"
							variant="link"
							isDestructive={true}
							onClick={() => {
								setAttributes({ imgLeftSrc: null });
							}}
						>
							Remove Image
						</Button>
					</>
				)}
			/>
		</MediaUploadCheck>
	);

	let imageRightControl = (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={function (media) {
					setAttributes({
						imgRightSrc: media.url,
						imgRightId: media.id,
						imgRightAlt: media.alt || "",
					});
				}}
				value={attributes.imgRightId}
				allowedTypes={["image"]}
				render={({ open }) => (
					<>
						{(attributes.imgRightSrc && (
							<img
								className="imageSelector"
								src={attributes.imgRightSrc}
								onClick={open}
							/>
						)) || (
							<Button className="mt-2" variant="link" onClick={open}>
								Select Image
							</Button>
						)}
						<Button
							className="mt-2"
							variant="link"
							isDestructive={true}
							onClick={() => {
								setAttributes({ imgRightSrc: null });
							}}
						>
							Remove Image
						</Button>
					</>
				)}
			/>
		</MediaUploadCheck>
	);

	let changeBackground = function (color) {
		setAttributes({ backgroundColor: color });
	};

	let changeHeadLevel = function () {
		if (attributes.headLevel == "h2") {
			setAttributes({ headLevel: "h3" });
		} else {
			setAttributes({ headLevel: "h2" });
		}
	};

	let bgMenu = (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="heading"
					label="Head Level H2/H3"
					onClick={changeHeadLevel}
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
			</ToolbarGroup>
		</BlockControls>
	);

	const setCheckedRepeat = function (state) {
		setAttributes({
			repeat: state,
		});
	};

	if (isSelected) {
		return (
			<div {...useBlockProps()}>
				{bgMenu}
				<Anchor
					value={attributes.anchor}
					callback={function (val) {
						setAttributes({ anchor: val });
					}}
				/>
				<SideBySide
					sectionHeader={sectionHeaderControl}
					headerLeft={headerLeftControl}
					headerRight={headerRightControl}
					bodyLeft={contentLeftControl}
					bodyRight={contentRightControl}
					imgLeftCtl={imageLeftControl}
					imgRightCtl={imageRightControl}
					backgroundColor={attributes.backgroundColor}
					headLevel={attributes.headLevel}
					autoApprove={attributes.autoApproveLang}
					anchor={attributes.anchor}
					repeat={attributes.repeat}
				/>
				<Fragment>
					<InspectorControls>
						<div>
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
	}

	return (
		<div {...useBlockProps()}>
			<SideBySide
				autoApprove={attributes.autoApproveLang}
				sectionHeader={attributes.sectionHeader}
				headLevel={attributes.headLevel}
				headerLeft={attributes.headerLeft}
				headerRight={attributes.headerRight}
				bodyLeft={attributes.bodyLeft}
				bodyRight={attributes.bodyRight}
				imgLeftSrc={attributes.imgLeftSrc}
				imgRightSrc={attributes.imgRightSrc}
				imgLeftAlt={attributes.imgLeftAlt}
				imgRightAlt={attributes.imgRightAlt}
				backgroundColor={attributes.backgroundColor}
				anchor={attributes.anchor}
				repeat={attributes.repeat}
			/>
		</div>
	);
}
