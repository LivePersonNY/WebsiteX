import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const ScrollHorizontalText = (props) => {

  let textBlock = props.items.map((item, index)=>{
    return(
      <div className='comp-scroll-horizontal-text-block' key={index}>
        <h3>{item.blockTitle}</h3>
        <p>{item.body}</p>
      </div>
    )
  });

  return (  
    <div className={`pane comp-scroll-horizontal-text ${props.backgroundColor||"bg-transparent"}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="comp-scroll-horizontal-scroll">{props.header}</h2>            
          </div>
          <div className="col-lg-8">
            {textBlock}         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollHorizontalText;
