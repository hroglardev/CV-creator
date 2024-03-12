import { useState } from 'react';
import Input from '../Input/Input';
import Academic from '../../assets/icons/academic.svg';
import Work from '../../assets/icons/work.svg';
import AcademicDark from '../../assets/icons/academic-dark.svg';
import WorkDark from '../../assets/icons/work-dark.svg';

import './ExperienceForm.scss';

const ExperienceForm = ({
  inputs,
  experienceType,
  handleSubmit,
  removeExperience,
  id,
  currentMode
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [experience, setExperience] = useState({
    title: '',
    startDate: '',
    endDate: '',
    description: '',
    key: id
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
        <div className='edit-container'>
          {currentMode === 'light' ? (
            <img
              src={experienceType === 'academic' ? AcademicDark : WorkDark}
              alt={experienceType === 'academic' ? 'berret' : 'portfolio'}
              width={'40px'}
            />
          ) : (
            <img
              src={experienceType === 'academic' ? Academic : Work}
              alt={experienceType === 'academic' ? 'berret' : 'portfolio'}
              width={'40px'}
            />
          )}
          {experience.title}
          <button
            onClick={() => setIsSubmitted(false)}
            type='button'
            className={
              currentMode === 'light' ? 'light-button' : 'dark-button'
            }>
            Edit
          </button>
        </div>
      ) : (
        <>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(event, experience, experienceType);
              setIsSubmitted(true);
            }}>
            <legend>
              {currentMode === 'light' ? (
                <img
                  src={experienceType === 'academic' ? AcademicDark : WorkDark}
                  alt={experienceType === 'academic' ? 'berret' : 'portfolio'}
                  width={'50px'}
                />
              ) : (
                <img
                  src={experienceType === 'academic' ? Academic : Work}
                  alt={experienceType === 'academic' ? 'berret' : 'portfolio'}
                  width={'50px'}
                />
              )}
              Add your {experienceType} experience:
            </legend>
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
                placeHolder={input.placeHolder}
              />
            ))}
            <div className='form-buttons'>
              <button
                className={
                  currentMode === 'light' ? 'light-button' : 'dark-button'
                }
                type='submit'>
                Add
              </button>
              <button
                className={
                  currentMode === 'light' ? 'light-button' : 'dark-button'
                }
                type='button'
                onClick={() =>
                  removeExperience(experience.title, experienceType)
                }>
                Remove
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};
export default ExperienceForm;
