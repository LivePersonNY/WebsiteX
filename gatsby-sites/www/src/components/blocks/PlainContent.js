import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const PlainContent = (props) => (
  <>
    <div className={`pane comp-plain-content ${props.backgroundColor}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-lg-${props.colWidth||12}`}>
            <h2>{props.heading}</h2>
            {props.content && (<p>{props.content}</p>)}
            {props.linkText && (
              <a className="link link-mt-large" href={props.linkUrl}>
                {props.linkText}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PlainContent;
