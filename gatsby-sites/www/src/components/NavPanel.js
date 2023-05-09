import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import TempIcon from './TempIcon';

import { BsArrowUpRight } from 'react-icons/bs';
import Parser from 'html-react-parser';

const NavPanel = ({
    label,
    path,
    children,
    order,
    cssClasses,
    featuredNews,
    featuredResource,
    featuredProducts,
}) => {
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
                                            <p className="dropdown-section-title h6">
                                                {item.label}
                                            </p>
                                            {item.childItems.nodes.map(
                                                function (item, index) {
                                                    let cssLinkClass =
                                                        item.cssClasses.join(
                                                            ' '
                                                        );
                                                    let descr = '';
                                                    let extIcon = '';
                                                    if (item.target) {
                                                        extIcon =
                                                            'link-external';
                                                    }
                                                    if (item.description) {
                                                        descr = (
                                                            <span className="dropdown-item-content subtitle3">
                                                                {Parser(
                                                                    item.description
                                                                )}
                                                            </span>
                                                        );
                                                    }
                                                    return (
                                                        <li key={index}>
                                                            <a
                                                                title={
                                                                    item.title
                                                                }
                                                                className={`dropdown-item ${cssLinkClass}`}
                                                                href={item.path}
                                                                target={
                                                                    item.target
                                                                }
                                                                rel={
                                                                    item.target &&
                                                                    `noopener noreferrer`
                                                                }
                                                            >
                                                                <span
                                                                    className={`dropdown-item-span ${extIcon}`}
                                                                >
                                                                    {item.label}
                                                                </span>
                                                                {descr}
                                                            </a>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                            {featuredProducts && (
                                <div className="col-lg-3 col-lg">
                                    <p className="dropdown-section-title h6">
                                        WHAT IS EAI
                                    </p>
                                    <div className="dropdown-featured-container">
                                        <img
                                            src="https://static.liveperson.com/static-assets/2023/05/02095021/EAI_nav_feature.png"
                                            alt="Open is nice, but equal is
                                                better"
                                        />
                                        <div className="dropdown-featured-body">
                                            <p className="subtitle3">
                                                Open is nice, but equal is
                                                better
                                            </p>
                                            <p className="featured-body">
                                                LivePerson is making a new grade
                                                of AI available
                                            </p>
                                            <a
                                                className="dropdown-link-blue link"
                                                href="/eai/"
                                                rel="noopener noreferrer"
                                            >
                                                Learn more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {featuredResource && (
                                <div className="col-lg-6 col-lg">
                                    <p className="dropdown-section-title h6">
                                        Featured Resource
                                    </p>
                                    <div className="dropdown-featured-container">
                                        <img
                                            src="https://static.liveperson.com/static-assets/2023/05/09093551/LivePerson_Cohere_Webinar_featuredasset.jpg"
                                            alt="Webinar"
                                        />
                                        <div className="dropdown-featured-body">
                                            <p className="subtitle3">Webinar</p>
                                            <p className="featured-body">
                                                Drive better business outcomes
                                                with a custom large language
                                                model
                                            </p>
                                            <a
                                                className="dropdown-link-blue"
                                                href="/resources/webinars/custom-large-language-models/"
                                                rel="noopener noreferrer"
                                            >
                                                Register now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {featuredNews && (
                                <div className="col-lg-7 col-lg">
                                    <p className="dropdown-section-title h6">
                                        Featured News
                                    </p>
                                    <div className="dropdown-featured-container">
                                        <img
                                            src="https://static.liveperson.com/static-assets/2022/03/17143938/Featured_Resource_Fast_Company_1x.jpg"
                                            alt="Fast Company Award"
                                        />
                                        <div className="dropdown-featured-body">
                                            <p className="subtitle3">
                                                Fast Company Award
                                            </p>
                                            <p className="featured-body">
                                                LivePerson named the #1 Most
                                                Innovative AI Company in the
                                                world
                                            </p>
                                            <a
                                                className="dropdown-link-blue"
                                                href="https://pr.liveperson.com/2022-03-08-Fast-Company-names-LivePerson-the-1-Most-Innovative-AI-Company-in-the-World"
                                                target="_blank"
                                                rel="noopener noreferrer"
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
