import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import TempIcon from './TempIcon';

import { BsArrowUpRight } from "react-icons/bs";

const NavPanel = ({ label, path, children, order, cssClasses, featuredNews, featuredResource }) => {
  if (children.length > 0) {
    children.sort(function(a,b) {
      return a.order - b.order;
    });
    cssClasses += ' dropdown-menu';
    return (
      <li className={`nav-item dropdown ${label.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}`} style={{ position: 'static' }} order={order}>
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
              <>
                <div className={`${cssClasses} col`}>
                  <p className="dropdown-section-title h6">{item.label}</p>
                  {item.childItems.nodes.map(function(item, index) {
                    let descr = '';
                    let extIcon = '';
                    if (item.target) {
                      extIcon = <BsArrowUpRight />
                    }
                    if (item.description) {
                      descr = <span className="dropdown-item-content subtitle3">{item.description}</span>
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
                {featuredNews && (
                  <p>News test</p>
                )}
                {featuredResource && (
                  <p>Resource test</p>
                )}
                <div className="bg-neutral-96 col-4 col">
                  <p className="dropdown-section-title h6">Featured Resource</p>
                  <li>
                    <a className="dropdown-item" href="/products-conversational-cloud/">On-Demand Webinar <br /><span className="dropdown-item-content subtitle3">Reimagining communication in the travel and hospitality industry</span><span className="dropdown-link-blue">Watch Now</span></a>
                  </li>
                </div>
              </>
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
