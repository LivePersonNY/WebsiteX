import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link, graphql } from 'gatsby';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { set } from 'lodash';


const Sandbox2 = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    let companyInfo = `

`;

    const startChatBot = () => {
        console.log(document.querySelector('.bot-context').value);
        companyInfo = document.querySelector('.bot-context').value;
        console.log(companyInfo);
        setChatHistory((history) => [...history, {
            hideInChat: true,
            role: "model",
            text: companyInfo,
        }]);
        document.querySelector('.btn-context').style.display = 'none';
    }



    const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
        const inputRef = useRef();
        const handleFormSubmit = (e) => {
            e.preventDefault();
            const userMessage = inputRef.current.value.trim();
            if (!userMessage) return;
            inputRef.current.value = "";
            // Update chat history with the user's message
            setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
            // Call the function to generate the bot's response
            generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }]);
        };
        return (
            <form onSubmit={handleFormSubmit} className="chat-form">
                <input ref={inputRef} placeholder="Message..." className="message-input" required />
                <button type="submit" id="send-message" className="material-symbols-rounded">
                    Send
                </button>
            </form>
        );
    };

    const ChatMessage = ({ chat }) => {
        return (
            !chat.hideInChat && (
                <div className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`} style={chat.role === "model" ? styles.botMessage : styles.userMessage}>
                    <p className="message-text">{chat.text}</p>
                </div>
            )
        );
    };

    const chatBodyRef = useRef();
    const [showChatbot, setShowChatbot] = useState(false);
    const [chatHistory, setChatHistory] = useState([
        {
            hideInChat: true,
            role: "model",
            text: companyInfo,
        },
    ]);
    const generateBotResponse = async (history) => {
        // Helper function to update chat history
        const updateHistory = (text, isError = false) => {
            setChatHistory((prev) => [...prev, { role: "model", text, isError }]);
        };
        // Format chat history for API request
        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: history }),
        };
        try {
            // Make the API call to get the bot's response
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBAADvGyXLUSrZmILupE_V0U4FmV4uCPPQ', requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data?.error.message || "Something went wrong!");
            // Clean and update chat history with bot's response
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateHistory(apiResponseText);
        } catch (error) {
            // Update chat history with the error message
            updateHistory(error.message, true);
        }
    };
    useEffect(() => {
        // Auto-scroll whenever chat history updates
        chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }, [chatHistory]);


    return (
        <Layout>
            <Seo title="sandbox" robots="noindex, nofollow" />
            {/* {Parser(page.content)} */}

            <div className="pane">
                <div className="container">
                    <div className="row bg-blue-20 align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-last">
                            <h2>
                                Sandbox2
                            </h2>

                        </div>
                    </div>
                </div>
            </div>

            <textarea className="bot-context" placeholder="Put context here"></textarea>
            <p>scroll down for examples to copy/paste</p>
            <button className="btn-context" onClick={startChatBot}>Add context</button>

            <div className={`container ${showChatbot ? "show-chatbot" : ""}`} style={styles.chatContainer}>

                <div className="chatbot-popup" style={styles.chatWindow}>
                    {/* Chatbot Header */}
                    <div className="chat-header">
                        <div className="header-info">

                            <h2 className="logo-text">Chatbot</h2>
                        </div>

                    </div>
                    {/* Chatbot Body */}
                    <div ref={chatBodyRef} className="chat-body">
                        <div className="message bot-message">

                            <p className="message-text">
                                Hey there  <br /> How can I help you today?
                            </p>
                        </div>
                        {/* Render the chat history dynamically */}
                        {chatHistory.map((chat, index) => (
                            <ChatMessage key={index} chat={chat} />
                        ))}
                    </div>
                    {/* Chatbot Footer */}
                    <div className="chat-footer">
                        <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                    </div>
                </div>
            </div>

            <hr></hr>

            <p>Company Name: Nimbus Tech Solutions
                <br /><br />
                About Us: Nimbus Tech Solutions is a leading innovator in the technology sector, dedicated to transforming the way businesses and individuals interact with technology. With a strong focus on cutting-edge research and development, Nimbus Tech Solutions provides comprehensive solutions to empower your digital future. Our mission is to drive growth and efficiency by seamlessly integrating technology into your everyday operations.
                <br /><br />
                Our Products:
                <br />
                Nimbus CloudPro: A robust cloud storage solution offering unmatched security and scalability for businesses of all sizes. Nimbus CloudPro ensures your data is accessible anytime, anywhere, with unparalleled ease of use.
                <br /><br />
                Nimbus AI Suite: An advanced suite of AI-driven tools designed to enhance productivity and streamline decision-making processes. From predictive analytics to automated customer support, Nimbus AI Suite offers a wide range of applications tailored to your needs.
                <br /><br />
                Nimbus SmartHub: A state-of-the-art IoT platform that connects and manages smart devices within your home or office. Nimbus SmartHub offers intuitive control, energy efficiency, and enhanced security, all from a single interface.
                <br /><br />
                Our Solutions:
                <br />
                Digital Transformation Services: Our team of experts works closely with businesses to develop and implement custom digital transformation strategies. From initial consultation to full-scale deployment, we ensure a smooth transition to a more efficient and digitally integrated future.
                <br /><br />
                Cybersecurity Solutions: Nimbus Tech Solutions offers comprehensive cybersecurity services to protect your valuable data and systems from potential threats. Our proactive approach includes regular assessments, advanced threat detection, and incident response to ensure the highest level of security.
                <br /><br />
                IT Support and Consulting: We provide end-to-end IT support and consulting services to help businesses maximize their technology investments. Our experienced professionals offer everything from network design and implementation to ongoing maintenance and support.
                <br /><br />
                Contact Information:
                <br />
                Address: 1234 Innovation Drive, Tech Park, Jersey City, NJ 07310, USA
                <br /><br />
                Phone: +1 (555) 123-4567
                <br /><br />
                Email: info@nimbustechsolutions.com
                <br /><br />
                Website: www.nimbustechsolutions.com</p>

            <hr></hr>

            <p>Company Name: Vertex Innovations Inc.
                <br /><br />
                About Us: Vertex Innovations Inc. is a trailblazer in the technology industry, committed to delivering innovative solutions that drive success and growth. We specialize in developing cutting-edge products and services that meet the evolving needs of businesses and individuals alike. Our vision is to be at the forefront of technological advancement, providing unparalleled value and excellence to our clients.
                <br /><br />
                Our Products:
                <br />
                Vertex CloudSync: A powerful cloud storage solution offering seamless data synchronization and robust security features. Vertex CloudSync ensures that your data is always accessible and protected, no matter where you are.
                <br /><br />
                Vertex AI Analytics: An advanced analytics platform that leverages artificial intelligence to provide deep insights and actionable recommendations. Vertex AI Analytics helps businesses make data-driven decisions with confidence.
                <br /><br />
                Vertex SmartHome: A comprehensive IoT solution that connects and manages all your smart devices, creating a more efficient and secure living environment. Vertex SmartHome offers intuitive control and automation for a truly smart home experience.
                <br /><br />
                Our Solutions:
                <br />
                Business Process Optimization: Our expert team works with you to streamline your business processes and improve efficiency. From identifying bottlenecks to implementing cutting-edge technology, Vertex Innovations Inc. ensures your operations run smoothly.
                <br /><br />
                Custom Software Development: We provide bespoke software solutions tailored to your specific needs. Our experienced developers create high-quality, scalable software that enhances your business capabilities and drives growth.
                <br /><br />
                IT Consulting Services: Vertex Innovations Inc. offers comprehensive IT consulting services to help you navigate the complex world of technology. Our team provides strategic guidance and hands-on support to ensure your IT infrastructure is robust and future-proof.
                <br /><br />
                Contact Information:
                <br />
                Address: 789 Tech Lane, Innovation District, Jersey City, NJ 07310, USA
                <br /><br />
                Phone: +1 (555) 987-6543
                <br /><br />
                Email: contact@vertexinnovations.com
                <br /><br />
                Website: www.vertexinnovations.com</p>

            <hr></hr>
            <p>
                Understand to automate: The journey to GenAI
                <br />
                Join us for an evening exploring how AI is transforming customer engagement. Hear from Deloitte Digital on the impact of agentic AI across industries, followed by a fireside chat on the GenAI journey. Continue the conversation over an elegant dinner and connect with peers. Don’t miss out on this opportunity to shape the future of customer experience!
                <br /><br />
                Melbourne: 27 February | Cecconi’s
                <br />
                Sydney: 6 March | Flying Fish
                <br /><br />
                The Agenda:
                <br />
                - 5:30 – 6:00 PM<br />
                Arrival & welcome drinks<br />
                Travel to the venue in the heart of the city. The concierge will be present to guide you to our reserved private spaces. An Uber voucher will be shared with you prior to the dinner.<br />
                - 6:00 – 6:30 PM | Deloitte Digital<br />
                How AI is shaping the future<br />
                Hear from Deloitte Digital on how AI is shaping the future of customer engagement. We’ll explore how agentic AI is redefining both near-term opportunities and long-term possibilities across industries.<br />
                - 6:30 – 7:00 pm | AHM health insurance<br />
                Customer fireside chat<br />
                Join Karlee Boyd, Continuous Improvement Manager at AHM, to hear about the AHM generative AI journey and its implementation in the contact centre.<br />
                - 7:00 – 9:00 pm<br />
                Dinner & discussion<br />
                Continue the conversation with an elegant three-course dining experience and deeper peer connections.<br />
                <br /><br />
                Your hosts for the evening:
                <br />
                Nigel Lindsay-Smith<br />
                LivePerson – Senior Vice President, APJ
                <br />
                Michael O’Toole<br />
                Deloitte Digital – Head of CX for AI
                <br />
                Tyler Hamilton<br />
                Deloitte Digital – Specialist Lead, Conversational and Generative AI
            </p>

        </Layout>
    );
};

const styles = {
    chatContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        margin: 'auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    chatWindow: {
        flex: 1,
        padding: '10px',
        backgroundColor: '#f9f9f9',
        overflowY: 'auto',
        height: '300px',
    },
    userMessage: {
        textAlign: 'right',
        backgroundColor: '#d1e7dd',
        padding: '5px',
        borderRadius: '5px',
        margin: '5px 0',
    },
    botMessage: {
        textAlign: 'left',
        backgroundColor: '#f8d7da',
        padding: '5px',
        borderRadius: '5px',
        margin: '5px 0',
    },
    input: {
        width: 'calc(100% - 60px)',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Sandbox2;
