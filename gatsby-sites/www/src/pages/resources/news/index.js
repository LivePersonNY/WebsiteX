import * as React from 'react';
import { graphql } from 'gatsby';


import Resources from '../../../templates/Resources';

const NewsIndex = function( props ) {
	
	const items = props.data.items.nodes;
	
	console.log(items);
	
	return (
		<Resources active="news" items={items} />
	);
}
export default NewsIndex;

export const itemsQuery = graphql`
  query {
	  items: allWpNews {
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