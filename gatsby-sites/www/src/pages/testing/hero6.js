import * as React from 'react';
import { useEffect } from 'react';
import CardGridB from '../../components/blocks/CardGridB';
import Hero from '../../components/blocks/Hero';
import PlainContent from '../../components/blocks/PlainContent';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import ScrollFeatures from '../../components/ScrollFeatures';
import NotFoundPage from '../404';
import Parser from 'html-react-parser';
//import $ from 'jquery';

// Bootstrap carousel, separate images, opposite directions

const htmlHack1 = `
<div class="pane hero bg-neutral-96 hp-2023 ">
                <div class="container" style="opacity: 1;">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                        <p class="h6 text-uppercase">LIVEPERSON CUSTOMER ENGAGEMENT PLATFORM</p>
                            <h1>
                                AI that makes
                                <div id="hp-hero-text-carousel-testtest" class="carousel slide carousel-fade vertical animatedText-carousel" data-bs-ride="false" data-bs-pause="false">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" data-bs-interval="8000">
                                            <span> shoppers </span>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="8000">
                                            <span> travelers </span>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="8000">
                                            <span> guests </span>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="8000">
                                            <span> clients </span>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="8000">
                                            <span> customers </span>
                                        </div>
                                        <div class="carousel-item" data-bs-interval="8000">
                                            <span> members </span>
                                        </div>
                                    </div>
                                </div>
                                feel&nbsp;human.
</h1>
                            <p data-tag="new line split" class="lead">
                                Drive business outcomes while making every user feel seen, heard, and&nbsp;valued.
</p>
<a class="btn btn-primary" href="/request-demo/">Let’s talk</a>
                        </div>
                        <div class="col-lg-6 offset-lg-1">
                            <div id="hp-hero-img-carousel" class="carousel slide vertical vertical-double" data-bs-ride="false" data-bs-pause="false">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/6-Insurance_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/1-Retail_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/2-Airlines_1x-avatar.png">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/1-Retail_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/2-Airlines_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/3-Hospitality_1x-avatar.png">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/2-Airlines_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/3-Hospitality_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/4-FinServ_1x-avatar.png">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/3-Hospitality_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/4-FinServ_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/5-Telco_1x-avatar.png">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/4-FinServ_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/5-Telco_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/6-Insurance_1x-avatar.png">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/5-Telco_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/6-Insurance_1x-avatar.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/1-Retail_1x-avatar.png">
                                    </div>
                                </div>
                            </div>

                            <div id="hp-hero-img-carousel-reverse" class="carousel slide vertical vertical-reverse vertical-double" data-bs-ride="false" data-bs-pause="false">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/6-Insurance_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/1-Retail_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/2-Airlines_1x-ui.png">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/1-Retail_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/2-Airlines_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/3-Hospitality_1x-ui.png">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/2-Airlines_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/3-Hospitality_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/4-FinServ_1x-ui.png">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/3-Hospitality_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/4-FinServ_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/5-Telco_1x-ui.png">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/4-FinServ_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/5-Telco_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/6-Insurance_1x-ui.png">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="8000">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/5-Telco_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/6-Insurance_1x-ui.png">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/1-Retail_1x-ui.png">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



<div data-localize="false" class="pane comp-logo-universal bg-transparent pane-with-lead-text"><div class="container" style="opacity: 1;"><div class="row"><div class="col-lg-10 offset-lg-1"><h2 class="text-center">Trusted by <s>tens of thousands</s> of enterprises worldwide</h2></div></div><div class="row"><div class="col-lg-10 offset-lg-1 d-flex justify-content-evenly flex-wrap"><img class="" src="https://static.liveperson.com/static-assets/2023/01/19112733/Homepage_Logo-Bar_Burberry_JV_0117.svg" alt=""><img class="" src="https://static.liveperson.com/static-assets/2023/01/19112734/Homepage_Logo-Bar_Virgin-Media-O2_JV_0117.svg" alt=""><img class="" src="https://static.liveperson.com/static-assets/2023/01/17144626/NatWest_JV_0117.svg" alt=""><img class="" src="https://static.liveperson.com/static-assets/2023/01/05151516/The-RealReal_40px.png" alt=""><img class="" src="https://static.liveperson.com/static-assets/2022/12/13163535/GM-Financial_40px.png" alt=""><img class="" src="https://static.liveperson.com/static-assets/2022/02/11145100/ConSensys.svg" alt=""><img class="" src="https://static.liveperson.com/static-assets/2022/12/13163539/PNC_40px.svg" alt=""><img class="" src="https://static.liveperson.com/static-assets/2022/12/12140945/HSBC.svg" alt=""></div></div><div class="row"><div class="col-lg-10 offset-lg-1 text-center"><a class="link" href="https://www.liveperson.com/resources/success-stories/">Read their stories</a></div></div></div></div>



<div class="pane comp-stat-grid bg-lavendar-20 pane-with-lead-text"><div class="container" style="opacity: 1;"><div class="row"><div class="col-lg-12"><h2 class="text-center">Leaders <s>like you</s> see results&nbsp;like:</h2></div></div><div class="row"><div class="col-lg-12"><div class="comp-4col-grid text-center"><div class="row align-items-center row-cols-lg-5 row-cols-2"><div class="col"><p class="h1">30%+</p><p class="subtitle2">reduction in operating costs</p></div><div class="col"><p class="h1">90%+</p><p class="subtitle2">automation containment rate</p></div><div class="col"><p class="h1">25%+</p><p class="subtitle2">customer satisfaction boost</p></div><div class="col"><p class="h1">10x</p><p class="subtitle2">conversion vs. traditional digital</p></div><div class="col"><p class="h1">50%+</p><p class="subtitle2">decrease in agent&nbsp;attrition</p></div></div></div></div></div><div class="row"><div class="col-lg-12"></div></div></div></div>



<div data-localize="false" class="pane comp-plain-content bg-neutral-96 text-left pane-with-lead-text"><div class="container" style="opacity: 0;"><div class="row align-items-center justify-content-center"><div class="col-lg-12"><h2>Explore our <s>AI-powered</s><br>customer engagement platform</h2></div></div></div></div>



`;

