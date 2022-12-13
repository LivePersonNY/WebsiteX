import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

import NavBar from './NavBar';
import NewsTicker from './NewsTicker';

const Header = ({ siteTitle }) => (
  <header>
    <NewsTicker />
    <NavBar siteTitle={siteTitle} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
