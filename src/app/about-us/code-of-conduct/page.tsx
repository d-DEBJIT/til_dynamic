'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Download, Eye, X } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const CodeOfConductPage = () => {
  const [showPDF, setShowPDF] = useState(false);

  const pdfUrl = 'https://www.tilindia.in/assets/pdf/Code_of_conduct.pdf';

  const contentData = {
    title: 'The Code We Follow',
    description:
      'Our commitment to ethical business practices and corporate governance.',
    content: {
      title: 'Code of Conduct',
      description:
        'These are the guidelines & rules that outline the expected behaviour and ethical standards for individuals or members of our organization. These codes are designed to promote a positive and inclusive environment, prevent inappropriate behaviour, and ensure that everyone involved adheres to a common set of principles. This code of conduct is shared with all our employees, new joiners and partners working with us. This document is available at all times with our Human Resources.',
      regions: [
        {
          name: 'Code Of Conduct',
          description:
            '',
          image: `${basePath}/code-of-conduct.jpg`,
        },
      ],
    },
  };

  return (
    <>
      {/* Hero Section - Matching Style */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/code_of_conduct.png`}
          alt="Code of Conduct"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/50 to-transparent z-10" />

        {/* Content Container */}
        <div className="absolute inset-0 z-20 flex items-center pt-8">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            >
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-yellow-300 text-sm font-bold tracking-wider mb-2 mt-8 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {/* ETHICS & COMPLIANCE */}
              </motion.span>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                The Code <span className="text-[#F1B434] drop-shadow-lg">We Follow</span>
              </motion.h1>

              <motion.div
                className="w-32 h-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-6 shadow-lg"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.p
                className="text-xl text-gray-100 max-w-xl leading-relaxed font-medium tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Our commitment to ethical business practices and corporate governance
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4 text-gray-600 mb-8"
          >
            <Link 
              href="/about-us" 
              className="flex items-center space-x-2 hover:text-[#F1B434] transition-colors duration-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to About</span>
            </Link>
          </motion.div>

          {/* Main Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-16"
          >
            {/* Content Header */}
            <div className="bg-gradient-to-r from-[#F1B434] to-[#F1B434] p-10 text-center">
              <motion.h2
                className="text-4xl font-bold text-white mb-4 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Code of Conduct
              </motion.h2>
              <motion.div
                className="w-24 h-2 bg-white/30 rounded-full mx-auto shadow-lg"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Content Body */}
            <div className="p-10">
              <div className="grid md:grid-cols-1 gap-8">
                {contentData.content.regions.map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-lg border border-gray-200 transform hover:scale-[1.01] transition-transform duration-300"
                  >
                    {/* Left Side - Image */}
                    <div className="lg:w-1/2 w-full">
                      <div className="h-80 lg:h-full rounded-2xl overflow-hidden">
                        <img
                          src={region.image}
                          alt={region.name}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="p-8 lg:w-1/2 w-full flex flex-col justify-center">
                      <motion.h3
                        className="text-2xl font-bold text-gray-800 mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {region.name}
                      </motion.h3>
                      <motion.p
                        className="text-gray-700 leading-relaxed mb-8 text-base tracking-wide"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {region.description}
                      </motion.p>

                      {/* Description from contentData */}
                      <motion.p
                        className="text-gray-700 leading-relaxed mb-8 text-base tracking-wide"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {contentData.content.description}
                      </motion.p>

                      {/* Buttons */}
                      <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <motion.button
                          onClick={() => setShowPDF(true)}
                          className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F1B434] to-[#F1B434] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-5 h-5" />
                          View Code of Conduct
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {showPDF && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPDF(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white rounded-2xl w-full max-w-5xl h-[80vh] overflow-hidden shadow-2xl border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPDF(false)}
                className="absolute top-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* PDF Viewer */}
              <iframe
                src={pdfUrl}
                className="w-full h-full border-0"
                title="Code of Conduct PDF"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CodeOfConductPage;