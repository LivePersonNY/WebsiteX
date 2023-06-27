/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import $ from "jquery";

import LRForm from "../../../../../../../../gatsby-sites/www/src/components/blocks/LRForm";
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
	let lottiePlayerElement =
		(attributes.lottieFile && (
			<LottieFilePlayer
				lottieFile={attributes.lottieFile}
				autoplay={true}
				loop={true}
			/>
		)) ||
		"";

	return (
		<LRForm
			cssClasses={attributes.className}
			thankyou={attributes.thankyou}
			backgroundColor={attributes.backgroundColor}
			formId={attributes.mktoFormId}
			flipColumns={attributes.flipped}
			kicker={attributes.kicker}
			body={attributes.text}
			title={attributes.title}
			headLevel={attributes.headLevel}
			anchor={attributes.anchor}
			autoApprove={attributes.autoApproveLang}
			imgSrc={!attributes.vimeoUrl && attributes.mediaUrl}
			imgAlt={attributes.mediaAlt}
			imgWidth={attributes.mediaWidth}
			imgHeight={attributes.mediaHeight}
			lottiePlayer={!attributes.vimeoUrl && lottiePlayerElement}
			vimeoUrl={attributes.vimeoUrl}
			mediaKicker={attributes.mediaKicker}
			resourceasset={attributes.resourceasset}
			resourceAssetURL={attributes.resourceAssetURL}
		/>
	);
}
