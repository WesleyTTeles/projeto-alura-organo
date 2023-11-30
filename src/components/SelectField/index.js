import "./styles.css";

const SelectField = ({ label, required, value, itens, handleChangeText }) => {
  return (
    <div className="select-field">
      <label>{label}</label>
      <select
        required={required}
        value={value}
        onChange={(e) => handleChangeText(e.target.value)}
      >
        <option>Escolhe o seu time:</option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
