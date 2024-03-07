import ContactInfo from "../ContactInfo/ContactInfo";
import Experience from "../Experience/Experience";

const Cv = ({
  name,
  phone,
  email,
  educationalExperiences,
  workExperiences,
}) => {
  return (
    <section>
      <h2>{name}</h2>
      <ContactInfo phone={phone} email={email} />
      <Experience
        typeOfExperience={"Educational"}
        experiences={educationalExperiences}
      />
      <Experience typeOfExperience={"Work"} experiences={workExperiences} />
    </section>
  );
};

export default Cv;
