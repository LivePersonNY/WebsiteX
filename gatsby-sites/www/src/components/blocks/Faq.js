import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 

const Faq = (props) => {

    let faqContent = props.items.map((item, index)=>{
      return (
          <div className={`accordion-item ${index === 0 ? 'accordion-item-active' : ''}`} key={index}>
            <h4 className="accordion-header" id={`flush-heading${index}`}>
              <button className="collapsed text-start" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`} data-tab={index}>
                {item.faqTitle}
              </button>
            </h4>
            <div id={`flush-collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`flush-heading${index}`} data-bs-parent="#faqAccordion">
              <div><p>{item.content}</p></div>
            </div>
          </div>
      )
    });
   

  return (
  <>
    <div className="pane bg-primary-light comp-faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <p className="h6 text-uppercase">{props.kicker}</p>
            <h2>{props.header}</h2>
            <a href={props.btnUrl} className="btn btn-primary">
              {props.btnText}
            </a>
          </div>
          <div className="col-lg-7">
            <div className="comp-content-container">
              <div className="accordion accordion-flush" id="faqAccordion">
                {faqContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

export default Faq;
