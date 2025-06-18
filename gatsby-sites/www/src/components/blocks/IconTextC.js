import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const IconTextA = (props) => {
    let blockCol = props.items.map((item, index) => {
        return (
            <div className="col" key={index}>
                {(!item.imgCtl && item.img && (
                    <img
                        src={item.img}
                        alt={item.imgAlt}
                        width={item.imgWidth}
                        height={item.imgHeight}
                        loading="lazy"
                    />
                )) ||
                    item.imgCtl}
                <h3>{item.title}</h3>
                <Paragraph text={item.body} />
                {item.linkText && (
                    <a
                        href={item.linkUrl}
                        className="link link-mt-small"
                        target={item.linkExternal && `_blank`}
                        rel={item.linkExternal && `noopener noreferrer`}
                    >
                        {item.linkText}
                    </a>
                )}
            </div>
        );
    });

    return (
        <div
            data-localize={props.autoApprove && `auto-approve`}
            autoapprove={props.autoApprove && 'true'}
            id={props.anchor}
            className={`${props.gated ? 'gated' : ''} pane comp-icon-text-a ${props.backgroundColor || 'bg-transparent'
                } ${props.header ? 'pane-with-lead-text' : ''}`}
        >
            <div className="container">
                {props.header && (
                    <div className="row">
                        <div className="col-lg-10">
                            <h2 className=""><Paragraph
                                text={props.header}
                                headerLevel="nothing"
                            /></h2>
                        </div>
                    </div>
                )}
                <div className="row row-cols-lg-2 row-cols-1 comp-block-grid-container">
                    {blockCol}
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

export default IconTextA;
