import React from 'react';
import { FaBuilding, FaGlobeAmericas, FaFileAlt, FaStore, FaWarehouse, FaUsers, FaDollarSign, FaRoute } from 'react-icons/fa';

const SolutionCard = ({ icon: Icon, title, description, gradient,link='/' }) => (
  <div className={`relative overflow-hidden rounded-xl ${gradient} p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl`}>
    <div className="relative z-10">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
          <Icon className="h-12 w-12 text-white" />
        </div>
      </div>
      
      <h3 className="mb-3 text-center text-xl font-bold text-white">
        {title}
      </h3>
      
      <p className="mb-4 text-center text-sm text-white/90 leading-relaxed">
        {description}
      </p>
      
      <div className="flex justify-center">
        <a href={`/${link}`} className="rounded-full border-2 border-white px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-white hover:text-orange-600">
          Learn More ›
        </a>
      </div>
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
  </div>
);

const SolutionSections = () => {
  const solutions = [
    {
      icon: FaBuilding,
      title: 'DealHouse',
      description: 'A structured deal execution engine transforming inquiries into managed pipelines.',
      gradient: 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600',
      link:"DealHouse"
    },
    {
      icon: FaGlobeAmericas,
      title: 'BiasharaLink',
      description: 'Inquiry capture and routing for embassies, ministries, and institutions.',
      gradient: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-600',
      link:"BiasharaLink_Portal"
    },
    {
      icon: FaFileAlt,
      title: 'PolicyTracker',
      description: 'Policy intelligence translated into actionable guidance.',
      gradient: 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600',
       link:"Policy_Tracker"
    },
    {
      icon: FaStore,
      title: 'Asili Markets',
      description: 'Market access, aggregation, and distribution infrastructure.',
      gradient: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-600',
      link:"Asili_Markets"
    },
    {
      icon: FaWarehouse,
      title: 'Trade Pods',
      description: 'Physical engagement points for deal origination.',
      gradient: 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600',
      link:"Trade_Pods"
    },
    {
      icon: FaUsers,
      title: 'Deal Stewards',
      description: 'Human capacity that ensures deals move forward.',
      gradient: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-600',
      link:"Trade_Pods"
    },
    {
      icon: FaDollarSign,
      title: 'The Bridge',
      description: 'Capital, investment, and trade finance facilitation.',
      gradient: 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600',
      link:"Trade_Pods"
    },
    {
      icon: FaRoute,
      title: 'Programs & Missions',
      description: 'Curated trade corridors and sector activations.',
      gradient: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-600',
      link:"Trade_Pods"
    }
  ];

  return (
    <div className=" py-6 px-4">
      <div className="mx-auto ">
        <div className="mb-12 text-start">
          <h1 className="mb-2 text-4xl font-bold text-orange-800">
            Solution
          </h1>
          <p className="text-xl text-orange-700">
            Transforming Trade & Investment
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              gradient={solution.gradient}
              link={solution.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSections;