import * as React from 'react';
import { useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import TempIcon from './TempIcon';

import LanguageSelector from './LanguageSelector';

const Footer = () => {
  
  /*useEffect(() => {
    const wpHost = `http://127.0.0.1:3000/wp-admin/`;
    
    fetch(wpHost).then(function(response) {
      const status = response.status;
      console.log(response);
    });
  });*/
  
  const { topItems, legalItems } = useStaticQuery(
    
  
  
  let sortFunc = function(a, b) {
    return a.order - b.order;
  }
  topItems.nodes.sort(sortFunc);
  legalItems.nodes.sort(sortFunc);
  
  return (
    <footer>
      <div className="container">
        <div className="row">
          {topItems.nodes.map(function(item) {
            item.childItems.nodes.sort(sortFunc);
            return (
              <div className="col-lg-2 col-6">
                {item.childItems.nodes.map(function(section) {
                  section.childItems.nodes.sort(sortFunc);
                  return (
                    <div className="footer-section">
                      <p className="footer-section-title">{section.label}</p>
                      {section.childItems.nodes.map(function(link) {
                        return (<a href={link.path} className="footer-section-link" target={link.target} rel={item.target && `noopener noreferrer`}>
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
        <div className="row">
          <div className="col-lg-12 footer-legal-container">
            <p className="footer-legal">
              © {new Date().getFullYear()} LivePerson. All rights reserved.
            </p>
            {legalItems.nodes.map(function(link) {
              return (<a href={link.path} className="footer-legal footer-legal-link">
                  {link.label}
                </a>)
            })}
            <LanguageSelector />
          </div>
        </div>
      </div>
      
    </footer>
    
  );
};

export default Footer;
