import "./App.css";
import { useState } from "react";
import GeneralForm from "./components/GeneralForm.jsx";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [educationArr, setEducationArr] = useState([]);
  const [experienceArr, setExperienceArr] = useState([]);

  return (
    <main>
      <section className="form-inputs">
        <GeneralForm
          name={userName}
          email={userEmail}
          phone={userPhone}
          setName={setUserName}
          setEmail={setUserEmail}
          setPhone={setUserPhone}
        />
        <EducationForm setEducationData={setEducationArr} />
        <ExperienceForm setExperienceData={setExperienceArr} />
      </section>

      <section className="cv-preview">
        <CVPreview
          name={userName}
          email={userEmail}
          phone={userPhone}
          educationData={educationArr}
          experienceData={experienceArr}
        />
      </section>
    </main>
  );
}

export default App;
