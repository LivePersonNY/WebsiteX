//import * as React from 'react';
import PropTypes from 'prop-types';

const StatsGrid = (props) => {
  let repeat;

  return (
    <>
      <div className="pane bg-primary-light comp-stat-grid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {props.heading && (
                <h2 className="text-center">{props.heading}</h2>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="comp-4col-grid bg-neutral-92 text-center">
                <div className="row">
                  <div className="col-lg-3">
                    <p className="h1">{props.stat1}</p>
                    <p className="subtitle2">{props.content1}</p>
                  </div>
                  <div className="col-lg-3">
                    <p className="h1">{props.stat2}</p>
                    <p className="subtitle2">{props.content2}</p>
                  </div>
                  <div className="col-lg-3">
                    <p className="h1">{props.stat3}</p>
                    <p className="subtitle2">{props.content3}</p>
                  </div>
                  <div className="col-lg-3">
                    <p className="h1">{props.stat4}</p>
                    <p className="subtitle2">{props.content4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsGrid;
