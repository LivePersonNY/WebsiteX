/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import $ from "jquery";
import { useSelect } from "@wordpress/data";
import {
	__experimentalGrid as Grid,
	Placeholder,
	ToolbarButton,
	TextControl,
	TextareaControl,
	Button,
	ResponsiveWrapper,
} from "@wordpress/components";
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment } = wp.element;
import Hero from "../../../../../../../../gatsby-sites/www/src/components/blocks/Hero";
import BackgroundSelectorMenu from "../../BackgroundSelector";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import MediaPicker from "../../MediaPicker";
import LinkControl from "../../LinkControl";
import AutoApproveLanguage from "../../AutoApproveLanguage";
import LottieFilePlayer from "../../LottieFilePlayer";

import LineBreaks from "../../LineBreaks";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
	InnerBlocks,
	ButtonBlockerAppender,
	RichText,
} from "@wordpress/block-editor";
import { useInstanceId } from "@wordpress/compose";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({
	attributes,
	setAttributes,
	isSelected,
	clientId,
}) {
	const instanceId = useInstanceId(TextControl);

	let logoHeaderControl = (
		<TextareaControl
			value={attributes.logoHeader}
			onChange={(val) => setAttributes({ logoHeader: val })}
			className="embedded-input"
			rows="1"
			placeholder="Logo Header"
		/>
	);

	let headerControl = (
		<RichText
			value={attributes.header}
			onChange={(val) => setAttributes({ header: val })}
			className="embedded-input"
			placeholder="Hero Header"
			allowedFormats={["core/bold", "core/italic", "core/strikethrough"]}
		/>
	);

	let kickerControl = (
		<TextControl
			value={attributes.kicker}
			onChange={(val) => setAttributes({ kicker: val })}
			className="embedded-input"
			placeholder="Kicker"
		/>
	);

	let subHeaderControl = (
		<TextareaControl
			value={attributes.subHeader}
			onChange={(val) => setAttributes({ subHeader: val })}
			className="embedded-input"
			rows="1"
		/>
	);

	let imageControl = (
		<MediaPicker
			attributes={attributes}
			setAttributes={setAttributes}
			allowLottie={true}
		/>
	);

	let lottiePlayerElement = (
		<LottieFilePlayer
			lottieFile={attributes.lottieFile}
			autoplay={true}
			loop={true}
		/>
	);

	let vimeoUrlControls = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Vimeo URL" initialOpen={false}>
					<TextControl
						value={attributes.vimeoUrl}
						onChange={function (value) {
							setAttributes({ vimeoUrl: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let animatedTextControls = (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Animated Text" initialOpen={false}>
					<TextControl
						value={attributes.animatedText}
						onChange={function (value) {
							setAttributes({ animatedText: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);

	let logoControl = (
		<MediaUploadCheck>
			<MediaUpload
				onSelect={function (media) {
					setAttributes({
						logoWall: media.url,
						logoWallId: media.id,
						logoWallAlt: media.alt || "",
					});
				}}
				value={attributes.logoWallId}
				allowedTypes={["image"]}
				render={({ open }) => (
					<>
						{(attributes.logoWall && (
							<img
								className="imageSelector"
								src={attributes.logoWall}
								onClick={open}
							/>
						)) || (
							<Button variant="link" onClick={open}>
								Select Image
							</Button>
						)}
						<Button
							variant="link"
							isDestructive={true}
							onClick={() =>
								setAttributes({ logoWall: null, logoWallId: null })
							}
						>
							Remove Image
						</Button>
					</>
				)}
			/>
		</MediaUploadCheck>
	);

	let changeHeroBGimage = function (media) {
		setAttributes({
			backgroundImage: media.url,
			backgroundImageID: media.id,
		});
	};

	let changeBackground = function (color) {
		setAttributes({ backgroundColor: color });
	};

	let addButton = (
		<BlockControls>
			<ToolbarButton
				icon="image-flip-vertical"
				isActive={attributes.togglePadding}
				onClick={function () {
					window.jQuery(".lottie-container").html("");
					setAttributes({ togglePadding: !attributes.togglePadding });
				}}
				label="Toggle Padding"
			/>
			<AutoApproveLanguage
				callback={function () {
					setAttributes({ autoApproveLang: !attributes.autoApproveLang });
				}}
				selected={attributes.autoApproveLang}
			/>
			<BackgroundSelectorMenu
				callback={changeBackground}
				selected={attributes.backgroundColor}
			/>
		</BlockControls>
	);

	let linkTextControl = (
		<LinkControl
			text={attributes.primaryBtnText}
			url={attributes.primaryBtnLink}
			external={attributes.linkExternal}
			callback={function (text, url, external) {
				setAttributes({
					primaryBtnText: text,
					primaryBtnLink: url,
					linkExternal: external,
				});
			}}
		/>
	);

	let linkSecondaryTextControl = (
		<LinkControl
			text={attributes.secondaryBtnText}
			url={attributes.secondaryBtnLink}
			external={attributes.linkSecondaryExternal}
			callback={function (text, url, external) {
				setAttributes({
					secondaryBtnText: text,
					secondaryBtnLink: url,
					linkSecondaryExternal: external,
				});
			}}
		/>
	);

	const innerBlockCount = useSelect(
		(select) => select("core/block-editor").getBlock(clientId).innerBlocks
	);
	setAttributes({ innerBlockCount: innerBlockCount.length });

	const appenderToUse = () => {
		if (innerBlockCount.length < 1) {
			return <InnerBlocks.ButtonBlockAppender className="robsclass" />;
		} else {
			return false;
		}
	};

	if (isSelected)
		return (
			<div {...useBlockProps()}>
				{addButton}
				{vimeoUrlControls}
				{animatedTextControls}
				<MediaUploadCheck>
					<MediaUpload
						onSelect={changeHeroBGimage}
						value={attributes.backgroundImageID}
						allowedTypes={["image"]}
						render={({ open }) => (
							<BlockControls>
								<ToolbarButton
									icon="format-image"
									onClick={open}
									label="Background Image"
								/>
								{attributes.backgroundImageID && (
									<ToolbarButton
										icon="remove"
										onClick={() =>
											setAttributes({
												backgroundImage: "",
												backgroundImageID: null,
											})
										}
										label="Remove Background"
									/>
								)}
							</BlockControls>
						)}
					/>
				</MediaUploadCheck>
				<Hero
					cssClasses={attributes.className}
					lottieFile={attributes.lottieFile}
					imgLogoCtl={logoControl}
					backgroundImage={attributes.backgroundImage}
					backgroundColor={attributes.backgroundColor}
					header={headerControl}
					subHeader={subHeaderControl}
					kicker={kickerControl}
					imgCtl={!attributes.vimeoUrl && imageControl}
					primaryBtnText={linkTextControl}
					secondaryBtnText={linkSecondaryTextControl}
					runFilters={true}
					removePB={attributes.togglePadding}
					logoHeader={logoHeaderControl}
					vimeoUrl={attributes.vimeoUrl}
					autoApprove={attributes.autoApproveLang}
					/*vimeoVideoOption={<InnerBlocks allowedBlocks={['vimeo/create']} renderAppender={ () => appenderToUse() } />}*/
				/>
			</div>
		);

	return (
		<div {...useBlockProps()}>
			<Hero
				cssClasses={attributes.className}
				underBodyImg={attributes.logoWall}
				underBodyImgAlt={attributes.logoWallAlt}
				backgroundImage={attributes.backgroundImage}
				backgroundColor={attributes.backgroundColor}
				header={attributes.header}
				subHeader={attributes.subHeader}
				kicker={attributes.kicker}
				heroImage={!attributes.vimeoUrl && attributes.mediaUrl}
				heroImageAlt={attributes.mediaAlt}
				primaryBtnText={attributes.primaryBtnText}
				secondaryBtnText={attributes.secondaryBtnText}
				primaryBtnLink={attributes.primaryBtnLink}
				secondaryBtnLink={attributes.secondaryBtnLink}
				linkExternal={attributes.linkExternal}
				linkSecondaryExternal={attributes.linkSecondaryExternal}
				lottiePlayer={!attributes.vimeoUrl && lottiePlayerElement}
				removePB={attributes.togglePadding}
				logoHeader={attributes.logoHeader}
				vimeoUrl={attributes.vimeoUrl}
				animatedText={attributes.animatedText}
				autoApprove={attributes.autoApproveLang}
				/*vimeoVideoOption={<InnerBlocks
						allowedBlocks={['vimeo/create']} renderAppender={ () => appenderToUse() }
					/>}*/
			/>
		</div>
	);
}
