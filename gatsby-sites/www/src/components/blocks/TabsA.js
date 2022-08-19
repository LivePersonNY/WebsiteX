import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 
import Paragraph from '../Paragraph';


const TabsA = (props) => {
  
    const accordionId = props.accordionId || `tabsAAccordion`;

    let tabImgOutput = props.items.map((item ,index)=>{
      if (item.imgCtl) {
        return item.imgCtl;
      }
      return <img className={`comp-tabs-img ${index !== 0 ? 'display-none' : ''}`} src={item.img} data-tab-content={index} alt={item.imgAlt} key={index}/>
    });

    let tabContent = props.items.map((item, index)=>{
      return (
          <div className={`accordion-item ${index === 0 ? 'accordion-item-active' : ''}`} key={index}>
            <h4 className="accordion-header" id={`${props.anchor}_flush-heading${index}`}>
              <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.anchor}_flush-collapse${index}`} aria-expanded="false" aria-controls={`${props.anchor}_flush-collapse${index}`} data-tab={index}>
                {item.title}
              </button>
            </h4>
            <div id={`${props.anchor}_flush-collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`${props.anchor}_flush-heading${index}`} data-bs-parent={`#${props.anchor}_accordion_tabs`}>
              <Paragraph className="subtitle1" text={item.body} />
            </div>
          </div>
      )
    });
   

  return (
  <>
    <div data-localize={props.autoApprove && `auto-approve`} autoapprove={props.autoApprove && "true"} id={props.anchor} className={`pane comp-tabs-a ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center">{props.header}</h2>
            {props.body && <Paragraph className="text-center mb-8" text={props.body} />}
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="comp-content-container">
              <div className="accordion accordion-flush" id={`${props.anchor}_accordion_tabs`}>
                {tabContent}
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            {tabImgOutput}
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

export default TabsA;
