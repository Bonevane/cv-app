// src/components/CVPreview.jsx
import "../styles/cv.css";

export default function CVPreview({ general, education, experience }) {
  return (
    <div className="cv-preview">
      <h2>{general.name || "Your Name"}</h2>
      <p>
        {general.email || "email@example.com"} | {general.phone || "+123456789"}
      </p>

      <h3>Education</h3>
      {education.length > 0 ? (
        education.map((edu, index) => (
          <p key={index}>
            {edu.school} - {edu.study} ({edu.date})
          </p>
        ))
      ) : (
        <p>No education added</p>
      )}

      <h3>Work Experience</h3>
      {experience.length > 0 ? (
        experience.map((exp, index) => (
          <p key={index}>
            {exp.company} - {exp.position} ({exp.from} to {exp.until})
          </p>
        ))
      ) : (
        <p>No experience added</p>
      )}
    </div>
  );
}
  