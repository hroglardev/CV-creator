import ContactInfo from '../ContactInfo/ContactInfo';
import Experience from '../Experience/Experience';
import './Cv.scss';

const Cv = ({
  name,
  phone,
  email,
  website,
  educationalExperiences,
  workExperiences,
  currentMode
}) => {
  return (
    <div className='cv-container'>
      <div className='cv-aside'>
        <ContactInfo
          website={website}
          phone={phone}
          email={email}
          currentMode={currentMode}
        />
      </div>
      <div className='cv-body'>
        <h2 className='name'>{name}</h2>
        <Experience
          typeOfExperience={'Academic'}
          experiences={educationalExperiences}
          currentMode={currentMode}
        />
        <Experience
          typeOfExperience={'Work'}
          experiences={workExperiences}
          currentMode={currentMode}
        />
      </div>
    </div>
  );
};

export default Cv;
