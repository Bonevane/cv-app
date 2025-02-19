// src/components/EducationExperience.jsx
import { useState } from "react";
import "../styles/form.css";

export default function EducationExperience({ onSave }) {
  const [educationList, setEducationList] = useState([]);
  const [education, setEducation] = useState({
    school: "",
    study: "",
    date: "",
  });

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setEducationList([...educationList, education]);
    setEducation({ school: "", study: "", date: "" }); // Reset input fields
    onSave([...educationList, education]);
  };

  return (
    <div className="section">
      <h2>Education Experience</h2>
      <input
        type="text"
        name="school"
        value={education.school}
        onChange={handleChange}
        placeholder="School Name"
      />
      <input
        type="text"
        name="study"
        value={education.study}
        onChange={handleChange}
        placeholder="Title of Study"
      />
      <input
        type="date"
        name="date"
        value={education.date}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Education</button>

      <ul>
        {educationList.map((edu, index) => (
          <li key={index}>
            {edu.school} - {edu.study} ({edu.date})
          </li>
        ))}
      </ul>
    </div>
  );
}
