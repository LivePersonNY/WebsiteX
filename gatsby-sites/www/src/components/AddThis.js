import * as React from 'react';
import { useState, useEffect } from 'react';
import Parser from 'html-react-parser';
import Script from 'react-load-script';


import { Link, graphql } from 'gatsby';

export default function AddThis(props) {
	
	useEffect(() => {
		if (window.addthis) {
			window.addthis.update('share', 'url', props.url); 
		}
	}, [props.url]);
	
	const handleAddthisLoaded = () => {
		window.addthis.init();
		console.log('handled script...');
		//window.addthis.update('share', 'url', props.url);
	};
	
	return (
		<>
			<div class="addthis_inline_share_toolbox"></div>
			<Script
				url="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-621685298b452c11"
				onLoad={handleAddthisLoaded} />
		</>
	);
	
}