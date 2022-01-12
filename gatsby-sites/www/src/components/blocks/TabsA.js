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
            <h4 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                {item}
              </button>
            </h4>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
          <div className="bg-primary-light comp-tabs-content" data-tab-content={index}>
            <p className="h6">{item}</p>
            <h4>{props.contentHeader[index]}</h4>
            <p>{props.content[index]}</p>
            {props.linkText[index] && (
              <a className="link link-mt-large" href={props.linkUrl[index]}>
                {props.linkText[index]}
              </a>
            )}
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
              <div class="accordion accordion-flush">

              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            {/* {tabImgOutput} */}
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

export default TabsA;
