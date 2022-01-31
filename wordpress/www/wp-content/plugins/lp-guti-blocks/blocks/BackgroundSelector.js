import { ToolbarDropdownMenu } from '@wordpress/components';

export default function BackgroundSelectorMenu({ callback, selected }) {

	return (<ToolbarDropdownMenu
		icon="art"
		label="Background"
		controls={ [
			{
				title: 'None (Default)',
				isActive: selected == 'bg-transparent',
				icon: 'admin-customizer',
				onClick: () => callback('bg-transparent')
			},
			{
				title: 'Rainbow',
				icon: 'admin-customizer bg-rainbow',
				isActive: selected == 'bg-rainbow',
				onClick: () => callback('bg-rainbow')
			},
			{
				title: 'Lavender',
				icon: 'admin-customizer bg-lavendar-20',
				isActive: selected == 'bg-lavendar-20',
				onClick: () => callback('bg-lavendar-20')
			},
			{
				title: 'Blue',
				icon: 'admin-customizer bg-blue-20',
				isActive: selected == 'bg-blue-20',
				onClick: () => callback('bg-blue-20')
			}
		] }
	/>);

}
