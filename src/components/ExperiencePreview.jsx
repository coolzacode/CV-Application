export default function ExperiencePreview({
  id,
  company,
  position,
  location,
  date,
  responsibilities,
}) {
  return (
    <article className="preview-entry" id={id}>
      <div className="entry-header">
        <h3 className="entry-title">{company}</h3>
        <span className="entry-location">{location}</span>
      </div>
      <div className="entry-subheader">
        <span className="entry-position">{position}</span>
        <span className="entry-date">{date}</span>
      </div>
      <p className="entry-description">{responsibilities}</p>
    </article>
  );
}
