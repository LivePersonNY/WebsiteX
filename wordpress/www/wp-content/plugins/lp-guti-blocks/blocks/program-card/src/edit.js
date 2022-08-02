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

import ProgramCard from '../../../../../../../../gatsby-sites/www/src/components/blocks/ProgramCard';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, Button, ResponsiveWrapper, ToolbarGroup, ToolbarButton, Dashicon } from '@wordpress/components';

import AddItemButton from '../../AddItemButton';
import ItemControls from '../../ItemControls';
import BackgroundSelectorMenu from '../../BackgroundSelector';
import AutoApproveLanguage from '../../AutoApproveLanguage';
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



	let itemValues = [...attributes.quotes];
	let itemControls = attributes.quotes.map((item ,index)=>{
		return {
			header: (
				<>
				<TextControl
					value={itemValues[index].header}
					onChange={function(value) {
						itemValues[index].header = value;
						setAttributes({ quotes: itemValues});
					}}
					className="embedded-input"
				/>
				<ItemControls index={index} itemArray={itemValues} callback={function(items) {
					setAttributes({ quotes: items});
				}}/>
				</>
			),
			kicker: (
				<TextControl
					value={itemValues[index].kicker}
					onChange={function(value) {
						itemValues[index].kicker = value;
						setAttributes({ quotes: itemValues});
					}}
					className="embedded-input"
				/>
			),
			eventDate: (
				<TextControl
					value={itemValues[index].eventDate}
					onChange={function(value) {
						itemValues[index].eventDate = value;
						setAttributes({ quotes: itemValues});
					}}
					className="embedded-input"
				/>
			),
			eventTime: (
				<TextControl
					value={itemValues[index].eventTime}
					onChange={function(value) {
						itemValues[index].eventTime = value;
						setAttributes({ quotes: itemValues});
					}}
					className="embedded-input"
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
			body: (
				<RichText
					value={itemValues[index].body}
					onChange={function(value) {
						itemValues[index].body = value;
						setAttributes({ quotes: itemValues});
					}}
					allowedFormats={['core/bold', 'core/italic', 'core/link']}
				/>

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
							<img className="imageSelector" src={itemValues[index].imgSrc || `https://picsum.photos/752/568?random=${index}`} data-tab-content={index} key={index} onClick={open} />
						)}
					/>
				</MediaUploadCheck>
			)
		}
	});

	let addTabFunc = function() {

		let thisIndex = itemValues.length;

		itemValues.push({
				"kicker": "Enchantment under the sea Dance",
				"header": "Be there or be square.",
				"eventDate": "November 12, 1955",
				"eventTime": "7:00 PM",
				"body": "After Marty went into the past for the first time, he inadvertently changed how his parents met, with Marty being the one that was hit by the car and attending the dance with Lorraine instead of George. To fix his mistake, Marty formed a plan to make George look like a hero to Lorraine in order to get her to fall in love with him. The original plan was that on the night of the dance, George was to confront Marty in the school parking lot while Marty was in a car with Lorraine.",
				"btnUrl": "https://backtothefuture.fandom.com/wiki/Enchantment_Under_the_Sea",
				"btnText": "Learn More",
				"imgSrc": "https://imgc.allpostersimages.com/img/posters/enchantment-under-the-sea-dance-movie-poster_u-L-F5C1PW0.jpg?artHeight=550&artPerspective=n&artWidth=550&background=ffffff"
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
			<ProgramCard items={itemControls} runFilters={true} backgroundColor={attributes.backgroundColor}/>
		</div>
	);

	return (
		<div {...useBlockProps()}>
			<ProgramCard items={attributes.quotes} runFilters={true} backgroundColor={attributes.backgroundColor}/>
		</div>
	)

}
