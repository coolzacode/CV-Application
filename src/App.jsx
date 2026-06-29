import "./App.css";
import { useState } from "react";
import GeneralForm from "./components/GeneralForm.jsx";
import EducationForm from "./components/EducationForm.jsx";
import CVPreview from "./components/CVPreview.jsx";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [educationArr, setEducationArr] = useState([]);

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
      </section>

      <section className="cv-preview">
        <CVPreview
          name={userName}
          email={userEmail}
          phone={userPhone}
          educationData={educationArr}
        />
      </section>
    </main>
  );
}

export default App;
