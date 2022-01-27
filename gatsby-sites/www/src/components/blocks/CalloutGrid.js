import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const CalloutGrid = (props) => {
  let repeat;

  return (
      <div className={`pane comp-callout-grid ${props.backgroundColor}`}>
        <div className="container">
          {props.heading && (
            <div className="row align-items-center">
              <div className="col-lg-10">
                <h2 className="">{props.heading}</h2>
              </div>
              <div className="col-lg-2">
                {props.linkText && (
                  <a className="link" href={props.linkUrl}>
                    {props.linkText}
                  </a>
                )}
              </div>
            </div>
          )}
          <div className="row comp-callout-grid-container">
            
                <div className="col-lg-4">
                  <a className="link" href={props.callout1LinkUrl}>
                    <img src={props.img1Src} alt={props.img1Alt} />
                    <p className="h6">{props.callout1Category}</p>
                    <h3 className="card1">{props.callout1Content}</h3>
                    <p className="subtitle2">{props.callout1Author}</p>
                  </a>
                </div>
                <div className="col-lg-4">
                  <a className="link" href={props.callout2LinkUrl}>
                    <img src={props.img2Src} alt={props.img2Alt} />
                    <p className="h6">{props.callout2Category}</p>
                    <h3 className="card1">{props.callout2Content}</h3>
                    <p className="subtitle2">{props.callout2Author}</p>
                  </a>
                </div>
                <div className="col-lg-4">
                  <a className="link" href={props.callout3LinkUrl}>
                    <img src={props.img3Src} alt={props.img3Alt} />
                    <p className="h6">{props.callout3Category}</p>
                    <h3 className="card1">{props.callout3Content}</h3>
                    <p className="subtitle2">{props.callout3Author}</p>
                  </a>
                </div>
            
          </div>
        </div>
      </div>
  );
};

export default CalloutGrid;
