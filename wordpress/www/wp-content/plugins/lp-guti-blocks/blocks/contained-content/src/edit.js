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
import { useBlockProps } from '@wordpress/block-editor';
import ContainedContent from '../../../../../../../../gatsby-sites/www/src/components/blocks/ContainedContent';
import { __experimentalGrid as Grid,Placeholder, TextControl, Button, TextareaControl, ResponsiveWrapper } from '@wordpress/components';


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

	let kickerControl = (
		<TextControl
			value={ attributes.kicker }
			onChange={ ( val ) => setAttributes( { kicker: val } ) }
			className="embedded-input"
			placeholder="Kicker Text"
		/>
	);

	let headerControl = (
		<TextControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
		/>
	);

	let contentControl = (
		<TextareaControl
			value={ attributes.content }
			onChange={ ( val ) => setAttributes( { content: val } ) }
			className="embedded-input"
			rows="1"
		/>
	);

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

	if (isSelected)	{

		return (
			<div {...useBlockProps()}>
				<ContainedContent kicker={kickerControl} header={headerControl} content={contentControl} linkText={linkTextControl} />
			</div>

		);
	}

	return (
		<div {...useBlockProps()}>
			<ContainedContent kicker={attributes.kicker} header={attributes.header} content={attributes.content} linkText={attributes.linkText} linkUrl={attributes.linkUrl} />
		</div>
	)

}
