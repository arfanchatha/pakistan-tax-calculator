import React from "react";
// import styled from "styled-components";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  // background: "rgba(42, 35, 35, 0.762)",

  zIndex: 1000,
};

// const ModalContainer = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
//   max-width: 500px;
//   width: 100%;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
// `;

const Modal = ({ children, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed-overlay d-flex justify-content-center align-items-center text-primary"
      style={overlayStyle}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-3 rounded shadow-sm max-width-custom"
        style={{
          maxWidth: "700px",
          boxShadow: "0 5px 15px rgba(9, 6, 6, 0.975)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
