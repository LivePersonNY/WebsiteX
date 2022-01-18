import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const IconTextB = (props) => {

  let cardCol = props.items.map((item, index)=>{
    return (
      <div className="col" key={index}>
        <div className="card h-100">
          <div className="card-body">
            <img
              className="card-image-internal"
              src={item.img}
              alt={item.imgAlt}
            />
            <h3 className="">{item.title}</h3>
            <p className="card-text subtitle1">{item.content}</p>
          </div>
          <div className="card-footer">
            <a href={item.linkUrl} className="card-link link">
              {item.linkText}
            </a>
          </div>
        </div>
      </div>
    )
  });

  return (  
    <div className="pane bg-neutral-92 comp-icon-text-b">
      <div className="container">
        {props.heading && (
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2 className="text-center">{props.heading}</h2>
            </div>
          </div>
        )}
        <div className="row row-cols-lg-3 comp-card-grid-container">
          {cardCol}
        </div>
      </div>
    </div>
  );
};

export default IconTextB;
