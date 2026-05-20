import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType('lp-guti-blocks/content-toc', {
	edit: Edit,
	save,
	example: {},
});
