// src/components/GeneralInfo.jsx
import { useState } from "react";
import "../styles/general.css";

export default function GeneralInfo({ onSave }) {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsEditing(false);
    onSave(info);
  };

  return (
    <div className="section">
      <h2>General Information</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
