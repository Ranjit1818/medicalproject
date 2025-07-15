import React from "react";

export default function Patients() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 animate-fade-in">
      <h2 className="text-3xl font-heading font-extrabold text-blue-800 mb-4 drop-shadow-lg">Patient Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Patient Leaflets</h3>
          <p className="text-gray-700 font-sans">Downloadable leaflets for common conditions and medications.</p>
        </div>
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Pregnancy/Lactation Index</h3>
          <p className="text-gray-700 font-sans">Safety information for medication use in pregnancy and breastfeeding.</p>
        </div>
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Medication Tips</h3>
          <p className="text-gray-700 font-sans">Best practices for safe and effective medication use.</p>
        </div>
      </div>
    </div>
  );
} 