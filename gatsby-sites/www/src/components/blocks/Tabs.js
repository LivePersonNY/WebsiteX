import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Tabs = (props) => (
  <>
    <div className="pane bg-neutral-92 comp-tabs">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="text-center">{props.heading}</h2>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="pills-container">
              <a className="btn pill">{props.pill1}</a>
              <a className="btn pill">{props.pill2}</a>
              <a className="btn pill">{props.pill3}</a>
              <a className="btn pill">{props.pill4}</a>
            </div>
          </div>
        </div>
        <div className="row bg-primary-light align-items-center">
          <div className="col-lg-4 offset-lg-1">
            <img src={props.iconSrc} alt={props.iconAlt} />
            <h3>{props.contentHeader}</h3>
            <p>{props.content}</p>
            {props.linkText && (
              <Link className="btn btn-outline-secondary" href={props.linkUrl}>
                {props.linkText}
              </Link>
            )}
          </div>
          <div className="col-lg-6 offset-lg-1">
            <img src={props.imgSrc} alt={props.imgAlt} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Tabs;
