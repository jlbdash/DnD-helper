import { findInputError } from './findInputError';
import { useFormContext } from 'react-hook-form';
import { isFormInvalid } from './isFormInvalid';

// Input component
export const Input = ({
  label,
  type,
  placeholder,
  inputText,
  setInputText,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputErrors);

  console.log(errors);
  return (
    <>
      <div className="spacedType">
        <label key={label}>{label}</label>
        {isInvalid && <InputError message={inputErrors.error.message} />}
      </div>
      <input
        id={label}
        value={inputText}
        type={type}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={placeholder}
        {...register(label, validation)}
      />
      <br />
    </>
  );
};

//Error component
const InputError = (message) => {
  return <div>{console.log(message)}</div>;
};
