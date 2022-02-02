/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, ToolbarGroup, ToolbarDropdownMenu, ToolbarButton, Dashicon, Button } from '@wordpress/components';
import LogosUniversal from '../../../../../../../../gatsby-sites/www/src/components/blocks/LogosUniversal';
import BackgroundSelectorMenu from '../../BackgroundSelector';
import ItemControls from '../../ItemControls';

import Reorder from 'react-reorder';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, BlockControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
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

	let headerControl = (
		<TextControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
		/>
	);

	let contentControl = (
		<TextareaControl
			value={ attributes.content }
			onChange={ ( val ) => setAttributes( { content: val } ) }
			className="embedded-input"
			rows="1"
		/>
	);

	let kickerControl = (
		<TextControl
			value={ attributes.kicker }
			onChange={ ( val ) => setAttributes( { kicker: val } ) }
			className="embedded-input"
		/>
	);

	let faqs = [...attributes.faqs];
	let controls = attributes.faqs.map((item ,index)=>{
		return {
			title: (
				<TextControl
					value={faqs[index].title}
					onChange={function(value) {
						faqs[index].title = value;
						setAttributes({ faqs: faqs});
					}}
					className="embedded-input"
				/>
			),
			body: (
				<div className="wp-control-wrapper">
					<TextareaControl
						value={faqs[index].body}
						onChange={function(value) {
							faqs[index].body = value;
							setAttributes({ faqs: faqs});
						}}
						className="embedded-input"
						rows="1"
					/>
					<ItemControls
						index={index}
						itemArray={faqs}
						callback={function(items) {
							setAttributes({ faqs: faqs});
						}}
					/>
				</div>
			)
		}
	});

	let linkTextControl = (
		<div className="wp-control-wrapper">
			<TextControl
				value={ attributes.btnText }
				onChange={ ( val ) => setAttributes( { btnText: val } ) }
				className="embedded-input"
				placeholder="Link Text"
			/>

			<TextControl
				value={ attributes.btnUrl }
				onChange={ ( val ) => setAttributes( { btnUrl: val } ) }
				placeholder="Link URL"
			/>
		</div>
	);

	let addTabFunc = function() {

		faqs.push({
			"img": "https://picsum.photos/224/30?random=3",
			"imgAlt": "Placeholder image"
		});
		setAttributes({
			cards: cards
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
			<LogosUniversal
				header={headerControl}
				logos={controls}
			/>
		</div>
	);

	return (
		<div { ...useBlockProps() }>
			<LogosUniversal
				header={attributes.header}
				logos={controls}
			/>
		</div>
	)
}
