/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import $ from 'jquery';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, BlockControls, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import SideBySide from '../../../../../../../../gatsby-sites/www/src/components/blocks/SideBySide';
import { __experimentalGrid as Grid,Placeholder, TextControl, Button, TextareaControl, ResponsiveWrapper, ToolbarGroup, ToolbarButton } from '@wordpress/components';


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
export default function Edit({attributes, isSelected, setAttributes}) {

	let headerLeftControl = (
		<TextareaControl
			value={ attributes.headerLeft }
			onChange={ ( val ) => setAttributes( { headerLeft: val } ) }
			className="embedded-input"
			placeholder="Header Text"
			rows="1"
		/>
	);

	let headerRightControl = (
		<TextareaControl
			value={ attributes.headerRight }
			onChange={ ( val ) => setAttributes( { headerRight: val } ) }
			className="embedded-input"
			placeholder="Header Text"
			rows="1"
		/>
	);

	let contentLeftControl = (
		<RichText
			tagName="p"
			value={ attributes.bodyLeft }
			onChange={ ( val ) => setAttributes( { bodyLeft: val } ) }
			className="embedded-input"
			allowedFormats={ [ 'core/bold', 'core/italic', 'core/link'] }
			placeholder="Body Copy"
		/>
	);

	let contentRightControl = (
		<RichText
			tagName="p"
			value={ attributes.bodyRight }
			onChange={ ( val ) => setAttributes( { bodyRight: val } ) }
			className="embedded-input"
			allowedFormats={ [ 'core/bold', 'core/italic', 'core/link'] }
			placeholder="Body Copy"
		/>
	);

	let imageLeftControl = (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={function(media) {
					setAttributes({
						imgLeftSrc: media.url,
						imgLeftId: media.id,
						imgLeftAlt: media.alt || ""
					});
				}}
				value={attributes.imgLeftId}
				allowedTypes={ ['image'] }
				render={({open}) => (
					<img className="imageSelector" src={attributes.imgLeftSrc} onClick={open} />
				)}
			/>
		</MediaUploadCheck>
	);

	let imageRightControl = (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={function(media) {
					setAttributes({
						imgRightSrc: media.url,
						imgRightId: media.id,
						imgRightAlt: media.alt || ""
					});
				}}
				value={attributes.imgRightId}
				allowedTypes={ ['image'] }
				render={({open}) => (
					<img className="imageSelector" src={attributes.imgRightSrc} onClick={open} />
				)}
			/>
		</MediaUploadCheck>
	);

	if (isSelected)	{

		return (
			<div {...useBlockProps()}>
				<SideBySide
					headerLeft={headerLeftControl}
					headerRight={headerRightControl}
					bodyLeft={contentLeftControl}
					bodyRight={contentRightControl}
					imgLeftCtl={imageLeftControl}
					imgRightCtl={imageRightControl}
				/>
			</div>

		);
	}

	return (
		<div {...useBlockProps()}>
			<SideBySide
				headerLeft={attributes.headerLeft}
				headerRight={attributes.headerRight}
				bodyLeft={attributes.bodyLeft}
				bodyRight={attributes.bodyRight}
				imgLeftSrc={attributes.imgLeftSrc}
				imgRightSrc={attributes.imgRightSrc}
				imgLeftAlt={attributes.imgLeftAlt}
				imgRightAlt={attributes.imgRightAlt}
			/>
		</div>
	)

}
