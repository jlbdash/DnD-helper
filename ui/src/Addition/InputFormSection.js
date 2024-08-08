import './FormStyles.css';
import { userValidation, nameValidation, classValidation, levelValidation, raceValidation} from './FormValidation.js';

// Input component
export const Input = ({ label, type, value, setValue, placeholder }) => {
  return (
    <label>
      <span> {label}</span>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      ></input><br />
  <InputError message={message}/>
    </label>
  );
};

//Error component
const InputError = ({ message }) => {
  return (
    <div className='flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md'>
      {message}
    </div>
  )
};
