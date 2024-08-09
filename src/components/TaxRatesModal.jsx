import { taxRatesDetails } from "../data/taxRatesDetails";
import Modal from "./Modal";

const TaxRatesModal = ({ selectedTaxYear, slabIndex, toggleModal }) => {
  return (
    <Modal onClose={toggleModal}>
      {Object.entries(taxRatesDetails[selectedTaxYear]).map(
        ([key, value], index) => (
          <p
            key={index}
            className={
              index === slabIndex
                ? "bg-success rounded p-1 text-justify text-dark"
                : "text-start "
            }
          >
            {/* {index === slabIndex && <strong>Your current tax slab is </strong>} */}
            <span>
              {index === slabIndex ? (
                <strong>
                  <u className="text-dark">Your current tax slab is &gt; </u>{" "}
                </strong>
              ) : (
                <span>{index}): </span>
              )}
              <strong>{key}</strong>
            </span>
            &rarr; <span>{value}</span>
          </p>
        )
      )}

      <div className="text-center">
        <button
          className="btn btn-success text-white w-50"
          onClick={toggleModal}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default TaxRatesModal;
