/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import bootstrap from "bootstrap";

import "../../../../../../../../gatsby-sites/www/liveperson-scripts";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	BlockControls,
	RichText,
} from "@wordpress/block-editor";
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

import FeaturedSlider from "../../../../../../../../gatsby-sites/www/src/components/blocks/OverlaySlider";
import {
	__experimentalGrid as Grid,
	Placeholder,
	TextControl,
	TextareaControl,
	Button,
	ResponsiveWrapper,
	ToolbarGroup,
	ToolbarButton,
	Dashicon,
} from "@wordpress/components";

import AddItemButton from "../../AddItemButton";
import ItemControls from "../../ItemControls";
import LinkControl from "../../LinkControl";
import BackgroundSelectorMenu from "../../BackgroundSelector";
import AutoApproveLanguage from "../../AutoApproveLanguage";

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
export default function Edit({
	attributes,
	isSelected,
	setAttributes,
	onChange,
}) {
	let headerControl = (
		<TextControl
			value={attributes.header}
			onChange={(val) => setAttributes({ header: val })}
			className="embedded-input"
			placeholder="Section Header"
		/>
	);

	let itemValues = [...attributes.features];
	let itemControls = attributes.features.map((item, index) => {
		return {
			kicker: (
				<TextControl
					value={itemValues[index].kicker}
					onChange={function (value) {
						itemValues[index].kicker = value;
						setAttributes({ features: itemValues });
					}}
					className="embedded-input"
				/>
			),
			linkUrl: null,
			linkText: (
				<div className="wp-control-wrapper">
					<LinkControl
						text={itemValues[index].linkText}
						url={itemValues[index].linkUrl}
						external={itemValues[index].linkExternal || false}
						callback={function (text, url, external) {
							itemValues[index].linkText = text;
							itemValues[index].linkUrl = url;
							itemValues[index].linkExternal = external;
							setAttributes({ features: itemValues });
						}}
					/>
					{/* <TextControl
						value={itemValues[index].linkText}
						onChange={function(value) {
							itemValues[index].linkText = value;
							setAttributes({ features: itemValues});
						}}
						className="embedded-input"
						placeholder="Link Text"
					/>
					<TextControl
						value={itemValues[index].linkUrl}
						onChange={function(value) {
							itemValues[index].linkUrl = value;
							setAttributes({ features: itemValues});
						}}
						placeholder="Link URL"
					/> */}
				</div>
			),
			body: (
				<>
					<RichText
						value={itemValues[index].body}
						onChange={function (value) {
							itemValues[index].body = value;
							setAttributes({ features: itemValues });
						}}
						allowedFormats={["core/bold", "core/italic"]}
					/>
					<ItemControls
						index={index}
						itemArray={itemValues}
						callback={function (items) {
							setAttributes({ features: items });
						}}
					/>
				</>
			),
			imgCtl: (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={function (media) {
							itemValues[index].img = media.url;
							itemValues[index].mediaId = media.id;
							itemValues[index].imgAlt = media.alt || "";
							itemValues[index].imgWidth = media.width;
							itemValues[index].imgHeight = media.height;
							setAttributes({ features: itemValues });
						}}
						value={itemValues[index].mediaId}
						allowedTypes={["image"]}
						render={({ open }) => (
							<>
								{(itemValues[index].img && (
									<img
										className="imageSelector"
										src={itemValues[index].img}
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
										itemValues[index].img = null;
										itemValues[index].mediaId = null;
										setAttributes({ features: itemValues });
									}}
								>
									Remove Image
								</Button>
							</>
						)}
					/>
				</MediaUploadCheck>
			),
		};
	});

	let addTabFunc = function () {
		let thisIndex = itemValues.length;

		itemValues.push({
			kicker: "Kicker Text",
			body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			linkUrl: "https://www.lipsum.com/",
			linkText: "Learn More",
			img: "https://picsum.photos/752/568",
		});
		setAttributes({
			features: itemValues,
		});
	};

	let changeBackground = function (color) {
		setAttributes({ backgroundColor: color });
	};

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<AddItemButton callback={addTabFunc} />
				<BackgroundSelectorMenu
					callback={changeBackground}
					selected={attributes.backgroundColor}
				/>
				<AutoApproveLanguage
					callback={function () {
						setAttributes({ autoApproveLang: !attributes.autoApproveLang });
					}}
					selected={attributes.autoApproveLang}
				/>
			</ToolbarGroup>
		</BlockControls>
	);

	if (isSelected)
		return (
			<div {...useBlockProps()}>
				{addButton}
				<OverlaySlider
					header={headerControl}
					items={itemControls}
					runFilters={true}
					backgroundColor={attributes.backgroundColor}
				/>
			</div>
		);

	return (
		<div {...useBlockProps()}>
			{addButton}
			<OverlaySlider
				header={attributes.header}
				items={attributes.features}
				runFilters={true}
				backgroundColor={attributes.backgroundColor}
			/>
		</div>
	);
}
