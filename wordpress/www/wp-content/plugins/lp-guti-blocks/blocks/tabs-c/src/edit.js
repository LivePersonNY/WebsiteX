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
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

import TabsC from '../../../../../../../../gatsby-sites/www/src/components/blocks/TabsC';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, Button, ResponsiveWrapper, ToolbarGroup, ToolbarButton, Dashicon } from '@wordpress/components';


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
			header: (
				<TextControl
					value={itemValues[index].header}
					onChange={function(value) {
						itemValues[index].header = value;
						setAttributes({ tabItems: itemValues});
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
							setAttributes({ tabItems: itemValues});
						}}
						className="embedded-input"
					/>
					<TextControl
						value={itemValues[index].linkUrl}
						onChange={function(value) {
							itemValues[index].linkUrl = value;
							setAttributes({ tabItems: itemValues});
						}}
					/>
				</div>
			),
			title: (
				<div className="wp-control-wrapper">
					<TextControl
						value={itemValues[index].title}
						onChange={function(value) {
							itemValues[index].title = value;
							setAttributes({ tabItems: itemValues});
						}}
						className="embedded-input"
					/>
					<a
						className="v-tab-remove"
						onClick={
						function(e) {
							itemValues.splice(index, 1);
							setAttributes({ tabItems: itemValues});
						}
					}>
						<span className="dashicons-before dashicons-remove"></span>
					</a>
				</div>
			),
			kicker: itemValues[index].title,
			body: (
				<TextareaControl
					value={itemValues[index].body}
					onChange={function(value) {
						itemValues[index].body = value;
						setAttributes({ tabItems: itemValues});
					}}
					className="embedded-input"
					rows="1"
				/>

			),
			iconCtl: (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={function(media) {
							itemValues[index].icon = media.url;
							itemValues[index].iconId = media.id;
							itemValues[index].iconAlt = media.alt || '';
							setAttributes({ tabItems: itemValues});
						}}
						value={itemValues[index].iconId}
						allowedTypes={ ['image'] }
						render={({open}) => (
							<img src={itemValues[index].icon || `https://loremicon.com/rect/64/64/${index}/png`} data-tab-content={index} key={index} onClick={open} />
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
							setAttributes({ tabItems: itemValues});
						}}
						value={itemValues[index].mediaId}
						allowedTypes={ ['image'] }
						render={({open}) => (
							<img src={itemValues[index].img || `https://picsum.photos/752/568?random=${index}`} data-tab-content={index} key={index} onClick={open} />
						)}
					/>
				</MediaUploadCheck>
			)
		}
	});

	let addTabFunc = function() {

		let thisIndex = itemValues.length;

		itemValues.push({
			title: `The Translation`,
			header: `1914 translation by H. Rackham`,
			body: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`,
			linkUrl: 'https://www.lipsum.com/',
			linkText: 'Learn More',
			img: `https://picsum.photos/752/568?random=${thisIndex}`,
			imgAlt: 'An image placeholder',
			icon: `https://loremicon.com/rect/64/64/${thisIndex}/png`,
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
			<TabsC heading={headerControl} items={itemControls} runFilters={true} />
		</div>
	);

	return (
		<div {...useBlockProps()}>
			{addButton}
			<TabsC heading={attributes.header} items={attributes.tabItems} runFilters={true}/>
		</div>
	)

}