import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import TempIcon from './TempIcon';

const NavPanel = ({ label, path, children }) => {
  if (children.length > 0) {
    return (
      // <li className="nav-item dropdown">
      //   <a
      //     className="nav-link dropdown-toggle"
      //     href={path}
      //     data-bs-toggle="dropdown"
      //   >
      //     {label}
      //   </a>
      //   <ul className="dropdown-menu">
      //     {children.map((item, index) => (
      //       <li>
      //         <Link
      //           className="dropdown-item"
      //           to={item.path}
      //           target={item.target}
      //         >
      //           {item.label}
      //         </Link>
      //       </li>
      //     ))}
      //   </ul>
      // </li>
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
                        Brief description of commerce benefits across up to two
                        lines
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
                        Brief description of commerce benefits across up to two
                        lines
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
                        Brief description of commerce benefits across up to two
                        lines
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
                        Brief description of commerce benefits across up to two
                        lines
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
