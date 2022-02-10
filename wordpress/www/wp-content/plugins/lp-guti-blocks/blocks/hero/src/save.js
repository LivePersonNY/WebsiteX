/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import Hero from '../../../../../../../../gatsby-sites/www/src/components/blocks/Hero';
import LineBreaks from '../../LineBreaks';
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

			<Hero
				underBodyImg={attributes.logoWall}
				backgroundImage={attributes.backgroundImage}
				backgroundColor={attributes.backgroundColor}
				header={attributes.header}
				subHeader={attributes.subHeader}
				kicker={attributes.kicker}
				heroImage={attributes.mediaUrl}
				heroImageAlt={attributes.mediaAlt}
				primaryBtnText={attributes.primaryBtnText}
				secondaryBtnText={attributes.secondaryBtnText}
				primaryBtnLink={attributes.primaryBtnLink}
				secondaryBtnLink={attributes.secondaryBtnLink}
				lottieFile={attributes.lottieFile}
				removePB={attributes.togglePadding}
			/>

	);
}
