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
          id={edu.id}
          school={edu.school}
          degree={edu.degree}
          study={edu.study}
          location={edu.location}
          key={edu.id}
        />
      ))}
      {experienceData.map((comp) => (
        <ExperiencePreview
          id={comp.id}
          company={comp.company}
          position={comp.position}
          location={comp.location}
          date={comp.date}
          responsibilities={comp.responsibilities}
          key={comp.id}
        />
      ))}
    </>
  );
}
