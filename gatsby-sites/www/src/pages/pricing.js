import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ScrollFeatures from '../components/ScrollFeatures';
import Parser from 'html-react-parser';
import NotFoundPage from './404';
//import $ from 'jquery';

const htmlHack1 = `

<div class="pane hero bg-primary-dark styles-2023">
	<div class="container" >
		<div class="row text-center">
			<div class="col-lg-10 offset-lg-1">
				<p class="h6 text-uppercase text-neutral-99">liveperson pricing</p>
				<h1 class="text-neutral-99">Simple pricing.<br />Minimal add&#8209;ons.<br />No service&nbsp;fees.</h1>
				<p data-tag="new line split" class="lead text-neutral-99">
					Making it easy for you to realize measurable returns on your digital investments.
				</p>
				<a class="btn btn-primary link" href="/quote/">Request a quote</a>
			</div>
		</div>
	</div>
</div>

<div class="pricing-tabs-s-h pricing-tabs-cc">



<div class="pane bg-neutral-96 pricing-table">
	<div class="container" >
		<div class="row align-items-center" style="margin-bottom:28px">
			<div class="col-lg-6">

			</div>
			<div class="col-lg-2">
				<h3 class="text-center">Bronze</h3>
			</div>
			<div class="col-lg-2">
				<h3 class="text-center">Silver</h3>
			</div>
			<div class="col-lg-2">
				<h3 class="text-center">Gold</h3>
			</div>
		</div>
		<div class="row align-items-center" style="margin-bottom:28px">
			<div class="col-lg-6">

			</div>
			<div class="col-lg-2">
				<h5 class="text-center">Boost agent efficiency with a messaging-first workspace</h5>
			</div>
			<div class="col-lg-2">
				<h5 class="text-center">Increase self-service with intelligent automation</h5>
			</div>
			<div class="col-lg-2">
				<h5 class="text-center">Enhance personalization with advanced analytics and Generative AI</h5>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">

				<div class="accordion open pricing2024" id="pricingPageAccordion">

				<!-- Start Agent & Supervisor Experience -->
				<div class="accordion-item">
					<h2 class="accordion-header" id="panelsStayOpen-headingFour">

					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
						<div class="container">
							<div class="row">
								<div class="col-lg-6"><h4>Agent & Supervisor Experience</h4></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
							</div>
						</div>
					</button>
					</h2>
					<div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
						<div class="accordion-body">

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse11" role="button" aria-expanded="false" aria-controls="collapse11">
											Agent & Supervisor Experience
										</a>
										<div class="collapse" id="collapse11">
											<p class="body2">
												Include multi-channel agent workspace, cobrowse, secure forms to optimize agent productivity and customer experience.
											</p>
										</div>
									</div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<!-- START ADMIN EXPERIENCE -->
				<div class="accordion-item">
					<h2 class="accordion-header" id="panelsStayOpen-headingFive">

					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseAdmin" aria-expanded="false" aria-controls="panelsStayOpen-collapseAdmin">
						<div class="container">
							<div class="row">
								<div class="col-lg-6"><h4>Administrative Experience</h4></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
							</div>
						</div>
					</button>
					</h2>
					<div id="panelsStayOpen-collapseAdmin" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
						<div class="accordion-body">

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse110" role="button" aria-expanded="false" aria-controls="collapse110">
											Administrative Experience
										</a>
										<div class="collapse" id="collapse110">
											<p class="body2">
												Include management console, campaign builder, and allow admins to create and manage users and skills.
											</p>
										</div>
									</div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<!-- START Communication Channels -->
				<div class="accordion-item">
					<h2 class="accordion-header" id="panelsStayOpen-headingChannels">

					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseChannels" aria-expanded="false" aria-controls="panelsStayOpen-collapseChannels">
						<div class="container">
							<div class="row">
								<div class="col-lg-6"><h4>Communication Channels</h4></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
							</div>
						</div>
					</button>
					</h2>
					<div id="panelsStayOpen-collapseChannels" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingChannels">
						<div class="accordion-body">

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseChannels" role="button" aria-expanded="false" aria-controls="collapseChannels">
											Communication Channels
										</a>
										<div class="collapse" id="collapseChannels">
											<p class="body2">
												Include web, app, SMS, Email Connect, Whatsapp, Apple Messaging for Business, Messenger, Instagram, Google RCS Messaging, Google Business Messaging, Kakao Talk, Line, Viber, WeChat.
<br /><br />
X (former Twitter) is supported with additional fees.
											</p>
										</div>
									</div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseConnMess" role="button" aria-expanded="false" aria-controls="collapseConnMess">
											Connect to Messaging
										</a>
										<div class="collapse" id="collapseConnMess">
											<p class="body2">
												LivePerson Connect to Messaging (C2M) is an IVR deflection solution that lets brands move voice calls to messages through the Conversational Cloud platform.
											</p>
										</div>
									</div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<!-- START INTEGRATIONS -->
				<div class="accordion-item">
					<h2 class="accordion-header" id="panelsStayOpen-headingTen">

					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
						<div class="container">
							<div class="row">
								<div class="col-lg-6"><h4>Integrations & Developer Experience</h4></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
							</div>
						</div>
					</button>
					</h2>
					<div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
						<div class="accordion-body">

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse32" role="button" aria-expanded="false" aria-controls="collapse32">
											Integration Hub
										</a>
										<div class="collapse" id="collapse32">
											<p class="body2">
												Explore, configure, and enable integrations in a self-serve manner. Includes workflows (powered by Workato), integrations for 3rd party APIs (including Medallia), and a widget marketplace for added functionality into the agent workspace.
											</p>
										</div>
									</div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse35" role="button" aria-expanded="false" aria-controls="collapse35">
											Access to 50+ Data, Connect & Customize APIs
										</a>
										<div class="collapse" id="collapse35">
											<p class="body2">
												Integrate with 3rd party technologies, including any NLU provider, as well as integrate conversational data with enterprise systems for insights and decision-making across the enterprise and configure and manipulate Conversational Cloud features and capabilities.
											</p>
										</div>
									</div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse36" role="button" aria-expanded="false" aria-controls="collapse36">
											CRM Connectors
										</a>
										<div class="collapse" id="collapse36">
											<p class="body2">
												Embedded agent workspace within the most common CRM systems (Salesforce).
											</p>
										</div>
									</div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse33" role="button" aria-expanded="false" aria-controls="collapse33">
											Functions
										</a>
										<div class="collapse" id="collapse33">
											<p class="body2">
												Enable brands to develop custom behaviors to better tailor the system to their specific needs. By offering these capabilities, developers can write a simple function, deploy it to LivePerson's infrastructure and make it available to their LivePerson account in minutes.
											</p>
										</div>
									</div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<!-- Start Automations & AI -->

				<div class="accordion-item">
					<h2 class="accordion-header" id="panelsStayOpen-headingThree">

					<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
						<div class="container">
							<div class="row">
								<div class="col-lg-6"><h4>Automations & AI</h4></div>
								<div class="col-lg-2"></div>
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
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse7" role="button" aria-expanded="false" aria-controls="collapse7">
											Intent Manager (Build, Optimize, Analyze, and Discover Features)
										</a>
										<div class="collapse" id="collapse7">
											<p class="body2">
												Create, manage, test, and activate intent domain models using LivePerson NLU. Includes pre-built domain and starter pack access for top verticals and use cases.
											</p>
										</div>
									</div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse8" role="button" aria-expanded="false" aria-controls="collapse8">
											Conversation Builder
										</a>
										<div class="collapse" id="collapse8">
											<p class="body2">
												Build bots that connect to all consumer messaging channels and everyday systems with an easy-to-use bot builder that allows non-technical staff to create, optimize and visualize bots.  Includes post-conversation survey bots, voice enabled bots, and templates for common use cases.
											</p>
										</div>
									</div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseKnowledgeAI" role="button" aria-expanded="false" aria-controls="collapseKnowledgeAI">
											KnowledgeAI
										</a>
										<div class="collapse" id="collapseKnowledgeAI">
											<p class="body2">
												Unify and leverage curated content to provide fast answers (for bot and human agents) to common questions and issues. Includes access to knowledge created within the Conversational Cloud as well as API access to external CMS.
											</p>
										</div>
									</div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseConversationAssist" role="button" aria-expanded="false" aria-controls="collapseConversationAssist">
											Conversation Assist
										</a>
										<div class="collapse" id="collapseConversationAssist">
											<p class="body2">
												Conversation Assist offers recommended  bots and answers to your agents inline in their conversations with consumers, and on-demand within a dedicated widget.
											</p>
										</div>
									</div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse9" role="button" aria-expanded="false" aria-controls="collapse9">
											Conversation Orchestrator
										</a>
										<div class="collapse" id="collapse9">
											<p class="body2">
												Create highly personalized conversational experiences for consumers with Dynamic Routing, Conversation Context Service, and the Next Actions API.
											</p>
										</div>
									</div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse10" role="button" aria-expanded="false" aria-controls="collapse10">
											AI Annotator
										</a>
										<div class="collapse" id="collapse10">
											<p class="body2">
												Simplify identification, flagging, and correction of automation issues for agents and QA teams. Includes agent annotations, false responses, and Intent Manager Optimize tab access for annotation management.
											</p>
										</div>
									</div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

							<div class="container">
								<div class="row">
									<div class="col-lg-6">
										<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse3rdPartyBotConnectors" role="button" aria-expanded="false" aria-controls="collapse3rdPartyBotConnectors">
											3rd Party Bot Connectors
										</a>
										<div class="collapse" id="collapse3rdPartyBotConnectors">
											<p class="body2">
												Connectors for common 3rd party bot platforms (IBM Watson, Google Dialog Flow, Amazon Lex, Microsoft bots) and access to LivePerson Functions to build custom integrations with other 3rd party bot providers.
											</p>
										</div>
									</div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<!-- Start Conversational Intelligence -->


					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingOne">
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
							<div class="container">
								<div class="row">
									<div class="col-lg-6"><h4>Conversational Intelligence</h4></div>
									<div class="col-lg-2"></div>
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
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
												Data Transporter
											</a>
											<div class="collapse" id="collapse1">
												<p class="body2">
													Connect brands with Conversational Cloud report exports from the suite of Conversational Cloud Data APIs, enabling users to benefit from the power and agility of the Conversational Cloud open platform without the need to develop on top of our API based sources. Maximum 15 tasks for the file transfer subscriptions per site ID.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
												Report Center
											</a>
											<div class="collapse" id="collapse2">
												<p class="body2">
													Consolidate metrics for sentiments, intents, operations, bots, generative AI, and voice analytics in one dashboard.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse3">
												LivePerson Analytics Studio <sup>1</sup>
											</a>
											<div class="collapse" id="collapse3">
												<p class="body2">
													Analytics Studio analyzes data from various speech and text conversations, such as a phone (VoIP telephony), SMS texting, email, web chat, social media, video conferencing.  Analytics Studio can be used to discover intents and uncover customer insights.

<br /><br />
Additional terms regarding LivePerson Analytics Studio can be found <a href="/policies/analytics-studio-terms-of-use/">here</a>.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<!-- Start Proactive -->

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingTwo">
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
							<div class="container">
								<div class="row">
									<div class="col-lg-6"><h4>Proactive</h4></div>
									<div class="col-lg-2"></div>
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
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse6" role="button" aria-expanded="false" aria-controls="collapse6">
												Proactive Messaging <sup>2</sup>
											</a>
											<div class="collapse" id="collapse6">
												<p class="body2">
													Enable Customer to proactively send messages on WhatsApp, SMS and InApp. SMS gateway and phone number costs are not included. Customer may use its own gateway or purchase use of LivePerson’s provided gateway separately.
<br /><br />
Messaging channels are charged at the following rates, plus a handling fee of 15%.
<ul>
<li class="body2">SMS outbound - list price rate of the SMS Provider </li>
<li class="body2">WhatsApp rate card can be found <a href="https://developers.facebook.com/docs/whatsapp/pricing" target="_blank">here</a>.</li>
</ul>
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>
							</div>
						</div>
					</div>


					<!-- START Generative AI -->

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingSix">

						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true" aria-controls="panelsStayOpen-collapseSix">
							<div class="container">
								<div class="row">
									<div class="col-lg-6"><h4>Generative AI<sup>3</sup></h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>
						<div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingSix">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse17" role="button" aria-expanded="false" aria-controls="collapse17">
												Generative Intent Training
											</a>
											<div class="collapse" id="collapse17">
												<p class="body2">
													Maximum 1,000 training phrases per intent
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseCopilotSummary" role="button" aria-expanded="false" aria-controls="collapseCopilotSummary">
												Copilot Summary
											</a>
											<div class="collapse" id="collapseCopilotSummary">
												<p class="body2">
													Provide focused summaries across bot and agent conversations for quicker context to reduce consumer repetition, and for faster agent wrap-up times.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseCopilotAssist" role="button" aria-expanded="false" aria-controls="collapseCopilotAssist">
												Copilot Assist
											</a>
											<div class="collapse" id="collapseCopilotAssist">
												<p class="body2">
													Generative AI-powered Conversation Assist.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseCopilotRewrite" role="button" aria-expanded="false" aria-controls="collapseCopilotRewrite">
												Copilot Rewrite
											</a>
											<div class="collapse" id="collapseCopilotRewrite">
												<p class="body2">
													Copilot Rewrite, part of Conversation Copilot, enhances agent communication in the workspace. It interprets and refines messages for clarity and professionalism within the agent workspace, setting the bar for high customer and agent experiences.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseKnowAI" role="button" aria-expanded="false" aria-controls="collapseKnowAI">
												AI Agents: KnowledgeAI Agent
											</a>
											<div class="collapse" id="collapseKnowAI">
												<p class="body2">
													Formerly known as Autopilot: Messaging Bot and Autopilot: Voice Bot.  Utilize existing knowledge bases, CRMs, and CMSs to inform AI interactions for increased self-service.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseRoutAI" role="button" aria-expanded="false" aria-controls="collapseRoutAI">
												AI Agents: Routing AI Agent
											</a>
											<div class="collapse" id="collapseRoutAI">
												<p class="body2">
													Accurately route consumers to the best-suited agent or bot based on their intent, without needing to build manual routing rules, for reduced mis-routes and faster deployment.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseHallDet" role="button" aria-expanded="false" aria-controls="collapseHallDet">
												Hallucination Detection
											</a>
											<div class="collapse" id="collapseHallDet">
												<p class="body2">
													Transform and unify existing (or new) KB, CRM, and CMS content into accurate, engaging conversations for full automation or faster agent handle times. Hallucination Detection ensures that responses are reliable and consistent with your business data.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapsePromLib" role="button" aria-expanded="false" aria-controls="collapsePromLib">
												Prompt Library
											</a>
											<div class="collapse" id="collapsePromLib">
												<p class="body2">
													Allow for customization of prompts for more tailored & controlled AI conversations.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseBringLLM" role="button" aria-expanded="false" aria-controls="collapseBringLLM">
												Bring your own LLM
											</a>
											<div class="collapse" id="collapseBringLLM">
												<p class="body2">
													Integrate existing LLM models to be used in agent and consumer-facing capabilities for enhanced control, compliance, and cost.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapseGenIn" role="button" aria-expanded="false" aria-controls="collapseGenIn">
												Generative Insights<sup>4</sup>
											</a>
											<div class="collapse" id="collapseGenIn">
												<p class="body2">
													Conversational interface to query data using plain language and open-ended questions for accelerated data-driven decision making.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

							</div>
						</div>
					</div>


					<!-- START Technical Support -->

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingSeven">

						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" aria-controls="panelsStayOpen-collapseSeven">
							<div class="container">
								<div class="row">
									<div class="col-lg-6"><h4>Technical Support</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>
						<div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFive">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1">

											</a>
										</div>
										<div class="col-lg-2">Standard</div>
										<div class="col-lg-2">Enhanced</div>
										<div class="col-lg-2">Enhanced</div>
									</div>
								</div>

							</div>
						</div>
					</div>

					<!-- START Customer Success -->

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingSeven">

						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" aria-controls="panelsStayOpen-collapseSeven">
							<div class="container">
								<div class="row">
									<div class="col-lg-6"><h4>Customer Success</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>

						<div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFive">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1">

											</a>
										</div>
										<div class="col-lg-2">Community</div>
										<div class="col-lg-2">Pooled CSM</div>
										<div class="col-lg-2">Designated CSM</div>
									</div>
								</div>

							</div>
						</div>


					</div>

					<!-- START Implementation -->

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingSeven">

						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" aria-controls="panelsStayOpen-collapseSeven">
							<div class="container">
								<div class="row">
									<div class="col-lg-6"><h4>Implementation</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>

						<div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFive">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-6">
											<a class="body1">

											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

							</div>
						</div>

					</div>

				</div>

			</div>
		</div>

		<div class="row align-items-center" style="margin-bottom:28px">
			<div class="col-lg-12">
				<p><br /><br /><i>1. Analytics Studio: Please reach out to your sales representatives to see the entitlements
<br><br>
2. Proactive Messaging: Please reach out to your sales representatives to see the entitlements
<br><br>
3. Generative AI: Please reach out to your sales representatives to see the entitlements for Generative AI tokens
<br><br>
4. Early access</i>
</p>
			</div>

		</div>

	</div>
</div>

<div class="pane comp-content-cta bg-transparent">
	<div class="container" >
		<div class="row">
			<div class="col-lg-12">
				<div class="comp-content-cta-container bg-neutral-96">
					<div class="row align-items-center text-center text-lg-start">
						<div class="col-lg-7 offset-lg-1">
							<h2>See the Conversational Cloud in action</h2>
						</div>
						<div class="col-lg-2 offset-lg-1 text-lg-end">
							<a class="btn btn-primary" href="/request-demo/">Get a demo</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

</div>




`;

