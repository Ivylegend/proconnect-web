import React from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import {
  BarChart3,
  Users,
  Video,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/home-new");
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Mock data for header
  const totalLeads = 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-800 via-purple-800 to-blue-900 text-white py-4 px-6 shadow-lg">
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

      {/* Fixed Navigation Tabs */}
      <nav className="fixed top-[88px] left-0 right-0 z-40 bg-white border-b border-gray-200 px-6 shadow-md">
        <div className="flex items-center gap-1">
          <Link
            to="/admin/overview"
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              isActive("/admin/overview")
                ? "border-red-600 text-red-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <BarChart3 className="w-5 h-5" />
            Overview
          </Link>
          <Link
            to="/admin/leads"
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors relative ${
              isActive("/admin/leads")
                ? "border-red-600 text-red-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Users className="w-5 h-5" />
            Leads Management
            <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full ml-1">
              4 new
            </span>
          </Link>
          <Link
            to="/admin/team"
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              isActive("/admin/team")
                ? "border-red-600 text-red-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Users className="w-5 h-5" />
            Team
          </Link>
          <Link
            to="/admin/zoom"
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              isActive("/admin/zoom")
                ? "border-red-600 text-red-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Video className="w-5 h-5" />
            Zoom
          </Link>
          <Link
            to="/admin/email"
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              isActive("/admin/email")
                ? "border-red-600 text-red-600 font-semibold bg-red-50"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <Mail className="w-5 h-5" />
            Email
          </Link>
        </div>
      </nav>

      {/* Main Content with padding for fixed header */}
      <main className="pt-[176px] p-6">
        <Outlet />
      </main>
    </div>
  );
}
