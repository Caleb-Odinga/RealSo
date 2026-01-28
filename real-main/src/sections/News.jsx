import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>
    {children}
  </div>
)

const Modal = ({ item, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-80 overflow-hidden">
          {item.image ? (
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {item.date && (
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {item.date}
              </div>
            )}
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {item.title}
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="space-y-4">
              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Key Highlights</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Comprehensive coverage of African trade initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expert insights and analysis from industry leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Actionable strategies for digital transformation</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Read Full Article
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  Share
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const CarouselCard = ({ item, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="flex-shrink-0 w-64 md:w-72 cursor-pointer"
      onClick={onViewDetails}
    >
      <motion.div
        style={{ rotateY }}
        className="h-full"
      >
        <Card className="h-full overflow-hidden">
          <motion.div 
            className="relative h-40 mb-3 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {item.image ? (
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            ) : (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  background: isHovered 
                    ? 'linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(147, 51, 234) 100%)'
                    : 'linear-gradient(135deg, rgb(243, 244, 246) 0%, rgb(229, 231, 235) 100%)'
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.svg 
                  className="w-16 h-16 text-white"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ 
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </motion.svg>
              </motion.div>
            )}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-3 right-3"
            >
              <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1 shadow-lg">
                View Details
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="p-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
              {item.title}
            </h4>
            <p className="text-xs text-gray-600 line-clamp-3 mb-2">
              {item.description}
            </p>
            {item.date && (
              <motion.p 
                className="text-xs text-gray-500 flex items-center gap-1"
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {item.date}
              </motion.p>
            )}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

const ScrollButton = ({ direction, onClick, disabled }) => (
  <motion.button
    onClick={onClick}
    disabled={disabled}
    whileHover={{ scale: disabled ? 1 : 1.1 }}
    whileTap={{ scale: disabled ? 1 : 0.95 }}
    className={`p-2 rounded-full transition-all duration-200 ${
      disabled
        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
    }`}
    aria-label={`Scroll ${direction}`}
  >
    <motion.svg 
      className="w-5 h-5" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      animate={{ x: disabled ? 0 : (direction === 'left' ? -2 : 2) }}
      transition={{ repeat: disabled ? 0 : Infinity, duration: 1, ease: "easeInOut" }}
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} 
      />
    </motion.svg>
  </motion.button>
)

const NewsCarousel = ({ title, items = [], visibleCount = 4 }) => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollability()
    const handleResize = () => checkScrollability()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [items])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      const newPosition =
        direction === 'left'
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      })

      setTimeout(checkScrollability, 300)
    }
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <>
      <div className="mb-8">
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
          <div className="flex gap-2">
            <ScrollButton direction="left" onClick={() => scroll('left')} disabled={!canScrollLeft} />
            <ScrollButton direction="right" onClick={() => scroll('right')} disabled={!canScrollRight} />
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          onScroll={checkScrollability}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item, index) => (
            <CarouselCard 
              key={index} 
              item={item} 
              index={index}
              onViewDetails={() => setSelectedItem(item)}
            />
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

// Demo Component
const Section = ({ children, id, className }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 ${className}`}>
    {children}
  </section>
)

const Newss = () => {
  // Sample news items for different categories with images
  const trendingNews = [
    {
      title: 'Kenya ATG Workshop Success',
      description: 'Over 470 delegates gathered in Nairobi to discuss digital trade infrastructure and AfCFTA implementation strategies.',
      date: 'March 2024',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
    },
    {
      title: 'Rwanda ATG Launch',
      description: '150+ exporters participated in the official launch of the Africa Trade Gateway in Kigali, marking a new era for regional trade.',
      date: 'February 2024',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80'
    },
    {
      title: 'IATF 2025 Algeria Preview',
      description: 'Real Sources Africa prepares to showcase its digital trade platforms at the upcoming Intra-African Trade Fair.',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80'
    },
    {
      title: 'DealHouse Reaches 1800+ Deals',
      description: 'Milestone achievement as verified trade deals on DealHouse Africa platform exceed 1800 transactions.',
      date: 'April 2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      title: 'County Aggregation Centers',
      description: 'New digital trade hubs established across East Africa to connect local producers with continental markets.',
      date: 'March 2024',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
  ]

  const topNews = [
    {
      title: 'Digitizing Economic Diplomacy',
      description: 'How BiasharaLink Portal is transforming trade relations between African nations through digital embassies.',
      date: 'April 2024',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      title: 'How Counties Power the AfCFTA',
      description: 'Exploring the role of county-level aggregation in driving intra-African trade growth.',
      date: 'March 2024',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80'
    },
    {
      title: 'Trade Finance Trends in Africa',
      description: 'Analysis of emerging trends in digital trade finance and their impact on MSMEs across the continent.',
      date: 'April 2024',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'
    },
    {
      title: 'AfCFTA Opportunities for Exporters',
      description: 'A comprehensive guide for African exporters looking to leverage AfCFTA benefits through digital platforms.',
      date: 'March 2024',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80'
    },
    {
      title: 'PolicyTracker Launches Live Dashboards',
      description: 'Real-time tracking of AfCFTA policy implementation now available for governments and stakeholders.',
      date: 'April 2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
  ]

  const events = [
    {
      title: 'TradeConnect Summit 2024',
      description: 'Annual gathering of trade facilitators, policymakers, and business leaders to discuss Africa\'s digital trade future.',
      date: 'June 2024',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80'
    },
    {
      title: 'MSME Export Readiness Workshop',
      description: 'Training sessions for small and medium enterprises on leveraging digital platforms for cross-border trade.',
      date: 'May 2024',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      title: 'AfCFTA Policy Roundtable',
      description: 'High-level discussions on policy harmonization and digital trade facilitation across African regions.',
      date: 'May 2024',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80'
    },
    {
      title: 'Digital Trade Innovation Forum',
      description: 'Showcasing latest innovations in trade technology and their applications in the African context.',
      date: 'July 2024',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
    },
  ]

  return (
    <div className="p-8 mt-10">
      <Section id="news" className='mt-20'>
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
            News & Events
          </h2>
          <h3 className="text-lg font-bold text-gray-700 mb-3">
            Stories of Africa's Trade Transformation
          </h3>
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Stay updated on intra-African trade events, AfCFTA policy milestones, and digital 
            trade innovations. Explore RSA's involvement in the Kenya ATG Workshop, 
            Rwanda ATG Launch, and the upcoming IATF 2025 Algeria showcase.
          </p>
        </motion.div>

        <NewsCarousel title="Trending Now" items={trendingNews} visibleCount={4} />
        <NewsCarousel title="Top News" items={topNews} visibleCount={4} />
        <NewsCarousel title="Upcoming Events" items={events} visibleCount={4} />
      </Section>
    </div>
  )
}

export default Newss