import * as React from 'react';
import { useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import TempIcon from './TempIcon';

const Footer = () => {
  
  /*useEffect(() => {
    const wpHost = `http://127.0.0.1:3000/wp-admin/`;
    
    fetch(wpHost).then(function(response) {
      const status = response.status;
      console.log(response);
    });
  });*/
  
  const { topItems } = useStaticQuery(
    graphql`
      query topLevelQueryForFooter {
        topItems: allWpMenuItem(
          filter: {
            menu: { node: { locations: { in: [GATSBY_FOOTER_MENU] } } }
            parentId: { eq: null }
          }
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
  
  
  
  let sortFunc = function(a, b) {
    return a.order - b.order;
  }
  topItems.nodes.sort(sortFunc);
  
  return (
    <footer>
      <div className="container">
        <div className="row">
          {topItems.nodes.map(function(item) {
            item.childItems.nodes.sort(sortFunc);
            return (
              <div className="col-lg-2">
                {item.childItems.nodes.map(function(section) {
                  section.childItems.nodes.sort(sortFunc);
                  return (
                    <div className="footer-section">
                      <p className="footer-section-title">{section.label}</p>
                      {section.childItems.nodes.map(function(link) {
                        return (<a href={link.path} className="footer-section-link" target={link.target}>
                            {link.label}
                          </a>)
                      })}
                      
                    </div>
                  )
                })}
                
              </div>
            )
          })}
        </div>
      </div>
      
    </footer>
    
  );
};

export default Footer;
