import * as React from 'react';
import { graphql } from 'gatsby';


import Resources from '../../templates/Resources';

const ResourceIndex = function( props ) {
	
	const successStories = props.data.successStories.nodes;
	const news = props.data.news.nodes;
	const reports = props.data.reports.nodes;
	
	const items = successStories.concat(news).concat(reports);
		
	return (
		<Resources active="all" items={items} />
	);
}
export default ResourceIndex;

export const itemsQuery = graphql`
    query {
      news: allWpNews {
		nodes {
		  uri
		  title
		  nodeType
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
	  successStories: allWpSuccess {
		nodes {
		  uri
		  title
		  nodeType
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
	  reports: allWpSuccess {
		  nodes {
			uri
			title
			nodeType
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