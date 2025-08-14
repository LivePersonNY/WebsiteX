import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, addDoc, setDoc, onSnapshot, collection, doc, query, where, serverTimestamp } from 'firebase/firestore';

// Retrieve Firebase configuration from environment variables
// This prevents hard-coding secrets directly in the source code.
const firebaseConfig = {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_FIREBASE_APP_ID,
};

// Global variables for the application ID and authentication token.
const appId = typeof __app_id !== 'undefined' ? __app_id : firebaseConfig.appId;
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : undefined;

const App = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [authReady, setAuthReady] = useState(false);
    const [userId, setUserId] = useState(null);
    const [db, setDb] = useState(null);
    const [firebaseError, setFirebaseError] = useState(null);

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

    // Initialize Firebase and set up authentication
    useEffect(() => {
        try {
            if (!firebaseConfig.projectId) {
                // If there's no projectId, it's likely the .env file is missing
                throw new Error("Firebase configuration is missing. Please ensure you have a .env file with your Firebase credentials.");
            }

            const app = initializeApp(firebaseConfig);
            const _db = getFirestore(app);
            const _auth = getAuth(app);
            setDb(_db);

            const unsubscribe = onAuthStateChanged(_auth, async (user) => {
                if (user) {
                    setUserId(user.uid);
                    setAuthReady(true);
                } else {
                    try {
                        if (initialAuthToken) {
                            await signInWithCustomToken(_auth, initialAuthToken);
                        } else {
                            await signInAnonymously(_auth);
                        }
                    } catch (e) {
                        setFirebaseError(e.message);
                        console.error("Firebase Auth Error:", e);
                    }
                }
            });
            return () => unsubscribe();
        } catch (e) {
            console.error("Error initializing Firebase:", e);
            setFirebaseError(e.message);
        }
    }, []);

    // Listen for messages in the user's conversation path
    useEffect(() => {
        if (!authReady || !db || !userId) return;

        // Correct path to the messages subcollection
        const messagesRef = collection(db, `/artifacts/${appId}/conversations/${userId}/messages`);

        const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
            const newMessages = snapshot.docs
                .map(doc => doc.data())
                .sort((a, b) => a.timestamp?.toMillis() - b.timestamp?.toMillis());
            setMessages(newMessages);

            if (newMessages.length === 0) {
                // If this is a new conversation, create the initial message and add it to the live-conversations list
                startConversation(messagesRef);
            }
        }, (error) => {
            console.error("Error fetching messages:", error);
            setFirebaseError(`Firestore Error: ${error.message}. This is likely a security permissions issue.`);
        });

        return () => unsubscribe();
    }, [authReady, db, userId]);

    // Function to start a new conversation and add it to the agent's view
    const startConversation = async (messagesRef) => {
        const liveConversationsRef = doc(db, `/artifacts/${appId}/live-conversations/${userId}`);
        const welcomeMessage = {
            text: "Hello! I am a chatbot with information about the LivePerson U.S. Open event and the company LivePerson. How can I help you?",
            sender: 'bot',
            timestamp: serverTimestamp(),
        };

        try {
            // Add the welcome message to the user's chat
            await addDoc(messagesRef, welcomeMessage);

            // Add the conversation to the agent's live list
            await setDoc(liveConversationsRef, {
                userId,
                lastMessage: welcomeMessage.text,
                timestamp: welcomeMessage.timestamp
            });
        } catch (error) {
            console.error("Failed to start conversation:", error);
            setFirebaseError("Failed to start conversation. Check your security rules and network connection.");
        }
    };

    const isGreeting = (text) => {
        const greetings = ['hello', 'hi', 'hey', 'yo', 'sup', 'greetings'];
        return greetings.includes(text.toLowerCase().trim());
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (input.trim() === '' || !db || !userId) return;

        const messagesRef = collection(db, `/artifacts/${appId}/conversations/${userId}/messages`);
        const liveConversationsRef = doc(db, `/artifacts/${appId}/live-conversations/${userId}`);

        const userMessage = {
            text: input,
            sender: 'user',
            timestamp: serverTimestamp(),
        };

        try {
            await addDoc(messagesRef, userMessage);
            // Update the live conversation list with the new message
            await setDoc(liveConversationsRef, {
                userId,
                lastMessage: userMessage.text,
                timestamp: userMessage.timestamp
            }, { merge: true });

            setInput('');
            setIsLoading(true);
        } catch (error) {
            setFirebaseError(`Firestore Write Error: ${error.message}. Check your security rules.`);
            console.error("Firestore Write Error:", error);
            setIsLoading(false);
            return;
        }

        // Logic for handling bot replies
        if (isGreeting(input)) {
            const botMessage = {
                text: "Hello there! How can I help you?",
                sender: 'bot',
                timestamp: serverTimestamp(),
            };
            await addDoc(messagesRef, botMessage);
            setIsLoading(false);
        } else {
            try {
                const botResponse = await getBotResponseFromAPI(input);
                const botMessage = {
                    text: botResponse,
                    sender: 'bot',
                    timestamp: serverTimestamp(),
                };
                await addDoc(messagesRef, botMessage);
            } catch (error) {
                console.error("Failed to fetch bot response:", error);
                const errorMessage = {
                    text: "Sorry, I couldn't get a response. Please try again later.",
                    sender: 'bot',
                    timestamp: serverTimestamp(),
                };
                await addDoc(messagesRef, errorMessage);
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
        // Get the Gemini API key from an environment variable.
        const apiKey = process.env.GATSBY_GEMINI_API_KEY;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

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

    const styles = `
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background-color: #f3f4f6;
      font-family: Inter, ui-sans-serif, system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .header {
      padding: 1rem;
      background-color: white;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header h1 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1f2937;
    }
    .message-area {
      flex: 1;
      overflow-y: auto;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .message-container {
      display: flex;
    }
    .message-container.user {
      justify-content: flex-end;
    }
    .message-container.bot, .message-container.agent {
      justify-content: flex-start;
    }
    .message-bubble {
      max-width: 80%;
      padding: 1rem;
      border-radius: 1.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .message-bubble.user {
      background-color: #3b82f6;
      color: white;
    }
    .message-bubble.bot {
      background-color: white;
      color: #1f2937;
    }
    .message-bubble.agent {
      background-color: #10b981;
      color: white;
    }
    .message-bubble p {
      margin: 0;
    }
    .input-form {
      padding: 1rem;
      background-color: white;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .input-field {
      flex: 1;
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 9999px;
      outline: none;
      color: #1f2937;
    }
    .input-field:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px #3b82f6;
    }
    .submit-button {
      background-color: #2563eb;
      color: white;
      padding: 0.75rem;
      border-radius: 9999px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .submit-button:hover {
      background-color: #1d4ed8;
      transform: scale(1.05);
    }
    .submit-button:active {
      transform: scale(0.95);
    }
    .submit-button:focus {
      outline: none;
      box-shadow: 0 0 0 2px #3b82f6;
    }
    .submit-button:disabled {
      background-color: #9ca3af;
      transform: none;
      cursor: not-allowed;
    }
    .loading-dots {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background-color: white;
      color: #1f2937;
      padding: 1rem;
      border-radius: 1.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .animate-pulse-dot {
      animation: pulse 1.5s infinite;
      width: 0.5rem;
      height: 0.5rem;
      background-color: #9ca3af;
      border-radius: 9999px;
    }
    .error-box {
      font-size: 1.25rem;
      color: #ef4444;
      text-align: center;
      padding: 1rem;
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .loading-screen {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #f3f4f6;
    }
  `;

    if (firebaseError) {
        return (
            <div className="loading-screen">
                <div className="error-box">
                    Error: {firebaseError}
                    <br />
                    This is often caused by incorrect **Firebase Security Rules** for Firestore.
                </div>
            </div>
        );
    }

    if (!authReady) {
        return (
            <div className="loading-screen">
                <div className="text-xl text-gray-600">Loading...</div>
            </div>
        );
    }

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
