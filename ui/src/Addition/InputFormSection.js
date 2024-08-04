import './FormStyles.css';

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
      ></input>
    </label>
  );
};
