import GeneralPreview from "./GeneralPreview.jsx";
import EducationPreview from "./EducationPreview.jsx";
import ExperiencePreview from "./ExperiencePreview.jsx";

export default function CVPreview({
  name,
  email,
  phone,
  educationData,
  experienceData,
}) {
  return (
    <>
      <GeneralPreview name={name} email={email} phone={phone} />
      {educationData.map((edu) => (
        <EducationPreview
          key={edu.id}
          school={edu.school}
          degree={edu.degree}
          study={edu.study}
          location={edu.location}
        />
      ))}
      {experienceData.map((comp) => (
        <ExperiencePreview
          key={comp.id}
          company={comp.company}
          position={comp.position}
          location={comp.location}
          date={comp.date}
          responsiblities={comp.responsibilities}
        />
      ))}
    </>
  );
}
