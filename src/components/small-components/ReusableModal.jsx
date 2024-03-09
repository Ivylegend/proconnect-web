import React from "react";
import PropTypes from "prop-types";
import Success from "../../assets/successful.png";

const ReusableModal = ({ isOpen, onClose, message }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay fixed left-0 top-0 z-40 bg-blue-100 bg-opacity-30 h-full flex items-center justify-center border p-8 shadow-lg w-full">
          <div className="modal-content p-8 rounded-md flex flex-col gap-8 bg-white max-w-[350px]">
            <span
              className="close-button cursor-pointer text-2xl"
              onClick={onClose}
            >
              &times;
            </span>
            <img src={Success} alt="success" />
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

ReusableModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ReusableModal;
