import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import NotFoundPage from '../404';

const App = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    // The conversation state is now managed locally in the component.
    const [messages, setMessages] = useState([
        {
            text: "Hello! I am a chatbot with information about the LivePerson U.S. Open event and the company LivePerson. How can I help you?",
            sender: 'bot',
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef(null);

    // Hard-coded knowledge base for the chatbot
    const context = `
    LivePerson US Open Event:
    - Title: LivePerson U.S. Open Networking Event
    - Date: September 4, 2025
    - Location: Arthur Ashe Stadium
    - Details: An exclusive networking event at the U.S. Open Women’s Semifinals, hosted by LivePerson’s CEO and senior executives.
    - Agenda: Arrival and check-in from 4:30 PM to 5:30 PM, a hospitality hour at "The Overlook" from 5:30 PM to 6:45 PM, and Loge-level seats for the Women’s Semifinals at 7:00 PM.
    - Purpose: Networking, conversations, and watching the Women’s Semifinals.

    LivePerson Company Information:
    - Name: LivePerson, Inc.
    - Description: A global technology company that develops conversational commerce and AI software.
    - Product: Best known for the Conversational Cloud, a software platform that allows consumers to message with brands. They also offer AI-powered chatbots and analytics tools.
    - Founded: In 1995 by Robert P. Locascio.
    - Headquarters: New York City, NY.
    - Mission: To empower brands to unlock the power of conversations and orchestrate seamless experiences across digital and voice channels with conversational AI.
  `;

    // A helper function to check if a message is a simple greeting
    const isGreeting = (text) => {
        const greetings = ['hello', 'hi', 'hey', 'yo', 'sup', 'greetings'];
        return greetings.includes(text.toLowerCase().trim());
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        const userMessage = {
            text: input,
            sender: 'user',
        };

        // Add user message to local state
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');
        setIsLoading(true);

        // Check if the input is a greeting before calling the API
        if (isGreeting(input)) {
            const botMessage = {
                text: "Hello there! How can I help you?",
                sender: 'bot',
            };
            // Add bot's greeting to local state
            setMessages((prevMessages) => [...prevMessages, botMessage]);
            setIsLoading(false);
        } else {
            // If not a greeting, proceed with the API call
            try {
                const botResponse = await getBotResponseFromAPI(input);
                const botMessage = {
                    text: botResponse,
                    sender: 'bot',
                };
                // Add bot's API response to local state
                setMessages((prevMessages) => [...prevMessages, botMessage]);
            } catch (error) {
                console.error("Failed to fetch bot response:", error);
                const errorMessage = {
                    text: "Sorry, I couldn't get a response. Please try again later.",
                    sender: 'bot',
                };
                // Add error message to local state
                setMessages((prevMessages) => [...prevMessages, errorMessage]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const getBotResponseFromAPI = async (query) => {
        let chatHistory = [];
        chatHistory.push({
            role: "user", parts: [{
                text: `You are an informational chatbot. You will only answer questions based on the following information. Do not use any external knowledge. If the user's question cannot be answered from the provided text, respond with "I'm sorry, I can only provide information about the LivePerson U.S. Open event and the company LivePerson."

    ${context}

    User question: ${query}`
            }]
        });

        const payload = { contents: chatHistory };
        // API key is now explicitly added to the URL.
        const apiKey = "";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=AIzaSyAss-ZkaSCtkctSaA1kCRAUAgAqo1_ueyI`;

        let response;
        let retries = 0;
        const maxRetries = 5;
        const initialDelay = 1000;

        while (retries < maxRetries) {
            try {
                response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) {
                        return result.candidates[0].content.parts[0].text;
                    } else {
                        return "I couldn't find a response for that. Please ask about the LivePerson US Open event or the company LivePerson.";
                    }
                } else if (response.status === 429) {
                    const delay = initialDelay * Math.pow(2, retries);
                    retries++;
                    await new Promise(res => setTimeout(res, delay));
                } else {
                    throw new Error(`API returned status: ${response.status}`);
                }
            } catch (error) {
                throw new Error(`Failed to fetch from API: ${error.message}`);
            }
        }
        throw new Error("Failed to get a response from the API after multiple retries.");
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // CSS styles embedded directly in the component
    const styles = `
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background-color: #f3f4f6; /* bg-gray-100 */
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* font-sans */
      -webkit-font-smoothing: antialiased; /* antialiased */
    }
    .header {
      padding: 1rem;
      background-color: white;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header h1 {
      font-size: 1.25rem; /* text-xl */
      font-weight: 700; /* font-bold */
      color: #1f2937; /* text-gray-800 */
    }
    .message-area {
      flex: 1;
      overflow-y: auto;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem; /* space-y-4 */
    }
    .message-container {
      display: flex;
    }
    .message-container.user {
      justify-content: flex-end; /* justify-end */
    }
    .message-container.bot {
      justify-content: flex-start; /* justify-start */
    }
    .message-bubble {
      max-width: 80%; /* Adjusted max-width for better responsiveness */
      padding: 1rem;
      border-radius: 1.5rem; /* rounded-3xl */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
    }
    .message-bubble.user {
      background-color: #3b82f6; /* bg-blue-500 */
      color: white;
    }
    .message-bubble.bot {
      background-color: white;
      color: #1f2937; /* text-gray-800 */
    }
    .message-bubble p {
      margin: 0;
    }
    .input-form {
      padding: 1rem;
      background-color: white;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
      display: flex;
      align-items: center;
      gap: 0.5rem; /* space-x-2 */
    }
    .input-field {
      flex: 1;
      padding: 0.75rem;
      border: 1px solid #d1d5db; /* border-gray-300 */
      border-radius: 9999px; /* rounded-full */
      outline: none;
      color: #1f2937; /* text-gray-800 */
    }
    .input-field:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px #3b82f6; /* focus:ring-2 focus:ring-blue-500 */
    }
    .submit-button {
      background-color: #2563eb; /* bg-blue-600 */
      color: white;
      padding: 0.75rem;
      border-radius: 9999px; /* rounded-full */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
      transition-property: all; /* transition duration-300 */
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
    }
    .submit-button:hover {
      background-color: #1d4ed8; /* hover:bg-blue-700 */
      transform: scale(1.05); /* hover:scale-105 */
    }
    .submit-button:active {
      transform: scale(0.95); /* active:scale-95 */
    }
    .submit-button:focus {
      outline: none;
      box-shadow: 0 0 0 2px #3b82f6; /* focus:ring-2 focus:ring-blue-500 */
    }
    .submit-button:disabled {
      background-color: #9ca3af; /* disabled:bg-gray-400 */
      transform: none;
      cursor: not-allowed;
    }
    .loading-dots {
      display: flex;
      align-items: center;
      gap: 0.25rem; /* space-x-1 */
      background-color: white;
      color: #1f2937;
      padding: 1rem;
      border-radius: 1.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .animate-pulse-dot {
      animation: pulse 1.5s infinite;
      width: 0.5rem;
      height: 0.5rem;
      background-color: #9ca3af; /* bg-gray-400 */
      border-radius: 9999px; /* rounded-full */
    }
  `;

    return (
        <div className="chat-container">
            <style>{styles}</style>
            <div className="header">
                <h1>LivePerson Chatbot</h1>
            </div>
            <div className="message-area">
                {messages.map((message, index) => (
                    <div key={index} className={`message-container ${message.sender}`}>
                        <div className={`message-bubble ${message.sender}`}>
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="message-container bot">
                        <div className="loading-dots">
                            <span className="animate-pulse-dot" style={{ animationDelay: '0s' }}></span>
                            <span className="animate-pulse-dot" style={{ animationDelay: '0.2s' }}></span>
                            <span className="animate-pulse-dot" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="input-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    className="input-field"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="submit-button"
                    aria-label="Send message"
                    disabled={isLoading}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.5rem', width: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default App;
