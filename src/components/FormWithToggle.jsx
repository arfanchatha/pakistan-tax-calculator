const FormWithToggle = ({ isOn, handleToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default FormWithToggle;
