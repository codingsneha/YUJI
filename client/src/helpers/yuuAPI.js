import axios from 'axios';

export const chatWithYuu = async (prompt) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/yuu/chat`, { prompt });
    return response.data.message;
  } catch (error) {
    console.error("Error chatting with Yuu:", error);
    throw error;
  }
};