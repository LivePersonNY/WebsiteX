import * as React from 'react';
import { graphql } from 'gatsby';


import Resources from '../../templates/Resources';

const ResourceIndex = function( props ) {
	
	const successStories = props.data.successStories.nodes;
	const news = props.data.news.nodes;
	const reports = props.data.reports.nodes;
	const webinars = props.data.webinars.nodes;
	
	const items = successStories.concat(news).concat(reports).concat(webinars);
		
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
		  slug
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
		  slug
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
			slug
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
	  webinars: allWpWebinar {
		  nodes {
			uri
			slug
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