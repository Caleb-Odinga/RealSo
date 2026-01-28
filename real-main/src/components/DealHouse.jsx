import React from "react"
import { motion } from "framer-motion"
import {
  FaHandshake,
  FaShieldAlt,
  FaRobot,
  FaUniversity,
  FaChartLine,
  FaCubes,
  FaPaperPlane,
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
    transition: { staggerChildren: 0.12 },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export default function DealHousePortal() {
  const { bg, color } = useOutletContext()

  return (
    <div className="w-full bg-slate-50">

      {/* ================= TOP BANNER ================= */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className={`w-full ${bg} text-white px-6 py-3 flex justify-between items-center`}
      >
        <p className="text-sm md:text-base font-semibold tracking-wide">
          Turn African trade from conversations into real, trackable deals.
        </p>

        <a
          href="/start-deal"
          className="bg-white/10 px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition"
        >
          <FaPaperPlane />
          Start a Deal
        </a>
      </motion.div>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            DealHouse
          </h1>

          <p className="mt-2 text-base text-emerald-700 font-semibold">
            Where African Deals Are Made.
          </p>

          <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed">
            DealHouse Africa is a digital trade finance and investment platform
            designed to simplify how businesses, financiers, and governments
            transact under the AfCFTA. It connects verified buyers, sellers,
            financiers, and investors through an escrow-backed ecosystem that
            ensures trust, transparency, and transaction certainty.
          </p>

          <div className="mt-7 flex gap-4">
            <a
              href="/start-deal"
              className={`${bg} text-white px-6 py-3 rounded-lg text-sm font-medium`}
            >
              Start a Deal
            </a>

            <button className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-emerald-50 transition">
              Browse Opportunities
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Core Value
          </h3>

          <p className="text-slate-700 text-base italic leading-relaxed">
            “We don’t just list deals. We structure them.”
          </p>

          <div className={`mt-6 flex items-center gap-3 text-${color}`}>
            <FaHandshake size={28} />
            <p className="text-sm text-slate-600">
              Every inquiry is validated, structured, financed, and closed
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-14 border-t">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center"
          >
            Key Features
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Feature
              icon={<FaShieldAlt size={26} />}
              title="Digital Escrow (KCB)"
              text="All transactions settle through secure escrow accounts ensuring delivery and payment security."
            />

            <Feature
              icon={<FaRobot size={26} />}
              title="AI-Powered Matching"
              text="Deals are matched with financiers, investors, and suppliers based on sector, size, and risk."
            />

            <Feature
              icon={<FaChartLine size={26} />}
              title="Deal Structuring Desk"
              text="Analysts prepare teasers, trade docs, and financing proposals to ensure bankability."
            />

            <Feature
              icon={<FaUniversity size={26} />}
              title="Trade Finance"
              text="Integrated with Afreximbank, TDB, and AGF for working capital, insurance, and guarantees."
            />

            <Feature
              icon={<FaCubes size={26} />}
              title="Multi-Sector Deals"
              text="Commodities, investments, technology, infrastructure, financing, and services."
            />
          </div>
        </motion.div>
      </section>

      {/* ================= WHY IT MATTERS ================= */}
      <section className={`${bg} text-white py-14`}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why It Matters
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-white/90">
            DealHouse provides the missing link between inquiry and execution —
            transforming scattered leads into verified, finance-ready
            transactions. It is the engine room of RSA’s ecosystem, powering real
            deal closure and data-driven trade analytics across Africa.
          </p>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={`${bg} text-slate-300 pt-12 pb-6`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
          <FooterCol
            title="Platform"
            items={[
              "Deal Room",
              "Escrow Accounts",
              "Trade Finance",
              "AI Matching",
            ]}
          />

          <FooterCol
            title="Sectors"
            items={[
              "Commodities",
              "Investments",
              "Infrastructure",
              "Technology",
            ]}
          />

          <FooterCol
            title="Trust"
            items={[
              "KCB Digital Escrow",
              "Afreximbank Finance",
              "Transaction Governance",
              "Compliance & Risk",
            ]}
          />
        </div>

        <div className="border-t border-white/10 mt-8 pt-4 text-center text-xs text-white">
          © {new Date().getFullYear()} DealHouse Africa. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

/* ================= COMPONENTS ================= */

function Feature({ icon, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md transition"
    >
      <div className="text-emerald-700 mb-3">{icon}</div>
      <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
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
