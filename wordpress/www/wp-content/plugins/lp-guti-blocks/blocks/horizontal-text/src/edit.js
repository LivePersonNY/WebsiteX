/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, ToolbarGroup, ToolbarDropdownMenu, ToolbarButton, Dashicon, Button } from '@wordpress/components';
import HorizontalText from '../../../../../../../../gatsby-sites/www/src/components/blocks/HorizontalText';
import BackgroundSelectorMenu from '../../BackgroundSelector';
import ItemControls from '../../ItemControls';

import Reorder from 'react-reorder';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, BlockControls, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { useInstanceId } from '@wordpress/compose';


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
export default function Edit({ attributes, className, setAttributes, isSelected }) {

	let text = [...attributes.text];
	let controls = attributes.text.map((item ,index)=>{
		return {
			header: (
				<TextControl
					value={text[index].header}
					onChange={function(value) {
						text[index].header = value;
						setAttributes({ text: text});
					}}
					className="embedded-input"
					placeholder="Header Text"
				/>
			),
			body: (
				<div className="wp-control-wrapper">
					<RichText
						value={text[index].body}
						onChange={function(value) {
							text[index].body = value;
							setAttributes({ text: text});
						}}
						allowedFormats={['core/bold', 'core/italic', 'core/link']}
						placeholder="Body Text"
					/>
					<ItemControls
						index={index}
						itemArray={text}
						callback={function(items) {
							setAttributes({ text: items});
						}}
					/>
				</div>
			)
		}
	});


	let addTabFunc = function() {

		text.push({
			"header": "Dude, where's my car?",
			"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
		});
		setAttributes({
			text: text
		});
	}

	let changeBackground = function(color) {
		setAttributes({ backgroundColor: color });
	}

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="plus-alt2"
					label="Add"
					onClick={ addTabFunc }
				/>

				<BackgroundSelectorMenu callback={changeBackground} selected={attributes.backgroundColor} />
			</ToolbarGroup>
		</BlockControls>
	);


	if (isSelected) return (
		<div { ...useBlockProps() }>
			{addButton}
			<HorizontalText
				items={controls}
				backgroundColor={attributes.backgroundColor}
			/>
		</div>
	);

	return (
		<div { ...useBlockProps() }>
			<HorizontalText
				items={attributes.text}
				backgroundColor={attributes.backgroundColor}
			/>
		</div>
	)
}
