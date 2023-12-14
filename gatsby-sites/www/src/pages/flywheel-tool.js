import * as React from 'react';
import { useEffect } from 'react';
import Hero from '../components/blocks/Hero';
import MktoForm from '../components/blocks/MktoForm';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NotFoundPage from './404';
import $ from 'jquery';
import bootstrap, { Modal } from 'bootstrap';

const Flywheel = () => {
    if (
        process.env.BRANCH != 'develop' &&
        process.env.GATSBY_IS_PREVIEW !== 'true'
    ) {
        return <NotFoundPage />;
    }

    useEffect(() => {
        var myModal = new Modal(document.getElementById('exampleModal'), {});

        console.log('this is loaded');
        $('.btn-flywheel-results').on('click', () => {
            if (
                $('input[name="questionOne"').is(':checked') &&
                $('input[name="questionTwo"').is(':checked') &&
                $('input[name="questionThree"').is(':checked') &&
                $('input[name="questionFour"').is(':checked')
            ) {
                $('.flywheel-tool-input').hide();
                $('.flywheel-tool-result').fadeIn();
            } else {
                myModal.show();
            }
        });
    });

    return (
        <Layout mainclassName="">
            <Seo
                title="Flywheel Tool | LivePerson"
                description="Use this tool."
                robots="noindex, nofollow"
            />
            <Hero
                backgroundColor="bg-neutral-96"
                header="The business case for going conversational"
                subHeader="Conversational AI increases revenue growth, improves customer satisfaction, and reduces operating costs. Though a detailed review with one of our experts will shape the impact to your business based on your specific use cases, our calculator, below, will show the potential ROI with LivePerson."
                vimeoUrl="//player.vimeo.com/video/530992337"
            />

            <div
                data-localize="false"
                className="pane bg-transparent undefined"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h2>Tool header is here</h2>
                            <p>Why not some content too</p>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4 flywheel-tool-input">
                        <div className="col-lg-12">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            How does your company currently
                                            analyze customer inquiries and
                                            concerns?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionOne"
                                                    id="questionOne1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionOne1"
                                                >
                                                    We rely on manual review of
                                                    emails and call transcripts.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionOne"
                                                    id="questionOne2"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionOne2"
                                                >
                                                    We use basic analytics tools
                                                    to track customer sentiment.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionOne"
                                                    id="questionOne3"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionOne3"
                                                >
                                                    We’re only able to analyze
                                                    conversations on discrete
                                                    channels (e.g. only voice or
                                                    only chat and email)
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionOne"
                                                    id="questionOne4"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionOne4"
                                                >
                                                    We leverage advanced
                                                    analytics and AI-driven
                                                    tools to understand customer
                                                    sentiments and trends across
                                                    various communication
                                                    channels.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            How does your company interact with
                                            customers across different channels?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionTwo"
                                                    id="questionTwo1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionTwo1"
                                                >
                                                    We primarily use traditional
                                                    phone and email channels.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionTwo"
                                                    id="questionTwo2"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionTwo2"
                                                >
                                                    We've started exploring
                                                    digital communication
                                                    channels like live chat.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionTwo"
                                                    id="questionTwo3"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionTwo3"
                                                >
                                                    We're active on multiple
                                                    social messaging platforms
                                                    for customer service.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionTwo"
                                                    id="questionTwo4"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionTwo4"
                                                >
                                                    We've integrated our
                                                    business software with web,
                                                    in-app, and social messaging
                                                    channels for seamless
                                                    interaction.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            How does your company empower
                                            support agents to handle customer
                                            inquiries effectively?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionThree"
                                                    id="questionThree1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionThree1"
                                                >
                                                    Agents follow predefined
                                                    scripts.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionThree"
                                                    id="questionThree2"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionThree2"
                                                >
                                                    Agents have access to basic
                                                    knowledge bases.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionThree"
                                                    id="questionThree3"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionThree3"
                                                >
                                                    Agents are equipped with
                                                    AI-powered tools to suggest
                                                    solutions.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionThree"
                                                    id="questionThree4"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionThree4"
                                                >
                                                    Agents utilize advanced
                                                    generative AI to provide
                                                    personalized and efficient
                                                    support.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            Does your company employ automation
                                            to facilitate self-service for
                                            customers?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionFour"
                                                    id="questionFour1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionFour1"
                                                >
                                                    Minimal automation, mainly
                                                    for simple tasks.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionFour"
                                                    id="questionFour2"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionFour2"
                                                >
                                                    Basic automated responses
                                                    for FAQs.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionFour"
                                                    id="questionFour3"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionFour3"
                                                >
                                                    We have implemented basic AI
                                                    and automation for common
                                                    issues.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="questionFour"
                                                    id="questionFour4"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="questionFour4"
                                                >
                                                    We extensively use
                                                    consumer-facing automation,
                                                    powered by generative AI,
                                                    for self-service and faster
                                                    issue resolution.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a className="btn btn-primary mt-4 text-center btn-flywheel-results">
                                    Get my results
                                </a>

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
                                                <h3
                                                    className="modal-title fs-5"
                                                    id="exampleModalLabel"
                                                >
                                                    Error
                                                </h3>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                Please select all options
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4 flywheel-tool-result display-none">
                        <div className="col-lg-12">
                            <h2>Results</h2>
                            <h4>
                                Phase 1: Understand
                                <br />
                                <br />
                                Score: X/5
                            </h4>
                            <p>
                                The Understand phase of the Conversational
                                Flywheel is all about analyzing your customer
                                conversations so you know why customers are
                                reaching out, which channels they prefer, and
                                where and when to deploy automation.
                            </p>
                            <p>
                                <strong>
                                    How to improve your Understand score:
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    Intent analysis: Group your customer
                                    conversations into top intents to understand
                                    the most common reasons customers are
                                    reaching out.
                                </li>
                                <li>
                                    Omnichannel analytics: Invest in advanced,
                                    AI-powered analytics tools to gain deeper
                                    insights into customer conversations across
                                    various channels.
                                </li>
                                <li>
                                    Generative insights: Explore how Large
                                    Language Models and generative AI-powered
                                    solutions can empower your team to derive
                                    insights in an intuitive, conversational
                                    way.
                                </li>
                            </ul>
                            <h4>
                                Phase 2 : Connect
                                <br />
                                <br /> Score: X/5
                            </h4>
                            <p>
                                The Connect phase of the Conversational Flywheel
                                is where your business systems with digital
                                channels to shift conversations away from the
                                call center and email ticketing to improve
                                operational efficiency.
                            </p>
                            <p>
                                <strong>
                                    How to improve your Connect score
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    Explore additional channels: Based on your
                                    analysis in the Understand phase, integrate
                                    additional communication channels such as
                                    social media platforms, in-app messaging, or
                                    SMS/WhatsApp.
                                </li>
                                <li>
                                    Seamless integration: Ensure seamless
                                    integration of your CRM, CDP, telephony and
                                    other enterprise systems for a unified
                                    customer conversation.
                                </li>
                                <li>
                                    IVR deflection: Turn your dreaded
                                    Interactive Voice Response system into your
                                    best asset by allowing customers to shift
                                    conversations into digital channels like
                                    automated voice and messaging.
                                </li>
                            </ul>
                            <h4>
                                Phase 3: Assist
                                <br />
                                <br /> Score: X/5
                            </h4>
                            <p>
                                At the Assist phase, you’re leveraging
                                agent-facing AI, tools, and automated workflows
                                to boost agent productivity and offer more
                                personalized customer service.
                            </p>
                            <p>
                                <strong>
                                    How to improve your Assist score
                                </strong>
                            </p>
                            <ul>
                                <li>
                                    Co-pilot: Provide agents with advanced AI
                                    tools that offer real-time suggestions and
                                    guidance to resolve customer issues faster.
                                </li>
                                <li>
                                    Unified workspace: Bring cross-channel
                                    customer conversations and essential tools
                                    and workflows into a single platform.
                                </li>
                                <li>
                                    Bot-human tango: Use automation to free up
                                    agents to focus on your most valuable
                                    conversations and customers.
                                </li>
                            </ul>
                            <h4>
                                Phase 4: Automate <br />
                                <br />
                                Score: X/5
                            </h4>
                            <p>
                                The Automate phase is where you deploy
                                consumer-facing automation and AI to enable
                                self-service, scale your conversations, and
                                resolve customer issues more quickly and
                                efficiently. By scaling your automated
                                conversations you increase your data, feeding
                                back into the Understand phase of the Flywheel.
                            </p>
                            <p>
                                <strong>
                                    How to improve your Automate score
                                </strong>
                            </p>

                            <ul>
                                <li>
                                    Knowledge AI: Expand self-service options by
                                    integrating your AI chatbots with your
                                    knowledge base and other relevant support
                                    documentation.
                                </li>
                                <li>
                                    Generative AI: Leverage and fine-tune Large
                                    Language models to create a more
                                    personalized, conversational customer
                                    experience.
                                </li>
                                <li>
                                    Hallucination and bias detection: Consider
                                    enterprise grade solutions that can detect
                                    hallucinations, bias, and other
                                    non-compliant answers before being exposed
                                    to customers.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <MktoForm
                backgroundColor="bg-blue-20"
                header="Talk to rep about results"
                formId="2580"
                thankyou="Thank you! One of our experts will contact you shortly"
            />
        </Layout>
    );
};

export default Flywheel;
