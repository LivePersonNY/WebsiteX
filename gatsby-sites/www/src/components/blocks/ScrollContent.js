import * as React from 'react';
import PropTypes from 'prop-types';

const ScrollContent = (props) => {

  let textBlock = props.items.map((item, index)=>{
    return(
      <div className='comp-scroll-horizontal-text-block' key={index}>
        <h3>{item.blockTitle}</h3>
        <p>{item.body}</p>
      </div>
    )
  });

  return (  
    <div autoapprove={props.autoApprove && "true"} id={props.anchor} className={`pane comp-scroll-horizontal-text ${props.backgroundColor}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center comp-scroll-horizontal-header">
            <p className="h6">{props.kicker}</p>        
            <h2>{props.header}</h2>            
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 order-lg-last">
            {!props.imgCtl && <img src={props.imgSrc} alt={props.imgAlt} className="comp-scroll-horizontal-scroll" /> || props.imgCtl} 
          </div>
          <div className="col-lg-4 order-lg-first">
            {textBlock}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollContent;
