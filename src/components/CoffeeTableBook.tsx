// components/CoffeeTableBook.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, X } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Coffee Table Book Modal Component
function CoffeeTableBookModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    organization: '',
    fullName: '',
    phoneNumber: '',
    email: '',
    country: '',
    state: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add your download logic here
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl max-w-7xl w-6xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">DOWNLOAD TIL COFFEE TABLE BOOK</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                Organization*
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              />
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone no."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country*
              </label>
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State*
              </label>
              <select
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              >
                <option value="">Select State</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Delhi">Delhi</option>
                {/* Add more states as needed */}
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Submit and Download
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

interface CoffeeTableBookProps {
  className?: string;
  imagePath?: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function CoffeeTableBook({
  className = "max-w-7xl mx-auto px-6 md:px-10 xl:px-20",
  imagePath = `${basePath}/coffee-table-book.jpg`,
  title = 'TIL Coffee Table Book',
  description = 'Discover the rich legacy and innovative journey of TIL through our beautifully crafted coffee table book. Featuring stunning visuals and inspiring stories from our decades of excellence in the heavy equipment industry.',
  buttonText = 'Download Now'
}: CoffeeTableBookProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={`mb-16 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left: Image */}
            <div className="lg:w-1/2 h-64 lg:h-96 relative overflow-hidden">
              <img
                src={imagePath}
                alt="TIL Coffee Table Book"
                className="w-full h-auto object-contain mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
            </div>

            {/* Right: Content */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                {title}
              </h2>
              <p className="text-gray-600 mb-6">
                {description}
              </p>
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#F1B434] text-black font-medium rounded-lg hover:bg-[#FFE352] transition-colors w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                {buttonText}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Coffee Table Book Modal */}
      <CoffeeTableBookModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}