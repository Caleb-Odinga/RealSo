import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ServicesPartnersSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredService, setHoveredService] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        {
            title: "Import Export Procedures",
            description: "Step by step guide on Import & Export procedures with comprehensive documentation support.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Trade Finance Solutions",
            description: "Comprehensive trade finance instruments and working capital solutions for businesses.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "from-orange-600 to-orange-700"
        },
        {
            title: "Market Intelligence",
            description: "Real-time market insights and strategic guidance for African market expansion.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: "from-orange-700 to-orange-800"
        }
    ];

    const partners = [
        { name: "Afreximbank", subtitle: "Trade Finance", bg: "bg-[#009639]", url: "#" },
        { name: "KCB Bank", subtitle: "Banking Partner", bg: "bg-[#7CC242]", url: "#" },
        { name: "KNCCI", subtitle: "Business Network", bg: "bg-[#005BC8]", url: "#" },
        { name: "Equity Group", subtitle: "Financial Services", bg: "bg-[#AD500F]", url: "#" },
        { name: "BADEA", subtitle: "Development", bg: "bg-[#006C3E]", url: "#" },
        { name: "TDB", subtitle: "Trade Development", bg: "bg-[#1E3A8A]", url: "#" },
    ];

    return (
        <div className="py-12 md:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
            {/* Services Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <motion.div 
                    className="text-center mb-8 md:mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-3 border border-orange-200">
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse"></span>
                        <span className="text-xs font-semibold text-orange-700">Comprehensive Solutions</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Our Other Services
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto">
                        End-to-end trade solutions designed for African markets
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                            className="group relative bg-white border border-gray-200 rounded-xl p-5 md:p-6 transition-all duration-500 hover:shadow-xl overflow-hidden"
                        >
                            <motion.div 
                                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500`}
                                animate={{ opacity: hoveredService === index ? 1 : 0 }}
                            />

                            <div className="relative z-10">
                                <motion.div 
                                    className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}
                                    whileHover={{ scale: 1.1, rotate: 6 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-white">
                                        {service.icon}
                                    </div>
                                </motion.div>

                                <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-xs md:text-sm text-gray-600 group-hover:text-white/90 mb-4 leading-relaxed transition-colors duration-300">
                                    {service.description}
                                </p>

                                <motion.button 
                                    className="flex items-center gap-2 text-orange-600 group-hover:text-white font-semibold text-xs md:text-sm transition-colors duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    Read More
                                    <motion.span
                                        animate={{ x: hoveredService === index ? [0, 5, 0] : 0 }}
                                        transition={{ repeat: hoveredService === index ? Infinity : 0, duration: 1 }}
                                    >
                                        →
                                    </motion.span>
                                </motion.button>
                            </div>

                            <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} transform rotate-45 translate-x-12 -translate-y-12 rounded-full blur-xl`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Partners Section */}
            <div className="border-t border-gray-200 pt-12">
                <motion.div 
                    className="text-center mb-8 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-3 border border-orange-200">
                        <svg className="w-3.5 h-3.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-xs font-semibold text-orange-700">Our Network</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Trusted by Leading Institutions
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto">
                        Partnering with International most respected organizations
                    </p>
                </motion.div>

                <div className="relative overflow-hidden bg-gradient-to-r from-gray-100 via-white to-gray-100 py-8">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

                    <div className="flex gap-4 animate-marquee">
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <motion.a
                                key={index}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 group cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={`${partner.bg} rounded-lg p-2 md:px-3 flex flex-col items-center justify-center transition-all duration-300 shadow-md hover:shadow-xl border border-white/20 min-w-[160px] md:min-w-[180px]`}>
                                    <span className="text-white font-bold text-sm md:text-base mb-1 text-center">
                                        {partner.name}
                                    </span>
                                    <span className="text-white/80 text-xs font-medium">
                                        {partner.subtitle}
                                    </span>
                                    
                                    <motion.div 
                                        className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        initial={{ y: 10 }}
                                        whileHover={{ y: 0 }}
                                    >
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

               
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
};

export default ServicesPartnersSection;