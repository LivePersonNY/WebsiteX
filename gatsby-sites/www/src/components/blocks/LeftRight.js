import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const LeftRight = (props) => {
  let repeat;

  return (
    <>
      <div
        className={`pane ${props.backgroundColor||"bg-transparent"} comp-left-right ${
          props.repeat ? 'comp-left-right-repeat' : ''
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className={`col-lg-6 ${props.flipColumns ? 'order-lg-last' : ''}`}
            >
              {!props.imgCtl && <img src={props.imgSrc} alt={props.imgAlt} /> || props.imgCtl}
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
                <a className="link link-mt-small" href={props.linkUrl}>
                  {props.linkText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftRight;
