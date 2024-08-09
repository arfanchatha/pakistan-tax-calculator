import { useState, useEffect } from "react";
import { slabs } from "../data/slabs";

function useRecentYears(selectedYear) {
  const [recentYears, setRecentYears] = useState([]);

  useEffect(() => {
    const taxYears = Object.entries(slabs)
      .map(([year, _]) => parseInt(year, 10))
      .sort((a, b) => b - a);

    const index = taxYears.indexOf(selectedYear);

    if (index === -1) {
      setRecentYears([]);
      return;
    }

    let newDisplayYears;

    if (index === 0) {
      // If selected year is the first in the list
      newDisplayYears = taxYears.slice(0, 3);
    } else if (index === taxYears.length - 1) {
      // If selected year is the last in the list
      newDisplayYears = taxYears.slice(-3);
    } else {
      // Selected year is somewhere in the middle
      newDisplayYears = taxYears.slice(Math.max(index - 1, 0), index + 2);
    }

    setRecentYears(newDisplayYears);
  }, [selectedYear]);

  return recentYears;
}

export default useRecentYears;
