import { useState, useRef, useEffect } from "react";
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
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center justify-start py-6 px-3 sm:px-6 md:px-8 font-sans">
      <Navbar />

      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-6 flex flex-col flex-grow mt-6 min-h-[70vh]">
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {chatLog.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-2 sm:gap-3 items-start ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.type === "ai" && (
                <div className="bg-indigo-600 p-1 rounded-full min-w-[28px] sm:min-w-[32px]">
                  <Bot size={16} className="sm:size-[18px]" />
                </div>
              )}
              <div
                className={`px-3 sm:px-4 py-2 rounded-2xl max-w-[90%] sm:max-w-[75%] whitespace-pre-wrap text-sm sm:text-base ${
                  msg.type === "user"
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-gray-800 text-gray-200 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              {msg.type === "user" && (
                <div className="bg-gray-600 p-1 rounded-full min-w-[28px] sm:min-w-[32px]">
                  <User size={16} className="sm:size-[18px]" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-2">
              <div className="bg-indigo-600 p-1 rounded-full min-w-[28px]">
                <Bot size={16} />
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-2xl text-gray-400 animate-pulse text-sm sm:text-base">
                Thinking...
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        <div className="pt-4 border-t border-white/10 mt-4">
          <div className="flex flex-wrap items-end gap-2">
            <textarea
              className="flex-grow min-w-0 resize-none p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
              rows="1"
              placeholder="Type your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              className="shrink-0 bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-xl text-white text-sm sm:text-base"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
