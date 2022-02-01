/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, ToolbarGroup, ToolbarDropdownMenu, ToolbarButton, Dashicon, Button } from '@wordpress/components';
import CalloutGrid from '../../../../../../../../gatsby-sites/www/src/components/blocks/CalloutGrid';
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
			placeholder="Section Header"
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

	let cards = [...attributes.cards];
	let controls = attributes.cards.map((item ,index)=>{
		return {
			imgCtl: (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={function(media) {
							cards[index].imgSrc = media.url;
							cards[index].mediaId = media.id;
							cards[index].imgAlt = media.alt || '';
							setAttributes({ cards: cards});
						}}
						value={cards[index].mediaId}
						allowedTypes={ ['image'] }
						render={({open}) => (
							<img src={cards[index].imgSrc || `https://picsum.photos/752/568?random=${index}`} data-tab-content={index} key={index} onClick={open} />
						)}
					/>
				</MediaUploadCheck>
			),
			body: (
				<div className="wp-control-wrapper">
					<TextareaControl
						value={cards[index].body}
						onChange={function(value) {
							cards[index].body = value;
							setAttributes({ cards: cards});
						}}
						className="embedded-input"
						rows="1"
					/>
					<TextControl
						value={cards[index].linkUrl}
						onChange={function(value) {
							cards[index].linkUrl = value;
							setAttributes({ cards: cards});
						}}
						placeholder="Link URL"
					/>
					<ItemControls
						index={index}
						itemArray={cards}
						callback={function(items) {
							setAttributes({ cards: items});
						}}
					/>
				</div>
			),
			category: (
				<TextControl
					value={cards[index].category}
					onChange={function(value) {
						cards[index].category = value;
						setAttributes({ cards: cards});
					}}
					placeholder="Category"
				/>
			),
			author: (
				<TextControl
					value={cards[index].author}
					onChange={function(value) {
						cards[index].author = value;
						setAttributes({ cards: cards});
					}}
					placeholder="Category"
				/>
			)
		}
	});

	let linkTextControl = (
		<div className="wp-control-wrapper">
			<TextControl
				value={ attributes.linkText }
				onChange={ ( val ) => setAttributes( { linkText: val } ) }
				className="embedded-input"
				placeholder="Show All"
			/>

			<TextControl
				value={ attributes.linkUrl }
				onChange={ ( val ) => setAttributes( { linkUrl: val } ) }
				placeholder="URL"
			/>
		</div>
	);

	let addTabFunc = function() {

		cards.push({
			"imgSrc": "https://picsum.photos/224/30?random=3",
			"category": "Being Green",
			"author": "Kermit D. Frog",
			"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
			"linkText": "More about Lorem",
			"linkUrl": "#"
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
					label="Add Card"
					onClick={ addTabFunc }
				/>
				<BackgroundSelectorMenu callback={changeBackground} selected={attributes.backgroundColor} />
			</ToolbarGroup>
		</BlockControls>
	);


	if (isSelected) return (
		<div { ...useBlockProps() }>
			{addButton}
			<CalloutGrid
				header={headerControl}
				body={contentControl}
				items={controls}
				linkText={linkTextControl}
				backgroundColor={attributes.backgroundColor}
			/>
		</div>
	);

	return (
		<div { ...useBlockProps() }>
			<CalloutGrid
				header={attributes.header}
				items={attributes.cards}
				body={attributes.content}
				linkText={attributes.linkText}
				linkUrl={attributes.linkUrl}
				backgroundColor={attributes.backgroundColor}
			/>
		</div>
	)
}
