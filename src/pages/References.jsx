import React from "react";

export default function References() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 animate-fade-in">
      <h2 className="text-3xl font-heading font-extrabold text-blue-800 mb-4 drop-shadow-lg">References</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="https://www.micromedexsolutions.com/" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in block">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Micromedex</h3>
          <p className="text-gray-700 font-sans">Comprehensive drug database for clinicians.</p>
        </a>
        <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in block">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">PubMed</h3>
          <p className="text-gray-700 font-sans">Access millions of biomedical articles and studies.</p>
        </a>
        <a href="https://www.who.int/teams/health-product-and-policy-standards/standards-and-specifications/essential-medicines" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in block md:col-span-2">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">WHO Essential Medicines</h3>
          <p className="text-gray-700 font-sans">World Health Organization's essential medicines list and resources.</p>
        </a>
      </div>
    </div>
  );
} 