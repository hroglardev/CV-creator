import ExperienceItem from '../ExperienceItem/ExperienceItem';
import { formatDate } from '../../helpers/formatDate';
import Academic from '../../assets/icons/academic.svg';
import AcademicDark from '../../assets/icons/academic-dark.svg';
import Work from '../../assets/icons/work.svg';
import WorkDark from '../../assets/icons/work-dark.svg';
import './Experience.scss';

const Experience = ({ typeOfExperience, experiences, currentMode }) => {
  return (
    <section>
      <h3 className='experience-section'>
        {currentMode === 'light' ? (
          <img
            src={typeOfExperience === 'Academic' ? AcademicDark : WorkDark}
            alt={typeOfExperience === 'Academic' ? 'berret' : 'portfolio'}
            width={'40px'}
          />
        ) : (
          <img
            src={typeOfExperience === 'Academic' ? Academic : Work}
            alt={typeOfExperience === 'Academic' ? 'berret' : 'portfolio'}
            width={'40px'}
          />
        )}
        {typeOfExperience} experience
      </h3>
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
