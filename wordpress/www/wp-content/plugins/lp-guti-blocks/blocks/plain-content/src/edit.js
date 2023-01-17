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
	RichText,
} from "@wordpress/block-editor";
import PlainContent from "../../../../../../../../gatsby-sites/www/src/components/blocks/PlainContent";
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
import Anchor from "../../Anchor";
import LinkControl from "../../LinkControl";
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
	let headerControl = (
		<RichText
			value={attributes.header}
			onChange={(val) => setAttributes({ header: val })}
			className="embedded-input"
			placeholder="Header Text"
			rows="2"
			allowedFormats={["core/bold", "core/italic", "core/link", "core/list"]}
		/>
	);

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
			value={attributes.content}
			onChange={(val) => setAttributes({ content: val })}
			className="embedded-input"
			allowedFormats={["core/bold", "core/italic", "core/link", "core/list"]}
		/>
	);

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
				className="embedded-input"
				placeholder="Link URL"
			/>
		</div>
	);

	let changeAlignment = function () {
		if (attributes.alignment == "left") {
			setAttributes({ alignment: "center" });
		} else {
			setAttributes({ alignment: "left" });
		}
	};

	let changeHeadLevel = function () {
		if (attributes.headLevel == "h2") {
			setAttributes({ headLevel: "h1" });
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

	let linkPrimaryTextControl = (
		<LinkControl
			text={attributes.primaryBtnText}
			url={attributes.primaryBtnLink}
			external={attributes.linkExternal}
			callback={function (text, url, external) {
				setAttributes({
					primaryBtnText: text,
					primaryBtnLink: url,
					linkExternal: external,
				});
			}}
		/>
	);

	let linkSecondaryTextControl = (
		<LinkControl
			text={attributes.secondaryBtnText}
			url={attributes.secondaryBtnLink}
			external={attributes.linkSecondaryExternal}
			callback={function (text, url, external) {
				setAttributes({
					secondaryBtnText: text,
					secondaryBtnLink: url,
					linkSecondaryExternal: external,
				});
			}}
		/>
	);

	let alignButton = (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon={`editor-align${attributes.alignment}`}
					label="Alignment"
					onClick={changeAlignment}
				/>
				<ToolbarButton
					icon="heading"
					label="Head Level H1/H2"
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
					selected={attributes.backgroundColor}
					callback={function (color) {
						setAttributes({ backgroundColor: color });
					}}
				/>
			</ToolbarGroup>
		</BlockControls>
	);

	if (isSelected) {
		return (
			<div {...useBlockProps()}>
				{alignButton}
				<Anchor
					value={attributes.anchor}
					callback={function (val) {
						setAttributes({ anchor: val });
					}}
				/>
				<PlainContent
					anchor={attributes.anchor}
					kicker={kickerControl}
					colWidth={attributes.colWidth}
					headLevel={attributes.headLevel}
					alignmentClass={`text-${attributes.alignment}`}
					header={headerControl}
					body={contentControl}
					backgroundColor={attributes.backgroundColor}
					autoApprove={attributes.autoApproveLang}
					primaryBtnText={linkPrimaryTextControl}
					secondaryBtnText={linkSecondaryTextControl}
					linkText={linkTextControl}
				/>
			</div>
		);
	}

	return (
		<div {...useBlockProps()}>
			<PlainContent
				anchor={attributes.anchor}
				kicker={attributes.kicker}
				colWidth={attributes.colWidth}
				headLevel={attributes.headLevel}
				alignmentClass={`text-${attributes.alignment}`}
				header={attributes.header}
				body={attributes.content}
				backgroundColor={attributes.backgroundColor}
				linkText={attributes.linkText}
				autoApprove={attributes.autoApproveLang}
				primaryBtnText={attributes.primaryBtnText}
				secondaryBtnText={attributes.secondaryBtnText}
				primaryBtnLink={attributes.primaryBtnLink}
				secondaryBtnLink={attributes.secondaryBtnLink}
				linkExternal={attributes.linkExternal}
				linkSecondaryExternal={attributes.linkSecondaryExternal}
				linkUrl={attributes.linkUrl}
			/>
		</div>
	);
}
