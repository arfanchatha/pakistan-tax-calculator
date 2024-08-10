import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useEffect } from "react";

function DarkModeToggle() {
  // const { isDarkMode, toggleDarkMode } = useDarkMode();
  const initialState = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const key = "isDarkMode";

  const [isDarkMode, setIsDarkMode] = useLocalStorageState(initialState, key);

  function hanldeIcon() {
    setIsDarkMode((dark) => !dark);

    localStorage.setItem(key, JSON.stringify(isDarkMode));
  }
  useEffect(
    function () {
      const bodyElement = document.querySelector("body");

      const newTheme = isDarkMode ? "dark" : "light";

      bodyElement.setAttribute("data-bs-theme", `${newTheme}`);
    },
    [isDarkMode]
  );

  return (
    <ButtonIcon onClick={hanldeIcon}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
