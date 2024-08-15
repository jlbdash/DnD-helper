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

  return (
    <label key={id}>
      {label}
      <input
        value={value}
        required
        {...register(validation, {
          onChange: (e) => console.log(e.target.value),
        })}
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
