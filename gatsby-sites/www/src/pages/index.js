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
                <div class="container" style="opacity: 1;">
                    <div class="row text-center">
                        <div class="col-lg-8 offset-lg-2">
                        <p class="h6 text-uppercase">LivePerson conversational ai platform</p>
                            <h1>A<span class="space-mono">I</span> for better<br />business outcomes</h1>
                            <p data-tag="new line split" class="lead">
                                Powered by the world’s largest data set of conversational interactions, continuously optimized by hundreds of thousands of human experts
</p>
<a class="btn btn-primary link" href="/request-demo/">Let's talk</a>
                        </div>
                    </div>
                </div>
                <div class="container-fluid hero-carousel" style="opacity: 1;">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div id="hp-hero-img-carousel" class="carousel slide" data-bs-ride="false" data-bs-pause="false">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="8000">
                                        <div class="carousel-content">
                                            <img src="https://static.liveperson.com/static-assets/2023/02/14114004/Homepage_Hero_Carousel-1_Convo-Intelligence_JV_0210_1x.png" alt="Screenshots from LivePerson's powerful Conversational AI platform, showcasing its artificial intelligence technology and conversational intelligence">
                                            <div class="carousel-caption">
                                                <p>Access and analyze conversation data in real time</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <div class="carousel-content">
                                            <img src="https://static.liveperson.com/static-assets/2023/02/14113959/Homepage_Hero_Carousel-2_Convo-Builder_JV_0210_1x.png" alt="Screenshot of how you can create bots to work on conversational platforms and help answer customer questions">
                                            <div class="carousel-caption">
                                                <p>Design, build, and integrate bots</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <div class="carousel-content">
                                            <img src="https://static.liveperson.com/static-assets/2023/02/14113955/Homepage_Hero_Carousel-3_Intent-Analyzer_JV_0210_1x.png" alt="Screenshot of intent analyzer that uses natural language processing for smarter bots">
                                            <div class="carousel-caption">
                                                <p>Understand customer intent and sentiment in every conversation</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <div class="carousel-content">
                                            <img src="https://static.liveperson.com/static-assets/2023/02/14113950/Homepage_Hero_Carousel-4_MACS_JV_0210_1x.png" alt="Screenshot of conversational intelligence and analytics side of our conversational ai platform">
                                            <div class="carousel-caption">
                                                <p>Measure the quality of every bot conversation</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-indicators">
                                  <button type="button" data-bs-target="#hp-hero-img-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                  <button type="button" data-bs-target="#hp-hero-img-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                  <button type="button" data-bs-target="#hp-hero-img-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                  <button type="button" data-bs-target="#hp-hero-img-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#hp-hero-img-carousel" data-bs-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#hp-hero-img-carousel" data-bs-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



<div data-localize="false" class="pane comp-logo-universal bg-neutral-96 pane-with-lead-text">
  <div class="container" style="opacity: 1;">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <h2 class="text-center">Trusted by <s>thousands</s> of the world's biggest brands</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-evenly flex-wrap">
        <img class="" src="https://static.liveperson.com/static-assets/2023/01/19112733/Homepage_Logo-Bar_Burberry_JV_0117.svg" alt="">
        <img class="" src="https://static.liveperson.com/static-assets/2023/01/19112734/Homepage_Logo-Bar_Virgin-Media-O2_JV_0117.svg" alt="">
        <img class="" src="https://static.liveperson.com/static-assets/2022/12/13163539/PNC_40px.svg" alt="">
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
  <div class="container" style="opacity: 1;">
    <div class="row comp-side-side-header">
      <div class="col-lg-12">
        <h2 class="text-center">Conversational AI purpose-built for the enterprise</h2>
        <p class="text-center">Unlock the power of large language models to meet the needs of your business.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 ">
        <img src="https://static.liveperson.com/static-assets/2023/02/14143017/Homepage_Purpose.1_Unrivaled_JV_0213%402x-1.png" alt="Screen illustrating the volume of customer interactions in our conversational ai platforms">
        <h3>Unrivaled data at your fingertips</h3>
        <p>Augment large language models with the world’s largest conversational data set, drawn from a billion monthly interactions.</p>
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
        <p>Accelerate better decision making with access to enterprise-level analytics and reporting that delivers actionable insights automatically.</p>
      </div>
      <div class="col-lg-6 ">
        <img src="https://static.liveperson.com/static-assets/2023/02/14143029/Homepage_Purpose.4_Responsible_JV_0213%402x-1.png" alt="Human + virtual assistant hands, illustrating how we work to reduce bias in artificial intelligence technology via machine-learning, natural language processing, etc.">
        <h3>Responsible AI from day one</h3>
        <p>Reduce risk of bias by partnering with the founders of EqualAI, spearheading standards and certification for responsible AI since 2018.</p>
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
  <div class="container" style="opacity: 1;">
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


<div data-localize="false" class="pane comp-plain-content bg-neutral-96 text-left pane-with-lead-text">
  <div class="container" style="opacity: 0;">
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-12">
        <p class="h6">LIVEPERSON CONVERSATIONAL CLOUD®</p>
        <h2>Explore our award-winning<br /><s>Conversational AI</s> platform</h2>
      </div>
    </div>
  </div>
</div>


`;

const htmlHack2 = `

