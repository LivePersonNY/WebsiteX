import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const LogosUniversal = (props) => {

  let logoImg = props.items.map((item, index)=>{
    return (
      <img 
        key={index}
        className=""
        src={item.img}
        alt={item.imgAlt}
      />
    )
  });

  return (  
    <div className={`pane comp-logo-universal ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
      <div className="container">
        {props.header && (
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h2 className="text-center">{props.header}</h2>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-evenly flex-wrap">
            {logoImg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosUniversal;
