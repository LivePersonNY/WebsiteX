import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import Parser from 'html-react-parser';

const PageTemplate = ({ data: { page } }) => {
	
	let meta = [
		{
		  name: `twitter:title`,
		  content: page.seo.twitterTitle || ``,
		},
		{
		  name: `twitter:description`,
		  content: page.seo.twitterDescription || ``,
		},
		{
		  property: `og:title`,
		  content: page.seo.opengraphTitle || page.seo.title || page.title,
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
		  content: page.seo.twitterImage ? page.seo.twitterImage.mediaItemUrl : ``,
		}
	];
	
	if (!page) return "The slug does not exist in the CMS";
  return (<Layout>
	<Seo title={page.seo.title} description={page.seo.metaDesc} meta={meta} />
	{Parser(page.content)}
  </Layout>)
};

export default PageTemplate;

export const pageQuery = graphql`
  query HomepageId {
	page: wpPage(isFrontPage: { eq: true }) {
	  id
	  content
	  title
	  featuredImage {
		node {
		  id
		  mediaItemUrl
		  mediaType
		}
	  }
	}
  }
`;