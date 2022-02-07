/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { toggleFormat } = wp.richText;
const { RichTextToolbarButton, RichTextShortcut } = wp.editor;
const { registerFormatType } = wp.richText;

/**
 * Block constants
 */
const name = 'lp-guti-blocks/heading';

export const headingFormat = {
	name,
	title: __( 'H3' ),
	tagName: 'h3',
	className: null,
	attributes: {
		style: 'style',
	},
	edit( { isActive, value, onChange } ) {
		const onToggle = () => {
			onChange(
				toggleFormat( value, {
					type: name,
					attributes: {

					},
				} )
			);
		};
		return (
			<Fragment>
				<RichTextToolbarButton
					icon="heading"
					title={ __( 'H3' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="primary"
					shortcutCharacter="u"
				/>
			</Fragment>
		);

	},
};

function registerFormats () {
	[
		headingFormat,
	].forEach( ( { name, ...settings } ) => registerFormatType( name, settings ) );
};
registerFormats();
