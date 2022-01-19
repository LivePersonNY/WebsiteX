/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import $ from 'jquery';
import { __experimentalGrid as Grid,Placeholder, TextareaControl, TextControl, Button, ResponsiveWrapper, CheckboxControl } from '@wordpress/components';
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment, useState } = wp.element;
import LeftRight from '../../../../../../../../gatsby-sites/www/src/components/blocks/LeftRight';
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

	const setChecked = function(state) {
		setAttributes({
			flipped: state
		});
	}
	const setCheckedRepeat = function(state) {
		setAttributes({
			repeat: state
		});
	}

	let contentControl = (
		<TextareaControl
			value={ attributes.text }
			onChange={ ( val ) => setAttributes( { text: val } ) }
			className="embedded-input"
		/>
	);

	let titleControl = (
		<TextControl
			value={ attributes.title }
			onChange={ ( val ) => setAttributes( { title: val } ) }
			className="embedded-input"
		/>
	);

	const onSelectMedia = (media) => {
		setAttributes({
			mediaId: media.id,
			mediaUrl: media.url,
			mediaAlt: media.alt || '',
		});
	}

	let linkTextControl = (
		<div className="wp-control-wrapper">
			<TextControl
				value={ attributes.linkText }
				onChange={ ( val ) => setAttributes( { linkText: val } ) }
				className="embedded-input"
			/>

			<TextControl
				value={ attributes.linkUrl }
				onChange={ ( val ) => setAttributes( { linkUrl: val } ) }
			/>
		</div>
	);


	if (isSelected)	return (
		<div {...useBlockProps()}>
			<LeftRight repeat={attributes.repeat} linkText={linkTextControl} content={contentControl} title={titleControl} flipColumns={attributes.flipped} imgSrc={attributes.mediaUrl} imgAlt={attributes.mediaAlt} />
			<Fragment>
				<InspectorControls>
					<div>
						<PanelBody
							title={__('Module Image', 'awp')}
							initialOpen={ false }
						>
							<div className="editor-post-featured-image">
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectMedia}
										value={attributes.mediaId}
										allowedTypes={ ['image'] }
										render={({open}) => (
											<Button

												className={'editor-post-featured-image__toggle'}
												onClick={open}
											>
												{__('Choose an image', 'awp')}

											</Button>
										)}
									/>
								</MediaUploadCheck>
							</div>
						</PanelBody>
						<PanelBody title="Orientation" initialOpen={ false }>
							<CheckboxControl
								label="Flip Module"
								help="Should the image be flipped to other side?"
								checked={ attributes.flipped }
								onChange={ setChecked }
							/>
						</PanelBody>
						<PanelBody title="Repeated" initialOpen={ false }>
							<CheckboxControl
								label="Repeated"
								help="Check this if you're putting this module back to back with another just like it."
								checked={ attributes.repeat }
								onChange={ setCheckedRepeat }
							/>
						</PanelBody>
					</div>
				</InspectorControls>
			</Fragment>
		</div>

	);

	return (
		<div {...useBlockProps()}>
			<LeftRight repeat={attributes.repeat} linkUrl={attributes.linkUrl} linkText={attributes.linkText} content={attributes.text} title={attributes.title} flipColumns={attributes.flipped} imgSrc={attributes.mediaUrl} imgAlt={attributes.mediaAlt} />
		</div>
	);

}
