/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import $ from 'jquery';
import { __experimentalGrid as Grid,Placeholder, ToolbarButton, TextControl, TextareaControl, Button, ResponsiveWrapper } from '@wordpress/components';
const { MediaUpload, MediaUploadCheck, BlockControls } = wp.blockEditor;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment } = wp.element;
import Hero from '../../../../../../../../gatsby-sites/www/src/components/blocks/Hero';
import BackgroundSelectorMenu from '../../BackgroundSelector';

import LineBreaks from '../../LineBreaks';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
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
export default function Edit({attributes, setAttributes, isSelected}) {

	const instanceId = useInstanceId( TextControl );

	let headerControl = (
		<TextareaControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
			rows="1"
			placeholder="Hero Header"
		/>
	);

	let kickerControl = (
		<TextControl
			value={ attributes.kicker }
			onChange={ ( val ) => setAttributes( { kicker: val } ) }
			className="embedded-input"
			placeholder="Kicker"
		/>
	);

	let subHeaderControl = (
		<TextareaControl
			value={ attributes.subHeader }
			onChange={ ( val ) => setAttributes( { subHeader: val } ) }
			className="embedded-input"
			rows="1"
		/>
	);

	let imageControl = (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={function(media) {
					if (media.mime == "application/json") {
						setAttributes({
							lottieFile: media.url,
							lottieId: media.id,
							mediaUrl: null,
							mediaId: null,
							mediaAlt: null
						});
					} else {
						setAttributes({
							mediaUrl: media.url,
							mediaId: media.id,
							mediaAlt: media.alt || "",
							lottieFile: null,
							lottieId: null
						});
					}
				}}
				value={attributes.mediaId || attributes.lottieId}
				allowedTypes={ ['image', 'application/json'] }
				render={({open}) => (
					<>
						{attributes.mediaUrl && <img className="imageSelector" src={attributes.mediaUrl || "https://picsum.photos/752/568?random=1"} onClick={open} />}
						{attributes.lottieFile && <img className="imageSelector" src="https://cdn.dribbble.com/users/409537/screenshots/3017834/placeholder_fadein_mockup.gif" onClick={open} />}
					</>
				)}
			/>
		</MediaUploadCheck>
	);

	let logoControl = (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={function(media) {
					setAttributes({
						logoWall: media.url,
						logoWallId: media.id,
						logoWallAlt: media.alt || ""
					});
				}}
				value={attributes.logoWallId}
				allowedTypes={ ['image'] }
				render={({open}) => (
					<>
						{attributes.logoWall && <img className="imageSelector" src={attributes.logoWall} onClick={open} /> ||
						<Button variant="link" onClick={open}>Select Image</Button>
					}
						<Button variant="link" isDestructive={true} onClick={() => setAttributes({logoWall: null, logoWallId: null})}>Remove Image</Button>
					</>

				)}
			/>
		</MediaUploadCheck>
	);

	let lottieControl = (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={function(media) {
					setAttributes({
						lottieFile: media.url,
						lottieId: media.id,
					});
				}}
				value={attributes.lottieId}
				allowedTypes={ ['application/json'] }
				render={({open}) => (
					<>
						<Button variant="link" onClick={open}>Select Lottie</Button>
						{attributes.lottieId && <Button variant="link" isDestructive={true} onClick={() => setAttributes({lottieFile: null, lottieId: null})}>Remove Lottie</Button>}
					</>
				)}
			/>
		</MediaUploadCheck>
	);

	let changeHeroBGimage = function(media) {
		setAttributes({
			backgroundImage: media.url,
			backgroundImageID: media.id,
		});
	}

	let changeBackground = function(color) {
		setAttributes({ backgroundColor: color });
	}

	let addButton = (
		<BlockControls>
			<ToolbarButton
				icon="image-flip-vertical"
				isActive={attributes.togglePadding}
				onClick={function() {
					window.jQuery('.lottie-container').html("");
					setAttributes({ togglePadding: !attributes.togglePadding });
				}}
				label="Toggle Padding"
			/>
			<BackgroundSelectorMenu callback={changeBackground} selected={attributes.backgroundColor} />
		</BlockControls>
	);

	let linkTextControl = (
		<div className="wp-control-wrapper">
			<TextControl
				value={ attributes.primaryBtnText }
				onChange={ ( val ) => setAttributes( { primaryBtnText: val } ) }
				className="embedded-input"
				placeholder="Link Text"
			/>

			<TextControl
				value={ attributes.primaryBtnLink }
				onChange={ ( val ) => setAttributes( { primaryBtnLink: val } ) }
				placeholder="Link URL"
			/>
		</div>
	);

	let linkSecondaryTextControl = (
		<div className="wp-control-wrapper">
			<TextControl
				value={ attributes.secondaryBtnText }
				onChange={ ( val ) => setAttributes( { secondaryBtnText: val } ) }
				className="embedded-input"
				placeholder="Link Text"
			/>

			<TextControl
				value={ attributes.secondaryBtnLink }
				onChange={ ( val ) => setAttributes( { secondaryBtnLink: val } ) }
				placeholder="Link URL"
			/>
		</div>
	);


	if (isSelected)	return (
		<div {...useBlockProps()}>
			{addButton}
			<MediaUploadCheck>
				<MediaUpload
					onSelect={changeHeroBGimage}
					value={attributes.backgroundImageID}
					allowedTypes={ ['image'] }
					render={({open}) => (
						<BlockControls>
							<ToolbarButton
								icon="format-image"
								onClick={open}
								label="Background Image"
							/>
							{attributes.backgroundImageID &&
								<ToolbarButton
									icon="remove"
									onClick={() => setAttributes({
										backgroundImage: '',
										backgroundImageID: null
									})}
									label="Remove Background"
								/>
							}
						</BlockControls>
					)}
				/>
			</MediaUploadCheck>
			<Hero
				lottieFile={attributes.lottieFile}
				imgLogoCtl={logoControl}
				backgroundImage={attributes.backgroundImage}
				backgroundColor={attributes.backgroundColor}
				header={headerControl}
				subHeader={subHeaderControl}
				kicker={kickerControl}
				imgCtl={imageControl}
				primaryBtnText={linkTextControl}
				secondaryBtnText={linkSecondaryTextControl}
				removePB={attributes.togglePadding}
			 />
		</div>

	);

	return (
		<div {...useBlockProps()}>
			<Hero
				underBodyImg={attributes.logoWall}
				backgroundImage={attributes.backgroundImage}
				backgroundColor={attributes.backgroundColor}
				header={attributes.header}
				subHeader={attributes.subHeader}
				kicker={attributes.kicker}
				heroImage={attributes.mediaUrl}
				heroImageAlt={attributes.mediaAlt}
				primaryBtnText={attributes.primaryBtnText}
				secondaryBtnText={attributes.secondaryBtnText}
				primaryBtnLink={attributes.primaryBtnLink}
				secondaryBtnLink={attributes.secondaryBtnLink}
				lottieFile={attributes.lottieFile}
				runFilters={true}
				removePB={attributes.togglePadding}
			/>
		</div>
	);

}
