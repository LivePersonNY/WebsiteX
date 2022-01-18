import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const IconTextA = (props) => {

  let blockCol = props.blockContent.map((item, index)=>{
    return (
      <div className="col" key={index}>
        <img
          src={props.imgSrc[index]}
          alt={props.imgAlt[index]}
        />
        <p className="card1">{props.blockTitle[index]}</p>
        <p className="subtitle1">{item}</p>
      </div>
    )
  });

  return (  
    <div className="pane bg-neutral-92 comp-icon-text-a">
      <div className="container">
        {props.heading && (
          <div className="row">
            <div className="col-lg-10">
              <h2 className="">{props.heading}</h2>
            </div>
          </div>
        )}
        <div className="row row-cols-lg-3 row-cols-1 comp-block-grid-container">
          {blockCol}
        </div>
      </div>
    </div>
  );
};

export default IconTextA;
