import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const ContentCTA = (props) => {
    return (
        <div
            data-localize={props.autoApprove && `auto-approve`}
            autoapprove={props.autoApprove && 'true'}
            id={props.anchor}
            className={`pane comp-content-cta ${props.backgroundColor || 'bg-transparent'} ${
                props.body ? 'pane-with-lead-text' : ''
            }`}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="comp-content-cta-container bg-neutral-96">
                            <div className="row align-items-center text-center text-lg-start">
                                <div className="col-lg-6 offset-lg-1">
                                    <h2>{props.body}</h2>
                                    <Paragraph text={props.secondBody} />
                                </div>
                                <div className="col-lg-3 offset-lg-1 text-lg-end">
                                    {props.linkText && (
                                        <a
                                            className="btn btn-primary"
                                            href={props.linkUrl}
                                            target={props.linkExternal && `_blank`}
                                            rel={props.linkExternal && `noopener noreferrer`}
                                        >
                                            {props.linkText}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentCTA;
