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

import TeamCards from '../../../../../../../../gatsby-sites/www/src/components/blocks/TeamCards';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, Button, ResponsiveWrapper, ToolbarGroup, ToolbarButton, Dashicon } from '@wordpress/components';
import AutoApproveLanguage from '../../AutoApproveLanguage';
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
				<TextareaControl
					value={itemValues[index].title}
					onChange={function(value) {
						itemValues[index].title = value;
						setAttributes({ quotes: itemValues});
					}}
					className="embedded-input"
					rows="1"
				/>
			),
			btnUrl: null,
			btnText: (
				<div className="wp-control-wrapper">
					<TextControl
						value={itemValues[index].btnText}
						onChange={function(value) {
							itemValues[index].btnText = value;
							setAttributes({ quotes: itemValues});
						}}
						className="embedded-input"
						placeholder="Link Text"
					/>
					<TextControl
						value={itemValues[index].btnUrl}
						onChange={function(value) {
							itemValues[index].btnUrl = value;
							setAttributes({ quotes: itemValues});
						}}
						placeholder="Link URL"
					/>
				</div>
			),
			imgCtl: (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={function(media) {
							itemValues[index].imgSrc = media.url;
							itemValues[index].mediaId = media.id;
							itemValues[index].imgAlt = media.alt || '';
							setAttributes({ quotes: itemValues});
						}}
						value={itemValues[index].mediaId}
						allowedTypes={ ['image'] }
						render={({open}) => (
							<img className="imageSelector" src={itemValues[index].imgSrc} data-tab-content={index} key={index} onClick={open} />
						)}
					/>
				</MediaUploadCheck>
			)
		}
	});

	let addTabFunc = function() {

		let thisIndex = itemValues.length;

		itemValues.push({
			"name": "James Sullivan",
			"title": "Top Scarer",
			"btnUrl": "https://movies.disney.com/monsters-inc",
			"btnText": "Connect with James",
			"imgSrc": "https://pbs.twimg.com/profile_images/660927373693571072/V7d5UQnA_400x400.jpg"
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
				<AutoApproveLanguage callback={function() {
					setAttributes({ autoApproveLang: !attributes.autoApproveLang});
				}} selected={attributes.autoApproveLang}/>
			</ToolbarGroup>
		</BlockControls>
	);

	if (isSelected)	return (

		<div {...useBlockProps()}>
			{addButton}
			<TeamCards header={headerControl} items={itemControls} runFilters={true} backgroundColor={attributes.backgroundColor}/>
		</div>
	);

	return (
		<div {...useBlockProps()}>
			<TeamCards header={attributes.header} items={attributes.quotes} runFilters={true} backgroundColor={attributes.backgroundColor}/>
		</div>
	)

}
