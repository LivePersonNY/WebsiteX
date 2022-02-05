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
                <div className={`${cssClasses} col-lg`} key={index}>
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
                        <a title={item.title} className="dropdown-item" href={item.path} target={item.target} key={index}>
                          {item.label} {extIcon}
                          <br />
                          {descr}
                        </a>
                      </li>)
                  })}
                </div>
                {featuredNews && (
                  <div className="col-lg-7 col-lg">
                    <p className="dropdown-section-title h6">Featured Resource</p>
                    <div className="dropdown-featured-container">
                      <img src="https://picsum.photos/152/120" alt="" />
                      <div className="dropdown-featured-body">
                        <p className="subtitle3">On-Demand Webinar</p>
                        <p className="featured-body">Reimagining communication in the travel and hospitality industry</p>
                        <a className="dropdown-link-blue" href="#">Watch Now</a>
                      </div>
                    </div>
                  </div>
                )}
                {featuredResource && (
                  <div className="col-lg-7 col-lg">
                    <p className="dropdown-section-title h6">Featured Resource</p>
                    <div className="dropdown-featured-container">
                      <img src="https://picsum.photos/152/120" alt="" />
                      <div className="dropdown-featured-body">
                        <p className="subtitle3">On-Demand Webinar</p>
                        <p className="featured-body">Reimagining communication in the travel and hospitality industry</p>
                        <a className="dropdown-link-blue" href="#">Watch Now</a>
                      </div>
                    </div>
                  </div>
                )}
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
