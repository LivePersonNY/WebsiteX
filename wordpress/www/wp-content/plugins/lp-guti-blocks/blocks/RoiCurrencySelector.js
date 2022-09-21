import { ToolbarDropdownMenu } from '@wordpress/components';

export default function RoiCurrencySelector({ callback, selected }) {

	return (<ToolbarDropdownMenu
		icon="moneybag"
		label="Currency"
		controls={ [
			{
				title: 'USD (Default)',
				isActive: selected == 'USD',
				icon: 'moneybag',
				onClick: () => callback('USD')
			},
			{
				title: 'GBP',
				icon: 'moneybag',
				isActive: selected == 'GBP',
				onClick: () => callback('GBP')
			},
			{
				title: 'EUR',
				icon: 'moneybag',
				isActive: selected == 'EUR',
				onClick: () => callback('EUR')
			}
		] }
	/>);

}
