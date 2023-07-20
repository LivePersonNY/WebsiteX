import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const LeftRight = (props) => {
    let repeat;

    let vFrame = (
        <div className="vimeoContainer">
            <iframe src={props.vimeoUrl} className="vimeoFrame"></iframe>
        </div>
    );

    return (
        <>
            <div
                id={props.anchor}
                data-localize={props.autoApprove && `auto-approve`}
                autoapprove={props.autoApprove && 'true'}
                className={`pane ${
                    props.backgroundColor || 'bg-transparent'
                } comp-left-right ${
                    props.repeat ? 'comp-left-right-repeat' : ''
                }`}
            >
                <div className="container">
                    {props.header && (
                        <div className="row justify-content-center">
                            <div className={`col-lg-${props.colWidth || 12}`}>
                                <h2
                                    className={`${
                                        props.alignmentClass || 'text-center'
                                    } left-right-main-header`}
                                >
                                    <Paragraph
                                        text={props.header}
                                        headerLevel="nothing"
                                    />
                                </h2>
                                {props.sectionBody && (
                                    <Paragraph text={props.sectionBody} />
                                )}
                            </div>
                        </div>
                    )}
                    <div className="row align-items-center">
                        <div
                            className={`col-lg-6 ${
                                props.flipColumns ? 'order-lg-last' : ''
                            }`}
                        >
                            {(!props.imgCtl && props.imgSrc && (
                                <img
                                    src={
                                        props.imgSrc ||
                                        `https://picsum.photos/752/568?random=${parseInt(
                                            Math.random() * 100
                                        )}`
                                    }
                                    alt={props.imgAlt || ''}
                                    width={props.imgWidth}
                                    height={props.imgHeight}
                                    loading="lazy"
                                />
                            )) ||
                                props.imgCtl ||
                                props.lottiePlayer}
                            {props.vimeoUrl && vFrame}
                        </div>
                        <div
                            className={`col-lg-6 ${
                                props.flipColumns ? 'order-lg-first' : ''
                            }`}
                        >
                            {props.kicker && (
                                <p className="h6 text-uppercase">
                                    {props.kicker}
                                </p>
                            )}
                            {props.headLevel == 'h2' && (
                                <h2>
                                    <Paragraph
                                        text={props.title}
                                        headerLevel={props.headLevel}
                                    />
                                </h2>
                            )}
                            {props.headLevel == 'h3' && (
                                <h3>
                                    <Paragraph
                                        text={props.title}
                                        headerLevel={props.headLevel}
                                    />
                                </h3>
                            )}
                            <Paragraph
                                text={props.body}
                                wrapClass="rich-container"
                            />
                            {props.linkText && (
                                <a
                                    className="btn btn-outline-secondary"
                                    href={props.linkUrl}
                                    target={props.linkExternal && `_blank`}
                                    rel={
                                        props.linkExternal &&
                                        `noopener noreferrer`
                                    }
                                >
                                    {props.linkText}
                                </a>
                            )}
                            {props.linkSecondaryText && (
                                <a
                                    className="btn btn-link"
                                    href={props.linkSecondaryUrl}
                                    target={
                                        props.linkSecondaryExternal && `_blank`
                                    }
                                    rel={
                                        props.linkSecondaryExternal &&
                                        `noopener noreferrer`
                                    }
                                >
                                    {props.linkSecondaryText}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftRight;
