// Adding chatgpt key
"use client";

import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token"); // optional auth
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ user_query: input, history: newMessages }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: "ai", content: data.ai_response }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { role: "ai", content: "Error connecting to server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="h-64 overflow-y-auto p-4 bg-gray-100 rounded-lg flex flex-col space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-xs ${
              msg.role === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-white text-gray-800 self-start"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="bg-white text-gray-800 p-2 rounded-lg self-start animate-pulse">
            KoalaRoute AI is typing...
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask KoalaRoute AI..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
