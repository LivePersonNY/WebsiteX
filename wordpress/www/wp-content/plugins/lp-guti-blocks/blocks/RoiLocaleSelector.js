import { ToolbarDropdownMenu } from '@wordpress/components';

export default function RoiLocaleSelector({ callback, selected }) {

	return (<ToolbarDropdownMenu
		icon="globe_with_meridians"
		label="Locale"
		controls={ [
			{
				title: 'en-us (Default)',
				isActive: selected == 'en-us',
				icon: 'globe_with_meridians',
				onClick: () => callback('en-us')
			},
			{
				title: 'en-gb',
				icon: 'globe_with_meridians',
				isActive: selected == 'en-gb',
				onClick: () => callback('en-gb')
			}
		] }
	/>);

}
