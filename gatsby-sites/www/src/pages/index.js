import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ScrollFeatures from '../components/ScrollFeatures';
import Parser from 'html-react-parser';
//import $ from 'jquery';

// Bootstrap carousel, separate images, opposite directions

const htmlHack1 = `
<div class="pane hero bg-neutral-96 styles-2023 ">
                <div class="container" >
                    <div class="row text-center">
                        <div class="col-lg-8 offset-lg-2">
                        <p class="h6 text-uppercase">LivePerson Conversational Cloud® Platform</p>
                            <h1>Finally. Safe, equal A<span class="space-mono">I</span> for everyone.</h1>
                            <p data-tag="new line split" class="lead">Combining the power of the world's largest conversational dataset, with decades of experience and a legacy of trust, to deliver safer, more secure AI experiences.</p>
                            <a class="btn btn-primary link" href="/request-demo/">Schedule a guided demo</a>
                            <p style="margin-top:20px;margin-right:24px;">
								<a class="link" href="https://www.getbella.ai/" target="_blank">Build your no-code bot</a>
							</p>
                        </div>
                    </div>
                    <div class="row align-items-center justify-content-center">
                      <div class="col-lg-12" style="margin-top:48px;">
                        <div class="vimeoContainer"><iframe src="https://player.vimeo.com/video/819205374?h=5e1c30c30b&badge=0&autopause=0&player_id=0&app_id=58479%22%20frameborder=%220%22%20allow=%22autoplay;%20fullscreen;%20picture-in-picture%22%20allowfullscreen%20style=%22position:absolute;top:0;left:0;width:100%;height:100%" class="vimeoFrame"></iframe></div>

                      </div>
                    </div>
                </div>

</div>



<div data-localize="false" class="pane comp-logo-universal bg-neutral-96 pane-with-lead-text">
  <div class="container" >
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <h2 class="text-center">Trusted by <s>thousands</s> of the world's biggest brands</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-evenly flex-wrap">
        <img class="" src="https://static.liveperson.com/static-assets/2023/01/19112733/Homepage_Logo-Bar_Burberry_JV_0117.svg" alt="">
        <img class="" src="https://static.liveperson.com/static-assets/2023/01/19112734/Homepage_Logo-Bar_Virgin-Media-O2_JV_0117.svg" alt="">
        <img class="" src="https://static.liveperson.com/static-assets/2023/01/17144626/NatWest_JV_0117.svg" alt="">
        <img class="" src="https://static.liveperson.com/static-assets/2023/01/05151516/The-RealReal_40px.png" alt="">
        <img class="" src="https://static.liveperson.com/static-assets/2022/12/13163535/GM-Financial_40px.png" alt="">
        <img class="" src="https://static.liveperson.com/static-assets/2022/02/11145100/ConSensys.svg" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10 offset-lg-1 text-center">
        <a class="link" href="/resources/success-stories/">Read their stories</a>
      </div>
    </div>
  </div>
</div>

<div data-localize="false" class="pane comp-side-side bg-transparent">
  <div class="container" >
    <div class="row comp-side-side-header">
      <div class="col-lg-12">
        <h2 class="text-center">Generative AI enhanced and trained just for you</h2>
        <p class="text-center">Unlock the power of large language models to meet the needs of your business, regardless of department or industry.</p>
      </div>
    </div>
    <div class="row">
		<div class="col-lg-6 ">
			<img src="https://static.liveperson.com/static-assets/2023/02/14143029/Homepage_Purpose.4_Responsible_JV_0213%402x-1.png" alt="Human + virtual assistant hands, illustrating how we work to reduce bias in artificial intelligence technology via machine-learning, natural language processing, etc.">
			<h3>Responsible AI from day one</h3>
			<p>Reduce risk of bias by partnering with the founders of EqualAI, spearheading standards and certifications for responsible AI since 2018.</p>
		</div>
      <div class="col-lg-6 ">
        <img src="https://static.liveperson.com/static-assets/2023/02/14143021/Homepage_Purpose.2_Human_JV_0213%402x-1.png" alt="Customer service agents helping improve machine-learning models in our conversational ai technology">
        <h3>Human optimization at scale</h3>
        <p>Keep conversations grounded, factual, and relevant to your industry with over 350K skilled humans in the loop, enhancing models continuously.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 ">
        <img src="https://static.liveperson.com/static-assets/2023/02/14143025/Homepage_Purpose.3_Impactful_JV_0213%402x-1.png" alt="Conversational AI platform illustration of conversational intelligence over desktop, voice, and messaging apps">
        <h3>Impactful insights made easy</h3>
        <p>Accelerate better decision making with access to enterprise-level analytics and reporting that surfaces actionable insights automatically.</p>
      </div>
	  <div class="col-lg-6 ">
        <img src="https://static.liveperson.com/static-assets/2023/02/14143017/Homepage_Purpose.1_Unrivaled_JV_0213%402x-1.png" alt="Screen illustrating the volume of customer interactions in our conversational ai platforms">
        <h3>Unrivaled data at your fingertips</h3>
        <p>Augment large language models with the world’s largest enterprise data set for more precise natural language processing, drawn from more than a billion monthly conversational interactions.</p>
      </div>
    </div>
  </div>
</div>

<div data-localize="false" class="pane comp-content-cta bg-transparent pane-with-lead-text">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="comp-content-cta-container bg-neutral-96">
          <div class="row align-items-center text-center text-lg-start">
            <div class="col-lg-6 offset-lg-1">
              <h2>Want to learn more? Visit the LivePerson AI Hub</h2>
            </div>
            <div class="col-lg-3 offset-lg-1 text-lg-end">
              <a class="btn btn-primary" href="/ai/resources/">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="pane comp-stat-grid bg-lavendar-20 pane-with-lead-text">
  <div class="container" >
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center">Achieve better business outcomes through the power of AI</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="comp-4col-grid text-center">
          <div class="row row-cols-lg-5 row-cols-2">
            <div class="col">
              <p class="h1">30%</p>
              <p class="subtitle2">reduction in operating costs</p>
            </div>
            <div class="col">
              <p class="h1">90%</p>
              <p class="subtitle2">automation rate</p>
            </div>
            <div class="col">
              <p class="h1">25%</p>
              <p class="subtitle2">boost in customer satisfaction</p>
            </div>
            <div class="col">
              <p class="h1">10x</p>
              <p class="subtitle2">conversion vs traditional digital</p>
            </div>
            <div class="col">
              <p class="h1">50%</p>
              <p class="subtitle2">decrease in agent attrition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12"></div>
    </div>
  </div>
</div>


<div data-localize="false" class="pane comp-plain-content bg-transparent text-left pane-with-lead-text">
  <div class="container" style="opacity: 0;">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-12">
        <p class="h6">LIVEPERSON CONVERSATIONAL CLOUD®</p>
        <h2>Explore our award-winning<br /><s>Conversational AI</s> platform</h2>
      </div>
    </div>
  </div>
</div>

<div class="pane bg-transparent comp-left-right">
	<div class="container" >
		<div class="row align-items-center">
			<div class="col-lg-6 ">
				<img src="https://static.liveperson.com/static-assets/2023/04/25160729/Homepage_Pillar.1_KnowledgeAI_JV_0424_2x.png" alt="Knowledge base for our Conversational AI platform loading a PDF for training virtual assistants, using natural language understanding">
			</div>
			<div class="col-lg-6 ">
				<p class="h6 text-uppercase">KNOWLEDGE AI</p>
				<h3>LLM-powered data ingestion</h3>
					<div class="rich-container">
						<p data-tag="new line split">Automatically upload web pages, PDFs, FAQs, documentation and other knowledge sources to curate the most relevant content with faster response times. Data is protected by our enterprise grade safety controls, which help you build trust, ensure compliance and properly represent your brand.</p>
					</div>
			</div>
		</div>
	</div>
</div>

<div class="pane bg-transparent comp-left-right">
	<div class="container" >
		<div class="row align-items-center">
			<div class="col-lg-6 ">
				<img src="https://static.liveperson.com/static-assets/2023/04/25160735/Homepage_Pillar.2_GenerativeAI_JV_0424_2x-1.png" alt="voice assistants listening to human conversation and transcribing it to text, a new conversational ai tool for enterprise conversational ai platforms">
			</div>
			<div class="col-lg-6 ">
				<p class="h6 text-uppercase">GENERATIVE AI</p>
				<h3>LLM-powered conversations</h3>
					<div class="rich-container">
						<p data-tag="new line split">Safely unlock the power of large language models to automate conversations across voice and messaging channels.  Conversation Copilot arms human experts with LLM-powered tools to boost productivity, while Conversation Autopilot creates warm, natural automated interactions. </p>
					</div>
				<a class="btn btn-link" href="/products/generative-ai/">Learn more about Generative AI</a>
			</div>
		</div>
	</div>
</div>

<div class="pane bg-transparent comp-left-right">
	<div class="container" >
		<div class="row align-items-center">
			<div class="col-lg-6 ">
				<img src="https://static.liveperson.com/static-assets/2023/04/25160742/Homepage_Pillar.3_BellaAI_JV_0424_2x-1.png" alt="Bella AI creating new virtual assistants for a business via conversational interfaces">
			</div>
			<div class="col-lg-6 ">
				<p class="h6 text-uppercase">BELLA AI</p>
				<h3>Your safe AI assistant</h3>
					<div class="rich-container">
						<p data-tag="new line split">Build a safe, automated concierge in the time it takes to make a cup of coffee. Streamline, test, and deploy bot-led conversations with a new LLM-powered Conversational bot-building interface.</p>
					</div>
				<a class="btn btn-link" href="/products/bella-ai/">Learn more about Bella AI</a>
			</div>
		</div>
	</div>
</div>

<div class="pane bg-transparent comp-left-right">
	<div class="container" >
		<div class="row align-items-center">
			<div class="col-lg-6 ">
				<img src="https://static.liveperson.com/static-assets/2023/04/25160748/Homepage_Pillar.4_Intelligence-Actions_JV_0424_2x-1.png" alt="Conversational AI platform's intelligence dashboard, providing insights to human agents">
			</div>
			<div class="col-lg-6 ">
				<p class="h6 text-uppercase">INTELLIGENCE AND ACTIONS</p>
				<h3>Conversational Insights</h3>
					<div class="rich-container">
						<p data-tag="new line split">Measure the usage and effectiveness of LLM-powered features through an innovative dashboard, enabling you to understand and optimize performance.</p>
					</div>
				<a class="btn btn-link" href="/products/conversational-intelligence/">Learn more about Conversational Intelligence</a>
			</div>
		</div>
	</div>
</div>

<div data-localize="false" class="pane comp-content-cta bg-transparent pane-with-lead-text">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="comp-content-cta-container bg-neutral-96">
          <div class="row align-items-center text-center text-lg-start">
            <div class="col-lg-8 offset-lg-1">
              <h2>Take a deeper look at the Conversational Cloud</h2>
            </div>
            <div class="col-lg-2 offset-lg-1">
              <a class="btn btn-primary" href="/products/conversational-cloud/">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


`;

