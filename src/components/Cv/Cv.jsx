import ContactInfo from '../ContactInfo/ContactInfo';
import Experience from '../Experience/Experience';
import './Cv.scss';

const Cv = ({
  name,
  phone,
  email,
  educationalExperiences,
  workExperiences
}) => {
  return (
    <div className='cv-container'>
      <div className='cv-aside'>
        <ContactInfo phone={phone} email={email} />
      </div>
      <div>
        <h2>{name}</h2>

        <Experience
          typeOfExperience={'Educational'}
          experiences={educationalExperiences}
        />
        <Experience typeOfExperience={'Work'} experiences={workExperiences} />
      </div>
    </div>
  );
};

export default Cv;
