import { ToolbarButton } from '@wordpress/components';

export default function AutoApproveLanguage({ callback, selected }) {


	return (
		<ToolbarButton
			icon="translation"
			label="Auto-approve Phrases"
			isActive={selected}
			onClick={callback}
		/>
	);

}
