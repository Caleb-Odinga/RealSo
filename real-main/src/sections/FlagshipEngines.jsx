import React from "react"
import { motion } from "framer-motion"
import {
  FaComment,
  FaHandshake,
  FaFileAlt,
  FaStore,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa"
import { FaS } from "react-icons/fa6"

const engines = [
  {
    name: "BiasharaLink™",
    tagline: "Africa's Inquiry Console",
    description:
      "Where embassies, counties, buyers, sellers, service providers, investors, financiers, labour agencies, creatives and diaspora all submit and track real, structured opportunities.",
    users: [
      "Embassies & Consulates",
      "Global Buyers & Sellers",
      "Diaspora Investors",
      "County Governments",
    ],
    icon: FaComment,
    gradient: "from-orange-500 to-orange-700",
  },
  {
    name: "DealHouse™",
    tagline: "Africa's Multi-Sector Deal Room",
    description:
      "Where inquiries — in commodities, services, labour, investment, finance and government facilitation — are verified, matched, structured, contracted and monitored.",
    users: [
      "Importers & Exporters",
      "Service Providers",
      "Investors & Missions",
      "Financiers & Insurers",
    ],
    icon: FaHandshake,
    gradient: "from-indigo-900 to-indigo-700",
  },
  {
    name: "PolicyTracker™",
    tagline: "Africa's Trade Policy Brain",
    description:
      "Where AfCFTA protocols, customs rules, incentives, circulars, county bylaws and sector regulations are turned into searchable, understandable, AI-assisted intelligence.",
    users: ["Trade Officers",
            "Custom Agencies",
            "Legal Teams",
            "Standard Bodies"
     ],
    icon: FaFileAlt,
    gradient: "from-emerald-700 to-emerald-900",
  },
  {
    name: "Asili Markets™",
    tagline: "Africa's Physical Shelf & Distribution Stage",
    description:
      "Where African and global products, services, creative brands and investment stories meet real buyers, real corridors and real distribution — retail, wholesale, B2B and pavilion formats.",
    users: ["Retailers & Wholesalers", "Creative Brands", "Manufacturers", "Distribution Partners"],
    icon: FaStore,
    gradient: "from-teal-500 to-teal-700",
  },
  {
    name: "TradePod™",
    tagline: "Corridor Experience Booths",
    description:
      "Compact, immersive TradeConnect Experience Booths placed in high-traffic corridors — airports, malls, government offices — designed to support all inquiry types and serve as government–private sector interface nodes.",
    users: ["SMEs & Businesses", "Investors & DFIs", "Job Seekers", "Governments Agencies"],
    icon: FaMapMarkerAlt,
    gradient: "from-red-700 to-red-900",
  },
  {
    name: "Deal Steward™",
    tagline: "Psychology & Execution Curriculum",
    description:
      "A certified professional program for the psychological, institutional, and executional integrity of transactions — training Africa's custodians of deal execution from inquiry to completion.",
    users: ["Trade Professionals", "Executives", "Deal Makers", "Institutional Partners"],
    icon: FaGraduationCap,
    gradient: "from-purple-700 to-purple-900",
  },
]

const FlagshipEngines = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-green-600 uppercase">
            The RSA Ecosystem
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
            Six Flagship Engines Power</h2> 
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900"> Our World </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            An integrated stack of platforms, physical channels, and professional
            programs designed to move Africa&apos;s trade from paper to reality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {engines.map((engine, index) => {
            const Icon = engine.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                {/* Top Gradient */}
                <div
                  className={`p-6 text-white bg-gradient-to-r ${engine.gradient}`}
                >
                  <Icon className="text-2xl mb-4" />
                  <h3 className="text-xl font-bold">{engine.name}</h3>
                  <p className="text-sm opacity-90">{engine.tagline}</p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-5">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {engine.description}
                  </p>

                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                      Who Uses It:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {engine.users.map((user, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {user}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="text-sm font-semibold text-indigo-700 inline-flex items-center gap-2">
                    Learn More <span>→</span>
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="items-center mt-20">
              <div className="py-9 px-6 bg-blue-950 shadow-lg rounded-lg">
                <div className="items-center text-center "><h1 className="font-bold text-4xl text-white mb-3">From Diplomacy to Shelves</h1>
                <p className="p-6 text-sm font-semibold text-gray-100">A mission receives a buyer inquiry → enters BiasharaLink → moves to DealHouse for verification → PolicyTracker ensures correct regulations → products ship along RSA corridors → arrive at Asili Markets → data feeds back into government dashboards.</p>
                <p className="p-4 text-white font-bold">This is the TradeConnect Initiative — not a project; a machine.</p>
                </div>
              </div>
            </div>

      </div>

    </section>
  )
}

export default FlagshipEngines
