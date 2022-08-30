import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const RoiCalcContent = (props) => {
  
  return (
    <>
      <div className={`pane roi-content bg-transparent`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <p className="h6 text-uppercase text-center">EXECUTIVE SUMMARY</p>
                    <h2 className="text-center">{props.execSummaryTitle}</h2>
                </div>
            </div>
          <div className="row">
            <div className={`col-lg-6 `}>
              <p>Based on the inputs provided in the above calculator, LivePerson projects an opportunity for your brand to bank about <span id="text_total_benefit" className="text-amounts"></span> in benefit over three years, driven by a lift in sales and average order values as well as a reduction in contact center operating expenses. This benefit will be delivered via a Conversational program makes your customer experience more intuitive and convenient while streamlining your contact center operations with Conversational AI. LivePerson can help build, deliver, and optimize a purely digital and automation-forward contact center model, all managed on LivePerson's enterprise-grade Conversational Cloud®.</p>
            </div>
            <div className={`col-lg-6 `}>
              <p>Through peer analysis of LivePerson customers using the Conversational Cloud, LivePerson has detailed the financial impact that can be realized by your brand. Based on real results from brands similar to yours, this opportunity could produce an annual financial benefit to your brand of <span id="text_year1" className="text-amounts"></span> in year one, <span id="text_year2" className="text-amounts"></span> in year two, and <span id="text_year3" className="text-amounts"></span> in year three, while ensuring high customer satisfaction. (These numbers are unique to you, estimated based on the inputs provided above. Keep reading to learn more about these benefits.)</p>
              <p>{props.execSummaryText}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`pane bg-neutral-96 roi-content`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <h2 className="text-center">How we drive value</h2>
                </div>
            </div>
          <div className="row align-items-center">
            <div className="col-lg-5 offset-lg-1">
                <h3>01. Online sales double with messaging</h3>
                <p>Give consumers on your website the ability to ask product questions or get help completing a purchase through messaging. Then integrate bots in order to offer 24/7 support, reducing cart abandonment and improving sales conversion rates.<br /><br />
                E-commerce websites and apps are great for housing information, but it is often time-consuming and cumbersome for customers to find the exact product information they are looking for. A Conversational interface solves this by allowing customers to immediately state their intent, skipping straight to the answers they need before making a purchase.<br /><br />
                LivePerson customers using messaging and automation for sales use cases are seeing conversion rates up to <span className="text-amounts">10 times higher</span> than when consumers are left to self-serve. Applying a similar conversion rate improvement would yield <span id="text-incr" className="text-amounts"></span> in incremental revenue for your brand.</p>
            </div>
            <div className="col-lg-4 offset-lg-1">
                <div className="graph-container">
                    <div className="value-chart">
                        <div className="w-embed">
                            <svg className="progress-ring" width="296" height="296">
                                <circle className="progress-ring__center" stroke="#EBECEF" strokeWidth="18" fill="transparent" r="128" cx="148" cy="148"></circle>
                                <circle className="progress-ring__circle" stroke="#3863E5" strokeWidth="20" id="circle1" fill="transparent" strokeLinecap="round" r="128" cx="148" cy="148" ></circle>
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

      <div className="pane bg-neutral-96 roi-content">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1 order-lg-last">
                    <h3>
                    02. Average order value increases by 20%
                    </h3>
                    <p>A key metric for most brands is the average order value or average revenue per customer. Getting customers to spend more with you on a per-transaction basis is an important health indicator of a brand’s projected revenue. Even in the early stages of a sales-focused Conversational program, average order values have been reported up to <span className="text-amounts">20%</span> higher compared to customers who self-serve. <br /> <br />The increase in average order value is primarily driven by the ability of sales agents to show consumers product benefits or features. When customers feel informed and supported, they’re more likely to add to cart — regardless of a product’s price. Sales agents can also recommend popular add-on items to an order, driving up the number of products per order as well as the total revenue per&nbsp;order. </p>
                </div>
                <div className="col-lg-4 offset-lg-1 order-lg-first">
                    <div className="graph-container">
                        <div className="value-chart">
                            <div className="w-embed">
                                <svg className="progress-ring" width="296" height="296">
                                    <circle className="progress-ring__center" stroke="#EBECEF" strokeWidth="18" fill="transparent" r="128" cx="148" cy="148"></circle>
                                    <circle className="progress-ring__circle" stroke="#3863E5" strokeWidth="20" id="circle2" fill="transparent" strokeLinecap="round" r="128" cx="148" cy="148" ></circle>
                                </svg>
                                <p className="circle-amount" id="circle2-val" x="50%" y="50%" textAnchor="middle" fill="#1C1D22" strokeWidth="2px" dy=".4em">$51K</p>
                                <p className="circle-text" id="circle2-cap" x="50%" y="75%" textAnchor="middle" fill="#F5A77A">Growth</p>
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

      <div className="pane bg-neutral-96 roi-content">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1">
                    <h3>
                    03. First contact resolution skyrockets
                    </h3>
                    <p>Going Conversational also presents a significant opportunity to improve the contact center experience for both consumers and contact center staff. LivePerson is the leader in operationalizing large scale messaging implementations, and we've built the playbook on how to successfully transform your contact center. One critical metric for measuring the health of your Conversational program is first contact resolution. <br />
                    <br />First contact resolution is the percentage of inquiries that are resolved for the consumer on their first outreach to your contact center. Even in the early stages of a Conversational program, LivePerson customers have seen a reduction in contacts per customer, and increases in first contact resolution rates by as much as <span className="text-amounts">15%</span>. <br />
                    <br />This improvement in first contact resolution is driven primarily by the asynchronous aspect of messaging. In traditional voice contact centers, background noise, hang-ups, and long hold times all lead to consumers having to contact your brand again, repeating their same issue to a new agent. With messaging, the connection is continuous, with history always available in case a connection is lost. This history also provides useful context to agents, enabling them to better resolve inquiries. Not to mention, it limits the number of times customers have to repeat themselves — it’s a win-win!
                    </p>
                </div>
                <div className="col-lg-4 offset-lg-1">
                    <div className="graph-container">
                        <div className="value-chart">
                            <div className="w-embed">
                                <svg className="progress-ring" width="296" height="296">
                                    <circle className="progress-ring__center" stroke="#EBECEF" strokeWidth="18" fill="transparent" r="128" cx="148" cy="148"></circle>
                                    <circle className="progress-ring__circle" stroke="#3863E5" strokeWidth="20" id="circle3" fill="transparent" strokeLinecap="round" r="128" cx="148" cy="148"></circle>
                                </svg>
                                <p className="circle-amount" id="circle3-val" x="50%" y="50%" textAnchor="middle" fill="#1C1D22" strokeWidth="2px" dy=".4em">$7K</p>
                                <p className="circle-text" id="circle3-cap" x="50%" y="75%" textAnchor="middle" fill="#F5A77A">Growth</p>
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

      <div className="pane bg-neutral-96 roi-content">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1 order-lg-last">
                    <h3>
                    04. Conversational AI enables&nbsp;scale
                    </h3>
                    <p>Integrate Conversational AI into your messaging conversations to automatically detect consumer intent, and route them to the right bot or agent. As you collect your rich, first-party intent data over time, you can begin automating more and more conversations, continually increasing efficiency and improving the customer and agent experience. LivePerson's AI toolset makes it easy, with a simple point-and-click bot building interface, as well as robust analytics that make tuning your bots a breeze. <br /><br />On average, LivePerson customers have automated 50% of their inbound conversations. Applying a similar automation rate at your brand would yield <span id="text-ai-savings" className="text-amounts">$28.73K</span> in&nbsp;savings. </p>
                </div>
                <div className="col-lg-4 offset-lg-1 order-lg-first">
                    <div className="graph-container">
                        <div className="value-chart">
                            <div className="w-embed">
                            <svg className="progress-ring" width="296" height="296">
                                <circle className="progress-ring__center" stroke="#EBECEF" strokeWidth="18" fill="transparent" r="128" cx="148" cy="148"></circle>
                                <circle className="progress-ring__circle" stroke="#3863E5" strokeWidth="20" id="circle4" fill="transparent" strokeLinecap="round" r="128" cx="148" cy="148"></circle>
                            </svg>
                            <p className="circle-amount" id="circle4-val" x="50%" y="50%" textAnchor="middle" fill="#1C1D22" strokeWidth="2px" dy=".4em">$29K</p>
                            <p className="circle-text" id="circle4-cap" x="50%" y="75%" textAnchor="middle" fill="#F5A77A">Savings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="pane bg-neutral-96 roi-content">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 offset-lg-1">
                    <h3>
                    05. Agents become twice as efficient
                    </h3>
                    <p>Not only will Conversational AI help reduce overall volume to your contact center, but messaging is also a more efficient channel than voice, which will further reduce your cost per conversation by as much as 50%. This would bring your current cost per conversation of <span id="cost-per-convo-phone" className="text-amounts">$4.55</span> with voice calls down to about <span id="cost-per-convo-mess" className="text-amounts">$2.28</span> per messaging engagement — representing <span id="text-efficiency" className="text-amounts">$19.66K</span> in operating savings. <br /><br />There are multiple factors that LivePerson customers report as causes for these efficiency gains. They’re using bots to dynamically route to the right agents and systems based on consumer intent, agent skills and availability, and consumer profiles — and they do all of this with AI instead of rule sets that don’t scale. The result? Customers are getting the answers they need, faster, while agents are handling more conversations concurrently than ever before.</p>
                </div>
                <div className="col-lg-4 offset-lg-1">
                    <div className="graph-container">
                        <div className="value-chart">
                            <div className="w-embed">
                                <svg className="progress-ring" width="296" height="296">
                                    <circle className="progress-ring__center" stroke="#EBECEF" strokeWidth="18" fill="transparent" r="128" cx="148" cy="148"></circle>
                                    <circle className="progress-ring__circle" stroke="#3863E5" strokeWidth="20" id="circle5" fill="transparent" strokeLinecap="round" r="128" cx="148" cy="148" ></circle>
                                </svg>
                                <p className="circle-amount" id="circle5-val" x="50%" y="50%" textAnchor="middle" fill="#1C1D22" strokeWidth="2px" dy=".4em">$20K</p>
                                <p className="circle-text" id="circle5-cap" x="50%" y="75%" textAnchor="middle" fill="#F5A77A">Savings</p>
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
