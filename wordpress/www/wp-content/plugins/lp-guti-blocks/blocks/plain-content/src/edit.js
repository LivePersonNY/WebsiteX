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
import { useBlockProps, BlockControls } from '@wordpress/block-editor';
import PlainContent from '../../../../../../../../gatsby-sites/www/src/components/blocks/PlainContent';
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

	let headerControl = (
		<TextControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
			placeholder="Header Text"
		/>
	);

	let contentControl = (
		<TextareaControl
			value={ attributes.content }
			onChange={ ( val ) => setAttributes( { content: val } ) }
			className="embedded-input"
			placeholder="Body Text"
			rows="1"
		/>
	);

	let linkTextControl = (
		<div className="wp-control-wrapper">
			<TextControl
				value={ attributes.linkText }
				onChange={ ( val ) => setAttributes( { linkText: val } ) }
				className="embedded-input"
				placeholder="Link Text"
			/>

			<TextControl
				value={ attributes.linkUrl }
				onChange={ ( val ) => setAttributes( { linkUrl: val } ) }
				className="embedded-input"
				placeholder="Link URL"
			/>
		</div>
	);

	let changeAlignment = function() {
		if (attributes.alignment == "left") {
			setAttributes({ alignment: "center" });
		} else {
			setAttributes({ alignment: "left" });
		}
	}

	let changeHeadLevel = function() {
		if (attributes.headLevel == "h2") {
			setAttributes({ headLevel: "h1" });
		} else {
			setAttributes({ headLevel: "h2" });
		}
	}

	let changeColumns = function() {
		let width = attributes.colWidth;
		if (width < 12) {
			setAttributes({ colWidth: width+1 });
		} else {
			setAttributes({ colWidth: 6 });
		}
	}

	let alignButton = (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon={`editor-align${attributes.alignment}`}
					label="Alignment"
					onClick={ changeAlignment }
				/>
				<ToolbarButton
					icon="heading"
					label="Head Level"
					onClick={ changeHeadLevel }
				/>
				<ToolbarButton
					icon="image-flip-horizontal"
					label="Width"
					onClick={ changeColumns }
				/>
			</ToolbarGroup>
		</BlockControls>
	);

	if (isSelected)	{

		return (
			<div {...useBlockProps()}>
				{alignButton}
				<PlainContent colWidth={attributes.colWidth} headLevel={attributes.headLevel} alignmentClass={`text-${attributes.alignment}`} header={headerControl} content={contentControl} linkText={linkTextControl} />
			</div>

		);
	}

	return (
		<div {...useBlockProps()}>
			<PlainContent colWidth={attributes.colWidth} headLevel={attributes.headLevel} alignmentClass={`text-${attributes.alignment}`} header={attributes.header} content={attributes.content} linkText={attributes.linkText} linkUrl={attributes.linkUrl} />
		</div>
	)

}
