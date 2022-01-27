import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 

const TabsB = (props) => {
  
    /*
    let tabClick = function(e) {
      $('.comp-tabs-b .comp-tabs-list-container h4').removeClass('comp-tab-active');
      $(e.target).addClass('comp-tab-active');
      let tabIndex = $(e.target).data('tab');
      $(`.comp-tabs-b .comp-tabs-content[data-tab-content="${tabIndex}"], .comp-tabs-b .comp-tabs-img[data-tab-content="${tabIndex}"]`).fadeIn();
      $(`.comp-tabs-b .comp-tabs-content:not([data-tab-content="${tabIndex}"]), .comp-tabs-b .comp-tabs-img:not([data-tab-content="${tabIndex}"])`).hide();
    };
    */
  
    let tabListOutput = props.items.map((item ,index)=>{
      return <h4 className={`comp-tab ${index === 0 ? 'comp-tab-active' : ''}`} data-tab={index} key={index}>{item.title}</h4>
    });

    let tabImgOutput = props.items.map((item ,index)=>{
      if (item.imgCtl) {
        return item.imgCtl;
      }
      return <img className={`comp-tabs-img ${index !== 0 ? 'display-none' : ''}`} src={item.img} data-tab-content={index} alt={item.imgAlt} key={index}/>
    });

    let tabContent = props.items.map((item, index)=>{
      return (
    
          <div className={`bg-primary-light comp-tabs-content ${index !== 0 ? 'display-none' : ''}`} data-tab-content={index} key={index}>
            <p className="h6 text-uppercase">{item.kicker || item.title}</p>
            <h4>{item.header}</h4>
            <p>{item.body}</p>
            {item.linkText && (
              <a className="link link-mt-large" href={item.linkUrl}>
                {item.linkText}
              </a>
            )}
          </div>
     
      )
    });
   

  return (
  <>
    <div className={`pane comp-tabs-b ${props.backgroundColor}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h2>{props.heading}</h2>
            <div className="comp-tabs-list-container">
              {tabListOutput}
            </div>
          </div>
          <div className="col-lg-5 comp-tabs-content-container">
            {tabContent}
          </div>
          <div className="col-lg-7 offset-lg-1 comp-tabs-img-container">
            {tabImgOutput}
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

export default TabsB;
