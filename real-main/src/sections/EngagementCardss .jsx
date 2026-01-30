import React from 'react';
import { FaChartLine, FaUniversity, FaMoneyBillWave, FaHandshake, FaArrowRight, FaCheckCircle, FaGlobe, FaBuilding } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EngagementCardss = () => {


    const cards = [
        {
            icon: FaGlobe,
            title: "AfCFTA Secretariat",
            description: "Official Implementation Partner",
            buttonText: "Verified Partner",
            link: "Governmentsembassies",

        },
        {
            icon: FaUniversity,
            title: "Afreximbank",
            description: "Trade Finance Partner",
            buttonText: "Verified Partner",
            link: "Businessesentrepreneurs",

        },
        {
            icon: FaBuilding,
            title: "State Department of Foreign Affairs",
            description: "Kenya Government Partner",
            buttonText: "Verified Partner",
            link: "Banksdfis",

        },

          {
            icon: FaGlobe,
            title: "State Department of Trade",
            description: "Kenya Government Partner",
            buttonText: "Verified Partner",
            link: "Banksdfis",

        },

          {
            icon: FaBuilding,
            title: "Pan Africa Chamber of Commerce",
            description: "Private Sector Alliance",
            buttonText: "Verified Partner",
            link: "Banksdfis",

        },

        {
            icon: FaUniversity,
            title: "KCB Bank",
            description: "Trade Finance Partner",
            buttonText: "Verified Partner",
            link: "Investorsponsors",

        }
    ];

    const handleCardClick = (link) => {
        console.log('Navigate to:', link);
        // Add your navigation logic here
    };

    return (
        <div className=" py-12 px-4 sm:px-6 border-t border-b">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-gray-800">Institutional Partners & Frameworks</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2 flex flex-col animate-fadeInUp"
                                style={{
                                    animationDelay: `${index * 0.15}s`,
                                    animationFillMode: 'both'
                                }}
                            >
                                {/* Icon Section */}
                                <div className="p-6 pb-4">
                                    <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                        <Icon className="w-8 h-8 text-white items-center" />
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-bold text-slate-500 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                                        {card.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {card.description}
                                    </p>


                                </div>


                                <p className='mt-auto mb-3 text-center'> <span className='px-4 py-2 rounded-full shadow-lg bg-orange-200 font-semibold text-xs'>Verified Partner</span></p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 bg-blue-950 rounded-xl p-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                        {/* Left Content */}
                        <div className="max-w-xl">
                            <h1 className="text-2xl md:text-3xl text-white font-extrabold mb-4">
                                Enterprise-Grade Security & Compliance
                            </h1>
                            <p className="text-gray-300 leading-relaxed">
                                Our platforms meet international standards for data protection,
                                regulatory compliance, and secure cross-border trade operations.
                            </p>
                        </div>

                        {/* Compliance Badges */}
                        <div className="flex flex-wrap gap-4">
                            <span className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur hover:bg-white/20 transition">
                                ISO 27001 Compliant
                            </span>

                            <span className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur hover:bg-white/20 transition">
                                AfCFTA Verified
                            </span>

                            <span className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur hover:bg-white/20 transition">
                                Trade Excellence
                            </span>
                        </div>

                    </div>
                </div>

            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out;
                }
            `}</style>

            
        </div>
    );
};

export default EngagementCardss;