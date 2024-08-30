const { OpenAI } = require('openai');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

exports.getChatResponse = async (req, res) => {
    try {
        const { message } = req.body;
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
        });
        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: 'Error generating response' });
    }
};
