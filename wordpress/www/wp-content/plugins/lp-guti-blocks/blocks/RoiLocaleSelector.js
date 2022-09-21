import { ToolbarDropdownMenu } from '@wordpress/components';

export default function RoiLocaleSelector({ callback, selected }) {

	return (<ToolbarDropdownMenu
		icon="admin-site"
		label="Locale"
		controls={ [
			{
				title: 'en-us (Default)',
				isActive: selected == 'en-us',
				icon: 'admin-site',
				onClick: () => callback('en-us')
			},
			{
				title: 'en-gb',
				icon: 'admin-site',
				isActive: selected == 'en-gb',
				onClick: () => callback('en-gb')
			}
		] }
	/>);

}
