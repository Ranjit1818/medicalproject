import React from "react";
import { 
  MagnifyingGlassIcon, 
  StarIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  AcademicCapIcon,
  BeakerIcon,
  HeartIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
              Your Trusted Drug Information Center
            </h1>
            <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto">
              Evidence-based drug information, clinical tools, and expert consultations for healthcare professionals and patients
            </p>
            {/* Hero Search */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for drugs, conditions, or medical information..."
                  className="w-full pl-6 pr-28 sm:pr-32 py-3 sm:py-4 text-gray-900 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 text-base sm:text-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-2 text-sm sm:text-base">
                  <MagnifyingGlassIcon className="h-5 w-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">10,000+</div>
                <div className="text-blue-200 text-sm sm:text-base">Drug Monographs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">24/7</div>
                <div className="text-blue-200 text-sm sm:text-base">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">50,000+</div>
                <div className="text-blue-200 text-sm sm:text-base">Healthcare Professionals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Comprehensive Drug Information
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Access detailed drug monographs, clinical tools, and evidence-based resources
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Drug Monographs */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition">
                  <BeakerIcon className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Drug Monographs</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-4">Comprehensive drug information including dosing, interactions, and safety data</p>
                <a href="/monographs" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition text-sm sm:text-base">
                  Browse Monographs
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
            {/* Clinical Tools */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-green-200 transition">
                  <ShieldCheckIcon className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Clinical Tools</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-4">Drug interaction checkers, dosing calculators, and monitoring guides</p>
                <a href="/clinical-tools" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition text-sm sm:text-base">
                  Use Tools
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
            {/* Expert Consultations */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-purple-200 transition">
                  <UserGroupIcon className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Expert Consultations</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-4">Get personalized drug information from our clinical pharmacists</p>
                <a href="/requests" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition text-sm sm:text-base">
                  Request Consultation
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
            {/* Educational Resources */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-200 transition">
                  <AcademicCapIcon className="h-7 w-7 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Education</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-4">Training programs, case studies, and continuing education modules</p>
                <a href="/education" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition text-sm sm:text-base">
                  Learn More
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive drug information services for healthcare professionals and patients
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">24/7 Drug Information Hotline</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Round-the-clock access to clinical pharmacists for urgent drug information queries</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">ADR Monitoring & Reporting</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Comprehensive adverse drug reaction monitoring and reporting system</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AcademicCapIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Professional Training</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Continuing education programs and certification courses for healthcare professionals</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6 mt-6 lg:mt-0">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BeakerIcon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Clinical Research Support</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Support for clinical trials, drug development, and research initiatives</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <HeartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Patient Education</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Patient-friendly drug information, leaflets, and medication guides</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Rapid Response Service</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Quick turnaround times for urgent drug information requests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              What Our Users Say
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by healthcare professionals across the country
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-2 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-4">
                "The drug interaction checker has been invaluable in my daily practice. It's fast, accurate, and user-friendly."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  DR
                </div>
                <div className="ml-2 sm:ml-3">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Dr. Sarah Johnson</div>
                  <div className="text-xs sm:text-sm text-gray-600">Cardiologist</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-2 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-4">
                "The comprehensive drug monographs have everything I need. It's my go-to resource for drug information."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  RN
                </div>
                <div className="ml-2 sm:ml-3">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Nurse Maria Rodriguez</div>
                  <div className="text-xs sm:text-sm text-gray-600">ICU Nurse</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
              <div className="flex items-center mb-2 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base mb-2 sm:mb-4">
                "The 24/7 hotline service is exceptional. I always get quick, reliable answers when I need them most."
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  PH
                </div>
                <div className="ml-2 sm:ml-3">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Pharmacist David Chen</div>
                  <div className="text-xs sm:text-sm text-gray-600">Hospital Pharmacist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of healthcare professionals who trust us for their drug information needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition text-sm sm:text-base">
              Get Started Today
            </a>
            <a href="/contact" className="border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition text-sm sm:text-base">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 