export default function GeneralPreview({ name, email, phone }) {
  return (
    <>
      <h1>{name}</h1>
      <span>{email}</span>
      <span>{phone}</span>
    </>
  );
}
