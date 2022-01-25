import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const IconTextA = (props) => {

  let blockCol = props.items.map((item, index)=>{
    return (
      <div className="col" key={index}>
        <img
          src={item.img}
          alt={item.imgAlt}
        />
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <a href={item.linkUrl} className="link link-mt-small">
          {item.linkText}
        </a>
      </div>
    )
  });

  return (  
    <div className="pane bg-primary-light comp-icon-text-a">
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