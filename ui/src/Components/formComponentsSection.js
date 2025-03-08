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
        <div id={'error' + placeholder} className="error"></div>
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

export const TextArea = ({
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
        <div id={'error' + placeholder} className="error"></div>
      </label>
      <textarea
        style={{ width: '350px', height: '150px' }}
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

export const Checkbox = ({ label, type, inputText, setInputText }) => {
  return (
    <>
      <label style={{ display: 'inline' }}>
        {label}
        <input
          type={type}
          checked={inputText}
          onChange={(e) => {
            setInputText(e.target.checked);
          }}
        ></input>
      </label>
    </>
  );
};

export const Submit = ({ type, id, value, setInputs, inputsArray }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        value={value}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setInputs(inputsArray);
        }}
      ></input>
    </>
  );
};
