import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function Paragraph(props) {
	if (typeof props.text === 'string') return props.text.split('\n').map(function(str, index) {
		if (str) return (<p className={props.className} key={index}>{str}</p>);
	});
	return (
		<p>
			{props.text}
		</p>
	);
}