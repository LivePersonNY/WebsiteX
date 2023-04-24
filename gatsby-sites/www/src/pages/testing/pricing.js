import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import ScrollFeatures from '../../components/ScrollFeatures';
import Parser from 'html-react-parser';
//import $ from 'jquery';

const htmlHack1 = `

<div class="pane hero bg-primary-dark styles-2023">
	<div class="container" style="opacity: 1;">
		<div class="row text-center">
			<div class="col-lg-8 offset-lg-2">
				<p class="h6 text-uppercase">liveperson pricing</p>
				<h1 class="text-neutral-99">No risk. No license fees. Pay as you go.</h1>
				<p data-tag="new line split" class="lead text-neutral-99">
					Pay for conversations, not seats. Drive an automation-first transformation with unlimited seats, unlimited messaging and voice, and unlimited channels for all new customers.</p>
				<a class="btn btn-primary link" href="/request-demo/">Request a quote</a>
			</div>
		</div>
	</div>
</div>

<div class="pane bg-transparent pricing-tabs">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<a class="pricing-tab pricing-tab-active" href="#">Conversational Cloud®</a>
				<a class="pricing-tab" href="#">BellaAI</a>
			</div>
		</div>
	</div>
</div>

<div class=" pane comp-icon-text-b bg-neutral-96">
	<div class="container" style="opacity: 1;">
		<div class="row row-cols-lg-2 comp-card-grid-container">
			<div class="col">
				<div class="card h-100">
					<div class="card-body">
						<img class="card-image-internal" src="https://static.liveperson.com/static-assets/2022/02/09103000/robot-arm_circle-orange.svg" alt="">
						<h3 class="">Conversational Cloud</h3>
						<p class="card-text subtitle1" data-tag="new line split">Automate messages and calls, optimize consumer insights, increase agent productivity with LivePerson AI</p>
					</div>
					<div class="card-footer">
						<a href="#" class="card-link link">Schedule a demo</a>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card h-100">
					<div class="card-body">
						<img class="card-image-internal" src="https://static.liveperson.com/static-assets/2022/02/09103000/robot-arm_circle-orange.svg" alt="">
						<h3 class="">Conversational Cloud & Generative AI</h3>
						<p class="card-text subtitle1" data-tag="new line split">Accelerate automation, increase conversion rate, and boost agent productivity with Generative AI</p>
					</div>
					<div class="card-footer">
						<a href="#" class="card-link link">Schedule a demo</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="pane bg-neutral-96">
	<div class="container" style="opacity: 1;">
		<div class="row">
			<div class="col-lg-12">

				<div class="accordion open" id="pricingPageAccordion">
					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingOne">
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
							<div class="container">
								<div class="row">
									<div class="col-lg-8"><h4>Enterprise Generative AI Suite</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>
						<div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
												Conversation Autopilot: Voice Bot
											</a>
											<div class="collapse" id="collapse1">
												<p class="body2">
													LLM-powered bots that harness Knowledge AI to leverage knowledge base content, internal documents, and more, creating voice and chatbots that generate human-like responses with relevant information to automate phone calls.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
												Conversation Autopilot: Messaging Bot
											</a>
											<div class="collapse" id="collapse2">
												<p class="body2">
													LLM-powered bots that harness Knowledge AI to leverage knowledge base content, internal documents, and more, creating voice and chatbots that generate human-like responses with relevant information to automate phone calls.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse3">
												Conversation Autopilot: Conversation Assist
											</a>
											<div class="collapse" id="collapse3">
												<p class="body2">
													LLM-powered bots that harness Knowledge AI to leverage knowledge base content, internal documents, and more, creating voice and chatbots that generate human-like responses with relevant information to automate phone calls.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapse4">
												Conversation Autopilot: Summary
											</a>
											<div class="collapse" id="collapse4">
												<p class="body2">
													LLM-powered bots that harness Knowledge AI to leverage knowledge base content, internal documents, and more, creating voice and chatbots that generate human-like responses with relevant information to automate phone calls.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapse5">
												Conversation Autopilot: Generative Intent Training
											</a>
											<div class="collapse" id="collapse5">
												<p class="body2">
													LLM-powered bots that harness Knowledge AI to leverage knowledge base content, internal documents, and more, creating voice and chatbots that generate human-like responses with relevant information to automate phone calls.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingTwo">
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
							<div class="container">
								<div class="row">
									<div class="col-lg-8"><h4>VoiceBot</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>
						<div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
							<div class="accordion-body">
								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse6" role="button" aria-expanded="false" aria-controls="collapse6">
												VoiceBot
											</a>
											<div class="collapse" id="collapse6">
												<p class="body2">
													Automates, deflects, and contains calls within Voice Bot.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingThree">
						</button>
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
							<div class="container">
								<div class="row">
									<div class="col-lg-8"><h4>Automations & AI</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>
						<div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse7" role="button" aria-expanded="false" aria-controls="collapse7">
												Intent Manager
											</a>
											<div class="collapse" id="collapse7">
												<p class="body2">
													Create, manage,test, and activate intent domain models using LivePerson NLU, with pre-built domain and starter pack access for top verticals and use cases.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse8" role="button" aria-expanded="false" aria-controls="collapse8">
												Conversation Builder
											</a>
											<div class="collapse" id="collapse8">
												<p class="body2">
													Create, manage,test, and activate intent domain models using LivePerson NLU, with pre-built domain and starter pack access for top verticals and use cases.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse9" role="button" aria-expanded="false" aria-controls="collapse9">
												Conversation Orchestrator
											</a>
											<div class="collapse" id="collapse9">
												<p class="body2">
													Create, manage,test, and activate intent domain models using LivePerson NLU, with pre-built domain and starter pack access for top verticals and use cases.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse10" role="button" aria-expanded="false" aria-controls="collapse10">
												AI Annotator
											</a>
											<div class="collapse" id="collapse10">
												<p class="body2">
													Create, manage,test, and activate intent domain models using LivePerson NLU, with pre-built domain and starter pack access for top verticals and use cases.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingFour">
						</button>
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
							<div class="container">
								<div class="row">
									<div class="col-lg-8"><h4>Agent & Supervisor Experience</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>
						<div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFour">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse11" role="button" aria-expanded="false" aria-controls="collapse11">
												Multi-channel Agent Workspace
											</a>
											<div class="collapse" id="collapse11">
												<p class="body2">
													Handles multiple conversation channels asynchronously at scale, streamlining agent operations and enhancing agent focus and efficiency. Includes conversation history, out-of-the-box and custom agent widgets, and predefined content.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse12" role="button" aria-expanded="false" aria-controls="collapse12">
												Agent Manager Workspace
											</a>
											<div class="collapse" id="collapse12">
												<p class="body2">
													Create, manage,test, and activate intent domain models using LivePerson NLU, with pre-built domain and starter pack access for top verticals and use cases.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse13" role="button" aria-expanded="false" aria-controls="collapse13">
												Voice/Video
											</a>
											<div class="collapse" id="collapse13">
												<p class="body2">
													Create, manage,test, and activate intent domain models using LivePerson NLU, with pre-built domain and starter pack access for top verticals and use cases.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
										<div class="col-lg-2"><img src="https://placeimg.com/24/24/any" /></div>
									</div>
								</div>

							</div>
						</div>
					</div>

				</div>

			</div>
		</div>
	</div>
</div>

<div class=" pane comp-icon-text-a bg-transparent pane-with-lead-text">
	<div class="container" style="opacity:1">
		<div class="row">
			<div class="col-lg-12">
				<h2 class="">Choose the payment option that meets your business needs</h2>
			</div>
		</div>
		<div class="row row-cols-lg-2 row-cols-1 comp-block-grid-container">
			<div class="col">
				<img src="https://static.liveperson.com/static-assets/2022/02/02002045/icon-phone-call_circle-white.svg" alt="ringing telephone">
				<p class="card1">Pay as you go</p>
				<p class="subtitle1" data-tag="new line split">Only pay for what you use: Unlimited agent seats, unlimited calls and messaging, and unlimited channels.</p>
			</div>
			<div class="col">
				<img src="https://static.liveperson.com/static-assets/2022/02/02002045/icon-phone-call_circle-white.svg" alt="ringing telephone">
				<p class="card1">Annual contract</p>
				<p class="subtitle1" data-tag="new line split">Get customer success and enhanced support services with annual contract.</p>
			</div>
		</div>
	</div>
</div>

<div class="pane comp-content-cta bg-transparent">
	<div class="container" style="opacity: 1;">
		<div class="row">
			<div class="col-lg-12">
				<div class="comp-content-cta-container bg-neutral-96">
					<div class="row align-items-center text-center text-lg-start">
						<div class="col-lg-7 offset-lg-1">
							<h2>See the Conversational Cloud in action.</h2>
						</div>
					<div class="col-lg-2 offset-lg-1 text-lg-end">
						<a class="btn btn-primary" href="/request-demo/">Get a demo</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

`;

