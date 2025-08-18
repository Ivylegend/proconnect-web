import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Search,
  Filter,
  ChevronDown,
  Edit3,
  Trash2,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  MoreHorizontal,
  X,
} from "lucide-react";

const DoItYourselfTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  // Filter and search state
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [orderBy, setOrderBy] = useState("-created_at");
  const [filteredData, setFilteredData] = useState([]);

  // UI state
  const [showFilters, setShowFilters] = useState(false);
  const [editingStatus, setEditingStatus] = useState(null);

  // Fetch data function
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = {
        page: currentPage,
        page_size: pageSize,
      };

      // Add search
      if (searchTerm.trim()) {
        params.search = searchTerm.trim();
      }

      // Add ordering
      if (orderBy) {
        params.ordering = orderBy;
      }

      const response = await axios.get(
        "https://elda-ai-drf.onrender.com/api/coaching-event-leads/",
        {
          params,
        }
      );

      setData(response.data.results || []);
      setTotalCount(response.data.count || 0);
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Failed to fetch data"
      );
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  }, [
    currentPage,
    pageSize,
    searchTerm,
    paymentStatusFilter,
    genderFilter,
    orderBy,
  ]);

  // Fetch data on component mount and when dependencies change
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Frontend filtering
  useEffect(() => {
    let filtered = [...data];

    // Apply payment status filter
    if (paymentStatusFilter) {
      filtered = filtered.filter(
        (item) => item.payment_status === paymentStatusFilter
      );
    }

    // Apply gender filter
    if (genderFilter) {
      filtered = filtered.filter((item) => item.gender === genderFilter);
    }

    setFilteredData(filtered);
  }, [data, paymentStatusFilter, genderFilter]);

  // Handle search with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentPage(1); // Reset to first page when searching
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  // Change payment status
  const changePaymentStatus = async (id, newStatus) => {
    try {
      await axios.patch(
        `https://elda-ai-drf.onrender.com/api/coaching-event-leads/${id}/`,
        {
          payment_status: newStatus,
        }
      );

      // Update local state
      setData(
        data.map((item) =>
          item.id === id ? { ...item, payment_status: newStatus } : item
        )
      );
      setEditingStatus(null);
    } catch (err) {
      console.error("Error updating payment status:", err);
      alert(
        `Failed to update payment status: ${
          err.response?.data?.message || err.message
        }`
      );
    }
  };

  // Delete record
  const deleteRecord = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) {
      return;
    }

    try {
      await axios.delete(
        `https://elda-ai-drf.onrender.com/api/coaching-event-leads/${id}/`
      );

      // Remove from local state and refetch to update pagination
      setData(data.filter((item) => item.id !== id));
      setTotalCount((prev) => prev - 1);
    } catch (err) {
      console.error("Error deleting record:", err);
      alert(
        `Failed to delete record: ${err.response?.data?.message || err.message}`
      );
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get payment status badge
  const getPaymentStatusBadge = (status) => {
    const statusColors = {
      paid: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      failed: "bg-red-100 text-red-800",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          statusColors[status] || "bg-gray-100 text-gray-800"
        }`}
      >
        {status}
      </span>
    );
  };

  const displayData = filteredData;
  // Calculate pagination info
  const totalPages = Math.ceil(totalCount / pageSize);
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalCount);

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setPaymentStatusFilter("");
    setGenderFilter("");
    setOrderBy("-created_at");
    setCurrentPage(1);
  };

  if (loading && data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="animate-spin h-8 w-8 text-gray-500" />
        <span className="ml-2 text-gray-500">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center">
          <X className="h-5 w-5 text-red-500 mr-2" />
          <span className="text-red-700">Error: {error}</span>
        </div>
        <button
          onClick={fetchData}
          className="mt-2 bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded text-sm"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-5">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              DIY Coaching Event Leads
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Showing {startItem} to {endItem} of {totalCount} results
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
              <ChevronDown
                className={`h-4 w-4 transform transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-3 py-2 rounded-md text-sm"
            >
              <RefreshCw
                className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
              />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 pr-3 py-2 w-full border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Payment Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Status
                </label>
                <select
                  value={paymentStatusFilter}
                  onChange={(e) => setPaymentStatusFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Statuses</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
              </div>

              {/* Gender Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Genders</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>

              {/* Order By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={orderBy}
                  onChange={(e) => setOrderBy(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="-created_at">Newest First</option>
                  <option value="created_at">Oldest First</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={resetFilters}
                className="text-sm text-gray-600 hover:text-gray-800 underline"
              >
                Reset all filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                S/N
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name & Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Demographics
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dates
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayData.map((lead, index) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                {/* S/N */}
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    {index + 1}
                  </div>
                </td>
                {/* Name & Contact */}
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {lead.full_name}
                    </div>
                    <div className="text-sm text-gray-500">{lead.email}</div>
                    <div className="text-sm text-gray-500">{lead.phone}</div>
                  </div>
                </td>

                {/* Demographics */}
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    <div>Age: {lead.age}</div>
                    <div>Gender: {lead.gender === "M" ? "Male" : "Female"}</div>
                    <div>
                      {lead.residence_state}, {lead.residence_country}
                    </div>
                    <div>
                      <span className="font-medium">Date of birth:</span>{" "}
                      {formatDate(lead.date)}
                    </div>
                  </div>
                </td>

                {/* Details */}
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    <div>
                      <span className="font-medium">Graduate Of:</span>{" "}
                      {lead.enquiries}
                    </div>
                    <div>
                      <span className="font-medium">Degree:</span> {lead.degree}
                    </div>
                  </div>
                </td>

                {/* Payment Status */}
                <td className="px-6 py-4">
                  {editingStatus === lead.id ? (
                    <div className="flex items-center space-x-2">
                      <select
                        defaultValue={lead.payment_status}
                        onChange={(e) =>
                          changePaymentStatus(lead.id, e.target.value)
                        }
                        className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="failed">Failed</option>
                      </select>
                      <button
                        onClick={() => setEditingStatus(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      {getPaymentStatusBadge(lead.payment_status)}
                      <button
                        onClick={() => setEditingStatus(lead.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </td>

                {/* Date Created/Updated */}
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="text-sm text-gray-900">
                    <div>
                      <span className="font-medium">Created:</span>
                      {formatDate(lead.created_at)}
                    </div>
                    <div>
                      <span className="font-medium">Updated:</span>
                      {formatDate(lead.updated_at)}
                    </div>
                  </div>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => deleteRecord(lead.id)}
                    className="text-red-400 hover:text-red-600 transition-colors"
                    title="Delete record"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <MoreHorizontal className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No results found</p>
              <p className="text-sm">
                Try adjusting your search or filter criteria
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="bg-white px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-700">
            <span>
              Showing <span className="font-medium">{startItem}</span> to{" "}
              <span className="font-medium">{endItem}</span> of{" "}
              <span className="font-medium">{totalCount}</span> results
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="ml-1">Previous</span>
            </button>

            <div className="flex items-center space-x-1">
              {[...Array(Math.min(5, totalPages))].map((_, index) => {
                const pageNumber =
                  Math.max(1, Math.min(totalPages - 4, currentPage - 2)) +
                  index;
                if (pageNumber > totalPages) return null;

                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`relative inline-flex items-center px-3 py-2 border text-sm font-medium rounded-md ${
                      currentPage === pageNumber
                        ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                        : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="mr-1">Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoItYourselfTable;
