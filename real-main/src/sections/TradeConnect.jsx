import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";
import { div } from "framer-motion/client";

const TradeConnect = () => {
  const [activeTab, setActiveTab] = useState("pillars");

  const stats = [
    { value: "470+", label: "Delegates at Kenya ATG Workshop" },
    { value: "150+", label: "Exporters mobilized in Rwanda ATG rollout" },
    { value: "1800+", label: "Verified Deals curated Via DealHouse" },
    { value: "40+", label: "Partners engaged through TradeConnect" },
  ];

  const pillars = [

    {
      number: "1",
      title: "DealHouse™",
      subtitle: "Africa's Multi-Sector Deal Room",
      description:
        "Where inquiries — in commodities, services, labour, investment, finance and government facilitation — are verified, matched, structured, contracted and monitored.",
      link: "/DealHouse",
      cases: ["Importers & Exporters", "Service Providers", "Investors & Missions", "Financiers & Insurers"]
    },
    {
      number: "2",
      title: "BiasharaLink",
      subtitle: "Africa's Multi-Sector Deal Room",
      description:
        "A digital interface for embassies, governments, and institutions to capture, route, and track inquiries.",
      link: "/BiasharaLink_Portal",
      cases: ["Importers & Exporters", "Service Providers", "Investors & Missions", "Financiers & Insurers"]
    },
    {
      number: "3",
      title: "PolicyTracker",
      subtitle: "Africa's Multi-Sector Deal Room",
      description:
        "An intelligence layer translating policy, regulation, and compliance into usable insights.",
      link: "/Policy_Tracker",
      cases: ["Importers & Exporters", "Service Providers", "Investors & Missions", "Financiers & Insurers"]
    },
    {
      number: "4",
      title: "Asili Markets",
      subtitle: "Africa's Multi-Sector Deal Room",
      description:
        "Market access and distribution infrastructure connecting African producers to buyers.",
      link: "/Asili_Markets",
      cases: ["Importers & Exporters", "Service Providers", "Investors & Missions", "Financiers & Insurers"]
    },
    {
      number: "5",
      title: "Trade Pods",
      subtitle: "Africa's Multi-Sector Deal Room",
      description:
        "Physical, high-visibility deal capture and engagement installations.",
      link: "/Trade_Pods",
      cases: ["Importers & Exporters", "Service Providers", "Investors & Missions", "Financiers & Insurers"]
    },
    {
      number: "6",
      title: "Deal Stewards",
      subtitle: "Africa's Multi-Sector Deal Room",
      description:
        "Trained professionals who shepherd inquiries through the execution pipeline.",
      link: "/Deal_Stewards",
      cases: ["Importers & Exporters", "Service Providers", "Investors & Missions", "Financiers & Insurers"]
    },
    {
      number: "7",
      title: "The Bridge",
      subtitle: "Africa's Multi-Sector Deal Room",
      description:
        "Capital mobilization and investment facilitation layer.",
      link: "/The_Bridge",
      cases: ["Importers & Exporters", "Service Providers", "Investors & Missions", "Financiers & Insurers"]
    },
    {
      number: "8",
      title: "Programs & Missions",
      subtitle: "Africa's Multi-Sector Deal Room",
      description:
        "Trade corridors, delegations, deal rooms, and sector-focused activations.",
      link: "/Programs_Missions",
      cases: ["Importers & Exporters", "Service Providers", "Investors & Missions", "Financiers & Insurers"]
    },
  ];

  return (
    <Section id="tci" className="mt-2 md:mt-2">
      <div className="mb-8 ml-5">
        <span className="text-xl font-bold text-orange-700">
          The RSA Ecosystem
        </span>

        <h2 className="text-4xl text-orange-700 mt-1 mb-3 font-bold">
          Flagship Engines Power Our World
        </h2>

        <p className="text-base text-gray-600 max-w-3xl">
          An integrated stack of platforms and physical channels designed to move Africa's trade from paper to reality.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-4 ml-5">
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("pillars")}
            className={`px-4 py-2 text-sm font-semibold ${activeTab === "pillars"
              ? "text-orange-600 border-b-2 border-orange-600"
              : "text-gray-500 hover:text-gray-700"
              }`}
          >
            The Pillars
          </button>

          <button
            onClick={() => setActiveTab("Impact Highlights")}
            className={`px-4 py-2 text-sm font-semibold ${activeTab === "Impact Highlights"
              ? "text-orange-600 border-b-2 border-orange-600"
              : "text-gray-500 hover:text-gray-700"
              }`}
          >
            Impact Highlights
          </button>
        </div>
      </div>

      {activeTab === "Impact Highlights" && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ml-5">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className=" hover:bg-gray-100 border-orange-200 text-center transition"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Pillars (CLICKABLE) */}
      {activeTab === "pillars" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-5">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="group border border-gray-200 rounded-xl
                 hover:border-orange-400 hover:shadow-lg
                 transition-all duration-300"
            >
              <Link to={pillar.link} className="block h-full p-6">
                <div className="flex items-start gap-5 h-full">

                  {/* Number Badge */}
                  <div className="shrink-0 w-9 h-9 bg-orange-600 text-white rounded-full
                          flex items-center justify-center font-semibold text-sm
                          group-hover:scale-105 transition">
                    {pillar.number}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col h-full">
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">
                        {pillar.title}
                      </h4>

                      <h4 className="text-sm font-light text-gray-700 mb-3">
                        {pillar.subtitle}
                      </h4>

                      <p className="text-sm text-gray-600 leading-relaxed mb-5">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Who Uses It */}
                    <div className="mt-auto">
                      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
                        Who Uses It
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                        {pillar.cases.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-gray-100 rounded-full
                               text-xs text-gray-700 text-center"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Learn More */}
                      <div className="inline-flex items-center gap-2 text-sm font-semibold
                              text-gray-800 group-hover:translate-x-1 transition">
                        Learn More
                        <span className="text-lg leading-none">→</span>
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            </Card>
          ))}
        </div>

      )}


      <div className="items-center mt-20">
        <div className="py-9 px-6 bg-blue-950 shadow-lg rounded-lg">
          <div className="items-center text-center "><h1 className="font-bold text-4xl text-white mb-3">From Diplomacy to Shelves</h1>
          <p className="p-6 text-sm font-semibold text-gray-100">A mission receives a buyer inquiry → enters BiasharaLink → moves to DealHouse for verification → PolicyTracker ensures correct regulations → products ship along RSA corridors → arrive at Asili Markets → data feeds back into government dashboards.</p>
          <p className="p-4 text-white font-bold">This is the TradeConnect Initiative — not a project; a machine.</p>
          </div>
         
        </div>
      </div>
    </Section>
  );
};

export default TradeConnect;
