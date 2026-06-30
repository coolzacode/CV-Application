export default function GeneralPreview({ name, email, phone }) {
  return (
    <header className="resume-header">
      <h1 className="resume-name">{name}</h1>
      <div className="resume-contact-info">
        <span className="contact-item">{email}</span>
        {email && phone && <span className="separator"> | </span>}
        <span className="contact-item">{phone}</span>
      </div>
    </header>
  );
}
