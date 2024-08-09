import { useMemo } from "react";

/**
 * Custom hook to format numeric values in a data object.
 * @param {Object} data - The data object to format.
 * @returns {Object} The formatted data object.
 */
const useFormattedResults = (data) => {
  return useMemo(() => {
    if (!data) return {};

    const formatNumber = (value) => {
      return typeof value === "number" ? value.toLocaleString() : value;
    };

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
