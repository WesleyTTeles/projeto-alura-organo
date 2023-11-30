import "./styles.css";

const TextField = ({
  label,
  placeholder,
  required,
  value,
  handleChangeText,
}) => {
  const handleText = (e) => {
    handleChangeText(e.target.value);
  };

  return (
    <div className="text-field">
      <label>{label}</label>
      <input
        required={required}
        placeholder={placeholder}
        onChange={handleText}
        value={value}
      />
    </div>
  );
};

export default TextField;
