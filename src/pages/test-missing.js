import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Redirect from '../components/Redirect';
import Seo from '../components/Seo';
import Parser from 'html-react-parser';

const TestMissing = ({ data: { page } }) => {
	if (!page) return "The slug does not exist in the CMS";
  return (<Layout>
	<Seo title="Home" />
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

export default TestMissing;

export const pageQuery = graphql`
  query TestMissing {
	  page: wpPage(slug: {eq: "test-missing"}) {
		id
		content
		title
	  }
	}
`;
