import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

const NewsTicker = ({ siteTitle }) => {
    const { newsTickerItems } = useStaticQuery(
        graphql`
            query newsTickerQuery {
                newsTickerItems: allWpMenuItem(
                    filter: {
                        menu: { node: { locations: { in: [LOGIN_MENU] } } }
                        parentId: { eq: null }
                        cssClasses: { eq: "news-ticker" }
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

    useEffect(() => {
        console.log('this is for news ticker');
        const newsTickerContainer = document.querySelector(
            '.news-ticker-container'
        );
        const newsTickerClose = document.querySelector('.news-ticker-close');
        newsTickerClose.addEventListener('click', () => {
            newsTickerContainer.style.transition = 'all 1s ease-in-out';
            newsTickerContainer.style.maxHeight = '0px';
            newsTickerContainer.style.padding = '0px';
            newsTickerContainer.style.zIndex = '-2';
            newsTickerClose.style.display = 'none';
        });
    });

    return (
        <>
            {newsTickerItems.nodes.length > 0 && (
                <div className="news-ticker-container">
                    <div className="container">
                        {newsTickerItems.nodes.map((item, index) => {
                            const cssClasses = item.cssClasses.length
                                ? item.cssClasses.join(' ')
                                : 'nav-link';
                            return (
                                <React.Fragment key={index}>
                                    <p className={cssClasses}>
                                        {item.description}
                                    </p>
                                    <a
                                        target={item.target}
                                        rel={
                                            item.target && `noopener noreferrer`
                                        }
                                        title={item.title}
                                        className="link btn btn-outline-secondary"
                                        href={item.path}
                                    >
                                        {item.label}
                                    </a>
                                </React.Fragment>
                            );
                        })}
                        <img
                            className="news-ticker-close"
                            src="https://static.liveperson.com/static-assets/2023/02/27164937/cancel.png"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default NewsTicker;
