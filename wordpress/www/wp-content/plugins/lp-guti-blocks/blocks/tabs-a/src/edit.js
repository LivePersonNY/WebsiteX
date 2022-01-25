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
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

import TabsA from '../../../../../../../../gatsby-sites/www/src/components/blocks/TabsA';
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

	const onSelectMedia = (media) => {
		/*setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
			mediaAlt: media.alt || '',
		});*/
	}

	let itemValues = [...attributes.tabItems];
	let itemControls = attributes.tabItems.map((item ,index)=>{
		return {
			title: (
				<TextControl
					value={itemValues[index].title}
					onChange={function(value) {
						itemValues[index].title = value;
						setAttributes({ tabItems: itemValues});
					}}
					className="embedded-input"
				/>
			),
			body: (
				<div>
					<TextareaControl
						value={itemValues[index].body}
						onChange={function(value) {
							itemValues[index].body = value;
							setAttributes({ tabItems: itemValues});
						}}
						className="embedded-input"
						rows="1"
					/>
					<button
						className="v-tab-remove"
						onClick={
						function(e) {
							itemValues.splice(index, 1);
							setAttributes({ tabItems: itemValues});
						}
					}>
						<span className="dashicons-before dashicons-remove"></span>
					</button>
				</div>
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
							<img className={`comp-tabs-img ${index !== 0 ? 'display-none' : ''}`} src={itemValues[index].img || `https://picsum.photos/752/568?random=${index}`} data-tab-content={index} key={index} onClick={open} />
						)}
					/>
				</MediaUploadCheck>
			)
		}
	});

	let addTabFunc = function() {

		let thisIndex = itemValues.length;

		itemValues.push({
			title: `1914 translation by H. Rackham`,
			body: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.`,
			img: `https://picsum.photos/752/568?random=${thisIndex}`,
			imgAlt: 'An image placeholder'
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
			<TabsA heading={headerControl} items={itemControls} />
		</div>
	);

	return (
		<div {...useBlockProps()}>
			{addButton}
			<TabsA heading={attributes.header} items={attributes.tabItems}/>
		</div>
	)

}