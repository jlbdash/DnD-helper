import './FormStyles.css';
import { findInputError } from './findInputError';

// Input component
export const Input = ({
  validation,
  label,
  type,
  value,
  setValue,
  placeholder,
}) => {
  const inputErrors = findInputError(error, name);
  return (
    <label>
      <span> {label}</span>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      ></input>
      <br />
      <InputError message={inputErrors.error.message} />
    </label>
  );
};

//Error component
const InputError = (message) => {
  return (
    <div>
      {console.log(message)}
    </div>
  );
};
