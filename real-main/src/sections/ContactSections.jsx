import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactSections = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            title: 'WhatsApp',
            description: 'Quick responses during business hours',
            action: '+254 704 341 365',
            link: 'https://wa.me/254704341365',
            colors: {
                iconBg: 'from-green-500 to-emerald-600',
                borderHover: 'hover:border-green-400',
                accent: 'text-green-600'
            }
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email Us',
            description: 'Detailed inquiries & documentation',
            action: 'info@realsourcesafrica.com',
            link: 'mailto:info@realsourcesafrica.com',
            colors: {
                iconBg: 'from-blue-500 to-indigo-600',
                borderHover: 'hover:border-blue-400',
                accent: 'text-blue-600'
            }
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Book a Meeting',
            description: 'Schedule a 30-min strategy call',
            action: 'Pick a time slot',
            link: '#',
            colors: {
                iconBg: 'from-orange-400 to-[#FF9913]',
                borderHover: 'hover:border-orange-400',
                accent: 'text-[#FF9913]'
            }
        }
    ];

    const offices = [
        { city: 'Nairobi', country: 'Kenya', region: 'HQ & East Africa' },
        { city: 'Lagos', country: 'Nigeria', region: 'West Africa' },
        { city: 'Johannesburg', country: 'South Africa', region: 'Southern Africa' }
    ];

    const platforms = [
        { name: "BiasharaLink", path: "#" },
        { name: "DealHouse", path: "#" },
        { name: "PolicyTracker", path: "#" },
        { name: "Asili Markets", path: "#" },
        { name: "TradePods", path: "#" },
        { name: "Deal Steward", path: "#" },
    ];

    const benefits = [
        'Inquiries processed within 48 hours',
        'Matched to verified counterparties',
        'Full deal support available',
        'Comprehensive support services'
    ];

  const stats = [
        { value: "12+", label: "African Missions" },
        { value: "40+", label: "Counties Covered" },
        { value: "24Hr", label: "Response Time" },
      ];


    return (
        <div className="bg-gradient-to-b from-white via-gray-50 to-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 bg-orange-100 px-5 py-2.5 rounded-full mb-5 border border-orange-200"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="w-2 h-2 bg-[#FF9913] rounded-full animate-pulse"></span>
                        <span className="text-xs md:text-sm font-bold text-[#FF9913]">Let's Build Together</span>
                    </motion.div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                        Ready to Move <span className="text-[#FF9913]">African Trade?</span>
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                        Whether you're an institution, enterprise, investor, or innovator — we're here to help you plug into Africa's trade infrastructure.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Contact Methods */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={index}
                                    href={method.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className={`group bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-xl transition-all duration-300 cursor-pointer ${method.colors.borderHover}`}
                                >
                                    <motion.div 
                                        className={`w-12 h-12 bg-gradient-to-br ${method.colors.iconBg} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}
                                        whileHover={{ scale: 1.1, rotate: 6 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {method.icon}
                                    </motion.div>
                                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                                        {method.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-600 mb-3 leading-relaxed">
                                        {method.description}
                                    </p>
                                    <p className={`text-sm font-semibold ${method.colors.accent}`}>
                                        {method.action} →
                                    </p>
                                </motion.a>
                            ))}
                        </div>

                        {/* Pan African Presence */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-lg"
                        >
                            <div className="flex items-start gap-3 mb-6">
                                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-7 h-7 text-[#118825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Pan-African Presence</h2>
                                    <p className="text-sm md:text-base text-gray-600">Regional hubs across the continent</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {offices.map((office, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
                                        transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-5 border border-emerald-100 hover:border-orange-300 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 text-[#118825]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-base md:text-lg">{office.city}</h3>
                                                <p className="text-xs md:text-sm text-gray-600">{office.country}</p>
                                            </div>
                                        </div>
                                        <span className="inline-block px-3 py-1.5 bg-[#2e6315] text-white text-xs font-semibold rounded-full">
                                            {office.region}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - CTA Section*/}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-br from-gray-900 via-slate-700 to-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl text-center"
                    >
                        <motion.div 
                            className="w-16 h-16 bg-[#FF9913] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                            whileHover={{ scale: 1.1, rotate: 6 }}
                        >
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </motion.div>

                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">Start Your Journey</h2>
                        <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                            Join 1,800+ enterprises already using the RSA ecosystem to access African markets.
                        </p>

                        <div className="flex flex-col gap-3 mb-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-5 py-3 bg-[#FF9913] hover:bg-orange-500 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                <span className="text-sm md:text-base">Register Your Organization</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border-2 border-white/30 backdrop-blur-sm"
                            >
                                Request a Demo
                            </motion.button>
                        </div>

                        <div className="border-t border-white/20 pt-5">
                            <div className="flex items-center justify-center gap-2 text-white/80 mb-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs md:text-sm font-medium">Quick links to our platforms</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                {platforms.map((platform, index) => (
                                    <motion.a
                                        key={index}
                                        href={platform.path}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                                        className="px-3 py-2.5 bg-white/10 text-white text-xs md:text-sm font-medium rounded-lg transition-all border border-white/20"
                                    >
                                        {platform.name}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

            
            
                {/* Why Choose RSA & Commitment Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-1 h-10 bg-[#FF9913] rounded-full"></span>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Why Choose RSA?</h3>
                        </div>
                        <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                            Have a trade inquiry, investment lead, or service request? Submit it through BiasharaLink and let the RSA ecosystem connect you to the right parties, resources, and deal structures.
                        </p>

                        <div className="space-y-4">
                            {benefits.map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-[#FF9913]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-700">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border border-orange-200"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <span className="w-1 h-10 bg-[#FF9913] rounded-full"></span>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Commitment</h3>
                        </div>
                        <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                            Real Sources Africa is dedicated to transforming African trade through innovative technology solutions and extensive market knowledge.
                        </p>
                        <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                            We provide the infrastructure and support needed for businesses to thrive in African markets, connecting buyers, suppliers, and investors across the continent.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-orange-400 to-[#FF9913] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                            Submit an Inquiry
                        </motion.button>
                    </motion.div>
                </div>
                       
              {/* Stats Section */}
                {open && (
                          <div
                            className="
                              grid grid-cols-1 sm:grid-cols-3
                              gap-10 mt-20
                              max-w-4xl
                            "
                          >
                            {stats.map((stat, index) => (
                              <div
                                className="
                                  bg-white/5 backdrop-blur-md
                                  border border-white/10
                                  rounded-xl p-6
                                "
                              >
                                <p className="text-gray-400 text-sm mt-1">
                                  {stat.label}
                                </p>
                                <h3 className="text-lg font-bold text-black mt-2">
                                  {stat.value}
                                </h3>
                              </div>
                            ))}
                          </div>
                        )}
            </div>
     </div>
    );
};

export default ContactSections;