const htmlHack2 = `

<div class=" pane comp-icon-text-a bg-blue-20 pane-with-lead-text">
	<div class="container" >
		<div class="row">
			<div class="col-lg-10 offset-lg-1">
				<h2 class="text-center">Trustworthy AI for everyone — no matter your role or interest</h2>
			</div>
		</div>
		<div class="row row-cols-lg-3 row-cols-1 comp-block-grid-container">
			<div class="col">
				<img src="https://static.liveperson.com/static-assets/2022/02/02002127/icon-security-scan_circle-white.svg" alt="">
				<p class="card1">Customer engagement</p>
				<p class="subtitle1" data-tag="new line split">Provide care, sales, and marketing teams with critical insights and actions, all in one place.</p>
			</div>
			<div class="col">
				<img src="https://static.liveperson.com/static-assets/2022/02/02001913/icon-multi-language-support_circle-white.svg" alt="">
				<p class="card1">Employee engagement</p>
				<p class="subtitle1" data-tag="new line split">Automate employee experiences by ingesting your IT and HR documents, FAQs and standards, with the click of a button.</p>
			</div>
			<div class="col">
				<img src="https://static.liveperson.com/static-assets/2022/02/02001916/icon-messaging-channels_circle-white.svg" alt="">
				<p class="card1">Brand user insights</p>
				<p class="subtitle1" data-tag="new line split">Aggregate, measure, and analyze your conversational data for all departments across your business, like legal, engineering, and marketing.</p>
			</div>
		</div>
	</div>
</div>


<div data-localize="false" class="pane comp-card-grid bg-transparent pane-with-lead-text">
  <div class="container" style="opacity: 0;">
    <div class="row">
      <div class="col-lg-10">
        <h2 class="">See success stories from leaders <s>like&nbsp;you</s>
        </h2>
      </div>
    </div>
    <div class="row comp-card-grid-container">
      <div class="col-lg" id="0">
        <div class="card h-100">
          <div class="card-body">
            <img class="card-image-internal" src="https://static.liveperson.com/static-assets/2023/04/26161110/Homepage_Testimonial-1_TalkTalk_JV_0426.svg" alt="Bhavesh Panchal, Head of Channels and Digital Adoption">
            <p class="card-text quote1">“On top of our successes to date with LivePerson’s Conversational AI and platform, LLMs and generative AI hold enormous promise to help us scale seamless and personalized conversations even further.”</p>
          </div>
          <div class="card-footer">
            <a href="https://pr.liveperson.com/2023-04-25-LivePerson-upgrades-its-Conversational-Cloud-platform-with-trustworthy-AI-capabilities-to-redefine-how-businesses-put-Generative-AI-and-LLMs-to-work" target="_blank" class="card-link link">Read more in the press release</a>
          </div>
        </div>
      </div>
      <div class="col-lg" id="1">
        <div class="card h-100">
          <div class="card-body">
            <img class="card-image-internal" src="https://static.liveperson.com/static-assets/2023/04/25160754/Homepage_Testimonial-2_CarGurus_JV_0424.svg" alt="Rhett Batchelder, Senior manager, product operations">
            <p class="card-text quote1">“LivePerson’s omni-channel communication capabilities drive a better customer experience, while also improving agent efficiency. This, combined with LivePerson’s analytics tools and user-friendly platform, support CarGurus’ mission in providing drivers with a personalized, convenient, and transparent experience.”</p>
          </div>
          <div class="card-footer">
            <a href="/resources/customers/" class="card-link link">See other quotes like this</a>
          </div>
        </div>
      </div>
      <div class="col-lg" id="2">
        <div class="card h-100">
          <div class="card-body">
            <img class="card-image-internal" src="https://static.liveperson.com/static-assets/2023/01/19141426/Homepage_Testimonial-3_Chipotle_JV_0119.svg" alt="Nicole West, VP Digital Strategy &amp; Product at Chipotle">
            <p class="card-text quote1">“Everything we have done on this transformation journey has been about delivering exceptional digital experiences to our customers and our crews, to curate convenient, frictionless, engaging experiences aligned with our purpose to Cultivate a Better World.”</p>
          </div>
          <div class="card-footer">
            <a href="https://pr.liveperson.com/index.php?s=43&amp;item=620" class="card-link link" target="_blank" rel="noopener noreferrer">See the press release</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div data-localize="false" class="pane comp-card-grid-b bg-neutral-96 pane-with-lead-text">
  <div class="container" style="opacity: 0;">
    <div class="row text-center">
      <div class="col-lg-8 offset-lg-2">
        <h2 class="">Recommended resources</h2>
      </div>
    </div>
    <div class="row comp-card-grid-container">
      <div class="col-12 col-lg">
        <div class="card card-b h-100">
          <img class="card-img-top" src="https://static.liveperson.com/static-assets/2023/01/19181605/Homepage_Resource-1_What-is-Convo-AI-Vid_JV_0119.png" alt="Conversational AI platform video thumbnail">
          <div class="card-body">
            <p class="card-title card2">Break out the&nbsp;popcorn</p>
            <p class="card-text subtitle1">Cue the movie montage of what’s new in Conversational AI and our customer engagement platform.</p>
          </div>
          <div class="card-footer">
            <a href="https://player.vimeo.com/video/790194906?h=b13442a2ee&badge=0&autopause=0&player_id=0&app_id=58479" class="card-link link" target="_blank" rel="noopener noreferrer">Take a look</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg">
        <div class="card card-b h-100">
          <img class="card-img-top" src="https://static.liveperson.com/static-assets/2022/03/04094728/blog-CHintro-hi-res.jpg" alt="Conversational AI platform example of messaging with an AI chatbot">
          <div class="card-body">
            <p class="card-title card2">Check out more&nbsp;content</p>
            <p class="card-text subtitle1">Take a scroll through our most-read blogs, infographics, and other customer engagement software resources.</p>
          </div>
          <div class="card-footer">
            <a href="/blog/" class="card-link link">Take me there</a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg">
        <div class="card card-b h-100">
          <img class="card-img-top" src="https://static.liveperson.com/static-assets/2022/08/12123540/Liveperson_NYC_2022_165-e1674149080777.jpg" alt="LivePerson executive event">
          <div class="card-body">
            <p class="card-title card2">Get on the guest&nbsp;list</p>
            <p class="card-text subtitle1">Score an exclusive invite to one of our one-of-a-kind industry events.</p>
          </div>
          <div class="card-footer">
            <a href="/events/" class="card-link link">Sign me up!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class=" pane comp-icon-text-b bg-transparent">
	<div class="container" >
		<div class="row row-cols-lg-2 comp-card-grid-container">
			<div class="col">
				<div class="card h-100">
					<div class="card-body">
						<h3 class="">See how LivePerson AI can deliver real-world results</h3>
					</div>
					<div class="card-footer">
						<a href="/request-demo/" class="card-link link">Schedule a guided demo</a>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card h-100">
					<div class="card-body">
						<h3 class=""> Get your Bella AI free 30-day trial now</h3>
					</div>
					<div class="card-footer">
						<a href="https://www.getbella.ai/" target="_blank" class="card-link link">Build your no-code bot</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

`;

