import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 

const TabsC = (props) => {

    let tabLoad = function(){
      $('.comp-tabs-c .comp-tabs-content').hide();
      $('.comp-tabs-c .comp-tabs-content[data-tab-content="0"]').fadeIn();
    }
  
    let tabClick = function(e) {
      $('.comp-tabs-c .btn.pill').removeClass('pill-active');
      $(e.target).addClass('pill-active');
      let tabIndex = $(e.target).data('tab');
      $(`.comp-tabs-c .comp-tabs-content[data-tab-content="${tabIndex}"]`).fadeIn();
      $(`.comp-tabs-c .comp-tabs-content:not([data-tab-content="${tabIndex}"])`).hide();
    }
  
    let pillListOutput = props.pillList.map((item ,index)=>{
      return <a onClick={tabClick} className="btn pill" data-tab={index} key={index}>{item}</a>
    });

    let tabsContent = props.pillList.map((item, index)=>{
      return (
 
          <div className={`row bg-primary-light align-items-center comp-tabs-content `} data-tab-content={index} key={index}>
            <div className="col-lg-4 offset-lg-1">
              <img src={props.iconSrc[index]} alt={props.iconAlt[index]} />
              <h3>{props.contentHeader[index]}</h3>
              <p>{props.content[index]}</p>
              {props.linkText[index] && (
                <a className="btn btn-outline-secondary" href={props.linkUrl[index]}>
                  {props.linkText[index]}
                </a>
              )}
            </div>
            <div className="col-lg-6 offset-lg-1">
              <img src={props.imgSrc[index]} alt={props.imgAlt[index]} />
            </div>
          </div>
      )
    });
   

  return (
  <>
    <div className="pane bg-neutral-92 comp-tabs-c" onLoad={tabLoad}>
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