const htmlHack2 = `

<div data-localize="false"  class="pane comp-plain-content bg-neutral-96 text-center pane-with-lead-text"><div class="container" style="opacity: 0;"><div class="row align-items-center justify-content-center"><div class="col-lg-10"><h2>Put <s>humans first</s> with the right&nbsp;AI</h2></div></div></div></div>



<div class="pane pane-blocks bg-neutral-96"><div class="container" style="opacity: 0;"><div class="row align-items-center justify-content-center"><div class="col-lg-10">
<div class="wp-block-image"><figure class="aligncenter size-full"><img loading="lazy" width="1240" height="765" src="https://static.liveperson.com/static-assets/2023/01/18161954/Homepage_Product-UI_Placeholder_JV_0117_1x.png" alt="Visual of LivePerson's customer engagement platform, featuring Conversational AI software" class="wp-image-14333" srcset="https://static.liveperson.com/static-assets/2023/01/18161954/Homepage_Product-UI_Placeholder_JV_0117_1x.png 1240w, https://static.liveperson.com/static-assets/2023/01/18161954/Homepage_Product-UI_Placeholder_JV_0117_1x-300x185.png 300w, https://static.liveperson.com/static-assets/2023/01/18161954/Homepage_Product-UI_Placeholder_JV_0117_1x-1024x632.png 1024w, https://static.liveperson.com/static-assets/2023/01/18161954/Homepage_Product-UI_Placeholder_JV_0117_1x-768x474.png 768w" sizes="(max-width: 1240px) 100vw, 1240px"></figure></div>
</div></div></div></div>



<div class="pane comp-stat-grid bg-transparent pane-with-lead-text"><div class="container" style="opacity: 0;"><div class="row"><div class="col-lg-12"><h2 class="text-center"><s>Trust and scale</s> your automation while delivering <br>the most accurate bot&nbsp;experience</h2></div></div><div class="row"><div class="col-lg-12"><div class="comp-4col-grid text-center"><div class="row align-items-center row-cols-lg-4 row-cols-2"><div class="col"><p class="h1">34 billion+</p><p class="subtitle2">API calls /&nbsp;month</p></div><div class="col"><p class="h1">~1 billion</p><p class="subtitle2">conversational interactions /&nbsp;month</p></div><div class="col"><p class="h1">100k+</p><p class="subtitle2">human experts on&nbsp;platform</p></div><div class="col"><p class="h1">70%+</p><p class="subtitle2">include automation vs. 46% industry avg</p></div></div></div></div></div><div class="row"><div class="col-lg-12"></div></div></div></div>



<div data-localize="false" id="tab-a" class="pane comp-tabs-a bg-neutral-96 pane-with-lead-text"><div class="container" style="opacity: 0;"><div class="row"><div class="col-lg-12"><h2 class="text-center">Deliver <s>personalized</s> experiences by use&nbsp;case</h2></div></div><div class="row align-items-center"><div class="col-lg-4"><div class="comp-content-container"><div class="accordion accordion-flush" id="tab-a_accordion_tabs"><div class="accordion-item accordion-item-active"><h4 class="accordion-header" id="tab-a_flush-heading0"><button class="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tab-a_flush-collapse0" aria-expanded="false" aria-controls="tab-a_flush-collapse0" data-tab="0">Reduce call volume + operating costs</button></h4><div id="tab-a_flush-collapse0" class="accordion-collapse collapse show" aria-labelledby="tab-a_flush-heading0" data-bs-parent="#tab-a_accordion_tabs"><p class="subtitle1" data-tag="br split">Turn woes into wows by shifting to&nbsp;messaging.</p><p class="subtitle1" data-tag="br split"><a href="https://www.liveperson.com/products/call-to-message/">Explore call reduction solutions</a></p><p class="subtitle1" data-tag="br split"></p></div></div><div class="accordion-item "><h4 class="accordion-header" id="tab-a_flush-heading1"><button class="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tab-a_flush-collapse1" aria-expanded="false" aria-controls="tab-a_flush-collapse1" data-tab="1">Better customer loyalty + support</button></h4><div id="tab-a_flush-collapse1" class="accordion-collapse collapse " aria-labelledby="tab-a_flush-heading1" data-bs-parent="#tab-a_accordion_tabs"><p class="subtitle1" data-tag="br split">Have customers swear by you, not at&nbsp;you.</p><p class="subtitle1" data-tag="br split"><a href="https://www.liveperson.com/solutions/customer-care/">Explore conversational customer service</a></p></div></div><div class="accordion-item "><h4 class="accordion-header" id="tab-a_flush-heading2"><button class="collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tab-a_flush-collapse2" aria-expanded="false" aria-controls="tab-a_flush-collapse2" data-tab="2">Seamless shopping + increased revenue</button></h4><div id="tab-a_flush-collapse2" class="accordion-collapse collapse " aria-labelledby="tab-a_flush-heading2" data-bs-parent="#tab-a_accordion_tabs"><p class="subtitle1" data-tag="br split">Engage customers, then clip, ship,&nbsp;hooray!</p><p class="subtitle1" data-tag="br split"><a href="https://www.liveperson.com/solutions/conversational-commerce/">Explore conversational commerce</a></p></div></div></div></div></div><div class="col-lg-7 offset-lg-1"><img class="comp-tabs-img " src="https://static.liveperson.com/static-assets/2023/01/18161855/Homepage_Integration-1_Call-Volume_JV_0117_1x.png" data-tab-content="0" alt="lost wallet illustrates how customer interactions via messaging can boost customer relationships in our customer engagement platform"><img class="comp-tabs-img display-none" src="https://static.liveperson.com/static-assets/2023/01/18161900/Homepage_Integration-2_Support_JV_0117_1x.png" data-tab-content="1" alt="Customer service reps using LivePerson's customer engagement platform to help with a billing issue"><img class="comp-tabs-img display-none" src="https://static.liveperson.com/static-assets/2023/01/18161903/Homepage_Integration-3_Convo-Ad_JV_0117_1x.png" data-tab-content="2" alt="Social media ad leads to travel booking via AI-powered messaging in our customer engagement platform"></div></div></div></div>



<div data-localize="false" class="pane comp-card-grid bg-transparent pane-with-lead-text"><div class="container" style="opacity: 0;"><div class="row"><div class="col-lg-10"><h2 class="">See success stories from leaders <s>just like&nbsp;you</s></h2></div></div><div class="row comp-card-grid-container"><div class="col-lg" id="0"><div class="card h-100"><div class="card-body"><img class="card-image-internal" src="https://static.liveperson.com/static-assets/2023/01/19141424/Homepage_Testimonial-1_HSBC_JV_0119.svg" alt="Warren Buckley, Global Head of Channel Optimisation for HSBC"><p class="card-text quote1">“Being able to easily blend human empathy with intelligent automation has been crucial to our success. Our frontline team now can operate with increased agility to get our customers the resolutions they&nbsp;seek.”</p></div><div class="card-footer"><a href="https://www.liveperson.com/resources/success-stories/hsbc-goes-conversational/" class="card-link link">Read HSBC UK’s story</a></div></div></div><div class="col-lg" id="1"><div class="card h-100"><div class="card-body"><img class="card-image-internal" src="https://static.liveperson.com/static-assets/2023/01/19141425/Homepage_Testimonial-2_VirginO2_JV_0119.svg" alt="Chris Huggins, Head of Conversational Commerce for Virgin Media / O2"><p class="card-text quote1">“With LivePerson, we maintain consistency in our customer engagement model, regardless of the channel that customer enters. Success hinges on the ability to augment our human customer service agents with AI and automation.”</p></div><div class="card-footer"><a href="https://www.liveperson.com/resources/success-stories/virgin-media-conversational-selling/" class="card-link link">Read Virgin Media/O2’s story</a></div></div></div><div class="col-lg" id="2"><div class="card h-100"><div class="card-body"><img class="card-image-internal" src="https://static.liveperson.com/static-assets/2023/01/19141426/Homepage_Testimonial-3_Chipotle_JV_0119.svg" alt="Nicole West, VP Digital Strategy &amp; Product at Chipotle"><p class="card-text quote1">“Everything we have done on this transformation journey has been about delivering exceptional digital experiences to our customers and our crews, to curate convenient, frictionless, engaging experiences aligned with our purpose to Cultivate a Better&nbsp;World.”</p></div><div class="card-footer"><a href="https://pr.liveperson.com/index.php?s=43&amp;item=620" class="card-link link" target="_blank" rel="noopener noreferrer">Read the press release</a></div></div></div></div></div></div>



<div data-localize="false" class="pane comp-card-grid-b bg-neutral-96 pane-with-lead-text"><div class="container" style="opacity: 0;"><div class="row text-center"><div class="col-lg-8 offset-lg-2"><h2 class="">You’ve come this&nbsp;far…</h2></div></div><div class="row comp-card-grid-container"><div class="col-12 col-lg"><div class="card card-b h-100"><img class="card-img-top" src="https://static.liveperson.com/static-assets/2023/01/19181605/Homepage_Resource-1_What-is-Convo-AI-Vid_JV_0119.png" alt="Video thumbnail talking about LivePerson's customer engagement platform, featuring Conversational AI"><div class="card-body"><p class="card-title card2">Break out the&nbsp;popcorn</p><p class="card-text subtitle2">Queue the movie montage of what’s new in Conversational AI and our customer engagement platform.</p></div><div class="card-footer"><a href="https://player.vimeo.com/video/790194906?h=b13442a2ee&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" class="card-link link" target="_blank" rel="noopener noreferrer">Take a look</a></div></div></div><div class="col-12 col-lg"><div class="card card-b h-100"><img class="card-img-top" src="https://static.liveperson.com/static-assets/2022/03/04094728/blog-CHintro-hi-res.jpg" alt="Curiously Human AI platform conversation example"><div class="card-body"><p class="card-title card2">Check out more&nbsp;content</p><p class="card-text subtitle2">Take a scroll through our most-read blogs, infographics, and other customer engagement software resources.</p></div><div class="card-footer"><a href="https://www.liveperson.com/blog/" class="card-link link">Take me there</a></div></div></div><div class="col-12 col-lg"><div class="card card-b h-100"><img class="card-img-top" src="https://static.liveperson.com/static-assets/2022/08/12123540/Liveperson_NYC_2022_165-e1674149080777.jpg" alt="LivePerson executive community gathering learning about our customer engagement platform"><div class="card-body"><p class="card-title card2">Get on the guest&nbsp;list</p><p class="card-text subtitle2">Score an exclusive invite to one of our one-of-a-kind industry events.</p></div><div class="card-footer"><a href="https://www.liveperson.com/events/" class="card-link link">Sign me up</a></div></div></div></div></div></div>



<div data-localize="false" class="pane comp-content-cta bg-transparent pane-with-lead-text"><div class="container" style="opacity: 0;"><div class="row"><div class="col-lg-12"><div class="comp-content-cta-container bg-neutral-96"><div class="row align-items-center text-center text-lg-start"><div class="col-lg-6 offset-lg-1"><h2>Learn how our AI-powered customer engagement platform can give your brand a CX&nbsp;makeover</h2></div><div class="col-lg-3 offset-lg-1 text-end"><a class="btn btn-primary" href="https://www.liveperson.com/roi">See the ROI</a></div></div></div></div></div></div></div>
`;

