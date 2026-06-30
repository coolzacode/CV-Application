import { useState } from "react";

export default function ExperienceForm({ experienceData, setExperienceData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  function updateCompanyName(e) {
    setCompanyName(e.target.value);
  }
  function updatePosition(e) {
    setPosition(e.target.value);
  }
  function updateLocation(e) {
    setLocation(e.target.value);
  }
  function updateDate(e) {
    setDate(e.target.value);
  }
  function updateResponsibilities(e) {
    setResponsibilities(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newExperience = {
      id: crypto.randomUUID(),
      company: companyName,
      position: position,
      location: location,
      date: date,
      responsibilities: responsibilities,
    };
    setExperienceData((prevArray) => [...prevArray, newExperience]);
  }

  function handleDelete(idToDelete) {
    setExperienceData((prevArray) =>
      prevArray.filter((comp) => comp.id !== idToDelete),
    );
  }

  return (
    <div className="experience-section-wrapper">
      <div className="section-header">
        <h2>Experience Details</h2>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Minimize" : "Expand"}
        </button>
      </div>
      {isOpen && (
        <>
          <form className="experience-form">
            <label htmlFor="company-name">Company Name</label>
            <input id="company-name" type="text" onChange={updateCompanyName} />
            <label htmlFor="position">Position</label>
            <input id="position" type="text" onChange={updatePosition} />
            <label htmlFor="location">Location</label>
            <input id="location" type="text" onChange={updateLocation} />
            <label htmlFor="date">Date</label>
            <input id="date" type="text" onChange={updateDate} />
            <label htmlFor="responsibilities">Resposibilities</label>
            <textarea
              id="responsibilities"
              onChange={updateResponsibilities}
            ></textarea>
            <button onClick={handleSubmit}>Add Experience</button>
          </form>

          <div className="saved-experience-list">
            {experienceData.map((comp) => (
              <div key={comp.id} className="saved-item-card">
                <p>
                  {comp.company} - {comp.location}
                </p>
                <p>
                  {comp.postion} - {comp.date}
                </p>
                <p>{comp.responsibilities}</p>
                <button type="delete" onClick={() => handleDelete(comp.id)}>
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
