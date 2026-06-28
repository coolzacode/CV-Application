export default function GeneralForm({
  name,
  email,
  phone,
  setName,
  setEmail,
  setPhone,
}) {
  function changeName(e) {
    setName(e.target.value);
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <form className="general-form">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={changeName} />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={changeEmail} />

      <label htmlFor="tel">Phone</label>
      <input id="tel" type="tel" value={phone} onChange={changePhone} />

      <button type="button">Edit</button>
      <button>Save</button>
    </form>
  );
}
