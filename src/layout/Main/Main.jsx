import Cv from '../../components/Cv/Cv';
import { useState } from 'react';
import GeneralInfoForm from '../../components/GeneralInfoForm/GeneralInfoForm';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm';
// import Academic from '../../assets/icons/academic.svg';
// import AcademicDark from '../../assets/icons/academic-dark.svg';
import './Main.scss';

import {
  generalInformationInputs,
  experienceInputs
} from '../../constants/inputs';

const Main = () => {
  const [generalInfomation, setGeneralInformation] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [experiences, setExperiences] = useState({
    academicExperience: [],
    workExperience: []
  });
  const handleExperiences = (event, formData, experienceType) => {
    event.preventDefault();
    const { title, startDate, endDate, description, key } = formData;
    console.log(formData);
    const experienceExists = experiences[`${experienceType}Experience`].some(
      (experience) => experience.title === title
    );
    experienceExists
      ? null
      : setExperiences((previousData) => ({
          ...previousData,
          [`${experienceType}Experience`]: [
            ...previousData[`${experienceType}Experience`],
            { title, startDate, endDate, description, key }
          ].filter((experience) => experience.title === '')
        }));
  };

  const removeExperience = (experienceTitle, experienceType) => {
    setExperiences((previousData) => ({
      ...previousData,
      [`${experienceType}Experience`]: previousData[
        `${experienceType}Experience`
      ].filter((experience) => experience.title !== experienceTitle)
    }));
  };

  const addForm = (formType) => {
    console.log('add form');
    setExperiences((previousData) => ({
      ...previousData,
      [`${formType}Experience`]: [
        ...previousData[`${formType}Experience`],
        {
          title: '',
          startDate: '',
          endDate: '',
          description: '',
          key: crypto.randomUUID()
        }
      ]
    }));
  };

  return (
    <main className='main'>
      <h2>Build your CV</h2>
      <GeneralInfoForm
        inputs={generalInformationInputs}
        generalInformation={generalInfomation}
        setGeneralInformation={setGeneralInformation}
      />
      {experiences.academicExperience.map((academicExperience) => (
        <ExperienceForm
          key={academicExperience.key}
          inputs={experienceInputs}
          experienceType='academic'
          handleSubmit={handleExperiences}
          removeExperience={removeExperience}
        />
      ))}

      {experiences.workExperience.map((workExperience) => (
        <ExperienceForm
          key={workExperience.key}
          inputs={experienceInputs}
          experienceType='work'
          handleSubmit={handleExperiences}
          removeExperience={removeExperience}
        />
      ))}
      <div className='add-experience-container'>
        <button type='button' onClick={() => addForm('academic')}>
          Add academic Experience
        </button>
        <button type='button' onClick={() => addForm('work')}>
          Add work Experience
        </button>
      </div>
      <Cv
        name={generalInfomation.firstName + ' ' + generalInfomation.lastName}
        phone={generalInfomation.phone}
        email={generalInfomation.email}
        educationalExperiences={experiences.academicExperience}
        workExperiences={experiences.workExperience}
      />
    </main>
  );
};

export default Main;
