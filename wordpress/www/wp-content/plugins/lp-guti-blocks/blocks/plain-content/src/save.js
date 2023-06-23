/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import PlainContent from "../../../../../../../../gatsby-sites/www/src/components/blocks/PlainContent";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";

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
	return (
		<PlainContent
			cssClasses={attributes.className}
			kicker={attributes.kicker}
			anchor={attributes.anchor}
			colWidth={attributes.colWidth}
			headLevel={attributes.headLevel}
			alignmentClass={`text-${attributes.alignment}`}
			header={attributes.header}
			body={attributes.content}
			linkText={attributes.linkText}
			linkUrl={attributes.linkUrl}
			backgroundColor={attributes.backgroundColor}
			autoApprove={attributes.autoApproveLang}
			primaryBtnText={attributes.primaryBtnText}
			secondaryBtnText={attributes.secondaryBtnText}
			primaryBtnLink={attributes.primaryBtnLink}
			secondaryBtnLink={attributes.secondaryBtnLink}
			linkExternal={attributes.linkExternal}
			linkSecondaryExternal={attributes.linkSecondaryExternal}
			animatedText={attributes.animatedText}
			assetTopSrc={attributes.assetTopSrc}
			assetTopAlt={attributes.assetTopAlt}
			assetTopWidth={attributes.assetTopWidth}
			assetTopHeight={attributes.assetTopHeight}
			assetBottomSrc={attributes.assetBottomSrc}
			assetBottomAlt={attributes.assetBottomAlt}
			vimeoUrl={attributes.vimeoUrl}
		/>
	);
}
