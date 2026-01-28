import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Section = ({ 
  id, 
  children, 
  className = '', 
  background = 'white',
  animate = true,
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
  
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-gray-50',
  }
  
  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding  ${className} ${
        animate ? `scroll-animate ${isVisible ? 'visible' : ''}` : ''
      }`}
      {...props}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}

export default Section

