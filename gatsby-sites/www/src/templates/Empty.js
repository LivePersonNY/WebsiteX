import * as React from 'react';
import Parser from 'html-react-parser';

const Empty = ({pageContext}) => {
	
	console.log(pageContext);
	return (<>
		{Parser(pageContext.content)}
	</>);
};
export default Empty;