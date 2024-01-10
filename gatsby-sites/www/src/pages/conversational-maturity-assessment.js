import * as React from 'react';
import { useEffect, useState } from 'react';
import Hero from '../components/blocks/Hero';
import MktoForm from '../components/blocks/MktoForm';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NotFoundPage from './404';
import $ from 'jquery';
import PlainContent from '../components/blocks/PlainContent';

const Flywheel = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    useEffect(() => {
        $('.btn-flywheel-results').on('click', () => {
            if (
                $('input[name="questionOne"').is(':checked') &&
                $('input[name="questionTwo"').is(':checked') &&
                $('input[name="questionThree"').is(':checked') &&
                $('input[name="questionFour"').is(':checked')
            ) {
                $('.question-one-score').html($('input[name="questionOne"]:checked').data('question-score'));
                $('.question-two-score').html($('input[name="questionTwo"]:checked').data('question-score'));
                $('.question-three-score').html($('input[name="questionThree"]:checked').data('question-score'));
                $('.question-four-score').html($('input[name="questionFour"]:checked').data('question-score'));

                let resultsFormValue = `Understand: ${$('input[name="questionOne"]:checked').data(
                    'question-score'
                )}; Connect: ${$('input[name="questionTwo"]:checked').data('question-score')}; Assist: ${$(
                    'input[name="questionThree"]:checked'
                ).data('question-score')}; Automate: ${$('input[name="questionFour"]:checked').data('question-score')}`;
                // console.log(resultsFormValue);
                $('input[name=maturityAssessmentQuizResults]').val(resultsFormValue);

                $('.flywheel-tool-input').hide();
                $('.flywheel-tool-result').fadeIn().css('display', 'flex');
            } else {
                $('.modal-button').trigger('click');
            }
        });
    }, []);

    return (
        <Layout mainClass="flywheel-tool">
            <Seo
                title="Conversational AI Maturity Model Assessment | LivePerson"
                description="How seamless and efficient is your customer engagement, really? Take our conversational AI maturity model assessment to find out."
                robots="noindex, nofollow"
            />

            <PlainContent
                backgroundColor="bg-primary-dark"
                colWidth="10"
                headerLevel="h1"
                headLevel="h1"
                alignmentClass="text-center"
                header="Bridge the gap with a Conversational Maturity&nbsp;Assessment"
                body="The data is in: Digital conversations are the antidote to frustrating and costly customer experiences. But how conversational is your contact center, really? Find out by answering four simple questions below."
                vimeoUrl="//player.vimeo.com/video/880643218?h=050389172a"
                primaryBtnText="Start your assessment"
                primaryBtnLink="#assessment"
            />

            <div data-localize="false" className="pane bg-transparent flywheel-quiz" id="assessment">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h2>Start your assessment</h2>
                            <p>
                                LivePerson’s Conversational Flywheel™ is a four-step framework designed to help you
                                bridge the AI Gap by transforming into a true digital-first contact center. Discover
                                where you stand at each phase of the flywheel – and how to boost efficiency and
                                satisfaction along the way – by answering these four simple questions:
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4 flywheel-tool-input">
                        <div className="col-lg-10 offset-lg-1">
                            <div id="carouselExampleFlywheel" className="carousel slide" data-bs-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" style={{ padding: '8px' }}>
                                        <div className="form-check-container">
                                            <p>
                                                <strong>
                                                    Question 1: Which statement best describes how your company
                                                    currently analyzes customer&nbsp;conversations?
                                                </strong>
                                            </p>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionOne"
                                                    id="questionOne1"
                                                    data-question-score="1"
                                                />
                                                <label className="form-check-label" for="questionOne1">
                                                    We rely on manual review of emails and call transcripts.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionOne"
                                                    id="questionOne2"
                                                    data-question-score="2"
                                                />
                                                <label className="form-check-label" for="questionOne2">
                                                    We use basic analytics tools to track customer sentiment.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionOne"
                                                    id="questionOne3"
                                                    data-question-score="3"
                                                />
                                                <label className="form-check-label" for="questionOne3">
                                                    We’re only able to analyze conversations on discrete channels (e.g.
                                                    only voice or only chat and email)
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionOne"
                                                    id="questionOne4"
                                                    data-question-score="4"
                                                />
                                                <label className="form-check-label" for="questionOne4">
                                                    We leverage advanced analytics and AI-driven tools to understand
                                                    customer sentiments and trends across various communication
                                                    channels.
                                                </label>
                                            </div>

                                            <div className="form-check-button">
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleFlywheel"
                                                    data-bs-slide-to="1"
                                                    className="btn btn-primary mt-4 text-center"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" style={{ padding: '8px' }}>
                                        <div className="form-check-container">
                                            <p>
                                                <strong>
                                                    Question 2: Which statement best describes how your company
                                                    interacts with customers across different&nbsp;channels?
                                                </strong>
                                            </p>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionTwo"
                                                    id="questionTwo1"
                                                    data-question-score="1"
                                                />
                                                <label className="form-check-label" for="questionTwo1">
                                                    We primarily use traditional phone and email channels.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionTwo"
                                                    id="questionTwo2"
                                                    data-question-score="2"
                                                />
                                                <label className="form-check-label" for="questionTwo2">
                                                    We've started exploring digital communication channels like live
                                                    chat.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionTwo"
                                                    id="questionTwo3"
                                                    data-question-score="3"
                                                />
                                                <label className="form-check-label" for="questionTwo3">
                                                    We're active on multiple social messaging platforms for customer
                                                    service.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionTwo"
                                                    id="questionTwo4"
                                                    data-question-score="4"
                                                />
                                                <label className="form-check-label" for="questionTwo4">
                                                    We've integrated our business software with web, in-app, and social
                                                    messaging channels for seamless interaction.
                                                </label>
                                            </div>

                                            <div className="form-check-button">
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleFlywheel"
                                                    data-bs-slide-to="0"
                                                    className="btn btn-outline-secondary mt-4 text-center"
                                                >
                                                    Previous
                                                </button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleFlywheel"
                                                    data-bs-slide-to="2"
                                                    className="btn btn-primary mt-4 text-center"
                                                    style={{ marginLeft: '20px' }}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" style={{ padding: '8px' }}>
                                        <div className="form-check-container">
                                            <p>
                                                <strong>
                                                    Question 3: Which statement best describes how your company empowers
                                                    support agents to efficiently handle customer&nbsp;conversations?
                                                </strong>
                                            </p>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionThree"
                                                    id="questionThree1"
                                                    data-question-score="1"
                                                />
                                                <label className="form-check-label" for="questionThree1">
                                                    Agents follow predefined scripts.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionThree"
                                                    id="questionThree2"
                                                    data-question-score="2"
                                                />
                                                <label className="form-check-label" for="questionThree2">
                                                    Agents have access to basic knowledge bases.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionThree"
                                                    id="questionThree3"
                                                    data-question-score="3"
                                                />
                                                <label className="form-check-label" for="questionThree3">
                                                    Agents are equipped with AI-powered tools to suggest solutions.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionThree"
                                                    id="questionThree4"
                                                    data-question-score="4"
                                                />
                                                <label className="form-check-label" for="questionThree4">
                                                    Agents utilize advanced generative AI to provide personalized and
                                                    efficient support.
                                                </label>
                                            </div>
                                            <div className="form-check-button">
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleFlywheel"
                                                    data-bs-slide-to="1"
                                                    className="btn btn-outline-secondary mt-4 text-center"
                                                >
                                                    Previous
                                                </button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleFlywheel"
                                                    data-bs-slide-to="3"
                                                    className="btn btn-primary mt-4 text-center"
                                                    style={{ marginLeft: '20px' }}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" style={{ padding: '8px' }}>
                                        <div className="form-check-container">
                                            <p>
                                                <strong>
                                                    Question 4: Which statement best describes how your company deploys
                                                    automation and AI to enable customers
                                                    to&nbsp;self&#8288;&#8211;&#8288;serve?
                                                </strong>
                                            </p>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionFour"
                                                    id="questionFour1"
                                                    data-question-score="1"
                                                />
                                                <label className="form-check-label" for="questionFour1">
                                                    Minimal automation, mainly for simple tasks.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionFour"
                                                    id="questionFour2"
                                                    data-question-score="2"
                                                />
                                                <label className="form-check-label" for="questionFour2">
                                                    Basic automated responses for FAQs.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionFour"
                                                    id="questionFour3"
                                                    data-question-score="3"
                                                />
                                                <label className="form-check-label" for="questionFour3">
                                                    We have implemented basic AI and automation for common issues.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionFour"
                                                    id="questionFour4"
                                                    data-question-score="4"
                                                />
                                                <label className="form-check-label" for="questionFour4">
                                                    We extensively use consumer-facing automation, powered by generative
                                                    AI, for self-service and faster issue resolution.
                                                </label>
                                            </div>
                                            <div className="form-check-button">
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleFlywheel"
                                                    data-bs-slide-to="2"
                                                    className="btn btn-outline-secondary mt-4 text-center"
                                                >
                                                    Previous
                                                </button>
                                                <a
                                                    className="btn btn-primary mt-4 text-center btn-flywheel-results"
                                                    style={{ marginLeft: '20px' }}
                                                >
                                                    Get my results
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="display-none modal-button"
                            >
                                Launch modal
                            </button>

                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="exampleModalLabel">
                                                Error
                                            </h3>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">Please select all options</div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 flywheel-tool-result display-none">
                        <div className="col-lg-10 offset-lg-1">
                            <h2>Results</h2>
                            <p>
                                Thank you for taking our Conversational Maturity Assessment. Your scores and improvement
                                suggestions are below. To schedule a meeting with a LivePerson expert to discuss your
                                results, <a href="#formMeeting">click here</a>.
                            </p>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/12/20115206/1-Understand.svg"
                                alt="Understand"
                            />
                            <div className="flywheel-phase">
                                <h6>Phase 1</h6>
                                <h4>Understand</h4>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h4>
                                Score:{' '}
                                <span
                                    className="question-one-score"
                                    style={{
                                        fontFamily: 'inherit',
                                        fontSize: 'inherit',
                                        lineHeight: 'inherit',
                                    }}
                                ></span>
                                /5
                            </h4>
                            <p>
                                The Understand phase of the Conversational Flywheel is all about analyzing your customer
                                conversations so you know why customers are reaching out, which channels they prefer,
                                and where and when to deploy automation.
                            </p>
                            <p>
                                <strong>How to improve your Understand score:</strong>
                            </p>
                            <ul>
                                <li>
                                    <strong>Intent analysis:</strong> Group your customer conversations into top intents
                                    to understand the most common reasons customers are reaching out.
                                </li>
                                <li>
                                    <strong>Omnichannel analytics:</strong> Invest in advanced, AI-powered analytics
                                    tools to gain deeper insights into customer conversations across various channels.
                                </li>
                                <li>
                                    <strong>Generative insights:</strong> Explore how Large Language Models and
                                    generative AI-powered solutions can empower your team to derive insights in an
                                    intuitive, conversational way.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/12/20115203/2-Connect.svg"
                                alt="Connect"
                            />
                            <div className="flywheel-phase">
                                <h6>Phase 2</h6>
                                <h4>Connect</h4>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h4>
                                Score:{' '}
                                <span
                                    className="question-two-score"
                                    style={{
                                        fontFamily: 'inherit',
                                        fontSize: 'inherit',
                                        lineHeight: 'inherit',
                                    }}
                                ></span>
                                /5
                            </h4>
                            <p>
                                The Connect phase of the Conversational Flywheel is where your business systems with
                                digital channels to shift conversations away from the call center and email ticketing to
                                improve operational efficiency.
                            </p>
                            <p>
                                <strong>How to improve your Connect score</strong>
                            </p>
                            <ul>
                                <li>
                                    <strong>Explore additional channels:</strong> Based on your analysis in the
                                    Understand phase, integrate additional communication channels such as social media
                                    platforms, in-app messaging, or SMS/WhatsApp.
                                </li>
                                <li>
                                    <strong>Seamless integration:</strong> Ensure seamless integration of your CRM, CDP,
                                    telephony and other enterprise systems for a unified customer conversation.
                                </li>
                                <li>
                                    <strong>IVR deflection:</strong> Turn your dreaded Interactive Voice Response system
                                    into your best asset by allowing customers to shift conversations into digital
                                    channels like automated voice and messaging.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/12/20115204/3-Assist.svg"
                                alt="Assist"
                            />
                            <div className="flywheel-phase">
                                <h6>Phase 3</h6>
                                <h4>Assist</h4>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h4>
                                Score:{' '}
                                <span
                                    className="question-three-score"
                                    style={{
                                        fontFamily: 'inherit',
                                        fontSize: 'inherit',
                                        lineHeight: 'inherit',
                                    }}
                                ></span>
                                /5
                            </h4>

                            <p>
                                At the Assist phase, you’re leveraging agent-facing AI, tools, and automated workflows
                                to boost agent productivity and offer more personalized customer service.
                            </p>
                            <p>
                                <strong>How to improve your Assist score</strong>
                            </p>
                            <ul>
                                <li>
                                    <strong>Co-pilot:</strong> Provide agents with advanced AI tools that offer
                                    real-time suggestions and guidance to resolve customer issues faster.
                                </li>
                                <li>
                                    <strong>Unified workspace:</strong> Bring cross-channel customer conversations and
                                    essential tools and workflows into a single platform.
                                </li>
                                <li>
                                    <strong>Bot-human tango:</strong> Use automation to free up agents to focus on your
                                    most valuable conversations and customers.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 offset-lg-1">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/12/20115205/4-Automate.svg"
                                alt="Automate"
                            />
                            <div className="flywheel-phase">
                                <h6>Phase 4</h6>
                                <h4>Automate</h4>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h4>
                                Score:{' '}
                                <span
                                    className="question-four-score"
                                    style={{
                                        fontFamily: 'inherit',
                                        fontSize: 'inherit',
                                        lineHeight: 'inherit',
                                    }}
                                ></span>
                                /5
                            </h4>

                            <p>
                                The Automate phase is where you deploy consumer-facing automation and AI to enable
                                self-service, scale your conversations, and resolve customer issues more quickly and
                                efficiently. By scaling your automated conversations you increase your data, feeding
                                back into the Understand phase of the Flywheel.
                            </p>
                            <p>
                                <strong>How to improve your Automate score</strong>
                            </p>

                            <ul>
                                <li>
                                    <strong>Knowledge AI:</strong> Expand self-service options by integrating your AI
                                    chatbots with your knowledge base and other relevant support documentation.
                                </li>
                                <li>
                                    <strong>Generative AI:</strong> Leverage and fine-tune Large Language models to
                                    create a more personalized, conversational customer experience.
                                </li>
                                <li>
                                    <strong>Hallucination and bias detection:</strong> Consider enterprise grade
                                    solutions that can detect hallucinations, bias, and other non-compliant answers
                                    before being exposed to customers.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="undefined pane pane-form  bg-blue-20 pane-with-lead-text " id="formMeeting">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h2>Find out where you stand in your&nbsp;industry</h2>
                            <p>
                                Ready to dive deeper? Book a personalized maturity benchmarking session with a
                                LivePerson expert to discover how you stack up against top brands in your space.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <a className="mobileForm">
                                <span className="span1">Get a demo</span>
                                <span className="span2">
                                    <svg
                                        version="1.1"
                                        viewBox="0 0 62 62"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: '40px;' }}
                                    >
                                        <g fill="#162036" fill-rule="evenodd">
                                            <g transform="translate(1 1)" stroke="#fff">
                                                <circle cx="30" cy="30" r="30"></circle>
                                                <g
                                                    stroke="#ffffff"
                                                    transform="translate(15 15)"
                                                    stroke-linecap="square"
                                                >
                                                    <path d="m0.51724 0.51724l29.26 29.26"></path>
                                                    <path d="m29.483 0.51724l-29.26 29.26"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </a>
                            <form id={`mktoForm_5004`} mkto="5004"></form>
                            <mkto-after mkto="5004">Thank you! One of our experts will contact you shortly</mkto-after>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Flywheel;
