/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import $ from 'jquery';
import { __experimentalGrid as Grid,Placeholder, TextControl, Button, ResponsiveWrapper } from '@wordpress/components';
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment } = wp.element;

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useInstanceId } from '@wordpress/compose';
import SpanControl from '../../SpanControl';

import Hero from './Hero';

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
		<TextControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
		/>
	);

	let kickerControl = (
		<TextControl
			value={ attributes.kicker }
			onChange={ ( val ) => setAttributes( { kicker: val } ) }
			className="embedded-input"
		/>
	);

	let subHeaderControl = (
		<TextControl
			value={ attributes.subHeader }
			onChange={ ( val ) => setAttributes( { subHeader: val } ) }
			className="embedded-input"
		/>
	);

	const onSelectMedia = (media) => {
		setAttributes({
			mediaId: media.id,
			mediaUrl: media.url
		});
	}


	if (isSelected)	return (
		<div {...useBlockProps()}>
			<Hero header={headerControl} subHeader={subHeaderControl} kicker={kickerControl} heroImage={attributes.mediaUrl} />
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__('Select hero image', 'awp')}
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
				</InspectorControls>
			</Fragment>
		</div>

	);

	return (
		<div {...useBlockProps()}>
			<Hero header={attributes.header} subHeader={attributes.subHeader} kicker={attributes.kicker} heroImage={attributes.mediaUrl} />
		</div>
	);

}
