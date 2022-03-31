import * as React from 'react';
import { graphql } from 'gatsby';


import Resources from '../../templates/Resources';

const ResourceIndex = function( props ) {
	
	const successStories = props.data.successStories.nodes;
	const news = props.data.news.nodes;
	const reports = props.data.reports.nodes;
	const webinars = props.data.webinars.nodes;
	
	let items = successStories.concat(news).concat(reports).concat(webinars);
	items = items.sort(function(a,b) {
		return Date.parse(a.date) > Date.parse(b);
	});
		
	return (
		<Resources active="all" items={items} />
	);
}
export default ResourceIndex;

export const itemsQuery = graphql`
    query {
      news: allWpNews(
			sort: { fields: [date], order: [DESC] }
		) {
		nodes {
		  uri
		  slug
		  title
		  nodeType
		  date(formatString: "MMMM DD, YYYY")
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
	  successStories: allWpSuccess(
			sort: { fields: [date], order: [DESC] }
		) {
		nodes {
		  uri
		  slug
		  title
		  nodeType
		  date(formatString: "MMMM DD, YYYY")
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
	  reports: allWpReport(
			sort: { fields: [date], order: [DESC] }
		) {
		  nodes {
			uri
			slug
			title
			date(formatString: "MMMM DD, YYYY")
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
	  webinars: allWpWebinar(
			sort: { fields: [date], order: [DESC] }
		) {
		  nodes {
			uri
			slug
			title
			date(formatString: "MMMM DD, YYYY")
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