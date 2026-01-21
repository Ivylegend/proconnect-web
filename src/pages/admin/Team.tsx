import React from "react";
import { UserPlus } from "lucide-react";

export default function Team() {
  const teamMembers = [
    { name: "Elda", email: "elda@proconnectpay.com", leads: 20, converted: 3, rate: 15 },
    { name: "Grace", email: "grace@proconnectpay.com", leads: 20, converted: 4, rate: 20 },
    { name: "Abigail", email: "abigail@proconnectpay.com", leads: 20, converted: 4, rate: 20 },
    { name: "Sandra", email: "sandra@proconnectpay.com", leads: 20, converted: 3, rate: 15 },
    { name: "Joshua", email: "joshua@proconnectpay.com", leads: 20, converted: 3, rate: 15 },
  ];

  return (
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
  );
}
