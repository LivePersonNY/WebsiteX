import * as React from 'react';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';
import { useEffect } from 'react';

const RoiCalc = (props) => {

return(
    <div className="pane bg-transparent">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center">How much could you improve revenue growth or reduce operating costs with Conversational AI and messaging?</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="calc-container">
                        <div className="calc-left">
                            <div className="slide-container">
                                <p>Annual website traffic</p>Annual website traffic
                                <input className="slider-value" id="slider1-value" data-symbol="" data-slider-ref="slider1" data-roi="sales-traffic" />
                                <div id="slider1" className="jqslider-styles" data-min="0" data-max="5000000000" data-value={props.annualWebsiteTraffic} data-step="1000"></div>

                                <p>Conversion rate to sale</p>
                                <input className="slider-value" data-numtype="percent" id="slider2-value" data-slider-ref="slider2" data-roi="sales-conv-rate" />
                                <div id="slider2" className="jqslider-styles" data-min="0" data-max="100" data-value={props.convRateToSale} data-step=".01"></div>

                                <p>Average order value</p>
                                <input className="slider-value" data-numtype="currency" id="slider3-value" data-slider-ref="slider3" data-roi="sales-avg-order" />
                                <div id="slider3" className="jqslider-styles" data-min="0" data-max="5000" data-value={props.avgOrderValue} data-step=".01"></div>

                                <p>Average call volume</p>
                                <input className="slider-value" id="slider4-value" data-symbol="" data-slider-ref="slider4" data-roi="care-call-volume" />
                                <div id="slider4" className="jqslider-styles" data-min="0" data-max="150000000" data-value={props.avgCallVolume} data-step="1"></div>

                                <p>Cost per call</p>
                                <input className="slider-value" data-numtype="currency" id="slider5-value" data-slider-ref="slider5" data-roi="care-cost-per-call" />
                                <div id="slider5" className="jqslider-styles" data-min="0" data-max="50" data-value={props.avgCostPerCall} data-step=".01"></div>

                                <p>First contact resolution</p>
                                <input data-numtype="percent" className="slider-value" id="slider6-value" data-slider-ref="slider6" data-roi="care-contact-resolution" />
                                <div id="slider6" className="jqslider-styles" data-min="0" data-max="100" data-value={props.firstContactResolution} data-step=".01"></div>
                            </div>

                            <div className="display-none">
                                <p>Sales increase: <span data-roi="sales-increase-year1"></span></p>
                                <p>Sales average order: <span data-roi="sales-avg-order-year1"></span></p>
                                <p>Care fcr: <span data-roi="care-fcr-year1"></span></p>
                                <p>Care ai scale: <span data-roi="care-ai-scale-year1"></span></p>
                                <p>Care efficiency: <span data-roi="care-efficiency-year1"></span></p>

                                <p>Total savings Y1: <span data-roi="total-savings-year1"></span></p>
                                <p>Total growth Y1: <span data-roi="total-growth-year1"></span></p>
                                <p>Total benefit Y1: <span data-roi="total-total-benefit-year1"></span></p>

                                <p>Total savings Y2: <span data-roi="total-savings-year2"></span></p>
                                <p>Total growth Y2: <span data-roi="total-growth-year2"></span></p>
                                <p>Total benefit Y2: <span data-roi="total-total-benefit-year2"></span></p>

                                <p>Total savings Y3: <span data-roi="total-savings-year3"></span></p>
                                <p>Total growth Y3: <span data-roi="total-growth-year3"></span></p>
                                <p>Total benefit Y3: <span data-roi="total-total-benefit-year3"></span></p>
                            </div>
                        </div>
                        <div className="calc-right">

                            <figure id="two" className="bar-chart">
                                <p className="estimated-total-benefit"></p>
                                <p className="estimated-total-benefit-text">Estimated Total Benefit</p>

                                <div className="row bars">
                                    <div className="x-axis">
                                        <div className="year wrap">
                                            <div className="col">
                                                <span className="bar">
                                                    <span className="tooltip"></span>
                                                </span>
                                                <span className="bar">
                                                    <span className="tooltip"></span>
                                                </span>
                                                <p className="total-year-benefit"></p>
                                            </div>
                                            <span className="label year1">Year 1</span>
                                        </div>
                                        <div className="year wrap">
                                            <div className="col">
                                                <span className="bar">
                                                    <span className="tooltip"></span>
                                                </span>
                                                <span className="bar">
                                                    <span className="tooltip"></span>
                                                </span>
                                                <p className="total-year-benefit"></p>
                                            </div>
                                            <span className="label year2">Year 2</span>
                                        </div>
                                        <div className="year wrap">
                                            <div className="col">
                                                <span className="bar">
                                                    <span className="tooltip"></span>
                                                </span>
                                                <span className="bar">
                                                    <span className="tooltip"></span>
                                                </span>
                                                <p className="total-year-benefit"></p>
                                            </div>
                                            <span className="label year3">Year 3</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="legend">
                                    <li>Cost savings</li>
                                    <li>Revenue growth</li>
                                </ul>

                            </figure>
                        </div>
                    </div>
                    <script>
                    window.showLoc = {props.locale};
                    window.showCurrency = {props.currency};
                    </script>
                </div>
            </div>
        </div>
    </div>
    );
}

export default RoiCalc;