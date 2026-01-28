import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

/* ===== Counter Component (isolated addition) ===== */
const StatCounter = ({ end }) => {
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    if (count >= end) return;

    const increment = Math.ceil(end / 100);
    const timer = setInterval(() => {
      setCount((prev) => Math.min(prev + increment, end));
    }, 20);

    return () => clearInterval(timer);
  }, [count, end]);

  return <>{count.toLocaleString()}+</>;
};
/* ================================================ */

const Hero = ({ name, sub, open = false }) => {
  const location = useLocation();

  const hideFooterRoutes = ["/HowItWorks", "/Solutions", "/Inquiry"];
  const shouldHideFooter = hideFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  /* ===== Stats values changed to numbers ===== */
  const statss = [
    { value: 315, label: "Containers Moved" },
    { value: 1800, label: "Enterprises Touched" },
    { value: 7000, label: "Inquiries Processed" },
  ];
  /* ========================================= */

  return (
    <section
      id="home"
      className={`relative ${
        open
          ? "min-h-screen pt-28 md:pt-36 pb-32"
          : "pt-20 pb-20"
      }`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(6, 18, 40, 0.92), rgba(6, 18, 40, 0.96)),
          url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/15 text-[#FF9913] text-xs font-semibold">
            ● AfCFTA Trading Company
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-gray-200 text-xs font-semibold">
            Afreximbank ATG Digital Trade Partner
          </span>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-white font-extrabold leading-tight
            text-3xl md:text-5xl lg:text-6xl xl:text-7xl
            max-w-5xl
          "
        >
          Africa&apos;s Trade Cannot{" "}
          <span className="text-[#FF9913]">Stay on Paper.</span>
          <br />
          <span className="text-gray-200">
            We Build the Rails That Move It.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
            mt-6 text-gray-300 text-sm md:text-lg
            max-w-3xl leading-relaxed
          "
        >
          Real Sources Africa (RSA) is a Pan-African trade–infrastructure
          institution that designs and operates the systems, platforms and
          physical hubs that move goods, services, labour, investments and ideas
          across Africa — under AfCFTA, with government alignment, and at
          continental scale.
        </motion.p>

        {/* CTAs */}
        {open && (
          <div className="flex flex-wrap gap-4 mt-10">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/ExploreEcosystem"
                className="
                  inline-flex items-center gap-3
                  px-7 py-4 rounded-xl
                  bg-[#FF9913] text-black
                  font-semibold text-sm md:text-base
                  hover:bg-yellow-400 transition
                "
              >
                Explore the RSA Ecosystem
                <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href="#partner"
                className="
                  inline-flex items-center gap-3
                  px-7 py-4 rounded-xl
                  border border-white/30 text-white
                  font-semibold text-sm md:text-base
                  hover:bg-white/10 transition
                "
              >
                Partner With RSA
                <FaArrowRight />
              </a>
            </motion.div>
          </div>
        )}

        {/* Stats */}
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.2 }}
            className="
              grid grid-cols-1 sm:grid-cols-3
              gap-10 mt-20
              max-w-4xl
            "
          >
            {statss.map((stat, index) => (
              <div
                key={index}
                className="
                  bg-white/5 backdrop-blur-md
                  border border-white/10
                  rounded-xl p-6
                "
              >
                <h3 className="text-white text-2xl font-bold">
                  <StatCounter end={stat.value} />
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        )}

      </div>
      <div className="absolute bottom-0 left-0 w-full h-60 pointer-events-none bg-gradient-to-b from-transparent via-gray-700/100 to-gray-200" />

    </section>
  );
};

export default Hero;
