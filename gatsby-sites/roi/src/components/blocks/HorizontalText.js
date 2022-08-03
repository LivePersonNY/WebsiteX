import * as React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph';

const HorizontalText = (props) => {

  let textBlock = props.items.map((item, index)=>{
    return(
      <div className="row comp-horizontal-text-block" key={index}>
          <div className="col-lg-4 offset-lg-1">
            <h2>{item.header}</h2>            
          </div>
          <div className="col-lg-6">
            <Paragraph text={item.body} wrapClass="rich-container" />
          </div>
        </div>
    )
  });

  return (  
    <div id={props.anchor} className={`pane comp-horizontal-text ${props.backgroundColor}`}>
      <div className="container">
        {textBlock}
      </div>
    </div>
  );
};

export default HorizontalText;
