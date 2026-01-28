import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaShieldAlt, FaFileContract, FaCheckCircle, FaBrain } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HowItWorkss = () => {

  const navigate =useNavigate()

  const HandClick =() =>{
    navigate("/Getstart")
  }
  const acts = [
    {
      id: 1,
      title: "Capture: Every Opportunity Has a Door",
      subtitle: "ACT I",
      icon: FaBuilding,
      description: "BiasharaLink™ is that door. Embassies, counties, agencies, SMEs, corporates, investors, diaspora and partners log inquiries in a structured way.",
      details: [
        "What do you need or offer?",
        "Where? (Origin/destination)",
        "When? (Timeline)",
        "How big? (Volumes, scope)" ,
        "What's already in place?"

      ],
      color: "from-blue-500 to-cyan-600",
      iconBg: "bg-blue-500",
      position: "left"
    },
    {
      id: 2,
      title: "Verify: Real People, Real Capacity, Real Risk",
      subtitle: "ACT II",
      icon: FaShieldAlt,
      description: "DealHouse™ performs identity and feasibility checks tailored to deal type — capacity, inventory, quality, certifications, portfolios, credentials.",
      details: [
        "For goods: capacity & certifications",
        "For services: portfolio & licenses",
        "For labour: verification & compliance",
        "For investment: documentation & governance"
      ],
      color: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-500",
      position: "right"
    },
    {
      id: 3,
      title: "Structure: A Deal is a Script Everyone Can Read",
      subtitle: "ACT III",
      icon: FaFileContract,
      description: "RSA transforms inquiries into Deal Sheets that standardize parties, terms, regulations, risk, financing, milestones and logistics plans.",
      details: [
        "Commercial terms defined",
        "Regulatory anchor set",
        "Risk allocations clear",
        "Financing options matched"
      ],
      color: "from-purple-500 to-violet-600",
      iconBg: "bg-purple-500",
      position: "left"
    },
    {
      id: 4,
      title: "Execute: Contracts, Escrow, Movement",
      subtitle: "ACT IV",
      icon: FaCheckCircle,
      description: "Contracts are drafted, escrow/settlement rails set up, logistics providers locked in, and distribution endpoints earmarked. This is where things move",
      details: [
        "Contracts from template libraries",
        "Escrow with partner banks",
        "Logistics & insurance partners",
        "Asili Markets slots allocated"
      ],
      color: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-500",
      position: "right"
    },
      {
      id: 5,
      title: "Remember & Learn: No Deal Should Disappearr",
      subtitle: "ACT V",
      icon: FaBrain,
      description: "Payments reconciled, performance rated, policy lessons captured, corridor statistics updated. Every transaction makes the system smarter",
      details: [
        "Performance ratings",
        "Policy lessons in PolicyTracker",
        "Corridor statistics updated",
        "SME profiles strengthened"
      ],
      color: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-500",
      position: "left"
    }
  ];

  return (
    <>
    
    
    
    <div className="min-h-screen   overflow-hidden">
      {/* Header */}
      <div className=" py-12">
        <div className=" mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-xs font-bold text-black tracking-widest uppercase mb-2">
              How It Works
            </p>
            <h1 className="text-3xl md:text-6xl font-extrabold text-black/80 mb-3">
              The Cinematic Flow
            </h1>
            <p className="text-base text-black max-w-3xl mx-auto leading-relaxed">
              Think of RSA like a film production studio for trade. The script is the inquiry, 
              the cast are buyers and sellers, the sets are platforms and markets, the director 
              is the TradeConnect logic, and the final cut is a deal delivered.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline with Acts */}
      <div className="relative max-w-5xl mx-auto px-4 py-12">
        {/* Vertical Light Beam */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-emerald-400 via-purple-400 to-amber-400 opacity-30 blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-emerald-500 via-purple-500 to-amber-500"></div>
        </div>

        {/* Acts */}
        <div className="relative space-y-0">
          {acts.map((act, index) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, x: act.position === 'left' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`flex items-center ${
                act.position === 'left' 
                  ? 'justify-start pr-4 md:pr-12' 
                  : 'justify-end pl-4 md:pl-12'
              } mb-12 md:mb-16`}>
                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${act.position === 'right' ? 'md:ml-auto' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${act.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-500`}></div>
                    
                    {/* Card */}
                    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                      {/* Icon Circle */}
                      <div className={`absolute ${
                        act.position === 'left' ? '-right-4 md:-right-6' : '-left-4 md:-left-6'
                      } top-6`}>
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${act.iconBg} shadow-xl flex items-center justify-center border-3 border-white`}
                        >
                          <act.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </motion.div>
                      </div>

                      {/* Header with Gradient */}
                      <div className={`bg-gradient-to-r ${act.color} px-6 py-4 ${
                        act.position === 'left' ? 'pr-12 md:pr-16' : 'pl-12 md:pl-16'
                      }`}>
                        <span className="inline-block text-xs font-bold text-white/80 tracking-widest uppercase mb-1 bg-white/20 px-2 py-0.5 rounded-full">
                          {act.subtitle}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                          {act.title}
                        </h3>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-slate-700 text-sm leading-relaxed mb-4">
                          {act.description}
                        </p>

                        {/* Details */}
                        <div className="space-y-2">
                          {act.details.map((detail, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + idx * 0.1 }}
                              className="flex items-start gap-2 group/item"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${act.color} mt-1.5 group-hover/item:scale-150 transition-transform`}></div>
                              <span className="text-slate-600 text-sm flex-1">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Light Strip */}
                      <div className={`h-1 bg-gradient-to-r ${act.color}`}></div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Timeline Dot with Light */}
              <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '2rem' }}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Glow */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${act.color} blur-md opacity-60 animate-pulse`}></div>
                  {/* Dot */}
                  <div className={`relative w-6 h-6 rounded-full bg-gradient-to-br ${act.color} shadow-lg border-3 border-white flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{act.id}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* End Marker */}
        <div className="relative flex justify-center mt-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-amber-500 shadow-xl border-3 border-white flex items-center justify-center"
          >
            <FaCheckCircle className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      
    </div>

<div className='mt-4'></div>
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" mx-auto  pb-2"
      >
        <div className="relative group">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600  p-8 shadow-xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-50 text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
              Join RSA and experience the future of trade facilitation where every deal 
              is a masterpiece in the making.
            </p>
            <motion.button
            onClick={() => navigate("/Getstart")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started Today
            </motion.button>
          </div>
        </div>
      </motion.div></>
  );
};

export default HowItWorkss;