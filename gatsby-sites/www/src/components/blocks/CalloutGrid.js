import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Parser from 'html-react-parser';

const CalloutGrid = (props) => {
    let gridItem = props.items.map((item, index) => {
        let viewMore = '';
        if (index > 5) {
            viewMore = 'display-none';
        }
        return (
            <div className={`col-lg-4 ${viewMore}`} key={index}>
                <a
                    className="link"
                    href={item.linkUrl}
                    target={item.linkExternal && `_blank`}
                    rel={item.linkExternal && `noopener noreferrer`}
                >
                    {(!item.imgCtl && (
                        <img src={item.imgSrc} alt={item.imgAlt} />
                    )) ||
                        item.imgCtl}
                    <p className="h6 text-uppercase">{item.category}</p>
                    <h3 className="card1">{item.body}</h3>
                    {item.author && <p className="subtitle2">{item.author}</p>}
                </a>
            </div>
        );
    });

    let viewMore = (el) => {
        console.log(el);
        el.preventDefault();
        document.querySelector('.view-more-btn').classList.add('display-none');
        let gridCards = document.querySelectorAll(
            '.comp-callout-grid-container .col-lg-4'
        );
        gridCards.forEach((el) => {
            el.classList.remove('display-none');
        });
    };

    return (
        <div
            data-localize={props.autoApprove && `auto-approve`}
            autoapprove={props.autoApprove && 'true'}
            id={props.anchor}
            className={`pane comp-callout-grid ${
                props.backgroundColor || 'bg-transparent'
            } ${props.header ? 'pane-with-lead-text' : ''}`}
        >
            <div className="container">
                {props.header && (
                    <div className="row align-items-center">
                        <div className="col-lg-10">
                            <h2 className="">{props.header}</h2>
                        </div>
                        <div className="col-lg-2">
                            {props.linkText && (
                                <a className="link" href={props.linkUrl}>
                                    {props.linkText}
                                </a>
                            )}
                        </div>
                    </div>
                )}
                <div className="row comp-callout-grid-container">
                    {gridItem}
                    {props.items.length > 6 && (
                        <div class="col-lg-8 offset-lg-2 text-center mt-4">
                            <a
                                class="btn btn-primary view-more-btn"
                                href="#"
                                onClick={viewMore}
                            >
                                View more
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalloutGrid;
