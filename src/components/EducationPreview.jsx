export default function EducationPreview({
  id,
  school,
  degree,
  study,
  location,
}) {
  return (
    <article className="preview-entry" id={id}>
      <div className="entry-header">
        <h3 className="entry-title">{school}</h3>
        <span className="entry-location">{location}</span>
      </div>
      <div className="entry-body">
        <span className="entry-degree">
          {degree} in {study}
        </span>
      </div>
    </article>
  );
}
