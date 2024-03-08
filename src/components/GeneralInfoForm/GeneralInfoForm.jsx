import Input from '../Input/Input';

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
