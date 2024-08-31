const express = require('express');
const { getFroggieResponse } = require('../helpers/openAIhelper');
const router = express.Router();

router.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await getFroggieResponse(prompt);
    console.log("API Response:", response); // Debugging line
    res.status(200).json({ message: response });
  } catch (error) {
    console.error("Error:", error); // Debugging line
    res.status(500).json({ error: "Failed to get response from Yuu" });
  }
});

module.exports = router;