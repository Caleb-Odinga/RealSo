import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- Count Up Hook ---------------- */
const CountUp = ({ end, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ---------------- Data ---------------- */
const stats = [
  {
    value: 54,
    label: "African Nations Covered",
    color: "text-blue-600",
  },
  {
    value: 2300,
    label: "Trade Value Facilitated",
    prefix: "$",
    suffix: "B+",
    color: "text-emerald-600",
  },
  {
    value: 1800,
    label: "Verified Enterprises",
    suffix: "+",
    color: "text-orange-500",
  },
  {
    value: 98,
    label: "Partner Satisfaction",
    suffix: "%",
    color: "text-purple-600",
  },
];

export default function InstitutionalBacking() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
        >
          Institutional Trust & Credibility
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-3xl md:text-5xl font-bold text-gray-900"
        >
          Backed by Africa&apos;s{" "}
          <span className="text-orange-500">Leading Institutions</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm md:text-base"
        >
          Real Sources Africa operates under the frameworks and partnerships
          of the continent&apos;s most trusted trade and development institutions.
        </motion.p>

        {/* Stats Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg p-8 text-center"
            >
              <h3 className={`text-4xl font-bold ${stat.color}`}>
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="mt-2 text-gray-600 text-sm font-medium">
                {stat.label}
              </p>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
