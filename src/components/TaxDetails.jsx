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
          <td>{monthlyTax}</td>
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
          <td>{totalTax}</td>
        </tr>
        <tr>
          <td>Annual salary after tax:</td>
          <td>{annualSalaryAfterTax}</td>
        </tr>
      </tbody>
    </table>
    // <ul className="list-unstyled ">
    //   <li className="my-2 ">
    //     <span className="fw-bolder">Monthly income:</span> {monthlySalary}
    //   </li>
    //   <li className="my-2">
    //     <span className="fw-bolder">Monthly tax:</span> {monthlyTax}
    //   </li>
    //   <li className="my-2">
    //     <span className="fw-bolder">Salary after tax monthly:</span>{" "}
    //     {salaryAfterMonthly}
    //   </li>
    //   <li className="my-2">
    //     <span className="fw-bolder">Annual salary:</span> {annualSalary}
    //   </li>
    //   <li className="my-2">
    //     <span className="fw-bolder">Annual tax:</span> {totalTax}
    //   </li>
    //   <li className="">
    //     <span className="fw-bolder">Annual salary after tax:</span>{" "}
    //     {annualSalaryAfterTax}
    //   </li>
    // </ul>
  );
}

export default TaxDetails;
