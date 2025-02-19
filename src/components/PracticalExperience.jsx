// src/components/PracticalExperience.jsx
import { useState } from "react";
import "../styles/form.css";

export default function PracticalExperience({ onSave }) {
  const [experienceList, setExperienceList] = useState([]);
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setExperienceList([...experienceList, experience]);
    setExperience({
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      until: "",
    });
    onSave([...experienceList, experience]);
  };

  return (
    <div className="section">
      <h2>Practical Experience</h2>
      <input
        type="text"
        name="company"
        value={experience.company}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <input
        type="text"
        name="position"
        value={experience.position}
        onChange={handleChange}
        placeholder="Position Title"
      />
      <textarea
        name="responsibilities"
        value={experience.responsibilities}
        onChange={handleChange}
        placeholder="Responsibilities"
      ></textarea>
      <input
        type="date"
        name="from"
        value={experience.from}
        onChange={handleChange}
      />
      <input
        type="date"
        name="until"
        value={experience.until}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Experience</button>

      <ul>
        {experienceList.map((exp, index) => (
          <li key={index}>
            {exp.company} - {exp.position} ({exp.from} to {exp.until})
          </li>
        ))}
      </ul>
    </div>
  );
}
