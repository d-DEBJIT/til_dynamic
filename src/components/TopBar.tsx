'use client';
import React, { useState, useEffect } from 'react';
import { Search, FileText } from 'lucide-react'; // Removed FileText import
import { motion } from 'framer-motion';
import { useSearch } from '../context/SearchContext';
import GetQuoteModal from '../components/GetQuote';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const TopBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { open: openSearch } = useSearch();

  // 🔹 State to control the Get Quote modal
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      <motion.div
        data-component="TopBar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#f1b434] h-14' : 'bg-[#f1b434] h-16'
        } border-b border-black/20`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href={'/'} className="flex items-center">
              <motion.img
                src={`${basePath}/logo1.png`}
                alt="Logo"
                className="h-15 w-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
            </Link>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Social Media & Search (hidden on mobile) */}
              <div className="hidden md:flex items-center space-x-2">
                {/* LinkedIn */}
                <button
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/company/til-limited-ind/',
                      '_blank',
                      'noopener,noreferrer'
                    )
                  }
                  aria-label="LinkedIn"
                  className="p-2 text-black hover:text-[#0077b5] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>

                {/* Facebook */}
                <button
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/tillimited/',
                      '_blank',
                      'noopener,noreferrer'
                    )
                  }
                  aria-label="Facebook"
                  className="p-2 text-black hover:text-[#3b5998] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </button>

                {/* YouTube */}
                <button
                  onClick={() =>
                    window.open(
                      'https://www.youtube.com/tillimitedindia',
                      '_blank',
                      'noopener,noreferrer'
                    )
                  }
                  aria-label="YouTube"
                  className="p-2 text-black hover:text-[#ff0000] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </button>

                {/* Search Icon */}
                <button
                  onClick={openSearch}
                  aria-label="Search"
                  className="p-2 text-black hover:text-white transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Get Quote Button - Updated Style without icon */}
              <motion.button
              onClick={() => setIsQuoteOpen(true)}
              whileTap={{ scale: 0.95 }}
              className={`group inline-flex items-center justify-center px-6 py-3 
              border-2 border-white/80 bg-black/85 text-white font-semibold 
              rounded-xl shadow-xl backdrop-blur-md 
              transition-colors duration-300
              hover:border-[#f1b434] hover:text-[#f1b434]
              ${isMobile ? 'w-full' : ''}`}
  style={{ fontFamily: 'Arial, sans-serif' }}
>
  <FileText className="mr-2 w-4 h-4 transition-transform group-hover:scale-110" />
  <span className="text-sm lg:text-base">Get Quote</span>
</motion.button>


            </div>
          </div>
        </div>
      </motion.div>

      {/* 🔹 Modal appears when state is true */}
      <GetQuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};

export default TopBar;