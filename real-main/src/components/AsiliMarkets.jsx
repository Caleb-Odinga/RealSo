import {
  FaStore,
  FaWarehouse,
  FaGlobe,
  FaShoppingCart,
  FaTruck,
  FaHandshake,
  FaPaperPlane,
} from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

export default function AsiliMarketsPortal() {
  const { bg, color } = useOutletContext();
  return (
    <div className="w-full min-h-screen bg-slate-50">

      <div className={`${bg} w-full  text-${color} px-6 py-3 flex justify-between items-center`}>
        <p className="text-lg tracking-wide font-bold">
          Where African products meet real buyers.
        </p>
        <a
          href="/market"
          className={`${bg}  px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2`}
        >
          <FaPaperPlane />
          Explore the Market
        </a>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className={`text-5xl font-bold text-${color}`}>
            Asili Markets
          </h1>
          <p className={`mt-3 text-lg text-${color} font-semibold`}>
            Africa’s Global Village Marketplace.
          </p>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Asili Markets is a Pan-African retail and wholesale platform that celebrates
            African production and connects it to domestic and export markets.
            It is both physical and digital — combining country pavilions, SME shelf spaces,
            and an e-commerce platform into one unified marketplace.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/market"
              className={`${bg}  text-${color} px-6 py-3 rounded-lg font-medium`}
            >
              Explore the Market
            </a>
            <button className="border border-amber-700 text-amber-700 px-6 py-3 rounded-lg font-medium hover:bg-amber-50">
              Become a Seller
            </button>
          </div>
        </div>

        {/* Core Value */}
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Core Value
          </h3>
          <p className="text-slate-700 text-lg italic">
            From the farm, to the factory, to the world — under one roof.
          </p>

          <div className="mt-12 flex items-center gap-4 text-amber-700">
            <FaGlobe size={32} />
            <p className="text-sm">
              A unified marketplace for Africa’s producers and creative economy
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

            <Feature
              icon={<FaStore size={28} />}
              title="Country Pavilions"
              text="Curated retail spaces showcasing products from every African country."
            />

            <Feature
              icon={<FaWarehouse size={28} />}
              title="SME Shelf Program"
              text="Affordable shelf space for SMEs with warehousing and logistics support."
            />

            <Feature
              icon={<FaTruck size={28} />}
              title="Consignment Exports"
              text="Producers export via RSA-managed consignment partnerships."
            />

            <Feature
              icon={<FaShoppingCart size={28} />}
              title="Digital Marketplace"
              text="E-commerce platform integrated with regional distribution centers."
            />

            <Feature
              icon={<FaHandshake size={28} />}
              title="TradeConnect Integration"
              text="Linked to BiasharaLink and DealHouse for sourcing, verification, and payments."
            />

          </div>

          <div className="p-9" />
          <section className={`${bg} text-white py-20`}>
            <div className="max-w-5xl mx-auto px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Why It Matters
              </h2>
              <p className="text-white text-sm leading-relaxed">
                Asili Markets is more than retail — it’s economic storytelling. It gives Africa’s
                producers a global stage, empowers counties to host their industries digitally, and
                creates shared prosperity through intra-African market access. </p>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${bg}  text-slate-300 pt-16 pb-8`}>
        <div className=" mx-auto px-8 grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-xl font-bold text-white">Asili Markets</h3>
            <p className="mt-4 text-sm">
              Africa’s Global Village Marketplace for retail, wholesale, and
              consignment exports.
            </p>
            <p className="mt-4 text-xs text-white">
              Made in Africa. Sold to the world.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-3 text-sm">
              <li>Country Pavilions</li>
              <li>SME Shelf Space</li>
              <li>Digital Storefronts</li>
              <li>Wholesale & Retail</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">TradeConnect</h4>
            <ul className="space-y-3 text-sm">
              <li>BiasharaLink</li>
              <li>DealHouse</li>
              <li>PolicyTracker</li>
              <li>RSA Logistics</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Trust & Fulfillment</h4>
            <ul className="space-y-3 text-sm">
              <li>Warehousing</li>
              <li>Cross-Border Logistics</li>
              <li>Payments & Escrow</li>
              <li>Product Verification</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Asili Markets. All rights reserved. Powering Africa’s global marketplace.
        </div>
      </footer>

    </div>
  );
}

/* Feature Card */
function Feature({ icon, title, text }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
      <div className="text-amber-700 mb-4">{icon}</div>
      <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
