import React from "react";
import PropTypes from "prop-types";

const ReusableModal = ({ isOpen, onClose, message }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay fixed left-1/4 border rounded-md p-8 bg-white shadow-lg w-[350px]">
          <div className="modal-content flex flex-col gap-8">
            <span className="close-button cursor-pointer text-2xl" onClick={onClose}>
              &times;
            </span>
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
