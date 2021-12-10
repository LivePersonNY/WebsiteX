import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Redirect = ({ to }) => {
  
 return (
  <script>
  	window.location.href = "{to}";
  </script>
)
};

export default Redirect;