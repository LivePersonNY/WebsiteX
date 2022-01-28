import * as React from 'react';
import PropTypes from 'prop-types';

const ProgramCard = (props) => {

  let programBlock = props.items.map((item, index)=>{
    return(
      <div className="comp-program-card-container bg-neutral-96" key={index}>
        <div className="row">
          <div className="col-lg-3 offset-lg-1">
            {!item.imgCtl && <img src={item.imgSrc} alt={item.imgAlt} /> || item.imgCtl}
          </div>
          <div className="col-lg-6 offset-lg-1">
            <p className="subtitle3">{item.kicker}</p>
            <h2 className="card1">{item.header}</h2>
            <p className="subtitle2">{item.content}</p>
            <a href={item.btnUrl} className="btn btn2 btn-primary">
              {item.btnText}
            </a>
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className={`pane comp-program-card ${props.backgroundColor||"bg-transparent"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {programBlock}
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProgramCard;
