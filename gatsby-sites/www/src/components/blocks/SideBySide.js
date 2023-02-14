import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const SideBySide = (props) => {
    const hlevel = props.headerLevel || 'h2';

    return (
        <>
            <div
                data-localize={props.autoApprove && `auto-approve`}
                autoapprove={props.autoApprove && 'true'}
                id={props.anchor}
                className={`pane comp-side-side ${
                    props.backgroundColor || 'bg-transparent'
                }`}
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
                            {hlevel == 'h2' && <h2>{props.headerLeft}</h2>}
                            {hlevel == 'h3' && <h3>{props.headerLeft}</h3>}
                            <p>{props.bodyLeft}</p>
                        </div>
                        <div className={`col-lg-6 `}>
                            {(!props.imgRightCtl && props.imgRightSrc && (
                                <img
                                    src={props.imgRightSrc}
                                    alt={props.imgRightAlt}
                                />
                            )) ||
                                props.imgRightCtl}
                            {hlevel == 'h2' && <h2>{props.headerRight}</h2>}
                            {hlevel == 'h3' && <h3>{props.headerRight}</h3>}
                            <p>{props.bodyRight}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBySide;
