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

import IconTextA from '../../../../../../../../gatsby-sites/www/src/components/blocks/IconTextA';
import IconTextB from '../../../../../../../../gatsby-sites/www/src/components/blocks/IconTextB';
import IconTextC from '../../../../../../../../gatsby-sites/www/src/components/blocks/IconTextC';
import IconTextD from '../../../../../../../../gatsby-sites/www/src/components/blocks/IconTextD';

import BackgroundSelectorMenu from '../../BackgroundSelector';
import ItemControls from '../../ItemControls';

import { __experimentalGrid as Grid,Placeholder, ToolbarDropdownMenu, TextControl, TextareaControl, Button, ResponsiveWrapper, ToolbarGroup, ToolbarButton, Dashicon } from '@wordpress/components';


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
		<TextareaControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
			placeholder="Section H2 Header"
			rows="1"
		/>
	);

	let ctaBodyControl = (
		<TextareaControl
			value={ attributes.ctaBody }
			onChange={ ( val ) => setAttributes( { ctaBody: val } ) }
			className="embedded-input"
			placeholder="CTA Card Body"
			rows="1"
		/>
	);

	let btnControl = (
		<div className="wp-control-wrapper">
			<TextControl
				value={ attributes.btnText }
				onChange={ ( val ) => setAttributes( { btnText: val } ) }
				className="embedded-input"
				placeholder="Button Text"
			/>
			<TextControl
				value={ attributes.btnUrl }
				onChange={ ( val ) => setAttributes( { btnUrl: val } ) }
				placeholder="Button URL"
			/>
		</div>
	);

	let bodyControl = (
		<TextareaControl
			value={ attributes.body }
			onChange={ ( val ) => setAttributes( { body: val } ) }
			className="embedded-input"
			rows="1"
		/>
	);

	let itemValues = [...attributes.icons];
	let itemControls = attributes.icons.map((item ,index)=>{
		return {
			title: (
				<div className="wp-control-wrapper">
					<TextControl
						value={itemValues[index].title}
						onChange={function(value) {
							itemValues[index].title = value;
							setAttributes({ icons: itemValues});
						}}
						className="embedded-input"
					/>
					<ItemControls
						index={index}
						itemArray={itemValues}
						callback={function(items) {
							setAttributes({ icons: items});
						}}
					/>
				</div>
			),
			linkUrl: null,
			linkText: (
				<div className="wp-control-wrapper">
					<TextControl
						value={itemValues[index].linkText}
						onChange={function(value) {
							itemValues[index].linkText = value;
							setAttributes({ icons: itemValues});
						}}
						className="embedded-input"
						placeholder="Link Text"
					/>
					<TextControl
						value={itemValues[index].linkUrl}
						onChange={function(value) {
							itemValues[index].linkUrl = value;
							setAttributes({ icons: itemValues});
						}}
						placeholder="https://www.example.com"
					/>
				</div>
			),
			body: (
				<TextareaControl
					value={itemValues[index].body}
					onChange={function(value) {
						itemValues[index].body = value;
						setAttributes({ icons: itemValues});
					}}
					className="embedded-input"
					rows="1"
				/>

			),
			imgCtl: (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={function(media) {
							itemValues[index].img = media.url;
							itemValues[index].mediaId = media.id;
							itemValues[index].imgAlt = media.alt || '';
							setAttributes({ icons: itemValues});
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
			img:"https://loremicon.com/rect/64/64/89036836/png",
			title:"Intent Manager",
			body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
		});
		setAttributes({
			icons: itemValues
		});
	}

	let changeBackground = function(color) {
		setAttributes({ backgroundColor: color });
	}

	let ctaButton = (
		<ToolbarButton
			icon="button"
			label="CTA"
			isActive={attributes.cta}
			onClick={ function() {
				if (attributes.cta == true) {
					setAttributes({ cta: false});
				} else {
					setAttributes({ cta: true});
				}
			} }
		/>
	);

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="plus-alt2"
					label="Add"
					onClick={ addTabFunc }
				/>
				{attributes.blocktype == 'IconTextB' && ctaButton}
				<ToolbarDropdownMenu
					icon="admin-settings"
					label="Select a version"
					controls={ [
						{
							title: 'Version 1',
							isActive: attributes.blocktype == 'IconTextA',
							onClick: () => {
								setAttributes({blocktype: "IconTextA"});
							},
						},
						{
							title: 'Version 2',
							isActive: attributes.blocktype == 'IconTextB',
							onClick: () => {
								setAttributes({blocktype: "IconTextB"});
							},
						},
						{
							title: 'Version 3',
							isActive: attributes.blocktype == 'IconTextC',
							onClick: () => {
								setAttributes({blocktype: "IconTextC"});
							},
						},
						{
							title: 'Version 4',
							isActive: attributes.blocktype == 'IconTextD',
							onClick: () => {
								setAttributes({blocktype: "IconTextD"});
							},
						}
					] }
				/>
				<BackgroundSelectorMenu callback={changeBackground} selected={attributes.backgroundColor} />
			</ToolbarGroup>
		</BlockControls>
	);

	if (isSelected)	return (

		<div {...useBlockProps()}>
			{addButton}

			{attributes.blocktype == "IconTextA" && <IconTextA heading={headerControl} items={itemControls} backgroundColor={attributes.backgroundColor}/>}
			{attributes.blocktype == "IconTextB" && <IconTextB cardCTA={attributes.cta}
			cardCTAbody={ctaBodyControl}
			btnText={btnControl}
			heading={headerControl} items={itemControls} backgroundColor={attributes.backgroundColor}/>}
			{attributes.blocktype == "IconTextC" && <IconTextC heading={headerControl} items={itemControls} backgroundColor={attributes.backgroundColor}/>}
			{attributes.blocktype == "IconTextD" && <IconTextD body={bodyControl} heading={headerControl} items={itemControls} backgroundColor={attributes.backgroundColor}/>}

		</div>
	);

	return (
		<div {...useBlockProps()}>
			{addButton}
			{attributes.blocktype == "IconTextA" && <IconTextA heading={attributes.header} items={attributes.icons} backgroundColor={attributes.backgroundColor}/>}
			{attributes.blocktype == "IconTextB" && <IconTextB cardCTA={attributes.cta}
			cardCTAbody={attributes.ctaBody}
			btnText={attributes.btnText}
			btnUrl={attributes.btnUrl}
			heading={attributes.header} items={attributes.icons} backgroundColor={attributes.backgroundColor}/>}
			{attributes.blocktype == "IconTextC" && <IconTextC heading={attributes.header} items={attributes.icons} backgroundColor={attributes.backgroundColor}/>}
			{attributes.blocktype == "IconTextD" && <IconTextD body={attributes.body} heading={attributes.header} items={attributes.icons} backgroundColor={attributes.backgroundColor}/>}

		</div>
	)

}
