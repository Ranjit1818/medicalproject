import React from "react";

export default function Requests() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 animate-fade-in">
      <h2 className="text-3xl font-heading font-extrabold text-blue-800 mb-4 drop-shadow-lg">Drug Information Requests</h2>
      <p className="mb-4 text-gray-700 font-sans">Submit a query or browse common questions answered by our experts.</p>
      <form className="bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-blue-100 mb-8 animate-fade-in">
        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2 font-heading">Your Name</label>
          <input type="text" className="w-full px-4 py-2 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 transition" placeholder="Enter your name" />
        </div>
        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2 font-heading">Your Email</label>
          <input type="email" className="w-full px-4 py-2 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 transition" placeholder="Enter your email" />
        </div>
        <div className="mb-4">
          <label className="block text-blue-700 font-bold mb-2 font-heading">Your Query</label>
          <textarea className="w-full px-4 py-2 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 transition" rows="4" placeholder="Type your drug information question..."></textarea>
        </div>
        <button type="submit" className="bg-blue-700 text-white font-bold px-6 py-2 rounded-xl shadow-lg hover:bg-blue-800 transition">Submit</button>
      </form>
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-blue-100 animate-fade-in">
        <h3 className="text-xl font-heading font-bold text-blue-700 mb-2">Frequently Asked Questions</h3>
        <ul className="list-disc pl-6 text-gray-700 font-sans">
          <li>What is the recommended dose of paracetamol in children?</li>
          <li>How to report an adverse drug reaction?</li>
          <li>Can amoxicillin be used in pregnancy?</li>
        </ul>
      </div>
    </div>
  );
} 