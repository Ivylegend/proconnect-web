import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

const TABLE_HEADERS = [
  "S/N",
  "Full Name",
  "Email",
  "Phone Number",
  "Gender",
  "Graduate Of",
  "State Of Residence",
  "Date of Birth",
  "Age",
  "Class Of Degree",
  "Has Paid",
];

const OnboardTable = () => {
  const [allCandidates, setAllCandidates] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllCandidates = async (url = `${API_URL}onboarding-candidate/`) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setAllCandidates(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      toast.error("Error fetching candidates");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCandidates();
  }, []);

  return (
    <div className="p-4">
      <div className="border rounded-md overflow-hidden overflow-x-auto">
        <table className="w-full border border-gray-500 rounded-2xl">
          {/* TABLE HEAD */}
          <thead className="bg-gray-200">
            <tr>
              {TABLE_HEADERS.map((head, index) => (
                <th key={index} className="text-gray-600 p-4 text-left">
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody className="border border-gray-500">
            {loading ? (
              <tr>
                <td colSpan={TABLE_HEADERS.length} className="p-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              allCandidates.map((candidate, index) => (
                <tr key={index} className="border-b border-[#1E4580]">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">{candidate.full_name || "N/A"}</td>
                  <td className="p-4">{candidate.email || "N/A"}</td>
                  <td className="p-4">{candidate.phone_number || "N/A"}</td>
                  <td className="p-4">{candidate.gender || "N/A"}</td>
                  <td className="p-4">{candidate.graduate_of || "N/A"}</td>
                  <td className="p-4">{candidate.state_of_residence || "N/A"}</td>
                  <td className="p-4">{candidate.date_of_birth || "N/A"}</td>
                  <td className="p-4">{candidate.age || "N/A"}</td>
                  <td className="p-4">{candidate.class_of_degree || "N/A"}</td>
                  <td className="p-4">{candidate.has_paid ? "Yes" : "No"}</td>
                  </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          className={`px-4 py-2 rounded-md ${
            prevPage ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!prevPage}
          onClick={() => getAllCandidates(prevPage)}
        >
          Previous
        </button>

        <button
          className={`px-4 py-2 rounded-md ${
            nextPage ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!nextPage}
          onClick={() => getAllCandidates(nextPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OnboardTable;
