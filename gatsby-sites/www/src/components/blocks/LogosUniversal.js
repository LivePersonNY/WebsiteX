import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const LogosUniversal = (props) => {
    let logoImg = props.items.map((item, index) => {
        let includeLink = item.itemLinkUrl;
        if (includeLink) {
            return (
                <>
                    {includeLink && (
                        <a
                            className=""
                            href={item.itemLinkUrl}
                            target={item.itemLinkExternal && `_blank`}
                            rel={item.itemLinkExternal && `noopener noreferrer`}
                        >
                            {(!item.imgCtl && (
                                <img
                                    key={index}
                                    className=""
                                    src={item.img}
                                    alt={item.imgAlt}
                                    width={item.imgWidth}
                                    height={item.imgHeight}
                                    loading="lazy"
                                />
                            )) ||
                                item.imgCtl}
                        </a>
                    )}
                </>
            );
        }
        return (
            <>
                {(!item.imgCtl && (
                    <img
                        key={index}
                        className=""
                        src={item.img}
                        alt={item.imgAlt}
                        width={item.imgWidth}
                        height={item.imgHeight}
                        loading="lazy"
                    />
                )) ||
                    item.imgCtl}
            </>
        );
    });

    return (
        <div
            data-localize={props.autoApprove && `auto-approve`}
            autoapprove={props.autoApprove && 'true'}
            id={props.anchor}
            className={`pane comp-logo-universal ${props.backgroundColor || 'bg-neutral-96'} ${
                props.header ? 'pane-with-lead-text' : ''
            }`}
        >
            <div className="container">
                {props.header && (
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h2 className="text-center">
                                <Paragraph headerLevel="nothing" text={props.header} />
                            </h2>
                            <Paragraph text={props.body} className="text-center" />
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-evenly flex-wrap">{logoImg}</div>
                </div>
                {props.linkText && (
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <a
                                className="link"
                                href={props.linkUrl}
                                target={props.linkExternal && `_blank`}
                                rel={props.linkExternal && `noopener noreferrer`}
                            >
                                {props.linkText}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LogosUniversal;
