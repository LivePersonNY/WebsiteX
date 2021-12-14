import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import TempIcon from './TempIcon';

const Footer = () => {
  const { topItems } = useStaticQuery(
    graphql`
      query topLevelQueryForFooter {
        topItems: allWpMenuItem(
          filter: {
            menu: { node: { locations: { eq: GATSBY_FOOTER_MENU } } }
            parentId: { eq: null }
          }
        ) {
          nodes {
            id
            label
            parentId
            childItems {
              nodes {
                label
                url
                path
                order
                target
              }
            }
            path
            url
          }
        }
      }
    `
  );
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="footer-section">
              <p className="footer-section-title">Solutions by need</p>
              <Link href="#" className="footer-section-link">
                Commerce
              </Link>
              <Link href="#" className="footer-section-link">
                Customer Care
              </Link>
            </div>
            <div className="footer-section">
              <p className="footer-section-title">Industries</p>
              <Link href="#" className="footer-section-link">
                Healthcare
              </Link>
              <Link href="#" className="footer-section-link">
                Automotive <TempIcon iconSize="7" />
              </Link>
              <Link href="#" className="footer-section-link">
                Telecom
              </Link>
              <Link href="#" className="footer-section-link">
                Financial Services
              </Link>
              <Link href="#" className="footer-section-link">
                Retail
              </Link>
              <Link href="#" className="footer-section-link">
                Travel/Hospitality
              </Link>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-section">
              <p className="footer-section-title">Products</p>
              <Link href="#" className="footer-section-link">
                Conversational Cloud
              </Link>
              <Link href="#" className="footer-section-link">
                Voice
              </Link>
              <Link href="#" className="footer-section-link">
                Managed Services
              </Link>
              <Link href="#" className="footer-section-link">
                Bella Health
              </Link>
            </div>
            <div className="footer-section">
              <p className="footer-section-title">Support</p>
              <Link href="#" className="footer-section-link">
                Customer Success
              </Link>
              <Link href="#" className="footer-section-link">
                Professional Services
              </Link>
              <Link href="#" className="footer-section-link">
                Technical Support
              </Link>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-section">
              <p className="footer-section-title">Resources</p>
              <Link href="#" className="footer-section-link">
                Developer Center <TempIcon iconSize="7" />
              </Link>
              <Link href="#" className="footer-section-link">
                Knowledge Center <TempIcon iconSize="7" />
              </Link>
              <Link href="#" className="footer-section-link">
                Security
              </Link>
              <Link href="#" className="footer-section-link">
                Blog
              </Link>
              <Link href="#" className="footer-section-link">
                Events
              </Link>
              <Link href="#" className="footer-section-link">
                Customer Case Studies
              </Link>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-section">
              <p className="footer-section-title">Curiously Human AI</p>
              <Link href="#" className="footer-section-link">
                What is Conversational AI?
              </Link>
              <Link href="#" className="footer-section-link">
                Data/AI
              </Link>
            </div>
            <div className="footer-section">
              <p className="footer-section-title">About</p>
              <Link href="#" className="footer-section-link">
                Our Values
              </Link>
              <Link href="#" className="footer-section-link">
                News
              </Link>
              <Link href="#" className="footer-section-link">
                Partners
              </Link>
              <Link href="#" className="footer-section-link">
                Leadership
              </Link>
              <Link href="#" className="footer-section-link">
                Investor Relations <TempIcon iconSize="7" />
              </Link>
              <Link href="#" className="footer-section-link">
                Careers
              </Link>
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
            <Link href="#" className="footer-legal footer-legal-link">
              Terms of Service
            </Link>
            <Link href="#" className="footer-legal footer-legal-link">
              Privacy Policy
            </Link>
            <Link href="#" className="footer-legal footer-legal-link">
              Website by 829
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
