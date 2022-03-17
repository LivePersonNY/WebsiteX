import * as React from 'react';
import { graphql } from 'gatsby';


import Resources from '../../../templates/Resources';

const ReportsIndex = function( props ) {
	
	const items = props.data.items.nodes;
	
	console.log(items);
	
	return (
		<Resources active="reports" items={items} kicker="Report" />
	);
}
export default ReportsIndex;

export const itemsQuery = graphql`
  query {
	  items: allWpReport(
		  sort: { fields: [isSticky, date], order: [DESC, DESC] }
	  ) {
		nodes {
		  uri
		  slug
		  title
		  nodeType
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