import React, { useState } from 'react';
import { chatWithYuu } from '../helpers/yuuAPI';
import './YuuChat.css';

const YuuChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    try {
      const yuuResponse = await chatWithYuu(input);
      const yuuMessage = { sender: "Yuu", content: yuuResponse };
      setMessages(prev => [...prev, yuuMessage]);
    } catch (error) {
      console.error("Failed to chat with Yuu", error);
    }

    setInput("");
  };

  return (
    <div className="yuu-chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'Yuu' ? 'yuu-message' : 'user-message'}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Say something to Yuu..."
        />
        <div1><button1 onClick={handleSend}>Send</button1></div1>
      </div>
    </div>
  );
};

export default YuuChat;
