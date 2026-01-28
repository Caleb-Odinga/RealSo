import React, { useState, useEffect, useRef } from 'react'

const ImageCarousel = ({ images = [], visibleCount = 3, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const maxIndex = images.length

  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    // Set up auto-play if conditions are met
    if (!isPaused && autoPlayInterval > 0 && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % maxIndex)
      }, autoPlayInterval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isPaused, autoPlayInterval, maxIndex, images.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % maxIndex)
  }

  if (!images || images.length === 0) {
    return null
  }

  // Create array with items before and after for seamless loop
  const getVisibleItems = () => {
    const items = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + maxIndex) % maxIndex
      items.push({ image: images[index], position: i, key: `${currentIndex}-${i}-${index}` })
    }
    return items
  }

  const visibleItems = getVisibleItems()

  return (
    <div
      className="relative w-full flex items-center justify-center py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ 
        perspective: '1200px',
        minHeight: '400px',
      }}
    >
      <div className="relative w-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        {visibleItems.map(({ image, position, key }) => {
          const isCenter = position === 0
          const isLeft = position === -1
          const isRight = position === 1

          // Calculate positions for 3D effect
          const baseWidth = 30 // percentage
          const centerScale = 1.2
          const sideScale = 0.75
          const sideOffset = 35 // percentage offset for side images

          return (
            <div
              key={key}
              className="absolute transition-all duration-700 ease-in-out"
              style={{
                left: isCenter 
                  ? '50%' 
                  : isLeft 
                  ? `${50 - sideOffset}%` 
                  : `${50 + sideOffset}%`,
                transform: isCenter
                  ? 'translateX(-50%) translateZ(80px) scale(1.2)'
                  : isLeft
                  ? 'translateX(-50%) translateZ(-30px) scale(0.75) rotateY(15deg)'
                  : 'translateX(-50%) translateZ(-30px) scale(0.75) rotateY(-15deg)',
                opacity: isCenter ? 1 : 0.5,
                zIndex: isCenter ? 10 : isLeft ? 2 : 2,
                width: `${baseWidth}%`,
                filter: isCenter ? 'brightness(1) drop-shadow(0 10px 20px rgba(0,0,0,0.2))' : 'brightness(0.6)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-full">{image}</div>
            </div>
          )
        })}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-600 p-2 rounded-full shadow-lg transition-all duration-150 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-600 z-20"
            aria-label="Previous images"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-600 p-2 rounded-full shadow-lg transition-all duration-150 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-600 z-20"
            aria-label="Next images"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center mt-4 space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-150 ${
                index === currentIndex
                  ? 'bg-brand-600 w-8'
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel
