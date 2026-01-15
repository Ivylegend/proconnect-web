import React, { useState, useEffect } from "react";
import Logo from "../assets/proconnect-logo-new.jpg";
import { Link } from "react-router-dom";
import {
  Menu,
  DollarSign,
  Globe,
  Shield,
  ArrowRight,
  ExternalLink,
  PlayCircle,
  GraduationCap,
  Users,
  Building2,
  Video,
  Check,
  FileText,
  School,
  Home,
  Landmark,
  BadgeCheck,
  Briefcase,
  Send,
  TrendingUp,
  Target,
  Award,
  Rocket,
  Tag,
  BookOpen,
  Calendar,
  Clock,
  Percent,
  Banknote,
  MapPin,
  CreditCard,
  Copy,
  MessageCircle,
} from "lucide-react";

export default function NewHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed overflow-hidden top-0 left-0 right-0 bg-white backdrop-blur-md shadow-sm z-50 py-5 max-h-28 md:max-h-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="overflow-hidden">
              <img
                src={Logo}
                className="w-40 md:w-56 lg:w-64 relative -left-6 md:-left-8 lg:-left-10"
                alt="logo"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#home"
                className="text-sm font-medium transition-colors text-gray-600 hover:text-red-600"
              >
                Home
              </a>
              <a
                href="#video"
                className="text-sm font-medium transition-colors text-gray-600 hover:text-red-600"
              >
                Video
              </a>
              <a
                href="#loan-access"
                className="text-sm font-medium transition-colors text-gray-600 hover:text-red-600"
              >
                Loan Access
              </a>
              <a
                href="#coverage"
                className="text-sm font-medium transition-colors text-gray-600 hover:text-red-600"
              >
                Coverage
              </a>
              <a
                href="#service-fee"
                className="text-sm font-medium transition-colors text-gray-600 hover:text-red-600"
              >
                Service Fee
              </a>
              <a
                href="#webinar"
                className="text-sm font-medium transition-colors text-gray-600 hover:text-red-600"
              >
                Webinar
              </a>
              <a
                href="#contact"
                className="text-sm font-medium transition-colors text-red-600"
              >
                Contact
              </a>
              <button className="bg-red-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-900 transition-colors shadow-md">
                Apply Now
              </button>
            </div>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-900" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-red-800 via-red-900 to-blue-950 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                Fund Your Postgraduate Degree Abroad
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-red-100">
                Non-Collateral Student Loans for MSc, MBA, LLM, MEng & MPH
                Programs
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold">
                      Up to $50K
                    </p>
                    <p className="text-xs md:text-sm text-red-100">Per Year</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Globe className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold">
                      9 Countries
                    </p>
                    <p className="text-xs md:text-sm text-red-100">Worldwide</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Shield className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold">
                      No Collateral
                    </p>
                    <p className="text-xs md:text-sm text-red-100">Required</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mb-6 md:mb-8">
                {[
                  { flag: "🇺🇸", name: "United States" },
                  { flag: "🇬🇧", name: "United Kingdom" },
                  { flag: "🇨🇦", name: "Canada" },
                  { flag: "🇩🇪", name: "Germany" },
                  { flag: "🇦🇺", name: "Australia" },
                  { flag: "🇫🇷", name: "France" },
                  { flag: "🇮🇹", name: "Italy" },
                  { flag: "🇭🇰", name: "Hong Kong" },
                  { flag: "🇸🇬", name: "Singapore" },
                ].map((country) => (
                  <div
                    key={country.name}
                    className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-1.5 md:p-2 min-w-[70px] md:min-w-[80px]"
                  >
                    <span className="text-2xl md:text-3xl mb-1">
                      {country.flag}
                    </span>
                    <span className="text-[10px] md:text-xs font-medium text-center">
                      {country.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <button className="inline-flex items-center justify-center gap-2 bg-white text-red-800 px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-bold text-sm md:text-base lg:text-lg hover:bg-red-50 transition-colors shadow-xl">
                  Check Your Eligibility
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="https://bit.ly/3KYuQtp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-900/60 backdrop-blur-sm border-2 border-white/50 text-white px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg font-bold text-sm md:text-base lg:text-lg hover:bg-blue-900/80 transition-colors"
                >
                  Join WhatsApp Community
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1645263012665-8ca659af16dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ3JhZHVhdGlvbiUyMGNvbnZvY2F0aW9uJTIwY2FtcHVzfGVufDF8fHx8MTc2NzcwOTMwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="African graduate in convocation regalia"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white text-gray-900 rounded-lg md:rounded-xl p-3 md:p-4 lg:p-6 shadow-2xl max-w-[200px] md:max-w-xs">
                <p className="text-xs md:text-sm font-semibold mb-1 md:mb-2">
                  🎓 Start Your Journey
                </p>
                <p className="text-[10px] md:text-xs text-gray-600">
                  Join thousands of students who have secured funding for their
                  master's degrees abroad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              How Our Student Loan Works
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              Everything you need to know in one comprehensive overview
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="relative flex flex-col h-full">
              <div className="aspect-video bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden flex-1">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1660128357991-713518efae48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwbGlicmFyeXxlbnwxfHx8fDE3Njc2NzAyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="International students studying"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-blue-900/50 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
                      <PlayCircle className="w-12 h-12 text-red-600" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 text-gray-600 italic">
                Upload your explainer video here
              </p>
            </div>
            <div className="space-y-4 md:space-y-6 flex flex-col justify-center h-full">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                    Complete Application Process
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Step-by-step guide from eligibility check to receiving your
                    loan disbursement
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                    Success Stories
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Real testimonials from postgraduate students who
                    successfully funded their degrees
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                    University Partnerships
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Learn about our direct partnerships with top universities
                    worldwide
                  </p>
                </div>
              </div>
              <div className="pt-3 md:pt-4">
                <a
                  href="https://www.facebook.com/share/v/1GFnUSCkMm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-red-900 transition-colors shadow-md"
                >
                  <Video className="w-5 h-5" />
                  Watch CEO's 4-Minute Explanation
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Access Section */}
      <section id="loan-access" className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXJzJTIwZGVncmVlJTIwZ3JhZHVhdGlvbnxlbnwxfHx8fDE3Njc2NzAyODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Masters degree graduation celebration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-md">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Loan Access
                </h2>
              </div>
              <div className="flex items-start gap-2 md:gap-3 mb-6 md:mb-8">
                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">
                  Access up to{" "}
                  <span className="font-bold text-red-600">
                    $50,000 per year
                  </span>{" "}
                  to study in any of our 9 supported countries
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 space-y-3 md:space-y-4 mb-6 md:mb-8 border-2 border-red-100 shadow-lg">
                <h3 className="font-bold text-lg md:text-xl text-gray-900">
                  Eligibility Requirements:
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Bachelor and Higher National Diploma Degree Holders from a
                      government-recognized institution from any parts of the
                      World
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Programs covered:{" "}
                      <span className="font-semibold">
                        MSc, MBA, LLM, MEng, MPH
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Age 32 or younger: Qualify for all 9 countries
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Age 33-55: Focus on Canada and United States
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6 bg-amber-50 border-l-4 border-amber-500 rounded">
                <p className="text-gray-800 text-sm md:text-base lg:text-lg">
                  <span className="font-semibold">Note:</span> MA, MRes and Ph.D
                  programs are not funded
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-md">
              2
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Coverage Details
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-gradient-to-br from-red-800 to-blue-950 rounded-xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
                  Premium Coverage
                </h3>
              </div>
              <div className="space-y-3 mb-6">
                <p className="font-semibold text-xl">
                  🇺🇸 United States • 🇬🇧 United Kingdom
                </p>
                <p className="font-semibold text-xl">🇨🇦 Canada • 🇩🇪 Germany</p>
              </div>
              <div className="space-y-2 md:space-y-3 bg-white/10 rounded-lg p-4 md:p-5 lg:p-6 mb-4 md:mb-6">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base lg:text-lg">
                    Tuition fees
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base lg:text-lg">
                    Feeding costs
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base lg:text-lg">
                    Accommodation
                  </p>
                </div>
              </div>
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-lg">
                <p className="font-medium">
                  Payment released after you arrive on campus
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-blue-900 rounded-xl p-5 md:p-6 lg:p-8 shadow-xl">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Globe className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-red-600" />
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">
                  Other Countries
                </h3>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-gray-700 text-lg font-semibold">
                  🇦🇺 Australia • 🇫🇷 France
                </p>
                <p className="text-gray-700 text-lg font-semibold">
                  🇮🇹 Italy • 🇭🇰 Hong Kong • 🇸🇬 Singapore
                </p>
              </div>
              <div className="space-y-3 bg-red-50 rounded-lg p-6 mb-6 border border-red-100">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-lg">Tuition fees only</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-red-50 border-l-4 border-red-600 rounded shadow">
            <p className="text-gray-800 text-lg text-center">
              <span className="font-semibold">Important:</span> University
              receives payment only after you arrive on campus
            </p>
          </div>
        </div>
      </section>

      {/* Proof of Funds Section */}
      <section
        id="proof-of-funds"
        className="py-12 md:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-md">
              3
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Proof of Funds & Financial Support Letter
            </h2>
          </div>
          <div className="bg-white rounded-xl p-5 md:p-6 lg:p-8 mb-6 md:mb-8 border-2 border-red-100 shadow-lg">
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <FileText className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-red-600" />
              <p className="text-base md:text-lg lg:text-xl text-gray-700">
                We provide an official Financial Support Letter when required by
                your school or embassy
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-white border-2 border-red-100 rounded-lg p-4 md:p-5 lg:p-6 shadow">
              <div className="flex items-start gap-2 md:gap-3">
                <School className="w-5 h-5 md:w-6 md:h-6 text-red-800 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  Request deposit waiver from UK schools
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-lg p-4 md:p-5 lg:p-6 shadow">
              <div className="flex items-start gap-2 md:gap-3">
                <Home className="w-5 h-5 md:w-6 md:h-6 text-red-800 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  Covers tuition, feeding, and housing costs (US, UK, Germany,
                  Canada)
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-lg p-4 md:p-5 lg:p-6 shadow">
              <div className="flex items-start gap-2 md:gap-3">
                <Landmark className="w-5 h-5 md:w-6 md:h-6 text-red-800 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  Block Account alternative for Germany
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-lg p-4 md:p-5 lg:p-6 shadow">
              <div className="flex items-start gap-2 md:gap-3">
                <BadgeCheck className="w-5 h-5 md:w-6 md:h-6 text-red-800 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  Valid Proof of Funds for visa processes
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-red-100 rounded-lg p-4 md:p-5 lg:p-6 md:col-span-2 shadow">
              <div className="flex items-start gap-2 md:gap-3">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-red-800 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  Prevents risk of purchasing fake PoF from unverified sources
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-6 bg-amber-50 border-l-4 border-amber-500 rounded">
            <p className="text-gray-800 text-sm md:text-base lg:text-lg">
              <span className="font-semibold">Please note:</span> The loan does
              NOT cover application fees, visa fees, flight tickets, or other
              expenses. Disbursement happens only after you have resumed on
              campus.
            </p>
          </div>
        </div>
      </section>

      {/* Course Guidance Section */}
      <section
        id="course-guidance"
        className="py-12 md:py-16 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-md">
                  4
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                  Course & Application Guidance
                </h2>
              </div>
              <div className="bg-gradient-to-r from-red-800 to-blue-950 rounded-xl p-5 md:p-6 lg:p-8 text-white mb-6 md:mb-8 shadow-xl">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <Briefcase className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                  <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                    Commercially Viable Course Selection
                  </h3>
                </div>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-red-100">
                  We guide you to choose a course that aligns with your
                  professional background as an employee, start-up founder, or
                  freelancer
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 md:p-6 lg:p-8 shadow-lg border-2 border-gray-200">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
                  Our Team Will:
                </h3>
                <div className="space-y-4 md:space-y-5 lg:space-y-6">
                  <div className="flex items-start gap-4 md:gap-5 lg:gap-6 bg-white rounded-lg p-4 md:p-5 lg:p-6 border-2 border-red-100 shadow-sm">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-base md:text-lg lg:text-xl">
                        1
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 md:gap-3">
                        <FileText className="w-5 h-5 md:w-6 md:h-6 text-red-900" />
                        <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-900">
                          Professionally revamp your CV
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5 lg:gap-6 bg-white rounded-lg p-4 md:p-5 lg:p-6 border-2 border-red-100 shadow-sm">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-base md:text-lg lg:text-xl">
                        2
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 md:gap-3">
                        <FileText className="w-5 h-5 md:w-6 md:h-6 text-red-900" />
                        <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-900">
                          Craft a compelling Personal Statement
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 md:gap-5 lg:gap-6 bg-white rounded-lg p-4 md:p-5 lg:p-6 border-2 border-red-100 shadow-sm">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-base md:text-lg lg:text-xl">
                        3
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Send className="w-5 h-5 md:w-6 md:h-6 text-red-900" />
                        <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-900">
                          Submit applications to two strong-fit schools across
                          two countries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY3NjQ1MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Young professional success"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section
        id="career"
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-red-900 to-blue-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
            <div className="flex items-stretch">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXJlZXIlMjBzdWNjZXNzJTIwZGVjaXNpb258ZW58MXx8fHwxNzY3NzA5MzA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Graduate considering multiple job offers from top companies"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-red-800 text-lg md:text-xl font-bold shadow-md">
                  5
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  Career Advantage Post-Graduation
                </h2>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 lg:p-10 border-2 border-white/30">
                <div className="flex items-center justify-center mb-6 md:mb-8">
                  <TrendingUp className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24" />
                </div>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-relaxed font-medium mb-6 md:mb-8">
                  A commercially viable course in a top-ranked institution
                  positions you for:
                </p>
                <div className="space-y-4 md:space-y-5 lg:space-y-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 md:p-6 lg:p-8 border border-white/30">
                    <div className="flex items-center justify-center gap-3 md:gap-4">
                      <Target className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                      <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-center">
                        In-Demand Skills
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 md:p-6 lg:p-8 border border-white/30">
                    <div className="flex items-center justify-center gap-3 md:gap-4">
                      <Award className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                      <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-center">
                        Stronger Job Offers
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 md:p-6 lg:p-8 border border-white/30">
                    <div className="flex items-center justify-center gap-3 md:gap-4">
                      <Rocket className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                      <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-center">
                        Sustainable Financial Growth Abroad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Fee Section */}
      <section id="service-fee" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-md">
              6
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Service Fee
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">
            <div className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-4 md:p-6 lg:p-8 text-white text-center shadow-xl">
                  <Tag className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-auto mb-3 md:mb-4" />
                  <p className="text-sm md:text-base lg:text-lg mb-1 md:mb-2 text-red-100">
                    For Nigerians
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    ₦138,000
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-4 md:p-6 lg:p-8 text-white text-center shadow-xl">
                  <Tag className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 mx-auto mb-3 md:mb-4" />
                  <p className="text-sm md:text-base lg:text-lg mb-1 md:mb-2 text-blue-100">
                    For Non-Nigerians
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    $95
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-5 lg:p-6 border-2 border-red-100 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  Service Fee Covers:
                </h3>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="mt-1">Free Academic Counselling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <span className="mt-1">
                      Admission Processing (Refining CV to Global Resume,
                      Crafting Statement of Purpose/Essay and Submitting School
                      Application)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="mt-1">Securing Admission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    <span className="mt-1">
                      Securing Access to our non-collateral loan facility of
                      50,000 USD per annum
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <span className="mt-1">
                      Issuing a Letter of Support (T&C Applies dependent on
                      Country)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <Shield className="w-8 h-8 text-amber-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    We Act as Your Guarantor
                  </h3>
                </div>
                <p className="text-gray-700">
                  Through our global banking partners, ensuring your loan
                  approval
                </p>
              </div>
            </div>
            <div className="flex items-stretch">
              <div className="rounded-2xl overflow-hidden shadow-2xl w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcmVzZW50YXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzY3NzA5MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Diverse professionals in corporate meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section
        id="webinar"
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-red-600 via-red-700 to-blue-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12 justify-center flex-wrap">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-red-700 text-lg md:text-xl font-bold shadow-md">
              7
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Need Clarity Before You Commit?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 md:p-6 lg:p-8 xl:p-12 border-2 border-white/30 mb-6 md:mb-8">
              <div className="flex items-center justify-center mb-6 md:mb-8">
                <Video className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-6 md:mb-8">
                Join Our FREE Live Webinar
              </h3>
              <div className="space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-5 lg:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <Calendar className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    <div>
                      <p className="font-semibold text-base md:text-lg lg:text-xl">
                        Wednesdays
                      </p>
                      <p className="text-white/90 text-sm md:text-base lg:text-lg">
                        1:00 PM Nigeria Time
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-5 lg:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <Calendar className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    <div>
                      <p className="font-semibold text-base md:text-lg lg:text-xl">
                        Saturdays
                      </p>
                      <p className="text-white/90 text-sm md:text-base lg:text-lg">
                        4:00 PM Nigeria Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://bit.ly/study-and-work-in-17-countries"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-red-600 font-bold text-base md:text-lg lg:text-xl py-3 md:py-4 lg:py-5 rounded-lg text-center hover:bg-red-50 transition-colors shadow-xl"
              >
                Register Now
              </a>
            </div>
            <div className="bg-yellow-400/20 backdrop-blur-sm rounded-xl p-5 md:p-6 lg:p-8 border-2 border-yellow-400/50">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Clock className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-yellow-300" />
                <p className="font-bold text-lg md:text-xl lg:text-2xl text-yellow-100">
                  Special Offer!
                </p>
              </div>
              <p className="text-base md:text-lg lg:text-xl mb-2">
                Meet the team, get real answers, and unlock up to 50% off your
                service fee
              </p>
              <p className="text-white/90 text-sm md:text-base lg:text-lg">
                Just one hour could change your entire journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Rates Section */}
      <section
        id="interest-rates"
        className="py-12 md:py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-md">
              8
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Interest Rates & Repayment Benefits
            </h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            <div className="bg-white border-2 border-red-200 rounded-xl p-5 md:p-6 lg:p-8 shadow-md">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-red-900 rounded-full flex items-center justify-center text-white shadow-md">
                  <Percent className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                  Initial Loan Interest
                </h3>
              </div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700">
                Interest ranges from{" "}
                <span className="font-bold text-red-600">9% to 16%</span> when
                applying
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 md:p-8 lg:p-10 text-white shadow-xl">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-green-600 shadow-md">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                  Massive Savings After Graduation!
                </h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-green-50">
                  Most candidates pay just{" "}
                  <span className="font-bold text-2xl md:text-3xl">
                    2% to 6%
                  </span>{" "}
                  per year after graduation
                </p>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl">
                  By refinancing through their salary accounts
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl p-6 md:p-8 lg:p-10 text-white shadow-xl">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <Banknote className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                  Save Over $30,000
                </h3>
              </div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                in interest payments with our refinancing strategy
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 md:p-5 lg:p-6 text-center border-2 border-red-200 shadow">
              <p className="text-gray-700 text-sm md:text-base lg:text-lg xl:text-xl">
                <span className="font-semibold">Smart Strategy:</span> Graduate
                → Get Job → Refinance → Pay Less Interest
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-900 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-md">
              9
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Visit or Contact Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-xl p-5 md:p-6 lg:p-8 text-white shadow-xl">
              <MapPin className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-4 md:mb-6" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">
                Based in Lagos?
              </h3>
              <p className="mb-4 md:mb-6 text-sm md:text-base text-red-100">
                Book an appointment to visit us
              </p>
              <a
                href="https://bit.ly/proconnect-lagos-walk-ins"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-red-50 transition-colors"
              >
                <span>Book Now</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl p-5 md:p-6 lg:p-8 text-white shadow-xl">
              <Video className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-4 md:mb-6" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">
                Quick Explanation
              </h3>
              <p className="mb-4 md:mb-6 text-sm md:text-base text-blue-100">
                Watch our Global CEO explain everything in just 4 minutes
              </p>
              <a
                href="https://www.facebook.com/share/v/1GFnUSCkMm/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-50 transition-colors"
              >
                <span>Watch Video</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-5 md:p-6 lg:p-8 text-white shadow-xl">
              <Globe className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-4 md:mb-6" />
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">
                Read More Details
              </h3>
              <p className="mb-4 md:mb-6 text-sm md:text-base text-red-100">
                Complete information about our global financing program
              </p>
              <a
                href="https://proconnectpay.com/global-financing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-red-50 transition-colors"
              >
                <span>Learn More</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-red-600 via-red-700 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-red-100">
              Your global future starts here
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 md:p-6 lg:p-8 xl:p-12 border-2 border-white/30 mb-6 md:mb-8">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <CreditCard className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-6 md:mb-8">
              Make Payment Now
            </h3>
            <div className="space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-8">
              <div className="bg-white rounded-xl p-5 md:p-6 lg:p-8 xl:p-10 text-gray-900">
                <div className="space-y-3 md:space-y-4 text-center">
                  <p className="text-base md:text-lg lg:text-xl text-gray-600">
                    Wema Bank
                  </p>
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-600 tracking-wide">
                      0124666434
                    </p>
                    <button
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Copy account number"
                      onClick={() => copyToClipboard("0124666434")}
                    >
                      <Copy className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                  <div className="pt-4 md:pt-6 border-t border-gray-200 space-y-2">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                      PROCONNECT TECH SOLUTIONS LIMITED
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 md:p-6 lg:p-8 xl:p-10 text-gray-900">
                <div className="space-y-3 md:space-y-4 text-center">
                  <p className="text-base md:text-lg lg:text-xl text-gray-600">
                    MoMo PSB
                  </p>
                  <div className="flex items-center justify-center gap-2 md:gap-3">
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-600 tracking-wide">
                      9163821595
                    </p>
                    <button
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Copy account number"
                      onClick={() => copyToClipboard("9163821595")}
                    >
                      <Copy className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                  <div className="pt-4 md:pt-6 border-t border-gray-200 space-y-2">
                    <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                      PROCONNECT TECH SOLUTIONS LIMITED
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-500/20 backdrop-blur-sm border-2 border-green-400/50 rounded-xl p-4 md:p-5 lg:p-6 mb-6 md:mb-8">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-green-300" />
                <p className="font-bold text-lg md:text-xl lg:text-2xl text-green-100">
                  After Payment
                </p>
              </div>
              <p className="text-center text-sm md:text-base lg:text-lg mb-3 md:mb-4">
                Chat us up to confirm your payment:
              </p>
              <a
                href="https://bit.ly/GraceatProconnectPAY"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 md:py-4 md:px-6 rounded-lg transition-colors text-center text-sm md:text-base lg:text-lg shadow-xl"
              >
                Contact Ms. Grace on WhatsApp
              </a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <button
                onClick={() => {
                  const element = document.querySelector("#home");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2 bg-red-800 hover:bg-red-900 text-white font-bold py-3 px-4 md:py-4 md:px-5 lg:py-5 lg:px-6 rounded-lg transition-colors text-sm md:text-base lg:text-lg shadow-md"
              >
                <span>Check Eligibility</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="https://bit.ly/3KYuQtp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 md:py-4 md:px-5 lg:py-5 lg:px-6 rounded-lg transition-colors text-sm md:text-base lg:text-lg shadow-md"
              >
                <span>Join WhatsApp Group</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-10 lg:mt-12 text-center">
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl italic text-red-200">
              Thank you for your interest!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <img
                  src={Logo}
                  alt="Proconnect"
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Empowering postgraduate students to achieve their dreams of
                studying abroad with comprehensive financial support.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li>
                  <a
                    href="https://proconnectpay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Main Website
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector("#home");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    Check Eligibility
                  </button>
                </li>
                <li>
                  <a
                    href="https://proconnectpay.com/global-financing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Global Financing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">
                Connect With Us
              </h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li>
                  <a
                    href="https://bit.ly/3KYuQtp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp Group
                  </a>
                </li>
                <li>
                  <a
                    href="https://bit.ly/study-and-work-in-17-countries"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Webinar Registration
                  </a>
                </li>
                <li>
                  <a
                    href="https://bit.ly/proconnect-lagos-walk-ins"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Book Lagos Visit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-400">
            <p>
              © 2026 Proconnect Tech Solutions Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Admin Portal Button */}
      <button
        className="fixed bottom-3 right-3 md:bottom-4 md:right-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-2 md:px-4 md:py-3 rounded-full shadow-2xl hover:from-gray-900 hover:to-black transition-all flex items-center gap-1.5 md:gap-2 z-40 border-2 border-gray-600"
        title="Sales Admin Portal"
      >
        <Users className="w-4 h-4 md:w-5 md:h-5" />
        <span className="font-bold text-xs md:text-sm">Admin Portal</span>
      </button>
    </div>
  );
}
