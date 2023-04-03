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
} from "@wordpress/block-editor";
import ContainedContent from "../../../../../../../../gatsby-sites/www/src/components/blocks/ContainedContent";
import {
	__experimentalGrid as Grid,
	Placeholder,
	TextControl,
	Button,
	TextareaControl,
	ResponsiveWrapper,
	ToolbarGroup,
	ToolbarDropdownMenu,
	ToolbarButton,
} from "@wordpress/components";
import AutoApproveLanguage from "../../AutoApproveLanguage";
import BackgroundSelectorMenu from "../../BackgroundSelector";

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
	let kickerControl = (
		<TextControl
			value={attributes.kicker}
			onChange={(val) => setAttributes({ kicker: val })}
			className="embedded-input"
			placeholder="Kicker Text"
		/>
	);

	let headerControl = (
		<RichText
			value={attributes.header}
			onChange={(val) => setAttributes({ header: val })}
			className="embedded-input"
			placeholder="Section Header"
			allowedFormats={["core/bold", "core/italic", "core/strikethrough"]}
		/>
	);

	let contentControl = (
		<TextareaControl
			value={attributes.content}
			onChange={(val) => setAttributes({ content: val })}
			className="embedded-input"
			rows="1"
		/>
	);

	let changeBackground = function (color) {
		setAttributes({ backgroundColor: color });
	};

	let linkTextControl = (
		<div className="wp-control-wrapper">
			<TextControl
				value={attributes.linkText}
				onChange={(val) => setAttributes({ linkText: val })}
				className="embedded-input"
				placeholder="Link Text"
			/>

			<TextControl
				value={attributes.linkUrl}
				onChange={(val) => setAttributes({ linkUrl: val })}
				placeholder="Link URL"
			/>
		</div>
	);

	let addButton = (
		<BlockControls>
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
		</BlockControls>
	);

	let imageControl = (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={function (media) {
					setAttributes({
						imgSrc: media.url,
						imgId: media.id,
						imgAlt: media.alt || "",
					});
				}}
				value={attributes.imgId}
				allowedTypes={["image"]}
				render={({ open }) => (
					<>
						{(attributes.imgSrc && (
							<img
								className="imageSelector d-block mx-auto"
								src={attributes.imgSrc}
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
							onClick={() => setAttributes({ imgSrc: null, imgId: null })}
						>
							Remove Image
						</Button>
					</>
				)}
			/>
		</MediaUploadCheck>
	);

	if (isSelected) {
		return (
			<div {...useBlockProps()}>
				{addButton}
				<ContainedContent
					kicker={kickerControl}
					header={headerControl}
					body={contentControl}
					linkText={linkTextControl}
					backgroundColor={attributes.backgroundColor}
					imgCtl={imageControl}
				/>
			</div>
		);
	}

	return (
		<div {...useBlockProps()}>
			<ContainedContent
				kicker={attributes.kicker}
				header={attributes.header}
				body={attributes.content}
				linkText={attributes.linkText}
				linkUrl={attributes.linkUrl}
				backgroundColor={attributes.backgroundColor}
				imgSrc={attributes.imgSrc}
				imgAlt={attributes.imgAlt}
			/>
		</div>
	);
}
