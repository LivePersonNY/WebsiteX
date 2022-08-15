import * as React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph';

const ExecutiveCard = (props) => {

  let execBlock = props.items.map((item, index)=>{
    return(
      <div className="comp-exec-card-container bg-neutral-96" key={index}>
        <div className="row">
          <div className="col-lg-3 offset-lg-1">
            {!item.imgCtl && <img src={item.imgSrc} alt={item.imgAlt} /> || item.imgCtl}
          </div>
          <div className="col-lg-6 offset-lg-1">
            <h2 className="card1">{item.name}</h2>
            <p className="body2">{item.title}</p>
            <a href={item.btnUrl} className="btn btn2 btn-outline-secondary" target="_blank" rel="noopener noreferrer">
              {item.btnText}
            </a>
            <Paragraph className="subtitle1" text={item.bio} collapsible={`collapseBio${index}`} />
          </div>
        </div>
      </div>
    )
  });

  return (
    <div autoapprove={props.autoApprove && "true"} id={props.anchor} className={`pane comp-exec-card ${props.backgroundColor}`}>
      <div className="container">
      {props.header && (
        <div className="row">
          <div className="col-lg-10 offset-lg-1 mb-8">
            <h2 className="text-center heading">{props.header}</h2>
          </div>
        </div>
      )}
        <div className="row">
          <div className="col-lg-12">
            {execBlock}
          </div>
        </div>
      </div>
    </div>
  )
};

export default ExecutiveCard;
