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
import CardGrid from "../../../../../../../../gatsby-sites/www/src/components/blocks/CardGrid";
import CardGridB from "../../../../../../../../gatsby-sites/www/src/components/blocks/CardGridB";

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
		<>
			{attributes.blocktype == "CardGrid" && (
				<CardGrid
					cssClasses={attributes.className}
					header={attributes.header}
					items={attributes.cards}
					body={attributes.content}
					backgroundColor={attributes.backgroundColor}
					autoApprove={attributes.autoApproveLang}
				/>
			)}
			{attributes.blocktype == "CardGridB" && (
				<CardGridB
					cssClasses={attributes.className}
					header={attributes.header}
					items={attributes.cards}
					body={attributes.content}
					backgroundColor={attributes.backgroundColor}
					autoApprove={attributes.autoApproveLang}
				/>
			)}
		</>
	);
}
