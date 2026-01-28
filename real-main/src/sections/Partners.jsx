import { AiOutlineGlobal, AiOutlineBank, AiOutlineTrophy } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Partners = () => {



  

  const featuredPartners = [
    {
      name: 'AfCFTA',
      logo: '🌍',
      description: 'Continental Free Trade Area',
      category: 'Strategic Partner',
    },
    {
      name: 'Afreximbank',
      logo: '🏦',
      description: 'Africa Trade Gateway',
      category: 'Financial Partner',
    },
    {
      name: 'Kenya Government',
      logo: '🇰🇪',
      description: 'AfCFTA Trading Company',
      category: 'Government Partner',
    },
  ];

  const partnerCategories = [
    {
      title: 'Government & Diplomatic Partners',
      icon: <AiOutlineGlobal size={24} />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      partners: [
        'Ministry of Foreign Affairs',
        'Kenya Trade Network Agency',
        'AfCFTA Secretariat',
      ],
    },
    {
      title: 'Pan-African & Global Institutions',
      icon: <AiOutlineBank size={24} />,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      partners: [
        'AfCFTA Secretariat',
        'Afreximbank',
        'African Development Bank',
      ],
    },
    {
      title: 'Private Sector & Ecosystem',
      icon: <AiOutlineTrophy size={24} />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      partners: [
        'Banks & Trade Finance Providers',
        'Logistics & Shipping Partners',
        'Technology & Innovation Hubs',
      ],
    },
  ];

  return (
    <section id="partner" className=" border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100/60 px-4 py-2 rounded-full font-bold text-sm sm:text-base mb-4">
            Partners & Governance
          </span>
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-2 text-gray-900">
            A Coalition for African Trade
          </h1>
          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-3xl mx-auto">
            RSA operates at the intersection of government, private sector, and international institutions to build trade infrastructure that works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPartners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#ee5d32] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ee5d32]/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>

              <div className="relative">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {partner.description}
                </p>
                <span className="inline-block bg-[#ee5d32]/10 text-[#ee5d32] text-xs font-semibold px-3 py-1 rounded-full">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Section */}
        <div className="mb-12">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#ee5d32] mb-2">
              Partners & Sponsorships
            </h2>
            <p className="text-lg font-semibold text-gray-800">
              Partner with Africa's Digital Trade Bridge
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* LEFT: Description */}
            <div className="lg:w-1/2">
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                We invite <span className="font-semibold text-gray-900">governments, banks, and corporations</span> to
                collaborate in scaling Africa's Digital Trade Infrastructure.
                RSA delivers <span className="font-semibold text-gray-900">
                  sponsorship visibility, data integration, and strategic co-positioning
                </span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/Getstart"
                  className="group inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-black
               bg-gray-100 backdrop-blur border border-white/20
               hover:bg-[#ee5d32] hover:border-[#ee5d32]
               transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  Partner With Us
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  to="/ExploreEcosystem"
                  className="group inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-black
               bg-gray-100 backdrop-blur border border-white/20
               hover:bg-[#ee5d32] hover:border-[#ee5d32]
               transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  Learn More
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                
              </div>

            </div>

            <div className="lg:w-1/2">
              <p className="text-sm font-semibold text-[#ee5d32] mb-3">
                Sponsorship Models
              </p>

              <div className="border rounded-xl shadow-lg p-5 bg-gradient-to-br from-gray-50 to-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Platinum & Gold Sponsors
                    </p>
                    <p className="text-xs text-gray-600">
                      Banking & Development Partners
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      County & Regional Partners
                    </p>
                    <p className="text-xs text-gray-600">
                      Trade Aggregation Partners
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Private-Sector Co-Hosts
                    </p>
                    <p className="text-xs text-gray-600">
                      AfCFTA Trade Events
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Technology Partners
                    </p>
                    <p className="text-xs text-gray-600">
                      Digital Infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Categories Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Our Partner Ecosystem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerCategories.map((category, index) => (
              <div
                key={index}
                className={`${category.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
              >

                <h4 className="font-bold text-gray-900 mb-3 text-sm">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.partners.map((partner, pIndex) => (
                    <li key={pIndex} className="text-xs text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Partners Marquee */}
        


      </div>

      
    </section>
  );
};

export default Partners;