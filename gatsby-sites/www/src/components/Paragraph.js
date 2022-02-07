import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Parser from 'html-react-parser';

export default function Paragraph(props) {
	
	var fullText;
	
	if (typeof props.text === 'string') {
		fullText = props.text.split('<br>').map(function(str, index) {
			console.log(str);
			if (str.trim()) return (<p className={props.className} data-tag="br split" key={index}>{Parser(str)}</p>);
		});
		
		if (fullText) return fullText;
		
		fullText = props.text.split('\n').map(function(str, index) {
			if (str) return (<p className={props.className} data-tag="new line split" key={index}>{Parser(str)}</p>);
		});
		
		return fullText;
	}
		
	
	return (
		<p className={props.className}>
			{props.text}
		</p>
	);
}