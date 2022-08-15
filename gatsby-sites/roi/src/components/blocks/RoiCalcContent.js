import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const RoiCalcContent = (props) => {
  
  return (
    <>
      <div className={`pane`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <p className="h6 text-uppercase text-center">EXECUTIVE SUMMARY</p>
                    <h2 className="text-center">{props.execSummaryTitle}</h2>
                </div>
            </div>
          <div className="row">
            <div className={`col-lg-6 `}>
              <p>Based on the inputs provided, LivePerson projects an opportunity for your brand to bank about <span id="text_total_benefit" className="text-amounts"></span> in benefit over three years, driven by a lift in sales and average order values as well as a reduction in contact center operating expenses. This benefit will be delivered via a conversational program that allows your customers to simply state what they need from your brand in the same messaging channels they already use to communicate with friends and family, and get answers from a conversational AI that is available to help them 24/7. LivePerson can help build, deliver, and optimize a purely digital and remote contact center model that focuses on automation, all managed on LivePerson’s enterprise-grade Conversational Cloud.</p>
            </div>
            <div className={`col-lg-6 `}>
              <p>Through peer analysis of LivePerson customers using the Conversational Cloud, LivePerson has detailed the financial impact that would be realized, assuming your brand achieves similar results. This opportunity would produce an annual financial benefit to your brand of <span id="text_year1" className="text-amounts"></span> in year one, <span id="text_year2" className="text-amounts"></span> in year two, and <span id="text_year3" className="text-amounts"></span> in year three, while ensuring high customer satisfaction.</p>
              <p>{props.execSummaryText}</p>
            </div>
          </div>
          <div className="row">
            <div className={`col-lg-7`}>
                {!props.imgCtl && props.imgSrcLeft && (
                    <img src={props.imgSrcLeft} alt={props.imgAltLeft} className="d-block mx-auto" />
                ) || props.imgCtl}
                {!props.imgCtl && props.imgSrcRight && (
                    <img src={props.imgSrcRight} alt={props.imgAltRight} className="d-block mx-auto" />
                ) || props.imgCtl}
            </div>
            <div className={`col-lg-5 `}>
                <h2>Convenience is KING</h2>
                <p>Consumers today favor brands who make it easy for them to do business with, while simultaneously providing personalized experiences. A study by McKinsey & Company found that upwards of 80 percent of consumers want personalized experiences from brands.<br /><br />
                But delivering both convenience and hyper-personalization can be difficult as both have traditionally required devoting large amounts of your employees' time on handling customer inquiries. Conversational AI can help you scale these hyper-personalized experiences across your entire customer base.<br /><br />
                Rather than hunting on a website for product info,  Conversational AI enables consumers to simply state their intent, while being able to personalize each consumer's digital journey, at scale.<br /><br />
                And messaging is the best medium to employ Conversational AI, as messaging apps are already the preferred communication channel that we all use today with family and friends. Consumers no longer have to call an 800 number and wait on hold, just to speak to a person for simple requests like checking if a product is in stock or changing a billing address.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`pane bg-neutral-96`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <h2 className="text-center">How we drive value</h2>
                </div>
            </div>
          <div className="row align-items-center">
            <div className="col-lg-5 offset-lg-1">
                <h3>01. Double your online sales with messaging</h3>
                <p>Give consumers on your website the ability to ask product questions or get help completing a purchase through messaging. Then integrate bots in order to offer 24/7 support, reducing cart abandonment and improving sales conversion rates.<br /><br />
                E-commerce websites and apps are great for housing information, but it is often time-consuming and cumbersome for customers to find the exact product information they are looking for. A conversational interface solves this by allowing customers to immediately state their intent, skipping the process whereby a customer would need to search for the answers they need before making a purchase.<br /><br />
                LivePerson customers using messaging and automation for sales use cases are seeing conversion rates up to <span className="text-amounts">10 times higher</span> than when consumers are left to self-serve. Applying a similar conversion rate improvement would yield <span id="text-incr" className="text-amounts"></span> in incremental revenue.</p>
            </div>
            <div className="col-lg-4 offset-lg-1">
                <div className="graph-container">
                    <div className="value-chart">
                        <div className="w-embed">
                            <svg className="progress-ring" width="296" height="296">
                                <circle className="progress-ring__center" stroke="#EBECEF" stroke-width="18" fill="transparent" r="128" cx="148" cy="148"></circle>
                                <circle className="progress-ring__circle" stroke="#3863E5" stroke-width="20" id="circle1" fill="transparent" stroke-linecap="round" r="128" cx="148" cy="148" ></circle>
                            </svg>
                            <p className="circle-amount" id="circle1-val">$136M</p>
                            <p className="circle-text" id="circle1-cap">Growth</p>
                        </div>
                    </div>
                    <div className="value-item mb-2">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <img src="https://assets-global.website-files.com/60ad0c09266ca44b71ebb223/6230b41cb897e7e82005f775_conversation-builder_circle-orange.svg" loading="lazy" alt="" className="small-image-fixed" />
                            </div>
                            <div className="col-lg-9">
                                <div className="value-text">
                                    <span className="text-amounts">10x</span> higher conversion rates vs self-serve
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="value-item mb-2">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <img src="https://assets-global.website-files.com/60ad0c09266ca44b71ebb223/6230b4277d532c7bfc1bf7b7_check-mark_circle-orange.svg" loading="lazy" alt="" className="small-image-fixed" />
                            </div>
                            <div className="col-lg-9">
                                <div className="value-text">Improve purchase process in consumer journey</div>
                            </div>
                        </div>
                    </div>
                    <div className="value-item mb-2">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <img src="https://assets-global.website-files.com/60ad0c09266ca44b71ebb223/6230b43050b374e1264ff509_retail-shopping-cart-abandonment_circle-orange.svg" loading="lazy" alt="" className="small-image-fixed"/>
                            </div>
                            <div className="col-lg-9">
                                <div className="value-text">Lower cart abandonment</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pane bg-neutral-96">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1 order-lg-last">
                    <h3>
                    02. Improve average order value by&nbsp;20%
                    </h3>
                    <p>A key metric for most brands is the average order value or average revenue per customer. Getting customers to spend more with you on a per-transaction basis is an important health indicator of a brand’s projected revenue. Even in the early stages of a sales-focused conversational program, average order values have been reported up to <span className="text-amounts">20%</span> higher compared to customers who self-serve. <br />‍ <br />The increase in average order value is primarily driven by the ability of sales agents to show consumers product benefits or features regardless of a product’s price. Sales agents can also recommend popular add-on items to an order, driving up the number of products per order as well as the total revenue per&nbsp;order. </p>
                </div>
                <div className="col-lg-4 offset-lg-1 order-lg-first">
                    <div className="graph-container">
                        <div className="value-chart">
                            <div className="w-embed">
                                <svg className="progress-ring" width="296" height="296">
                                    <circle className="progress-ring__center" stroke="#EBECEF" stroke-width="18" fill="transparent" r="128" cx="148" cy="148"></circle>
                                    <circle className="progress-ring__circle" stroke="#3863E5" stroke-width="20" id="circle2" fill="transparent" stroke-linecap="round" r="128" cx="148" cy="148" ></circle>
                                </svg>
                                <p className="circle-amount" id="circle2-val" x="50%" y="50%" text-anchor="middle" fill="#1C1D22" stroke-width="2px" dy=".4em">$51K</p>
                                <p className="circle-text" id="circle2-cap" x="50%" y="75%" text-anchor="middle" fill="#F5A77A">Growth</p>
                            </div>
                        </div>
                        <div className="value-item mb-2">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <img src="https://assets-global.website-files.com/60ad0c09266ca44b71ebb223/6230b475f93c060a5c3ea90a_message-bubbles-square_circle-orange.svg" loading="lazy" alt="" />
                                </div>
                                <div className="col-lg-9">
                                    <div className="value-text">
                                        <span className="text-amounts">20%</span> higher average order value vs self-serve
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="pane bg-neutral-96">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1">
                    <h3>
                    03. First contact resolution skyrockets
                    </h3>
                    <p>Going conversational also presents a significant opportunity to improve the contact-center experience for both consumers and contact-center staff. LivePerson is the leader in operationalizing large scale messaging implementations, and we've built the playbook on how to successfully transform your contact center. One critical metric for measuring the health of your conversational program is first contact resolution. <br />
                    <br />First contact resolution is the % of inquiries that are resolved for the consumer on their first outreach to your contact center. Even in the early stages of a conversational program, LivePerson customers have seen a reduction in contacts per customer, and increases in first contact resolution rates by as much as <span className="text-amounts">15%</span>. <br />
                    <br />This improvement in first contact resolution is driven primarily by the asynchronous aspect of messaging. In traditional voice contact-centers, background noise, hang-ups, and long hold times all lead to consumers having to contact your brand again, repeating their same issue to a new agent. Whereas with messaging, the connection is continuous, with history always available in case a connection is lost. This history also provides useful context to agents, enabling them to better resolve consumers' inquiries.
                    </p>
                </div>
                <div className="col-lg-4 offset-lg-1">
                    <div className="graph-container">
                        <div className="value-chart">
                            <div className="w-embed">
                                <svg className="progress-ring" width="296" height="296">
                                    <circle className="progress-ring__center" stroke="#EBECEF" stroke-width="18" fill="transparent" r="128" cx="148" cy="148"></circle>
                                    <circle className="progress-ring__circle" stroke="#3863E5" stroke-width="20" id="circle3" fill="transparent" stroke-linecap="round" r="128" cx="148" cy="148"></circle>
                                </svg>
                                <p className="circle-amount" id="circle3-val" x="50%" y="50%" text-anchor="middle" fill="#1C1D22" stroke-width="2px" dy=".4em">$7K</p>
                                <p className="circle-text" id="circle3-cap" x="50%" y="75%" text-anchor="middle" fill="#F5A77A">Growth</p>
                            </div>
                        </div>
                        <div className="value-item mb-2">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <img src="https://assets-global.website-files.com/60ad0c09266ca44b71ebb223/6230b4b076438139704af77f_rocket_circle-orange.svg" loading="lazy" alt="" className="small-image-fixed" />
                                </div>
                                <div className="col-lg-9">
                                    <div className="value-text">
                                        <span className="text-amounts">15%</span> increase in first contact resolutions
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="pane bg-neutral-96">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1 order-lg-last">
                    <h3>
                    04. Conversational AI enables&nbsp;scale
                    </h3>
                    <p>Integrate conversational AI into your messaging conversations to automatically detect consumer intent, and begin automating an increasingly larger share of these conversations over time. LivePerson's AI toolset makes it easy, with a simple point-and-click bot building interface, as well as robust analytics that make tuning your bots a breeze. <br /><br />On average, LivePerson customers have automated 50% of their inbound conversations. Applying a similar automation rate at your brand would yield <span id="text-ai-savings" className="text-amounts">$28.73K</span> in&nbsp;savings. </p>
                </div>
                <div className="col-lg-4 offset-lg-1 order-lg-first">
                    <div className="graph-container">
                        <div className="value-chart">
                            <div className="w-embed">
                            <svg className="progress-ring" width="296" height="296">
                                <circle className="progress-ring__center" stroke="#EBECEF" stroke-width="18" fill="transparent" r="128" cx="148" cy="148"></circle>
                                <circle className="progress-ring__circle" stroke="#3863E5" stroke-width="20" id="circle4" fill="transparent" stroke-linecap="round" r="128" cx="148" cy="148"></circle>
                            </svg>
                            <p className="circle-amount" id="circle4-val" x="50%" y="50%" text-anchor="middle" fill="#1C1D22" stroke-width="2px" dy=".4em">$29K</p>
                            <p className="circle-text" id="circle4-cap" x="50%" y="75%" text-anchor="middle" fill="#F5A77A">Savings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="pane bg-neutral-96">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1">
                    <h3>
                    05. Agents become twice as efficient
                    </h3>
                    <p>Not only will Conversational AI help reduce overall volume to your contact center, but messaging is also a more efficient channel than voice, which will further reduce your cost per conversation by as much as 50%. This would bring your current cost per conversation of <span id="cost-per-convo-phone" className="text-amounts">$4.55</span> with voice calls down to about <span id="cost-per-convo-mess" className="text-amounts">$2.28</span> per messaging engagement — representing <span id="text-efficiency" className="text-amounts">$19.66K</span> in operating savings. <br /><br />There are multiple factors that LivePerson customers report as causes for these efficiency gains. Routing bots that can better direct consumers to the right agent or department best suited to handle specific questions, the ability for agents to handle multiple conversations concurrently, and other bots that may be helpful in partially resolving a consumer’s inquiry, but requires a human to fully resolve, all play a role in enabling your agents to handle more conversations in a given time&nbsp;period. </p>
                </div>
                <div className="col-lg-4 offset-lg-1">
                    <div className="graph-container">
                        <div className="value-chart">
                            <div className="w-embed">
                                <svg className="progress-ring" width="296" height="296">
                                    <circle className="progress-ring__center" stroke="#EBECEF" stroke-width="18" fill="transparent" r="128" cx="148" cy="148"></circle>
                                    <circle className="progress-ring__circle" stroke="#3863E5" stroke-width="20" id="circle5" fill="transparent" stroke-linecap="round" r="128" cx="148" cy="148" ></circle>
                                </svg>
                                <p className="circle-amount" id="circle5-val" x="50%" y="50%" text-anchor="middle" fill="#1C1D22" stroke-width="2px" dy=".4em">$20K</p>
                                <p className="circle-text" id="circle5-cap" x="50%" y="75%" text-anchor="middle" fill="#F5A77A">Savings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="pane">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
            <h2 className="text-center">ROI Analysis</h2>
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

export default RoiCalcContent;
