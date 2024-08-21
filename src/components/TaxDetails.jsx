import useFormattedResults from "../hooks/useFormattedResults";
import useTaxCalculation from "../hooks/useTaxCalculation";

function TaxDetails({ salary, selectedTaxYear }) {
  const results = useTaxCalculation(salary, selectedTaxYear);

  const fomatedResults = useFormattedResults(results);

  const {
    totalTax,
    monthlySalary,
    monthlyTax,
    annualSalary,
    annualSalaryAfterTax,
    salaryAfterMonthly,
  } = fomatedResults[selectedTaxYear] || {};

  return (
    <table className="table table-hover">
      <tbody>
        <tr>
          <td>Monthly Salary:</td>
          <td>{monthlySalary}</td>
        </tr>
        <tr>
          <td>Monthly tax:</td>
          <td className="text-warning font-italic">{monthlyTax}</td>
        </tr>
        <tr>
          <td>Monthly salary after tax:</td>
          <td>{salaryAfterMonthly}</td>
        </tr>
        <tr>
          <td>Annual salary:</td>
          <td>{annualSalary}</td>
        </tr>
        <tr>
          <td>Annual tax:</td>
          <td className="text-warning font-italic">{totalTax}</td>
        </tr>
        <tr>
          <td>Annual salary after tax:</td>
          <td>{annualSalaryAfterTax}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TaxDetails;
