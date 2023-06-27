import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery';
import Paragraph from '../Paragraph';

const TabsB = (props) => {
    let tabListOutput = props.items.map((item, index) => {
        return (
            <h4
                className={`comp-tab ${index === 0 ? 'comp-tab-active' : ''}`}
                data-tab={index}
                key={index}
            >
                {item.title}
            </h4>
        );
    });

    let tabImgOutput = props.items.map((item, index) => {
        if (item.imgCtl) {
            return item.imgCtl;
        }
        return (
            <img
                className={`comp-tabs-img ${index !== 0 ? 'display-none' : ''}`}
                src={item.img}
                data-tab-content={index}
                alt={item.imgAlt}
                width={item.imgWidth}
                height={item.imgHeight}
                loading="lazy"
                key={index}
            />
        );
    });

    let tabContent = props.items.map((item, index) => {
        return (
            <div
                className={`bg-primary-light comp-tabs-content ${
                    index !== 0 ? 'display-none' : ''
                }`}
                data-tab-content={index}
                key={index}
            >
                <p className="h6 text-uppercase">{item.kicker || item.title}</p>
                <h4>{item.header}</h4>
                <Paragraph text={item.body} />
                {item.linkText && (
                    <a
                        className="link link-mt-large"
                        href={item.linkUrl}
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
        <>
            <div
                data-localize={props.autoApprove && `auto-approve`}
                autoapprove={props.autoApprove && 'true'}
                id={props.anchor}
                className={`pane comp-tabs-b ${
                    props.backgroundColor || 'bg-transparent'
                } ${props.header ? 'pane-with-lead-text' : ''}`}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <h2>{props.header}</h2>
                            <div className="comp-tabs-list-container">
                                {tabListOutput}
                            </div>
                        </div>
                        <div className="col-lg-5 comp-tabs-content-container">
                            {tabContent}
                        </div>
                        <div className="col-lg-7 offset-lg-1 comp-tabs-img-container">
                            {tabImgOutput}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabsB;
