import React, { useState, useEffect, useRef } from 'react'

const Carousel = ({
  items = [],
  autoPlayInterval = 5000,
  visibleCount = 3,
}) => {
  const [index, setIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const intervalRef = useRef(null)

  // Clone first N items
  const extendedItems = [...items, ...items.slice(0, visibleCount)]
  const maxIndex = items.length

  useEffect(() => {
    if (autoPlayInterval <= 0) return

    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1)
    }, autoPlayInterval)

    return () => clearInterval(intervalRef.current)
  }, [autoPlayInterval])

  // Handle snap-back (invisible)
  useEffect(() => {
    if (index === maxIndex) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false)
        setIndex(0)
      }, 500) // must match transition duration

      return () => clearTimeout(timeout)
    } else {
      setIsTransitioning(true)
    }
  }, [index, maxIndex])

  if (!items.length) return null

  return (
    <div className="relative w-full overflow-hidden">
      {/* Track */}
      <div
        className={`flex ${
          isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''
        }`}
        style={{
          transform: `translateX(-${index * (100 / visibleCount)}%)`,
        }}
      >
        {extendedItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-3"
            style={{ width: `${100 / visibleCount}%` }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setIndex((prev) => prev - 1 < 0 ? maxIndex - 1 : prev - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
      >
        ‹
      </button>

      <button
        onClick={() => setIndex((prev) => prev + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index % items.length
                ? 'w-6 bg-brand-600'
                : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
