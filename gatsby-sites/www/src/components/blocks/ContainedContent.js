import * as React from 'react';
import PropTypes from 'prop-types';

const ContainedContent = (props) => {

  return (
    <div className="pane bg-primary-light ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="bg-neutral-92">
              <h2>{props.header}</h2>
              <p>{props.content}</p>
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
  )
};

export default ContainedContent;
