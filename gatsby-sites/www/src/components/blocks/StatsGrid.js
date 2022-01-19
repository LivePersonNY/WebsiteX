import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const StatsGrid = (props) => {

  let statCol = props.items.map((item, index)=>{
    return (
      <div className="col">
        <p className="h1">{item.stat}</p>
        <p className="subtitle2">{item.content}</p>
      </div>
    )
  });

  return (
      <div className="pane bg-primary-light comp-stat-grid">
        <div className="container">
          {props.heading && (
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-center">{props.heading}</h2>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-lg-12">
              <div className="comp-4col-grid text-center">
                <div className="row">
                  {statCol}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default StatsGrid;
