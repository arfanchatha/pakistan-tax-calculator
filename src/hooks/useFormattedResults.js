import { useMemo } from "react";

const useFormattedResults = (data) => {
  return useMemo(() => {
    if (!data) return {};

    // Function to format numbers, with special handling for zero
    const formatNumber = (value) => {
      if (typeof value === "number") {
        return value === 0 ? "-" : value.toLocaleString();
      }
      return value;
    };

    // Function to recursively format nested objects
    const formatData = (obj) => {
      return Object.keys(obj).reduce((acc, key) => {
        const value = obj[key];
        if (typeof value === "object" && value !== null) {
          acc[key] = formatData(value); // Recursively format nested objects
        } else {
          acc[key] = formatNumber(value);
        }
        return acc;
      }, {});
    };

    return formatData(data);
  }, [data]);
};

export default useFormattedResults;
