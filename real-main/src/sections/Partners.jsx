import { AiOutlineGlobal, AiOutlineBank, AiOutlineTrophy } from "react-icons/ai";
import { motion } from "framer-motion";

const Partners = () => {
  const featuredPartners = [
    {
      name: "AfCFTA",
      description: "Continental Free Trade Area",
      category: "Strategic Partner",
    },
    {
      name: "Afreximbank",
      description: "Africa Trade Gateway",
      category: "Financial Partner",
    },
    {
      name: "Kenya Government",
      description: "AfCFTA Trading Company",
      category: "Government Partner",
    },
  ];

  const partnerCategories = [
    {
      title: "Government & Diplomatic Partners",
      icon: <AiOutlineGlobal size={22} />,
      bgColor: "bg-blue-50",
      partners: [
        "Ministry of Foreign Affairs",
        "Kenya Trade Network Agency",
        "AfCFTA Secretariat",
      ],
    },
    {
      title: "Pan-African & Global Institutions",
      icon: <AiOutlineBank size={22} />,
      bgColor: "bg-green-50",
      partners: [
        "AfCFTA Secretariat",
        "Afreximbank",
        "African Development Bank",
      ],
    },
    {
      title: "Private Sector & Ecosystem",
      icon: <AiOutlineTrophy size={22} />,
      bgColor: "bg-orange-50",
      partners: [
        "Banks & Trade Finance Providers",
        "Logistics & Shipping Partners",
        "Technology & Innovation Hubs",
      ],
    },
  ];

  return (
    <section id="partners" className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100/60 px-4 py-2 rounded-full font-bold text-sm mb-4">
            Partners & Governance
          </span>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900">
            A Coalition for African Trade
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            RSA operates at the intersection of government, private sector, and
            international institutions to build trade infrastructure that works.
          </p>
        </div>

        {/* Featured Partners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {featuredPartners.map((partner, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#ee5d32]"
            >
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 mb-3">
                {partner.description}
              </p>
              <span className="inline-block bg-[#ee5d32]/10 text-[#ee5d32] text-xs font-semibold px-3 py-1 rounded-full">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Partner Ecosystem */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Our Partner Ecosystem
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className={`${category.bgColor} rounded-xl p-6 hover:shadow-lg transition-all`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h4 className="font-bold text-gray-900 text-lg">
                    {category.title}
                  </h4>
                </div>

                <ul className="space-y-2">
                  {category.partners.map((partner, pIndex) => (
                    <li
                      key={pIndex}
                      className="text-sm text-gray-700 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join the TradeConnect Coalition
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-6">
            Whether you're a government agency, financial institution, logistics
            provider, or business association — there's a role for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#FF9913] text-white font-bold rounded-lg shadow-lg"
            >
              Become a Partner
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-lg"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
