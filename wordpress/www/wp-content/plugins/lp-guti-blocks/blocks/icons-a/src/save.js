/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import IconTextA from '../../../../../../../../gatsby-sites/www/src/components/blocks/IconTextA';
import IconTextB from '../../../../../../../../gatsby-sites/www/src/components/blocks/IconTextB';
import IconTextC from '../../../../../../../../gatsby-sites/www/src/components/blocks/IconTextC';
import IconTextD from '../../../../../../../../gatsby-sites/www/src/components/blocks/IconTextD';

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
		<>
		{attributes.blocktype == "IconTextA" && <IconTextA cardCTA={attributes.cta}
		cardCTAbody={attributes.ctaBody}
		btnText={attributes.btnText}
		btnUrl={attributes.btnUrl} header={attributes.header} items={attributes.icons} backgroundColor={attributes.backgroundColor}/>}
		{attributes.blocktype == "IconTextB" && <IconTextB cardCTA={attributes.cta}
		cardCTAbody={attributes.ctaBody}
		btnText={attributes.btnText}
		btnUrl={attributes.btnUrl} header={attributes.header} items={attributes.icons} backgroundColor={attributes.backgroundColor}/>}
		{attributes.blocktype == "IconTextC" && <IconTextC cardCTA={attributes.cta}
		cardCTAbody={attributes.ctaBody}
		btnText={attributes.btnText}
		btnUrl={attributes.btnUrl} header={attributes.header} items={attributes.icons} backgroundColor={attributes.backgroundColor}/>}
		{attributes.blocktype == "IconTextD" && <IconTextD cardCTA={attributes.cta}
		cardCTAbody={attributes.ctaBody}
		btnText={attributes.btnText}
		btnUrl={attributes.btnUrl} centerBody={attributes.centerBody} body={attributes.body} header={attributes.header} items={attributes.icons} backgroundColor={attributes.backgroundColor}/>}
		</>
	);
}
