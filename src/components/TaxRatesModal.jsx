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
              index === slabIndex ? "modal modal-background" : "modal "
            }
          >
            {index === slabIndex && <h3>Your current tax slab is </h3>}
            <strong>{key}</strong>&rarr; <span>{value}</span>
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
