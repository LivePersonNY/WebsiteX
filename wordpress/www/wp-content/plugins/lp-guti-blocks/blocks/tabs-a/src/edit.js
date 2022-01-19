/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import bootstrap from 'bootstrap';

import '../../../../../../../../gatsby-sites/www/liveperson-scripts';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, BlockControls } from '@wordpress/block-editor';
import TabsA from '../../../../../../../../gatsby-sites/www/src/components/blocks/TabsA';
import { __experimentalGrid as Grid,Placeholder, TextControl, Button, ResponsiveWrapper, ToolbarGroup, ToolbarButton, Dashicon } from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, isSelected, setAttributes, onChange}) {

	let headerControl = (
		<TextControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
		/>
	);

	let itemValues = [...attributes.tabItems];
	let itemControls = attributes.tabItems.map((item ,index)=>{
		return {
			title: (
				<TextControl
					value={itemValues[index].title}
					onChange={function(value) {
						itemValues[index].title = value;
						setAttributes({ tabItems: itemValues});
					}}
					className="embedded-input"
				/>
			),
			body: (
				<div>
					<TextControl
						value={itemValues[index].body}
						onChange={function(value) {
							itemValues[index].body = value;
							setAttributes({ tabItems: itemValues});
						}}
						className="embedded-input"
					/>
					<button
						className="v-tab-remove"
						onClick={
						function(e) {
							itemValues.splice(index, 1);
							setAttributes({ tabItems: itemValues});
						}
					}>
						<span className="dashicons-before dashicons-remove"></span>
					</button>
				</div>
			),
			img: `https://picsum.photos/752/568?random=${index}`,
			imgAlt: 'An image placeholder'
		}
	});

	let addTabFunc = function() {

		let thisIndex = itemValues.length;

		itemValues.push({
			title: `Tab Title ${thisIndex}`,
			body: `Tab Body ${thisIndex}`,
			img: `https://picsum.photos/752/568?random=${thisIndex}`,
			imgAlt: 'An image placeholder'
		});
		setAttributes({
			tabItems: itemValues
		});
	}

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="plus-alt2"
					label="Add Tab"
					onClick={ addTabFunc }
				/>
			</ToolbarGroup>
		</BlockControls>
	);

	if (isSelected)	return (

		<div {...useBlockProps()}>
			{addButton}
			<TabsA heading={headerControl} items={itemControls} />
		</div>
	);

	return (
		<div {...useBlockProps()}>
			{addButton}
			<TabsA heading={attributes.header} items={attributes.tabItems}/>
		</div>
	)

}
