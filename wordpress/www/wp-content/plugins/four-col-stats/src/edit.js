/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { __experimentalGrid as Grid,Placeholder, TextControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
//import StatsGrid from '../../../../../../gatsby-sites/www/src/components/blocks/StatsGrid';

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
export default function Edit({ attributes, className, setAttributes }) {
	return (
		<div { ...useBlockProps() }>
			<div class="row">
				<div class="col">
					<h3>
						<TextControl
							value={ attributes.heading }
							onChange={ ( val ) => setAttributes( { heading: val } ) }
							placeholder="Module Header"
						/>
					</h3>
				</div>
			</div>
			<Grid columns={ 4 }>
				<div class="col">
					<TextControl
						value={ attributes.stat1 }
						onChange={ ( val ) => setAttributes( { stat1: val } ) }
					/>
					<TextControl
						value={ attributes.content1 }
						onChange={ ( val ) => setAttributes( { content1: val } ) }
					/>
				</div>
				<div class="col">
					<TextControl
						value={ attributes.stat2 }
						onChange={ ( val ) => setAttributes( { stat2: val } ) }
					/>
					<TextControl
						value={ attributes.content2 }
						onChange={ ( val ) => setAttributes( { content2: val } ) }
					/>
				</div>
				<div class="col">
					<TextControl
						value={ attributes.stat3 }
						onChange={ ( val ) => setAttributes( { stat3: val } ) }
					/>
					<TextControl
						value={ attributes.content3 }
						onChange={ ( val ) => setAttributes( { content3: val } ) }
					/>
				</div>
				<div class="col">
					<TextControl
						value={ attributes.stat4 }
						onChange={ ( val ) => setAttributes( { stat4: val } ) }
					/>
					<TextControl
						value={ attributes.content4 }
						onChange={ ( val ) => setAttributes( { content4: val } ) }
					/>
				</div>
			</Grid>
		</div>
	);
}
