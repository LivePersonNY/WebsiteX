import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, useStaticQuery } from 'gatsby';
import $ from 'jquery'; 

const TabsB = (props) => {

  $(document).ready(function () {
    $('.comp-tabs-b .comp-tabs-content, .comp-tabs-b .comp-tabs-img').hide();
    $('.comp-tabs-b .comp-tabs-content[data-tab-content="0"], .comp-tabs-b .comp-tabs-img[data-tab-content="0"]').fadeIn();
    //Above 2 lines is flexbox hack. Check if theres a better way
    $('.comp-tabs-b .comp-tabs-list-container h4').click(function(){
      $('.comp-tabs-b .comp-tabs-list-container h4').removeClass('pill-active');
      $(this).addClass('pill-active');
      let tabIndex = $(this).data('tab');
      $('.comp-tabs-b .comp-tabs-content, .comp-tabs-b .comp-tabs-img').hide();
      $(`.comp-tabs-b .comp-tabs-content[data-tab-content="${tabIndex}"], .comp-tabs-b .comp-tabs-img[data-tab-content="${tabIndex}"]`).fadeIn();
    });
  });

  
    let tabListOutput = props.tabList.map((item ,index)=>{
      return <h4 className="" data-tab={index}>{item}</h4>
    });

    let tabImgOutput = props.imgSrc.map((item ,index)=>{
      return <img className="comp-tabs-img" src={item} data-tab-content={index} alt={props.imgAlt[index]}/>
    });

    let tabContent = props.contentKicker.map((item, index)=>{
      return (
        <>
          <div className="bg-primary-light comp-tabs-content" data-tab-content={index}>
            <p className="h6">{item}</p>
            <h4>{props.contentHeader[index]}</h4>
            <p>{props.content[index]}</p>
            {props.linkText[index] && (
              <Link className="btn btn-outline-secondary" href={props.linkUrl[index]}>
                {props.linkText[index]}
              </Link>
            )}
          </div>
        </>
      )
    });
   

  return (
  <>
    <div className="pane bg-primary-light comp-tabs-b">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h2>{props.heading}</h2>
            <div className="comp-tabs-list-container">
              {tabListOutput}
            </div>
          </div>
          <div className="col-lg-5">
            {tabContent}
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

export default TabsB;
