/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, ToolbarGroup, ToolbarDropdownMenu, ToolbarButton, Dashicon, Button } from '@wordpress/components';
import CardGrid from '../../../../../../../../gatsby-sites/www/src/components/blocks/CardGrid';
import CardGridB from '../../../../../../../../gatsby-sites/www/src/components/blocks/CardGridB';

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
					/>
					<TextControl
						value={cards[index].linkUrl}
						onChange={function(value) {
							cards[index].linkUrl = value;
							setAttributes({ cards: cards});
						}}
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
					<a
						className="stat-remove"
						onClick={
						function(e) {
							cards.splice(index, 1);
							setAttributes({ cards: cards});
						}
					}>
						<span className="dashicons-before dashicons-remove"></span>
					</a>
					<a
						className="stat-left"
						onClick={
						function(e) {
							var new_index = index-1;
							var old_index = index;
							if (new_index < 0) {
								new_index = cards.length-1
							}
							cards.splice(new_index, 0, cards.splice(old_index, 1)[0]);
							setAttributes({ cards: cards});
						}
					}>
						<span className="dashicons-before dashicons-arrow-left-alt"></span>
					</a>
					<a
						className="stat-right"
						onClick={
						function(e) {
							var new_index = index+1;
							var old_index = index;
							if (new_index >= cards.length) {
								new_index = 0;
							}
							cards.splice(new_index, 0, cards.splice(old_index, 1)[0]);
							setAttributes({ cards: cards});
						}
					}>
						<span className="dashicons-before dashicons-arrow-right-alt"></span>
					</a>
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
					label="Select a variant"
					controls={ [
						{
							title: 'Version 1',
							onClick: () => {
								setAttributes({blocktype: "CardGrid"});
							},
						},
						{
							title: 'Version 2',
							onClick: () => {
								setAttributes({blocktype: "CardGridB"});
							},
						}
					] }
				/>
			</ToolbarGroup>
		</BlockControls>
	);


	if (isSelected) return (
		<div { ...useBlockProps() }>
			{addButton}
			{attributes.blocktype == "CardGrid" &&
			<CardGrid
				heading={headerControl}
				items={controls}
			/>}
			{attributes.blocktype == "CardGridB" &&
			<CardGridB
				heading={headerControl}
				items={controls}
				content={contentControl}
			/>}
		</div>
	);

	return (
		<div { ...useBlockProps() }>
			{addButton}
			{attributes.blocktype == "CardGrid" &&
			<CardGrid
				heading={attributes.header}
				items={attributes.cards}
			/>}
			{attributes.blocktype == "CardGridB" &&
			<CardGridB
				heading={attributes.header}
				items={attributes.cards}
				content={attributes.content}
			/>}
		</div>
	)
}
