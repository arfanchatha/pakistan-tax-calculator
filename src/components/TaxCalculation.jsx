import "./ScreenSizes.css";
import { useState } from "react";
import Header from "./Header";
import useTaxCalculation from "../hooks/useTaxCalculation";
import TaxComparisonTable from "./TaxComparisonTable";
import CustomPieChart from "./CustomPieChart";
import TaxDetails from "./TaxDetails";
import TaxRatesModal from "./TaxRatesModal";
import TexCalculatorForm from "./TexCalculatorForm";
import { slabs } from "../data/slabs";

function TaxCalculation() {
  const [value, setValue] = useState("");
  const [salary, setSalary] = useState(0);
  const [selectedTaxYear, setSelectedTaxYear] = useState(function () {
    const currentYear = Object.entries(slabs).map(([year, _]) =>
      parseInt(year, 10)
    );
    return currentYear[currentYear.length - 1];
  });
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [isModalOpen, setModalOpen] = useState(false);

  const results = useTaxCalculation(salary, selectedTaxYear);

  const { totalTax, annualSalary, slabIndex } = results[selectedTaxYear] || {};

  const handleValueChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, "");

    if (isNaN(rawValue)) return;

    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    setValue(formattedValue);
  };

  const handleSalary = (value) => {
    const salary = Number(value);
    if (selectedPeriod === "annually") {
      setSalary(salary);
    } else {
      setSalary(salary * 12);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valueNew = value.split(",").join("");
    const numericValue = Number(valueNew);
    if (isNaN(numericValue)) {
      console.error("Invalid value input");
      return;
    }

    handleSalary(numericValue);
  };

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const handleSelect = (e) => {
    setSelectedTaxYear(Number(e.target.value));
  };

  return (
    <>
      <Header selectedYear={selectedTaxYear} />

      <div className="container py-1">
        <div className="row text-center">
          <div className="col-lg-12">
            <TexCalculatorForm
              value={value}
              handleValueChange={handleValueChange}
              selectedPeriod={selectedPeriod}
              handlePeriodChange={handlePeriodChange}
              selectedTaxYear={selectedTaxYear}
              handleSelect={handleSelect}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>

        <div className="d-xl-flex justify-content-between">
          <div className="border border-success rounded my-3 mx-1 p-3 w-100">
            <div className="text-center mb-2">
              <h1>Tax year ended {selectedTaxYear}</h1>
              <button
                value={`View tax rates for ${selectedTaxYear}`}
                className="btn btn-success text-white my-2"
                onClick={toggleModal}
              >
                {`View tax rates for ${selectedTaxYear}`}
              </button>
              <div>
                {isModalOpen && (
                  <TaxRatesModal
                    selectedTaxYear={selectedTaxYear}
                    slabIndex={slabIndex}
                    toggleModal={toggleModal}
                    open={isModalOpen}
                  />
                )}
              </div>
            </div>
            <div className="row pr-5 ps-3">
              <div className="col-lg-6 col-md-6 col-sm-12 d-grid item-center shadow p-3 bg-body-tertiary rounded">
                <TaxDetails selectedTaxYear={selectedTaxYear} salary={salary} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <CustomPieChart
                  annualSalary={annualSalary}
                  totalTax={totalTax}
                />
              </div>
            </div>
          </div>

          <div className="border border-success rounded d-flex justify-content-center align-items-center my-3 mx-1 p-3 w-100">
            <div className="w-100">
              <h2 className="text-center">Comparison to other years</h2>
              {salary ? (
                <TaxComparisonTable
                  salary={salary}
                  selectedTaxYear={selectedTaxYear}
                />
              ) : (
                <p className="text-center">
                  Please enter the amount to compare with other years
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaxCalculation;
