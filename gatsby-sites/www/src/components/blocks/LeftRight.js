import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

const LeftRight = (props) => {
  let repeat;

  return (
    <>
      <div
        className={`pane bg-primary-light comp-left-right ${
          props.repeat ? 'comp-left-right-repeat' : ''
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className={`col-lg-6 ${props.flipColumns ? 'order-lg-last' : ''}`}
            >
              <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div
              className={`col-lg-6 ${
                props.flipColumns ? 'order-lg-first' : ''
              }`}
            >
              {props.preHeading && <h6>{props.preHeading}</h6>}
              <h2>{props.title}</h2>
              <p>{props.content}</p>
              {props.linkText && (
                <Link className="link link-mt-small" to={props.linkUrl}>
                  {props.linkText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftRight;
