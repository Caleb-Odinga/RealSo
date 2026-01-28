import React from "react"
import { motion } from "framer-motion"
import {
  FaGlobeAfrica,
  FaShieldAlt,
  FaBuilding,
  FaUsers,
  FaFileContract,
} from "react-icons/fa"
import { useOutletContext } from "react-router-dom"

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export default function BiasharaLinkPortal() {
  const { bg, color } = useOutletContext()

  const steps = [
    {
      number: "01",
      title: "Enterprise Registration",
      description:
        "Complete your profile with business details, capabilities, and trade interests. Our team initiates verification.",
    },
    {
      number: "02",
      title: "Verification & Scoring",
      description:
        "Multi-layered due diligence covering legal status, financial health, operational capacity, and track record.",
    },
    {
      number: "03",
      title: "Matchmaking",
      description:
        "AI-driven matching connects you with relevant counterparties based on your trade requirements and preferences.",
    },
  ]

  const users = [
    {
      title: "African Manufacturers",
      description:
        "Expand your market reach across the continent. Access verified buyers, navigate cross-border requirements, and scale your operations with institutional support.",
      points: [
        "Verified buyer network",
        "Export documentation support",
        "Logistics coordination",
        "Payment facilitation",
      ],
    },
    {
      title: "Producers & Cooperatives",
      description:
        "Connect directly with regional and global buyers while maintaining quality, traceability, and fair pricing.",
      points: [
        "Market access",
        "Quality verification",
        "Bulk order handling",
        "Trade transparency",
      ],
    },
    {
      title: "Importers",
      description:
        "Source quality African products with confidence. Our verification process ensures reliable, compliant suppliers.",
      points: [
        "Supplier verification",
        "Quality assurance",
        "Regulatory compliance",
        "Volume commitments",
      ],
    },
    {
      title: "Distributors & Wholesalers",
      description:
        "Build dependable supply chains across Africa with verified partners and reduced operational risk.",
      points: [
        "Consistent supply",
        "Risk mitigation",
        "Contract assurance",
        "Cross-border coordination",
      ],
    },
  ]

  return (
    <div className="w-full min-h-screen bg-slate-50">

      {/* ================= FLAG ================= */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className={`${bg} text-white text-center text-sm font-semibold py-2 mt-28`}
      >
        RSA Flagship Platform
      </motion.div>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            BiasharaLink™
          </h1>

          <p className="mt-2 text-base font-semibold text-lime-500">
            Africa’s Enterprise-to-Enterprise Trade Matching Platform
          </p>

          <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
            Where verified African businesses connect, negotiate, and close
            cross-border deals. Not a marketplace — a trade facilitation
            infrastructure designed for serious enterprise commerce.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <button className={`${bg} text-white px-6 py-3 rounded-lg text-sm font-medium`}>
              Register Your Enterprise
            </button>
            <button className="border border-slate-300 px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-100">
              Explore Opportunities
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Core Value
          </h3>

          <p className="text-sm text-slate-600 italic leading-relaxed">
            “Every embassy becomes a trade desk. Every exporter gains a global
            window.”
          </p>

          <div className={`mt-6 flex items-center gap-3 text-${color}`}>
            <FaGlobeAfrica size={26} />
            <p className="text-xs text-slate-600">
              Verified digital identities across Africa’s diplomatic network
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= WHAT IS ================= */}
      <section className="bg-white py-14 border-t">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-center mb-3">
            What is BiasharaLink?
          </motion.h2>

          <motion.p variants={fadeUp} className="text-center text-sm md:text-base text-slate-600 max-w-4xl mx-auto mb-10">
            BiasharaLink is RSA's flagship enterprise matching platform — the
            digital railroad where African businesses find each other, verify
            each other, and do business together.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature icon={<FaBuilding />} title="Not a Marketplace" />
            <Feature icon={<FaUsers />} title="Trust Infrastructure" />
            <Feature icon={<FaFileContract />} title="Policy & Market Directory" />
            <Feature icon={<FaShieldAlt />} title="Verified KYC Layer" />
          </div>
        </motion.div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              How BiasharaLink Works
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              A structured journey from registration to execution
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {steps.map((step) => (
              <motion.div key={step.number} variants={fadeUp} className="flex gap-5 items-start">
                <div className="w-11 h-11 rounded-full bg-[#0b1d3a] text-white flex items-center justify-center text-sm font-semibold">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{step.title}</h4>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= USERS ================= */}
      <section className="bg-[#0b1d3a] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Who Uses BiasharaLink?
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Purpose-built for serious players in African trade
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8">
            {users.map((item, index) => (
              <UserCard key={index} {...item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={`${bg} text-slate-300 pt-12 pb-6`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
          <FooterCol title="Platform" items={[
            "Trade Inquiry Desk",
            "Diaspora Trade Hub",
            "Market & Policy Directory",
            "Embassy Dashboards",
          ]} />
          <FooterCol title="Stakeholders" items={[
            "Exporters",
            "Embassies & Missions",
            "Diaspora Investors",
            "Trade Chambers",
          ]} />
          <FooterCol title="Trust & Compliance" items={[
            "KYC & Verification",
            "Afreximbank ATG Layer",
            "Data Protection",
            "Platform Governance",
          ]} />
        </div>

        <div className="border-t border-white/10 mt-8 pt-4 text-center text-xs text-white">
          © {new Date().getFullYear()} BiasharaLink. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

/* ================= COMPONENTS ================= */

function Feature({ icon, title }) {
  return (
    <motion.div variants={fadeUp} className="border border-slate-200 rounded-xl p-5 bg-white hover:shadow-md transition">
      <div className="text-blue-700 text-xl mb-3">{icon}</div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">
        Enterprise-grade trade infrastructure built for trust and scale.
      </p>
    </motion.div>
  )
}

function UserCard({ title, description, points }) {
  return (
    <motion.div variants={fadeUp} className="bg-white/10 border border-white/10 rounded-xl p-7">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm text-gray-300 mb-5 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-200 text-sm">
            <span className="w-5 h-5 flex items-center justify-center rounded-full border border-orange-400 text-orange-400 text-xs">
              ✓
            </span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
