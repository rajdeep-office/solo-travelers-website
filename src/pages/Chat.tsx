import React from 'react';
import AIChat from '../components/AIChat';

const Chat: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#FFA500', padding: '20px', borderRadius: '8px' }}>
            <h1 style={{ color: '#fff' }}>Chat with Our AI Assistant</h1>
            <AIChat />
        </div>
    );
};

export default Chat;