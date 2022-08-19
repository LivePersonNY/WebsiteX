import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

import $ from 'jquery';

const CardGrid = (props) => {

  let cardCol = props.items.map((item, index)=>{
    return (
     

      <div className="col-lg" key={index} id={index}>
        <div className="card h-100">
          <div className="card-body">
            {!item.imgCtl && <img
              className="card-image-internal"
              src={item.imgSrc}
              alt={item.imgAlt}
            /> || item.imgCtl}
            
            <p className="card-text quote1">{item.body}</p>
          </div>
          <div className="card-footer">
            {item.linkText && (<a href={item.linkUrl} className="card-link link" target={item.linkExternal && `_blank`} rel={item.linkExternal && `noopener noreferrer`}>
              {item.linkText}
            </a>)}

          </div>
        </div>
      </div>
    )
  });
  
  let sortable = (
    <div className="row row-cols-lg-3 comp-card-grid-container">
      {cardCol}
    </div>
  );

  return (  
    <div data-localize={props.autoApprove && `auto-approve`} autoapprove={props.autoApprove && "true"} id={props.anchor} className={`pane comp-card-grid ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
      <div className="container">
        {props.header && (
          <div className="row">
            <div className="col-lg-10">
              <h2 className="">{props.header}</h2>
              <Paragraph text={props.body} />
            </div>
          </div>
        )}
        <div className="row comp-card-grid-container">
          {props.sorter}
          {cardCol}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
