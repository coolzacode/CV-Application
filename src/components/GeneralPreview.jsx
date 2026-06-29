export default function GeneralPreview({ name, email, phone }) {
  return (
    <div className="general-preview">
      <h1>{name}</h1>
      <span>{email}</span>
      <span>{phone}</span>
    </div>
  );
}
