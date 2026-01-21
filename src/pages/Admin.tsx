import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Users, BarChart3, Settings } from "lucide-react";

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/home-new")}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </button>
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-red-600" />
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Sales Admin Portal
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <p className="text-gray-600 text-lg">
            Welcome to the Sales Admin Portal. Manage your operations from here.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Users Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Users</h3>
                <p className="text-sm text-gray-500">Manage users</p>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
              View Users
            </button>
          </div>

          {/* Analytics Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Analytics
                </h3>
                <p className="text-sm text-gray-500">View reports</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Analytics
            </button>
          </div>

          {/* Settings Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Settings
                </h3>
                <p className="text-sm text-gray-500">Configure portal</p>
              </div>
            </div>
            <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium">
              Open Settings
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Portal Information
          </h2>
          <div className="space-y-3 text-gray-600">
            <p>
              This is the Sales Admin Portal for Proconnect International
              Student Loan.
            </p>
            <p>
              Use the navigation above to access different sections of the admin
              panel.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
