import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Video = ({url}) => {
	return (
		<iframe src={url} allowfullscreen></iframe>
	);
	
};

export default Video;