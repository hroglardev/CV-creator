import ExperienceItem from "../ExperienceItem/ExperienceItem";

const Experience = ({ typeOfExperience, experiences }) => {
  return (
    <section>
      <h2>{typeOfExperience} experience</h2>
      {experiences.map((experience) => {
        return (
          <ExperienceItem
            key={experience.title}
            title={experience.title}
            startDate={experience.startDate}
            endDate={experience.endDate}
            description={experience.description}
          />
        );
      })}
    </section>
  );
};

export default Experience;
