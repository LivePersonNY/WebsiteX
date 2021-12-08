import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

const MenuItem = ({ label, url, children }) => {
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

const Header = ({ siteTitle }) => {
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
                      }
                    }
                    url
                  }
              }
          }
      `
    );
  
 return (
  <header>
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
                return <MenuItem label={item.label} url={item.url} children={item.childItems.nodes} />
              })}
          </ul>
        </div>
      </div>
    </nav>
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