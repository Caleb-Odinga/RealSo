import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaShoppingBasket,
  FaWrench,
  FaChartLine,
  FaDollarSign,
  FaShieldAlt,
  FaLaptop,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

/* =========================
   CARD THEMES (ISOLATED)
   ========================= */
const CARD_THEMES = {
  commodities: {
    accent: "#ea580c",
    border: "border-orange-200",
    iconBg: "from-orange-100 to-orange-50",
    iconText: "text-orange-700",
    pillBg: "bg-orange-50",
    ctaFrom: "#ea580c",
    ctaTo: "#bb8c0a",
  },
  services: {
    accent: "#2563eb",
    border: "border-blue-200",
    iconBg: "from-blue-100 to-blue-50",
    iconText: "text-blue-700",
    pillBg: "bg-blue-50",
    ctaFrom: "#2563eb",
    ctaTo: "#1e40af",
  },
  investment: {
    accent: "#059669",
    border: "border-emerald-200",
    iconBg: "from-emerald-100 to-emerald-50",
    iconText: "text-emerald-700",
    pillBg: "bg-emerald-50",
    ctaFrom: "#059669",
    ctaTo: "#047857",
  },
  financing: {
    accent: "#7c3aed",
    border: "border-purple-200",
    iconBg: "from-purple-100 to-purple-50",
    iconText: "text-purple-700",
    pillBg: "bg-purple-50",
    ctaFrom: "#7c3aed",
    ctaTo: "#5b21b6",
  },
  labour: {
    accent: "#ff0000",
    border: "border-red-200",
    iconBg: "from-red-100 to-red-50",
    iconText: "text-red-700",
    pillBg: "bg-red-100",
    ctaFrom: "#ff0000",
    ctaTo: "#cc0000",
  },
  government: {
    accent: "#374151",
    border: "border-gray-300",
    iconBg: "from-gray-100 to-gray-50",
    iconText: "text-gray-700",
    pillBg: "bg-gray-100",
    ctaFrom: "#374151",
    ctaTo: "#111827",
  },
};

/* =========================
   ISOLATED CARD COMPONENT
   ========================= */
const CategoryCard = ({ category, index, isVisible, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = category.icon;
  const theme = CARD_THEMES[category.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer border ${theme.border} flex flex-col`}
    >
      <div className="p-4 flex-1 flex flex-col">
        {/* Icon + Pill */}
        <div className="flex justify-between mb-3">
          <motion.div
            className={`p-3.5 rounded-xl bg-gradient-to-br ${theme.iconBg}`}
            whileHover={{ scale: 1.1, rotate: 6 }}
          >
            <Icon className={`w-6 h-6 ${theme.iconText}`} />
          </motion.div>

          <motion.span
            className={`px-3 py-1.5 ${theme.pillBg} text-xs font-semibold rounded-full`}
            whileHover={{ backgroundColor: theme.accent, color: "#fff" }}
          >
            {category.pillars.length}{" "}
            {category.pillars.length === 1 ? "Pillar" : "Pillars"}
          </motion.span>
        </div>

        {/* Title */}
        <motion.h3
          className="text-lg md:text-xl font-bold text-gray-900 mb-2"
          whileHover={{ color: theme.accent }}
        >
          {category.title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {category.description}
        </p>

        {/* Pillars */}
        <div className="space-y-2 mb-5 flex-1">
          <p className="text-xs font-bold text-gray-500 uppercase">
            Trade Pillars
          </p>
          {category.pillars.map((pillar, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-100 bg-gray-50"
              whileHover={{
                borderColor: theme.accent,
                backgroundColor: "#ffffff",
                x: 5,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
              <span className="text-xs font-medium text-gray-700">
                {pillar}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.button
        onClick={() => onClick(category.id)}
        className="w-full py-3 text-white font-semibold flex items-center justify-center gap-2 relative"
        style={{
          background: `linear-gradient(to right, ${theme.ctaFrom}, ${theme.ctaTo})`,
        }}
        whileHover={{ boxShadow: `0 20px 25px -5px ${theme.accent}55` }}
        whileTap={{ scale: 0.96 }}
      >
        <span>Explore {category.title}</span>
        <motion.div animate={{ x: isHovered ? 8 : 0 }}>
          <FaArrowRight />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

/* =========================
   MAIN COMPONENT
   ========================= */
const CombinedTradeComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      icon: FaShoppingBasket,
      title: "Commodities Trade",
      description:
        "Buy, sell, or source agricultural, industrial, and processed goods.",
      pillars: ["Commodities & Goods", "Manufacturing & Industrial"],
      id: "commodities",
    },
    {
      icon: FaWrench,
      title: "Services & Contracting",
      description:
        "Access service providers, contractors, EPCs, consultants, and logistics partners.",
      pillars: [
        "Services & Professional",
        "Creative Economy",
        "Logistics & Corridors",
      ],
      id: "services",
    },
    {
      icon: FaChartLine,
      title: "Investment & Projects",
      description:
        "Structure greenfield and brownfield investments, PPPs, and project pipelines.",
      pillars: ["Investment & Capital"],
      id: "investment",
    },
    {
      icon: FaDollarSign,
      title: "Financing & Trade Finance",
      description:
        "Originate financing requests, trade finance instruments, and capital partnerships.",
      pillars: ["Trade Finance"],
      id: "financing",
    },
    {
      icon: FaLaptop,
      title: "Labour & Skill Exchange",
      description:
        "Cross-border talent sourcing, technical skills, and workforce mobility.",
      pillars: ["Labour & Skills Mobility"],
      id: "labour",
    },
    {
      icon: FaShieldAlt,
      title: "Government & Regulatory",
      description:
        "Licensing, certification, permits, policy guidance, institutional coordination.",
      pillars: ["Government Facilitation"],
      id: "government",
    },
  ];

  const handleCategoryClick = (id) => {
    console.log("Navigate to inquiry:", id);
    alert("Development still going on");
  };

  return (
    <div className="relative border-b py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-100 to-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-5 py-1.5 rounded-full shadow mb-5 border">
            <FaCheckCircle className="text-[#FF9913]" />
            <span className="text-sm font-bold text-gray-800">
              Trade Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
            Not Just Commodities
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-3">
            Our infrastructure is built to process the{" "}
            <span className="font-bold text-[#4e7537]">
              full spectrum
            </span>{" "}
            of African trade. Every inquiry becomes a structured deal inside
            RSA&apos;s ecosystem.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
              isVisible={isVisible}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CombinedTradeComponent;