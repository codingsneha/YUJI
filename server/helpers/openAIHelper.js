// openAIhelper.js
const OpenAI = require('openai');

const client = new OpenAI({
  apikey: process.env.OPENAI_API_KEY,
});

async function getFroggieResponse(prompt) {
  try {
    const chatCompletion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a friendly frog named Froggie. Speak like a friend who is wise and understanding." },
        { role: "user", content: prompt }
      ],
    });

    console.log("Chat Completion Response:", chatCompletion); // Debugging line
    return chatCompletion.choices[0].message.content;

  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw error;
  }
}

module.exports = { getFroggieResponse };
