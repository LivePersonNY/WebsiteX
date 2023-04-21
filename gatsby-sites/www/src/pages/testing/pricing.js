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

<div class="pane">
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
