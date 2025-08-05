import React, { useState } from 'react';

const AIChat: React.FC = () => {
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            const newMessage = { user: input, bot: 'Thinking...' };
            setMessages([...messages, newMessage]);
            setInput('');

            // Simulate AI response
            setTimeout(() => {
                const botResponse = `You said: "${input}". How can I assist you further?`;
                setMessages(prevMessages => {
                    const updatedMessages = [...prevMessages];
                    updatedMessages[updatedMessages.length - 1].bot = botResponse;
                    return updatedMessages;
                });
            }, 1000);
        }
    };

    return (
        <div className="ai-chat">
            <h2>AI Chat Assistant</h2>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className="chat-message">
                        <div className="user-message">{msg.user}</div>
                        <div className="bot-message">{msg.bot}</div>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default AIChat;