import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import TempIcon from './TempIcon';

import { BsArrowUpRight } from 'react-icons/bs';
import Parser from 'html-react-parser';

const NavPanel = ({ label, path, children, order, cssClasses, featuredNews, featuredResource, featuredProducts }) => {
    if (children.length > 0) {
        children.sort(function (a, b) {
            return a.order - b.order;
        });
        cssClasses += ' dropdown-menu';
        return (
            <li
                className={`nav-item dropdown ${label
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')}`}
                style={{ position: 'static' }}
                order={order}
            >
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
                <ul className={cssClasses} aria-labelledby="navbarDropdown">
                    <div className="container">
                        <div className="row">
                            {children.map(function (item, index) {
                                var cssClasses = item.cssClasses.join(' ');
                                return (
                                    <React.Fragment key={index}>
                                        <div className={`${cssClasses} col-lg`}>
                                            <p className="dropdown-section-title h6">{item.label}</p>
                                            {item.childItems.nodes.map(function (item, index) {
                                                let cssLinkClass = item.cssClasses.join(' ');
                                                let descr = '';
                                                let extIcon = '';
                                                if (item.target) {
                                                    extIcon = 'link-external';
                                                }
                                                if (item.description) {
                                                    descr = (
                                                        <span className="dropdown-item-content subtitle3">
                                                            {Parser(item.description)}
                                                        </span>
                                                    );
                                                }
                                                return (
                                                    <li key={index}>
                                                        <a
                                                            title={item.title}
                                                            className={`dropdown-item ${cssLinkClass}`}
                                                            href={item.path}
                                                            target={item.target}
                                                            rel={item.target && `noopener noreferrer`}
                                                        >
                                                            <span className={`dropdown-item-span ${extIcon}`}>
                                                                {item.label}
                                                            </span>
                                                            {descr}
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                            {featuredProducts && (
                                <div className="col-lg-3 col-lg">
                                    <p className="dropdown-section-title h6">PUT IT ALL TOGETHER</p>
                                    <div className="dropdown-featured-container">
                                        <img
                                            src="https://static.liveperson.com/static-assets/2023/08/22160527/EAI_mod_2_Enterprise_nav-callout-217w.png"
                                            alt="AI Chatbot Toolset"
                                        />
                                        <div className="dropdown-featured-body">
                                            <p className="subtitle3">AI Chatbot Toolset</p>
                                            <p className="featured-body">
                                                Better conversations start with a better AI chatbot
                                            </p>
                                            <a className="dropdown-link-blue link" href="/products/ai-chatbots/">
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {featuredResource && (
                                <div className="col-lg-6 col-lg">
                                    <p className="dropdown-section-title h6">Featured Resource</p>
                                    <div className="dropdown-featured-container">
                                        <img
                                            src="https://static.liveperson.com/static-assets/2024/02/13111526/Deloitte_Feb-Webinar_Web-Hero_V2%402x.png"
                                            alt="Webinar"
                                            width="250"
                                            height="115"
                                        />
                                        <div className="dropdown-featured-body">
                                            <p className="subtitle3">Webinar</p>
                                            <p className="featured-body">
                                                AI Labs: Explore the potential of generative AI with LivePerson +
                                                Deloitte
                                            </p>
                                            <a
                                                className="dropdown-link-blue"
                                                href="/resources/webinars/deloitte-ai-labs/?utm_source=featured_resources&utm_medium=direct&utm_campaign=deloitte_webinar_q1"
                                            >
                                                Watch now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {featuredNews && (
                                <div className="col-lg-7 col-lg">
                                    <p className="dropdown-section-title h6">Featured News</p>
                                    <div className="dropdown-featured-container">
                                        <img
                                            src="https://static.liveperson.com/static-assets/2024/01/05165439/State-of-Customer-Conversations_Report_Web_V2a%402x.png"
                                            alt="State of Customer Conversations 2024 report"
                                            width="180"
                                        />
                                        <div className="dropdown-featured-body">
                                            <p className="subtitle3">Industry Report</p>
                                            <p className="featured-body">
                                                LivePerson reveals State of Customer Conversations 2024 report
                                            </p>
                                            <a
                                                className="dropdown-link-blue"
                                                href="https://www.liveperson.com/customer-conversations-report/?utm_source=featured_news&utm_medium=direct&utm_campaign=socc_report_q1"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
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
