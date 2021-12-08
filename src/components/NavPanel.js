import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

const NavPanel = ({ label, url, children }) => {
  if (children.length > 0) {
	return <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href={url} data-bs-toggle="dropdown">{label}</a>
	  <ul className="dropdown-menu">
		{children.map(function(item, index) {
		  return <li><Link className="dropdown-item" to={item.url}>{item.label}</Link></li>
		})}
	  </ul>
	</li>
  } else {
	return <li className="nav-item"><Link className="nav-link" to={url}>{label}</Link></li>
  }
}

export default NavPanel;