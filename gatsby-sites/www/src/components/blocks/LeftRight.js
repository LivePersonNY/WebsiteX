import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const LeftRight = (props) => {
  let repeat;
  
  let vFrame = (
    <div className="vimeoContainer">
      <iframe src={props.vimeoUrl} className="vimeoFrame"></iframe>
    </div>
  );

  return (
    <>
      <div id={props.anchor} 
        className={`pane ${props.backgroundColor||"bg-transparent"} comp-left-right ${
          props.repeat ? 'comp-left-right-repeat' : ''
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className={`col-lg-6 ${props.flipColumns ? 'order-lg-last' : ''}`}
            >
              {
                !props.imgCtl && (
                  (props.imgSrc && <img src={props.imgSrc || `https://picsum.photos/752/568?random=${parseInt(Math.random()*100)}`} alt={props.imgAlt || ""} />)) || props.imgCtl || props.lottiePlayer
              }
              {props.vimeoUrl && vFrame}
            </div>
            <div
              className={`col-lg-6 ${
                props.flipColumns ? 'order-lg-first' : ''
              }`}
            >
              {props.kicker && <p className="h6 text-uppercase">{props.kicker}</p>}
              {props.headLevel == 'h2' && <h2>{props.title}</h2>}
              {props.headLevel == 'h3' && <h3>{props.title}</h3>}
              <Paragraph text={props.body} wrapClass="rich-container" />
              {props.linkText && (
                <a className="btn btn-outline-secondary" href={props.linkUrl}>
                  {props.linkText}
                </a>
              )}
              {props.linkSecondaryText && (
                <a className="btn btn-link" href={props.linkSecondaryUrl}>
                  {props.linkSecondaryText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftRight;
