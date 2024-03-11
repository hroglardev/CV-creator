import Input from '../Input/Input';
import PersonLogo from '../../assets/icons/person.svg';

const GeneralInfoForm = ({
  inputs,
  generalInformation,
  setGeneralInformation
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setGeneralInformation((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  return (
    <form>
      <legend>
        <img
          src={PersonLogo}
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
        />
      ))}
    </form>
  );
};

export default GeneralInfoForm;
