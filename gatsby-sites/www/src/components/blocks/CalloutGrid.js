import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const CalloutGrid = (props) => {

  let gridItem = props.items.map((item, index)=>{
    return(
      <div className="col-lg-4" key={index}>
        <a className="link" href={item.linkUrl}>
          {!item.imgCtl && <img
            className="card-image-internal"
            src={item.imgSrc}
            alt={item.imgAlt}
          /> || item.imgCtl}
          <p className="h6 text-uppercase">{item.category}</p>
          <h3 className="card1">{item.body}</h3>
          {item.author && (
            <p className="subtitle2">{item.author}</p>
          )}
        </a>
      </div>
    )
  });

  return (
      <div className={`pane comp-callout-grid ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
        <div className="container">
          {props.header && (
            <div className="row align-items-center">
              <div className="col-lg-10">
                <h2 className="">{props.header}</h2>
              </div>
              <div className="col-lg-2">
                {props.linkText && (
                  <a className="link" href={props.linkUrl}>
                    {props.linkText}
                  </a>
                )}
              </div>
            </div>
          )}
          <div className="row comp-callout-grid-container">
            {gridItem}
          </div>
        </div>
      </div>
  );
};

export default CalloutGrid;
