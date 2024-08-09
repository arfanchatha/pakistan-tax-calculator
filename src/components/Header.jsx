function Header() {
  return (
    <div className="row bg-light text-center text-md-start py-3">
      <div className="col-lg-4 col-md-2 col-sm-12">
        <img src="pakistan.png" alt="Pakistan Flag" width={160} height={120} />
      </div>
      <div className="col-lg-8 col-md-10 col-sm-12 my-auto">
        <h1>Calculate Tax on Your Salary</h1>
        <p>
          Calculate income tax on salary as per Govt of Pakistan federal budget.
        </p>
      </div>
    </div>
  );
}

export default Header;
