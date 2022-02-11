import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ isHomePage, children, mainClass }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K85P2PM"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <Header siteTitle={title || `Title`} />
      <main className={mainClass}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
