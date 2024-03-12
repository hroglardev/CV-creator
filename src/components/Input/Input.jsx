import './Input.scss';

const Input = ({ id, label, type, handleChange, value, placeHolder }) => {
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
          placeholder={placeHolder}
        />
      ) : (
        <textarea
          id={id}
          name={id}
          onChange={handleChange}
          type={type}
          value={value}
          rows={5}
          placeholder={placeHolder}
        />
      )}
    </div>
  );
};

export default Input;
