import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 

const TabsA = (props) => {

    let tabImgOutput = props.imgSrc.map((item ,index)=>{
      return <img className="comp-tabs-img" src={item} data-tab-content={index} alt={props.imgAlt[index]}/>
    });

    let tabContent = props.contentHeader.map((item, index)=>{
      return (
        <>
          <div className="accordion-item">
            <h4 className="accordion-header" id={`flush-heading${index}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                {item}
              </button>
            </h4>
            <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#tabsAAccordion">
              <div className="accordion-body">{props.content[index]}</div>
            </div>
          </div>
        </>
      )
    });
   

  return (
  <>
    <div className="pane bg-primary-light comp-tabs-a">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center">{props.heading}</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="comp-content-container">
              <div className="accordion accordion-flush" id="tabsAAccordion">
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
