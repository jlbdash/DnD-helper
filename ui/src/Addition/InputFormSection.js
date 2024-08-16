import './FormStyles.css';
import { findInputError } from './findInputError';
import { useFormContext } from 'react-hook-form';
import { isFormInvalid } from './isFormInvalid';

// Input component
export const Input = ({
  label,
  name,
  type,
  id,
  validation,
  placeholder,
  value,
  setValue,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputErrors);

  console.log(errors);
  return (
    <label key={id}>
      {label}
      <input
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        placeholder={placeholder}
        {...register(label, validation)}
      />
      <br />
      {isInvalid && (
        <InputError
          message={inputErrors.error.message}
          key={inputErrors.error.message}
        />
      )}
    </label>
  );
};

//Error component
const InputError = (message) => {
  return <div>{console.log(message)}</div>;
};
