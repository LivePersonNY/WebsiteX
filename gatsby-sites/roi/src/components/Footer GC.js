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
  
   
  
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="footer-section">
              <p className="footer-section-title">Solutions by need</p>
              <a href="#" className="footer-section-link">
                Commerce
              </a>
              <a href="#" className="footer-section-link">
                Customer Care
              </a>
            </div>
            <div className="footer-section">
              <p className="footer-section-title">Industries</p>
              <a href="#" className="footer-section-link">
                Healthcare
              </a>
              <a href="#" className="footer-section-link">
                Automotive <TempIcon iconSize="7" />
              </a>
              <a href="#" className="footer-section-link">
                Telecom
              </a>
              <a href="#" className="footer-section-link">
                Financial Services
              </a>
              <a href="#" className="footer-section-link">
                Retail
              </a>
              <a href="#" className="footer-section-link">
                Travel/Hospitality
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-section">
              <p className="footer-section-title">Products</p>
              <a href="#" className="footer-section-link">
                Conversational Cloud
              </a>
              <a href="#" className="footer-section-link">
                Voice
              </a>
              <a href="#" className="footer-section-link">
                Managed Services
              </a>
              <a href="#" className="footer-section-link">
                Bella Health
              </a>
            </div>
            <div className="footer-section">
              <p className="footer-section-title">Support</p>
              <a href="#" className="footer-section-link">
                Customer Success
              </a>
              <a href="#" className="footer-section-link">
                Professional Services
              </a>
              <a href="#" className="footer-section-link">
                Technical Support
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-section">
              <p className="footer-section-title">Resources</p>
              <a href="#" className="footer-section-link">
                Developer Center <TempIcon iconSize="7" />
              </a>
              <a href="#" className="footer-section-link">
                Knowledge Center <TempIcon iconSize="7" />
              </a>
              <a href="#" className="footer-section-link">
                Security
              </a>
              <a href="#" className="footer-section-link">
                Blog
              </a>
              <a href="#" className="footer-section-link">
                Events
              </a>
              <a href="#" className="footer-section-link">
                Customer Case Studies
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-section">
              <p className="footer-section-title">Curiously Human AI</p>
              <a href="#" className="footer-section-link">
                What is Conversational AI?
              </a>
              <a href="#" className="footer-section-link">
                Data/AI
              </a>
            </div>
            <div className="footer-section">
              <p className="footer-section-title">About</p>
              <a href="#" className="footer-section-link">
                Our Values
              </a>
              <a href="#" className="footer-section-link">
                News
              </a>
              <a href="#" className="footer-section-link">
                Partners
              </a>
              <a href="#" className="footer-section-link">
                Leadership
              </a>
              <a href="#" className="footer-section-link">
                Investor Relations <TempIcon iconSize="7" />
              </a>
              <a href="#" className="footer-section-link">
                Careers
              </a>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="footer-section">
              <p className="footer-section-title">
                Compelling reason to sign up
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="footer-legal">
              © {new Date().getFullYear()} LivePerson. All rights reserved.
            </p>
            <a href="#" className="footer-legal footer-legal-link">
              Terms of Service
            </a>
            <a href="#" className="footer-legal footer-legal-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-legal footer-legal-link">
              Website by 829
            </a>
          </div>
        </div>
      </div>
      
    </footer>
    
  );
};

export default Footer;
