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
    <section className="general-section">
      <header className="section-header">
        <h2>Personal Details</h2>
        <button
          className="btn-toggle"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "\u25B2" : "\u25BC"}
        </button>
      </header>

      {isOpen && (
        <form className="general-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={updateName} />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={updateEmail}
            />
          </div>

          <div className="input-group">
            <label htmlFor="tel">Phone</label>
            <input id="tel" type="tel" value={phone} onChange={updatePhone} />
          </div>
        </form>
      )}
    </section>
  );
}
