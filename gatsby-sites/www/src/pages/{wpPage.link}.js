import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import Parser from 'html-react-parser';

const PageTemplate = ({ data: { page } }) => {
	
	let canRoot = process.env.CAN_ROOT;
	let canonical = page.seo.canonical || page.link;
	if (canonical.indexOf('http') < 0) canonical = canRoot + canonical;
	
	let meta = [
		{
		  property: `og:title`,
		  content: page.seo.title || ``,
		},
		{
		  property: `og:image`,
		  content: page.seo.opengraphImage ? page.seo.opengraphImage.mediaItemUrl : ``,
		},
		{
		  property: `og:description`,
		  content: page.seo.opengraphDescription || page.seo.metaDesc || ``,
		},
		{
		  property: `og:url`,
		  content: page.seo.canonical,
		},
		{
		  property: `og:type`,
		  content: `website`,
		},
		{
		  property: `twitter:image`,
		  content: (page.seo.twitterImage ? page.seo.twitterImage.mediaItemUrl : ``) || (page.seo.opengraphImage ? page.seo.opengraphImage.mediaItemUrl : ``) || ``,
		},
		{
		  name: `twitter:title`,
		  content: page.seo.title || ``,
		},
		{
		  name: `twitter:description`,
		  content: page.seo.twitterDescription || page.seo.metaDesc || ``,
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
	  page: wpPage(id: {eq: $id}) {
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