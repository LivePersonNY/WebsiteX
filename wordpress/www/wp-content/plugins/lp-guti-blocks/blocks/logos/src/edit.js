/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, ToolbarGroup, ToolbarDropdownMenu, ToolbarButton, Dashicon, Button } from '@wordpress/components';
import LogosUniversal from '../../../../../../../../gatsby-sites/www/src/components/blocks/LogosUniversal';
import BackgroundSelectorMenu from '../../BackgroundSelector';
import ItemControls from '../../ItemControls';

import Reorder from 'react-reorder';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, BlockControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
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

	let logos = [...attributes.logos];
	let controls = attributes.logos.map((item ,index)=>{
		return {
			imgCtl: (
				<div class="logo-control-wrap">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={function(media) {
							logos[index].img = media.url;
							logos[index].mediaId = media.id;
							logos[index].imgAlt = media.alt || '';
							setAttributes({ logos: logos});
						}}
						value={logos[index].mediaId}
						allowedTypes={ ['image'] }
						render={({open}) => (
							<img src={logos[index].img || `https://picsum.photos/752/568?random=${index}`} data-tab-content={index} key={index} onClick={open} />
						)}
					/>
				</MediaUploadCheck>
				<ItemControls
					index={index}
					itemArray={logos}
					callback={function(items) {
						setAttributes({ logos: logos});
					}}
				/>
				</div>
			)
		}
	});

	let addTabFunc = function() {

		logos.push({
			"img": "https://picsum.photos/224/30?random=3",
			"imgAlt": "Placeholder image"
		});
		setAttributes({
			logos: logos
		});
	}

	let changeBackground = function(color) {
		setAttributes({ backgroundColor: color });
	}

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="plus-alt2"
					label="Add"
					onClick={ addTabFunc }
				/>
				<BackgroundSelectorMenu callback={changeBackground} selected={attributes.backgroundColor} />
			</ToolbarGroup>
		</BlockControls>
	);


	if (isSelected) return (
		<div { ...useBlockProps() }>
			{addButton}
			<LogosUniversal
				header={headerControl}
				items={controls}
				backgroundColor={attributes.backgroundColor}
			/>
		</div>
	);

	return (
		<div { ...useBlockProps() }>
			<LogosUniversal
				header={attributes.header}
				items={attributes.logos}
				backgroundColor={attributes.backgroundColor}
			/>
		</div>
	)
}