<div data-localize="false" id="tab-a" class="pane comp-tabs-a bg-neutral-96 pane-with-lead-text">
  <div class="container" style="opacity: 0;">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-center">Deliver real-world results by use case</h2>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-4">
        <div class="comp-content-container">
          <div class="accordion accordion-flush" id="tab-a_accordion_tabs">
            <div class="accordion-item accordion-item-active">
              <h4 class="accordion-header" id="tab-a_flush-heading0">
                <button class="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tab-a_flush-collapse0" aria-expanded="false" aria-controls="tab-a_flush-collapse0" data-tab="0">Reduce call volume and operating costs</button>
              </h4>
              <div id="tab-a_flush-collapse0" class="accordion-collapse collapse show" aria-labelledby="tab-a_flush-heading0" data-bs-parent="#tab-a_accordion_tabs">
                <p class="subtitle1" data-tag="br split">Turn woes into wows by shifting to messaging channels.</p>
                <p class="subtitle1" data-tag="br split">
                  <a href="/products/call-to-message/">Explore call reduction solutions</a>
                </p>
                <p class="subtitle1" data-tag="br split"></p>
              </div>
            </div>
            <div class="accordion-item ">
              <h4 class="accordion-header" id="tab-a_flush-heading1">
                <button class="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tab-a_flush-collapse1" aria-expanded="false" aria-controls="tab-a_flush-collapse1" data-tab="1">Better customer loyalty and support</button>
              </h4>
              <div id="tab-a_flush-collapse1" class="accordion-collapse collapse " aria-labelledby="tab-a_flush-heading1" data-bs-parent="#tab-a_accordion_tabs">
                <p class="subtitle1" data-tag="br split">Have customers swear by you, not at you.</p>
                <p class="subtitle1" data-tag="br split">
                  <a href="/solutions/customer-care/">Explore conversational customer service solutions</a>
                </p>
              </div>
            </div>
            <div class="accordion-item ">
              <h4 class="accordion-header" id="tab-a_flush-heading2">
                <button class="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tab-a_flush-collapse2" aria-expanded="false" aria-controls="tab-a_flush-collapse2" data-tab="2">Seamless shopping and increased revenue</button>
              </h4>
              <div id="tab-a_flush-collapse2" class="accordion-collapse collapse " aria-labelledby="tab-a_flush-heading2" data-bs-parent="#tab-a_accordion_tabs">
                <p class="subtitle1" data-tag="br split">Engage customers then click, ship, hooray!</p>
                <p class="subtitle1" data-tag="br split">
                  <a href="/solutions/conversational-commerce/">Explore conversational commerce solutions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7 offset-lg-1">
        <img class="comp-tabs-img " src="https://static.liveperson.com/static-assets/2023/01/18161855/Homepage_Integration-1_Call-Volume_JV_0117_1x.png" data-tab-content="0" alt="Conversational AI solutions: virtual assistants keeping customer updated about replacement bank card">
        <img class="comp-tabs-img display-none" src="https://static.liveperson.com/static-assets/2023/01/18161900/Homepage_Integration-2_Support_JV_0117_1x.png" data-tab-content="1" alt="Conversational AI examples: Conversational bot + customer service agents working together to help with billing questions">
        <img class="comp-tabs-img display-none" src="https://static.liveperson.com/static-assets/2023/01/18161903/Homepage_Integration-3_Convo-Ad_JV_0117_1x.png" data-tab-content="2" alt="Conversational AI examples: Social media messaging ad that drives into a messaging app to book a vacation.">
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
            <img class="card-image-internal" src="https://static.liveperson.com/static-assets/2023/01/19141424/Homepage_Testimonial-1_HSBC_JV_0119.svg" alt="Warren Buckley, Global Head of Channel Optimisation for HSBC">
            <p class="card-text quote1">“Being able to easily blend human empathy with intelligent automation has been crucial to our success. Our frontline team now can operate with increased agility to get our customers the resolutions they seek.”</p>
          </div>
          <div class="card-footer">
            <a href="/resources/success-stories/hsbc-goes-conversational/" class="card-link link">Read HSBC UK’s story</a>
          </div>
        </div>
      </div>
      <div class="col-lg" id="1">
        <div class="card h-100">
          <div class="card-body">
            <img class="card-image-internal" src="https://static.liveperson.com/static-assets/2023/01/19141425/Homepage_Testimonial-2_VirginO2_JV_0119.svg" alt="Chris Huggins, Head of Conversational Commerce for Virgin Media / O2">
            <p class="card-text quote1">“We’re using Conversational AI and AI chatbot automation to supercharge digital innovation and ease our customer’s path to purchase — it is quite an extraordinary thing.”</p>
          </div>
          <div class="card-footer">
            <a href="/resources/success-stories/virgin-media-conversational-selling/" class="card-link link">Read Virgin Media/O2’s story</a>
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


<div data-localize="false" class="pane comp-content-cta bg-transparent pane-with-lead-text">
  <div class="container" style="opacity: 0;">
    <div class="row">
      <div class="col-lg-12">
        <div class="comp-content-cta-container bg-neutral-96">
          <div class="row align-items-center text-center text-lg-start">
            <div class="col-lg-6 offset-lg-1">
              <h2>Get a personalized demo</h2>
              <p>Learn how the Conversational Cloud can deliver real-world results for your brand.</p>
            </div>
            <div class="col-lg-3 offset-lg-1 text-lg-end">
              <a class="btn btn-primary" href="/request-demo/">Get a demo</a>
            </div>
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
                title="The Best Conversational AI Platform | LivePerson"
                description="LivePerson’s Conversational AI platform helps enterprises unlock the power of large language models for better business outcomes."
                meta={meta}
                canonical="https://www.liveperson.com/"
                robots=""
            />

            {Parser(htmlHack1)}

            <ScrollFeatures
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
            />

            {Parser(htmlHack2)}
        </Layout>
    );
};

export default HP2023;
