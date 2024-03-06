const ExperienceItem = ({
  title,
  startDate,
  endDate = "on course",
  description,
}) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{`${startDate} - ${endDate}`}</p>
      <p>{description}</p>
    </article>
  );
};

export default ExperienceItem;
