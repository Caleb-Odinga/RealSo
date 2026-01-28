import React from "react"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const slideX = {
  hidden: (reverse) => ({
    opacity: 0,
    x: reverse ? 36 : -36,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const ImageCard = ({ src, alt, borderColor = "border-gray-200" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`h-[160px] md:h-[170px] rounded-lg overflow-hidden shadow-md border ${borderColor}`}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
    />
  </motion.div>
)

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 py-14 border-t border-gray-200 animate-float"
    >
      <div className="max-w-7xl mx-auto px-4 space-y-14">

        {/* ================= INTRO ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl space-y-3"
        >
          <span className="inline-flex bg-orange-100 text-[#FF9913] text-xss text-center md:text-xs lg:text-sm font-semibold px-3 py-1 rounded-full tracking-wide animate-bounce">
            WHO WE ARE
          </span>

          <p className="text-xss md:text-xs lg:text-base text-gray-700 leading-relaxed">
            <strong className="text-gray-900">
              Real Sources Africa (RSA)
            </strong>{" "}
            is a Pan-African trade infrastructure institution headquartered in
            Nairobi, serving as Kenya’s AfCFTA Trading Company and Afreximbank
            Africa Trade Gateway (ATG) Digital Trade Partner for East Africa.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            We operate at the intersection of governments, private sector,
            financial institutions, development partners, logistics providers,
            and diaspora-driven ecosystems.
          </p>
        </motion.div>

        {/* ================= VISION ================= */}
        {/* ================= VALUES / MISSION / PARTNERS CARDS ================= */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  {/* ===== VISION CARD ===== */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="bg-yellow-50 rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg cursor-pointer"
  >
    <h3 className="text-lg font-semibold text-orange-600 mb-2">
      Our Vision
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed">
      To build and operate integrated trade infrastructure — digital,
      physical, policy, and financial — enabling Africa to trade with
      itself and the world on its own terms.
    </p>
  </motion.div>

  {/* ===== MISSION CARD ===== */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="bg-gray-200 rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg cursor-pointer"
  >
    <h3 className="text-lg font-semibold text-cyan-600 mb-2">
      Our Mission
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed">
      To connect African producers, investors, and policymakers through
      innovative platforms that unlock trade finance, logistics, and
      cross-border market access.
    </p>
  </motion.div>

  {/* ===== CORE VALUES CARD ===== */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="bg-gray-200 rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg cursor-pointer"
  >
    <h3 className="text-lg font-semibold text-green-600 mb-2">
      Core Values
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed">
      Integrity · Partnership · Innovation · Pan-Africanism · Execution
    </p>
  </motion.div>

  {/* ===== PARTNERS CARD ===== */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="bg-yellow-50 rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg cursor-pointer"
  >
    <h3 className="text-lg font-semibold text-yellow-600 mb-2">
      Our Partners
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed">
      Afreximbank, KCB Bank, Equity Group, KNCCI, BADEA, TDB,
      County Governments, and Ministries of Trade & Foreign Affairs.
    </p>
  </motion.div>

</div>
      

      </div>
    </section>
  )
}

export default About
