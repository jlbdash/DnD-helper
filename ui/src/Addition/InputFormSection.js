export const Input = ({label, type, value, setValue, placeholder}) => {
    return(
        <label>
        {label}
        <input
          type={type}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        ></input>
      </label>
    )
};