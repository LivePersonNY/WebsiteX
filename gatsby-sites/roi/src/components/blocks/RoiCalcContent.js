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
              <p>Based on the inputs provided, LivePerson projects an opportunity for your brand to bank about $251.46M in benefit over three years, driven by a lift in sales and average order values as well as a reduction in contact center operating expenses. This benefit will be delivered via a conversational program that allows your customers to simply state what they need from your brand in the same messaging channels they already use to communicate with friends and family, and get answers from a conversational AI that is available to help them 24/7. LivePerson can help build, deliver, and optimize a purely digital and remote contact center model that focuses on automation, all managed on LivePerson’s enterprise-grade Conversational Cloud.</p>
            </div>
            <div className={`col-lg-6 `}>
              <p>Through peer analysis of LivePerson customers using the Conversational Cloud, LivePerson has detailed the financial impact that would be realized, assuming your brand achieves similar results. This opportunity would produce an annual financial benefit to your brand of $9.93M in year one, $66.77M in year two, and $174.76M in year three, while ensuring high customer satisfaction.</p>
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
                LivePerson customers using messaging and automation for sales use cases are seeing conversion rates up to 10 times higher than when consumers are left to self-serve. Applying a similar conversion rate improvement would yield $135.67M in incremental revenue.</p>
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

      <div className="bg-neutral-96">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1 order-lg-last">
                    <h3>
                    <span>02.</span> Improve average order value by&nbsp;20%
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

      <div className="bg-neutral-96">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1">
                    <h3>
                    <span>03.</span> First contact resolution skyrockets
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


    </>
  );
};

export default RoiCalcContent;
