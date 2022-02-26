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
                        <a title={item.title} className={`dropdown-item ${cssLinkClass}`} href={item.path} target={item.target} key={index}>
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
                      <img src="https://static.liveperson.com/static-assets/2022/02/25170441/nav_feature_By-need_Consumer_Pref_report-1.jpg" alt="" />
                      <div className="dropdown-featured-body">
                        <p className="subtitle3">Consumer Survey Report</p>
                        <p className="featured-body">Conversational AI is brilliant for business
</p>
                        <a className="dropdown-link-blue" href="/resources-reports/2021-conversational-commerce" target="_blank">Learn more</a>
                      </div>
                    </div>
                  </div>
                )}
                {featuredNews && (
                  <div className="col-lg-7 col-lg">
                    <p className="dropdown-section-title h6">Featured News</p>
                    <div className="dropdown-featured-container">
                      <img src="https://static.liveperson.com/static-assets/2022/02/14154908/nav_feature_gradient_152x120.jpg" alt="" />
                      <div className="dropdown-featured-body">
                        <p className="subtitle3">Curiously Human™ Launch</p>
                        <p className="featured-body">LivePerson announces new AI capabilities and integrations</p>
                        <a className="dropdown-link-blue" href="/curiously-human-launch" target="_blank">Learn more</a>
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
