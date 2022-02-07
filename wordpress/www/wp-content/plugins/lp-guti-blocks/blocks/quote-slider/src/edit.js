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

import QuoteSlider from '../../../../../../../../gatsby-sites/www/src/components/blocks/QuoteSlider';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, Button, ResponsiveWrapper, ToolbarGroup, ToolbarButton, Dashicon } from '@wordpress/components';

import AddItemButton from '../../AddItemButton';
import ItemControls from '../../ItemControls';
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
			header: (
				<TextControl
					value={itemValues[index].header}
					onChange={function(value) {
						itemValues[index].header = value;
						setAttributes({ quotes: itemValues});
					}}
					className="embedded-input"
				/>
			),
			linkUrl: null,
			linkText: (
				<div className="wp-control-wrapper">
					<TextControl
						value={itemValues[index].linkText}
						onChange={function(value) {
							itemValues[index].linkText = value;
							setAttributes({ quotes: itemValues});
						}}
						className="embedded-input"
						placeholder="Link Text"
					/>
					<TextControl
						value={itemValues[index].linkUrl}
						onChange={function(value) {
							itemValues[index].linkUrl = value;
							setAttributes({ quotes: itemValues});
						}}
						placeholder="Link URL"
					/>
				</div>
			),
			author: (
				<div className="wp-control-wrapper">
					<TextControl
						value={itemValues[index].author}
						onChange={function(value) {
							itemValues[index].author = value;
							setAttributes({ quotes: itemValues});
						}}
						className="embedded-input"
					/>
					<ItemControls itemArray={itemValues} callback={function(items) {
						setAttributes({ quotes: items});
					}}/>
				</div>
			),
			body: (
				<RichText
					value={itemValues[index].body}
					onChange={function(value) {
						itemValues[index].body = value;
						setAttributes({ quotes: itemValues});
					}}
					allowedFormats={['core/bold', 'core/italic']}
				/>

			),
			brandImgCtl: (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={function(media) {
							itemValues[index].brandImg = media.url;
							itemValues[index].brandImgId = media.id;
							itemValues[index].brandImgAlt = media.alt || '';
							setAttributes({ quotes: itemValues});
						}}
						value={itemValues[index].iconId}
						allowedTypes={ ['image'] }
						render={({open}) => (
							<img className="imageSelector" src={itemValues[index].brandImg || `https://loremicon.com/rect/64/64/${index}/png`} data-tab-content={index} key={index} onClick={open} />
						)}
					/>
				</MediaUploadCheck>
			),
			imgCtl: (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={function(media) {
							itemValues[index].img = media.url;
							itemValues[index].mediaId = media.id;
							itemValues[index].imgAlt = media.alt || '';
							setAttributes({ quotes: itemValues});
						}}
						value={itemValues[index].mediaId}
						allowedTypes={ ['image'] }
						render={({open}) => (
							<>
								{itemValues[index].img && <img className="imageSelector" src={itemValues[index].img} onClick={open} /> ||
								<Button className="mt-2" variant="link" onClick={open}>Select Image</Button>
							}
								<Button className="mt-2" variant="link" isDestructive={true} onClick={() => {
									itemValues[index].img = null;
									itemValues[index].mediaId = null;
									setAttributes({quotes: itemValues});
								}}>Remove Image</Button>
							</>
						)}
					/>
				</MediaUploadCheck>
			)
		}
	});

	let addTabFunc = function() {

		let thisIndex = itemValues.length;

		itemValues.push({
				"author": "Kermit D. Frog",
				"body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"linkUrl": "https://www.lipsum.com/",
				"linkText": "Learn More",
				"img": "https://picsum.photos/752/568",
				"brandImg": "https://loremicon.com/rect/64/64/8903836/png"
			});
		setAttributes({
			quotes: itemValues
		});
	}

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<AddItemButton callback={addTabFunc} />
			</ToolbarGroup>
		</BlockControls>
	);

	if (isSelected)	return (

		<div {...useBlockProps()}>
			{addButton}
			<QuoteSlider header={headerControl} items={itemControls} runFilters={true} />
		</div>
	);

	return (
		<div {...useBlockProps()}>
			{addButton}
			<QuoteSlider header={attributes.header} items={attributes.quotes} runFilters={true} />
		</div>
	)

}
