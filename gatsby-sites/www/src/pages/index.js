import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = ({ data: { page } }) => (
  <Layout>
    <Seo title="Home" />
    <div className="pane bg-neutral-84">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h1>LivePerson’s unique value proposition</h1>
          </div>
          <div className="col-lg-6 offset-lg-1">
            test 2<br />
            test 2<br />
            test 2<br />
            test 2<br />
            test 2<br />
          </div>

          {/* {Parser(page.content)} */}
        </div>
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
