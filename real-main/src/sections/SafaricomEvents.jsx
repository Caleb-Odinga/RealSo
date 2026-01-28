import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight, AiOutlineCalendar, AiOutlineGift, AiOutlineTrophy } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SafaricomEvents() {
    const [showMore, setShowMore] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const sideEvents = [
        {
            id: 2,
            title: "Tech Innovation Summit",
            date: "March 15-17, 2026",
            description: "Kenya's biggest tech conference",
            icon: <AiOutlineCalendar size={18} />,
        },
        {
            id: 3,
            title: "Trade Fair",
            date: "February 28, 2026",
            description: "Future of digital payments",
            icon: <AiOutlineGift size={18} />,
        },
        {
            id: 4,
            title: "Youth Empowerment",
            date: "Ongoing",
            description: "Skills training for entrepreneurs",
            icon: <AiOutlineTrophy size={18} />,
        },
    ];

    return (
        <div className="min-h-screen py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div 
                    className="mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4 border border-orange-200">
                        <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                        <span className="text-xs md:text-sm font-bold text-orange-700">Latest Updates</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 leading-tight">
                        What's New
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
                        Stay up to date with our new and improved products and services
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Featured Event Card */}
                    <motion.div 
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.div 
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            whileHover={{ y: -5 }}
                        >
                            {/* Image Section */}
                            <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                                <motion.img
                                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&q=80"
                                    alt="RSA @26"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.7 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/95 via-orange-900/50 to-transparent"></div>

                                {/* Live Badge */}
                                <motion.div 
                                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-orange-200 shadow-lg"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                                        <span className="text-orange-700 text-xs md:text-sm font-bold">LIVE NOW</span>
                                    </div>
                                </motion.div>

                                {/* Event Title */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <motion.h2 
                                        className="text-4xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-2xl tracking-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                    >
                                        RSA
                                        <span className="text-3xl sm:text-4xl md:text-5xl ml-1">@26</span>
                                    </motion.h2>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="relative p-5 sm:p-6 md:p-8 bg-gradient-to-br from-white to-orange-50/30">
                                <div className="flex items-start mb-4">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                        25 Millionaires. 25 Projects. KES 250M+
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                                    RSA @26 Draw. Daily and weekly winners from Oct 31, 2025 to Jan 19, 2026.
                                </p>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-orange-50/50 rounded-xl border border-orange-100">
                                    <div className="text-center">
                                        <div className="text-2xl md:text-3xl font-black text-orange-600">25</div>
                                        <div className="text-xs text-gray-600 mt-1">Winners</div>
                                    </div>
                                    <div className="text-center border-x border-orange-200">
                                        <div className="text-2xl md:text-3xl font-black text-orange-600">25</div>
                                        <div className="text-xs text-gray-600 mt-1">Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl md:text-3xl font-black text-orange-600">250M+</div>
                                        <div className="text-xs text-gray-600 mt-1">Prize Pool</div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="text-start">
                                    <Link to={"/Updates"}>
                                        <motion.button
                                            className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 px-6 md:px-8 rounded-full shadow-lg overflow-hidden"
                                            whileHover={{ 
                                                scale: 1.05,
                                                boxShadow: "0 20px 25px -5px rgba(234, 88, 12, 0.3)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="relative z-10 text-sm md:text-base">View More Events</span>
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                            >
                                                <AiOutlineArrowRight size={18} className="relative z-10" />
                                            </motion.div>
                                            <motion.div 
                                                className="absolute inset-0 bg-white/20"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "100%" }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
                        </motion.div>
                    </motion.div>

                    {/* Side Events */}
                    <div className="lg:col-span-2 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <div className="bg-white rounded-xl p-4 mb-4 border border-orange-100 shadow-md">
                                <h3 className="text-base md:text-lg font-bold text-gray-900 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-orange-600 rounded-full"></span>
                                    Ongoing Events
                                </h3>
                            </div>
                        </motion.div>

                        {sideEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div className="group relative bg-white rounded-xl p-4 md:p-5 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100">
                                    {/* Orange gradient overlay on hover */}
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <div className="relative flex items-start gap-3">
                                        <motion.div 
                                            className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl flex-shrink-0 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 6 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="text-white">
                                                {event.icon}
                                            </div>
                                        </motion.div>

                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-gray-900 group-hover:text-white mb-1.5 text-sm md:text-base transition-colors duration-300">
                                                {event.title}
                                            </h4>
                                            <p className="text-xs md:text-sm text-gray-500 group-hover:text-white/90 mb-2 flex items-center gap-1.5 transition-colors duration-300">
                                                <AiOutlineCalendar size={14} />
                                                {event.date}
                                            </p>
                                            <p className="text-gray-600 group-hover:text-white/95 text-xs md:text-sm leading-relaxed transition-colors duration-300">
                                                {event.description}
                                            </p>
                                        </div>

                                        <motion.div 
                                            className="flex flex-col items-end gap-2"
                                            whileHover={{ x: 5 }}
                                        >
                                            <AiOutlineArrowRight className="text-gray-400 group-hover:text-white transition-colors duration-300" size={18} />
                                        </motion.div>
                                    </div>

                                    {/* View Details Button - appears on hover */}
                                    <motion.div 
                                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ y: 10 }}
                                        whileHover={{ y: 0 }}
                                    >
                                        <span className="text-white text-xs font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                            View Details
                                        </span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}