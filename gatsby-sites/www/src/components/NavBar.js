import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

import NavPanel from './NavPanel';

const NavBar = ({ siteTitle }) => {
  const { topItems, loginItems } = useStaticQuery(
    graphql`
      query topLevelQuery {
        loginItems: allWpMenuItem(
          filter: {
            menu: { node: { locations: { in: [LOGIN_MENU] } } }
            parentId: { eq: null }
          }
        ) {
          nodes {
            id
            label
            parentId
            cssClasses
            childItems {
              nodes {
                label
                url
                path
                order
                target
                cssClasses
              }
            }
            path
            url
            locations
          }
        }
        topItems: allWpMenuItem(
          filter: {
            menu: { node: { locations: { in: [GATSBY_HEADER_MENU] } } }
            parentId: { eq: null }
          }
        ) {
          nodes {
            id
            label
            parentId
            cssClasses
            childItems {
              nodes {
                label
                url
                path
                order
                target
                cssClasses
              }
            }
            path
            url
            locations
          }
        }
      }
    `
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" style={{ position: 'relative' }}>
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
            {topItems.nodes.map((item, index) => (
              <NavPanel
                label={item.label}
                path={item.path}
                children={item.childItems.nodes}
              />
            ))}
          </ul>

          <ul className="navbar-nav">
            {loginItems.nodes.map((item, index) => {
              const cssClasses = item.cssClasses.length
                ? item.cssClasses.join(' ')
                : 'nav-link';
              return (
                <li className="nav-item">
                  <Link
                    target={item.target}
                    className={cssClasses}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
