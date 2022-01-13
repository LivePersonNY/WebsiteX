import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 

const TabsA = (props) => {

    let tabClickA = function(e) {
      $('.comp-tabs-a .accordion-item').removeClass('accordion-item-active');
      $(e.target).parents('.accordion-item').addClass('accordion-item-active');
      let tabIndex = $(e.target).data('tab');
      $(`.comp-tabs-a .comp-tabs-img[data-tab-content="${tabIndex}"]`).fadeIn();
      $(`.comp-tabs-a .comp-tabs-img:not([data-tab-content="${tabIndex}"])`).hide();
    };

    let tabImgOutput = props.imgSrc.map((item ,index)=>{
      return <img className={`comp-tabs-img ${index !== 0 ? 'display-none' : ''}`} src={item} data-tab-content={index} alt={props.imgAlt[index]}/>
    });

    let tabContent = props.contentHeader.map((item, index)=>{
      return (
        <>
          <div className={`accordion-item ${index === 0 ? 'accordion-item-active' : ''}`}>
            <h4 className="accordion-header" id={`flush-heading${index}`}>
              <button className="collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`} onClick={tabClickA} data-tab={index}>
                {item}
              </button>
            </h4>
            <div id={`flush-collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`flush-heading${index}`} data-bs-parent="#tabsAAccordion">
              <div className="subtitle1">{props.content[index]}</div>
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
