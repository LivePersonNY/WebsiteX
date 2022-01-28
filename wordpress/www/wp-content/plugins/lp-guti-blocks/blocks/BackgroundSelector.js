import { ToolbarDropdownMenu } from '@wordpress/components';

export default function BackgroundSelectorMenu({ callback }) {

	return (<ToolbarDropdownMenu
		icon="admin-appearance"
		label="Background"
		className="colorMenu"
		controls={ [
			{
				title: 'Transparent (Default)',
				icon: 'admin-customizer bg-transparent',
				onClick: () => callback('bg-transparent')
			},
			{
				title: 'Orange',
				icon: 'admin-customizer bg-primary-orange',
				onClick: () => callback('bg-primary-orange')
			},
			{
				title: 'Rainbow',
				icon: 'admin-customizer bg-rainbow',
				onClick: () => callback('bg-rainbow')
			}
		] }
	/>);

}
