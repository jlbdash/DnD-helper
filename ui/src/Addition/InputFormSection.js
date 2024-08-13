import './FormStyles.css';
import { findInputError } from './findInputError';
import { useFormContext } from 'react-hook-form';
import { isFormInvalid } from './isFormInvalid';

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
  const isInvalid = isFormInvalid (inputErrors);

  return (
    <label>
      {label}
      <input
        type={type}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        {... register(label, {validation})}
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
