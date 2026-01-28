import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const StoriesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState(0);

    const officials = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&h=800&fit=crop',
            category: 'LEADERSHIP MESSAGE',
            quote: 'Empowering students through accessible funding and creating pathways to educational excellence',
            name: 'Hon. Ekwee Ethuro',
            title: 'Chairman of the Board',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop',
            category: 'EXECUTIVE OFFICE',
            quote: 'Committed to transforming lives through strategic financial support and innovative solutions',
            name: 'Dr. Sarah Kimani',
            title: 'Chief Executive Officer',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop',
            category: 'OPERATIONS',
            quote: 'Ensuring seamless delivery of services and maintaining the highest standards of excellence',
            name: 'James Omondi',
            title: 'Chief Operations Officer',
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&h=800&fit=crop',
            category: 'FINANCE & PLANNING',
            quote: 'Managing resources effectively to maximize impact and sustainability for future generations',
            name: 'Prof. Mary Wanjiru',
            title: 'Director of Finance',
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&h=800&fit=crop',
            category: 'STUDENT AFFAIRS',
            quote: 'Dedicated to supporting every student journey with compassion and commitment to excellence',
            name: 'Michael Wekesa',
            title: 'Director of Student Services',
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % officials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, officials.length]);

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % officials.length);
        setIsAutoPlaying(false);
    };

    const goToPrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + officials.length) % officials.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const currentOfficial = officials[currentIndex];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const contentVariants = {
        enter: {
            opacity: 0,
            y: 20
        },
        center: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        }
    };

    return (
        <div className="w-full  py-4 md:py-6 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full  border border-orange-200">
                        <svg className="w-3.5 h-3.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-xs font-semibold text-orange-700">Our Leadership Team</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Meet Our Leadership
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto">
                        Visionary leaders driving excellence and innovation across African trade
                    </p>
                </motion.div>

                {/* Main Carousel - Split Layout */}
                <div className="relative">
                    <div className="relative overflow-hidden  shadow-2xl bg-white">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                            {/* Left Side - Image */}
                            <div className="relative h-[350px] lg:h-auto overflow-hidden">
                                <AnimatePresence initial={false} custom={direction}>
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.4 }
                                        }}
                                        className="absolute inset-0"
                                    >
                                        <img 
                                            src={currentOfficial.image}
                                            alt={currentOfficial.name}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Subtle overlay for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Right Side - Content */}
                            <div className="relative bg-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={currentIndex}
                                        variants={contentVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.4 }}
                                        className="space-y-5"
                                    >
                                        {/* Category Badge */}
                                        <div>
                                            <span className="inline-block px-4 py-2 bg-orange-600 text-white rounded-full text-xs font-bold tracking-wide uppercase shadow-md">
                                                {currentOfficial.category}
                                            </span>
                                        </div>

                                        {/* Quote Icon */}
                                        <div>
                                            <FaQuoteLeft className="text-2xl md:text-3xl text-orange-400/60" />
                                        </div>

                                        {/* Quote */}
                                        <blockquote className="space-y-4">
                                            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                                {currentOfficial.quote}
                                            </p>
                                        </blockquote>

                                        {/* Divider */}
                                        <div className="w-20 h-1 bg-orange-500 rounded-full" />

                                        {/* Person Details */}
                                        <div className="space-y-2">
                                            <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                                                {currentOfficial.name}
                                            </h3>
                                            <p className="text-sm md:text-base text-orange-600 font-semibold">
                                                {currentOfficial.title}
                                            </p>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="pt-2">
                                            <motion.button 
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                                                whileHover={{ scale: 1.05, x: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <span>View Profile</span>
                                                <FaArrowRight className="text-sm" />
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    
                </div>

                

                
            </div>
        </div>
    );
};

export default StoriesCarousel;