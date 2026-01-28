import {
    FaChartBar,
    FaBalanceScale,
    FaRobot,
    FaLandmark,
    FaDatabase,
    FaPaperPlane,
  } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
  
  export default function PolicyTrackerPortal() {
    const { bg, color } = useOutletContext();
    return (
      <div className={`w-full`}>
  
        <div className={`w-full  text-white px-6 py-3 flex justify-between items-center`}>
          <p className="text-lg tracking-wide font-bold">
            Trade better when you know the rules.
          </p>
          <a
            href="/policy-updates"
            className={`${bg} px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2`}
          >
            <FaPaperPlane />
            View Updates
          </a>
        </div>
  
        {/* Hero */}
        <section className=" mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-slate-900">
              PolicyTracker
            </h1>
            <p className="mt-3 text-lg text-indigo-700 font-semibold">
              Digitizing Africa’s Commitments.
            </p>
  
            <p className="mt-6 text-slate-600 leading-relaxed">
              PolicyTracker is Africa’s first Trade Policy Intelligence Platform,
              translating policy commitments and government targets into live data dashboards.
              It brings visibility and accountability to the implementation of AfCFTA and related frameworks - making 
              policy performance measurable and transparent.
            </p>
  
            <div className="mt-8 flex gap-4">
              <a
                href="/policy-updates"
                className={`${bg} text-white px-6 py-3 rounded-lg font-medium`}
              >
                View Policy Dashboards
              </a>
              <button className="border border-indigo-700 text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50">
                Explore AfCFTA Data
              </button>
            </div>
          </div>
  
          {/* Core Value */}
          <div className="bg-white shadow-xl rounded-md  p-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Core Value
            </h3>
            <p className="text-slate-700 text-lg italic mt-6">
              What gets measured, gets implemented.
            </p>
  
            <div className="mt-12 flex items-center gap-4 text-indigo-700">
              <FaChartBar size={32} />
              <p className="text-sm">
                Real-time visibility into national and regional trade performance
              </p>
            </div>
          </div>
        </section>
  
        {/* Features */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Key Features 
            </h2>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
  
              <Feature
                icon={<FaBalanceScale size={28} />}
                title="AfCFTA Implementation"
                text="Track ratification, legal adoption, and reform milestones across all member states."
              />
  
              <Feature
                icon={<FaLandmark size={28} />}
                title="National Trade Indicators"
                text="County and country dashboards for exports, SMEs, and trade finance uptake."
              />
  
              <Feature
                icon={<FaRobot size={28} />}
                title="AI Policy Summaries"
                text="Machine-readable summaries of complex policy documents for fast comparison."
              />
  
              <Feature
                icon={<FaChartBar size={28} />}
                title="Partner Monitoring"
                text="Custom dashboards for donors, ministries, and institutions measuring impact."
              />
  
              <Feature
                icon={<FaDatabase size={28} />}
                title="MANSA & ATG Sync"
                text="Verified reporting powered by Afreximbank and RSA data systems."
              />
  
            </div>
          </div>
        </section>
  
        {/* Why It Matters */}
        <section className={`${bg}  text-white py-20`}>
          <div className=" mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why It Matters 
            </h2>
            <p className="text-white text-sm leading-relaxed">
            PolicyTracker bridges the gap between commitment and delivery — giving 
policymakers, donors, and private sector actors the intelligence they need to 
accelerate AfCFTA implementation.​
It is the data backbone of the TradeConnect ecosystem — the “single source of 
truth” for Africa’s trade readiness. 
            </p>
          </div>
        </section>
  
        {/* Footer */}
        <div className="p-5" />
        <footer className={`${bg}  text-slate-300 pt-16 pb-8`}>
          <div className=" mx-auto px-8 grid md:grid-cols-4 gap-10">
  
            <div>
              <h3 className="text-xl font-bold text-white">PolicyTracker</h3>
              <p className="mt-4 text-sm">
                Africa’s trade policy intelligence platform — powering AfCFTA
                implementation with live, verifiable data.
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Digitizing Africa’s Commitments.
              </p>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li>AfCFTA Dashboards</li>
                <li>National Indicators</li>
                <li>AI Policy Analysis</li>
                <li>Partner Reports</li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-4">Users</h4>
              <ul className="space-y-3 text-sm">
                <li>Governments</li>
                <li>Trade Ministries</li>
                <li>Development Partners</li>
                <li>Private Sector</li>
              </ul>
            </div>
  
            <div>
              <h4 className="text-white font-semibold mb-4">Data & Trust</h4>
              <ul className="space-y-3 text-sm">
                <li>Afreximbank MANSA</li>
                <li>ATG Verification</li>
                <li>RSA Data Layer</li>
                <li>Uniform Reporting</li>
              </ul>
            </div>
  
          </div>
  
          <div className="border-t border-slate-800 mt-12 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} PolicyTracker. All rights reserved. The single source of truth for Africa’s trade readiness.
          </div>
        </footer>
  
      </div>
    );
  }
  
  function Feature({ icon, title, text }) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
        <div className="text-indigo-700 mb-4">{icon}</div>
        <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
      </div>
    );
  }
  