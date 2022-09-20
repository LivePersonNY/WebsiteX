/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import bootstrap from 'bootstrap';

import '../../../../../../../../gatsby-sites/www/liveperson-scripts';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, BlockControls, RichText } from '@wordpress/block-editor';
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

import RoiCalcWP from '../../../../../../../../gatsby-sites/www/src/components/blocks/RoiCalcWP';
import { __experimentalGrid as Grid,Placeholder, TextControl, TextareaControl, Button, ResponsiveWrapper, ToolbarGroup, ToolbarButton, Dashicon } from '@wordpress/components';

import AddItemButton from '../../AddItemButton';
import ItemControls from '../../ItemControls';
import LinkControl from '../../LinkControl';
import BackgroundSelectorMenu from '../../BackgroundSelector';
import AutoApproveLanguage from '../../AutoApproveLanguage';

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
export default function Edit({attributes, isSelected, setAttributes, onChange}) {

	let headerControl = (
		<TextControl
			value={ attributes.header }
			onChange={ ( val ) => setAttributes( { header: val } ) }
			className="embedded-input"
			placeholder="How much could you improve revenue growth or reduce operating costs with Conversational AI and messaging?"
		/>
	);

	let annualWebsiteTrafficControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Annual Website Traffic" initialOpen={ true }>
					<TextControl value={attributes.annualWebsiteTraffic} onChange={function(value) {
						setAttributes({annualWebsiteTraffic: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
		// <TextControl
		// 	value={ attributes.annualWebsiteTraffic }
		// 	onChange={ ( val ) => setAttributes( { annualWebsiteTraffic: val } ) }
		// 	className="embedded-input"
		// 	placeholder="1562400000"
		// />
	);

	let convRateToSaleControl = (
		<TextControl
			value={ attributes.convRateToSale }
			onChange={ ( val ) => setAttributes( { convRateToSale: val } ) }
			className="embedded-input"
			placeholder="0.05"
		/>
	);

	let avgOrderValueControl = (
		<TextControl
			value={ attributes.avgOrderValue }
			onChange={ ( val ) => setAttributes( { avgOrderValue: val } ) }
			className="embedded-input"
			placeholder="250"
		/>
	);

	let avgCallVolumeControl = (
		<TextControl
			value={ attributes.avgCallVolume }
			onChange={ ( val ) => setAttributes( { avgCallVolume: val } ) }
			className="embedded-input"
			placeholder="33000000"
		/>
	);

	let avgCostPerCallControl = (
		<TextControl
			value={ attributes.avgCostPerCall }
			onChange={ ( val ) => setAttributes( { avgCostPerCall: val } ) }
			className="embedded-input"
			placeholder="4.50"
		/>
	);

	let firstContactResolutionControl = (
		<TextControl
			value={ attributes.firstContactResolution }
			onChange={ ( val ) => setAttributes( { firstContactResolution: val } ) }
			className="embedded-input"
			placeholder="70.00"
		/>
	);

	let localeControl = (
		<TextControl
			value={ attributes.locale }
			onChange={ ( val ) => setAttributes( { locale: val } ) }
			className="embedded-input"
			placeholder="en-us"
		/>
	);

	let currencyControl = (
		<TextControl
			value={ attributes.currency }
			onChange={ ( val ) => setAttributes( { currency: val } ) }
			className="embedded-input"
			placeholder="USD"
		/>
	);

	if (isSelected)	return (

		<div {...useBlockProps()}>
			<RoiCalcWP header={headerControl} annualWebsiteTraffic={annualWebsiteTrafficControl} convRateToSale={convRateToSaleControl} avgOrderValue={avgOrderValueControl} avgCallVolume={avgCallVolumeControl} avgCostPerCall={avgCostPerCallControl} firstContactResolution={firstContactResolutionControl} locale={localeControl} currency={currencyControl} />
		</div>
	);

	return (
		<div {...useBlockProps()}>
			<RoiCalcWP header={attributes.header} annualWebsiteTraffic={attributes.annualWebsiteTraffic} convRateToSale={attributes.convRateToSale} avgOrderValue={attributes.avgOrderValue} avgCallVolume={attributes.avgCallVolume} avgCostPerCall={attributes.avgCostPerCall} firstContactResolution={attributes.firstContactResolution} locale={attributes.locale} currency={attributes.currency} />
		</div>
	)

}
