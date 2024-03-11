import Cv from '../../components/Cv/Cv';
import { useState } from 'react';
import GeneralInfoForm from '../../components/GeneralInfoForm/GeneralInfoForm';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm';
import AcademicDark from '../../assets/icons/academic-dark.svg';
import WorkDark from '../../assets/icons/work-dark.svg';
import Academic from '../../assets/icons/academic.svg';
import Work from '../../assets/icons/work.svg';
import './Main.scss';

import {
  generalInformationInputs,
  experienceInputs
} from '../../constants/inputs';

const Main = ({ currentMode }) => {
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
          ].filter((experience) => experience.title !== '')
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
      <section className='forms'>
        <h2>Build your CV</h2>
        <GeneralInfoForm
          inputs={generalInformationInputs}
          generalInformation={generalInfomation}
          setGeneralInformation={setGeneralInformation}
          currentMode={currentMode}
        />
        {experiences.academicExperience.map((academicExperience) => (
          <ExperienceForm
            key={academicExperience.key}
            id={academicExperience.key}
            inputs={experienceInputs}
            experienceType='academic'
            handleSubmit={handleExperiences}
            removeExperience={removeExperience}
            currentMode={currentMode}
          />
        ))}

        {experiences.workExperience.map((workExperience) => (
          <ExperienceForm
            key={workExperience.key}
            id={workExperience.key}
            inputs={experienceInputs}
            experienceType='work'
            handleSubmit={handleExperiences}
            removeExperience={removeExperience}
            currentMode={currentMode}
          />
        ))}
        <div className='add-experience-container'>
          <button
            className={currentMode === 'light' && 'light'}
            type='button'
            onClick={() => addForm('academic')}>
            <img
              src={currentMode === 'light' ? AcademicDark : Academic}
              alt={'berret'}
              width={'40px'}
            />
            Add experience
          </button>
          <button
            className={currentMode === 'light' && 'light'}
            type='button'
            onClick={() => addForm('work')}>
            <img
              src={currentMode === 'light' ? WorkDark : Work}
              alt={'portfolio'}
              width={'40px'}
            />
            Add experience
          </button>
        </div>
      </section>
      <section className='cv-wrapper'>
        <Cv
          name={generalInfomation.firstName + ' ' + generalInfomation.lastName}
          phone={generalInfomation.phone}
          email={generalInfomation.email}
          educationalExperiences={experiences.academicExperience}
          workExperiences={experiences.workExperience}
        />
      </section>
    </main>
  );
};

export default Main;
