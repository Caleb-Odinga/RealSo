import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>
    {children}
  </div>
)

const CarouselCard = ({ item, index }) => {
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
      className="flex-shrink-0 w-64 md:w-72"
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
          <CarouselCard key={index} item={item} index={index} />
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

// Demo Component
const App = () => {
  const newsItems = [
    {
      title: "Breaking: New Technology Revolutionizes Industry",
      description: "Experts say this innovation will change everything we know about modern technology and its applications.",
      date: "Jan 22, 2026"
    },
    {
      title: "Market Analysis: Q1 2026 Trends",
      description: "Comprehensive overview of market movements and predictions for the coming quarter.",
      date: "Jan 20, 2026"
    },
    {
      title: "Innovation Summit Announces Key Speakers",
      description: "Industry leaders gather to discuss the future of technology and sustainable development.",
      date: "Jan 18, 2026"
    },
    {
      title: "Research Breakthrough in AI Ethics",
      description: "New framework proposed for responsible AI development and deployment across industries.",
      date: "Jan 15, 2026"
    },
    {
      title: "Global Partnership Announced",
      description: "Major companies join forces to tackle climate change and promote sustainable practices.",
      date: "Jan 12, 2026"
    },
    {
      title: "Product Launch: Next-Gen Platform",
      description: "Revolutionary platform promises to streamline workflows and boost productivity.",
      date: "Jan 10, 2026"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Latest News & Updates
          </h1>
          <p className="text-gray-600">Stay informed with our curated content</p>
        </motion.div>

        <NewsCarousel title="Featured Stories" items={newsItems} />
        <NewsCarousel title="Technology News" items={newsItems.slice(0, 4)} />
      </div>
    </div>
  )
}

export default App