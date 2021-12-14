import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import TempIcon from './TempIcon';

const NavPanel = ({ label, path, children }) => {
  if (children.length > 0) {
    return (
      <>
        <li className="nav-item dropdown" style={{ position: 'static' }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Solutions
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
            style={{ width: '1200px' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <p className="dropdown-section-title">By Need</p>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="12" />
                      Commerce
                      <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="12" />
                      Customer Care
                      <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                </div>
                <div className="col-lg-3">
                  <p className="dropdown-section-title">By Industry</p>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="12" />
                      Healthcare
                      <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="12" />
                      Automotive
                      <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="12" />
                      Customer Care
                      <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                </div>
                <div className="col-lg-3">
                  <p className="dropdown-section-title">&nbsp;</p>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="12" />
                      Financial Services
                      <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="12" />
                      Retail
                      <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="12" />
                      Travel/Hospitality
                      <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                </div>
                <div className="col-lg-3 dropdown-section-gray">
                  <p className="dropdown-section-title">Products</p>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="56" />
                      <div>
                        Conversational Cloud
                        <br />
                        <span className="dropdown-item-content">
                          Brief description of commerce benefits across up to
                          two lines
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="56" />
                      <div>
                        Voice
                        <br />
                        <span className="dropdown-item-content">
                          Brief description of commerce benefits across up to
                          two lines
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="56" />
                      <div>
                        Managed Services
                        <br />
                        <span className="dropdown-item-content">
                          Brief description of commerce benefits across up to
                          two lines
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="56" />
                      <div>
                        Bella Health
                        <br />
                        <span className="dropdown-item-content">
                          Brief description of commerce benefits across up to
                          two lines
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item dropdown-link-blue" href="#">
                      See Pricing & Packages
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </li>

        <li className="nav-item dropdown" style={{ position: 'static' }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Resources
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
            style={{ width: '770px' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Developer Center <TempIcon iconSize="12" />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Knowledge Center <TempIcon iconSize="12" />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Customer Case Studies
                    </Link>
                  </li>
                </div>
                <div className="col-lg-7 dropdown-section-gray">
                  <p className="dropdown-section-title">Featured Resource</p>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="150" />
                      <div>
                        <span className="dropdown-featured-title">
                          On-Demand Webinar
                        </span>
                        <br />
                        <span className="">
                          Reimagining communication in the travel and
                          hospitality industry
                          <br />
                          <span className="dropdown-link-blue">
                            Watch Now <TempIcon iconSize="12" />
                          </span>
                        </span>
                      </div>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </li>

        <li className="nav-item dropdown" style={{ position: 'static' }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Support
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
            style={{ width: '300px' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Customer Success
                      <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Professional Services <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Technical Support <br />
                      <span className="dropdown-item-content">
                        Brief description of commerce benefits across up to two
                        lines
                      </span>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </li>

        <li className="nav-item dropdown" style={{ position: 'static' }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Curiously Human AI
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
            style={{ width: '560px' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="220" />
                      What is Conversational AI <br />
                      <span className="dropdown-item-content">
                        Brief description of Conversational AI goes right here
                      </span>
                    </Link>
                  </li>
                </div>
                <div className="col-lg-6">
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="220" />
                      What is Conversational AI <br />
                      <span className="dropdown-item-content">
                        Brief description of Conversational AI goes right here
                      </span>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </li>

        <li className="nav-item dropdown" style={{ position: 'static' }}>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            About
          </a>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdown"
            style={{ width: '770px' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Our Values
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      News
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Investor Relations <TempIcon iconSize="12" />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Careers{' '}
                    </Link>
                  </li>
                </div>
                <div className="col-lg-7 dropdown-section-gray">
                  <p className="dropdown-section-title">Featured News</p>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <TempIcon iconSize="150" />
                      <div>
                        <span className="dropdown-featured-title">Article</span>
                        <br />
                        <span className="">
                          Partnership with Mastercard and 2Mobile powers soccer
                          fan experiences
                          <br />
                          <span className="dropdown-link-blue">
                            Read Article <TempIcon iconSize="12" />
                          </span>
                        </span>
                      </div>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </li>

        {/*  <li className="nav-item dropdown">
         <a
           className="nav-link dropdown-toggle"
           href={path}
           data-bs-toggle="dropdown"
         >
           {label}
         </a>
         <ul className="dropdown-menu">
           {children.map((item, index) => (
             <li>
               <Link
                 className="dropdown-item"
                 to={item.path}
                 target={item.target}
               >
                 {item.label}
               </Link>
             </li>
           ))}
         </ul>
       </li> */}
      </>
    );
  }
  return (
    <li className="nav-item">
      <Link className="nav-link" to={path}>
        {label}
      </Link>
    </li>
  );
};

export default NavPanel;
