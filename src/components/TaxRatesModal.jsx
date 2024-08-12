import { taxRatesDetails } from "../data/taxRatesDetails";

const TaxRatesModal = ({ selectedTaxYear, slabIndex, toggleModal, open }) => {
  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1040,
  };

  return (
    <>
      {open && <div style={backdropStyle} onClick={toggleModal}></div>}
      <div
        className={`modal fade ${open ? "show" : ""}`}
        style={{ display: open ? "block" : "none" }}
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={toggleModal}
              ></button>
            </div>
            <div className="modal-body">
              {Object.entries(taxRatesDetails[selectedTaxYear]).map(
                ([key, value], index) => (
                  <p
                    key={index}
                    className={
                      index === slabIndex
                        ? "bg-success rounded p-1 py-2 text-justify text-white"
                        : "text-start "
                    }
                  >
                    <span>
                      {index === slabIndex && (
                        <strong>
                          <u className="text-white">Your current tax slab is</u>
                        </strong>
                      )}
                      <strong> {key}</strong>
                    </span>
                    &rarr; <span>{value}</span>
                  </p>
                )
              )}
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-success text-white w-100"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxRatesModal;
