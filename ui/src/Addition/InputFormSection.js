import './FormStyles.css';
import { findInputError } from './findInputError';
import { useFormContext } from 'react-hook-form';

// Input component
export const Input = ({
  validation,
  label,
  type,
  value,
  setValue,
  placeholder,
}) => {

  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputErrors = findInputError(errors, label);

  return (
    <label>
      <span> {label}</span>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        {... register(value, validation)}
      ></input>
      <br />
      {isInvalid && <InputError message={inputErrors.error.message} key={inputErrors.error.message} />}
    </label>
  );
};

//Error component
const InputError = (message) => {
  return <div>{console.log(message)}</div>;
};
