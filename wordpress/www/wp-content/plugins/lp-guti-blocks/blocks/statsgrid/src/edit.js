/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import {
	__experimentalGrid as Grid,
	Placeholder,
	TextControl,
	ToolbarGroup,
	ToolbarButton,
	Dashicon,
	Button,
} from "@wordpress/components";
import StatsGrid from "../../../../../../../../gatsby-sites/www/src/components/blocks/StatsGrid";
import ItemControls from "../../ItemControls";
import AutoApproveLanguage from "../../AutoApproveLanguage";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, BlockControls } from "@wordpress/block-editor";
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
	className,
	setAttributes,
	isSelected,
}) {
	let headerControl = (
		<RichText
			value={attributes.header}
			onChange={(val) => setAttributes({ header: val })}
			className="embedded-input"
			placeholder="Section Header"
			allowedFormats={["core/bold", "core/italic", "core/strikethrough"]}
		/>
	);

	let contentControl = (
		<RichText
			tagName="p"
			value={attributes.content}
			onChange={(val) => setAttributes({ content: val })}
			className="embedded-input"
			allowedFormats={["core/bold", "core/italic", "core/link", "core/list"]}
		/>
	);

	let stack = [...attributes.statItems];
	let controls = attributes.statItems.map((item, index) => {
		return {
			stat: (
				<TextControl
					value={stack[index].stat}
					onChange={function (value) {
						stack[index].stat = value;
						setAttributes({ statItems: stack });
					}}
					className="embedded-input"
				/>
			),
			body: (
				<div className="wp-control-wrapper">
					<TextControl
						value={stack[index].body}
						onChange={function (value) {
							stack[index].body = value;
							setAttributes({ statItems: stack });
						}}
						className="embedded-input"
						placeholder="Some data about the stat"
					/>
					<ItemControls
						index={index}
						itemArray={stack}
						callback={function (items) {
							setAttributes({ statItems: items });
						}}
					/>
				</div>
			),
		};
	});

	let addTabFunc = function () {
		stack.push({
			stat: "42",
			body: "The answer to the great question",
		});
		setAttributes({
			statItems: stack,
		});
	};

	let addButton = (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton icon="plus-alt2" label="Add Stat" onClick={addTabFunc} />
				<AutoApproveLanguage
					callback={function () {
						setAttributes({ autoApproveLang: !attributes.autoApproveLang });
					}}
					selected={attributes.autoApproveLang}
				/>
			</ToolbarGroup>
		</BlockControls>
	);

	if (isSelected)
		return (
			<div {...useBlockProps()}>
				{addButton}
				<StatsGrid
					header={headerControl}
					body={contentControl}
					items={controls}
					autoApprove={attributes.autoApproveLang}
				/>
			</div>
		);
	return (
		<div {...useBlockProps()}>
			{addButton}
			<StatsGrid
				header={attributes.header}
				body={attributes.content}
				items={attributes.statItems}
				autoApprove={attributes.autoApproveLang}
			/>
		</div>
	);
}
