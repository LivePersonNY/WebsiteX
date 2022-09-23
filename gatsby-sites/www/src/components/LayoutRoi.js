import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

const LayoutRoi = ({ children, mainClass }) => {

  return (
    <>
      <main className={mainClass}>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutRoi;
