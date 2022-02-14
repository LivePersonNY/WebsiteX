import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';


const CardGridB = (props) => {

  let cardCol = props.items.map((item, index)=>{
    return (
      <div className="col-12 col-lg-3" key={index}>
        <div className="card card-b h-100">
          {!item.imgCtl && <img
              className="card-img-top"
              src={item.imgSrc}
              alt={item.imgAlt}
            /> || item.imgCtl}
          <div className="card-body">
            <p className="card-title card2">{item.cardTitle}</p>
            <p className="card-text subtitle2">{item.body}</p>
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
    <div id={props.anchor}  className={`pane comp-card-grid-b ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
      <div className="container">
        {props.header && (
          <div className="row text-center">
            <div className="col-lg-8 offset-lg-2">
              <h2 className="">{props.header}</h2>
              <p className="">{props.body}</p>
            </div>
          </div>
        )}
        <div className="row comp-card-grid-container">
          {cardCol}
        </div>
      </div>
    </div>
  );
};

export default CardGridB;
