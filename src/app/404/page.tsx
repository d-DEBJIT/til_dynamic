'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12">
        <div className="max-w-4xl mx-auto px-6 md:px-10 xl:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            {/* 404 Graphic */}
            <div className="mb-8">
              <div className="relative inline-block">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-9xl font-bold text-amber-500"
                >
                  404
                </motion.div>
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -top-4 -right-12 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium rotate-12"
                >
                  Oops!
                </motion.div>
              </div>
            </div>

            {/* Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h1>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mb-6" />
            
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/')}
                className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/contact-us')}
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Support
              </motion.button>
            </div>

            {/* Additional Help */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-medium text-gray-800 mb-3">Need immediate assistance?</h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                <a 
                  href="tel:+913366332000" 
                  className="text-amber-500 hover:text-amber-600 font-medium flex items-center gap-1"
                >
                  <Phone className="w-4 h-4" />
                  +91 33 6633 2000
                </a>
                <span className="text-gray-400 hidden sm:block">•</span>
                <a 
                  href="mailto:info@tilindia.com" 
                  className="text-amber-500 hover:text-amber-600 font-medium flex items-center gap-1"
                >
                  <Mail className="w-4 h-4" />
                  info@tilindia.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} TIL Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;