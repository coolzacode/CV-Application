import GeneralForm from "./components/GeneralForm.jsx";
import CVPreview from "./components/CVPreview.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

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
      </section>

      <section className="cv-preview">
        <CVPreview name={userName} email={userEmail} phone={userPhone} />
      </section>
    </main>
  );
}

export default App;
