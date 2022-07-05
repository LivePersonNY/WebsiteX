import * as React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph';

const TeamCards = (props) => {

  let cardCol = props.items.map((item, index)=>{
    return (
      <div className="col-12 col-lg-3" key={index}>
        <div className="card card-team h-100">
          {!item.imgCtl && <img
              className="card-img-top"
              src={item.imgSrc}
              alt={item.imgAlt}
            /> || item.imgCtl}
          <div className="card-body">
            <p className="card-title card1">{item.name}</p>
            <Paragraph className="card-text body2" text={item.title} />
          </div>
          {item.btnText && (
            <div className="card-footer">
              <a href={item.btnUrl} className="btn btn2 btn-outline-secondary" target="_blank" rel="noopener noreferrer">
                {item.btnText}
              </a>
            </div>
          )}
        </div>
      </div>
    )
  });

  return (  
    <div id={props.anchor} className={`pane comp-team-cards ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
      <div className="container">
        {props.header && (
          <div className="row text-center">
            <div className="col-lg-8 offset-lg-2">
              <h2 className="">{props.header}</h2>
            </div>
          </div>
        )}
        <div className="row comp-team-cards-container">
          {cardCol}
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
