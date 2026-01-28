import React from "react"
import { motion } from "framer-motion"
import {
  FaBullseye,
  FaLayerGroup,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa"

const principles = [
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

const DesignPrinciples = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-12">
          Our DNA: Four Design Principles
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((item, index) => {
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
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Icon className="text-gray-800 text-xl" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default DesignPrinciples
