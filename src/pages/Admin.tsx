import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Users,
  Video,
  Mail,
  ArrowRight,
  Search,
  Download,
  Clock,
  DollarSign,
  AlertCircle,
  CheckCircle2,
  UserPlus,
  Send,
  Save,
  Eye,
} from "lucide-react";

export default function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priority");
  const [paymentFilter, setPaymentFilter] = useState("All Payments");

  // Mock data
  const totalLeads = 100;
  const totalRevenue = 825000;
  const paidCount = 33;
  const highPriority = 75;
  const solidLeads = 17;

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

  const highPriorityLeads = mockLeads.filter((lead) => lead.priority >= 80);

  const teamMembers = [
    { name: "Elda", email: "elda@proconnectpay.com", leads: 20, converted: 3, rate: 15 },
    { name: "Grace", email: "grace@proconnectpay.com", leads: 20, converted: 4, rate: 20 },
    { name: "Abigail", email: "abigail@proconnectpay.com", leads: 20, converted: 4, rate: 20 },
    { name: "Sandra", email: "sandra@proconnectpay.com", leads: 20, converted: 3, rate: 15 },
    { name: "Joshua", email: "joshua@proconnectpay.com", leads: 20, converted: 3, rate: 15 },
  ];

  const handleLogout = () => {
    navigate("/home-new");
  };

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
    <div className="min-h-screen bg-gray-50">
      {/* Top Header Bar */}
      <header className="bg-gradient-to-r from-red-800 via-purple-800 to-blue-900 text-white py-4 px-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              Sales Admin Portal v2.2 - Leads Table NOW SCROLLABLE!
            </h1>
            <p className="text-sm md:text-base text-white/90 mt-1">
              Proconnect International Student Loan - {totalLeads} Total Leads
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors font-medium"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 px-6">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              activeTab === "overview"
                ? "border-red-600 text-red-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors relative ${
              activeTab === "leads"
                ? "border-red-600 text-red-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Users className="w-5 h-5" />
            Leads Management
            <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full ml-1">
              4 new
            </span>
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              activeTab === "team"
                ? "border-red-600 text-red-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Users className="w-5 h-5" />
            Team
          </button>
          <button
            onClick={() => setActiveTab("zoom")}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              activeTab === "zoom"
                ? "border-red-600 text-red-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Video className="w-5 h-5" />
            Zoom
          </button>
          <button
            onClick={() => setActiveTab("email")}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              activeTab === "email"
                ? "border-red-600 text-red-600 font-semibold bg-red-50"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Mail className="w-5 h-5" />
            Email
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-3xl font-bold text-gray-900">{totalLeads}</p>
                    <p className="text-sm text-gray-500">All time</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2">Total Leads</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-3xl font-bold text-gray-900">
                      ₦{totalRevenue.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      {paidCount} paid ({Math.round((paidCount / totalLeads) * 100)}%)
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2">Total Revenue</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                  <div>
                    <p className="text-3xl font-bold text-gray-900">{highPriority}</p>
                    <p className="text-sm text-gray-500">Score ≥ 80</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2">High Priority</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-3xl font-bold text-gray-900">{solidLeads}</p>
                    <p className="text-sm text-gray-500">
                      {Math.round((solidLeads / totalLeads) * 100)}% conversion
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 mt-2">Solid Leads</p>
              </div>
            </div>

            {/* Daily, Weekly, Monthly Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Daily</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Today:</span>
                    <span className="font-bold text-gray-900">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">New Leads:</span>
                    <span className="font-bold text-gray-900">20</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Weekly</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">This Week:</span>
                      <span className="font-bold text-gray-900">28</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg/Day:</span>
                      <span className="font-bold text-gray-900">4</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-pink-50 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">This Month:</span>
                      <span className="font-bold text-gray-900">{totalLeads}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality:</span>
                      <span className="font-bold text-gray-900">83</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* High Priority Leads List */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                🔥 High Priority Leads - Call These First!
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {highPriorityLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-gray-900">{lead.name}</h3>
                          {lead.payment === "Paid" && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                              PAID
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{lead.email}</p>
                        <p className="text-sm text-gray-600 mb-2">{lead.phone}</p>
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          {lead.degree} - {lead.class}
                        </p>
                        <p className="text-sm text-gray-600">
                          Eligible: {lead.countries.join(", ")}...
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          → {lead.assigned}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-lg">{lead.priority}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Leads Management Tab */}
        {activeTab === "leads" && (
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
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Team Members</h2>
              <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
                <UserPlus className="w-5 h-5" />
                + Add Member
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2 text-right">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Leads:</span>
                      <span className="font-bold text-gray-900">{member.leads}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Converted:</span>
                      <span className="font-bold text-gray-900">{member.converted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rate:</span>
                      <span className="font-bold text-blue-600">{member.rate}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Zoom Tab */}
        {activeTab === "zoom" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              {/* Zoom Webinar Integration */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Video className="w-6 h-6 text-red-600" />
                  <h2 className="text-xl font-bold text-gray-900">
                    Zoom Webinar Integration
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zoom API Key
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Zoom API Key"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zoom API Secret
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Zoom API Secret"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Webinar ID
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Webinar ID"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    <Save className="w-5 h-5" />
                    Save Settings
                  </button>
                </div>
              </div>

              {/* Send Webinar Reminders */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Send Webinar Reminders (High Priority Leads)
                </h2>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {highPriorityLeads.slice(0, 5).map((lead) => (
                    <div
                      key={lead.id}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                    >
                      <div className="font-medium text-gray-900 mb-1">{lead.name}</div>
                      <div className="text-sm text-gray-600 mb-1">{lead.email}</div>
                      <div className="text-sm text-gray-500 mb-3">
                        Priority: {lead.priority} - {lead.countriesCount} countries
                      </div>
                      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium">
                        Send Invite
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md"></div>
          </div>
        )}

        {/* Email Tab */}
        {activeTab === "email" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              {/* Email Marketing & API Settings */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-red-600" />
                  <h2 className="text-xl font-bold text-gray-900">
                    Email Marketing & API Settings
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resend API Key
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Resend API Key (re_...)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Paystack Secret Key
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Paystack Secret Key (sk_...)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    <Save className="w-5 h-5" />
                    Save API Keys
                  </button>
                </div>
              </div>

              {/* Send Marketing Email */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Send Marketing Email</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Study Abroad Opportunity - Limited Time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Content
                    </label>
                    <textarea
                      rows={8}
                      placeholder="Write your email content here..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-y"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Lead Category Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-left">
                  All Leads ({totalLeads})
                </button>
                <button className="w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-left">
                  High Priority ({highPriority})
                </button>
                <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium text-left">
                  Non-Payers ({totalLeads - paidCount})
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md"></div>
          </div>
        )}
      </main>
    </div>
  );
}
