import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, addDoc, setDoc, onSnapshot, collection, doc, query, where, serverTimestamp } from 'firebase/firestore';
import NotFoundPage from '../404';

// Initialize Firebase with environment variables.
// NOTE: This setup assumes the same environment variables as the user-facing chatbot.
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

const AgentView = () => {

    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [authReady, setAuthReady] = useState(false);
    const [agentId, setAgentId] = useState(null);
    const [db, setDb] = useState(null);
    const [firebaseError, setFirebaseError] = useState(null);
    const [liveConversations, setLiveConversations] = useState([]);
    const [viewingUserId, setViewingUserId] = useState(null);

    const messagesEndRef = useRef(null);

    // Initialize Firebase and set up authentication for the agent
    useEffect(() => {
        try {
            if (!firebaseConfig.projectId) {
                throw new Error("Firebase configuration is missing. Please ensure you have a .env file with your Firebase credentials.");
            }

            const app = initializeApp(firebaseConfig);
            const _db = getFirestore(app);
            const _auth = getAuth(app);
            setDb(_db);

            const unsubscribe = onAuthStateChanged(_auth, async (user) => {
                if (user) {
                    setAgentId(user.uid);
                    // Create a document in the agents collection.
                    // This document acts as a "permission key" for the security rules.
                    const agentDocRef = doc(_db, `/artifacts/${appId}/agents/${user.uid}`);
                    await setDoc(agentDocRef, {
                        lastSeen: serverTimestamp(),
                    }, { merge: true });
                    setAuthReady(true);
                } else {
                    try {
                        if (initialAuthToken) {
                            await signInWithCustomToken(_auth, initialAuthToken);
                        } else {
                            // If no custom token is available, sign in anonymously for simplicity
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

    // Listen for all live conversations
    useEffect(() => {
        if (!authReady || !db || !agentId) return;

        const liveConversationsRef = collection(db, `/artifacts/${appId}/live-conversations`);

        const unsubscribe = onSnapshot(liveConversationsRef, (snapshot) => {
            const newConversations = snapshot.docs
                .map(doc => doc.data())
                .sort((a, b) => b.timestamp?.toMillis() - a.timestamp?.toMillis());
            setLiveConversations(newConversations);

            // If an agent is not viewing a conversation, automatically select the most recent one
            if (!viewingUserId && newConversations.length > 0) {
                setViewingUserId(newConversations[0].userId);
            }
        }, (error) => {
            console.error("Error fetching live conversations:", error);
            setFirebaseError(`Firestore Error: ${error.message}. This is likely a security permissions issue.`);
        });

        return () => unsubscribe();
    }, [authReady, db, agentId, viewingUserId]);

    // Listen for messages in the currently selected user's conversation path
    useEffect(() => {
        if (!authReady || !db || !viewingUserId) {
            setMessages([]);
            return;
        }

        const messagesRef = collection(db, `/artifacts/${appId}/conversations/${viewingUserId}/messages`);

        const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
            const newMessages = snapshot.docs
                .map(doc => doc.data())
                .sort((a, b) => a.timestamp?.toMillis() - b.timestamp?.toMillis());
            setMessages(newMessages);
        }, (error) => {
            console.error("Error fetching messages:", error);
            setFirebaseError(`Firestore Error: ${error.message}. This is likely a security permissions issue.`);
        });

        return () => unsubscribe();
    }, [authReady, db, viewingUserId]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (input.trim() === '' || !db || !viewingUserId) return;

        const messagesRef = collection(db, `/artifacts/${appId}/conversations/${viewingUserId}/messages`);

        const agentMessage = {
            text: input,
            sender: 'agent',
            timestamp: serverTimestamp(),
        };

        try {
            await addDoc(messagesRef, agentMessage);
            setInput('');
        } catch (error) {
            setFirebaseError(`Firestore Write Error: ${error.message}. Check your security rules.`);
            console.error("Firestore Write Error:", error);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const styles = `
        .agent-container {
            display: flex;
            height: 100vh;
            font-family: Inter, ui-sans-serif, system-ui, sans-serif;
            -webkit-font-smoothing: antialiased;
            background-color: #f3f4f6;
        }
        .conversation-list {
            width: 300px;
            background-color: #e5e7eb;
            overflow-y: auto;
            border-right: 1px solid #d1d5db;
        }
        .conversation-item {
            padding: 1rem;
            cursor: pointer;
            border-bottom: 1px solid #d1d5db;
            transition: all 150ms ease-in-out;
        }
        .conversation-item:hover {
            background-color: #d1d5db;
        }
        .conversation-item.active {
            background-color: #9ca3af;
            font-weight: 600;
        }
        .main-chat-area {
            flex: 1;
            display: flex;
            flex-direction: column;
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
            box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
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
        .user-id {
            font-size: 0.75rem;
            color: #4b5563;
            word-break: break-all;
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
        <div className="agent-container">
            <style>{styles}</style>
            <div className="conversation-list">
                <div className="p-4 bg-gray-600 text-white font-bold text-lg">
                    Live Conversations
                </div>
                {liveConversations.map((conv) => (
                    <div
                        key={conv.userId}
                        className={`conversation-item ${conv.userId === viewingUserId ? 'active' : ''}`}
                        onClick={() => setViewingUserId(conv.userId)}
                    >
                        <p className="font-semibold">User: <span className="user-id">{conv.userId}</span></p>
                        <p className="text-sm text-gray-700 truncate">{conv.lastMessage}</p>
                    </div>
                ))}
            </div>
            <div className="main-chat-area">
                <div className="header">
                    <h1>Conversation with <span className="user-id">{viewingUserId}</span></h1>
                </div>
                <div className="message-area">
                    {messages.map((message, index) => (
                        <div key={index} className={`message-container ${message.sender}`}>
                            <div className={`message-bubble ${message.sender}`}>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <form onSubmit={handleSendMessage} className="input-form">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Send a message to the user..."
                        className="input-field"
                        disabled={!viewingUserId}
                    />
                    <button
                        type="submit"
                        className="submit-button"
                        aria-label="Send message"
                        disabled={!viewingUserId}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.5rem', width: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AgentView;