const PricingPageNew = () => {
    useEffect(() => {
        let pricingTabs = document.querySelectorAll('.pricing-tab');
        pricingTabs.forEach((el) => {
            el.addEventListener('click', () => {
                pricingTabs.forEach((el) => {
                    el.classList.remove('pricing-tab-active');
                });
                el.classList.add('pricing-tab-active');

                let tabName = el.dataset.tabName;
                document.querySelectorAll('.pricing-tabs-s-h').forEach((el) => {
                    el.style.display = 'none';
                });
                document.querySelector(`.${tabName}`).style.display = 'block';
            });
        });

        return () => {};
    });

    let meta = [
        {
            property: `og:title`,
            content: 'LivePerson Pricing & Packaging | LivePerson' || ``,
        },
        {
            property: `og:image`,
            content: `https://static.liveperson.com/static-assets/2023/04/26161111/Pricing_Meta-Tag_JV_0426.png`,
        },
        {
            property: `og:description`,
            content:
                'Explore LivePerson pricing and packaging designed to help you drive an automation-first customer engagement transformation.' ||
                ``,
        },
        {
            property: `og:url`,
            content: 'https://www.liveperson.com/pricing',
        },
        {
            name: `type`,
            property: `og:type`,
            content: `website`,
        },
        {
            name: `image`,
            property: `twitter:image`,
            content: `https://static.liveperson.com/static-assets/2023/04/26161111/Pricing_Meta-Tag_JV_0426.png`,
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
                title="LivePerson Pricing – Flexible Plans for Every Business"
                description="Discover flexible pricing options for LivePerson's AI and messaging solutions. Explore the right plan for your business and scale customer engagement efficiently."
                meta={meta}
                canonical="https://www.liveperson.com/pricing/"
                robots=""
            />

            {Parser(htmlHack1)}
        </Layout>
    );
};

export default PricingPageNew;
