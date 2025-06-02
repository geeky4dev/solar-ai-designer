/*Solar Design*/
import { useState } from "react";

export default function DesignForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    location: "",
    area: "",
    consumption: ""
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <h4>Project Parameters</h4>
      <input className="form-control mb-2" name="location" placeholder="Location" onChange={handleChange} />
      <input className="form-control mb-2" name="area" placeholder="Available Area (m²)" onChange={handleChange} />
      <input className="form-control mb-2" name="consumption" placeholder="Monthly Consumption (kWh)" onChange={handleChange} />
      <button className="btn btn-success" onClick={() => onSubmit(formData)}>Get Design</button>
    </div>
  );
}