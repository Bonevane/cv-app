// src/components/App.jsx
import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationExperience from "./EducationExperience";
import PracticalExperience from "./PracticalExperience";
import CVPreview from "./CVPreview";
import "../styles/layout.css";

export default function App() {
  const [general, setGeneral] = useState({});
  const [education, setEducation] = useState([]); // List of education entries
  const [experience, setExperience] = useState([]); // List of experience entries

  return (
    <div className="container">
      <div className="input-pane">
        <GeneralInfo onSave={setGeneral} />
        <EducationExperience onSave={setEducation} />
        <PracticalExperience onSave={setExperience} />
      </div>

      <div className="cv-pane">
        <CVPreview
          general={general}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}
