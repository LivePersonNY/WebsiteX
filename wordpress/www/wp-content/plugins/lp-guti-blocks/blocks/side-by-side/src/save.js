/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import SideBySide from "../../../../../../../../gatsby-sites/www/src/components/blocks/SideBySide";

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
		<SideBySide
			sectionHeader={attributes.sectionHeader}
			leadText={attributes.leadText}
			headerLeft={attributes.headerLeft}
			headerRight={attributes.headerRight}
			bodyLeft={attributes.bodyLeft}
			bodyRight={attributes.bodyRight}
			imgLeftSrc={attributes.imgLeftSrc}
			imgRightSrc={attributes.imgRightSrc}
			imgLeftAlt={attributes.imgLeftAlt}
			imgRightAlt={attributes.imgRightAlt}
			imgLeftWidth={attributes.imgLeftWidth}
			imgLeftHeight={attributes.imgLeftHeight}
			imgRightWidth={attributes.imgRightWidth}
			imgRightHeight={attributes.imgRightHeight}
			backgroundColor={attributes.backgroundColor}
			autoApprove={attributes.autoApproveLang}
			anchor={attributes.anchor}
			headLevel={attributes.headLevel}
			repeat={attributes.repeat}
		/>
	);
}
