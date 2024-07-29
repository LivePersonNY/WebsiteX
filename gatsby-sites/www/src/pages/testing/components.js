import * as React from 'react';
import { Link, graphql } from 'gatsby';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import LeftRight from '../../components/blocks/LeftRight';
import StatsGrid from '../../components/blocks/StatsGrid';
import CardGrid from '../../components/blocks/CardGrid';
import CalloutGrid from '../../components/blocks/CalloutGrid';
import Hero from '../../components/blocks/Hero';
import PlainContent from '../../components/blocks/PlainContent';
import TabsC from '../../components/blocks/TabsC';
import TabsB from '../../components/blocks/TabsB';
import TabsA from '../../components/blocks/TabsA';
import MktoForm from '../../components/blocks/MktoForm';
import IconTextA from '../../components/blocks/IconTextA';
import IconTextB from '../../components/blocks/IconTextB';
import IconTextC from '../../components/blocks/IconTextC';
import LogosUniversal from '../../components/blocks/LogosUniversal';
import QuoteSlider from '../../components/blocks/QuoteSlider';
import ContainedContent from '../../components/blocks/ContainedContent';
import ContentCTA from '../../components/blocks/ContentCTA';
import SideBySide from '../../components/blocks/SideBySide';
import IconTextD from '../../components/blocks/IconTextD';
import ScrollHorizontalText from '../../components/blocks/ScrollHorizontalText';
import Faq from '../../components/blocks/Faq';
import CardGridB from '../../components/blocks/CardGridB';
import ProgramCard from '../../components/blocks/ProgramCard';
import TeamCards from '../../components/blocks/TeamCards';
import HorizontalText from '../../components/blocks/HorizontalText';
import ExecutiveCard from '../../components/blocks/ExecutiveCard';
import BoardCards from '../../components/blocks/BoardCards';
import ScrollContent from '../../components/blocks/ScrollContent';
import QuickLinks from '../../components/blocks/QuickLinks';
import LRForm from '../../components/blocks/LRForm';
import FeaturedSlider from '../../components/blocks/FeaturedSlider';
import PolicyContent from '../../components/blocks/PolicyContent';
import CareerStickyCta from '../../components/blocks/CareerStickyCta';
import NotFoundPage from '../404';

