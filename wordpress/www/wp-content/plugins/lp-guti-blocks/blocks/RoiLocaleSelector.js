import { ToolbarDropdownMenu } from '@wordpress/components';

export default function RoiLocaleSelector({ callback, selected }) {

	return (<ToolbarDropdownMenu
		icon="site"
		label="Locale"
		controls={ [
			{
				title: 'en-us (Default)',
				isActive: selected == 'en-us',
				icon: 'site',
				onClick: () => callback('en-us')
			},
			{
				title: 'en-gb',
				icon: 'site',
				isActive: selected == 'en-gb',
				onClick: () => callback('en-gb')
			}
		] }
	/>);

}
