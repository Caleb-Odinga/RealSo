import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ bg, color }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About RSA',
      href: '#about'
    },

    {
      name: 'Platforms',
      href: '#platform',
      subItems: [
        { name: 'Biashara Link', href: 'BiasharaLink_Portal' },
        { name: 'DealHouse', href: 'DealHouse' },
        
        { name: 'Policy Tracker', href: 'Policy_Tracker' },
        { name: 'Asili Markets', href: 'Asili_Markets' },
        { name: 'Deal Pods', href: 'Trade_Pods' },
        { name: 'Deal Stewards', href: '#DealStewards' },
        { name: 'The Bridge', href: '#TheBridge' },
        { name: 'Programs & Missions', href: '#Programs & Missions' },
      ]
    },

    {
      name: 'Contact',
      href: '/Contact'
    },
    
    {
      name: 'How It Works',
      href: '/HowItWorks'
    },
    {
      name: 'Get started',
      href: '/Getstart'
    },
  ]

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index)
  }

  const ChevronDown = ({ className }) => (
    <svg className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M19 9l-7 7-7-7" />
    </svg>
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-md ${isScrolled
        ? 'bg-white shadow-lg'
        : 'bg-white shadow-lg'
        }`}
    >
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-3"
              aria-label="Real Sources Africa Home"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnKUX6gTsnLHFv6cx3t4HaUFv4wv7kbBIPg&amp;s"
                alt="Real Sources Africa"
                className="h-10 w-auto"
              />
            </Link>

          </div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subItems && handleDropdownEnter(index)}
                onMouseLeave={() => item.subItems && handleDropdownLeave()}
              >
                <Link
                  to={`${item.href}`}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors group"
                >
                  {item.name}
                  {item.subItems && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && activeDropdown === index && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-xl rounded-b-md border-t-2 border-orange-600 py-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        to={subItem.href}
                        key={subItem.name}

                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            
          </div>

          <button
            className="lg:hidden p-2 text-orange-600 hover:text-orange-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            {navItems.map((item, index) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    className="flex-1 py-3 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
                    onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="p-2 text-gray-700 hover:text-orange-600"
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeMobileDropdown === index ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.subItems && activeMobileDropdown === index && (
                  <div className="pl-4 pb-2 bg-gray-50 rounded">
                    {item.subItems.map((subItem) => (
                      <Link to={subItem.href}
                        key={subItem.name}
                        
                        className="block py-2 text-sm text-gray-600 hover:text-orange-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar