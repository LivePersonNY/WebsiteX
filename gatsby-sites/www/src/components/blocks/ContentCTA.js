import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ContentCTA = (props) => {
  return (  
    <div className={`pane comp-content-cta ${props.backgroundColor}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="comp-content-cta-container bg-neutral-96">
              <div className="row align-items-center text-center text-lg-start">
                <div className="col-lg-8 offset-lg-1">
                  <h2>{props.content}</h2>
                </div>
                <div className="col-lg-3">
                    {props.linkText && (
                      <a className="btn btn-primary" href={props.linkUrl}>
                        {props.linkText}
                      </a>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCTA;
