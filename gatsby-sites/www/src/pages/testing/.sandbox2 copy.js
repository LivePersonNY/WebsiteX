import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link, graphql } from 'gatsby';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { set } from 'lodash';
import NotFoundPage from '../404';


const Sandbox2 = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    const companyInfo = `
dinner is pizza or pasta
`;

    const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
        const inputRef = useRef();
        const handleFormSubmit = (e) => {
            e.preventDefault();
            const userMessage = inputRef.current.value.trim();
            if (!userMessage) return;
            inputRef.current.value = "";
            // Update chat history with the user's message
            setChatHistory((history) => [...history, { role: "user", text: userMessage }]);
            // Delay 600 ms before showing "Thinking..." and generating response
            setTimeout(() => {
                // Add a "Thinking..." placeholder for the bot's response
                setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
                // Call the function to generate the bot's response
                generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query: ${userMessage}` }]);
            }, 600);
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
                    {/* {chat.role === "model" && <ChatbotIcon />} */}
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
            setChatHistory((prev) => [...prev.filter((msg) => msg.text != "Thinking..."), { role: "model", text, isError }]);
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
                                Sandbox
                            </h2>

                        </div>
                    </div>
                </div>
            </div>

            <div className={`container ${showChatbot ? "show-chatbot" : ""}`} style={styles.chatContainer}>
                {/* <button onClick={() => setShowChatbot((prev) => !prev)} id="chatbot-toggler">
                    <span className="material-symbols-rounded">mode_comment</span>
                    <span className="material-symbols-rounded">close</span>
                </button> */}
                <div className="chatbot-popup" style={styles.chatWindow}>
                    {/* Chatbot Header */}
                    <div className="chat-header">
                        <div className="header-info">
                            {/* <ChatbotIcon /> */}
                            <h2 className="logo-text">Chatbot</h2>
                        </div>
                        {/* <button onClick={() => setShowChatbot((prev) => !prev)} className="material-symbols-rounded">
                            keyboard_arrow_down
                        </button> */}
                    </div>
                    {/* Chatbot Body */}
                    <div ref={chatBodyRef} className="chat-body">
                        <div className="message bot-message">
                            {/* <ChatbotIcon /> */}
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
