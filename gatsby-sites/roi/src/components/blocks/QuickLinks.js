import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const QuickLinks = function(props) {

  let linksOutput = props.items.map((item ,index)=>{
    return <a href={item.linkUrl} key={index}>{item.linkText}</a>
  });
  
  return (
    <>
      <div id={props.anchor} className={`pane comp-quick-links ${props.backgroundColor||"bg-transparent"}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-${props.colWidth||12} d-lg-flex justify-content-evenly text-center`}>
              <p>Quick Links –</p>
              {linksOutput}
            </div>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default QuickLinks;