const PricingPage = () => {
    useEffect(() => {
        return () => {};
    });

    let meta = [
        {
            property: `og:title`,
            content: 'Pricing TEST | LivePerson' || ``,
        },
        {
            property: `og:image`,
            content: `https://static.liveperson.com/static-assets/2023/02/16151853/Homepage_Meta-Tag_JV_0216.jpg`,
        },
        {
            property: `og:description`,
            content:
                'LivePerson’s Conversational AI platform helps enterprises unlock the power of large language models for better business outcomes.' ||
                ``,
        },
        {
            property: `og:url`,
            content: 'https://www.liveperson.com/',
        },
        {
            name: `type`,
            property: `og:type`,
            content: `website`,
        },
        {
            name: `image`,
            property: `twitter:image`,
            content: `https://static.liveperson.com/static-assets/2023/02/16151853/Homepage_Meta-Tag_JV_0216.jpg`,
        },
        {
            name: `author`,
            property: `og:author`,
            content: `LivePerson Team`,
        },
    ];

    return (
        <Layout>
            <Seo
                title="Pricing TEST | LivePerson"
                description="LivePerson’s Conversational AI platform helps enterprises unlock the power of large language models for better business outcomes."
                meta={meta}
                canonical="https://www.liveperson.com/"
                robots=""
            />

            {Parser(htmlHack1)}
        </Layout>
    );
};

export default PricingPage;
