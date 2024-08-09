import { useState, useEffect } from "react";
import { slabs } from "../data/slabs";
import useRecentYears from "./useRecentYears";

function useTaxCalculation(salary, selectedTaxYear) {
  const [results, setResults] = useState({});

  const recentYears = useRecentYears(selectedTaxYear);

  useEffect(() => {
    // const years = recentYears;
    const findSlabIndex = (amount, taxYear) => {
      return slabs[taxYear].findIndex(
        (slab) => amount > slab.previousSlab && amount <= slab.currentSlab
      );
    };

    const calculateTotalTax = (amount, taxYear) => {
      const slabIndex = findSlabIndex(amount, taxYear);

      if (slabIndex === -1) {
        return 0;
      }

      let totalTax = 0;
      const currentSlabs = slabs[taxYear];

      for (let i = 0; i <= slabIndex; i++) {
        const slab = currentSlabs[i];

        const taxableAmount =
          i === slabIndex
            ? amount - slab.previousSlab
            : slab.currentSlab - slab.previousSlab;

        totalTax += taxableAmount * slab.currentRate;
      }

      return { totalTax, slabIndex };
    };

    const newResults = {};

    recentYears?.forEach((year) => {
      const { totalTax, slabIndex } = calculateTotalTax(salary, year);
      newResults[year] = {
        totalTax: Math.round(totalTax),
        monthlyTax: Math.round(totalTax / 12).toLocaleString(),
        taxYear: year,
        monthlySalary: Math.round(salary / 12).toLocaleString(),
        annualSalary: salary,
        annualSalaryAfterTax: Math.round(salary - totalTax).toLocaleString(),
        slabIndex,
        salaryAfterMonthly: Math.round(
          salary / 12 - totalTax / 12
        ).toLocaleString(),
      };
    });

    setResults(newResults);
  }, [salary, recentYears]);

  return results;
}

export default useTaxCalculation;
