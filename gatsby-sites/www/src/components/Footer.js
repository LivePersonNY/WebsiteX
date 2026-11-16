import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const { topItems, legalItems } = useStaticQuery(
        graphql`
            query topLevelQueryForFooter {
                legalItems: allWpMenuItem(
                    filter: { menu: { node: { locations: { in: [LEGAL_MENU] } } }, parentId: { eq: null } }
                ) {
                    nodes {
                        id
                        label
                        path
                        order
                    }
                }
                topItems: allWpMenuItem(
                    filter: { menu: { node: { locations: { in: [GATSBY_FOOTER_MENU] } } }, parentId: { eq: null } }
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

    let sortFunc = function (a, b) {
        return a.order - b.order;
    };
    topItems.nodes.sort(sortFunc);
    legalItems.nodes.sort(sortFunc);

    return (
        <footer>
            <div className="container">
                <div className="row">
                    {topItems.nodes.map(function (item, index) {
                        item.childItems.nodes.sort(sortFunc);
                        return (
                            <div className="col-lg-3 col-6" key={index}>
                                {item.childItems.nodes.map(function (section, index) {
                                    section.childItems.nodes.sort(sortFunc);
                                    return (
                                        <div className="footer-section" key={index}>
                                            <p className="footer-section-title">{section.label}</p>
                                            {section.childItems.nodes.map(function (link, index) {
                                                return (
                                                    <a
                                                        href={link.path}
                                                        className="footer-section-link"
                                                        target={link.target}
                                                        rel={item.target && `noopener noreferrer`}
                                                        key={index}
                                                    >
                                                        {link.label}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-12 footer-legal-container">
                        <nav className="footer-social" aria-label="Social media">
                            <a href="https://x.com/LivePerson" target="_blank" rel="noopener noreferrer" aria-label="LivePerson on X">
                                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.835L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.49h2.039L6.487 3.24H4.3l13.31 17.403Z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/liveperson/" target="_blank" rel="noopener noreferrer" aria-label="LivePerson on Facebook">
                                <FaFacebookSquare aria-hidden="true" focusable="false" />
                            </a>
                            <a href="https://www.linkedin.com/company/liveperson" target="_blank" rel="noopener noreferrer" aria-label="LivePerson on LinkedIn">
                                <FaLinkedin aria-hidden="true" focusable="false" />
                            </a>
                            <a href="https://www.instagram.com/livepersoninc/" target="_blank" rel="noopener noreferrer" aria-label="LivePerson on Instagram">
                                <FaInstagram aria-hidden="true" focusable="false" />
                            </a>
                        </nav>
                        <p className="footer-legal">© {new Date().getFullYear()} LivePerson. All rights reserved.</p>
                        {legalItems.nodes.map(function (link, index) {
                            return (
                                <a href={link.path} className="footer-legal footer-legal-link" key={index}>
                                    {link.label}
                                </a>
                            );
                        })}
                        <button id="ot-sdk-btn" className="ot-sdk-show-settings">
                            Cookie Settings
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
