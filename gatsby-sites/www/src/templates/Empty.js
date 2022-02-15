import * as React from 'react';
import Parser from 'html-react-parser';

const Empty = (props) => {
	
	console.log(props.content);
	return (<>
		{Parser(props.content)}
	</>);
};
export default Empty;