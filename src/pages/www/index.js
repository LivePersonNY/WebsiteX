import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const IndexPage = ({ data: { page } }) => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <div className="row align-items-center">
        <h1>HomePage</h1>
        {Parser(page.content)}
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query HomepageId {
    page: wpPage(isFrontPage: { eq: true }) {
      id
      content
      title
    }
  }
`;
