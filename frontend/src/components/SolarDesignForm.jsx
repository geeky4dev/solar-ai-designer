import React, { useState } from "react";

function SolarDesignForm() {
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [consumption, setConsumption] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [design, setDesign] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDesign(null);

    try {
      const res = await fetch("/ai/design", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location, area, consumption }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      // data es { response: "texto" } según backend actual
      setDesign(data);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4 mb-4 shadow">
      <h5 className="mb-3">Solar Design Assistant</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, Country"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Available Roof Area (m²)</label>
          <input
            type="number"
            className="form-control"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="e.g., 50"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Monthly Consumption (kWh)</label>
          <input
            type="number"
            className="form-control"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            placeholder="e.g., 300"
            required
          />
        </div>
        <button className="btn btn-success" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" />
              Generating...
            </>
          ) : (
            "Generate Design"
          )}
        </button>
      </form>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {design && (
        <div className="alert alert-info mt-4">
          <h6>☀️ Solar Design Summary</h6>
          <pre>{design.response}</pre>
        </div>
      )}
    </div>
  );
}

export default SolarDesignForm;