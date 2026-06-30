import { useState } from "react";
export default function GeneralForm({
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function updateName(e) {
    setName(e.target.value);
  }

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function updatePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <div className="general-section-wrapper">
      <div className="section-header">
        <h2>Personal Details</h2>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Minimize" : "Expand"}
        </button>
      </div>
      {isOpen && (
        <form className="general-form">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={name} onChange={updateName} />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={updateEmail} />

          <label htmlFor="tel">Phone</label>
          <input id="tel" type="tel" value={phone} onChange={updatePhone} />

          <button type="button">Edit</button>
          <button type="button">Save</button>
        </form>
      )}
    </div>
  );
}
