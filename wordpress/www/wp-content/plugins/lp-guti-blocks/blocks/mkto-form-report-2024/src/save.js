/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import $ from "jquery";

import MktoFormReport2024 from "../../../../../../../../gatsby-sites/www/src/components/blocks/MktoFormReport2024";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import LottieFilePlayer from "../../LottieFilePlayer";

import React, { useEffect } from "react";

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
		<MktoFormReport2024
			cssClasses={attributes.className}
			thankyou={attributes.thankyou}
			formId={attributes.mktoFormId}
			title={attributes.title}
			anchor={attributes.anchor}
			imgSrc={attributes.mediaUrl}
			imgAlt={attributes.mediaAlt}
			imgWidth={attributes.mediaWidth}
			imgHeight={attributes.mediaHeight}
			lottiePlayer={!attributes.vimeoUrl && lottiePlayerElement}
			resourceasset={attributes.resourceasset}
			resourceAssetURL={attributes.resourceAssetURL}
		/>
	);
}
