import * as React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph';
import { useEffect } from 'react';

const OverlaySlider = (props) => {
    let tabScript = `
      let items = document.querySelectorAll('overlay-slider.carousel .carousel-item');

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

    if (props.runFilters && props.small) {
        useEffect(() => {
            eval(tabScript);
        });
    }

    let contentBlock = props.items.map((item, index) => {
        return (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className={`col-lg-${props.small ? '4' : '12'}`}>
                    <div className={`row align-items-center`}>
                        {(item.img || item.imgCtl) && (
                            <div className="col-lg-3 offset-lg-1" key={index}>
                                {(!item.imgCtl && (
                                    <img
                                        src={item.img}
                                        alt={item.imgAlt}
                                        width={item.imgWidth}
                                        height={item.imgHeight}
                                        loading="lazy"
                                    />
                                )) ||
                                    item.imgCtl}
                            </div>
                        )}
                        <div className={`${item.img || item.imgCtl ? 'col-lg-4' : 'col-lg-10 offset-lg-1'}`}>
                            <h6 className="h6">
                                <Paragraph headerLevel="h6" text={item.kicker} />
                            </h6>
                            <h3 className="h3">
                                <Paragraph headerLevel="h3" text={item.body} />
                            </h3>
                        </div>
                        <div className={`col-lg-3`}>
                            {item.linkText && (
                                <a
                                    className="btn btn-primary"
                                    href={item.linkUrl}
                                    target={item.linkExternal && `_blank`}
                                    rel={item.linkExternal && `noopener noreferrer`}
                                >
                                    {item.linkText}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div
            data-localize={props.autoApprove && `auto-approve`}
            autoapprove={props.autoApprove && 'true'}
            id={props.anchor}
            className={`pane comp-overlay-slider ${props.backgroundColor || 'bg-transparent'}`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="comp-slider-container">
                            <div id="overlay-slider" className="carousel slide" data-bs-ride="carousel">
                                {props.items.length > 1 && (
                                    <>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#overlay-slider"
                                            data-bs-slide="prev"
                                        >
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#overlay-slider"
                                            data-bs-slide="next"
                                        >
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </>
                                )}
                                <div className="carousel-inner">{contentBlock}</div>
                            </div>
                            {props.small && <script data-type="pageScript">{tabScript}</script>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlaySlider;
