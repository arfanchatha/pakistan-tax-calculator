import DarkModeToggle from "./DarkModeToggle";

function Header({ selectedYear }) {
  return (
    <div className="container-fluid">
      <div className="row bg-light text-center text-md-start">
        <div className="col-lg-4 col-md-2 col-sm-12">
          <img
            src="pakistan.png"
            alt="Pakistan Flag"
            width={120}
            height={100}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
          <h1>Calculate Tax on Your Salary</h1>
          <p>
            Calculate income tax on salary as per Govt of Pakistan federal
            budget {selectedYear - 1} - {selectedYear}.
          </p>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12 text-sm-end text-center my-auto">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
