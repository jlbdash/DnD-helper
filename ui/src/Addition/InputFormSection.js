// Input component
export const Input = ({
  label,
  type,
  placeholder,
  inputText,
  setInputText,
}) => {
  let errorMsg = '';
  const error = document.getElementById({label});

  function InvalidMsg() {
    if (error.validity.valueMissing) {
      errorMsg = 'Required';
    } else if (error.validity.patternMismatch) {
      errorMsg = 'Only letters, numbers and - ';
    } else {
      errorMsg = '';
    }

    return true;
  }

  return (
    <>
      <label key={placeholder}>
        <div className="spacedspacedType">
          {label}
          <span id="error">{errorMsg}</span>
        </div>
      </label>
      <input
        id={placeholder}
        type={type}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          InvalidMsg(e.target.value);
        }}
        placeholder={placeholder}
        message={error}
        required
        pattern="[^A-Za-z0-9-`-~äöüæẞßáéíóúñçâêîôûàèù]{1,}"
      />
    </>
  );
};
