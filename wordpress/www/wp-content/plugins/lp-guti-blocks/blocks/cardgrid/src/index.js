/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('lp-guti-blocks/cardgrid', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,

	example: {
		attributes: {
			blocktype: 'CardGridB',
			cards: [
				{
					"imgSrc": "https://picsum.photos/224/30?random=3",
					"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
					"linkText": "More about Lorem",
					"linkUrl": "#"
				},
				{
					"imgSrc": "https://picsum.photos/224/30?random=3",
					"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
					"linkText": "More about Lorem",
					"linkUrl": "#"
				},
				{
					"imgSrc": "https://picsum.photos/224/30?random=4",
					"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
					"linkText": "More about Lorem",
					"linkUrl": "#"
				},
				{
					"imgSrc": "https://picsum.photos/224/30?random=5",
					"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
					"linkText": "More about Lorem",
					"linkUrl": "#"
				}
			],
			header: "Card Grid",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor"
		}
	}

});
