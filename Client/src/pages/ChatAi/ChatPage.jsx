import { useState } from "react";
import { FetchGeminiReply } from "./FetchGeminiReplay";
import Navbar from "../../components/Navbar";
const ChatPage = () => {
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    const response = await FetchGeminiReply(question);
    setReply(response);
    setLoading(false);
  };

  return (
    <div>
      <Navbar/>
        <div className="p-4 mt-10">
      <textarea
        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Ask something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded" onClick={handleSend}>
        Send
      </button>
      {loading ? (
        <p className="mt-4 italic">Thinking...</p>
      ) : (
        <pre className="mt-4 whitespace-pre-wrap">{reply}</pre>
      )}
    </div>
    </div>
  
  );
};

export default ChatPage;
