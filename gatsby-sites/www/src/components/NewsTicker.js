import * as React from 'react';
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
            cssClasses: {eq: "news-ticker"}
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

  return (
    <>
      {newsTickerItems.nodes.length > 0 &&
        <div className="news-ticker-container">
          {newsTickerItems.nodes.map((item, index) => {
            const cssClasses = item.cssClasses.length
              ? item.cssClasses.join(' ')
              : 'nav-link';
            return (
              <>
                <p className={cssClasses}>{item.description}</p>
                <a
                  target={item.target}
                  rel={item.target && `noopener noreferrer`}
                  title={item.title}
                  className='link'
                  href={item.path}
                >
                  {item.label}
                </a>
              </>
            );
          })}
        </div>
      }
    </>
  );
};

export default NewsTicker;
