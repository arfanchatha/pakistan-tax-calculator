// src/FormComponent.js
import { useState } from "react";

const FormComponent = () => {
  // Define state variables for form data and slider state
  const [value, setValue] = useState("");
  const [isSliderOn, setIsSliderOn] = useState(false);
  const [storedValue, setStoredValue] = useState(null);

  // Handle value input change
  const handleValueChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  // Handle slider toggle
  const handleSliderChange = (e) => {
    setIsSliderOn(e.target.checked);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the stored value based on slider state
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      console.error("Invalid value input");
      return;
    }

    const finalValue = isSliderOn ? numericValue : numericValue * 12;
    setStoredValue(finalValue);

    // Log the result or perform further actions
    console.log("Stored value:", finalValue);
  };

  return (
    <form onBlur={handleSubmit}>
      <div>
        <label>
          Value:
          <input
            type="number"
            value={value}
            onChange={handleValueChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Multiply by 12 (slider off) / Normal value (slider on):
          <input
            type="checkbox"
            checked={isSliderOn}
            onChange={handleSliderChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      {storedValue !== null && (
        <div>
          <h2>Stored Value: {storedValue}</h2>
        </div>
      )}
    </form>
  );
};

export default FormComponent;
