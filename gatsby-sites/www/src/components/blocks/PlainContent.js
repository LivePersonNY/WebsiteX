import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const PlainContent = function(props) {
  
  let headerLevel = props.headLevel || "h2";
  
  return (
    <>
      <div className={`pane comp-plain-content ${props.backgroundColor||"bg-transparent"} ${props.alignmentClass}`}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className={`col-lg-${props.colWidth||12}`}>
              {headerLevel == "h2" && <h2>{props.heading}</h2>}
              {headerLevel == "h1" && <h1>{props.heading}</h1>}
              {props.content && (<Paragraph text={props.content} />)}
              {props.linkText && (
                <a className="link link-mt-large" href={props.linkUrl}>
                  {props.linkText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default PlainContent;
