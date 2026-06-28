import GeneralPreview from "./GeneralPreview.jsx";

export default function CVPreview({ name, email, phone }) {
  return (
    <>
      <GeneralPreview name={name} email={email} phone={phone} />
    </>
  );
}
