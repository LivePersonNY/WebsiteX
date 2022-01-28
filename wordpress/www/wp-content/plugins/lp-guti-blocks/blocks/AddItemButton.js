import { ToolbarButton } from '@wordpress/components';

export default function AddItemButton({ callback }) {
	return (<ToolbarButton
		icon="plus-alt2"
		label="Add Tab"
		onClick={callback}
	/>);
}
