/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { __experimentalGrid as Grid,Placeholder, TextControl } from '@wordpress/components';
import StatsGrid from '../../../../../../../../gatsby-sites/www/src/components/blocks/StatsGrid';


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
export default function Edit({ attributes, className, setAttributes, isSelected }) {

	let headerControl = (
		<TextControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
		/>
	);

	let stat1 = (
		<TextControl
			value={ attributes.stat1 }
			onChange={ ( val ) => setAttributes( { stat1: val } ) }
			className="embedded-input"
		/>
	);
	let stat2 = (
		<TextControl
			value={ attributes.stat2 }
			onChange={ ( val ) => setAttributes( { stat2: val } ) }
			className="embedded-input"
		/>
	);
	let stat3 = (
		<TextControl
			value={ attributes.stat3 }
			onChange={ ( val ) => setAttributes( { stat3: val } ) }
			className="embedded-input"
		/>
	);
	let stat4 = (
		<TextControl
			value={ attributes.stat4 }
			onChange={ ( val ) => setAttributes( { stat4: val } ) }
			className="embedded-input"
		/>
	);

	let content1 = (
		<TextControl
			value={ attributes.content1 }
			onChange={ ( val ) => setAttributes( { content1: val } ) }
			className="embedded-input"
		/>
	);
	let content2 = (
		<TextControl
			value={ attributes.content2 }
			onChange={ ( val ) => setAttributes( { content2: val } ) }
			className="embedded-input"
		/>
	);
	let content3 = (
		<TextControl
			value={ attributes.content3 }
			onChange={ ( val ) => setAttributes( { content3: val } ) }
			className="embedded-input"
		/>
	);
	let content4 = (
		<TextControl
			value={ attributes.content4 }
			onChange={ ( val ) => setAttributes( { content4: val } ) }
			className="embedded-input"
		/>
	);

	if (isSelected) return (
		<div { ...useBlockProps() }>
			<StatsGrid
				heading={headerControl}
				stat1={stat1}
				stat2={stat2}
				stat3={stat3}
				stat4={stat4}
				content1={content1}
				content2={content2}
				content3={content3}
				content4={content4}
			/>
		</div>
	);
	return (
		<div { ...useBlockProps() }>
			<StatsGrid
				heading={attributes.header}
				stat1={attributes.stat1}
				stat2={attributes.stat2}
				stat3={attributes.stat3}
				stat4={attributes.stat4}
				content1={attributes.content1}
				content2={attributes.content2}
				content3={attributes.content3}
				content4={attributes.content4}
			/>
		</div>
	)
}
