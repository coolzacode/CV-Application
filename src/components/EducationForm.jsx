import { useState } from "react";

export default function EducationForm({ educationData, setEducationData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [study, setStudy] = useState("");
  const [location, setLocation] = useState("");

  function updateSchool(e) {
    setSchool(e.target.value);
  }
  function updateDegree(e) {
    setDegree(e.target.value);
  }
  function updateStudy(e) {
    setStudy(e.target.value);
  }
  function updateLocation(e) {
    setLocation(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newSchool = {
      id: crypto.randomUUID(),
      school: school,
      degree: degree,
      study: study,
      location: location,
    };
    setEducationData((prevArray) => [...prevArray, newSchool]);

    setSchool("");
    setDegree("");
    setStudy("");
    setLocation("");
  }

  function handleDelete(idToDelete) {
    setEducationData((prevArray) =>
      prevArray.filter((edu) => edu.id !== idToDelete),
    );
  }

  return (
    <div className="education-section-wrapper">
      <div className="section-header">
        <h2>Education Details</h2>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Minimize" : "Expand"}
        </button>
      </div>
      {isOpen && (
        <>
          <form className="education-form">
            <label htmlFor="school">School</label>
            <input
              id="school"
              type="text"
              value={school}
              onChange={updateSchool}
            />
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              type="text"
              value={degree}
              onChange={updateDegree}
            />
            <label htmlFor="study">Field of Study</label>
            <input
              id="study"
              type="text"
              value={study}
              onChange={updateStudy}
            />
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={updateLocation}
            />
            <button onClick={handleSubmit}>Add School</button>
          </form>

          <div className="saved-schools-list">
            {educationData.map((edu) => (
              <div key={edu.id} className="saved-item-card">
                <p>
                  {edu.school} - {edu.degree}
                </p>
                <button type="button" onClick={() => handleDelete(edu.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
