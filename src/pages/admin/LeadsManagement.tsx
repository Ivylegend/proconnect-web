import React, { useState } from "react";
import { Search, Download } from "lucide-react";

export default function LeadsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priority");
  const [paymentFilter, setPaymentFilter] = useState("All Payments");

  const totalLeads = 100;

  const mockLeads = [
    {
      id: 1,
      name: "Chioma Adebayo",
      email: "chioma.adebayo@example.com",
      phone: "+2348003950592",
      country: "Nigeria",
      ageRange: "25-30",
      degree: "Bachelor Degree Holder",
      class: "First Class",
      cgpa: "2.50",
      experience: "3-5 years",
      countries: ["US", "UK"],
      countriesCount: 3,
      priority: 90,
      payment: "Not Paid",
      paymentAmount: null,
      assigned: "Elda",
      assignedDate: "1/21/2026",
      status: "New",
      feedback: "Not set",
    },
    {
      id: 2,
      name: "Chijioke Bello",
      email: "chijioke.bello@example.com",
      phone: "+2348003950593",
      country: "Nigeria",
      ageRange: "30-35",
      degree: "HND Degree Holder",
      class: "Third Class",
      cgpa: "2.60",
      experience: "3-5 years",
      countries: ["France", "Germany"],
      countriesCount: 4,
      priority: 60,
      payment: "Paid",
      paymentAmount: "N25,000",
      assigned: "Grace",
      assignedDate: "1/21/2026",
      status: "Contacted",
      feedback: "Solid Lead",
    },
    {
      id: 3,
      name: "Adaobi Nwosu",
      email: "adaobi.nwosu@example.com",
      phone: "+2348003950594",
      country: "Nigeria",
      ageRange: "35-40",
      degree: "Masters Degree Holder",
      class: "Second Class Lower",
      cgpa: "2.70",
      experience: "6+ years",
      countries: ["UK", "US"],
      countriesCount: 5,
      priority: 85,
      payment: "Pending",
      paymentAmount: null,
      assigned: "Abigail",
      assignedDate: "1/21/2026",
      status: "Follow-up",
      feedback: "Good Market",
    },
    {
      id: 4,
      name: "Omolara Olowu",
      email: "omolara.olowu@example.com",
      phone: "+2348003950595",
      country: "Nigeria",
      ageRange: "25-30",
      degree: "Masters Degree Holder",
      class: "First Class",
      cgpa: "3.50",
      experience: "3-5 years",
      countries: ["Hong Kong", "France", "Germany"],
      countriesCount: 3,
      priority: 100,
      payment: "Paid",
      paymentAmount: "N25,000",
      assigned: "Abigail",
      assignedDate: "1/20/2026",
      status: "Qualified",
      feedback: "Excellent candidate",
    },
    {
      id: 5,
      name: "Nneka Okafor",
      email: "nneka.okafor@example.com",
      phone: "+2348003950596",
      country: "Nigeria",
      ageRange: "30-35",
      degree: "HND Degree Holder",
      class: "First Class",
      cgpa: "3.20",
      experience: "6+ years",
      countries: ["US", "UK", "Canada"],
      countriesCount: 3,
      priority: 95,
      payment: "Paid",
      paymentAmount: "N25,000",
      assigned: "Joshua",
      assignedDate: "1/20/2026",
      status: "Wants to Visit the Office",
      feedback: "High potential",
    },
  ];

  const filteredLeads = mockLeads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "All Status" || lead.status === statusFilter;
    const matchesPriority =
      priorityFilter === "All Priority" ||
      (priorityFilter === "High" && lead.priority >= 80) ||
      (priorityFilter === "Medium" && lead.priority >= 60 && lead.priority < 80) ||
      (priorityFilter === "Low" && lead.priority < 60);
    const matchesPayment =
      paymentFilter === "All Payments" ||
      (paymentFilter === "Paid" && lead.payment === "Paid") ||
      (paymentFilter === "Not Paid" && lead.payment === "Not Paid") ||
      (paymentFilter === "Pending" && lead.payment === "Pending");

    return matchesSearch && matchesStatus && matchesPriority && matchesPayment;
  });

  return (
    <div className="space-y-4">
      {/* Search and Filters */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option>All Status</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Follow-up</option>
            <option>Qualified</option>
            <option>Wants to Visit the Office</option>
          </select>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option>All Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option>All Payments</option>
            <option>Paid</option>
            <option>Not Paid</option>
            <option>Pending</option>
          </select>
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
            <Download className="w-5 h-5" />
            Export CSV
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Showing {filteredLeads.length} of {totalLeads} leads
        </p>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                LEAD INFO
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ACADEMIC
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                COUNTRIES
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                PRIORITY
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                PAYMENT
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ASSIGNED
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                FEEDBACK
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">{lead.name}</div>
                    <div className="text-gray-500">{lead.email}</div>
                    <div className="text-gray-500">{lead.phone}</div>
                    <div className="text-gray-500">{lead.country}</div>
                    <div className="text-gray-500">{lead.ageRange}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">
                    <div className="text-gray-900">{lead.degree}</div>
                    <div className="text-gray-500">{lead.class}</div>
                    <div className="text-gray-500">CGPA: {lead.cgpa}</div>
                    <div className="text-gray-500">{lead.experience}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">
                    <div className="text-gray-900">{lead.countriesCount} countries</div>
                    <div className="text-gray-500">{lead.countries.join(", ")}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full font-bold">
                    {lead.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div>
                    {lead.payment === "Paid" && (
                      <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        Paid
                      </span>
                    )}
                    {lead.payment === "Not Paid" && (
                      <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium">
                        Not Paid
                      </span>
                    )}
                    {lead.payment === "Pending" && (
                      <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">
                        Pending
                      </span>
                    )}
                    {lead.paymentAmount && (
                      <div className="text-sm text-gray-600 mt-1">{lead.paymentAmount}</div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">
                    <div className="text-gray-900">{lead.assigned}</div>
                    <div className="text-gray-500">{lead.assignedDate}</div>
                    <div className="text-gray-500">{lead.status}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{lead.feedback}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors text-sm font-medium">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
