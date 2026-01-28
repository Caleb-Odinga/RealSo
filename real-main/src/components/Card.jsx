import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ children, className = '', hover = true, link = '/', ...props }) => {
  return (
    <Link to={link}
      className={`bg-white  shadow-sm border border-gray-200 p-2 md:p-2 transition-all duration-150 ${hover ? 'hover:shadow-sm hover-lift' : ''
        } ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default Card

