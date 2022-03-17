import * as React from 'react';
import { graphql } from 'gatsby';


import Resources from '../../../templates/Resources';

const SuccessIndex = function( props ) {
	
	const items = props.data.items.nodes;
	
	console.log(items);
	
	return (
		<Resources active="success" items={items} kicker="Success Story" slug="success-stories" />
	);
}
export default SuccessIndex;

export const itemsQuery = graphql`
  query {
	  items: allWpSuccess(
			sort: { fields: [isSticky, date], order: [DESC, DESC] }
		)  {
		nodes {
		  uri
		  title
		  nodeType
		  slug
		  date
		  isSticky
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