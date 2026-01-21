import React from "react";
import { Video, Save } from "lucide-react";

export default function Zoom() {
  const highPriorityLeads = [
    {
      id: 1,
      name: "Chioma Adebayo",
      email: "chioma.adebayo@example.com",
      priority: 90,
      countriesCount: 3,
    },
    {
      id: 2,
      name: "Adaobi Nwosu",
      email: "adaobi.nwosu@example.com",
      priority: 85,
      countriesCount: 5,
    },
    {
      id: 3,
      name: "Chima Ani",
      email: "chima.ani@example.com",
      priority: 88,
      countriesCount: 4,
    },
    {
      id: 4,
      name: "Tunde Okonkwo",
      email: "tunde.okonkwo@example.com",
      priority: 92,
      countriesCount: 3,
    },
    {
      id: 5,
      name: "Omolara Olowu",
      email: "omolara.olowu@example.com",
      priority: 100,
      countriesCount: 3,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-6">
        {/* Zoom Webinar Integration */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <Video className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-bold text-gray-900">Zoom Webinar Integration</h2>
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
            {highPriorityLeads.map((lead) => (
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
  );
}
