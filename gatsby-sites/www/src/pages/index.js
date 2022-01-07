import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import queryString from 'query-string';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import Parser from 'html-react-parser';

const IndexPage = ({ data: { page } }) => (
  <Layout>
	<Seo title="Home" />
	<Hero heading="HomePage" subheading="A subheading would be here. Because this is the hero." pageData={page} />
	<div className="container">
	  <div className="row align-items-center">
		{Parser(page.content)}
	  </div>
	</div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query HomepageId {
	setting: wp {
	  allSettings {
		ipAddress  
	  }
	}
	page: wpPage(isFrontPage: {eq: true}) {
	  id
	  content
	  title
	  vimeoVideo
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
