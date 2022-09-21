import { ToolbarDropdownMenu } from '@wordpress/components';

export default function RoiCurrencySelector({ callback, selected }) {

	return (<ToolbarDropdownMenu
		icon="dashicons-money-alt"
		label="Locale"
		controls={ [
			{
				title: 'USD (Default)',
				isActive: selected == 'USD',
				icon: 'dashicons-money-alt',
				onClick: () => callback('USD')
			},
			{
				title: 'GBP',
				icon: 'dashicons-money-alt',
				isActive: selected == 'GBP',
				onClick: () => callback('GBP')
			},
			{
				title: 'EUR',
				icon: 'dashicons-money-alt',
				isActive: selected == 'EUR',
				onClick: () => callback('EUR')
			}
		] }
	/>);

}
