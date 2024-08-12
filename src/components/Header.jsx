import "./Header.css";
import DarkModeToggle from "./DarkModeToggle";

function Header({ selectedYear }) {
  return (
    <div className="container pt-3 pb-1">
      <div className="row justify-content-center align-items-center">
        <div className="col-auto">
          <img
            src="pakistan.png"
            alt="Pakistan Flag"
            width={120}
            height={100}
            className="flag"
          />
        </div>
        <div className="col text-center">
          <h1>Calculate Tax on Your Salary</h1>
          <p className="header-detail">
            Calculate income tax on salary as per Govt of Pakistan federal
            budget {selectedYear - 1} - {selectedYear}.
          </p>
        </div>
        <div className="col-auto text-end">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
