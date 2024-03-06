import "./Form.scss";
import Input from "../Input/Input";

const Form = ({ handleChange, inputConfig, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {inputConfig.map((input) => {
        return (
          <Input
            key={input.id}
            id={input.id}
            label={input.label}
            type={input.type}
            value={input.value}
            handleChange={handleChange}
          />
        );
      })}
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
