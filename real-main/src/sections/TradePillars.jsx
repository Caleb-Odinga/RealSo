import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
} from "react-icons/fa";

const CombinedTradeComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
  ];

  return (
    <section className="px-4 sm:px-6 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-[#f7f7f2] rounded-2xl px-6 sm:px-10 py-14 text-center"
      >
        {/* Header */}
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

        {/* Pills */}
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
  );
};

export default CombinedTradeComponent;
