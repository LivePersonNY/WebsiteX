import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

import NavPanel from './NavPanel';

const NavBar = ({ siteTitle }) => {
  const { topItems, loginItems, settings } = useStaticQuery(
    graphql`
      query topLevelQuery {
        settings: wp {
          allSettings {
            siteLogo
          }
        }
        loginItems: allWpMenuItem(
          filter: {
            menu: { node: { locations: { in: [LOGIN_MENU] } } }
            parentId: { eq: null }
          }
        ) {
          nodes {
            id
            label
            target
            title
            parentId
            order
            cssClasses
            childItems {
              nodes {
                label
                url
                path
                order
                target
                title
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
            order
            cssClasses
            title
            description
            childItems {
              nodes {
                label
                url
                path
                order
                target
                title
                cssClasses
                description
                childItems {
                  nodes {
                    label
                    path
                    order
                    target
                    title
                    cssClasses
                    description
                  }
                }
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
  
  let sortFunc = function(a, b) {
    return a.order - b.order;
  }
  
  topItems.nodes.sort(sortFunc);
  loginItems.nodes.sort(sortFunc
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" style={{ position: 'relative' }}>
        <a href="/"><img className="site-logo" src={settings.allSettings.siteLogo} /></a>
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
            {topItems.nodes.map((item, index) => {
              const cssClasses = item.cssClasses.length
              ? item.cssClasses.join(' ')
              : '';
              
              let featuredResource = item.cssClasses.indexOf('featured-resource') >= 0;
              let featuredNews = item.cssClasses.indexOf('featured-news') >= 0;
              
              if (item.childItems.nodes.length > 0) {
                item.childItems.nodes.sort(sortFunc);
                return (
                  <NavPanel
                    cssClasses={cssClasses} 
                    order={item.order} 
                    label={item.label} 
                    path={item.path} 
                    children={item.childItems.nodes}
                    featuredNews={featuredNews}
                    featuredResource={featuredResource}
                    key={index}
                     />
                )
              } else {
                return (
                  <li className="nav-item">
                    <a
                      title={item.title}
                      target={item.target}
                      className={cssClasses}
                      href={item.path}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              }
            })}
          </ul>

          <ul className="navbar-nav login-menu">
            {loginItems.nodes.map((item, index) => {
              const cssClasses = item.cssClasses.length
                ? item.cssClasses.join(' ')
                : 'nav-link';
              return (
                <li className="nav-item" key={index}>
                  <a
                    target={item.target}
                    title={item.title}
                    className={cssClasses}
                    href={item.path}
                  >
                    {item.label}
                  </a>
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
