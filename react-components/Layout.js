import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ isHomePage, children, mainClass }) => {
  
  

  return (
    <>
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
