import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InquiryToDealProcess = ({steps,title}) => {
  const [activeStep, setActiveStep] = useState(null);

  

  const colorClasses = {
    orange: "border-[#ee5d32] bg-orange-50 text-orange-600",
    amber: "border-[#f9cb0b] bg-amber-50 text-amber-600",
    green: "border-[#00d666] bg-green-50 text-green-600",
    teal: "border-teal-500 bg-teal-50 text-teal-600",
    blue: "border-[#30d1d1] bg-blue-50 text-blue-600",
    indigo: "border-[#ffe5d3] bg-indigo-50 text-indigo-600",
    purple: "border-purple-500 bg-purple-50 text-purple-600"
  };

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <div className=" py-6  border-b border-t">
      <div className=" mx-1">
        <div className="text-start mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#ee5d32] mb-3">
          {title}
          </h1>
          <p className="text-slate-600 text-sm">
            Trade and investment often fail not at opportunity—but at execution. Real Sources
            Africa applies a structured, stage-based pipeline to ensure clarity, accountability, and
            momentum from first contact to deal closure.
          </p>
        </div>

        <div className=' border-1 border-gray-100 py-8'>
          <div className="space-y-3 mb-8">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const colors = colorClasses[step.color];

              return (
                <div
                  key={index}
                  className={`bg-white border-l-4 ${colors.split(' ')[0]} shadow-md transition-all duration-300 ${isActive ? 'shadow-lg' : ''} `}
                >
                  <button
                    onClick={() => toggleStep(index)}
                    className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${colors.split(' ')[1]} ${colors.split(' ')[2]}`}>
                        {step.number}
                      </span>
                      <h3 className="text-sm font-semibold text-slate-800">
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-3 right-10">
                      {isActive ? (
                        <FaChevronUp className="w-4 h-4 text-slate-500" />
                      ) : (
                        <FaChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                  </button>

                  {isActive && (
                    <div className="px-4 pb-4 pt-2">
                      <p className="text-slate-600 text-xs leading-relaxed pl-9">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className=" ">

            <Link to={"/HowItWorks"} className="bg-orange-600 rounded-full hover:bg-orange-700 text-white font-semibold py-2 px-6 text-sm transition-all duration-200 inline-flex items-center gap-2 group shadow-sm">
              See How It Works
              <svg
                className="w-3 h-3 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InquiryToDealProcess;