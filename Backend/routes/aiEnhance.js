const express = require('express');
const router = express.Router();
const { gemini } = require('../utils/geminiClient'); // Import the updated gemini client

router.post('/', async (req, res) => {
  const { content } = req.body;

  try {
    if (!content) {
      return res.status(400).json({ error: '❌ Content is required' });
    }

    // Call the gemini client method to enhance the script
    const enhancedScript = await gemini.generateEnhancedScript(content); // Use the method from geminiClient.js

    // Return the enhanced script to the client
    res.json({ enhanced: enhancedScript });
  } catch (err) {
    console.error('❌ Gemini error:', err);
    res.status(500).json({ error: 'AI enhancement failed', details: err.message });
  }
});

module.exports = router;
