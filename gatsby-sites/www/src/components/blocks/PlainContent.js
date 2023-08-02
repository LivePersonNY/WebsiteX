import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const PlainContent = function (props) {
    let headerLevel = props.headLevel || 'h2';

    let fullAnimation = (textContent, animatedContent) => {
        let headerText = textContent;
        headerText = headerText.split('animatedText');

        let headerAnimateText = animatedContent;
        headerAnimateText = headerAnimateText.split(',');
        let animatedLoop = headerAnimateText.map((item, index) => {
            let isActive = '';
            index == 0 ? (isActive = 'active') : isActive;
            return `
            <div className="carousel-item ${isActive}" key=${index}>
                <span> ${item} </span>
            </div>`;
        });
        animatedLoop = `<div
                        id="plain-content-text-carousel"
                        className="carousel slide carousel-fade vertical animatedText-carousel"
                        data-bs-ride="false"
                        data-bs-pause="false"
                    >
                        <div className="carousel-inner"> ${animatedLoop.join(
                            ''
                        )} </div>
                    </div>`;
        return headerText[0] + animatedLoop + headerText[1];
    };

    let vFrame = (
        <div className="vimeoContainer">
            <iframe src={props.vimeoUrl} className="vimeoFrame"></iframe>
        </div>
    );

    return (
        <div
            data-localize={props.autoApprove && `auto-approve`}
            autoapprove={props.autoApprove && 'true'}
            id={props.anchor}
            className={`pane comp-plain-content ${
                props.backgroundColor || 'bg-transparent'
            } ${props.alignmentClass} ${
                props.header ? 'pane-with-lead-text' : ''
            } ${props.cssClasses}`}
        >
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className={`col-lg-${props.colWidth || 12}`}>
                        {(!props.assetTopCtl && props.assetTopSrc && (
                            <img
                                src={props.assetTopSrc}
                                alt={props.assetTopAlt}
                                width={props.assetTopWidth}
                                height={props.assetTopHeight}
                                loading="lazy"
                            />
                        )) ||
                            props.assetTopCtl}
                        {props.kicker && (
                            <p className="h6 text-uppercase">
                                {!props.animatedKickerText && (
                                    <Paragraph
                                        text={props.kicker}
                                        headerLevel="nothing"
                                    />
                                )}
                                {props.animatedKickerText && (
                                    <Paragraph
                                        text={fullAnimation(
                                            props.kicker,
                                            props.animatedKickerText
                                        )}
                                        headerLevel="nothing"
                                    />
                                )}
                                <Paragraph text={props.kicker} />
                            </p>
                        )}
                        {headerLevel == 'h2' && (
                            <h2>
                                {!props.animatedText && (
                                    <Paragraph
                                        text={props.header}
                                        headerLevel={headerLevel}
                                    />
                                )}
                                {props.animatedText && (
                                    <Paragraph
                                        text={fullAnimation(
                                            props.header,
                                            props.animatedContent
                                        )}
                                        headerLevel={headerLevel}
                                    />
                                )}
                            </h2>
                        )}
                        {headerLevel == 'h1' && (
                            <h1>
                                {!props.animatedText && (
                                    <Paragraph
                                        text={props.header}
                                        headerLevel={headerLevel}
                                    />
                                )}
                                {props.animatedText && (
                                    <Paragraph
                                        text={fullAnimation(
                                            props.header,
                                            props.animatedContent
                                        )}
                                        headerLevel={headerLevel}
                                    />
                                )}
                            </h1>
                        )}
                        {props.body && <Paragraph text={props.body} />}
                        {props.linkText && (
                            <a
                                className="link link-mt-large"
                                href={props.linkUrl}
                            >
                                {props.linkText}
                            </a>
                        )}
                        {props.primaryBtnText && (
                            <a
                                className="btn btn-primary"
                                href={props.primaryBtnLink}
                                target={props.linkExternal && `_blank`}
                                rel={
                                    props.linkExternal && `noopener noreferrer`
                                }
                            >
                                {props.primaryBtnText}
                            </a>
                        )}
                        {props.secondaryBtnText && (
                            <a
                                className="btn btn-outline-secondary"
                                href={props.secondaryBtnLink}
                                target={props.linkSecondaryExternal && `_blank`}
                                rel={
                                    props.linkSecondaryExternal &&
                                    `noopener noreferrer`
                                }
                            >
                                {props.secondaryBtnText}
                            </a>
                        )}
                        {(!props.assetBottomCtl && props.assetBottomSrc && (
                            <img
                                src={props.assetBottomSrc}
                                alt={props.assetBottomAlt}
                                width={props.assetBottomWidth}
                                height={props.assetBottomHeight}
                                loading="lazy"
                            />
                        )) ||
                            props.assetBottomCtl}
                        {props.vimeoUrl && vFrame}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlainContent;
