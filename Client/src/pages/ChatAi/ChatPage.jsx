import React, { useState, useRef, useEffect } from "react";
import { FetchGeminiReply } from "./FetchGeminiReplay"; // backend API call
import ReactMarkdown from "react-markdown";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const botReply = await FetchGeminiReply(input);
      const lines = botReply.split(/\r?\n/).filter((line) => line.trim() !== "");

      let index = 0;
      const interval = setInterval(() => {
        if (index < lines.length) {
          setMessages((prev) => [
            ...prev.slice(0, -1),
            {
              role: "bot",
              text: prev.slice(-1)[0]?.role === "bot"
                ? prev.slice(-1)[0].text + "\n" + lines[index]
                : lines[index],
            },
          ]);
          index++;
        } else {
          clearInterval(interval);
          setLoading(false);
        }
      }, 200);

      setMessages((prev) => [...prev, { role: "bot", text: "" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", text: "❌ Failed to get reply." }]);
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-black flex flex-col items-center px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">CollabNest AI Assistant 💬</h1>
      
      <div className="w-full max-w-2xl bg-base-100 rounded-xl shadow-lg p-4 space-y-4 overflow-y-auto h-[70vh]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl whitespace-pre-wrap text-sm leading-relaxed ${
              msg.role === "user"
                ? "bg-blue-100 text-blue-900 self-end ml-auto max-w-[80%]"
                : "bg-gray-100 text-gray-800 self-start mr-auto max-w-[80%]"
            }`}
          >
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}

        {loading && (
          <div className="animate-pulse text-gray-500 text-sm">Thinking...</div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="w-full max-w-2xl mt-4 flex gap-2">
        <textarea
          rows="2"
          className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition duration-200"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
