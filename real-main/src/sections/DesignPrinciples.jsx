import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FaBullseye,
  FaLayerGroup,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa"

const DesignPrinciples = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const pillars = [
    "Commodities & Goods",
    "Manufacturing & Industrial",
    "Services & Professional",
    "Labour & Skills Mobility",
    "Investment & Capital",
    "Trade Finance",
    "Government Facilitation",
    "Creative Economy",
    "Logistics & Corridors",
  ]

  const principlesData = [
    {
      title: "Implementation First",
      text: "We start from containers, contracts and jobs — not theory.",
      icon: FaBullseye,
    },
    {
      title: "Multi-Sector by Design",
      text: "Our systems handle all inquiry types, not just commodities.",
      icon: FaLayerGroup,
    },
    {
      title: "Government-Aligned, Private-Led",
      text: "We strengthen institutions while keeping execution nimble.",
      icon: FaShieldAlt,
    },
    {
      title: "Data as Infrastructure",
      text: "Every deal feeds a growing intelligence layer.",
      icon: FaDatabase,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-12">
          Our DNA: Four Design Principles
        </h2>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principlesData.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-gray-100 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Icon className="text-gray-800 text-xl" />
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Not Just Commodities */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mt-20 bg-[#f7f7f2] rounded-2xl px-6 sm:px-10 py-14 text-center"
      >
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Not Just Commodities
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our infrastructure is built to process the full spectrum of African
            trade. Every inquiry becomes a structured deal inside RSA&apos;s
            ecosystem.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {pillars.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-full bg-white border border-gray-200
                         text-sm font-semibold text-gray-900 shadow-sm
                         hover:shadow-md transition-all"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default DesignPrinciples
