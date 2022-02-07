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
import { useBlockProps, BlockControls, RichText } from '@wordpress/block-editor';
import PlainContent from '../../../../../../../../gatsby-sites/www/src/components/blocks/PlainContent';
import { __experimentalGrid as Grid,Placeholder, TextControl, Button, TextareaControl, ResponsiveWrapper, ToolbarGroup, ToolbarButton } from '@wordpress/components';

import BackgroundSelectorMenu from '../../BackgroundSelector';
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
		<TextareaControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
			placeholder="Header Text"
			rows="2"
		/>
	);

	let kickerControl = (
		<TextControl
			value={ attributes.kicker }
			onChange={ ( val ) => setAttributes( { kicker: val } ) }
			className="embedded-input"
			placeholder="Kicker Text"
		/>
	);

	let contentControl = (
		<RichText
			tagName="p"
			value={ attributes.content }
			onChange={ ( val ) => setAttributes( { content: val } ) }
			className="embedded-input"
			allowedFormats={ [ 'core/bold', 'core/italic', 'core/link'] }
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
					label="Head Level H1/H2"
					onClick={ changeHeadLevel }
				/>
				<ToolbarButton
					icon="image-flip-horizontal"
					label="Width"
					onClick={ changeColumns }
				/>
				<BackgroundSelectorMenu selected={attributes.backgroundColor} onChange={function(color) {
					setAttributes({backgroundColor: color});
				}} />
			</ToolbarGroup>
		</BlockControls>
	);

	if (isSelected)	{

		return (
			<div {...useBlockProps()}>
				{alignButton}
				<PlainContent
					kicker={kickerControl}
					colWidth={attributes.colWidth}
					headLevel={attributes.headLevel}
					alignmentClass={`text-${attributes.alignment}`}
					header={headerControl}
					body={contentControl}
					backgroundColor={attributes.backgroundColor}
					linkText={linkTextControl} />
			</div>

		);
	}

	return (
		<div {...useBlockProps()}>
			<PlainContent
				kicker={attributes.kicker}
				colWidth={attributes.colWidth}
				headLevel={attributes.headLevel}
				alignmentClass={`text-${attributes.alignment}`}
				header={attributes.header}body={attributes.content}
				backgroundColor={attributes.backgroundColor}
				linkText={attributes.linkText}
				linkUrl={attributes.linkUrl} />
		</div>
	)

}
