import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Responsive left-aligned hero with image
          </h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <StaticImage
            src="../resources/images/homepage/conv-builder.svg"
            formats={['auto', 'webp', 'avif']}
            alt="Conv Builder"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
