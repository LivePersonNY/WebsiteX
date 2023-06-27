import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const IconTextB = (props) => {
    let cardCol = props.items.map((item, index) => {
        return (
            <div className="col" key={index}>
                <div className="card h-100">
                    <div className="card-body">
                        {(!item.imgCtl && item.img && (
                            <img
                                className="card-image-internal"
                                src={item.img}
                                alt={item.imgAlt}
                                width={item.imgWidth}
                                height={item.imgHeight}
                                loading="lazy"
                            />
                        )) ||
                            item.imgCtl}
                        <h3 className="">{item.title}</h3>
                        <Paragraph
                            className="card-text subtitle1"
                            text={item.body}
                        />
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
            className={`${props.gated ? 'gated' : ''} pane comp-icon-text-b ${
                props.backgroundColor || 'bg-transparent'
            } ${props.header ? 'pane-with-lead-text' : ''}`}
        >
            <div className="container">
                {props.header && (
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h2 className="text-center">{props.header}</h2>
                        </div>
                    </div>
                )}
                <div className="row row-cols-lg-3 comp-card-grid-container">
                    {cardCol}
                    {props.cardCTA && (
                        <div className="col">
                            <div className="card h-100 text-center icon-text-cta">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <h3 className="card-text">
                                        {props.cardCTAbody}
                                    </h3>
                                    <a
                                        href={props.btnUrl}
                                        className="btn btn-primary"
                                    >
                                        {props.btnText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IconTextB;
