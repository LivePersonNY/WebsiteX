import * as React from 'react';
import PropTypes from 'prop-types';

const HorizontalText = (props) => {

  let textBlock = props.items.map((item, index)=>{
    return(
      <div className="row comp-horizontal-text-block" key={index}>
          <div className="col-lg-4 offset-lg-1">
            <h2>{item.header}</h2>            
          </div>
          <div className="col-lg-6">
            <p>{item.body}</p>
          </div>
        </div>
    )
  });

  return (  
    <div className={`pane comp-horizontal-text ${props.backgroundColor}`}>
      <div className="container">
        {textBlock}
      </div>
    </div>
  );
};

export default HorizontalText;