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
	<Seo title={page.title} />
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
	  }
	}
`;