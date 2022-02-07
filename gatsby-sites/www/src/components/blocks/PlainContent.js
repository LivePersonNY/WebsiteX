import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const PlainContent = function(props) {
  
  let headerLevel = props.headLevel || "h2";
  
  return (
    <>
      <div className={`pane comp-plain-content ${props.backgroundColor||"bg-transparent"} ${props.alignmentClass} ${props.header ? 'pane-with-lead-text' : ''}`}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className={`col-lg-${props.colWidth||12}`}>
              {props.kicker && (
                <p className="h6 text-uppercase">{props.kicker}</p>
              )}
              {headerLevel == "h2" && <h2>{props.header}</h2>}
              {headerLevel == "h1" && <h1>{props.header}</h1>}
              {props.body && (<Paragraph text={props.body} />)}
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
