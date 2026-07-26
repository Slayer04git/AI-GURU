"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setReply("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setReply(data.reply || data.error || "No response received.");
    } catch (err) {
      setReply("⚠️ Server error. Try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">AI Coding Mentor 💻</h1>

      <textarea
        className="w-full max-w-2xl p-4 border border-gray-300 rounded-md shadow-sm mb-4"
        rows="5"
        placeholder="Ask a coding/DSA question like: 'Explain recursion with code'"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
        onClick={handleAsk}
      >
        {loading ? "Thinking..." : "Ask Mentor"}
      </button>

      {reply && (
        <div className="mt-8 w-full max-w-2xl bg-white border rounded-md p-4 shadow">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">🧠 Mentor's Response:</h2>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">{reply}</pre>
        </div>
      )}
    </div>
  );
}
