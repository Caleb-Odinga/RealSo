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
          <span className="inline-block bg-yellow-100/60 px-4 py-2 rounded-full font-bold text-xl sm:text-base mb-4">
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
                <h3 className="font-bold text-2xl text-gray-900 mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-2xl mb-3">
                  {partner.description}
                </p>
                <span className="inline-block bg-[#ee5d32]/10 text-[#ee5d32] text-xs font-semibold px-3 py-1 rounded-full">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
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

                <h4 className="font-bold text-gray-900 mb-3 text-2xl">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.partners.map((partner, pIndex) => (
                    <li key={pIndex} className="text-2xl text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;