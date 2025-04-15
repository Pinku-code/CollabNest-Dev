import { useEffect, useRef, useState } from "react";
import { FetchGeminiReply } from "./FetchGeminiReplay";
import Navbar from "../../components/Navbar";
import { Bot, User } from "lucide-react";

const ChatPage = () => {
  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const handleSend = async () => {
    if (!question.trim()) return;

    const userMessage = { type: "user", text: question };
    setChatLog((prev) => [...prev, userMessage]);
    setLoading(true);
    setQuestion("");

    const response = await FetchGeminiReply(question);
    const aiMessage = { type: "ai", text: response };

    setChatLog((prev) => [...prev, aiMessage]);
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white flex flex-col font-sans">
      <Navbar />
      <div className="flex-grow px-4 py-2 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-4">
          {chatLog.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 items-start ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.type === "ai" && (
                <div className="bg-indigo-600 p-1 rounded-full">
                  <Bot size={18} />
                </div>
              )}
              <div
                className={`px-4 py-2 rounded-2xl max-w-[75%] transition duration-300 whitespace-pre-wrap ${
                  msg.type === "user"
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-gray-800 text-gray-200 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              {msg.type === "user" && (
                <div className="bg-gray-600 p-1 rounded-full">
                  <User size={18} />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-2">
              <div className="bg-indigo-600 p-1 rounded-full">
                <Bot size={18} />
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-2xl text-gray-400 animate-pulse">
                Thinking...
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>

      <div className="sticky bottom-0 z-10 bg-[#0f172a] border-t border-gray-700 py-3 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-2">
          <textarea
            className="flex-grow resize-none p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            rows="1"
            placeholder="Ask something amazing..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-xl text-white text-sm"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
