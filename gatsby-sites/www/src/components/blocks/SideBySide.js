import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const SideBySide = (props) => {

  let content = props.items.map((item, index)=>{
    return (
      <div className={`col-lg-6 `} key={index}>
        {!item.imgCtl && <img src={item.imgSrc} alt={item.imgAlt} /> || item.imgCtl}
        <h2>{item.header}</h2>
        <p>{item.body}</p>
      </div>
    )
  })
  
  return (
    <>
      <div className={`pane comp-side-side ${props.backgroundColor||"bg-transparent"}`}>
        <div className="container">
          <div className="row align-items-center">
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBySide;
