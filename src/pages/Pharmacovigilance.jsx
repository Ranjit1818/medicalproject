import React from "react";

export default function Pharmacovigilance() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 animate-fade-in">
      <h2 className="text-3xl font-heading font-extrabold text-blue-800 mb-4 drop-shadow-lg">Pharmacovigilance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">ADR Reporting Form</h3>
          <form className="space-y-2">
            <input type="text" placeholder="Patient initials" className="w-full px-4 py-2 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 transition" />
            <input type="text" placeholder="Suspected drug" className="w-full px-4 py-2 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 transition" />
            <textarea placeholder="Describe reaction" className="w-full px-4 py-2 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 transition" rows="2"></textarea>
            <button type="submit" className="bg-blue-700 text-white font-bold px-4 py-2 rounded-xl shadow hover:bg-blue-800 transition">Submit</button>
          </form>
        </div>
        <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-2xl p-6 border border-blue-100 hover:scale-105 hover:shadow-blue-300 transition-transform duration-300 animate-fade-in">
          <h3 className="text-lg font-heading font-bold text-blue-700 mb-2">Bulletins & Safety Alerts</h3>
          <ul className="list-disc pl-6 text-gray-700 font-sans">
            <li>Monthly ADR Bulletin: July 2024</li>
            <li>Recent FDA Drug Recalls</li>
            <li>Black Box Warnings</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 