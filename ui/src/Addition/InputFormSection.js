// Input component
export const Input = ({
  label,
  type,
  placeholder,
  inputText,
  setInputText,
}) => {
  let errorMsg = '';
  const error = document.getElementById('error');

  function InvalidMsg(inputText) {
    if (error.validity.valueMissing) {
      error.setCustomValidity('Required');
    } else if (inputText) {
      error.setCustomValidity('');
    } else {
      error.setCustomValidity('');
    }

    return true;
  }

  InvalidMsg(inputText);

  return (
    <>
      <label key={label}>
        <div className='spacedspacedType'>
          {label}
          <span id='error'>{errorMsg}</span>
        </div>
      </label>
      <input
        id={label}
        type={type}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={placeholder}
        message={error}
        required
      />
    </>
  );
};
