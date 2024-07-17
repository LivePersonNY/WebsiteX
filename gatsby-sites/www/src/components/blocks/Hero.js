import * as React from 'react';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';
import { useEffect } from 'react';
import Parser from 'html-react-parser';

const Hero = (props) => {
    let vFrame = (
        <div className="vimeoContainer">
            <iframe src={props.vimeoUrl} className="vimeoFrame"></iframe>
        </div>
    );

    let fullAnimation = () => {
        let headerText = props.header;
        headerText = headerText.split('animatedText');

        let headerAnimateText = props.animatedText;
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
                        id="hero-text-carousel"
                        className="carousel slide carousel-fade vertical animatedText-carousel"
                        data-bs-ride="false"
                        data-bs-pause="false"
                    >
                        <div className="carousel-inner"> ${animatedLoop.join('')} </div>
                    </div>`;
        return headerText[0] + animatedLoop + headerText[1];
    };

    return (
        <div
            id={props.anchor}
            data-localize={props.autoApprove && `auto-approve`}
            autoapprove={props.autoApprove && 'true'}
            className={`pane hero ${props.backgroundColor || 'bg-transparent'} ${props.removePB ? 'rem-padding' : ''} ${
                props.cssClasses
            }`}
        >
            {props.backgroundImage && (
                <style>
                    {`.pane.hero {
          background-image: url(${props.backgroundImage});
        }`}
                </style>
            )}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <h1>
                            {props.kicker && (
                                <span className="h6 text-uppercase">
                                    <Paragraph text={props.kicker} headerLevel="nothing" />
                                </span>
                            )}
                            {!props.animatedText && <Paragraph text={props.header} headerLevel="nothing" />}
                            {props.animatedText && <Paragraph text={fullAnimation()} headerLevel="nothing" />}
                        </h1>
                        <Paragraph text={props.subHeader} />
                        {props.logoHeader && <h6 className="mt-4 white-space-break-spaces">{props.logoHeader}</h6>}
                        {(props.imgLogoCtl || props.underBodyImg) && (
                            <>
                                <div className="body-image">
                                    {(!props.imgLogoCtl && (
                                        <img
                                            src={props.underBodyImg}
                                            alt={props.underBodyImgAlt}
                                            width={props.underBodyImgWidth}
                                            height={props.underBodyImgHeight}
                                            loading="eager"
                                        />
                                    )) ||
                                        props.imgLogoCtl}
                                </div>
                            </>
                        )}
                        {props.primaryBtnText && (
                            <a
                                className="btn btn-primary"
                                href={props.primaryBtnLink}
                                target={props.linkExternal && `_blank`}
                                rel={props.linkExternal && `noopener noreferrer`}
                            >
                                {props.primaryBtnText}
                            </a>
                        )}
                        {props.secondaryBtnText && (
                            <a
                                className="btn btn-outline-secondary"
                                href={props.secondaryBtnLink}
                                target={props.linkSecondaryExternal && `_blank`}
                                rel={props.linkSecondaryExternal && `noopener noreferrer`}
                            >
                                {props.secondaryBtnText}
                            </a>
                        )}
                    </div>
                    <div className={`col-lg-6 offset-lg-1`}>
                        {(!props.imgCtl && props.heroImage && (
                            <img
                                src={
                                    props.heroImage ||
                                    `https://picsum.photos/752/568?random=${parseInt(Math.random() * 100)}`
                                }
                                alt={props.heroImageAlt || ''}
                                width={props.heroImageWidth}
                                height={props.heroImageHeight}
                                loading="eager"
                            />
                        )) ||
                            props.imgCtl ||
                            props.lottiePlayer}
                        {props.vimeoUrl && vFrame}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
