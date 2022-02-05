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
import { useBlockProps, BlockControls, RichText } from '@wordpress/block-editor';
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

import BoardCards from '../../../../../../../../gatsby-sites/www/src/components/blocks/BoardCards';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, Button, ResponsiveWrapper, ToolbarGroup, ToolbarButton, Dashicon } from '@wordpress/components';

import AddItemButton from '../../AddItemButton';
import ItemControls from '../../ItemControls';
import BackgroundSelectorMenu from '../../BackgroundSelector';
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
			placeholder="Section Header"
		/>
	);

	let itemValues = [...attributes.quotes];
	let itemControls = attributes.quotes.map((item ,index)=>{
		return {
			name: (
				<>
				<TextControl
					value={itemValues[index].name}
					onChange={function(value) {
						itemValues[index].name = value;
						setAttributes({ quotes: itemValues});
					}}
					className="embedded-input"
				/>
				<ItemControls index={index} itemArray={itemValues} callback={function(items) {
					setAttributes({ quotes: items});
				}}/>
				</>
			),
			title: (
				<TextControl
					value={itemValues[index].title}
					onChange={function(value) {
						itemValues[index].title = value;
						setAttributes({ quotes: itemValues});
					}}
					className="embedded-input"
				/>
			)
		}
	});

	let addTabFunc = function() {

		let thisIndex = itemValues.length;

		itemValues.push({
				"name": "Garfield the Cat",
				"title": "Principal Lasagna Consumer",
			});
		setAttributes({
			quotes: itemValues
		});
	}

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<AddItemButton callback={addTabFunc} />
				<BackgroundSelectorMenu callback={(color) => setAttributes({backgroundColor: color})} selected={attributes.backgroundColor} />
			</ToolbarGroup>
		</BlockControls>
	);

	if (isSelected)	return (

		<div {...useBlockProps()}>
			{addButton}
			<BoardCards header={headerControl} items={itemControls} runFilters={true} backgroundColor={attributes.backgroundColor}/>
		</div>
	);

	return (
		<div {...useBlockProps()}>
			<BoardCards header={attributes.header} items={attributes.quotes} runFilters={true} backgroundColor={attributes.backgroundColor}/>
		</div>
	)

}
