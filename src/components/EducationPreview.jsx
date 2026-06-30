export default function EducationPreview({
  id,
  school,
  degree,
  study,
  location,
}) {
  return (
    <div className="education-preview">
      <div id={id}>
        <h1>{school}</h1>
        <span>{degree}</span>
        <span>{study}</span>
        <span>{location}</span>
      </div>
    </div>
  );
}
