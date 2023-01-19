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
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import Hero from "../../../../../../../../gatsby-sites/www/src/components/blocks/Hero";
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
export default function save({ attributes, clientId }) {
	let lottiePlayerElement = attributes.lottieFile && (
		<LottieFilePlayer
			lottieFile={attributes.lottieFile}
			autoplay={true}
			loop={true}
		/>
	);

	return (
		<>
			<Hero
				underBodyImg={attributes.logoWall}
				underBodyImgAlt={attributes.logoWallAlt}
				backgroundImage={attributes.backgroundImage}
				backgroundColor={attributes.backgroundColor}
				header={attributes.header}
				subHeader={attributes.subHeader}
				kicker={attributes.kicker}
				heroImage={!attributes.vimeoUrl && attributes.mediaUrl}
				heroImageAlt={attributes.mediaAlt}
				primaryBtnText={attributes.primaryBtnText}
				secondaryBtnText={attributes.secondaryBtnText}
				primaryBtnLink={attributes.primaryBtnLink}
				secondaryBtnLink={attributes.secondaryBtnLink}
				linkExternal={attributes.linkExternal}
				linkSecondaryExternal={attributes.linkSecondaryExternal}
				lottiePlayer={!attributes.vimeoUrl && lottiePlayerElement}
				removePB={attributes.togglePadding}
				logoHeader={attributes.logoHeader}
				/*vimeoVideoOption={attributes.innerBlockCount == 1 && <InnerBlocks.Content />}*/
				vimeoUrl={attributes.vimeoUrl}
				animatedText={attributes.animatedText}
			/>
		</>
	);
}
