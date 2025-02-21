import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';


const Sandbox = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    const [userInput, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const predefinedText = `This is the context that the bot will use to generate responses.
You can provide any relevant information here that the bot should consider when answering user queries.`;


    const sendMessage = async (messageText) => {
        if (messageText.trim() === '') return;

        // Update chat history with user message
        setChatHistory((prev) => [...prev, { type: 'user', message: messageText }]);
        setInput('');

        //https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBAADvGyXLUSrZmILupE_V0U4FmV4uCPPQ

        try {

            const requestBody = {
                message: messageText, // Start with just the user message
            };

            console.log('Request Body:', JSON.stringify(requestBody)); // Log the request body

            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBAADvGyXLUSrZmILupE_V0U4FmV4uCPPQ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `AIzaSyBAADvGyXLUSrZmILupE_V0U4FmV4uCPPQ`,
                },
                body: JSON.stringify(requestBody),
                // body: JSON.stringify({
                //     message: `Using the details provided in the context, please address this query: ${messageText}. Context: ${predefinedText}`,
                // }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const botMessage = data.response.text; // Adjust based on the actual response structure

            // Update chat history with bot response
            setChatHistory((prev) => [...prev, { type: 'bot', message: botMessage }]);
        } catch (error) {
            console.error('Error occurred while fetching:', error);
            setChatHistory((prev) => [...prev, { type: 'bot', message: 'Error: Unable to get response.' }]);
        }


    };

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

            <div style={styles.chatContainer}>
                <div style={styles.chatWindow}>
                    {chatHistory.map((elt, i) => (
                        <div key={i} style={elt.type === 'user' ? styles.userMessage : styles.botMessage}>
                            {elt.message}
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            sendMessage(userInput);
                        }
                    }}
                    placeholder="Type your message..."
                    style={styles.input}
                />
                <button onClick={() => sendMessage(userInput)} style={styles.button}>Send</button>
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

export default Sandbox;
