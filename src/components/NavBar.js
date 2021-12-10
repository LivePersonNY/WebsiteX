import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

import NavPanel from '../components/NavPanel';

const NavBar = ({siteTitle}) => {
	const { topItems } = useStaticQuery(
	  graphql`
		query topLevelQuery {
			topItems: allWpMenuItem(
				filter: {menu: {node: {locations: {eq: GATSBY_HEADER_MENU}}}, parentId: {eq: null}}
			  ) {
				nodes {
					id
					label
					parentId
					childItems {
					  nodes {
						label
						url
						path
						order
						target
					  }
					}
					path
					url
				  }
			  }
		  }
	  `
	);
	
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <div className="container">
			<Link to="/">{siteTitle}</Link>
			<button
			  className="navbar-toggler"
			  type="button"
			  data-bs-toggle="collapse"
			  data-bs-target="#navbarNavDropdown"
			  aria-controls="navbarNavDropdown"
			  aria-expanded="false"
			  aria-label="Toggle navigation"
			>
			  <span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
		
		<ul className="navbar-nav">
		{topItems.nodes.map(function(item, index){
			return <NavPanel label={item.label} path={item.path} children={item.childItems.nodes} />
		  })}
	  </ul>
  
  </div>
	</div>
  </nav>
  );
}

export default NavBar;