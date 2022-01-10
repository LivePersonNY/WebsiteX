import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import Parser from 'html-react-parser';

const PageTemplate = ({ data: { page } }) => {
	if (!page) return "The slug does not exist in the CMS";
  return (<Layout>
	<Seo title="Home" />
	<Hero heading="HomePage" subheading="A subheading would be here. Because this is the hero." pageData={page} />
	<div className="container">
	  <div className="row align-items-center">
		<div className="col-lg-6">
		  <h1 className="display-5 fw-bold lh-1 mb-3">
			{page.title}
		  </h1>
		  {Parser(page.content)}
		  </div>
	  </div>
	</div>
  </Layout>)
};

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
	  page: wpPage(id: {eq: $id}) {
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