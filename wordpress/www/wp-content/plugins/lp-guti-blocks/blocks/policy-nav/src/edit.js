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
import { useBlockProps, BlockControls, InspectorControls, RichText, InnerBlocks } from '@wordpress/block-editor';
import PolicyContent from '../../../../../../../../gatsby-sites/www/src/components/blocks/PolicyContent';
import { __experimentalGrid as Panel, PanelBody, Grid,Placeholder, TextareaControl, ToolbarButton, TextControl, Button, ResponsiveWrapper, ToolbarGroup } from '@wordpress/components';
const { Fragment, useState, useEffect } = wp.element;
import BackgroundSelectorMenu from '../../BackgroundSelector';
import { MktoForms } from '../../../../../../../../gatsby-sites/www/liveperson-attribution';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const marketoScriptId = 'mktoForms';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, isSelected, setAttributes}) {

	let changeBackground = function(color) {
		setAttributes({ backgroundColor: color });
	}

	const toggleGated = function() {
		if (attributes.gated) {
			setAttributes({ gated: false });
		} else {
			setAttributes({ gated: true });
		}
	}

	let addButton = (
		<BlockControls>
			<ToolbarGroup>

				<BackgroundSelectorMenu callback={changeBackground} selected={attributes.backgroundColor} />
				<ToolbarButton
					icon="admin-network"
					label="Toggle form gated"
					isActive={attributes.gated}
					onClick={toggleGated}
				/>

			</ToolbarGroup>
		</BlockControls>
	);

	const blocks = (
		<InnerBlocks />
	);

	return (
		<div {...useBlockProps()}>
			{addButton}
			<PolicyContent body={blocks} />

		</div>
	)

}
