import React, { useState } from 'react'

export default function Investorsponsors() {
  const [selectedPartner, setSelectedPartner] = useState(null)

  const partners = [
    {
      name: "Company PLC",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop",
      category: "Platinum Partner",
      bio: "Safaricom is Kenya's leading telecommunications and technology company, connecting millions of people and businesses across the nation.",
      yearPartnered: "2019",
      industry: "Telecommunications & Technology",
      contribution: "Technology Infrastructure & Mobile Solutions",
      impact: "Enabled digital transformation for over 500 businesses",
      website: "www.safaricom.co.ke",
      email: "partnerships@safaricom.co.ke",
      phone: "+254 722 000 000",
      achievements: [
        "40M+ subscribers nationwide",
        "Leading M-PESA mobile money platform",
        "99.9% network coverage in urban areas"
      ]
    },
    {
      name: "Equity Bank",
      logo: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&h=200&fit=crop",
      category: "Gold Partner",
      bio: "Equity Bank is a leading financial services provider in East Africa, championing financial inclusion and SME empowerment.",
      yearPartnered: "2020",
      industry: "Financial Services",
      contribution: "Financial Solutions & Investment Support",
      impact: "Financed 300+ startups and growing businesses",
      website: "www.equitybank.co.ke",
      email: "corporate@equitybank.co.ke",
      phone: "+254 763 063 000",
      achievements: [
        "14M+ customers across Africa",
        "KES 850B+ in total assets",
        "Leading SME banking partner"
      ]
    },
    {
      name: "KCB Group",
      logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=200&fit=crop",
      category: "Gold Partner",
      bio: "KCB Group is East Africa's largest commercial bank by assets, providing comprehensive banking and financial services.",
      yearPartnered: "2020",
      industry: "Banking & Finance",
      contribution: "Corporate Banking & Trade Finance",
      impact: "Supported KES 50B+ in business loans",
      website: "www.kcbgroup.com",
      email: "info@kcb.co.ke",
      phone: "+254 711 087 000",
      achievements: [
        "Presence in 7 African countries",
        "KES 1.1T+ in assets",
        "Winner of Best Bank in East Africa 2024"
      ]
    },
    {
      name: "Airtel Kenya",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop",
      category: "Silver Partner",
      bio: "Airtel Kenya is a leading mobile network operator committed to delivering innovative and affordable telecommunications solutions.",
      yearPartnered: "2021",
      industry: "Telecommunications",
      contribution: "Mobile Connectivity & Data Solutions",
      impact: "Connected 200+ enterprises with 4G solutions",
      website: "www.airtel.co.ke",
      email: "business@airtel.co.ke",
      phone: "+254 734 000 000",
      achievements: [
        "15M+ subscribers",
        "Fastest growing 4G network",
        "Airtel Money - 8M+ active users"
      ]
    },
    {
      name: "Nairobi Securities Exchange",
      logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=200&fit=crop",
      category: "Silver Partner",
      bio: "The NSE is Kenya's premier stock exchange, facilitating capital formation and providing a platform for companies to raise funds.",
      yearPartnered: "2021",
      industry: "Capital Markets",
      contribution: "Investment Advisory & Capital Access",
      impact: "Facilitated KES 30B+ in capital raising",
      website: "www.nse.co.ke",
      email: "info@nse.co.ke",
      phone: "+254 20 283 0000",
      achievements: [
        "60+ listed companies",
        "KES 2.3T+ market capitalization",
        "Gateway to African capital markets"
      ]
    },
    {
      name: "Standard Chartered Bank",
      logo: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=400&h=200&fit=crop",
      category: "Bronze Partner",
      bio: "Standard Chartered brings global expertise and local knowledge, supporting businesses with international banking solutions.",
      yearPartnered: "2022",
      industry: "International Banking",
      contribution: "Global Trade & Foreign Exchange",
      impact: "Enabled USD 100M+ in cross-border transactions",
      website: "www.sc.com/ke",
      email: "kenya.info@sc.com",
      phone: "+254 20 329 3000",
      achievements: [
        "Presence in 59+ countries",
        "Leading trade finance provider",
        "Award-winning digital banking platform"
      ]
    }
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 mt-36 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 mt-4 py-4">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-semibold mb-4">
            OUR NETWORK
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Partners & Sponsors
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Meet the industry leaders and innovators powering our mission to transform business across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer p-3"
              onClick={() => setSelectedPartner(partner)}
            >
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {partner.category}
                    </span>
                    <span className="bg-orange-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Since {partner.yearPartnered}
                    </span>
                  </div>
                </div>
              </div>

              <div className=" mt-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <div className="flex gap-2 mb-3">
                
                  <p className="text-xs text-gray-500">{partner.industry}</p>
                </div>
                
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  {partner.bio}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <span className="text-orange-600 text-sm mt-1.5"></span>
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">Contribution:</span> {partner.contribution}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 text-sm mt-0.5"></span>
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">Impact:</span> {partner.impact}
                    </p>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full bg-gradient-to-r from-orange-600 to-orange-900 text-white py-2 rounded-lg text-xs font-semibold hover:from-orange-500 hover:to-orange-900 transition-all duration-300 shadow-md hover:shadow-lg">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Bio */}
      {selectedPartner && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPartner(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-56 bg-gradient-to-br from-orange-600 to-orange-900 overflow-hidden">
              <img
                src={selectedPartner.logo}
                alt={selectedPartner.name}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedPartner.name}
                </h2>
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {selectedPartner.category}
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {selectedPartner.industry}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white w-8 h-8 rounded-full hover:bg-white/30 transition-all"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">About</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedPartner.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-orange-600"></span>
                    Partnership Details
                  </h3>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">Year Partnered:</span> {selectedPartner.yearPartnered}
                    </p>
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">Contribution:</span> {selectedPartner.contribution}
                    </p>
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">Impact:</span> {selectedPartner.impact}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-orange-600"></span>
                    Key Achievements
                  </h3>
                  <ul className="space-y-1">
                    {selectedPartner.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2">
                  <p className="text-xs text-gray-600 flex items-center gap-2">
                    <span className="text-gray-400"></span>
                    {selectedPartner.email}
                  </p>
                  <p className="text-xs text-gray-600 flex items-center gap-2">
                    <span className="text-gray-400"></span>
                    {selectedPartner.phone}
                  </p>
                  <p className="text-xs text-gray-600 flex items-center gap-2">
                    <span className="text-gray-400"></span>
                    {selectedPartner.website}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}