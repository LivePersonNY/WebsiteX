import * as React from 'react';
import { graphql } from 'gatsby';


import Resources from '../../../templates/Resources';

const NewsIndex = function( props ) {
	
	const items = props.data.items.nodes;
	
	console.log(items);
	
	return (
		<Resources active="news" items={items} kicker="In the News" />
	);
}
export default NewsIndex;

export const itemsQuery = graphql`
  query {
	  items: allWpNews(
			sort: { fields: [date], order: [DESC] }
		)  {
		nodes {
		  uri
		  title
		  slug
		  nodeType
		  date(formatString: "MMMM DD, YYYY")
		  tags {
			nodes {
			  slug
			} 
		  }
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