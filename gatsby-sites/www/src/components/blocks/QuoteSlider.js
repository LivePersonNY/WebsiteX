import * as React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph';

const QuoteSlider = (props) => {

    let quoteBlock = props.items.map((item, index)=>{
      return (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          <div className={`row align-items-center`}>
            {(item.img || item.imgCtl) && (
              <div className="col-lg-3 offset-lg-1" key={index}>
                {!item.imgCtl && <img src={item.img} alt={item.imgAlt} /> || item.imgCtl}
              </div>
            )}
            <div className={`${item.img || item.imgCtl ? 'col-lg-7' : 'col-lg-10 offset-lg-1'}`}>
              {!item.brandImgCtl && <img className="comp-brand-img" src={item.brandImg} alt={item.brandImgAlt} /> || item.brandImgCtl}
              <p className="h6 comp-quote-author">{item.author}</p>
              <Paragraph className="quote1" text={item.body} />
              {item.linkText && (
                <a className="link link-mt-large" href={item.linkUrl}>
                  {item.linkText}
                </a>
              )}
            </div>
          </div>
        </div>
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
                  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                    <div className="carousel-inner">
                      {quoteBlock}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default QuoteSlider;
