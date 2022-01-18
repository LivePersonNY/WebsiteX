/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import bootstrap from 'bootstrap';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, BlockControls } from '@wordpress/block-editor';
import TabsA from '../../../../../../../../gatsby-sites/www/src/components/blocks/TabsA';
import { __experimentalGrid as Grid,Placeholder, TextControl, Button, ResponsiveWrapper, ToolbarGroup, ToolbarButton } from '@wordpress/components';


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
					value={`Tab Title ${index+1}`}
					onChange={function(value) {
						itemValues[index].title = value;
						setAttributes({ tabItems: itemValues});
					}}
					className="embedded-input"
				/>
			)
		}
	}

	let addTabFunc = function() {

		let thisIndex = itemValues.length;

		itemValues.push({
			title: (
				<TextControl
					value={`Tab Title ${thisIndex+1}`}
					onChange={function(value) {
						itemValues[thisIndex].title = value;
						setAttributes({ tabItems: itemValues});
					}}
					className="embedded-input"
				/>
			),
			body: 'Body content.'
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
			<TabsA heading={headerControl} items={itemValues} />
		</div>
	);

	return (
		<div {...useBlockProps()}>
			{addButton}
			<TabsA heading={attributes.header} items={attributes.tabItems}/>
		</div>
	)

}
