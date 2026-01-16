import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  X,
  MapPin,
  User,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Upload,
  Shield,
  Bell,
  ChevronRight,
} from "lucide-react";

const EligibilityCheckModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    country: "",
    fullName: "",
    email: "",
    whatsapp: "",
    gender: "",
    ageRange: "",
    graduateType: "",
    cvFile: null,
    consent: false,
  });

  const [cvFileName, setCvFileName] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
      setCvFileName(files[0]?.name || "");
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const isFormValid = () => {
    return (
      formData.country &&
      formData.fullName &&
      formData.email &&
      formData.whatsapp &&
      formData.gender &&
      formData.ageRange &&
      formData.graduateType &&
      formData.cvFile &&
      formData.consent
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Let&apos;s Get Started
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-6 md:p-10">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Tell us about yourself to check your eligibility for our
                international student loan program
              </p>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4" />
                  Country of Residence *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent border-gray-300"
                  required
                >
                  <option value="">Select your country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Kenya">Kenya</option>
                  <option value="South Africa">South Africa</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4" />
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="+234 800 000 0000"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent border-gray-300"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4" />
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent border-gray-300"
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4" />
                    Age Range *
                  </label>
                  <select
                    name="ageRange"
                    value={formData.ageRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent border-gray-300"
                    required
                  >
                    <option value="">Select age range</option>
                    <option value="21-25">21-25 years</option>
                    <option value="26-30">26-30 years</option>
                    <option value="31-32">31-32 years</option>
                    <option value="33 and above">33 and above years</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="w-4 h-4" />
                  Graduate Type / Current Education Level *
                </label>
                <select
                  name="graduateType"
                  value={formData.graduateType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent border-gray-300"
                  required
                >
                  <option value="">Select your graduate type</option>
                  <option value="Bachelor Degree Holder">
                    Bachelor Degree Holder
                  </option>
                  <option value="HND Degree Holder">HND Degree Holder</option>
                  <option value="Masters Degree Holder">
                    Masters Degree Holder
                  </option>
                  <option value="OND Holder">OND Holder</option>
                  <option value="SSCE Holder">SSCE Holder</option>
                  <option value="NCE Holder">NCE Holder</option>
                  <option value="Undergraduate in 1st Year">
                    Undergraduate in 1st Year
                  </option>
                  <option value="Undergraduate in 2nd Year">
                    Undergraduate in 2nd Year
                  </option>
                  <option value="Undergraduate in 3rd Year">
                    Undergraduate in 3rd Year
                  </option>
                  <option value="Undergraduate in 4th Year">
                    Undergraduate in 4th Year
                  </option>
                  <option value="Undergraduate in 5th Year">
                    Undergraduate in 5th Year
                  </option>
                  <option value="Undergraduate in 6th Year">
                    Undergraduate in 6th Year
                  </option>
                  <option value="Undergraduate about to Begin 100 Level">
                    Undergraduate about to Begin 100 Level
                  </option>
                  <option value="Current Masters Student">
                    Current Masters Student
                  </option>
                  <option value="Current PhD Candidate">
                    Current PhD Candidate
                  </option>
                  <option value="PhD Graduate">PhD Graduate</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Upload className="w-4 h-4" />
                  Upload Your CV (Updated) *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="cvFile"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleInputChange}
                    className="hidden"
                    required
                  />
                  <label
                    htmlFor="cv-upload"
                    className="flex items-center justify-center gap-2 w-full px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors border-gray-300"
                  >
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">
                      {cvFileName || "Click to upload CV (PDF, DOC, DOCX - Max 5MB)"}
                    </span>
                  </label>
                </div>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Privacy &amp; Data Protection
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                      As a fintech company focused on education financing, we
                      prioritize your data privacy, confidentiality, and trust.
                      Your information is securely stored and encrypted, and
                      will only be used for loan eligibility assessment and
                      application processing.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ We do not share your personal details publicly without consent</li>
                      <li>✓ Your data is protected with bank-level security</li>
                      <li>✓ We comply with international data protection regulations</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-3 border-t border-blue-200">
                  <Bell className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Email Updates &amp; Communication
                    </h3>
                    <p className="text-sm text-gray-700">
                      By proceeding, you agree to receive regular email updates
                      about your application status, webinar reminders,
                      important deadlines, and helpful resources for your study
                      abroad journey. You can unsubscribe at any time.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5 flex-shrink-0"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I consent to Proconnect processing my personal data as
                      described above, and I agree to receive regular email
                      updates about my application and study abroad
                      opportunities. I understand my data will be kept
                      confidential and secure. *
                    </span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`w-full px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 ${
                  isFormValid()
                    ? "bg-red-800 text-white hover:bg-red-900 cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue to Eligibility Check
                <ChevronRight className="w-5 h-5" />
              </button>
              {!isFormValid() && (
                <p className="text-sm text-red-600 text-center">
                  Please provide your consent to privacy and data processing to
                  continue
                </p>
              )}
              <p className="text-xs text-gray-500 text-center mt-4">
                * All fields are required. Your information is securely stored
                and will only be used for loan eligibility assessment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

EligibilityCheckModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EligibilityCheckModal;

