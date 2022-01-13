import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import TempIcon from './TempIcon';

import { BsArrowUpRight } from "react-icons/bs";

const NavPanel = ({ label, path, children, order, cssClasses }) => {
  if (children.length > 0) {
    children.sort(function(a,b) {
      return a.order - b.order;
    });
    cssClasses += ' dropdown-menu';
    return (
      <li className="nav-item dropdown" style={{ position: 'static' }} order={order}>
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {label}
        </a>
        <ul
          className={cssClasses}
          aria-labelledby="navbarDropdown"
        >
          <div className="container">
            <div className="row">
            {children.map(function(item, index) {
              var cssClasses = item.cssClasses.join(" ");
              return (
                <div className={cssClasses}>
                  <p className="dropdown-section-title">{item.label}</p>
                  {item.childItems.nodes.map(function(item, index) {
                    let descr = '';
                    let extIcon = '';
                    if (item.target) {
                      extIcon = <BsArrowUpRight />
                    }
                    if (item.description) {
                      descr = <span className="dropdown-item-content">{item.description}</span>
                    }
                    return (<li>
                        <a title={item.title} className="dropdown-item" href={item.path} target={item.target}>
                          {item.label} {extIcon}
                          <br />
                          {descr}
                        </a>
                      </li>)
                  })}
                </div>
              )
            })}
            </div>
          </div>
        </ul>
      </li>
    );
  }
  return (
    <li className="nav-item">
      <a className="nav-link" href={path}>
        {label}
      </a>
    </li>
  );
};

export default NavPanel;
