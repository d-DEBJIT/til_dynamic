'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone, User } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  const [formData, setFormData] = useState({
    organization: '',
    fullName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    address: '',
    queryType: '',
    query: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
              <img
                src={`${basePath}/contact.jpg`}
                alt="inquiry"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <div className="absolute inset-0 z-20 flex items-center pt-6">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
                  <motion.div
                    className="max-w-2xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
                  >
                    <motion.h1
                      className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      Reach Out <span className="text-[#F1B434]">To Us</span>
                    </motion.h1>
                    <motion.div
                      className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-4"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <motion.p
                      className="text-lg text-gray-200 max-w-xl leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      Build your career with a pioneer in India's heavy equipment industry.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </div>


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us your inquiry</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                    placeholder="Organization"
                  />
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                    placeholder="E-mail"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                    placeholder="Phone no."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                  >
                    <option value="">Select State</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                  placeholder="Address"
                />
              </div>

              <div>
                <label htmlFor="queryType" className="block text-sm font-medium text-gray-700 mb-1">
                  Nature of Query <span className="text-red-500">*</span>
                </label>
                <select
                  id="queryType"
                  name="queryType"
                  value={formData.queryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                >
                  <option value="">Please Select</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Service Request">Service Request</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Career">Career</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Query <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                  placeholder="Your Query"
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="focus:ring-[#F1B434] h-4 w-4 text-[#F1B434] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
  <motion.button
    type="submit"
    className="w-40 flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#F1B434] hover:bg-[#E8AC30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F1B434]"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    Submit
  </motion.button>
</div>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Page;