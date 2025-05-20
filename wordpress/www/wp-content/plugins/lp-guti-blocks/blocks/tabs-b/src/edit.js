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
import { useBlockProps, BlockControls } from "@wordpress/block-editor";
const { MediaUpload, MediaUploadCheck, RichText } = wp.blockEditor;

import TabsB from "../../../../../../../../gatsby-sites/www/src/components/blocks/TabsB";
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
import Anchor from "../../Anchor";
import AutoApproveLanguage from "../../AutoApproveLanguage";
import BackgroundSelectorMenu from "../../BackgroundSelector";
import AddItemButton from "../../AddItemButton";
import LinkControl from "../../LinkControl";
import ItemControls from "../../ItemControls";

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

	let itemValues = [...attributes.tabItems];
	let itemControls = attributes.tabItems.map((item, index) => {
		return {
			header: (
				<TextControl
					value={itemValues[index].header}
					onChange={function (value) {
						itemValues[index].header = value;
						setAttributes({ tabItems: itemValues });
					}}
					className="embedded-input"
				/>
			),
			linkUrl: null,
			linkText: (
				<LinkControl
					text={itemValues[index].linkText}
					url={itemValues[index].linkUrl}
					external={itemValues[index].linkExternal || false}
					callback={function (text, url, external) {
						itemValues[index].linkText = text;
						itemValues[index].linkUrl = url;
						itemValues[index].linkExternal = external;
						setAttributes({ tabItems: itemValues });
					}}
				/>
			),
			title: (
				<div className="wp-control-wrapper">
					<TextControl
						value={itemValues[index].title}
						onChange={function (value) {
							itemValues[index].title = value;
							setAttributes({ tabItems: itemValues });
						}}
						className="embedded-input"
					/>
					{/* <button
						className="v-tab-remove"
						onClick={function (e) {
							itemValues.splice(index, 1);
							setAttributes({ tabItems: itemValues });
						}}
					>
						<span className="dashicons-before dashicons-remove"></span>
					</button> */}
					<ItemControls
						index={index}
						itemArray={itemValues}
						callback={function (items) {
							setAttributes({ tabItems: items });
						}}
					/>
				</div>
			),
			kicker: (
				<TextControl
					value={itemValues[index].kicker}
					onChange={function (value) {
						itemValues[index].kicker = value;
						setAttributes({ tabItems: itemValues });
					}}
					className="embedded-input"
				/>
			),
			body: (
				<RichText
					value={itemValues[index].body}
					onChange={function (value) {
						itemValues[index].body = value;
						setAttributes({ tabItems: itemValues });
					}}
					className="embedded-input"
					allowedFormats={[
						"core/bold",
						"core/italic",
						"core/strikethrough",
						"core/text-color",
						"core/image",
						"core/link",
					]}
				/>
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
							setAttributes({ tabItems: itemValues });
						}}
						value={itemValues[index].mediaId}
						allowedTypes={["image"]}
						render={({ open }) => (
							<img
								className={`comp-tabs-img ${index !== 0 ? "display-none" : ""}`}
								src={
									itemValues[index].img ||
									`https://picsum.photos/752/568?random=${index}`
								}
								data-tab-content={index}
								key={index}
								onClick={open}
							/>
						)}
					/>
				</MediaUploadCheck>
			),
		};
	});

	let addTabFunc = function () {
		let thisIndex = itemValues.length;

		itemValues.push({
			title: `The Translation`,
			kicker: `Kicker Text`,
			header: `1914 translation by H. Rackham`,
			body: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`,
			linkUrl: "https://www.lipsum.com/",
			linkText: "Learn More",
			img: `https://picsum.photos/752/568?random=${thisIndex}`,
			imgAlt: "An image placeholder",
		});
		setAttributes({
			tabItems: itemValues,
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
				<Anchor
					value={attributes.anchor}
					callback={function (val) {
						setAttributes({ anchor: val });
					}}
				/>
				<TabsB
					header={headerControl}
					items={itemControls}
					backgroundColor={attributes.backgroundColor}
					anchor={attributes.anchor}
				/>
			</div>
		);

	return (
		<div {...useBlockProps()}>
			{addButton}
			<TabsB
				header={attributes.header}
				items={attributes.tabItems}
				backgroundColor={attributes.backgroundColor}
				anchor={attributes.anchor}
			/>
		</div>
	);
}
