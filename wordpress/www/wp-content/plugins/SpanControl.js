/**
 * WordPress dependencies
 */
import { useInstanceId } from '@wordpress/compose';
import { forwardRef } from '@wordpress/element';
import $ from 'jquery';

function SpanControl(
	{
		label,
		hideLabelFromVision,
		value,
		help,
		className,
		onChange,
		type = 'text',
		...props
	},
	ref
) {
	const instanceId = useInstanceId( SpanControl );
	const id = `inspector-span-control-${ instanceId }`;
	const onChangeValue = (
		/** @type {import('react').ChangeEvent<HTMLInputElement>} */
		event
	) => onChange( event.target.innerText );
	
	return (
		<input id={id} className="span-input" type="text" value={value} onInput={onChangeValue} />
	);

}

export default forwardRef( SpanControl );
