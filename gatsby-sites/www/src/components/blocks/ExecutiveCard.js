import * as React from 'react';
import PropTypes from 'prop-types';

const ExecutiveCard = (props) => {

  let execBlock = props.items.map((item, index)=>{
    return(
      <div className="comp-exec-card-container bg-neutral-96" key={index}>
        <div className="row align-items-center">
          <div className="col-lg-3 offset-lg-1">
            {!item.imgCtl && <img src={item.imgSrc} alt={item.imgAlt} /> || item.imgCtl}
          </div>
          <div className="col-lg-6 offset-lg-1">
            <h2 className="card1">{item.name}</h2>
            <p className="body2">{item.title}</p>
            <a href={item.linkedInUrl} className="btn btn2 btn-outline-secondary">
              {item.btnText}
            </a>
            <p className="subtitle1">{item.bio}</p>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className={`pane comp-exec-card ${props.backgroundColor}`}>
      <div className="container">
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
