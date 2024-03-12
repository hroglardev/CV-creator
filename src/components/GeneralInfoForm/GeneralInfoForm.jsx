import Input from '../Input/Input';
import Person from '../../assets/icons/person.svg';
import PersonDark from '../../assets/icons/person-dark.svg';
import './GeneralInfoForm.scss';
const GeneralInfoForm = ({
  inputs,
  generalInformation,
  setGeneralInformation,
  currentMode
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setGeneralInformation((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  return (
    <form className='general-info-form'>
      <legend>
        <img
          src={currentMode === 'light' ? PersonDark : Person}
          alt='person'
          width={'40px'}
          className='person-logo'
        />
        General information:
      </legend>
      {inputs.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          label={input.label}
          type={input.type}
          handleChange={handleChange}
          value={generalInformation[input.value]}
          placeHolder={input.placeHolder}
        />
      ))}
    </form>
  );
};

export default GeneralInfoForm;
