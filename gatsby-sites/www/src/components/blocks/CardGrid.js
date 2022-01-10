import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

const CardGrid = (props) => {
  let repeat;

  return (
    <>
      <div className="pane bg-primary-light comp-card-grid">
        <div className="container">
          {props.heading && (
            <div className="row">
              <div className="col-lg-10">
                <h2 className="">{props.heading}</h2>
              </div>
            </div>
          )}
          <div className="row row-cols-lg-3 comp-card-grid-container">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    className="card-image-internal"
                    src={props.img1Src}
                    alt={props.img1Alt}
                  />
                  <p className="card-text quote1">{props.card1Content}</p>
                </div>
                <div className="card-footer">
                  <Link href={props.card1LinkUrl} className="card-link link">
                    {props.card1linkText}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    className="card-image-internal"
                    src={props.img2Src}
                    alt={props.img2Alt}
                  />
                  <p className="card-text quote1">{props.card2Content}</p>
                </div>
                <div className="card-footer">
                  <Link href={props.card2LinkUrl} className="card-link link">
                    {props.card2linkText}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <img
                    className="card-image-internal"
                    src={props.img3Src}
                    alt={props.img3Alt}
                  />
                  <p className="card-text quote1">{props.card3Content}</p>
                </div>
                <div className="card-footer">
                  <Link href={props.card3LinkUrl} className="card-link link">
                    {props.card3linkText}
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

export default CardGrid;
