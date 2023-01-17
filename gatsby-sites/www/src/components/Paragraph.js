import * as React from "react";
import * as ReactDOM from "react-dom";
import Parser from "html-react-parser";

export default function Paragraph(props) {
    var fullText;

    if (typeof props.text === "string") {
        if (props.headerLevel) {
            return <>{Parser(props.text)}</>;
        }

        if (props.collapsible) {
            let pars = [];
            if (props.text.split("<br>").length > 1) {
                pars = props.text.split("<br>");
            } else if (props.text.split("\n").length > 1) {
                pars = props.text.split("\n");
            }

            if (pars.length == 0) {
                fullText = <p className={props.className}>{props.text}</p>;
                if (props.wrapClass) {
                    return <div className={props.wrapClass}>{fullText}</div>;
                }

                return fullText;
            }

            fullText = (
                <p className={props.className} data-tag="br split" key={0}>
                    {Parser(pars[0])}
                </p>
            );

            var collapsedContent = pars.slice(1).map(function (str, index) {
                if (str.trim())
                    return (
                        <p
                            className={props.className}
                            data-tag="br split"
                            key={index}
                        >
                            {Parser(str)}
                        </p>
                    );
            });

            var fullTextCollapsed = (
                <div class="collapse" id={props.collapsible}>
                    {collapsedContent}
                </div>
            );

            return (
                <>
                    {fullText}
                    {fullTextCollapsed}
                    <a
                        href={`#${props.collapsible}`}
                        className="mt-4 d-inline-block collapsed"
                        data-bs-toggle="collapse"
                    >
                        <span className="expandText">
                            {props.expandText || `Read More`}
                        </span>
                        <span className="collapseText">
                            {props.collapseText || `Read Less`}
                        </span>
                    </a>
                </>
            );
        }

        fullText =
            props.text.split("<br>").length > 1
                ? props.text.split("<br>").map(function (str, index) {
                      if (str.trim())
                          return (
                              <p
                                  className={props.className}
                                  data-tag="br split"
                                  key={index}
                              >
                                  {Parser(str)}
                              </p>
                          );
                  })
                : null;

        if (fullText) {
            if (props.wrapClass) {
                return <div className={props.wrapClass}>{fullText}</div>;
            }

            return fullText;
        }

        fullText = props.text.split("\n").map(function (str, index) {
            if (str)
                return (
                    <p
                        className={props.className}
                        data-tag="new line split"
                        key={index}
                    >
                        {Parser(str)}
                    </p>
                );
        });

        if (fullText) {
            if (props.wrapClass) {
                return <div className={props.wrapClass}>{fullText}</div>;
            }

            return fullText;
        }
    }

    return <p className={props.className}>{props.text}</p>;
}
