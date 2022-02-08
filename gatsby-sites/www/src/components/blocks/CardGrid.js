import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

import $ from 'jquery';

const CardGrid = (props) => {

  let tabScript = `
    let items = document.querySelectorAll('#cardGridCarousel.carousel .carousel-item');

    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (var i=1; i != minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  `;

  if (props.runFilters) {
    useEffect(() => {
      eval(tabScript);
    });
  }

  let cardCol = props.items.map((item, index)=>{
    return (
      <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
        <div className="col-lg-4" key={index} id={index}>
          <div className="card h-100">
            <div className="card-body">
              {!item.imgCtl && <img
                className="card-image-internal"
                src={item.imgSrc}
                alt={item.imgAlt}
              /> || item.imgCtl}
              
              <Paragraph text={item.body} className="card-text quote1" />
            </div>
            <div className="card-footer">
              <a href={item.linkUrl} className="card-link link">
                {item.linkText}
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  });
  
  let sortable = (
    <div className="row row-cols-lg-3 comp-card-grid-container">
      {cardCol}
    </div>
  );

  return (  
    <div className={`pane comp-card-grid ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
      <div className="container">
        {props.header && (
          <div className="row">
            <div className="col-lg-10">
              <h2 className="">{props.header}</h2>
              <p className="">{props.body}</p>
            </div>
          </div>
        )}
        <div className="row comp-card-grid-container">
          {props.sorter}
          <div id="cardGridCarousel" className="carousel slide" data-bs-ride="carousel">
            <button className="carousel-control-prev" type="button" data-bs-target="#cardGridCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#cardGridCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
				    <div className="carousel-inner" role="listbox">
              {cardCol}
            </div>
          </div>
        </div>
      </div>
      {!props.runFilters && (
        <script>{tabScript}</script>
      )}
    </div>
  );
};

export default CardGrid;
