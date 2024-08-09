import useFormattedResults from "../hooks/useFormattedResults";
import useTaxCalculation from "../hooks/useTaxCalculation";

const TaxComparisonTable = ({ salary, selectedTaxYear }) => {
  const results = useTaxCalculation(salary, selectedTaxYear);
  const years = Object.keys(results).sort((a, b) => b - a);

  const formatedResults = useFormattedResults(results);

  return (
    <table className="table  table-hover mt-3 ">
      <thead>
        <tr>
          <th className="p-3 mb-2 bg-success text-white">Tax Year</th>
          {years.map((year) => (
            <th
              key={year}
              className="text-center p-3 mb-2 bg-success text-white"
            >
              {year}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Monthly Income</td>
          {years.map((year) => (
            <td className="text-center" key={`${year}-monthlySalary`}>
              {formatedResults[year].monthlySalary}
            </td>
          ))}
        </tr>
        <tr>
          <td>Monthly Tax</td>
          {years.map((year) => (
            <td className="text-center" key={`${year}-monthlyTax`}>
              {formatedResults[year].monthlyTax}
            </td>
          ))}
        </tr>
        <tr>
          <td>Annual Salary</td>
          {years.map((year) => (
            <td className="text-center" key={`${year}-annualSalary`}>
              {formatedResults[year].annualSalary}
            </td>
          ))}
        </tr>
        <tr>
          <td>Annual Tax</td>
          {years.map((year) => (
            <td className="text-center" key={`${year}-totalTax`}>
              {formatedResults[year].totalTax}
            </td>
          ))}
        </tr>
        <tr>
          <td>Annual Salary After Tax</td>
          {years.map((year) => (
            <td className="text-center" key={`${year}-annualSalaryAfterTax`}>
              {formatedResults[year].annualSalaryAfterTax}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default TaxComparisonTable;
