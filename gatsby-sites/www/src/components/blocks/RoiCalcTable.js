import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const RoiCalcTable = (props) => {
  
  return (
    <>

      <div className="pane roi-content" id="roi-analysis-table">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
            <h2 className="text-center">Your ROI analysis</h2>
            <div className="bc-table-wrapper">
            <div className="bc-table-container">
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <h4 className="row-heading">Conversational sales</h4>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Baseline</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 1</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 2</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 3</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Annual website&nbsp;traffic</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number annual_traffic">500,000</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number annual_traffic">500,000</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number annual_traffic">500,000</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number annual_traffic">500,000</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Baseline conversion rate</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number conv_rate">0.67%</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number conv_rate">0.67%</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number conv_rate">0.67%</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number conv_rate">0.67%</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Baseline digital&nbsp;orders</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number digi_orders">3,350</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number digi_orders">3,350</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number digi_orders">3,350</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number digi_orders">3,350</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Remaining web traffic exposed to messaging</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number remaining_traffic">496,650</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number remaining_traffic">496,650</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number remaining_traffic">496,650</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number remaining_traffic">496,650</p>
                </div>
                </div>
                <div className="columns bc-table-col bg-blue row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Conversion acceptance rate</p>
                </div>
                <div className="column col-lg-2">
                    <p id="acr-baseline" className="bc-table-number">0.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="acr-year1" className="bc-table-number">1.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="acr-year2" className="bc-table-number">3.5%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="acr-year3" className="bc-table-number">5.0%</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Total messaging conversations</p>
                </div>
                <div className="column col-lg-2">
                    <p id="tmc-baseline" className="bc-table-number">0</p>
                </div>
                <div className="column col-lg-2">
                    <p id="tmc-year1" className="bc-table-number">4,966.5</p>
                </div>
                <div className="column col-lg-2">
                    <p id="tmc-year2" className="bc-table-number">17,382.75</p>
                </div>
                <div className="column col-lg-2">
                    <p id="tmc-year3" className="bc-table-number">24,832.5</p>
                </div>
                </div>
                <div className="columns bc-table-col bg-blue row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Sales conversion rate</p>
                </div>
                <div className="column col-lg-2">
                    <p id="scr-baseline" className="bc-table-number">0.67%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="scr-year1" className="bc-table-number">1.34%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="scr-year2" className="bc-table-number">3.35%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="scr-year3" className="bc-table-number">6.7%</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Total messaging-assisted sales</p>
                </div>
                <div className="column col-lg-2">
                    <p id="mas-baseline" className="bc-table-number">$0.00</p>
                </div>
                <div className="column col-lg-2">
                    <p id="mas-year1" className="bc-table-number">$66.55</p>
                </div>
                <div className="column col-lg-2">
                    <p id="mas-year2" className="bc-table-number">$582.32</p>
                </div>
                <div className="column col-lg-2">
                    <p id="mas-year3" className="bc-table-number">$1,663.78</p>
                </div>
                </div>
                <div className="columns bc-table-col bg-blue row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Average order value&nbsp;increase</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number">0.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number">10.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number">15.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number">20.0%</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Average order&nbsp;value</p>
                </div>
                <div className="column col-lg-2">
                    <p id="avg-baseline" className="bc-table-number">$120.00</p>
                </div>
                <div className="column col-lg-2">
                    <p id="avg-year1" className="bc-table-number">$132.00</p>
                </div>
                <div className="column col-lg-2">
                    <p id="avg-year2" className="bc-table-number">$138.00</p>
                </div>
                <div className="column col-lg-2">
                    <p id="avg-year3" className="bc-table-number">$144.00</p>
                </div>
                </div>
                <div className="table-footer">
                <div className="columns bc-table-col row">
                    <div className="column col-lg-4">
                    <p className="bc-table-title font-pri-blue">
                        01 Incremental revenue via increased conversion rate
                    </p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="rev-baseline" className="bc-table-number font-pri-blue">$0</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="rev-year1" className="bc-table-number font-pri-blue">$7,986</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="rev-year2" className="bc-table-number font-pri-blue">$69,879</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="rev-year3" className="bc-table-number font-pri-blue">$199,653</p>
                    </div>
                </div>
                <div className="columns bc-table-col row">
                    <div className="column col-lg-4">
                    <p className="bc-table-title font-pri-blue">
                        02 Incremental revenue via improved average order&nbsp;value
                    </p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="inc-baseline" className="bc-table-number font-pri-blue">$0</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="inc-year1" className="bc-table-number font-pri-blue">$799</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="inc-year2" className="bc-table-number font-pri-blue">$10,482</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="inc-year3" className="bc-table-number font-pri-blue">$39,931</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="bc-table-container">
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <h4 className="row-heading">Conversational care</h4>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Baseline</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 1</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 2</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 3</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Shift to messaging</p>
                </div>
                <div className="column col-lg-2"></div>
                <div className="column col-lg-2"></div>
                <div className="column col-lg-2"></div>
                <div className="column col-lg-2"></div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Total number of conversations</p>
                </div>
                <div className="column col-lg-2">
                    <p id="total_convos-baseline" className="bc-table-number">19,836</p>
                </div>
                <div className="column col-lg-2">
                    <p id="total_convos-year1" className="bc-table-number">19,836</p>
                </div>
                <div className="column col-lg-2">
                    <p id="total_convos-year2" className="bc-table-number">19,836</p>
                </div>
                <div className="column col-lg-2">
                    <p id="total_convos-year3" className="bc-table-number">19,836</p>
                </div>
                </div>
                <div className="columns bc-table-col bg-blue row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Shift rate to messaging</p>
                </div>
                <div className="column col-lg-2">
                    <p id="shift-baseline" className="bc-table-number">0.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="shift-year1" className="bc-table-number">10.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="shift-year2" className="bc-table-number">30.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="shift-year3" className="bc-table-number">50.0%</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Conversations shifted to messaging</p>
                </div>
                <div className="column col-lg-2">
                    <p id="convos_shifted-baseline" className="bc-table-number">0</p>
                </div>
                <div className="column col-lg-2">
                    <p id="convos_shifted-year1" className="bc-table-number">1,983.6</p>
                </div>
                <div className="column col-lg-2">
                    <p id="convos_shifted-year2" className="bc-table-number">5,950.8</p>
                </div>
                <div className="column col-lg-2">
                    <p id="convos_shifted-year3" className="bc-table-number">9,918</p>
                </div>
                </div>
                <div className="columns bc-table-col bg-blue row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">First contact resolution</p>
                </div>
                <div className="column col-lg-2">
                    <p id="fcr-perc-baseline" className="bc-table-number">0.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="fcr-perc-year1" className="bc-table-number">70.88%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="fcr-perc-year2" className="bc-table-number">74.25%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="fcr-perc-year3" className="bc-table-number">77.63%</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Repeat conversations eliminated by FCR improvement</p>
                </div>
                <div className="column col-lg-2">
                    <p id="repeat-baseline" className="bc-table-number">0</p>
                </div>
                <div className="column col-lg-2">
                    <p id="repeat-year1" className="bc-table-number">66.947</p>
                </div>
                <div className="column col-lg-2">
                    <p id="repeat-year2" className="bc-table-number">401.679</p>
                </div>
                <div className="column col-lg-2">
                    <p id="repeat-year3" className="bc-table-number">1,004.197</p>
                </div>
                </div>
                <div className="table-footer">
                <div className="columns bc-table-col row">
                    <div className="column col-lg-4">
                    <p className="bc-table-title font-pri-blue">
                        03 Savings via first contact resolution improvement
                    </p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="fcr-baseline" className="bc-table-number font-pri-blue">$0</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="fcr-year1" className="bc-table-number font-pri-blue">$305</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="fcr-year2" className="bc-table-number font-pri-blue">$1,828</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="fcr-year3" className="bc-table-number font-pri-blue">$4,569</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="bc-table-container">
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <h4 className="row-heading">Resolution bots (full containment)</h4>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Baseline</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 1</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 2</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 3</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Remaining messaging conversations</p>
                </div>
                <div className="column col-lg-2">
                    <p id="rem-mess-baseline" className="bc-table-number">0</p>
                </div>
                <div className="column col-lg-2">
                    <p id="rem-mess-year1" className="bc-table-number">1,916.654</p>
                </div>
                <div className="column col-lg-2">
                    <p id="rem-mess-year2" className="bc-table-number">5,549.121</p>
                </div>
                <div className="column col-lg-2">
                    <p id="rem-mess-year3" className="bc-table-number">8,913.803</p>
                </div>
                </div>
                <div className="columns bc-table-col bg-blue row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Bot containment rate</p>
                </div>
                <div className="column col-lg-2">
                    <p id="bot-rate-baseline" className="bc-table-number">0.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="bot-rate-year1" className="bc-table-number">10.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="bot-rate-year2" className="bc-table-number">30.0%</p>
                </div>
                <div className="column col-lg-2">
                    <p id="bot-rate-year3" className="bc-table-number">50.0%</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Bot contained conversations</p>
                </div>
                <div className="column col-lg-2">
                    <p id="bot-baseline" className="bc-table-number">0</p>
                </div>
                <div className="column col-lg-2">
                    <p id="bot-year1" className="bc-table-number">191.665</p>
                </div>
                <div className="column col-lg-2">
                    <p id="bot-year2" className="bc-table-number">1,664.736</p>
                </div>
                <div className="column col-lg-2">
                    <p id="bot-year3" className="bc-table-number">4,456.901</p>
                </div>
                </div>
                <div className="table-footer">
                <div className="columns bc-table-col row">
                    <div className="column col-lg-4">
                    <p className="bc-table-title font-pri-blue">
                        04 Savings via Conversational AI
                    </p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="mess-baseline" className="bc-table-number font-pri-blue">$0</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="mess-year1" className="bc-table-number font-pri-blue">$872</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="mess-year2" className="bc-table-number font-pri-blue">$7,575</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="mess-year3" className="bc-table-number font-pri-blue">$20,279</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="bc-table-container">
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <h4 className="row-heading">Labor efficiency (partial containment/agent-assist)</h4>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Baseline</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 1</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 2</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 3</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Remaining agent conversations</p>
                </div>
                <div className="column col-lg-2">
                    <p id="agent-baseline" className="bc-table-number">0</p>
                </div>
                <div className="column col-lg-2">
                    <p id="agent-year1" className="bc-table-number">1,724.988</p>
                </div>
                <div className="column col-lg-2">
                    <p id="agent-year2" className="bc-table-number">3,884.385</p>
                </div>
                <div className="column col-lg-2">
                    <p id="agent-year3" className="bc-table-number">4,456.901</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Baseline cost per conversation</p>
                </div>
                <div className="column col-lg-2">
                    <p id="cost-baseline" className="bc-table-number">$4.55</p>
                </div>
                <div className="column col-lg-2">
                    <p id="cost-year1" className="bc-table-number">$4.55</p>
                </div>
                <div className="column col-lg-2">
                    <p id="cost-year2" className="bc-table-number">$4.55</p>
                </div>
                <div className="column col-lg-2">
                    <p id="cost-year3" className="bc-table-number">$4.55</p>
                </div>
                </div>
                <div className="columns bc-table-col bg-blue row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Messaging efficiency ratio</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number">-</p>
                </div>
                <div className="column col-lg-2">
                    <p id="mess-eff-year1" className="bc-table-number">1.40</p>
                </div>
                <div className="column col-lg-2">
                    <p id="mess-eff-year2" className="bc-table-number">1.70</p>
                </div>
                <div className="column col-lg-2">
                    <p id="mess-eff-year3" className="bc-table-number">2.00</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <p className="bc-table-title">Cost per messaging conversation</p>
                </div>
                <div className="column col-lg-2">
                    <p id="cost-convo-baseline" className="bc-table-number">$0.00</p>
                </div>
                <div className="column col-lg-2">
                    <p id="cost-convo-year1" className="bc-table-number">$3.25</p>
                </div>
                <div className="column col-lg-2">
                    <p id="cost-convo-year2" className="bc-table-number">$2.68</p>
                </div>
                <div className="column col-lg-2">
                    <p id="cost-convo-year3" className="bc-table-number">$2.28</p>
                </div>
                </div>
                <div className="table-footer">
                <div className="columns bc-table-col row">
                    <div className="column col-lg-4">
                    <p className="bc-table-title font-pri-blue">
                        05 Savings via improved agent efficiency
                    </p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="eff-baseline" className="bc-table-number font-pri-blue">$0</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="eff-year1" className="bc-table-number font-pri-blue">$2,242</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="eff-year2" className="bc-table-number font-pri-blue">$7,278</p>
                    </div>
                    <div className="column col-lg-2">
                    <p id="eff-year3" className="bc-table-number font-pri-blue">$10,139</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="bc-table-container">
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <h4 className="row-heading last-row-heading-hack">Total</h4>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Baseline</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 1</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 2</p>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number table-year-header">Year 3</p>
                </div>
                </div>
                <div className="columns bc-table-col row">
                <div className="column col-lg-4">
                    <h3 className="heading-31">Total benefit</h3>
                </div>
                <div className="column col-lg-2">
                    <p className="bc-table-number large">-</p>
                </div>
                <div className="column col-lg-2">
                    <p id="totals-year1" className="bc-table-number large">$12.20K</p>
                </div>
                <div className="column col-lg-2">
                    <p id="totals-year2" className="bc-table-number large">$97.04K</p>
                </div>
                <div className="column col-lg-2">
                    <p id="totals-year3" className="bc-table-number large">$274.57K</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>


    </>
  );
};

export default RoiCalcTable;
