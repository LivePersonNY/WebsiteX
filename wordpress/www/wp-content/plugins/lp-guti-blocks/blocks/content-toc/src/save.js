import { InnerBlocks } from '@wordpress/block-editor';
import ContentToc from '../../../../../../../../gatsby-sites/www/src/components/blocks/ContentToc';

export default function save({ attributes }) {
	return (
		<ContentToc
			anchor={attributes.anchor}
			backgroundColor={attributes.backgroundColor}
			autoApprove={attributes.autoApproveLang}
			body={<InnerBlocks.Content />}
		/>
	);
}
