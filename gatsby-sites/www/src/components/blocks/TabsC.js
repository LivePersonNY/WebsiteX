import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 

const TabsC = (props) => {
  
    let pillListOutput = props.items.map((item ,index)=>{
      return <a className="btn pill" data-tab={index} key={index}>{item.pill}</a>
    });

    let tabsContent = props.items.map((item, index)=>{
      return (
          <div className={`row bg-primary-light align-items-center comp-tabs-content `} data-tab-content={index} key={index}>
            <div className="col-lg-4 offset-lg-1">
              <img src={item.icon} alt={item.iconAlt} />
              <h3>{item.Header}</h3>
              <p>{item.content}</p>
              {item.linkText && (
                <a className="btn btn-outline-secondary" href={item.linkUrl}>
                  {item.linkText}
                </a>
              )}
            </div>
            <div className="col-lg-6 offset-lg-1">
              <img src={item.img} alt={item.imgAlt} />
            </div>
          </div>
      )
    });
   

  return (
  <>
    <div className="pane bg-neutral-92 comp-tabs-c">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="text-center">{props.heading}</h2>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="pills-container">
              {pillListOutput}
            </div>
          </div>
        </div>
          {tabsContent}
      </div>
    </div>
  </>
  )
};

export default TabsC;