const Hero6 = () => {
    if (
        process.env.BRANCH != 'develop' &&
        process.env.GATSBY_IS_PREVIEW !== 'true'
    ) {
        return <NotFoundPage />;
    }

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

    return (
        <Layout>
            <Seo
                title="Hero6 | LivePerson"
                description=""
                robots="noindex, nofollow"
            />

            {Parser(htmlHack1)}

            <div className="bg-neutral-96">
                <ScrollFeatures
                    scrollHeight="135vh"
                    backgroundColor="bg-neutral-96"
                    items={[
                        {
                            imgSrc: 'https://via.placeholder.com/640/84ffcd/808080',
                            imgAlt: 'Alt text',
                            cardTitle: 'Conversational Intelligence',
                            cardHeading: 'Understand',
                            cardContent:
                                'Know exactly what your users want and how they feel to meet their needs better.',
                            linkHref: '#',
                            linkText: 'Learn more',
                        },
                        {
                            imgSrc: 'https://via.placeholder.com/640/84e8ff/808080',
                            imgAlt: 'Alt text',
                            cardTitle: 'Conversational AI + Automation',
                            cardHeading: 'Automate',
                            cardContent:
                                'Create hyper-personal automation that exceeds consumer expectations.',
                            linkHref: '#',
                            linkText: 'Learn more',
                        },
                        {
                            imgSrc: 'https://via.placeholder.com/640/ffc2e4/808080',
                            imgAlt: 'Alt text',
                            cardTitle: 'Agent + Manager Experience',
                            cardHeading: 'Manage',
                            cardContent:
                                'Empower your agents with an AI-augmented workspace that boosts productivity.',
                            linkHref: '#',
                            linkText: 'Learn more',
                        },
                        {
                            imgSrc: 'https://via.placeholder.com/640/fff7af/808080',
                            imgAlt: 'Alt text',
                            cardTitle: 'Platform + Integrations',
                            cardHeading: 'Configure',
                            cardContent:
                                'Integrate with the external systems to support unique business workflows.',
                            linkHref: '#',
                            linkText: 'Learn more',
                        },
                        {
                            imgSrc: 'https://via.placeholder.com/640/f7c077/808080',
                            imgAlt: 'Alt text',
                            cardTitle: 'Communication Channels',
                            cardHeading: 'Reach',
                            cardContent:
                                'Meet every user where they are, 24 hours a day, asynchronously.',
                            linkHref: '#',
                            linkText: 'Learn more',
                        },
                    ]}
                />
            </div>

            {Parser(htmlHack2)}
        </Layout>
    );
};

export default Hero6;
