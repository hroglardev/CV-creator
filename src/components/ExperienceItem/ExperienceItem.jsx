import './ExperienceItem.scss';

const ExperienceItem = ({
  title,
  startDate,
  endDate = 'on course',
  description
}) => {
  return (
    <article className='experience'>
      <h3>{title}</h3>
      <p className='date'>{`${startDate} - ${endDate}`}</p>
      <p className='experience-description'>{description}</p>
    </article>
  );
};

export default ExperienceItem;
