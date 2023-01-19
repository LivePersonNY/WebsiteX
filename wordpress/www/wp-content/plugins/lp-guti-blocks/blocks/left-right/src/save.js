/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";
import LeftRight from "../../../../../../../../gatsby-sites/www/src/components/blocks/LeftRight";
import LineBreaks from "../../LineBreaks";
import LottieFilePlayer from "../../LottieFilePlayer";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	let lottiePlayerElement = attributes.lottieFile && (
		<LottieFilePlayer
			lottieFile={attributes.lottieFile}
			autoplay={true}
			loop={true}
		/>
	);

	return (
		<LeftRight
			headLevel={attributes.headLevel}
			colWidth={attributes.colWidth}
			kicker={attributes.kicker}
			backgroundColor={attributes.backgroundColor}
			repeat={attributes.repeat}
			linkUrl={attributes.linkUrl}
			linkText={attributes.linkText}
			linkExternal={attributes.linkExternal}
			linkSecondaryUrl={attributes.linkSecondaryUrl}
			linkSecondaryText={attributes.linkSecondaryText}
			linkSecondaryExternal={attributes.linkSecondaryExternal}
			body={attributes.text}
			title={attributes.title}
			header={attributes.header}
			flipColumns={attributes.flipped}
			imgSrc={!attributes.vimeoUrl && attributes.mediaUrl}
			imgAlt={attributes.mediaAlt}
			lottiePlayer={!attributes.vimeoUrl && lottiePlayerElement}
			vimeoUrl={attributes.vimeoUrl}
			anchor={attributes.anchor}
			autoApprove={attributes.autoApproveLang}
			alignmentClass={`text-${attributes.alignment}`}
		/>
	);
}
