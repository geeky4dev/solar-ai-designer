import React, { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // URL base del backend según entorno (desarrollo o producción)
  const backendURL = import.meta.env.VITE_BACKEND_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse("");

    try {
      const res = await fetch(`${backendURL}/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4 mb-4 shadow">
      <h5>Ask the Solar AI Assistant</h5>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something about solar design..."
        />
        <button className="btn btn-primary mt-2" disabled={loading || !message.trim()}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" />
              Asking...
            </>
          ) : (
            "Ask"
          )}
        </button>
      </form>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {response && (
        <div className="alert alert-success mt-3">
          <strong>Response:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default Chat;
