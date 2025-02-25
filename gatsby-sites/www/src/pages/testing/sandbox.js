import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { set } from 'lodash';
import NotFoundPage from '../404';


const Sandbox = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    const [userInput, setInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const predefinedText = `tonights dinner options are pizza or pasta`;


    const sendMessage = async (messageText) => {
        if (messageText.trim() === '') return;

        // Update chat history with user message
        setChatHistory((prev) => [...prev, { type: 'user', message: messageText }]);
        setInput('');

        try {

            const requestBody = {
                "contents": [{
                    "parts": [{ "text": `Using the following context: "${predefinedText}" , please address this query: ${messageText}` }]
                }]
            }
            console.log('Request Body:', JSON.stringify(requestBody)); // Log the request body

            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBAADvGyXLUSrZmILupE_V0U4FmV4uCPPQ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                const errorText = await response.text(); // Get the response body
                console.error('Error response:', errorText); // Log the error response
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response Data:', data); // Log the response data
            const botMessage = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim(); // Adjust based on the actual response structure
            console.log('Bot Message:', botMessage); // Log the bot message

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
