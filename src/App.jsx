import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  ShoppingCartIcon, 
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  StarIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import Homepage from "./pages/Homepage";
import Monographs from "./pages/Monographs";
import Requests from "./pages/Requests";
import ClinicalTools from "./pages/ClinicalTools";
import Education from "./pages/Education";
import Patients from "./pages/Patients";
import Pharmacovigilance from "./pages/Pharmacovigilance";
import References from "./pages/References";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-4 w-4" />
              <span className="text-xs sm:text-sm">24/7 Helpline: 1800-123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4" />
              <span className="text-xs sm:text-sm">Find Nearest Center</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-xs sm:text-sm hover:text-blue-200 transition">Login</Link>
            <Link to="/register" className="text-xs sm:text-sm hover:text-blue-200 transition">Register</Link>
            <div className="hidden sm:flex items-center space-x-2">
              <ClockIcon className="h-4 w-4" />
              <span className="text-sm">24/7 Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 sm:p-3 rounded-full">
              <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">MediCare DIC</h1>
              <p className="text-xs sm:text-sm text-gray-600">Your Trusted Drug Information Center</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-gray-900">MediCare DIC</h1>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for drugs, conditions, or medical information..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none transition-all"
              />
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="lg:hidden p-2" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <MagnifyingGlassIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            </button>
            <Link to="/account" className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
              <UserIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:block">Account</span>
            </Link>
            <Link to="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition relative">
              <ShoppingCartIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:block">Cart</span>
              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">3</span>
            </Link>
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              ) : (
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for drugs, conditions, or medical information..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none"
              />
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className={`lg:block ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
            <Link to="/" className="py-3 lg:py-4 text-gray-700 hover:text-blue-600 font-medium transition border-b lg:border-b-0 border-gray-100">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center justify-between w-full lg:w-auto py-3 lg:py-4 text-gray-700 hover:text-blue-600 font-medium transition border-b lg:border-b-0 border-gray-100">
                <span>Drug Information</span>
                <ChevronDownIcon className="h-4 w-4 lg:hidden" />
              </button>
              <div className="lg:absolute lg:left-0 lg:mt-2 lg:w-64 lg:bg-white lg:shadow-xl lg:rounded-lg lg:border lg:border-gray-100 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:transition-all lg:duration-300 lg:z-50">
                <Link to="/monographs" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                  Drug Monographs
                </Link>
                <Link to="/requests" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                  Information Requests
                </Link>
                <Link to="/references" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                  References
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center justify-between w-full lg:w-auto py-3 lg:py-4 text-gray-700 hover:text-blue-600 font-medium transition border-b lg:border-b-0 border-gray-100">
                <span>Clinical Tools</span>
                <ChevronDownIcon className="h-4 w-4 lg:hidden" />
              </button>
              <div className="lg:absolute lg:left-0 lg:mt-2 lg:w-64 lg:bg-white lg:shadow-xl lg:rounded-lg lg:border lg:border-gray-100 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:transition-all lg:duration-300 lg:z-50">
                <Link to="/clinical-tools" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                  Drug Interactions
                </Link>
                <Link to="/clinical-tools" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                  Dosing Calculators
                </Link>
                <Link to="/clinical-tools" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
                  Therapeutic Monitoring
                </Link>
              </div>
            </div>
            <Link to="/education" className="py-3 lg:py-4 text-gray-700 hover:text-blue-600 font-medium transition border-b lg:border-b-0 border-gray-100">
              Education
            </Link>
            <Link to="/patients" className="py-3 lg:py-4 text-gray-700 hover:text-blue-600 font-medium transition border-b lg:border-b-0 border-gray-100">
              Patient Resources
            </Link>
            <Link to="/pharmacovigilance" className="py-3 lg:py-4 text-gray-700 hover:text-blue-600 font-medium transition border-b lg:border-b-0 border-gray-100">
              Safety & Alerts
            </Link>
            <Link to="/contact" className="py-3 lg:py-4 text-gray-700 hover:text-blue-600 font-medium transition border-b lg:border-b-0 border-gray-100">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-2 rounded-full">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">MediCare DIC</h3>
                <p className="text-gray-400 text-sm">Your Trusted Drug Information Center</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Providing evidence-based drug information and clinical support to healthcare professionals and patients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/monographs" className="text-gray-400 hover:text-white transition">Drug Monographs</Link></li>
              <li><Link to="/clinical-tools" className="text-gray-400 hover:text-white transition">Clinical Tools</Link></li>
              <li><Link to="/education" className="text-gray-400 hover:text-white transition">Educational Resources</Link></li>
              <li><Link to="/patients" className="text-gray-400 hover:text-white transition">Patient Resources</Link></li>
              <li><Link to="/pharmacovigilance" className="text-gray-400 hover:text-white transition">Safety Alerts</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Drug Information Queries</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Clinical Consultations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">ADR Reporting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Training Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Research Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">123 Medical Center Dr, City</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">24/7 Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 MediCare DIC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/monographs" element={<Monographs />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/clinical-tools" element={<ClinicalTools />} />
            <Route path="/education" element={<Education />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/pharmacovigilance" element={<Pharmacovigilance />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
