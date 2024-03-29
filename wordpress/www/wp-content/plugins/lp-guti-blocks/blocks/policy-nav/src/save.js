/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import PolicyContent from '../../../../../../../../gatsby-sites/www/src/components/blocks/PolicyContent';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';


import React, { useEffect } from 'react';

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

	const body = (
		<InnerBlocks.Content />
	);

	return (
		<PolicyContent body={body} />
	);
}