const IndexPage = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    return (
        <Layout>
            <Seo title="Home" robots="noindex, nofollow" />
            {/* {Parser(page.content)} */}

            <Hero
                backgroundColor="bg-neutral-96"
                header="LivePerson's unique value proposition"
                subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                elementum sollicitudin magna bibendum sit ultricies arcu. Nullam
                tincidunt varius."
                heroImage="https://picsum.photos/640/480?random=1"
                heroImageAlt="test"
                heroVariant="buttons"
                logoHeader="TRUSTED BY 100K LEADING BRANDSsssss"
                underBodyImg="https://picsum.photos/360/40?random=1"
                underBodyImgAlt="test"
                primaryBtnText="Get Demo"
                primaryBtnLink="#"
                secondaryBtnText="Get Moar Demos"
                secondaryBtnLink="#"
            />

            <div className="pane comp-logo-strip bg-transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="comp-logo-strip-logos">
                                <h2>
                                    Trusted by thousands of the{' '}
                                    <mark className="has-inline-color has-vivid-purple-color">world’s biggest </mark>
                                    brands
                                </h2>
                                <p>
                                    Built for enterprise scale and security, LivePerson’s Conversational Cloud® platform
                                    has helped some of the most beloved global brands digitally transform. From banking
                                    and insurance to telecom and travel, complexity and compliance is our specialty.
                                </p>
                                <div className="comp-logo-strip-logos-container d-flex justify-content-around flex-wrap">
                                    <img
                                        src="https://static.liveperson.com/static-assets/2023/01/03130919/Azul-Airlines_40px.svg"
                                        alt=""
                                        width="132"
                                        height="40"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2023/05/24104947/bankwest-40px.svg"
                                        alt=""
                                        width="136"
                                        height="40"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/02/26152815/Burberry_JV_0226.svg"
                                        alt=""
                                        width="125"
                                        height="21"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2022/12/12140945/HSBC.svg"
                                        alt=""
                                        width="90"
                                        height="24"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2023/05/24105008/oua-40px.svg"
                                        alt=""
                                        width="108"
                                        height="40"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2023/01/17144627/PNC_JV_0117.svg"
                                        alt=""
                                        width="101"
                                        height="34"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2023/01/03130945/Sky-UK_40px.svg"
                                        alt=""
                                        width="67"
                                        height="40"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2023/07/17122344/Sweetwater.svg"
                                        alt=""
                                        width="123"
                                        height="28"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2023/01/05151516/The-RealReal_40px.png"
                                        alt=""
                                        width="175"
                                        height="40"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2023/01/19112734/Homepage_Logo-Bar_Virgin-Media-O2_JV_0117.svg"
                                        alt=""
                                        width="91"
                                        height="48"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2023/07/17122345/Wayfair.svg"
                                        alt=""
                                        width="123"
                                        height="28"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2023/01/03130949/Zurich-Insurance_40px.svg"
                                        alt=""
                                        width="144"
                                        height="40"
                                        loading="lazy"
                                    />
                                </div>
                                <a className="link" href="/resources/customers/">
                                    Read their stories
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="comp-logo-strip-carousel">
                                <div id="ls-carousel" class="carousel slide">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <p className="quote2">
                                                “LivePerson is the best fit for traditional enterprises seeking a
                                                reliable and scalable digital transformation partner.”
                                            </p>
                                            <p>
                                                — “The Forrester Wave™: Digital Customer Interaction Solutions, Q2 2024"
                                            </p>
                                        </div>
                                        <div className="carousel-item">
                                            <p className="quote2">
                                                Quote 2 is hereQuote 2 is here Quote 2 is here Quote 2 is here Quote 2
                                                is here Quote 2 is here Quote 2 is here
                                            </p>
                                            <p>
                                                — “The Forrester Wave™: Digital Customer Interaction Solutions, Q2 2024"
                                            </p>
                                        </div>
                                        <div className="carousel-item">
                                            <p className="quote2">
                                                Third one lives here Third one lives hereThird one lives here Third one
                                                lives here Third one lives here Third one lives here Third one lives
                                                here
                                            </p>
                                            <p>
                                                — “The Forrester Wave™: Digital Customer Interaction Solutions, Q2 2024"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="carousel-indicators">
                                        <button
                                            type="button"
                                            data-bs-target="#ls-carousel"
                                            data-bs-slide-to="0"
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target="#ls-carousel"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target="#ls-carousel"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3"
                                        ></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MktoForm
                backgroundColor="bg-blue-20"
                formId="2581"
                thankyou="Thank you! One of our experts will contact you shortly"
                resourceasset="testassetname"
            />

            <QuickLinks
                items={[
                    {
                        linkUrl: 'url1',
                        linkText: 'text1',
                    },
                    {
                        linkUrl: 'url2',
                        linkText: 'text2',
                    },
                    {
                        linkUrl: 'url3',
                        linkText: 'text3',
                    },
                    {
                        linkUrl: 'url4',
                        linkText: 'text4',
                    },
                ]}
            />

            <CalloutGrid
                items={[
                    {
                        imgSrc: 'https://picsum.photos/224/30?random=3',
                        category: 'Alt text',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
                        author: 'the author',
                    },
                    {
                        imgSrc: 'https://picsum.photos/224/30?random=3',
                        category: 'Alt text',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
                        author: 'the author',
                    },
                    {
                        imgSrc: 'https://picsum.photos/224/30?random=3',
                        category: 'Alt text',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
                        author: 'the author',
                    },
                    {
                        imgSrc: 'https://picsum.photos/224/30?random=3',
                        category: 'Alt text',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
                        author: 'the author',
                    },
                    {
                        imgSrc: 'https://picsum.photos/224/30?random=3',
                        category: 'Alt text',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
                        author: 'the author',
                    },
                    {
                        imgSrc: 'https://picsum.photos/224/30?random=3',
                        category: 'Alt text',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
                        author: 'the author',
                    },
                    {
                        imgSrc: 'https://picsum.photos/224/30?random=3',
                        category: 'Alt text',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
                        author: 'the author',
                    },
                    {
                        imgSrc: 'https://picsum.photos/224/30?random=3',
                        category: 'Alt text',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
                        author: 'the author',
                    },
                    {
                        imgSrc: 'https://picsum.photos/224/30?random=3',
                        category: 'Alt text',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
                        author: 'the author',
                    },
                    {
                        imgSrc: 'https://picsum.photos/224/30?random=3',
                        category: 'Alt text',
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
                        author: 'the author',
                    },
                ]}
            />

            <CareerStickyCta runFilters="true" />

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

            <div className={`pane comp-scroll-horizontal-text `}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center comp-scroll-horizontal-header">
                            <p className="h6">here is kicker</p>
                            <h2>here is header</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 order-lg-last">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/02/01100006/Generative-AI-Webinar_Hero_1x.png"
                                className="comp-scroll-horizontal-scroll"
                            />
                        </div>
                        <div className="col-lg-4 order-lg-first">
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`pane comp-scroll-horizontal-text `}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">className="com this is header</div>
                        <div className="col-lg-8">
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                            <div className="comp-scroll-horizontal-text-block">
                                <h3>block title</h3>
                                <p>
                                    {' '}
                                    block body block body block body block body block body block body block body block
                                    body block body block body block body block body
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
