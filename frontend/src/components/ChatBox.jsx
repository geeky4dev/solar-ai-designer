/*Chat Component (AI Assistant)*/
import React, { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse("⚠️ Error fetching response.");
    }
    setLoading(false);
  };

  return (
    <div className="card p-3 shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Ask Solar AI:</label>
          <input
            type="text"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g., How many solar panels for 600 kWh/month?"
          />
        </div>
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "Thinking..." : "Send"}
        </button>
      </form>

      {response && (
        <div className="alert alert-info mt-3">
          <strong>AI:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default Chat;