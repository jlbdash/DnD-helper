
// Input component
export const Input = ({
  label,
  type,
  placeholder,
  inputText,
  setInputText,
  validation
}) => {
  
  return (
    <>
      <label key={placeholder}>
        <div className="spacedspacedType">
          {label}
          <span id="error"></span>
        </div>
      </label>
      <input
        id={placeholder}
        type={type}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          validation(e.target.value);
        }}
        placeholder={placeholder}
        required
      />
    </>
  );
};
