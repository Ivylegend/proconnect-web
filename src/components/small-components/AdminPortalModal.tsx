import React, { useState } from "react";
import PropTypes from "prop-types";
import { X, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminPortalModal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password === "proconnect2026") {
      // Successful login - navigate to admin page
      navigate("/admin");
      onClose();
      setPassword("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleClose = () => {
    setPassword("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8 md:p-10">
          {/* Padlock Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
            Sales Admin Portal
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-center mb-8 text-sm md:text-base">
            Proconnect International Student Loan
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Password Input */}
            <div>
              <label
                htmlFor="admin-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Admin Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-red-700 hover:to-blue-700 transition-all shadow-lg transform hover:scale-[1.02]"
            >
              Login to Portal
            </button>
          </form>

          {/* Password Hint */}
          <p className="mt-6 text-xs md:text-sm text-gray-500 text-center">
            Authorized personnel only • Password: proconnect2026
          </p>
        </div>
      </div>
    </div>
  );
};

AdminPortalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AdminPortalModal;
