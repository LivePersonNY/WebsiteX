import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const CardGridB = (props) => {
    let cardCol = props.items.map((item, index) => {
        return (
            <div className="col-12 col-lg" key={index}>
                <div className="card card-b h-100">
                    {(!item.imgCtl && (
                        <img
                            className="card-img-top"
                            src={item.imgSrc}
                            alt={item.imgAlt}
                            width={item.imgWidth}
                            height={item.imgHeight}
                            loading="lazy"
                        />
                    )) ||
                        item.imgCtl}
                    <div className="card-body">
                        <p className="card-title card2">{item.cardTitle}</p>
                        <p className="card-text subtitle1">{item.body}</p>
                    </div>
                    <div className="card-footer">
                        {item.linkText && (
                            <a
                                href={item.linkUrl}
                                className="card-link link"
                                target={item.linkExternal && `_blank`}
                                rel={item.linkExternal && `noopener noreferrer`}
                            >
                                {item.linkText}
                            </a>
                        )}
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
            className={`pane comp-card-grid-b ${
                props.backgroundColor || 'bg-transparent'
            } ${props.header ? 'pane-with-lead-text' : ''} ${props.cssClasses}`}
        >
            <div className="container">
                {props.header && (
                    <div className="row text-center">
                        <div className="col-lg-8 offset-lg-2">
                            <h2 className="">
                                <Paragraph
                                    text={props.header}
                                    headerLevel="nothing"
                                />
                            </h2>
                            <Paragraph text={props.body} />
                        </div>
                    </div>
                )}
                <div className="row comp-card-grid-container">{cardCol}</div>
            </div>
        </div>
    );
};

export default CardGridB;
