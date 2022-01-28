import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const IconTextD = (props) => {

  let blockCol = props.items.map((item, index)=>{
    return (
      <div className="col" key={index}>
        <div className="comp-content-container bg-neutral-96">
          {!item.imgCtl && item.img &&
            <img
              src={item.img}
              alt={item.imgAlt}
            /> || item.imgCtl
          }
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          {props.linkText && (
            <a href={item.linkUrl} className="link link-mt-small">
            {item.linkText}
          </a>
          )}
        </div>
      </div>
    )
  });

  return (  
    <div className={`pane comp-icon-text-d ${props.backgroundColor||"bg-transparent"}`}>
      <div className="container">
        {props.header && (
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2 className="">{props.header}</h2>
              <p>{props.content}</p>
            </div>
          </div>
        )}
        <div className="row row-cols-lg-2 row-cols-1 comp-block-grid-container">
          {blockCol}
        </div>
      </div>
    </div>
  );
};

export default IconTextD;
