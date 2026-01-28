import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WestlandExchangeMap from '../../WestlandExchangeMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', inquiryType: '', message: '' });
  };

  const offices = [
    {
      city: 'Nairobi, Kenya',
      address: 'ABC Place, Waiyaki Way',
      region: 'East Africa Hub'
    },
    {
      city: 'Lagos, Nigeria',
      address: 'Victoria Island',
      region: 'West Africa Hub'
    },
    {
      city: 'Johannesburg, South Africa',
      address: 'Sandton City',
      region: 'Southern Africa Hub'
    }
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 mt-28">
      <div className=" mx-auto">
        <div className='mt-2 mb-4'>
          <p><span  className='p-2 text-white bg-orange-900 rounded-lg'>Real Sources Africa</span></p>
        </div>
        
        <WestlandExchangeMap />
        <div className="mb-8 mt-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">Send Us a Message</h1>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 7XX XXX XXX"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your organization"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-900 mb-2">
                        Inquiry Type <span className="text-red-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none text-sm cursor-pointer"
                        >
                          <option value="">Select inquiry type</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="investment">Investment Inquiry</option>
                          <option value="supply">Supply Chain Services</option>
                          <option value="sourcing">Product Sourcing</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                        Your Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors text-sm shadow-sm"
                    >
                      Send Message
                    </button>
                    
                  </div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Office Locations */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Regional Hubs Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">Our Regional Hubs</h3>
                <p className="text-sm text-gray-600 mb-6">Real Sources Africa operates across the continent with regional hubs.</p>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{office.city}</h4>
                        <p className="text-sm text-gray-600 mb-2">{office.address}</p>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {office.region}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-blue-50 rounded-lg border border-blue-100 p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-600 mb-1">Email</p>
                      <a href="mailto:info@realsources.africa" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                        info@realsources.africa
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-600 mb-1">Phone</p>
                      <a href="tel:+254123456789" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                        +254 123-456-789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-600 mb-1">Business Hours</p>
                      <p className="text-sm font-semibold text-gray-900">Mon - Fri: 8AM - 6PM EAT</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;