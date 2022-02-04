import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const SideBySide = (props) => {
  
  return (
    <>
      <div className={`pane comp-side-side ${props.backgroundColor||"bg-transparent"}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-lg-6 `}>
              {!props.imgLeftCtl && <img src={props.imgLeftSrc} alt={props.imgLeftAlt} /> || props.imgLeftCtl}
              <h2>{props.headerLeft}</h2>
              <p>{props.bodyLeft}</p>
            </div>
            <div className={`col-lg-6 `}>
              {!props.imgRightCtl && <img src={props.imgRightSrc} alt={props.imgRightAlt} /> || props.imgRightCtl}
              <h2>{props.headerRight}</h2>
              <p>{props.bodyRight}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBySide;
