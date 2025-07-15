import React from "react";

export default function ClinicalTools() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 animate-fade-in">
      <h2 className="text-3xl font-heading font-extrabold text-blue-800 mb-4 drop-shadow-lg">Clinical Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 cursor-pointer animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Drug Interaction Checker</h3>
          <p className="text-gray-700 font-sans mb-2">Check for potential drug-drug interactions instantly.</p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-800 transition">Check Now</button>
        </div>
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 cursor-pointer animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Therapeutic Drug Monitoring</h3>
          <p className="text-gray-700 font-sans mb-2">Reference guide for TDM of key medications.</p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-800 transition">View Guide</button>
        </div>
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 cursor-pointer animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Dosing Calculators</h3>
          <p className="text-gray-700 font-sans mb-2">Calculate renal, hepatic, and pediatric doses.</p>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-800 transition">Calculate</button>
        </div>
      </div>
    </div>
  );
} 