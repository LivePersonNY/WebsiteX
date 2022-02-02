import * as React from 'react';
import PropTypes from 'prop-types';

const ContainedContent = (props) => {

  return (
    <div className={`pane comp-contained-content ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="comp-contained-content-container bg-neutral-92">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  {props.kicker && (
                    <p class="h6 text-uppercase">{props.kicker}</p>
                  )}
                  <h2>{props.header}</h2>
                  <p>{props.body}</p>
                  {props.linkText && (
                    <a className="btn btn-primary" href={props.linkUrl}>
                      {props.linkText}
                    </a>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 text-center">
                  {props.imgSrc && (
                    <img src={props.imgSrc} alt={props.imgAlt} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ContainedContent;
