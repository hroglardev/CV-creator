import './Input.scss';

const Input = ({ id, label, type, handleChange, value }) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor={id}>{label + ':'}</label>
      {type !== 'textarea' ? (
        <input
          id={id}
          name={id}
          onChange={handleChange}
          type={type}
          value={value}
        />
      ) : (
        <textarea
          id={id}
          name={id}
          onChange={handleChange}
          type={type}
          value={value}
          rows={8}
        />
      )}
    </div>
  );
};

export default Input;
