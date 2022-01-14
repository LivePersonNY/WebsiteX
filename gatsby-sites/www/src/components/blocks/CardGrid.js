import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const CardGrid = (props) => {

  let cardCol = props.cardContent.map((item, index)=>{
    return (
      <div className="col" key={index}>
        <div className="card h-100">
          <div className="card-body">
            <img
              className="card-image-internal"
              src={props.imgSrc[index]}
              alt={props.imgAlt[index]}
            />
            <p className="card-text quote1">{item}</p>
          </div>
          <div className="card-footer">
            <a href={props.cardLinkUrl[index]} className="card-link link">
              {props.cardLinkText[index]}
            </a>
          </div>
        </div>
      </div>
    )
  });

  return (  
    <div className="pane bg-primary-light comp-card-grid">
      <div className="container">
        {props.heading && (
          <div className="row">
            <div className="col-lg-10">
              <h2 className="">{props.heading}</h2>
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

export default CardGrid;
