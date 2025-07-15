import React, { useState } from "react";
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  BeakerIcon,
  StarIcon,
  HeartIcon,
  EyeIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

export default function Monographs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Name");

  const categories = [
    "All", "Analgesics", "Antibiotics", "Antihypertensives", "Antidiabetics", 
    "Anticoagulants", "Psychiatric", "Oncology", "Pediatric", "Geriatric"
  ];

  const featuredDrugs = [
    {
      id: 1,
      name: "Paracetamol",
      generic: "Acetaminophen",
      category: "Analgesic",
      rating: 4.8,
      description: "Pain reliever and fever reducer",
      image: "💊",
      isFavorite: false
    },
    {
      id: 2,
      name: "Amoxicillin",
      generic: "Amoxicillin",
      category: "Antibiotic",
      rating: 4.6,
      description: "Broad-spectrum antibiotic",
      image: "💊",
      isFavorite: true
    },
    {
      id: 3,
      name: "Metformin",
      generic: "Metformin",
      category: "Antidiabetic",
      rating: 4.7,
      description: "First-line treatment for type 2 diabetes",
      image: "💊",
      isFavorite: false
    },
    {
      id: 4,
      name: "Warfarin",
      generic: "Warfarin",
      category: "Anticoagulant",
      rating: 4.5,
      description: "Blood thinner for preventing clots",
      image: "💊",
      isFavorite: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Drug Monographs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive drug information including dosing, interactions, contraindications, and safety data
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for drugs by name, generic name, or active ingredient..."
                className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort and Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FunnelIcon className="h-5 w-5 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Name</option>
                  <option>Category</option>
                  <option>Rating</option>
                  <option>Recently Added</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured Drugs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Drugs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDrugs.map((drug) => (
                <div key={drug.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{drug.image}</div>
                      <button className="text-gray-400 hover:text-red-500 transition">
                        <HeartIcon className={`h-6 w-6 ${drug.isFavorite ? 'text-red-500 fill-current' : ''}`} />
                      </button>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{drug.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{drug.generic}</p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(drug.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({drug.rating})</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {drug.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{drug.description}</p>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                        View Details
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition">
                        <EyeIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Browse by Category */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(1).map((category) => (
                <div key={category} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <BeakerIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category}</h3>
                  <p className="text-gray-600 text-sm mb-4">Browse drugs in the {category.toLowerCase()} category</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                    View {category} Drugs
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Drugs</h3>
                <p className="text-gray-600 text-sm">Critical care medications</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👶</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pediatric Drugs</h3>
                <p className="text-gray-600 text-sm">Safe for children</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤰</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pregnancy Safe</h3>
                <p className="text-gray-600 text-sm">Safe during pregnancy</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Generic Drugs</h3>
                <p className="text-gray-600 text-sm">Cost-effective alternatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 