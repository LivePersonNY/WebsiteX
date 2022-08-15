/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import ContainedContent from '../../../../../../../../gatsby-sites/www/src/components/blocks/ContainedContent';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	return (
			<ContainedContent
				kicker={attributes.kicker}
				autoApprove={attributes.autoApproveLang}
				header={attributes.header}
				body={attributes.content}
				linkText={attributes.linkText}
				linkUrl={attributes.linkUrl}
				backgroundColor={attributes.backgroundColor}
				imgSrc={attributes.imgSrc}
				imgAlt={attributes.imgAlt}
				/>
	);
}
