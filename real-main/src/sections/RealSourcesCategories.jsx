import React from 'react';
import { FaShoppingBasket, FaWrench, FaChartLine, FaDollarSign, FaShieldAlt } from 'react-icons/fa';
import { FaLaptop, FaUpwork } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const RealSourcesCategories = () => {
  const categories = [
    {
      icon: FaShoppingBasket,
      title: "Commodities Trade",
      description: "Buy, sell, or source agricultural, industrial, and processed goods.",
      color: "orange",
      borderColor: "border-t-orange-500",
      iconBg: "bg-orange-100",
      id: 'commodities',
      iconColor: "text-orange-600"
    },
    {
      icon: FaWrench,
      title: "Services & Contracting",
      description: "Access service providers, contractors, EPCs, consultants, and logistics partners.",
      color: "blue",
      borderColor: "border-t-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      id: 'services',
    },
    {
      icon: FaChartLine,
      title: "Investment & Projects",
      description: "Structure greenfield and brownfield investments, PPPs, and project pipelines.",
      color: "teal",
      borderColor: "border-t-teal-600",
      iconBg: "bg-teal-100",
      id: 'investment',
      iconColor: "text-teal-600"
    },
    {
      icon: FaDollarSign,
      title: "Financing & Trade Finance",
      description: "Originate financing requests, trade finance instruments, and capital partnerships.",
      color: "green",
      borderColor: "border-t-green-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      id: 'financing'
    },
    {
      icon: FaLaptop,
      title: "Labour & Skill Exchange",
      description: "Cross-border talent sourcing, technical skills, and workforce mobility.",
      color: "orange-300",
      borderColor: "border-t-orange-600",
      iconBg: "bg-orange-200",
      iconColor: "text-orange-600"
    },
    {
      icon: FaShieldAlt,
      title: "Government & Regulatory Facilitation",
      id: 'government and regulation',
      description: "Licensing, certification, permits, policy guidance, institutional coordination.",
      color: "blue",
      borderColor: "border-t-blue-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500"
    }
  ];

  return (
    <div className=" py-6 px-2 sm:px-2 lg:px-3 border-b">
      <div className=" mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-start text-[#ee5d32] mb-6">
          What can you do through Real Sources Africa?
        </h1>

        <p className="text-start text-slate-600 text-base mb-10">
          Our ecosystem supports <span className="font-semibold">six structured categories</span> of trade and economic engagement:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 ">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className={`bg-white shadow-lg overflow-hidden border-t-2 ${category.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="p-4">
                  <div className="flex justify-center mb-4">
                    <div className={`${category.iconBg} p-3 border ${category.borderColor.replace('border-t-', 'border-')}`}>
                      <Icon className={`w-8 h-8 ${category.iconColor}`} />
                    </div>
                  </div>

                  <h2 className="text-base font-semibold text-slate-800 text-center mb-3 flex items-baseline">
                    {category.title}
                  </h2>

                  <p className="text-slate-800 text-start text-xs leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <Link
                    to={"Inquiry"}
                    state={{ id: category.id }}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-7 transition-all duration-200 flex items-start gap-2 group shadow-md text-sm"
                  >
                    View More
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>



                </div>
              </div>
            );
          })}
        </div>

        <p className="text-slate-500 text-start mt-6 text-xs">
          You may submit inquiries as an individual, company, institution, or consortium.
        </p>

      </div>
    </div>
  );
};

export default RealSourcesCategories;