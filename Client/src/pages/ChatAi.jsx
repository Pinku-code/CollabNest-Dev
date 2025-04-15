// import React, { useState, useEffect, useRef } from "react";
// import Navbar from "../components/Navbar";

// const ChatAi = () => {
//   const [inputText, setInputText] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [isThinking, setIsThinking] = useState(false);
//   const chatContainerRef = useRef(null);

//   const fetchGeminiReply = async (question) => {
//     const apiKey = "AIzaSyCyS4a9EZiM07OSAHHQjlzRtAXJ8q6lOZs"
//     ; // Replace with your actual API key
//     const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  
//     // Detect if user wants a bullet point answer
//     const wantsPoints = /points|bullet|list|steps/i.test(question);
  
//     // Create prompt based on condition
//     const prompt = wantsPoints
//       ? `Answer the following in bullet points. Do NOT use asterisk (*), only use line-by-line format:\n\n${question}`
//       : `Answer the following in a well-structured paragraph format:\n\n${question}`;
  
//     const requestBody = {
//       contents: [
//         {
//           role: "user",
//           parts: [
//             {
//               text: prompt,
//             },
//           ],
//         },
//       ],
//     };
  
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(requestBody),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       let text = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") || "❌ No response.";
  
//       // ✅ Clean up asterisk symbols if any slipped through
//       text = text.replace(/^\*+/gm, "").trim();
  
//       return text;
//     } catch (error) {
//       console.error("Gemini API Error:", error);
//       return "❌ Failed to get a response from Gemini.";
//     }
//   };
  
//   const handleSend = async () => {
//     if (!inputText.trim()) return;

//     const userMessage = { sender: "user", text: inputText };
//     setMessages((prev) => [...prev, userMessage]);
//     setInputText("");
//     setIsThinking(true);

//     const response = await fetchGeminiReply(inputText);

//     setIsThinking(false);

//     const lines = response.split("\n").filter((line) => line.trim() !== "");
//     let botLines = [];

//     for (let i = 0; i < lines.length; i++) {
//       await new Promise((res) => setTimeout(res, 300));
//       botLines.push(lines[i]);
//       setMessages((prev) => [
//         ...prev.filter((m) => m.sender !== "bot-temp"),
//         { sender: "bot-temp", text: botLines.join("\n") },
//       ]);
//     }

//     setMessages((prev) => [
//       ...prev.filter((m) => m.sender !== "bot-temp"),
//       { sender: "bot", text: botLines.join("\n") },
//     ]);
//   };

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages, isThinking]);

//   return (
//     <div>
//       <Navbar/>
//        <div className="flex flex-col h-screen bg-base-100">
//       <div
//         ref={chatContainerRef}
//         className="flex-1 overflow-y-auto p-4 space-y-4"
//       >
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`p-3 rounded-xl max-w-[75%] whitespace-pre-wrap text-sm ${
//               msg.sender === "user"
//                 ? "bg-indigo-500 text-indigo self-end ml-auto"
//                 : "bg-gray-200 text-gray-800 self-start"
//             }`}
//           >
//             {msg.text}
//           </div>
//         ))}

//         {isThinking && (
//           <div className="italic text-gray-400 animate-pulse text-sm">
//             Thinking...
//           </div>
//         )}
//       </div>

//       <div className="p-4 border-t bg-base-300 flex gap-2">
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           placeholder="Type your question..."
//           className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//         <button
//           onClick={handleSend}
//           className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//     </div>
   
//   );
// };

// export default ChatAi;
