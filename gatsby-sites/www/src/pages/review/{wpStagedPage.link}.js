import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import NotFoundPage from '../404';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Parser from 'html-react-parser';

const PageTemplate = ({ data: { page } }) => {
	
	if (process.env.BRANCH != 'develop' || process.env.GATSBY_IS_PREVIEW) {
		return (<NotFoundPage />);
	}
	
	let canRoot = process.env.CAN_ROOT;
	let canonical = page.seo.canonical || page.link;
	if (canonical.indexOf('http') < 0) canonical = canRoot + canonical;
	
	let meta = [
		{
		  name: `twitter:title`,
		  content: page.seo.title || ``,
		},
		{
		  name: `twitter:description`,
		  content: page.seo.twitterDescription || page.seo.metaDesc || ``,
		},
		{
		  property: `og:title`,
		  content: page.seo.title || ``,
		},
		{
		  property: `og:description`,
		  content: page.seo.opengraphDescription || page.seo.metaDesc || ``,
		},
		{
		  property: `og:image`,
		  content: page.seo.opengraphImage ? page.seo.opengraphImage.mediaItemUrl : ``,
		},
		{
		  property: `twitter:image`,
		  content: (page.seo.twitterImage ? page.seo.twitterImage.mediaItemUrl : ``) || (page.seo.opengraphImage ? page.seo.opengraphImage.mediaItemUrl : ``) || ``,
		},
		{
		  property: `og:type`,
		  content: page.seo.opengraphType || `website`,
		},
		{
		  property: `og:url`,
		  content: page.seo.canonical,
		}
	];
	
	
	let robots = [
		page.seo.metaRobotsNoindex,
		page.seo.metaRobotsNofollow
	];
	
	if (!page) return "The slug does not exist in the CMS";
  return (<Layout>
	<Seo title={page.seo.title} description={page.seo.metaDesc} meta={meta} canonical={canonical} robots={robots.join(", ")} />
	{Parser(page.content)}
  </Layout>)
};

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
	  page: wpStagedPage(id: {eq: $id}) {
		id
		content
		title
		link
		seo {
		  canonical
		  cornerstone
		  focuskw
		  fullHead
		  metaDesc
		  metaKeywords
		  metaRobotsNofollow
		  metaRobotsNoindex
		  opengraphAuthor
		  opengraphDescription
		  opengraphModifiedTime
		  opengraphPublishedTime
		  opengraphPublisher
		  opengraphSiteName
		  opengraphTitle
		  opengraphType
		  opengraphUrl
		  readingTime
		  title
		  twitterDescription
		  twitterTitle
		  opengraphImage {
			mediaItemUrl  
		  }
		}
	  }
	}
`;