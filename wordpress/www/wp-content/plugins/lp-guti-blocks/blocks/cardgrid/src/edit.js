/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, ToolbarGroup, ToolbarDropdownMenu, ToolbarButton, Dashicon, Button } from '@wordpress/components';
import CardGrid from '../../../../../../../../gatsby-sites/www/src/components/blocks/CardGrid';
import CardGridB from '../../../../../../../../gatsby-sites/www/src/components/blocks/CardGridB';
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
			linkUrl: null,
			linkText: (
				<div className="wp-control-wrapper">
					<TextControl
						value={cards[index].linkText}
						onChange={function(value) {
							cards[index].linkText = value;
							setAttributes({ cards: cards});
						}}
						className="embedded-input"
						placeholder="Link Text"
					/>
					<TextControl
						value={cards[index].linkUrl}
						onChange={function(value) {
							cards[index].linkUrl = value;
							setAttributes({ cards: cards});
						}}
						placeholder="Link URL"
					/>
				</div>
			),
			imgCtl: (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={function(media) {
							cards[index].img = media.url;
							cards[index].mediaId = media.id;
							cards[index].imgAlt = media.alt || '';
							setAttributes({ cards: cards});
						}}
						value={cards[index].mediaId}
						allowedTypes={ ['image'] }
						render={({open}) => (
							<img className="comp-tabs-img" src={cards[index].img || `https://picsum.photos/752/568?random=${index}`} data-tab-content={index} key={index} onClick={open} />
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
					<ItemControls
						index={index}
						itemArray={cards}
						callback={function(items) {
							setAttributes({ cards: items});
						}}
					/>
				</div>
			)
		}
	});

	let addTabFunc = function() {

		cards.push({
			"img": "https://picsum.photos/224/30?random=3",
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
					label="Add Stat"
					onClick={ addTabFunc }
				/>
				<ToolbarDropdownMenu
					icon="admin-settings"
					label="Select a version"
					controls={ [
						{
							title: 'Version 1',
							isActive: attributes.blocktype == 'CardGrid',
							onClick: () => {
								setAttributes({blocktype: "CardGrid"});
							},
						},
						{
							title: 'Version 2',
							isActive: attributes.blocktype == 'CardGridB',
							onClick: () => {
								setAttributes({blocktype: "CardGridB"});
							},
						}
					] }
				/>
				<BackgroundSelectorMenu callback={changeBackground} selected={attributes.backgroundColor} />
			</ToolbarGroup>
		</BlockControls>
	);


	if (isSelected) return (
		<div { ...useBlockProps() }>
			{addButton}
			{attributes.blocktype == "CardGrid" &&
			<CardGrid
				header={headerControl}
				items={controls}
				backgroundColor={attributes.backgroundColor}
			/>}
			{attributes.blocktype == "CardGridB" &&
			<CardGridB
				header={headerControl}
				items={controls}
				content={contentControl}
				backgroundColor={attributes.backgroundColor}
			/>}
		</div>
	);

	return (
		<div { ...useBlockProps() }>
			{addButton}
			{attributes.blocktype == "CardGrid" &&
			<CardGrid
				header={attributes.header}
				items={attributes.cards}
				backgroundColor={attributes.backgroundColor}
			/>}
			{attributes.blocktype == "CardGridB" &&
			<CardGridB
				header={attributes.header}
				items={attributes.cards}
				content={attributes.content}
				backgroundColor={attributes.backgroundColor}
			/>}
		</div>
	)
}
