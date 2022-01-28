import { ToolbarDropdownMenu } from '@wordpress/components';

export default function BackgroundSelectorMenu({ callback, selected }) {

	return (<ToolbarDropdownMenu
		icon="admin-appearance"
		label="Background"
		controls={ [
			{
				title: 'Transparent (Default)',
				isActive: selected == 'bg-transparent',
				icon: 'admin-customizer',
				onClick: () => callback('bg-transparent')
			},
			{
				title: 'Orange',
				icon: 'admin-customizer bg-primary-orange',
				isActive: selected == 'bg-primary-orange',
				onClick: () => callback('bg-primary-orange')
			},
			{
				title: 'Rainbow',
				icon: 'admin-customizer bg-rainbow',
				isActive: selected == 'bg-rainbow',
				onClick: () => callback('bg-rainbow')
			}
		] }
	/>);

}
