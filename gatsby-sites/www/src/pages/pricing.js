import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ScrollFeatures from '../components/ScrollFeatures';
import Parser from 'html-react-parser';
//import $ from 'jquery';

const htmlHack1 = `

<div class="pane hero bg-primary-dark styles-2023">
	<div class="container" >
		<div class="row text-center">
			<div class="col-lg-8 offset-lg-2">
				<p class="h6 text-uppercase text-neutral-99">liveperson pricing</p>
				<h1 class="text-neutral-99">No risk. No license fees. Pay as you go.</h1>
				<p data-tag="new line split" class="lead text-neutral-99">
					Pay for conversations, not seats. Drive an automation-first transformation with unlimited agent seats and accelerated time to value for all new customers.</p>
				<a class="btn btn-primary link" href="/quote/">Request a quote</a>
			</div>
		</div>
	</div>
</div>

<!-- <div class="pane bg-transparent pricing-tabs">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<a class="pricing-tab pricing-tab-active" data-tab-name="pricing-tabs-cc">Conversational Cloud®</a>
				<a class="pricing-tab" data-tab-name="pricing-tabs-bai">Bella AI</a>
			</div>
		</div>
	</div>
</div> -->

<div class="pricing-tabs-s-h pricing-tabs-cc">

<div class=" pane comp-icon-text-b bg-neutral-96">
	<div class="container" >
		<div class="row row-cols-lg-2 comp-card-grid-container">
			<div class="col">
				<div class="card h-100">
					<div class="card-body">
						<img class="card-image-internal" src="https://static.liveperson.com/static-assets/2023/04/25145618/numbers-1_circle-orange.svg" alt="">
						<h3 class="">Conversational Cloud</h3>
						<p class="card-text subtitle1" data-tag="new line split">Automate messages and calls, optimize consumer insights, increase agent productivity with Liveperson AI.</p>
					</div>
					<div class="card-footer">
						<a href="/request-demo/" class="card-link link">Schedule a demo</a>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card h-100">
					<div class="card-body">
						<img class="card-image-internal" src="https://static.liveperson.com/static-assets/2023/04/25145619/numbers-2_circle-orange.svg" alt="">
						<h3 class="">Conversational Cloud & Generative AI</h3>
						<p class="card-text subtitle1" data-tag="new line split">Accelerate automation, increase conversion rate, and boost agent productivity with Generative AI.</p>
					</div>
					<div class="card-footer">
						<a href="/request-demo/" class="card-link link">Schedule a demo</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="pane bg-neutral-96 pricing-table">
	<div class="container" >
		<div class="row align-items-center" style="margin-bottom:28px">
			<div class="col-lg-8">
				<h2>Conversational Cloud Packages</h2>
			</div>
			<div class="col-lg-2">
				<h5 class="text-center">Conversational Cloud</h5>
			</div>
			<div class="col-lg-2">
				<h5 class="text-center">Conversational Cloud & Generative AI</h5>
			</div>
		</div>
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
													LLM-powered bots that harness Knowledge AI to leverage knowledge base content, internal documents, and more, creating voice bots and chatbots that generate human-like responses with relevant information to automate phone calls.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
													LLM-powered bots harness Knowledge AI to access knowledge base content, internal documents, and more, to craft voice and chatbots that produce human-like responses containing pertinent information.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
													Offers instant contextual recommended answers to agents using existing knowledge base, website content, and more, increasing productivity by quickly providing relevant information from brand-invested content sources.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
													Generates a concise summary of previous customer conversations handled by a bot or human agent before transfer, outlining the customer's questions, concerns, key issues, and attempted resolutions by the bot or previous agent.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
													Accelerates NLU model development by using LLMs to automatically generate training phrases, producing various potential customer inquiry phrases.
												</p>
											</div>
										</div>
										<div class="col-lg-2"></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
													Build bots that connect to consumer messaging channels and everyday systems with an easy-to-use bot builder for non-technical staff. Includes post-conversation survey bots, voice-enabled bots, and common use case templates.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
													Craft highly personalized conversational experiences for consumers using Dynamic Routing, Conversation Context Service, and the Next Actions API.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
													Simplify identification, flagging, and correction of automation issues for agents and QA teams. Includes agent annotations, false responses, and Intent Manager Optimize tab access for annotation management.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
													Centralized hub for data and agent information needed to manage a shift, offering insight into tracked metrics' causes and enabling private messaging to agents in live conversations.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
													Web Messaging Voice and Video Connections service enables voice and video capabilities within Web Messaging conversations.
												</p>
											</div>
										</div>
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
						</button>
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true" aria-controls="panelsStayOpen-collapseFive">
							<div class="container">
								<div class="row">
									<div class="col-lg-8"><h4>Administrative Experience</h4></div>
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
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse14" role="button" aria-expanded="false" aria-controls="collapse14">
												Management Console
											</a>
											<div class="collapse" id="collapse14">
												<p class="body2">
													Explore, configure, and enable platform capabilities in a self-serve manner.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse15" role="button" aria-expanded="false" aria-controls="collapse15">
												Create and manage users and skills
											</a>
											<div class="collapse" id="collapse15">
												<p class="body2">
													Add users, control permissions, establish agent groups, and create and assign skills for routing. Includes ability to control Dynamic Capacity settings for agent load balancing.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse16" role="button" aria-expanded="false" aria-controls="collapse16">
												Campaign Builder
											</a>
											<div class="collapse" id="collapse16">
												<p class="body2">
													Customizable messaging button library, or engagements, determining button display location, audience, and behavior. Includes Engagement Controller for controlling incoming Web Messaging conversation flow according to skill-defined thresholds.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

							</div>
						</div>
					</div>


					<!-- START MESSAGING CHANNELS -->

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingSix">
						</button>
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true" aria-controls="panelsStayOpen-collapseSix">
							<div class="container">
								<div class="row">
									<div class="col-lg-8"><h4>Messaging Channels</h4></div>
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
										<div class="col-lg-8">
											<a class="body1">
												Apple Messaging for Business
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												App Messaging
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse17" role="button" aria-expanded="false" aria-controls="collapse17">
												Facebook
											</a>
											<div class="collapse" id="collapse17">
												<p class="body2">
													Engagement Credits incurred when Brands communicate with end users on Facebook Messenger or reply to public messages (e.g., post comments).
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												Google RCS Messaging (GRBM)
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												Google Business Messaging
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse18" role="button" aria-expanded="false" aria-controls="collapse18">
												Instagram
											</a>
											<div class="collapse" id="collapse18">
												<p class="body2">
													Currently available for direct messages only.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												KakaoTalk
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												Line
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse19" role="button" aria-expanded="false" aria-controls="collapse19">
												SMS
											</a>
											<div class="collapse" id="collapse19">
												<p class="body2">
													SMS gateway and phone number costs not included. Customers may use their own gateway or purchase LivePerson's gateway separately. LivePerson's SMS gateway use is invoiced monthly in arrears at the SMS Provider's list price rate and a 15% handling fee.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse20" role="button" aria-expanded="false" aria-controls="collapse20">
												Twitter
											</a>
											<div class="collapse" id="collapse20">
												<p class="body2">
													Engagement Credits incurred for conversations on direct messages and when brands reply to tweets.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												Viber
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												Web Messaging
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												WeChat
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse21" role="button" aria-expanded="false" aria-controls="collapse21">
												WhatsApp
											</a>
											<div class="collapse" id="collapse21">
												<p class="body2">
													Additional costs may apply for WhatsApp messaging. LivePerson invoices customers monthly in arrears according to the WhatsApp rate card, with a 15% handling fee.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												Workato
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												Chat
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												Co-Browse
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												Content
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1">
												Secure Forms
											</a>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

							</div>
						</div>
					</div>


					<!-- START PROACTIVE MESSAGINAG -->

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingSeven">
						</button>
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" aria-controls="panelsStayOpen-collapseSeven">
							<div class="container">
								<div class="row">
									<div class="col-lg-8"><h4>Administrative Experience</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>
						<div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingSeven">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse22" role="button" aria-expanded="false" aria-controls="collapse22">
												Proactive Messaging
											</a>
											<div class="collapse" id="collapse22">
												<p class="body2">
													Enables proactive messaging on WhatsApp, SMS, and InApp. SMS gateway and phone number costs not included. Customers may use their own gateway or purchase LivePerson's gateway separately. Outbound message charges apply if the end user doesn't reply within up to 30 days. Messaging channels are charged at specific rates, plus a 15% handling fee.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

							</div>
						</div>
					</div>


					<!-- START REPORTING ANALYTICS -->

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingEight">
						</button>
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true" aria-controls="panelsStayOpen-collapseEight">
							<div class="container">
								<div class="row">
									<div class="col-lg-8"><h4>Reporting & Analytics</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>
						<div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingEight">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse23" role="button" aria-expanded="false" aria-controls="collapse23">
												Analytics Builder
											</a>
											<div class="collapse" id="collapse23">
												<p class="body2">
													Provides business insights for data-driven decision-making, optimizing contact center operations, and tracking and increasing revenues.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse24" role="button" aria-expanded="false" aria-controls="collapse24">
												Bot Analytics
											</a>
											<div class="collapse" id="collapse24">
												<p class="body2">
													Offers real-time data on bot activity to gauge effectiveness.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse25" role="button" aria-expanded="false" aria-controls="collapse25">
												Meaningful Conversation Score (MCS)
											</a>
											<div class="collapse" id="collapse25">
												<p class="body2">
													An automatic, unbiased method for measuring the relationship between consumers and brands.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

							</div>
						</div>
					</div>


					<!-- START ADVANCED ANALYTICS -->

					<div class="accordion-item">
						<h2 class="accordion-header" id="panelsStayOpen-headingNine">
						</button>
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="true" aria-controls="panelsStayOpen-collapseNine">
							<div class="container">
								<div class="row">
									<div class="col-lg-8"><h4>Advanced Analytics</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>
						<div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingNine">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse26" role="button" aria-expanded="false" aria-controls="collapse26">
												Meaningful Automated Conversation Score (MACS)
											</a>
											<div class="collapse" id="collapse26">
												<p class="body2">
													A proprietary metric evaluating bot conversation quality, understanding consumer sentiment and bot effectiveness to create self-learning and AI training feedback loops.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse27" role="button" aria-expanded="false" aria-controls="collapse27">
												Performance Optimizer
											</a>
											<div class="collapse" id="collapse27">
												<p class="body2">
													A live management analytics dashboard measuring the health of brand conversational operations.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse28" role="button" aria-expanded="false" aria-controls="collapse28">
												Custom Analytics Builder
											</a>
											<div class="collapse" id="collapse28">
												<p class="body2">
													Create custom reports offering vital business insights for data-driven decision-making, optimizing contact center operations, and tracking and increasing revenues.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse29" role="button" aria-expanded="false" aria-controls="collapse29">
												Conversation Insights
											</a>
											<div class="collapse" id="collapse29">
												<p class="body2">
													A text analytics tool focusing on transcripts and a subset of metric data.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse30" role="button" aria-expanded="false" aria-controls="collapse30">
												Data Transporter
											</a>
											<div class="collapse" id="collapse30">
												<p class="body2">
													Connects brands to Conversational Cloud report exports via Conversational Cloud Data APIs, allowing users to benefit from the open platform without developing API-based sources.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse31" role="button" aria-expanded="false" aria-controls="collapse31">
												Conversation Assist
											</a>
											<div class="collapse" id="collapse31">
												<p class="body2">
													Recommends bots and answers to human agents within their conversations with consumers.
												</p>
											</div>
										</div>
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
						</button>
						<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="true" aria-controls="panelsStayOpen-collapseTen">
							<div class="container">
								<div class="row">
									<div class="col-lg-8"><h4>Integrations & Developer Experience</h4></div>
									<div class="col-lg-2"></div>
									<div class="col-lg-2"></div>
								</div>
							</div>
						</button>
						</h2>
						<div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTen">
							<div class="accordion-body">

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse32" role="button" aria-expanded="false" aria-controls="collapse32">
												Integration Hub
											</a>
											<div class="collapse" id="collapse32">
												<p class="body2">
													Explore, configure, and enable integrations in a self-serve manner. Includes workflows (powered by Workato), third-party API integrations (including Medallia), and a widget marketplace for added functionality in the agent workspace.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse33" role="button" aria-expanded="false" aria-controls="collapse33">
												Functions
											</a>
											<div class="collapse" id="collapse33">
												<p class="body2">
													Enables brands to develop custom behaviors, tailoring the system to specific needs. Developers can write simple functions, deploy them to LivePerson's infrastructure, and make them available to their LivePerson account within minutes.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse34" role="button" aria-expanded="false" aria-controls="collapse34">
												3rd Party Bot Connectors
											</a>
											<div class="collapse" id="collapse34">
												<p class="body2">
													Connectors for common third-party bot platforms (IBM Watson, Google Dialog Flow, Amazon Lex, Microsoft bots) and access to LivePerson Functions for custom integrations with other third-party bot providers.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse35" role="button" aria-expanded="false" aria-controls="collapse35">
												Access to 50+ Data, Connect & Customize APIs
											</a>
											<div class="collapse" id="collapse35">
												<p class="body2">
													Integrate with third-party technologies, including any NLU provider, integrate conversational data with enterprise systems for insights and decision-making across the enterprise, and configure and manipulate Conversational Cloud features and capabilities.
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
									</div>
								</div>

								<div class="container">
									<div class="row">
										<div class="col-lg-8">
											<a class="body1 collapse-btn collapsed" data-bs-toggle="collapse" href="#collapse36" role="button" aria-expanded="false" aria-controls="collapse36">
												CRM Connectors
											</a>
											<div class="collapse" id="collapse36">
												<p class="body2">
													Embedded agent workspace within common CRM systems (Salesforce).
												</p>
											</div>
										</div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
										<div class="col-lg-2"><img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" /></div>
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
				<img src="https://static.liveperson.com/static-assets/2023/04/25145621/banking-money-2_circle-orange.svg" alt="ringing telephone">
				<p class="card1">Pay as you go</p>
				<p class="subtitle1" data-tag="new line split">Only pay for what you use: Unlimited agent seats.</p>
			</div>
			<div class="col">
				<img src="https://static.liveperson.com/static-assets/2023/04/25145622/insurance-handshake_circle-orange.svg" alt="ringing telephone">
				<p class="card1">Annual contract</p>
				<p class="subtitle1" data-tag="new line split">Get customer success and enhanced support services with annual contract.</p>
			</div>
		</div>
	</div>
</div>

<div class="pane comp-quote-slider bg-transparent">
	<div class="container" >
		<div class="row">
			<div class="col-lg-12">
				<div class="comp-slider-container bg-neutral-96">

					<div id="carouselExampleControls" class="carousel slide testing-here4" data-bs-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item active">
								<div class="col-lg-12">
									<div class="row align-items-center">
										<div class="col-lg-10 offset-lg-1">
											<img class="comp-brand-img" src="https://static.liveperson.com/static-assets/2023/04/26161117/specialized-logo-40px.svg" alt="Specialized Logo">
											<p class="h6 comp-quote-author text-uppercase">andrew mcguigan • global leader, rider care at specialized</p>
											<p class="quote1" data-tag="new line split">“As a worldwide brand selling to more than 25 distinct markets, LivePerson’s pay-as-you-go framework is the best fit for us. Today, our CSAT score for messaging interactions with retailers and riders is 93% and growing. As we continue to roll out LivePerson’s solutions across multiple languages, channels, and markets, pay-as-you-go provides us with the flexibility we need to strategically scale up AI for our business with a trusted partner.”</p>
											<a class="link link-mt-large" target="_blank" href="https://pr.liveperson.com/2023-04-25-LivePerson-upgrades-its-Conversational-Cloud-platform-with-trustworthy-AI-capabilities-to-redefine-how-businesses-put-Generative-AI-and-LLMs-to-work">Read the press release</a>
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

<div class="pricing-tabs-s-h pricing-tabs-bai">

	<div class="pane comp-contained-content bg-neutral-96">
		<div class="container" >
			<div class="row">
				<div class="col-lg-12">
					<div class="comp-contained-content-container bg-primary-light">
						<div class="row">
							<div class="col-lg-8 offset-lg-2 text-center">
								<h2>Bella for Business</h2>
								<p>Instantly create a Generative AI powered conversational assistant that provides answers and insights to customers and employees, safely, and with no code or technical experience.</p>
								<br />
								<a class="link" href="https://www.getbella.ai/" target="_blank">Get your 30-day free trial</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>


`;

const PricingPage = () => {
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
                title="LivePerson Pricing & Packaging | LivePerson"
                description="Explore LivePerson pricing and packaging designed to help you drive an automation-first customer engagement transformation."
                meta={meta}
                canonical="https://www.liveperson.com/pricing"
                robots=""
            />

            {Parser(htmlHack1)}
        </Layout>
    );
};

export default PricingPage;
