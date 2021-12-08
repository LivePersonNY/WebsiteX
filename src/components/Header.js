import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

import NavBar from '../components/NavBar';

const Header = ({ siteTitle }) => {
  
 return (
  <header>        
    <NavBar siteTitle={siteTitle} />
  </header>
)
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;