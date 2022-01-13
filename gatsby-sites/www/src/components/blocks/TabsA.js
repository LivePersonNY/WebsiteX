import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 

// $(document).ready(function () {
//   $('.comp-tabs-b .comp-tabs-content, .comp-tabs-b .comp-tabs-img').hide();
//   $('.comp-tabs-b .comp-tabs-content[data-tab-content="0"], .comp-tabs-b .comp-tabs-img[data-tab-content="0"]').fadeIn();
//   //Above 2 lines is flexbox hack. Check if theres a better way
//   $('.comp-tabs-b .comp-tabs-list-container h4').click(function(){
//     $('.comp-tabs-b .comp-tabs-list-container h4').removeClass('comp-tab-active');
//     $(this).addClass('comp-tab-active');
//     let tabIndex = $(this).data('tab');
//     $(`.comp-tabs-b .comp-tabs-content[data-tab-content="${tabIndex}"], .comp-tabs-b .comp-tabs-img[data-tab-content="${tabIndex}"]`).fadeIn();
//     $(`.comp-tabs-b .comp-tabs-content:not([data-tab-content="${tabIndex}"]), .comp-tabs-b .comp-tabs-img:not([data-tab-content="${tabIndex}"])`).hide();
//   });
// });

const TabsA = (props) => {

    let tabImgOutput = props.imgSrc.map((item ,index)=>{
      return <img className="comp-tabs-img" src={item} data-tab-content={index} alt={props.imgAlt[index]}/>
    });

    let tabContent = props.contentHeader.map((item, index)=>{
      return (
        <>
          <div class="accordion-item">
            <h4 class="accordion-header" id={`flush-heading${index}`}>
              <button class="collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                {item}
              </button>
            </h4>
            <div id={`flush-collapse${index}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#tabsAAccordion">
              <div class="subtitle1">{props.content[index]}</div>
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
              <div class="accordion accordion-flush" id="tabsAAccordion">
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
