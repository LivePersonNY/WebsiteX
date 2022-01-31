import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';


const IconTextA = (props) => {

  let blockCol = props.items.map((item, index)=>{
    return (
      <div className="col" key={index}>
        {!item.imgCtl && item.img &&
          <img
            src={item.img}
            alt={item.imgAlt}
          /> || item.imgCtl
        }
        <h3>{item.title}</h3>
        <Paragraph text={item.body} />
        <a href={item.linkUrl} className="link link-mt-small">
          {item.linkText}
        </a>
      </div>
    )
  });

  return (  
    <div className={`pane comp-icon-text-a ${props.backgroundColor||"bg-transparent"}`}>
      <div className="container">
        {props.heading && (
          <div className="row">
            <div className="col-lg-10">
              <h2 className="">{props.heading}</h2>
            </div>
          </div>
        )}
        <div className="row row-cols-lg-2 row-cols-1 comp-block-grid-container">
          {blockCol}
        </div>
      </div>
    </div>
  );
};

export default IconTextA;
