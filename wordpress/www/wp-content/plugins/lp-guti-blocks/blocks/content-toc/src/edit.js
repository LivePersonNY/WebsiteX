import { useBlockProps, BlockControls, InnerBlocks } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';
import ContentToc from '../../../../../../../../gatsby-sites/www/src/components/blocks/ContentToc';
import Anchor from '../../Anchor';
import AutoApproveLanguage from '../../AutoApproveLanguage';
import BackgroundSelectorMenu from '../../BackgroundSelector';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const blockControls = (
		<BlockControls>
			<ToolbarGroup>
				<Anchor
					callback={function (anchor) {
						setAttributes({ anchor });
					}}
					value={attributes.anchor}
				/>
				<AutoApproveLanguage
					callback={function () {
						setAttributes({ autoApproveLang: !attributes.autoApproveLang });
					}}
					selected={attributes.autoApproveLang}
				/>
				<BackgroundSelectorMenu
					selected={attributes.backgroundColor}
					callback={function (backgroundColor) {
						setAttributes({ backgroundColor });
					}}
				/>
			</ToolbarGroup>
		</BlockControls>
	);

	const body = (
		<InnerBlocks
			template={[
				['core/heading', { level: 2, content: 'Section heading' }],
				['core/paragraph', { content: 'Add content here.' }],
				['core/heading', { level: 3, content: 'Subsection heading' }],
				['core/paragraph', { content: 'Add supporting content here.' }],
			]}
		/>
	);

	return (
		<div {...useBlockProps()}>
			{blockControls}
			<ContentToc
				anchor={attributes.anchor}
				backgroundColor={attributes.backgroundColor}
				autoApprove={attributes.autoApproveLang}
				body={body}
			/>
		</div>
	);
}
