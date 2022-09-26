import { ToolbarDropdownMenu } from '@wordpress/components';

export default function RoiTemplateSelector({ callback, selected }) {

	return (<ToolbarDropdownMenu
		icon="layout"
		label="Locale"
		controls={ [
			{
				title: 'Generic (Default)',
				isActive: selected == 'generic',
				icon: 'layout',
				onClick: () => callback('generic')
			},
			{
				title: 'Care',
				icon: 'layout',
				isActive: selected == 'care',
				onClick: () => callback('care')
			},
			{
				title: 'Sales',
				icon: 'layout',
				isActive: selected == 'sales',
				onClick: () => callback('sales')
			}
		] }
	/>);

}
