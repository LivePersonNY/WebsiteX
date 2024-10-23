import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';
import $ from 'jquery';
import Parser from 'html-react-parser';

const marketoScriptId = 'mktoForms';

const MktoFormReport2024 = (props) => {

    let formId = props.formId;

    // Strictly for WP //

    if (props.runFilters) {
        const [isLoaded, setIsLoaded] = useState(false);

        const loadScript = () => {
            var s = document.createElement('script');
            s.id = marketoScriptId;
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://info.liveperson.com/js/forms2/js/forms2.min.js';
            s.onreadystatechange = function () {
                if (this.readyState === 'complete' || this.readyState === 'loaded') {
                    setIsLoaded(true);
                }
            };
            s.onload = () => {
                setIsLoaded(true);
            };
            document.getElementsByTagName('head')[0].appendChild(s);
        };

        useEffect(() => {
            if (!document.getElementById(marketoScriptId)) {
                loadScript();
            } else {
                setIsLoaded(true);
            }
        }, []);

        useEffect(() => {
            if (isLoaded) {
                if ($('#mktoForm_' + formId).children().length == 0 && window.MktoForms2) {
                    window.MktoForms2.loadForm('https://info.liveperson.com', '501-BLE-979', formId, function (form) {
                        form.onValidate(function () {
                            form.submittable(false);
                        });
                    });
                }
            }
        }, [isLoaded, formId]);
    }

    return (
        <>
            <div
                id={props.anchor}
                className={`pane pane-form form-vertical form-vertical-2024 ${props.cssClasses}`}
            >
                <div className="container">
                    <div class="row bg-blue-20 align-items-center">

                        <div class="col-lg-5 offset-lg-1 order-lg-last">
                            <h2>
                                <Paragraph text={props.title} />
                            </h2>
                            <p></p>
                            <form id={`mktoForm_${formId}`} mkto={formId}></form>
                            <mkto-after mkto={formId}>
                                {props.thankyouControl || Parser(props.thankyou)}
                            </mkto-after>
                        </div>
                        <div class="col-lg-5 g-lg-0 order-lg-first">
                            {(!props.imgCtl && props.imgSrc && (
                                <img
                                    src={props.imgSrc}
                                    alt={props.imgAlt || ''}
                                    width={props.imgWidth}
                                    height={props.imgHeight}
                                    loading="lazy"
                                />
                            )) ||
                                props.imgCtl}
                        </div>
                    </div>
                </div>
                {props.resourceasset && (
                    <div
                        data-resourceasset={props.resourceasset}
                        data-resourceAssetURL={props.resourceAssetURL}
                        className="display-none mkto-resource-asset"
                    ></div>
                )}
            </div>
        </>
    );
};

export default MktoFormReport2024;
