export default function ExperiencePreview({
  id,
  company,
  position,
  location,
  date,
  responsibilities,
}) {
  return (
    <div className="experience-preview">
      <div id={id}>
        <h1>{company}</h1>
        <span>{position}</span>
        <span>{location}</span>
        <span>{date}</span>
        <p>{responsibilities}</p>
      </div>
    </div>
  );
}
