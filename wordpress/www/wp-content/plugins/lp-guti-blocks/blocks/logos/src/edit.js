/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import {
	__experimentalGrid as Grid,
	Placeholder,
	TextControl,
	TextareaControl,
	ToolbarGroup,
	ToolbarDropdownMenu,
	ToolbarButton,
	Dashicon,
	Button,
} from "@wordpress/components";
import LogosUniversal from "../../../../../../../../gatsby-sites/www/src/components/blocks/LogosUniversal";
import BackgroundSelectorMenu from "../../BackgroundSelector";
import ItemControls from "../../ItemControls";
import AutoApproveLanguage from "../../AutoApproveLanguage";
import LinkControl from "../../LinkControl";
import Anchor from "../../Anchor";
import Reorder from "react-reorder";

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
} from "@wordpress/block-editor";
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
export default function Edit({
	attributes,
	className,
	setAttributes,
	isSelected,
}) {
	let headerControl = (
		<RichText
			value={attributes.header}
			onChange={(val) => setAttributes({ header: val })}
			className="embedded-input"
			allowedFormats={[
				"core/bold",
				"core/italic",
				"core/strikethrough",
				"core/text-color",
			]}
		/>
	);

	let bodyControl = (
		<RichText
			tagName="p"
			value={attributes.body}
			onChange={(val) => setAttributes({ body: val })}
			allowedFormats={[
				"core/bold",
				"core/italic",
				"core/link",
				"core/image",
				"lp-guti-blocks/heading",
			]}
		/>
	);

	let logos = [...attributes.logos];
	let controls = attributes.logos.map((item, index) => {
		return {
			imgCtl: (
				<div class="logo-control-wrap">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={function (media) {
								logos[index].img = media.url;
								logos[index].mediaId = media.id;
								logos[index].imgAlt = media.alt || "";
								logos[index].imgWidth = media.width;
								logos[index].imgHeight = media.height;
								setAttributes({ logos: logos });
							}}
							value={logos[index].mediaId}
							allowedTypes={["image"]}
							render={({ open }) => (
								<img
									src={
										logos[index].img ||
										`https://picsum.photos/752/568?random=${index}`
									}
									data-tab-content={index}
									key={index}
									onClick={open}
								/>
							)}
						/>
					</MediaUploadCheck>
					<LinkControl
						url={logos[index].itemLinkUrl}
						external={logos[index].itemLinkExternal || false}
						callback={function (text, url, external) {
							logos[index].itemLinkUrl = url;
							logos[index].itemLinkExternal = external;
							setAttributes({ logos: logos });
						}}
					/>
					<ItemControls
						index={index}
						itemArray={logos}
						callback={function (items) {
							setAttributes({ logos: logos });
						}}
					/>
				</div>
			),
		};
	});

	let addTabFunc = function () {
		logos.push({
			img: "https://picsum.photos/224/30?random=3",
			imgAlt: "Placeholder image",
		});
		setAttributes({
			logos: logos,
		});
	};

	let changeBackground = function (color) {
		setAttributes({ backgroundColor: color });
	};

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

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton icon="plus-alt2" label="Add" onClick={addTabFunc} />
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
				<LogosUniversal
					header={headerControl}
					body={bodyControl}
					items={controls}
					backgroundColor={attributes.backgroundColor}
					linkText={linkTextControl}
					anchor={attributes.anchor}
				/>
			</div>
		);

	return (
		<div {...useBlockProps()}>
			<LogosUniversal
				header={attributes.header}
				body={attributes.body}
				items={attributes.logos}
				backgroundColor={attributes.backgroundColor}
				linkUrl={attributes.linkUrl}
				linkText={attributes.linkText}
				linkExternal={attributes.linkExternal}
				anchor={attributes.anchor}
			/>
		</div>
	);
}
