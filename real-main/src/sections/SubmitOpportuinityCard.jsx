import React from "react"
import { FaPaperPlane, FaCheck, FaArrowRight } from "react-icons/fa"

const SubmitOpportunityCard = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-[#F6F6EF] rounded-2xl px-6 md:px-10 py-10 md:py-12 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Left Content */}
            <div className="max-w-xl space-y-5">
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-transparent">
                <FaPaperPlane className="text-green-700 text-xl" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Submit an Opportunity
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Have a trade inquiry, investment lead, or service request?
                Submit it through BiasharaLink and let the RSA ecosystem connect
                you to the right parties, resources, and deal structures.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-700 mt-1" />
                  <span>Inquiries processed within 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-700 mt-1" />
                  <span>Matched to verified counterparties</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheck className="text-green-700 mt-1" />
                  <span>Full deal support available</span>
                </li>
              </ul>
            </div>

            {/* Right CTA */}
            <div className="flex-shrink-0">
              <button
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-green-700 text-white font-semibold text-sm md:text-base hover:bg-green-800 transition shadow-md"
              >
                Submit an Inquiry
                <FaArrowRight />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default SubmitOpportunityCard
