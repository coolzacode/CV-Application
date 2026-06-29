import GeneralPreview from "./GeneralPreview.jsx";
import EducationPreview from "./EducationPreview.jsx";

export default function CVPreview({ name, email, phone, educationData }) {
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
    </>
  );
}
