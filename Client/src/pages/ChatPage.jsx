import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyCyS4a9EZiM07OSAHHQjlzRtAXJ8q6lOZs"; // Replace with your actual key

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Check if user asked for a list/points
      let modifiedPrompt = input;
      const pointKeywords = [
        "points",
        "list",
        "steps",
        "bullet",
        "explain in points",
      ];
      if (pointKeywords.some((word) => input.toLowerCase().includes(word))) {
        modifiedPrompt += "\n\nPlease answer in bullet points.";
      }

      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCyS4a9EZiM07OSAHHQjlzRtAXJ8q6lOZs",
        {
          contents: [{ parts: [{ text: modifiedPrompt }] }],
        },
        {
          params: { key: API_KEY },
        }
      );

      const aiMessage = {
        role: "model",
        content: response.data.candidates[0].content.parts[0].text,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Gemini API error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-black-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-base-100 shadow-md rounded-xl p-6 flex flex-col h-[80vh]">
        <h1 className="text-2xl font-bold mb-4">🤖 CollabNest AI Chat</h1>
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-xs whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-blue-500 self-end text-right"
                  : "bg-purple-500 text-white self-start text-left"
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          ))}

          {loading && <div className="text-gray-500 italic">Thinking...</div>}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="bg-blue-500 text-black px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleSend}
            disabled={loading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
