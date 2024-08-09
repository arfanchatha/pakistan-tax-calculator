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

  function hanldeIcon() {
    setIsDarkMode((dark) => !dark);
  }
  useEffect(
    function () {
      const bodyElement = document.querySelector("body");
      console.log(bodyElement);

      const newTheme = isDarkMode ? "light" : "dark";

      bodyElement.setAttribute("data-bs-theme", `${newTheme}`);
    },
    [isDarkMode]
  );

  return (
    <ButtonIcon onClick={hanldeIcon}>
      {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
