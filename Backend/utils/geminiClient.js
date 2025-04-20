const fetch = require('node-fetch');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("❌ GEMINI_API_KEY is missing from environment variables.");
}

exports.gemini = {
  generateEnhancedScript: async (scriptContent) => {
    // Ensure the script content is provided
    if (!scriptContent) {
      throw new Error("❌ 'scriptContent' is required.");
    }

    // Adjusting the prompt to ask Gemini to enhance the clarity and structure of the script
    const prompt = `You are an expert scriptwriter and content creator. Your task is to enhance the following script, keeping it engaging, clear, and inspiring. 

Please:
1. Keep the structure clear and cohesive. Avoid using any extra symbols like asterisks, bullet points, or unnecessary punctuation marks.
2. Incorporate emojis sparingly to highlight key ideas and concepts in a visually appealing way.
3. Make sure the tone is motivating and inspiring, encouraging the audience to feel empowered and take action.
4. Ensure the script is easy to read with well-formed sentences, paragraphs, and smooth transitions.
5. Focus on clarity, conciseness, and flow.

Here is the script to enhance:

"${scriptContent}"
`;




    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

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
        throw new Error("Failed to fetch from Gemini API");
      }

      const data = await response.json();
      const result = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!result) {
        console.warn("⚠️ Gemini returned no result.");
        throw new Error("No meaningful response received.");
      }

      // Return the enhanced script
      return result.trim();
    } catch (error) {
      console.error("🚨 Gemini Proxy Error:", error);
      throw new Error("Server error while contacting Gemini API.");
    }
  },
};
