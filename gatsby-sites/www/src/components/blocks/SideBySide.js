import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const SideBySide = (props) => {
    let headerLevel = props.headLevel || 'h2';

    return (
        <>
            <div
                data-localize={props.autoApprove && `auto-approve`}
                autoapprove={props.autoApprove && 'true'}
                id={props.anchor}
                className={`pane comp-side-side ${
                    props.sectionHeader ? 'pane-with-lead-text' : ''
                } ${props.backgroundColor || 'bg-transparent'}`}
            >
                <div className="container">
                    {props.sectionHeader && (
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-center">
                                    <Paragraph
                                        text={props.sectionHeader}
                                        headerLevel="nothing"
                                    />
                                </h2>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        <div className={`col-lg-6 `}>
                            {(!props.imgLeftCtl && props.imgLeftSrc && (
                                <img
                                    src={props.imgLeftSrc}
                                    alt={props.imgLeftAlt}
                                />
                            )) ||
                                props.imgLeftCtl}
                            {headerLevel == 'h2' && <h2>{props.headerLeft}</h2>}
                            {headerLevel == 'h3' && <h3>{props.headerLeft}</h3>}
                            <Paragraph text={props.bodyLeft} />
                        </div>
                        <div className={`col-lg-6 `}>
                            {(!props.imgRightCtl && props.imgRightSrc && (
                                <img
                                    src={props.imgRightSrc}
                                    alt={props.imgRightAlt}
                                />
                            )) ||
                                props.imgRightCtl}
                            {headerLevel == 'h2' && (
                                <h2>{props.headerRight}</h2>
                            )}
                            {headerLevel == 'h3' && (
                                <h3>{props.headerRight}</h3>
                            )}
                            <Paragraph text={props.bodyRight} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBySide;