const HP2023 = () => {
    useEffect(() => {
        var slides = document.querySelectorAll(
            '#hp-hero-img-carousel.carousel .carousel-item, #hp-hero-img-carousel-reverse.carousel .carousel-item'
        );

        slides.forEach((el) => {
            // number of slides per carousel-item
            const minPerSlide = slides.length;
            let next = el.nextElementSibling;
            // for (var i=1; i<minPerSlide; i++) {
            //     if (!next) {
            //         // wrap carousel by using first child
            //         next = slides[0]
            //     }
            //     let cloneChild = next.cloneNode(true)
            //     el.appendChild(cloneChild.children[0])
            //     next = next.nextElementSibling
            // }
            if (!next) {
                // wrap carousel by using first child
                next = slides[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;

            let prev = el.previousElementSibling;
            if (!prev) {
                // wrap carousel by using first child
                prev = slides[0];
            }
            let cloneChild2 = prev.cloneNode(true);
            el.prepend(cloneChild2.children[1]);
            prev = prev.previousElementSibling;
        });

        return () => {};
    });

    let meta = [
        {
            property: `og:title`,
            content: 'The Best Conversational AI Platform | LivePerson' || ``,
        },
        {
            property: `og:image`,
            content: `https://static.liveperson.com/static-assets/2023/04/26161105/Homepage_Meta-Tag_JV_0426.png`,
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
            content: `https://static.liveperson.com/static-assets/2023/04/26161105/Homepage_Meta-Tag_JV_0426.png`,
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
                title="The Best Conversational AI Platform | LivePerson"
                description="LivePerson’s Conversational AI platform helps enterprises unlock the power of large language models for better business outcomes."
                meta={meta}
                canonical="https://www.liveperson.com/"
                robots=""
            />

            {Parser(htmlHack1)}

            {/* <ScrollFeatures
                scrollHeight="125vh"
                backgroundColor="bg-neutral-96"
                items={[
                    {
                        imgSrc: 'https://static.liveperson.com/static-assets/2023/02/14151042/Homepage_Pillar.1_Automate_JV_0210_2x.png',
                        imgAlt: 'Conversational Ai platform for building and tuning virtual assistants, including advanced dialogue management',
                        cardTitle: 'Conversational AI + AUTOMATION',
                        cardHeading: 'Automate',
                        cardContent:
                            'Automate conversations across voice and messaging channels with AI built on the world’s largest data set of enterprise customer interactions.',
                        linkHref: '/products/conversational-cloud/',
                        linkText: 'Learn more',
                    },
                    {
                        imgSrc: 'https://static.liveperson.com/static-assets/2023/02/14151048/Homepage_Pillar.2_Optimize_JV_0210_2x.png',
                        imgAlt: 'Conversational intelligence dashboard, part of our conversational ai solutions',
                        cardTitle: 'conversational intelligence',
                        cardHeading: 'Optimize',
                        cardContent:
                            'Turn insight into action. Access and analyze all your data to understand what customers want — and feel — to increase sales, fix inefficiencies, and improve experiences.',
                        linkHref: '/products/conversational-intelligence/',
                        linkText: 'Learn more',
                    },
                    {
                        imgSrc: 'https://static.liveperson.com/static-assets/2023/02/14151053/Homepage_Pillar.3_Manage_JV_0210_2x.png',
                        imgAlt: 'Conversational interface for customer service agents and managers',
                        cardTitle: 'Agent & supervisor experience',
                        cardHeading: 'Manage',
                        cardContent:
                            'Give agents and supervisors a 360-degree, omni-channel view of the customer. Supercharge productivity with the power of AI to improve employee experience and reduce attrition.',
                        linkHref: '/products/conversation-manager/',
                        linkText: 'Learn more',
                    },
                    {
                        imgSrc: 'https://static.liveperson.com/static-assets/2023/02/14151059/Homepage_Pillar.4_Configure_JV_0210_2x.png',
                        imgAlt: 'Integrations for our conversational ai platform',
                        cardTitle: 'platform & integrations',
                        cardHeading: 'Configure',
                        cardContent:
                            'Bring LivePerson’s AI platform and your existing systems — from CRMs to marketing to data platforms — together to unlock their full potential across your enterprise.',
                        linkHref: '/products/integrations/',
                        linkText: 'Learn more',
                    },
                    {
                        imgSrc: 'https://static.liveperson.com/static-assets/2023/02/14151103/Homepage_Pillar.5_Engage_JV_0210_2x.png',
                        imgAlt: 'Conversational AI examples of how our platform works across voice and messaging apps for a better customer experience',
                        cardTitle: 'communication channels',
                        cardHeading: 'Engage',
                        cardContent:
                            'Increase customer satisfaction by making it easy for them to engage with your brand in the communication channels they use every day.',
                        linkHref: '/products/messaging-channels/',
                        linkText: 'Learn more',
                    },
                ]}
            /> */}

            {Parser(htmlHack2)}
        </Layout>
    );
};

export default HP2023;
