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
				title: 'Gradiant Image',
				icon: 'admin-customizer bg-grad-image',
				isActive: selected == 'bg-grad-image',
				onClick: () => callback('bg-grad-image')
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
			},
			{
				title: 'Gray',
				icon: 'admin-customizer bg-neutral-96',
				isActive: selected == 'bg-neutral-96',
				onClick: () => callback('bg-neutral-96')
			},
			{
				title: 'Light Gray',
				icon: 'admin-customizer bg-primary-light',
				isActive: selected == 'bg-primary-light',
				onClick: () => callback('bg-primary-light')
			}
		] }
	/>);

}
