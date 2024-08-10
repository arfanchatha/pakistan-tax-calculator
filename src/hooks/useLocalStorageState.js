import { useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    console.log("stored value:", storedValue);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  return [value, setValue];
}
