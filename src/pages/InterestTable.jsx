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
  "Enquiries For",
  "Country Of Residence",
  "Product Interested In",
  "Country Abroad Interested In",
];

const InterestTable = () => {
  const [allCandidates, setAllCandidates] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const getAllCandidates = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}interested-candidates/`, {
        params: { page },
        headers: { "Content-Type": "application/json" },
      });

      setAllCandidates(response.data.results);
      setNextPage(response.data.next ? page + 1 : null);
      setPrevPage(response.data.previous ? page - 1 : null);
      setCurrentPage(page);
    } catch (error) {
      console.error("API Error:", error);
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
          <thead className="bg-[#db251a]">
            <tr>
              {TABLE_HEADERS.map((head, index) => (
                <th key={index} className="text-white p-4 text-left">
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
                  <td className="p-4">{candidate.phone || "N/A"}</td>
                  <td className="p-4">{candidate.gender || "N/A"}</td>
                  <td className="p-4">{candidate.enquiries || "N/A"}</td>
                  <td className="p-4">
                    {candidate.residence_country || "N/A"}
                  </td>
                  <td className="p-4">{candidate.product || "N/A"}</td>
                  <td className="p-4">
                    {candidate.country_interested_in || "N/A"}
                  </td>
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
            prevPage
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!prevPage}
          onClick={() => getAllCandidates(prevPage)}
        >
          Previous
        </button>

        <span className="px-4 py-2 font-semibold">Page {currentPage}</span>

        <button
          className={`px-4 py-2 rounded-md ${
            nextPage
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
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

export default InterestTable;
