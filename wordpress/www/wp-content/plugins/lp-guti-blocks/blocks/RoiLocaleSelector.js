import { ToolbarDropdownMenu } from '@wordpress/components';

export default function RoiLocaleSelector({ callback, selected }) {

	return (<ToolbarDropdownMenu
		icon="art"
		label="Background"
		controls={ [
			{
				title: 'en-us (Default)',
				isActive: selected == 'en-us',
				icon: 'admin-customizer',
				onClick: () => callback('en-us')
			},
			{
				title: 'en-gb',
				icon: 'admin-customizer',
				isActive: selected == 'en-gb',
				onClick: () => callback('en-gb')
			}
		] }
	/>);

}
