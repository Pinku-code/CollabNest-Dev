const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
require("dotenv").config();

router.post("/", async (req, res) => {
  const question = req.body.question;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!question) {
    return res.status(400).json({ error: "❌ 'question' is required in request body." });
  }

  if (!apiKey) {
    console.error("❌ GEMINI_API_KEY is missing from environment variables.");
    return res.status(500).json({ error: "Server configuration error. API key missing." });
  }

  const wantsPoints = /points|bullet|list|steps/i.test(question);
  const prompt = wantsPoints
    ? `Answer the following in bullet points. Do NOT use asterisk (*), only use line-by-line format:\n\n${question}`
    : `Answer the following in a well-structured paragraph format:\n\n${question}`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Gemini API Error:", response.status, errorText);
      return res.status(500).json({
        error: "Failed to fetch from Gemini API",
        status: response.status,
        message: errorText,
      });
    }

    const data = await response.json();
    const result = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!result) {
      console.warn("⚠️ Gemini returned no result.");
      return res.status(200).json({ response: "No meaningful response received." });
    }

    res.json({ response: result.trim().replace(/^\*+/gm, "") });
  } catch (error) {
    console.error("🚨 Gemini Proxy Error:", error);
    res.status(500).json({ error: "Server error while contacting Gemini API." });
  }
});

module.exports = router;
