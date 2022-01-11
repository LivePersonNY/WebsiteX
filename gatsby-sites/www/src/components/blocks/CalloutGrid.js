import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

const CalloutGrid = (props) => {
  let repeat;

  return (
    <>
      <div className="pane bg-neutral-84 comp-callout-grid">
        <div className="container">
          {props.heading && (
            <div className="row align-items-center">
              <div className="col-lg-10">
                <h2 className="">{props.heading}</h2>
              </div>
              <div className="col-lg-2">
                {props.linkText && (
                  <Link className="link" to={props.linkUrl}>
                    {props.linkText}
                  </Link>
                )}
              </div>
            </div>
          )}
          <div className="row comp-callout-grid-container">
            <div className="col-lg-12">
              <div className="row row-cols-lg-3">
                <div className="col">
                  <Link className="link" to={props.callout1LinkUrl}>
                    <img src={props.img1Src} alt={props.img1Alt} />
                    <p className="h6">{props.callout1Category}</p>
                    <h3 className="card1">{props.callout1Content}</h3>
                    <p className="subtitle2">{props.callout1Author}</p>
                  </Link>
                </div>
                <div className="col">
                  <Link className="link" to={props.callout2LinkUrl}>
                    <img src={props.img2Src} alt={props.img2Alt} />
                    <p className="h6">{props.callout2Category}</p>
                    <h3 className="card1">{props.callout2Content}</h3>
                    <p className="subtitle2">{props.callout2Author}</p>
                  </Link>
                </div>
                <div className="col">
                  <Link className="link" to={props.callout3LinkUrl}>
                    <img src={props.img3Src} alt={props.img3Alt} />
                    <p className="h6">{props.callout3Category}</p>
                    <h3 className="card1">{props.callout3Content}</h3>
                    <p className="subtitle2">{props.callout3Author}</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalloutGrid;
