import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const HeroImage = ({url}) => {
	return (
		<img class="img-fluid" src={url} />
	);
	
};

export default HeroImage;