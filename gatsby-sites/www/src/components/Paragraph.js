import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function Paragraph(props) {
	if (typeof props.text === 'string') return props.text.split('\n').map(function(str, index) {
		if (str) return (<p className={props.className} key={index}>{str}</p>);
	});
<<<<<<< HEAD
	return props.text || null;
=======
	return (
		<p>
			{props.text}
		</p>
	);
>>>>>>> c79d99e150a75c92a8729e40cd6eb5b7f7bc2ab2
}