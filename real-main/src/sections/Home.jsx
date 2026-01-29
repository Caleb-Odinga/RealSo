import Hero from './Hero'
import Partners from './Partners'
import EngagementCards from './Audience'
import About from './About';
import SafaricomEvents from './SafaricomEvents';
import InstitutionalBacking from './InstitutionalBacking';
import CombinedTradeComponent from './TradePillars';
import EngagementCardss from './EngagementCardss ';
import ContactSections from './ContactSections';
import DesignPrinciples from './DesignPrinciples';
import FlagshipEngines from './FlagshipEngines';
import HowItWorkss from './HowItWorkss';
import { Link } from 'react-router-dom';
import WestlandExchangeMap from '../../WestlandExchangeMap';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ServicesPartnersSection from './ServicesPartnersSection';
import StoriesCarousel from './StoriesCarousel';

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredService, setHoveredService] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        {
            title: "Import Export Procedures",
            description: "A step by step guide on Import & Export procedures with comprehensive documentation and compliance support.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Trade Finance Solutions",
            description: "Access to comprehensive trade finance instruments and working capital solutions for African businesses.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "from-orange-600 to-orange-700"
        },
        {
            title: "Market Intelligence",
            description: "Real-time market insights, trade analytics, and strategic guidance for African market entry and expansion.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            color: "from-orange-700 to-orange-800"
        }
    ];

    const partners = [
        { name: "Afreximbank", subtitle: "Africa Trade Gateway", bg: "bg-[#009639]", url: "https://www.afreximbank.com" },
        { name: "KCB Bank", subtitle: "Trade Finance Provider", bg: "bg-[#7CC242]", url: "https://www.kcbbankgroup.com" },
        { name: "KNCCI", subtitle: "Business Ecosystem", bg: "bg-[#005BC8]", url: "https://www.kenyachamber.or.ke" },
        { name: "Equity Group", subtitle: "Financial Solutions", bg: "bg-[#AD500F]", url: "https://www.equitybank.co.ke" },
        { name: "BADEA", subtitle: "Development Partner", bg: "bg-[#006C3E]", url: "https://www.badea.org" },
        { name: "TDB", subtitle: "Trade Development", bg: "bg-[#1E3A8A]", url: "https://www.tdbgroup.org" },
    ];

    return (
        <div className="flex flex-col">
            <Hero name={[
                "Africa's Trade Cannot Stay", "on Paper.",
                "We Build the Rails That", " Move It."
            ]}
                sub="Real Sources Africa (RSA) is a Pan-African trade–infrastructure institution that designs and operates the systems, platforms and physical hubs that move goods, services, labour, investments and ideas across Africa — under AfCFTA, with government alignment, and at continental scale." open={true} />
            <About />
           
            <DesignPrinciples />
            <CombinedTradeComponent />
            
            <InstitutionalBacking />
            <EngagementCardss />
            <FlagshipEngines />
            <HowItWorkss />
            <Partners />
            <EngagementCards />
            <ContactSections />

            
        </div>
    )
}

export default Home

