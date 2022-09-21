import { ToolbarDropdownMenu } from '@wordpress/components';

export default function RoiCurrencySelector({ callback, selected }) {

	return (<ToolbarDropdownMenu
		icon="money-alt"
		label="Currency"
		controls={ [
			{
				title: 'USD (Default)',
				isActive: selected == 'USD',
				icon: 'money-alt',
				onClick: () => callback('USD')
			},
			{
				title: 'GBP',
				icon: 'money-alt',
				isActive: selected == 'GBP',
				onClick: () => callback('GBP')
			},
			{
				title: 'EUR',
				icon: 'money-alt',
				isActive: selected == 'EUR',
				onClick: () => callback('EUR')
			}
		] }
	/>);

}
