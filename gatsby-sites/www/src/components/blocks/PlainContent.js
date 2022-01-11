import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

const PlainContent = (props) => (
  <>
    <div className="pane bg-primary-light comp-plain-content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className={`col-lg-${props.colWidth}`}>
              <h2>{props.heading}</h2>
              <p>{props.content}</p>
              {props.linkText && (
                <Link className="link link-mt-large" href={props.linkUrl}>
                  {props.linkText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PlainContent;
