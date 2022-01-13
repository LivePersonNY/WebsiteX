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
import StatsGrid from '../../../../../../../../gatsby-sites/www/src/components/blocks/StatsGrid';

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
	return <div { ...useBlockProps.save() }>
		<StatsGrid
			heading={attributes.heading}
			stat1={attributes.stat1}
			stat2={attributes.stat2}
			stat3={attributes.stat3}
			stat4={attributes.stat4}
			content1={attributes.content1}
			content2={attributes.content2}
			content3={attributes.content3}
			content4={attributes.content4}
		/>
	</div>;
}
