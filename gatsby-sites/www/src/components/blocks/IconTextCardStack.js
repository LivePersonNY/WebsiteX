import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const IconTextCardStack = (props) => {

  let cardCol = props.items.map((item, index)=>{
    if(!item.cardCTA){
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
    }
    else{
      return (
        <div className="col" key={index}>
          <div className="card h-100 text-center">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h3 className="card-text">{item.content}</h3>
              <a href={item.btnUrl} className="btn btn-primary">
                {item.btnText}
              </a>
            </div>
          </div>
        </div>
      )
    }
    
  });

  return (  
    <div className="pane bg-neutral-92 comp-icon-text-b">
      <div className="container">
        <div className="row row-cols-lg-3 comp-card-stack-container">
          {cardCol}
        </div>
      </div>
    </div>
  );
};

export default IconTextCardStack;
