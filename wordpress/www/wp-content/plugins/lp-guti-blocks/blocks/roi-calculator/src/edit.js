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
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment, useState } = wp.element;
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
import RoiLocaleSelector from '../../RoiLocaleSelector';

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
	);

	let convRateToSaleControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Conv Rate To Sale" initialOpen={ true }>
					<TextControl value={attributes.convRateToSale} onChange={function(value) {
						setAttributes({convRateToSale: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let avgOrderValueControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Avg Order Value" initialOpen={ true }>
					<TextControl value={attributes.avgOrderValue} onChange={function(value) {
						setAttributes({avgOrderValue: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let avgCallVolumeControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Avg Call Volume" initialOpen={ true }>
					<TextControl value={attributes.avgCallVolume} onChange={function(value) {
						setAttributes({avgCallVolume: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let avgCostPerCallControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Avg Cost Per Call" initialOpen={ true }>
					<TextControl value={attributes.avgCostPerCall} onChange={function(value) {
						setAttributes({avgCostPerCall: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let firstContactResolutionControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="First Contact Resolution" initialOpen={ true }>
					<TextControl value={attributes.firstContactResolution} onChange={function(value) {
						setAttributes({firstContactResolution: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let localeControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Locale" initialOpen={ true }>
					<RoiLocaleSelector selected={attributes.locale} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let currencyControl = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Currency" initialOpen={ true }>
					<TextControl value={attributes.currency} onChange={function(value) {
						setAttributes({currency: value});
					}} />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	if (isSelected)	return (

		<div {...useBlockProps()}>
			{annualWebsiteTrafficControl}
			{convRateToSaleControl}
			{avgOrderValueControl}
			{avgCallVolumeControl}
			{avgCostPerCallControl}
			{firstContactResolutionControl}
			{localeControl}
			{currencyControl}
			<RoiCalcWP header={headerControl} annualWebsiteTraffic={annualWebsiteTrafficControl} convRateToSale={convRateToSaleControl} avgOrderValue={avgOrderValueControl} avgCallVolume={avgCallVolumeControl} avgCostPerCall={avgCostPerCallControl} firstContactResolution={firstContactResolutionControl} locale={localeControl} currency={currencyControl} />
		</div>
	);

	return (
		<div {...useBlockProps()}>
			<RoiCalcWP header={attributes.header} annualWebsiteTraffic={attributes.annualWebsiteTraffic} convRateToSale={attributes.convRateToSale} avgOrderValue={attributes.avgOrderValue} avgCallVolume={attributes.avgCallVolume} avgCostPerCall={attributes.avgCostPerCall} firstContactResolution={attributes.firstContactResolution} locale={attributes.locale} currency={attributes.currency} />
		</div>
	)

}
