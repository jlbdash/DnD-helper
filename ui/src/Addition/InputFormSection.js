
import './FormStyles.css';

// Input component
export const Input = ({
  label,
  type,
  placeholder,
  inputText,
  setInputText,
  validation,
}) => {
  return (
    <>
      <label className="spacedType" key={placeholder}>
        {label}
        <div id={'error'+placeholder} className="error"></div>
      </label>
      <input
        id={placeholder}
        type={type}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          validation(e.target.value, placeholder);
        }}
        placeholder={placeholder}
        required
      />
    </>
  );
};
