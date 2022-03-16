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
                    let cssLinkClass = item.cssClasses.join(" ");
                    let descr = '';
                    let extIcon = '';
                    if (item.target) {
                      extIcon = "link-external"
                    }
                    if (item.description) {
                      descr = <span className="dropdown-item-content subtitle3">{item.description}</span>
                    }
                    return (<li>
                        <a title={item.title} className={`dropdown-item ${cssLinkClass}`} href={item.path} target={item.target} rel={item.target && `noopener noreferrer`} key={index}>
                          <span className={`dropdown-item-span ${extIcon}`}>{item.label}</span>
                          {descr}
                        </a>
                      </li>)
                  })}
                </div>
                {featuredResource  && (
                  <div className="col-lg-7 col-lg">
                    <p className="dropdown-section-title h6">Featured Resource</p>
                    <div className="dropdown-featured-container">
                      <img src="https://static.liveperson.com/static-assets/2022/02/15141613/large-1.jpg" alt="" width="152" />
                      <div className="dropdown-featured-body">
                        <p className="subtitle3">Blog</p>
                        <p className="featured-body">Building a more Curiously Human™ AI</p>
                        <a className="dropdown-link-blue" href="/blog/curiously-human-conversational-ai/" target="_blank" rel="noopener noreferrer">Learn more</a>
                      </div>
                    </div>
                  </div>
                )}
                {featuredNews && (
                  <div className="col-lg-7 col-lg">
                    <p className="dropdown-section-title h6">Featured News</p>
                    <div className="dropdown-featured-container">
                      <img src="https://static.liveperson.com/static-assets/2022/03/07162148/In-The-News_Fast_Company-LE_03-07_2x-1.jpg" alt="" width="152" />
                      <div className="dropdown-featured-body">
                        <p className="subtitle3">Fast Company Award</p>
                        <p className="featured-body">LivePerson named the #1 Most Innovative AI Company in the world</p>
                        <a className="dropdown-link-blue" href="https://pr.liveperson.com/2022-03-08-Fast-Company-names-LivePerson-the-1-Most-Innovative-AI-Company-in-the-World" target="_blank" rel="noopener noreferrer">Learn more</a>
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
