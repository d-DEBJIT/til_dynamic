'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Briefcase,
  GraduationCap,
  Mail,
  Linkedin,
  Globe,
  Calendar,
  Download
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    address: '',
    module: '',
    trainingMonth: '',
    trainingYear: '',
    preferredLocation: ''
  });

  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onRecaptchaChange = (token: string) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Training request submitted successfully!');
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/customer_support_.jpg`}
          alt="Customer Support"
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
                Skilled Manpower For <span className="text-[#F1B434]">Optimal Machine Performance</span>
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
      <section className="pb-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 space-y-12">
          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Training</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg space-y-6">
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  A trained and skilled operator is critical for maximizing the performance of your machines,
                  reducing costly downtime, increasing your ROI, and improving safety.
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  We offer training on basic machine operation and scheduled maintenance to customer’s operator
                  and maintenance staff. There are various modules of training available that not only enhance
                  knowledge and skills but also provide a competitive advantage.
                </motion.p>

                {/* Training Calendar 2025 Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-8 flex justify-center"
                >
                  <motion.button
                    className="inline-flex items-center px-8 py-3 bg-[#F1B434] text-white rounded-full font-medium shadow-sm hover:shadow-md transition-all hover:bg-[#E8AC30]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Calendar size={20} className="mr-2" />
                    Training Calendar 2025
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Training Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Training Request Form / Nomination Form
              </h3>
              <p className="text-gray-600">(All Fields will be *marked mandatory)</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inputs */}
                {[
                  ['customerName', 'Customer Name'],
                  ['companyName', 'Company Name'],
                  ['phoneNumber', 'Phone Number'],
                  ['emailAddress', 'Email Address']
                ].map(([name, label]) => (
                  <div key={name}>
                    <label className="block text-gray-700 font-medium mb-2">{label} *</label>
                    <input
                      type={name === 'emailAddress' ? 'email' : 'text'}
                      name={name}
                      value={(formData as any)[name]}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors"
                      placeholder={label}
                      required
                    />
                  </div>
                ))}

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434] transition-colors resize-vertical"
                    placeholder="Address"
                    required
                  />
                </div>

                {/* Dropdowns */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Module Interested for Training *
                  </label>
                  <select
                    name="module"
                    value={formData.module}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-[#F1B434]"
                    required
                  >
                    <option value="">Please Select Module</option>
                    <option value="Basic Module">Basic Module</option>
                    <option value="Advanced Training Module">Advanced Training Module</option>
                    <option value="Operators Training Module">Operators Training Module</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Training Month *</label>
                  <select
                    name="trainingMonth"
                    value={formData.trainingMonth}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434]"
                    required
                  >
                    <option value="">Please Select Month</option>
                    {[
                      'January','February','March','April','May','June',
                      'July','August','September','October','November','December'
                    ].map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Training Year *</label>
                  <select
                    name="trainingYear"
                    value={formData.trainingYear}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434]"
                    required
                  >
                    <option value="">Please Select Year</option>
                    {Array.from({ length: 12 }, (_, i) => 2024 + i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Preferred Location *</label>
                  <select
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F1B434]"
                    required
                  >
                    <option value="">Please Select Location</option>
                    <option value="TIL Premise">TIL Premise</option>
                    <option value="Customer Site">Customer Site</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-6">
                <motion.button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-[#F1B434] text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:bg-[#E8AC30]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg text-center px-8 py-10 max-w-md w-[90%] relative border-4 border-[#F1B434] backdrop-blur-md"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`${basePath}/logo.png`}
                alt="TIL Logo"
                className="mx-auto mb-5 w-44"
              />
              <h3 className="text-lg font-medium text-gray-800 mb-8">
                Training Calendar Of 2025 Is Coming Soon.
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#F1B434] text-white px-8 py-2.5 rounded-lg font-semibold shadow-sm hover:bg-[#E8AC30] transition-all"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Page;
