export const FetchGeminiReply = async (question) => {
  try {
    const res = await fetch("http://localhost:5000/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Proxy Error ${res.status}: ${text}`);
    }

    const data = await res.json();
    return data.response;
  } catch (err) {
    console.error("Proxy API Error:", err);
    return "❌ Failed to get response from backend.";
  }
};

