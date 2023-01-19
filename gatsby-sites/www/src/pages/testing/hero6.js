import * as React from 'react';
import { useEffect } from 'react';
import CardGridB from '../../components/blocks/CardGridB';
import Hero from '../../components/blocks/Hero';
import PlainContent from '../../components/blocks/PlainContent';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import NotFoundPage from '../404';
//import $ from 'jquery';

// Bootstrap carousel, separate images, opposite directions

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
    });

    return (
        <Layout mainClass="hp-2023">
            <Seo
                title="Hero6 | LivePerson"
                description=""
                robots="noindex, nofollow"
            />

            <Hero
                kicker="This is kicker"
                header="here is the header adding more content <s>here to</s> test animatedText out and see what happens"
                subHeader="here is the sub header content"
                // animatedText="one, two, three"
            />

            <PlainContent
                kicker="This is kicker"
                header="here is the header adding more content <s>here to</s> test animatedText out and see what happens"
                animatedText="one, two, three"
            />

            <div className="pane hero bg-neutral-96 ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <h1>
                                Make
                                <div
                                    id="hp-hero-text-carousel-testtest"
                                    className="carousel slide carousel-fade vertical"
                                    data-bs-ride="carousel"
                                    data-bs-pause="false"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <span> shoppers </span>
                                        </div>
                                        <div className="carousel-item">
                                            <span> travelers </span>
                                        </div>
                                        <div className="carousel-item">
                                            <span> guests </span>
                                        </div>
                                        <div className="carousel-item">
                                            <span> clients </span>
                                        </div>
                                        <div className="carousel-item">
                                            <span> customers </span>
                                        </div>
                                        <div className="carousel-item">
                                            <span> members </span>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                feel human.
                            </h1>
                            <p data-tag="new line split">
                                Our AI-powered Conversational Cloud© makes every
                                user feel seen, heard, and valued.
                            </p>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <div
                                id="hp-hero-img-carousel"
                                className="carousel slide vertical vertical-double"
                                data-bs-ride="carousel"
                                data-bs-pause="false"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/1-Retail_1x-avatar.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/2-Airlines_1x-avatar.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/3-Hospitality_1x-avatar.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/4-FinServ_1x-avatar.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/5-Telco_1x-avatar.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/6-Insurance_1x-avatar.png" />
                                    </div>
                                </div>
                            </div>

                            <div
                                id="hp-hero-img-carousel-reverse"
                                className="carousel slide vertical vertical-reverse vertical-double"
                                data-bs-ride="carousel"
                                data-bs-pause="false"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/1-Retail_1x-ui.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/2-Airlines_1x-ui.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/3-Hospitality_1x-ui.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/4-FinServ_1x-ui.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/5-Telco_1x-ui.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://lp-site.s3.amazonaws.com/web2023/img/6-Insurance_1x-ui.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CardGridB
                backgroundColor="bg-neutral-92"
                header="Gratitude going both ways"
                body="We love our people. And it turns out, they love working here. In fact, we were just added to Newsweek’s Most-Loved Workplaces list — the top 100 companies that get recognized for employee happiness and satisfaction at work. We’ve also been awarded the world’s top honors for innovation, artificial intelligence, and customer service and sales technology."
                items={[
                    {
                        imgSrc: 'https://static.liveperson.com/static-assets/2022/06/06133936/FC-2022_Careers-2x.png',
                        imgAlt: 'Alt text',
                        cardTitle: 'Most Innovative Companies',
                    },
                    {
                        imgSrc: 'https://static.liveperson.com/static-assets/2022/02/08142540/61708951d071150efe0af3f0_AmericaLPWork.png',
                        imgAlt: 'Alt text',
                        cardTitle: "America's Most Loved Workplaces",
                    },
                    {
                        imgSrc: 'https://static.liveperson.com/static-assets/2022/02/08142541/61708911126dfaf6f0b16d2c_IsraelBestPlacesToWork.png',
                        imgAlt: 'Alt text',
                        cardTitle: 'Israel: Best Places to Work',
                    },
                    {
                        imgSrc: 'https://static.liveperson.com/static-assets/2022/02/08142542/616e08d83f886e243d3c7caa_germany_great_place.jpg',
                        imgAlt: 'Alt text',
                        cardTitle: 'Germany: Great Place to Work',
                    },
                ]}
            />
        </Layout>
    );
};

export default Hero6;
