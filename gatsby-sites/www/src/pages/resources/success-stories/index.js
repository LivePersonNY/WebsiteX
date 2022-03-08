import * as React from 'react';
import { graphql } from 'gatsby';


import Resources from '../../../templates/Resources';

const SuccessIndex = function( props ) {
	
	const items = props.data.items.nodes;
	
	console.log(items);
	
	return (
		<Resources active="success" items={items} kicker="Success Story" />
	);
}
export default SuccessIndex;

export const itemsQuery = graphql`
  query {
	  items: allWpSuccess {
		nodes {
		  uri
		  title
		  featuredImage {
			node {
			  mediaItemUrl
			  srcSet
			}
		  }
		  seo {
		    readingTime
		    opengraphType
		    metaRobotsNoindex
		    schema {
			  articleType
		    }
		  }
		}
	  }
	}
`;