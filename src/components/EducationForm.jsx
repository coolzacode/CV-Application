import { useState } from "react";

export default function EducationForm({ setEducationData }) {
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
  }

  return (
    <form className="education-form">
      <label htmlFor="school">School</label>
      <input id="school" type="text" onChange={updateSchool} />
      <label htmlFor="degree">Degree</label>
      <input id="degree" type="text" onChange={updateDegree} />
      <label htmlFor="study">Field of Study</label>
      <input id="study" type="text" onChange={updateStudy} />
      <label htmlFor="location">Location</label>
      <input id="location" type="text" onChange={updateLocation} />
      <button type="button">Delete</button>
      <button onClick={handleSubmit}>Add School</button>
    </form>
  );
}
