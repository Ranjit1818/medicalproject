import React from "react";

export default function Education() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 animate-fade-in">
      <h2 className="text-3xl font-heading font-extrabold text-blue-800 mb-4 drop-shadow-lg">Educational Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Training Schedule</h3>
          <ul className="list-disc pl-6 text-gray-700 font-sans">
            <li>Pharmacy Staff Training: Every Monday 2pm</li>
            <li>Case-based Learning: 1st Friday of Month</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Lecture Archives</h3>
          <ul className="list-disc pl-6 text-gray-700 font-sans">
            <li>Antibiotic Stewardship (2024)</li>
            <li>Safe Prescribing in Pregnancy (2023)</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in md:col-span-2">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Case-Based Modules</h3>
          <ul className="list-disc pl-6 text-gray-700 font-sans">
            <li>Managing Polypharmacy in Elderly</li>
            <li>ADR Case Reviews</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 