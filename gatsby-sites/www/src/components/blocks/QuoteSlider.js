import * as React from 'react';
import PropTypes from 'prop-types';

const QuoteSlider = (props) => {

    let quoteBlock = props.items.map((item, index)=>{
      return (
        <>
            <div className="col-lg-3 offset-lg-1" key={index}>
              <img src={item.img} alt={item.imgAlt} />
            </div>
            <div className="col-lg-7">
              <img className="comp-brand-img" src={item.brandImg} alt={item.brandImgAlt} />
              <p className="h6 comp-quote-author">{item.author}</p>
              <p className="quote1">{item.content}</p>
              {item.linkText && (
                <a className="link" href={item.linkUrl}>
                  {item.linkText}
                </a>
              )}
            </div>
        </>
      )
    });
   

  return (
    <div className={`pane comp-quote-slider ${props.backgroundColor||"bg-transparent"}`}>
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
