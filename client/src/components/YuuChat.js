import React, { useState } from 'react';
import { chatWithYuu } from '../helpers/yuuAPI';

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
    <div style={styles.yuuChat}>
      <div style={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === 'Yuu' ? styles.yuuMessage : styles.userMessage}>
            {msg.content}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Say something to Yuu..."
          style={styles.input}
        />
        <button style={styles.button} onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  yuuChat: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f0f4f1', /* Pale green background */
    color: '#5c5544', /* Soothing brown text color */
    fontFamily: 'Arial, sans-serif',
  },
  messages: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
  },
  yuuMessage: {
    backgroundColor: '#e0e0e0', /* Light neutral gray for Yuu messages */
    color: '#3a3a3a', /* Darker text color for contrast */
    borderRadius: '12px',
    padding: '10px',
    marginBottom: '10px',
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  userMessage: {
    backgroundColor: '#c6e0b4', /* Pale green for user messages */
    color: '#2a2a2a', /* Darker text color */
    borderRadius: '12px',
    padding: '10px',
    marginBottom: '10px',
    maxWidth: '80%',
    alignSelf: 'flex-end',
  },
  inputArea: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#f8f8f4', /* Very light beige background for input area */
    borderTop: '1px solid #d1d1d1', /* Subtle border for separation */
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #d1d1d1',
    borderRadius: '12px',
    marginRight: '10px',
  },
  button: {
    backgroundColor: '#8a8f7c', /* Soothing brown-green color */
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#7a7f6e', /* Darker brown-green on hover */
  }
};

export default YuuChat;
