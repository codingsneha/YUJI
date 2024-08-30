import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [responses, setResponses] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('/yuu', { message: input });
            setResponses([...responses, { user: input, bot: result.data.reply }]);
            setInput('');
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    return (
        <div className="chatbot">
            <div className="chatbox">
                {responses.map((res, index) => (
                    <div key={index}>
                        <div>You: {res.user}</div>
                        <div>Yuu: {res.bot}</div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;