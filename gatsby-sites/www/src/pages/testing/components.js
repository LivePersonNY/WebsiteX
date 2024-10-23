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
import MktoFormReport2024 from '../../components/blocks/MktoFormReport2024';

const IndexPage = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    return (
        <Layout>
            <Seo title="Home" robots="noindex, nofollow" />
            {/* {Parser(page.content)} */}

            <MktoFormReport2024
                title="title here"
                formId='5041'
                thankyou="here is thank you"
            />

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

            <div className="pane bg-blue-20"></div>

            <div className="pane pane-form form-vertical form-vertical-2024">
                <div className="container">
                    <div className="row bg-blue-20 align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-last">
                            <h2>
                                <mark className="has-inline-color has-vivid-purple-color">
                                    Vertical legal test form
                                </mark>
                            </h2>

                            <form id="mktoForm_5051" mkto="5051"></form>
                            <mkto-after mkto="5051">
                                <strong>Thanks for your interest! </strong>One of our experts will contact you shortly.
                            </mkto-after>
                        </div>
                        <div className="col-lg-5 g-lg-0 order-lg-first">
                            <img
                                src="https://static.liveperson.com/static-assets/2024/08/07154231/liveperson-bringing-voice-into-the-digital-fold-image-2_2x.png"
                                alt=""
                                width="528"
                                height="658"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pane bg-primary-dark"></div>

            <MktoForm
                backgroundColor="bg-blue-20"
                formId="5052"
                thankyou="Thank you! One of our experts will contact you shortly"
            />

            <div className="pane bg-primary-dark"></div>

            <div className="pane pane-form form-vertical form-vertical-2024">
                <div className="container">
                    <div className="row bg-blue-20 align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-last">
                            <h2>
                                <mark className="has-inline-color has-vivid-purple-color">
                                    Vertical legal test form
                                </mark>
                            </h2>

                            <form id="mktoForm_5065" mkto="5065"></form>
                            <mkto-after mkto="5065">
                                <strong>Thanks for your interest! </strong>One of our experts will contact you shortly.
                            </mkto-after>
                        </div>
                        <div className="col-lg-5 g-lg-0 order-lg-first">
                            <img
                                src="https://static.liveperson.com/static-assets/2024/08/07154231/liveperson-bringing-voice-into-the-digital-fold-image-2_2x.png"
                                alt=""
                                width="528"
                                height="658"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pane bg-primary-dark"></div>

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
                                        src="https://static.liveperson.com/static-assets/2024/07/31170203/Azul-Sm%403x.svg"
                                        alt="Azul logo"
                                        width="74"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170204/Bankwest-sm%403x.svg"
                                        alt="Bankwest logo"
                                        width="93"
                                        height="25"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170205/Burberry-sm%403x.svg"
                                        alt="Burberry logo"
                                        width="88"
                                        height="15"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170206/hsbc-sm%403x.svg"
                                        alt="HSBC logo"
                                        width="83"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170207/OUA-sm%403x.svg"
                                        alt="OUA logo"
                                        width="103"
                                        height="35"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170209/PNC-sm%403x.svg"
                                        alt="PNC logo"
                                        width="76"
                                        height="27"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170210/Sky-sm%403x.svg"
                                        alt="Sky logo"
                                        width="47"
                                        height="29"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170211/Sweetwater-sm%403x.svg"
                                        alt="Sweetwater logo"
                                        width="115"
                                        height="27"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170212/TRR-sm%403x.svg"
                                        alt="TheRealReal logo"
                                        width="97"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170213/Virgin-o2-sm%403x.svg"
                                        alt="Virgin logo"
                                        width="70"
                                        height="37"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170215/Wayfair-sm%403x.svg"
                                        alt="Wayfair logo"
                                        width="89"
                                        height="21"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170217/Zurich-sm%403x.svg"
                                        alt="Zurich logo"
                                        width="94"
                                        height="27"
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
                                <div id="ls-carousel" className="carousel slide">
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

            <div className="pane bg-blue-20"></div>

            <div className="pane comp-logo-strip bg-transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 text-center">
                            <h2>
                                Trusted by thousands of the{' '}
                                <mark className="has-inline-color has-vivid-purple-color">world’s biggest </mark>
                                brands
                            </h2>
                            <p>
                                Built for enterprise scale and security, LivePerson’s Conversational Cloud® platform has
                                helped some of the most beloved global brands digitally transform. From banking and
                                insurance to telecom and travel, complexity and compliance is our specialty.
                            </p>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="comp-logo-strip-logos">
                                <div className="comp-logo-strip-logos-container d-flex justify-content-around flex-wrap">
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170203/Azul-Sm%403x.svg"
                                        alt="Azul logo"
                                        width="74"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170204/Bankwest-sm%403x.svg"
                                        alt="Bankwest logo"
                                        width="93"
                                        height="25"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170205/Burberry-sm%403x.svg"
                                        alt="Burberry logo"
                                        width="88"
                                        height="15"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170206/hsbc-sm%403x.svg"
                                        alt="HSBC logo"
                                        width="83"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170207/OUA-sm%403x.svg"
                                        alt="OUA logo"
                                        width="103"
                                        height="35"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170209/PNC-sm%403x.svg"
                                        alt="PNC logo"
                                        width="76"
                                        height="27"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170210/Sky-sm%403x.svg"
                                        alt="Sky logo"
                                        width="47"
                                        height="29"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170211/Sweetwater-sm%403x.svg"
                                        alt="Sweetwater logo"
                                        width="115"
                                        height="27"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170212/TRR-sm%403x.svg"
                                        alt="TheRealReal logo"
                                        width="97"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170213/Virgin-o2-sm%403x.svg"
                                        alt="Virgin logo"
                                        width="70"
                                        height="37"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170215/Wayfair-sm%403x.svg"
                                        alt="Wayfair logo"
                                        width="89"
                                        height="21"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170217/Zurich-sm%403x.svg"
                                        alt="Zurich logo"
                                        width="94"
                                        height="27"
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
                                <div id="ls-carousel" className="">
                                    <div className="carousel-inner">
                                        <div className="">
                                            <p className="quote2">
                                                “LivePerson is the best fit for traditional enterprises seeking a
                                                reliable and scalable digital transformation partner.”
                                            </p>
                                            <p>
                                                — “The Forrester Wave™: Digital Customer Interaction Solutions, Q2 2024"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pane bg-blue-20"></div>

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
                                        src="https://static.liveperson.com/static-assets/2024/07/31170203/Azul-Sm%403x.svg"
                                        alt="Azul logo"
                                        width="74"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170204/Bankwest-sm%403x.svg"
                                        alt="Bankwest logo"
                                        width="93"
                                        height="25"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170205/Burberry-sm%403x.svg"
                                        alt="Burberry logo"
                                        width="88"
                                        height="15"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170206/hsbc-sm%403x.svg"
                                        alt="HSBC logo"
                                        width="83"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170207/OUA-sm%403x.svg"
                                        alt="OUA logo"
                                        width="103"
                                        height="35"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170209/PNC-sm%403x.svg"
                                        alt="PNC logo"
                                        width="76"
                                        height="27"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170210/Sky-sm%403x.svg"
                                        alt="Sky logo"
                                        width="47"
                                        height="29"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170211/Sweetwater-sm%403x.svg"
                                        alt="Sweetwater logo"
                                        width="115"
                                        height="27"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170212/TRR-sm%403x.svg"
                                        alt="TheRealReal logo"
                                        width="97"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170213/Virgin-o2-sm%403x.svg"
                                        alt="Virgin logo"
                                        width="70"
                                        height="37"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170215/Wayfair-sm%403x.svg"
                                        alt="Wayfair logo"
                                        width="89"
                                        height="21"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170217/Zurich-sm%403x.svg"
                                        alt="Zurich logo"
                                        width="94"
                                        height="27"
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
                                <div id="ls-carousel" className="">
                                    <div className="carousel-inner">
                                        <div className="">
                                            <p className="quote2">
                                                “LivePerson is the best fit for traditional enterprises seeking a
                                                reliable and scalable digital transformation partner.”
                                            </p>
                                            <p>
                                                — “The Forrester Wave™: Digital Customer Interaction Solutions, Q2 2024"
                                            </p>
                                            <p>
                                                <a
                                                    className="link"
                                                    href="/resources/news/digital-customer-interaction-solutions/"
                                                >
                                                    Read more
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pane bg-blue-20"></div>

            <div className="pane pane-form form-vertical form-vertical-2024">
                <div className="container">
                    <div className="row bg-blue-20 align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-last">
                            <h2>
                                <mark className="has-inline-color has-vivid-purple-color">
                                    Ready to power up your CCaaS solutions?
                                </mark>
                            </h2>
                            <p>
                                Discover how integrating voice into the digital ecosystem can transform your CCaaS
                                solutions for the better.
                            </p>
                            <form id="mktoForm_5041" mkto="5041"></form>
                            <mkto-after mkto="5041">
                                <strong>Thanks for your interest! </strong>One of our experts will contact you shortly.
                            </mkto-after>
                        </div>
                        <div className="col-lg-5 g-lg-0 order-lg-first">
                            <img
                                src="https://static.liveperson.com/static-assets/2024/08/07154231/liveperson-bringing-voice-into-the-digital-fold-image-2_2x.png"
                                alt=""
                                width="528"
                                height="658"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pane bg-blue-20"></div>

            <div
                data-localize="false"
                id="complete"
                className="pane bg-primary-dark comp-left-right pane-form form-vertical form-vertical-2024-v2"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-last form-col">
                            <form id="mktoForm_5047" mkto="5047"></form>
                            <mkto-after mkto="5047">
                                <strong>Thanks for your interest! </strong>One of our experts will contact you shortly.
                            </mkto-after>
                        </div>
                        <div className="col-lg-6 order-first">
                            <h1>
                                <span className="h6 text-uppercase">Conversational AI demo</span>Put conversational AI
                                at the center of your&nbsp;business
                            </h1>
                            <div className="rich-container mb-4">
                                <p data-tag="new line split">
                                    Forget the AI hype. Harness the power of conversational AI to accelerate your shift
                                    to digital, empower your people, and embrace an automation-first customer experience
                                    with the LivePerson Conversational Cloud®.
                                </p>
                            </div>
                            <h6 className="text-uppercase">join thousands of brands worldwide</h6>
                            <div className="img-container">
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142229/Azul-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142230/Bankwest-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142232/Burberry-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142233/HSBC-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142234/OUA-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142235/PNC-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142236/SkyUK-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142237/The-RealReal-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142237/Virgin-Media-O2-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142239/Wayfair-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142240/Zurich-Insurance-white.svg"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pane bg-blue-20"></div>

            <div
                data-localize="false"
                id="complete"
                className="pane bg-primary-dark comp-left-right pane-form form-vertical form-vertical-2024-v2"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-last form-col">
                            {/* <form id="mktoForm_5047" mkto="5047"></form>
                            <mkto-after mkto="5047">
                                <strong>Thanks for your interest! </strong>One of our experts will contact you shortly.
                            </mkto-after> */}
                        </div>
                        <div className="col-lg-6 order-first">
                            <h1>
                                <span className="h6 text-uppercase">Conversational AI demo</span>Experience the power of
                                <mark className="has-inline-color has-pale-pink-color"> digital-first customer </mark>
                                conversations
                            </h1>

                            <div className="rich-container mb-4">
                                <p data-tag="new line split">
                                    Kickstart your contact center transformation, connect conversations across voice and
                                    messaging, and supercharge agent productivity with a free, personalized demo of
                                    LivePerson's award-winning Conversational Cloud® platform.
                                </p>
                                <p className="body2">
                                    You'll learn:
                                    <br />
                                    <br />
                                </p>
                                <ul>
                                    <li className="body2">
                                        The pros and cons of different approaches to CcaaS, digital customer service,
                                        and conversational AI
                                        <br />
                                        <br />
                                    </li>
                                    <li className="body2">
                                        How to digitally transform your CX without ripping and replacing your existing
                                        contact center and AI solutions
                                        <br />
                                        <br />
                                    </li>
                                    <li className="body2">
                                        How LivePerson offers a bridge to the digital-first, AI-empowered customer
                                        experience of the future
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 offset-lg-3 form-logo-strip">
                            <h6 className="text-uppercase text-center">join thousands of brands worldwide</h6>
                            <div className="img-container">
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142229/Azul-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142230/Bankwest-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142232/Burberry-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142233/HSBC-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142234/OUA-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142235/PNC-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142236/SkyUK-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142237/The-RealReal-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142237/Virgin-Media-O2-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142239/Wayfair-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142240/Zurich-Insurance-white.svg"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pane bg-blue-20"></div>

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
