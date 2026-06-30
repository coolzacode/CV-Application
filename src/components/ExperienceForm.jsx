import { useState } from "react";

export default function ExperienceForm({ setExperienceData }) {
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

  return (
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
      <button type="button">Delete</button>
      <button onClick={handleSubmit}>Add Experience</button>
    </form>
  );
}
