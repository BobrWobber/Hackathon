import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
    const [messages, setMessages] = useState(["Chat started..."]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() !== "") {
            setMessages([...messages, input]);
            setInput("");
        }
    };

    return (
        <div className="chat-container">
            <h1 className="chat-title">Welcome to ChatBot AI</h1>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className="chat-message">{msg}</div>
                ))}
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="chat-input"
                />
                <button onClick={sendMessage} className="chat-send">Send</button>
            </div>
        </div>
    );
};

export default Chatbot;