import { useState } from 'react';
import Input from '../Input/Input';
import './ExperienceForm.scss';

const ExperienceForm = ({ inputs, experienceType, handleSubmit }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [experience, setExperience] = useState({
    title: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExperience((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  return (
    <>
      {isSubmitted ? (
        <>
          <div>HOLA</div>
          <button onClick={() => setIsSubmitted(false)} type='button'>
            Edit
          </button>
        </>
      ) : (
        <form
          onSubmit={(event) => {
            handleSubmit(event, experience, experienceType);
            setIsSubmitted(true);
          }}>
          {inputs.map((input) => (
            <Input
              key={input.id}
              id={input.id}
              label={
                !Array.isArray(input.label)
                  ? input.label
                  : experienceType === 'academic'
                  ? input.label[0]
                  : input.label[1]
              }
              type={input.type}
              handleChange={handleChange}
              value={experience[input.value]}
            />
          ))}
          <button type='submit'>Add</button>
        </form>
      )}
    </>
  );
};
export default ExperienceForm;
