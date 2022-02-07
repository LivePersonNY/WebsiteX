import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const IconTextA = (props) => {

  let blockCol = props.items.map((item, index)=>{
    return (
      <div className="col" key={index}>
        {!item.imgCtl && item.img &&
          <img
            src={item.img}
            alt={item.imgAlt}
          /> || item.imgCtl
        }
        <p className="card1">{item.title}</p>
        <Paragraph className="subtitle1" text={item.body} />
      </div>
    )
  });

  return (  
    <div className={`pane comp-icon-text-a ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
      <div className="container">
        {props.header && (
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2 className="text-center">{props.header}</h2>
            </div>
          </div>
        )}
        <div className="row row-cols-lg-3 row-cols-1 comp-block-grid-container">
          {blockCol}
          {props.cardCTA && 
            <div className="col">
              <div className="card h-100 text-center">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h3 className="card-text">{props.cardCTAbody}</h3>
                  <a href={props.btnUrl} className="btn btn-primary">
                    {props.btnText}
                  </a>
                </div>
              </div>
            </div>
           } 
        </div>
      </div>
    </div>
  );
};

export default IconTextA;
