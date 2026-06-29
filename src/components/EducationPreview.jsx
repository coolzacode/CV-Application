export default function EducationPreview({
  key,
  school,
  degree,
  study,
  location,
}) {
  return (
    <div className="education-preview">
      <div id={key}>
        <h1>{school}</h1>
        <span>{degree}</span>
        <span>{study}</span>
        <span>{location}</span>
      </div>
    </div>
  );
}
