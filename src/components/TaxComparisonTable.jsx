import useTaxCalculation from "../hooks/useTaxCalculation";

const TaxComparisonTable = ({ salary, selectedTaxYear }) => {
  const results = useTaxCalculation(salary, selectedTaxYear);
  const years = Object.keys(results).sort((a, b) => b - a);

  return (
    <table className="table table-bordered table-hover mt-3">
      <thead>
        <tr>
          <th>Tax Year</th>
          {years.map((year) => (
            <th key={year} className="text-center">
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
              {results[year].monthlySalary}
            </td>
          ))}
        </tr>
        <tr>
          <td>Monthly Tax</td>
          {years.map((year) => (
            <td className="text-center" key={`${year}-monthlyTax`}>
              {results[year].monthlyTax}
            </td>
          ))}
        </tr>
        <tr>
          <td>Annual Tax</td>
          {years.map((year) => (
            <td className="text-center" key={`${year}-totalTax`}>
              {results[year].totalTax}
            </td>
          ))}
        </tr>
        <tr>
          <td>Annual Salary</td>
          {years.map((year) => (
            <td className="text-center" key={`${year}-annualSalary`}>
              {results[year].annualSalary}
            </td>
          ))}
        </tr>
        <tr>
          <td>Annual Salary After Tax</td>
          {years.map((year) => (
            <td className="text-center" key={`${year}-annualSalaryAfterTax`}>
              {results[year].annualSalaryAfterTax}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default TaxComparisonTable;
