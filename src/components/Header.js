import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/">{siteTitle}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/solutions">
                Solutions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" href="/products/1">
                    Products 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/products/2">
                    Products 2
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/products/3">
                    Products 3
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
