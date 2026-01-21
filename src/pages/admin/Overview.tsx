import React from "react";
import {
  Users,
  Clock,
  DollarSign,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function Overview() {
  // Mock data
  const totalLeads = 100;
  const totalRevenue = 825000;
  const paidCount = 33;
  const highPriority = 75;
  const solidLeads = 17;

  const highPriorityLeads = [
    {
      id: 1,
      name: "Omolara Olowu",
      email: "omolara.olowu@example.com",
      phone: "+2348003950595",
      degree: "Masters Degree Holder",
      class: "First Class",
      countries: ["Hong Kong", "France", "Germany"],
      priority: 100,
      payment: "Paid",
      assigned: "Abigail",
    },
    {
      id: 2,
      name: "Nneka Okafor",
      email: "nneka.okafor@example.com",
      phone: "+2348003950596",
      degree: "HND Degree Holder",
      class: "First Class",
      countries: ["US", "UK", "Canada"],
      priority: 95,
      payment: "Paid",
      assigned: "Joshua",
    },
    {
      id: 3,
      name: "Chioma Adebayo",
      email: "chioma.adebayo@example.com",
      phone: "+2348003950592",
      degree: "Bachelor Degree Holder",
      class: "First Class",
      countries: ["US", "UK"],
      priority: 90,
      payment: "Not Paid",
      assigned: "Elda",
    },
    {
      id: 4,
      name: "Adaobi Nwosu",
      email: "adaobi.nwosu@example.com",
      phone: "+2348003950594",
      degree: "Masters Degree Holder",
      class: "Second Class Lower",
      countries: ["UK", "US"],
      priority: 85,
      payment: "Pending",
      assigned: "Abigail",
    },
  ];

  return (
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
                  <p className="text-sm text-gray-500 mt-2">→ {lead.assigned}</p>
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
  );
}
