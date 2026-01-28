import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


  

import { FaBriefcase, FaChevronRight, FaChevronDown, FaChevronUp, FaTimes, FaArrowLeft } from 'react-icons/fa';

const InquiryCardExpanded = () => {
  const { state } = useLocation();
  const locationState = state;
  
  const [expandedCard, setExpandedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeInquiry, setActiveInquiry] = useState(null);
  const [formData, setFormData] = useState({
    financeType: '',
    details: ''
  });

  const inquiryTypes = [
    {
      id: 'financing',
      title: 'Financing',
      icon: FaBriefcase,
      description: 'Trade finance, project finance, working capital, PO-backed facilities.',
      color: 'from-orange-400 to-red-500',
      detailedInfo: {
        overview: 'We provide comprehensive financing solutions tailored to your business needs, helping you unlock capital and accelerate growth.',
        services: [
          { name: 'Trade Finance', desc: 'Letters of credit, import/export financing, and documentary collections' },
          { name: 'Project Finance', desc: 'Long-term infrastructure and capital project funding solutions' },
          { name: 'Working Capital', desc: 'Flexible financing to manage day-to-day operational expenses' },
          { name: 'PO-Backed Facilities', desc: 'Purchase order financing to fulfill large orders without upfront capital' }
        ],
        benefits: ['Competitive rates', 'Quick approval process', 'Flexible repayment terms', 'Expert financial guidance']
      }
    },
    {
      id: 'services',
      title: 'Services',
      icon: FaBriefcase,
      description: 'Business strategy, market entry, operational efficiency consulting.',
      color: 'from-blue-400 to-blue-600',
      detailedInfo: {
        overview: 'Our consulting services help businesses optimize operations, enter new markets, and develop winning strategies.',
        services: [
          { name: 'Business Strategy', desc: 'Strategic planning and market positioning to achieve your goals' },
          { name: 'Market Entry', desc: 'Comprehensive analysis and execution plans for new market expansion' },
          { name: 'Operational Efficiency', desc: 'Process optimization and cost reduction strategies' },
          { name: 'Digital Transformation', desc: 'Technology adoption and digital strategy implementation' }
        ],
        benefits: ['Industry expertise', 'Data-driven insights', 'Proven methodologies', 'Ongoing support']
      }
    },
    {
      id: 'commodities',
      title: 'Commodities',
      icon: FaBriefcase,
      description: 'Strategic partnerships, joint ventures, collaboration opportunities.',
      color: 'from-green-400 to-green-600',
      detailedInfo: {
        overview: 'Connect with strategic partners and explore collaboration opportunities in the commodities sector.',
        services: [
          { name: 'Strategic Partnerships', desc: 'Identify and establish mutually beneficial business relationships' },
          { name: 'Joint Ventures', desc: 'Structure and manage collaborative business ventures' },
          { name: 'Commodity Trading', desc: 'Access to global commodities markets and trading platforms' },
          { name: 'Supply Chain Solutions', desc: 'End-to-end supply chain management and optimization' }
        ],
        benefits: ['Global network', 'Risk mitigation', 'Market access', 'Shared expertise']
      }
    },
    {
      id: 'investment',
      title: 'Investment',
      icon: FaBriefcase,
      description: 'Equity investment, venture capital, angel funding opportunities.',
      color: 'from-purple-400 to-purple-600',
      detailedInfo: {
        overview: 'Secure the capital you need to scale your business through our investment network and funding solutions.',
        services: [
          { name: 'Equity Investment', desc: 'Direct equity financing for growth-stage companies' },
          { name: 'Venture Capital', desc: 'Connect with top VC firms and institutional investors' },
          { name: 'Angel Funding', desc: 'Access to angel investor networks for early-stage ventures' },
          { name: 'Private Placement', desc: 'Structured investment deals for qualified investors' }
        ],
        benefits: ['Strategic investors', 'Mentorship access', 'Network expansion', 'Growth acceleration']
      }
    },
    {
      id: 'government',
      title: 'Government and Regulation',
      icon: FaBriefcase,
      description: 'Regulatory compliance, government relations, policy advisory.',
      color: 'from-indigo-400 to-indigo-600',
      detailedInfo: {
        overview: 'Navigate complex regulatory landscapes and build strong government relationships with our expert guidance.',
        services: [
          { name: 'Regulatory Compliance', desc: 'Ensure adherence to local and international regulations' },
          { name: 'Government Relations', desc: 'Build and maintain strategic government partnerships' },
          { name: 'Policy Advisory', desc: 'Expert guidance on policy impacts and opportunities' },
          { name: 'Licensing Support', desc: 'Assistance with permits, licenses, and regulatory approvals' }
        ],
        benefits: ['Compliance assurance', 'Risk reduction', 'Government access', 'Policy insights']
      }
    }
  ];

  const hasStateId = locationState?.id;

  // Handle state ID on component mount
  useEffect(() => {
    if (locationState?.id) {
      const inquiryExists = inquiryTypes.find(inq => inq.id === locationState.id);
      if (inquiryExists) {
        setExpandedCard(locationState.id);
      } else {
        setExpandedCard(null);
      }
    } else {
      setExpandedCard(null);
    }
  }, [locationState]);

  const handleSubmit = () => {
    if (!formData.financeType || !formData.details) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', { type: activeInquiry.title, ...formData });
    alert(`${activeInquiry.title} Inquiry Submitted!\n\nType: ${formData.financeType}\nDetails: ${formData.details}`);
    setFormData({ financeType: '', details: '' });
    setShowModal(false);
    setActiveInquiry(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const openModal = (inquiry) => {
    setActiveInquiry(inquiry);
    setShowModal(true);
    setFormData({ financeType: '', details: '' });
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveInquiry(null);
    setFormData({ financeType: '', details: '' });
  };

  

  return (
    <div id='explore' className=" min-h-screen py-8 px-4 md:px-10">
      <div className="mx-auto">
        

        <div className="grid gap-4">
          {inquiryTypes.map((inquiry) => {
            const Icon = inquiry.icon;
            const isExpanded = expandedCard === inquiry.id;
            const isFocused = hasStateId && inquiry.id === locationState.id;
            const isOther = hasStateId && inquiry.id !== locationState.id;

            return (
              <div
                key={inquiry.id}
                className={` shadow-lg overflow-hidden transition-all duration-300 border ${
                  isExpanded ? 'ring-2 ring-offset-2 ring-gray-200' : ''
                } ${isOther ? 'opacity-30 pointer-events-none' : 'hover:shadow-xl'} ${
                  isFocused ? 'ring-2 ring-offset-2 ring-blue-400' : ''
                }`}
              >
                <div
                  onClick={() => toggleCard(inquiry.id)}
                  className="relative p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className={`relative bg-gradient-to-br ${inquiry.color} rounded-full p-3 shadow-lg`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">{inquiry.title}</h2>
                        <p className="text-sm text-gray-600 mt-1">{inquiry.description}</p>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      {isExpanded ? (
                        <FaChevronUp className="h-5 w-5 text-gray-700" />
                      ) : (
                        <FaChevronDown className="h-5 w-5 text-gray-700" />
                      )}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6 bg-white p-6 border-t border-gray-200">
                    <div className="mt-6 space-y-6">
                      <div className=" ">
                        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{inquiry.detailedInfo.overview}</p>
                      </div>

                      <div className="">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                          Our Services
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {inquiry.detailedInfo.services.map((service, idx) => (
                            <div key={idx} className="p-4 border border-gray-200 hover:border-gray-300 transition-all">
                              <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                              <p className="text-sm text-gray-600">{service.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white  p-6 shadow-md border">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                          Key Benefits
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {inquiry.detailedInfo.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 border border-gray-200">
                              <div className={`w-2 h-2 bg-gradient-to-br ${inquiry.color} rounded-full`}></div>
                              <span className="text-sm font-medium text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => openModal(inquiry)}
                          className={`bg-gradient-to-r ${inquiry.color} hover:opacity-90 text-white font-serif text-base py-3 px-4 rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-100 flex items-center gap-2`}
                        >
                          Submit {inquiry.title} Inquiry
                          <FaChevronRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {showModal && activeInquiry && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`bg-gradient-to-r ${activeInquiry.color} p-6 relative`}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
              >
                <FaTimes className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                  {React.createElement(activeInquiry.icon, { className: "h-8 w-8 text-white" })}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{activeInquiry.title} Inquiry</h2>
                  <p className="text-white text-opacity-90 text-sm mt-1">{activeInquiry.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="space-y-5">
                <div>
                  <label htmlFor="financeType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="financeType"
                    name="financeType"
                    value={formData.financeType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    {activeInquiry.detailedInfo.services.map((service, idx) => (
                      <option key={idx} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    {formData.financeType && activeInquiry.detailedInfo.services.find(s => s.name === formData.financeType)?.desc}
                  </p>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Provide more details about your inquiry..."
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="px-6 py-2.5 text-gray-700 font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className={`bg-gradient-to-r ${activeInquiry.color} hover:opacity-90 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2`}
                >
                  Submit Inquiry
                  <FaChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InquiryCardExpanded;