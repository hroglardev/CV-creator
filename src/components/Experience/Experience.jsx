import ExperienceItem from '../ExperienceItem/ExperienceItem';
import { formatDate } from '../../helpers/formatDate';
const Experience = ({ typeOfExperience, experiences }) => {
  return (
    <section>
      <h2>{typeOfExperience} experience</h2>
      {experiences.map((experience) => {
        return (
          <ExperienceItem
            key={experience.key}
            title={experience.title}
            startDate={formatDate(experience.startDate)}
            endDate={formatDate(experience.endDate)}
            description={experience.description}
          />
        );
      })}
    </section>
  );
};

export default Experience;
