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
          name: 'Our Ethical Framework',
          description:
            'These are the guidelines & rules that outline the expected behaviour and ethical standards for individuals or members of our organization. These codes are designed to promote a positive and inclusive environment, prevent inappropriate behaviour, and ensure that everyone involved adheres to a common set of principles.',
          image: `${basePath}/code-of-conduct.jpg`,
        },
      ],
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative">
      {/* Hero Section */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={`${basePath}/code_of_conduct.png`}
          alt="Code of Conduct"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                The Code <span className="text-[#F1B434]">We Follow</span>
              </h1>
              <div className="w-24 h-1.5 bg-[#F1B434] rounded-full mb-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-12">
        <div className="flex items-center space-x-4 text-black mb-4">
          <Link href="/about-us" className="flex items-center space-x-2 hover:text-[#F1B434] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to About</span>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Content Header */}
          <div className="bg-[#f1b434] text-white p-8 text-center">
            <h2 className="text-3xl font-bold mb-2">
              {contentData.content.title}
            </h2>
          </div>

          {/* Content Body */}
          <div className="p-8">
            <div className="grid md:grid-cols-1 gap-8">
              {contentData.content.regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row"
                >
                  {/* Left Side - Image */}
                  <div className="md:w-1/2 w-full">
                    <img
                      src={region.image}
                      alt={region.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>

                  {/* Right Side - Content */}
                  <div className="p-6 md:w-1/2 w-full flex flex-col justify-start">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      {region.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {region.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        onClick={() => setShowPDF(true)}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F1B434] text-white rounded-lg font-medium hover:bg-[#d9a122] transition-colors shadow-md"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-5 h-5" />
                        View Code of Conduct
                      </motion.button>

                      {/* <motion.button
                        onClick={() => setShowPDF(true)}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download className="w-5 h-5" />
                        Download PDF
                      </motion.button> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mt-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Questions about our Code of Conduct?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact our Ethics Committee for any questions or concerns regarding
              our Code of Conduct and ethical business practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact-us" passHref>
                <motion.button
                  className="px-6 py-3 bg-[#f1b434] text-white font-medium rounded-lg hover:bg-[#d9a122] transition-colors shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Ethics Committee
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {showPDF && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative bg-white rounded-xl w-full max-w-5xl h-[80vh] overflow-hidden shadow-2xl">
              <button
                onClick={() => setShowPDF(false)}
                className="absolute top-3 right-3 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                src={pdfUrl}
                className="w-full h-full border-0"
                title="Code of Conduct PDF"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CodeOfConductPage;
