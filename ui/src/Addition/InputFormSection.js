// Input component
export const Input = ({
  label,
  type,
  placeholder,
  inputText,
  setInputText
}) => {
  return (
    <>
      <label key={label}>
        <div className="spacedspacedType">
          {label}
        </div>
      </label>
        <input
          id={label}
          type={type}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={placeholder}
          required
        />
    </>
  );
};
