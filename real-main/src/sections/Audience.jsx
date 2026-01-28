import React from 'react';
import { FaChartLine, FaUniversity, FaMoneyBillWave, FaHandshake, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import SubmitOpportunityCard from './SubmitOpportuinityCard';

const EngagementCards = () => {
        
    const cards = [
        {
            icon: FaChartLine,
            title: "Onboard Your Institution",
            description: "Government agencies, embassies, county trade offices, and investment boards can connect to the TradeConnect ecosystem.",
            buttonText: "Register Institution",
            link: 'Enterprise',
            features: [
                "Access BiasharaLink portal",
                "Track inquiries in real-time",
                "Connect to DealHouse pipeline"
            ]
        },
        {
            icon: FaUniversity,
            title: "List Your Business",
            description: "Manufacturers, exporters, service providers, and SMEs can join the ecosystem to access verified trade opportunities.",
            buttonText: "Register Business",
            link: 'Investor',
            features: [
                "Submit and receive inquiries",
                "Access structured deal rooms",
                "Build verified trade profiles"
            ]
        },
        {
            icon: FaMoneyBillWave,
            title: "Become a Partner",
            description: "Banks, logistics providers, insurers, and trade service companies can integrate as TradeConnect partners.",
            buttonText: "Partner With Us",
            link: 'Supplier',
            features: [
                "Access deal pipeline",
                "Provide trade services",
                "Co-brand with RSA ecosystem"
            ]
        }
    
    ];


    const navigate = useNavigate();

    const handleCardClick = (type) => {
        console.log("Navigate with type:", type);

        navigate("/Getstart", {
            state: {
                type,
            },
        });
    };


    return (
        <div className=" py-12 px-4 sm:px-6 border-t border-b">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-gray-800">Get Involved</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4">
                        Your Entry Point into African Trade
                    </h1>

                    <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                        Whether you're a government institution, private business, or trade service provider — there's a pathway for you to join the TradeConnect ecosystem.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                                    <div className="bg-violet-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-bold text-violet-900 mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                                        {card.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="px-6 pb-6 flex-1">
                                    <div className="space-y-2.5">
                                        {card.features.map((feature, fIndex) => (
                                            <div
                                                key={fIndex}
                                                className="flex items-center gap-3 text-sm text-gray-700"
                                            >
                                                <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="p-6 pt-0 mt-auto">
                                    <button
                                        onClick={() => handleCardClick(card.link)}
                                        className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 group/btn"
                                    >
                                        <span className="text-sm">{card.buttonText}</span>
                                        <FaArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}

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
            <SubmitOpportunityCard />

        </div>
    );
};

export default EngagementCards;