import React from "react";
import { Mail, Save } from "lucide-react";

export default function Email() {
  const totalLeads = 100;
  const highPriority = 75;
  const paidCount = 33;

  return (
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
  );
}
