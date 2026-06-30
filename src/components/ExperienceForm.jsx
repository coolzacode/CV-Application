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

    setCompanyName("");
    setPosition("");
    setLocation("");
    setDate("");
    setResponsibilities("");
  }

  function handleDelete(idToDelete) {
    setExperienceData((prevArray) =>
      prevArray.filter((comp) => comp.id !== idToDelete),
    );
  }

  return (
    <section className="experience-section">
      <header className="section-header">
        <h2>Experience Details</h2>
        <button
          className="btn-toggle"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "\u25B2" : "\u25BC"}
        </button>
      </header>

      {isOpen && (
        <>
          <form className="experience-form">
            <div className="input-group">
              <label htmlFor="company-name">Company Name</label>
              <input
                id="company-name"
                type="text"
                value={companyName}
                onChange={updateCompanyName}
              />
            </div>
            <div className="input-group">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                type="text"
                value={position}
                onChange={updatePosition}
              />
            </div>
            <div className="input-group">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                type="text"
                value={location}
                onChange={updateLocation}
              />
            </div>
            <div className="input-group">
              <label htmlFor="date">Date</label>
              <input id="date" type="text" value={date} onChange={updateDate} />
            </div>
            <div className="input-group">
              <label htmlFor="responsibilities">Responsibilities</label>
              <textarea
                id="responsibilities"
                value={responsibilities}
                onChange={updateResponsibilities}
              ></textarea>
            </div>

            <button className="btn-add" onClick={handleSubmit}>
              Add Experience
            </button>
          </form>

          <ul className="saved-items-list">
            {experienceData.map((comp) => (
              <li key={comp.id} className="saved-item-card">
                <div>
                  <p>
                    <strong>{comp.company}</strong> - {comp.location}
                  </p>
                  <p>
                    {comp.position} - {comp.date}
                  </p>
                </div>
                <button
                  className="btn-delete"
                  type="button"
                  onClick={() => handleDelete(comp.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
