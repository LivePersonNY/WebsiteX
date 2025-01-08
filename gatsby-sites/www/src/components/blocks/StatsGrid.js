import * as React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Paragraph from "../Paragraph";

const StatsGrid = (props) => {
    let statCol = props.items.map((item, index) => {
        return (
            <div className="col" key={index}>
                <p className="h1">{item.stat}</p>
                <p className="subtitle2">{item.body}</p>
            </div>
        );
    });

    let statAmount = props.items.length <= 5 ? props.items.length : 5;

    return (
        <div
            data-localize={props.autoApprove && `auto-approve`}
            autoapprove={props.autoApprove && "true"}
            id={props.anchor}
            className={`pane comp-stat-grid ${props.backgroundColor || "bg-transparent"
                } ${props.header ? "pane-with-lead-text" : ""} ${props.cssClasses}`}
        >
            <div className="container">
                {props.header && (
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-center">
                                <Paragraph
                                    text={props.header}
                                    headerLevel="nothing"
                                />
                            </h2>
                            {props.body && (
                                <Paragraph
                                    className="text-center"
                                    text={props.body}
                                />
                            )}
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="comp-4col-grid text-center">
                            <div
                                className={`row align-items-center row-cols-lg-${statAmount} row-cols-2`}
                            >
                                {statCol}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        {props.endBody && (
                            <Paragraph
                                className="text-center end-body-content"
                                text={props.endBody}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsGrid;
