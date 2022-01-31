import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const PlainContent = (props) => (
  <>
    <div className={`pane comp-plain-content ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-lg-${props.colWidth||12}`}>
            <h2 className="pane-lead-text">{props.header}</h2>
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
