import "./ScreenSizes.css";
import { slabs } from "../data/slabs";

const TexCalculatorForm = ({
  handleSubmit,
  value,
  handleValueChange,
  selectedPeriod,
  handlePeriodChange,
  selectedTaxYear,
  handleSelect,
}) => {
  const taxYears = Object.entries(slabs)
    .map(([year, _]) => parseInt(year, 10))
    .sort((a, b) => b - a);

  return (
    <div className="bg-success px-5 py-3 rounded">
      <div
        className="input-form-responsive-container justify-content-center align-items-center"
        style={{ margin: "0 auto" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-1">
            <input
              required
              autoComplete="false"
              type="text"
              className="form-control"
              id="tax-field"
              value={value}
              onChange={handleValueChange}
              placeholder={
                selectedPeriod === "annually"
                  ? "Enter your yearly salary"
                  : "Enter your monthly salary"
              }
            />
            <div
              className="btn btn-secondary input-group-text bg-primary"
              onClick={handleSubmit}
            >
              Calculate
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div className="radio">
              <label className="text-white">
                <input
                  className="mx-2"
                  type="radio"
                  value="monthly"
                  checked={selectedPeriod === "monthly"}
                  onChange={handlePeriodChange}
                />
                Monthly
              </label>
              <label className="text-white">
                <input
                  className="mx-2"
                  type="radio"
                  value="annually"
                  checked={selectedPeriod === "annually"}
                  onChange={handlePeriodChange}
                />
                Yearly
              </label>
            </div>
            <div className="select">
              <select
                value={selectedTaxYear}
                onChange={handleSelect}
                className="form-select"
              >
                {taxYears.map((year) => (
                  <option value={year} key={year}>
                    {year - 1} - {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TexCalculatorForm;
