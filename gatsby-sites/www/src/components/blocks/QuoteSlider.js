import * as React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph';

const QuoteSlider = (props) => {

    let quoteBlock = props.items.map((item, index)=>{
      return (
        <>
          {item.img && (
            <div className="col-lg-3 offset-lg-1" key={index}>
              {!item.imgCtl && <img src={item.img} alt={item.imgAlt} /> || item.imgCtl}
            </div>
          )}
            <div className={`${item.img ? 'col-lg-7' : 'col-lg-10 offset-lg-1'}`}>
              {!item.brandImgCtl && <img className="comp-brand-img" src={item.brandImg} alt={item.brandImgAlt} /> || item.brandImgCtl}
              <p className="h6 comp-quote-author">{item.author}</p>
              <Paragraph className="quote1" text={item.body} />
              {item.linkText && (
                <a className="link link-mt-large" href={item.linkUrl}>
                  {item.linkText}
                </a>
              )}
            </div>
        </>
      )
    });
   

  return (
    <div className={`pane comp-quote-slider ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="comp-slider-container bg-primary-light">
                <div className="row">
                  <div className="col-lg-6 offset-lg-1">
                    <h2>{props.header}</h2>
                  </div>
                </div>
                <div className={`row align-items-center`}>
                  {quoteBlock}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default QuoteSlider;
