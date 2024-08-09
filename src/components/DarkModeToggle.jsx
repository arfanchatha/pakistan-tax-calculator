import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useEffect } from "react";

function DarkModeToggle() {
  // const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);

  function hanldeIcon() {
    setIsDarkMode((dark) => !dark);
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
