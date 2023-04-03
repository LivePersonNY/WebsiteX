import * as React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph';

const ContainedContent = (props) => {
    return (
        <div
            data-localize={props.autoApprove && `auto-approve`}
            autoapprove={props.autoApprove && 'true'}
            id={props.anchor}
            className={`pane comp-contained-content ${
                props.backgroundColor || 'bg-transparent'
            } ${props.header ? 'pane-with-lead-text' : ''}`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="comp-contained-content-container bg-neutral-96">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center">
                                    {props.kicker && (
                                        <p className="h6 text-uppercase">
                                            {props.kicker}
                                        </p>
                                    )}
                                    <h2>
                                        <Paragraph
                                            text={props.header}
                                            headerLevel="nothing"
                                        />
                                    </h2>
                                    <p>{props.body}</p>
                                    {props.linkText && (
                                        <a
                                            className="btn btn-primary"
                                            href={props.linkUrl}
                                        >
                                            {props.linkText}
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1 text-center">
                                    {(!props.imgCtl && props.imgSrc && (
                                        <img
                                            src={props.imgSrc}
                                            alt={props.imgAlt}
                                            className="d-block mx-auto"
                                        />
                                    )) ||
                                        props.imgCtl}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainedContent;
