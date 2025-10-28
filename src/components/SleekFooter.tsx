'use client';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Download,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Brand colors from guidelines
const brandYellow = '#F1B434'; // RGB: R241 G180 B52
const brandBlack = '#000000';

const SleekFooter: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (mobile) {
        setExpandedSections({});
      } else {
        const allExpanded: Record<string, boolean> = {};
        Object.keys(footerLinks).forEach(key => {
          allExpanded[key] = true;
        });
        setExpandedSections(allExpanded);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleEmergencyClick = () => {
    window.location.href = 'tel:+911800 266 1535';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+918981530153', '_blank');
  };

  const getLinkPath = (category: string, linkName: string): string => {
    const routeMap: Record<string, Record<string, string>> = {
      Products: {
        'Truck Cranes': `${basePath}/category/truck-cranes`,
        'Pick n Carry Cranes': `${basePath}/category/pick-n-carry-cranes`,
        'Rough Terrain Cranes': `${basePath}/category/rough-terrain-cranes`,
        'Articulating Cranes': `${basePath}/category/articulating-crane`,
        'Grove Range': `${basePath}/category/grove-range`,
        'Crawler Cranes': `${basePath}/category/crawler-cranes`,
        'Forklift Trucks': `${basePath}/category/forklift-trucks`,
        'Reachstackers': `${basePath}/category/reachstackers`,
        'Boom Lifts': `${basePath}/category/boom-lifts`,
      },
      Services: {
        'Maintenance Contract': `${basePath}/customer-support/maintenance-contract`,
        'Parts & Warehouse': `${basePath}/customer-support/parts-warehouse`,
        'Training': `${basePath}/customer-support/training`,
        'Service Locations': `${basePath}/customer-support/locations`,
      },
      Company: {
        'About Us': `${basePath}/about-us`,
        'Board of Directors': `${basePath}/about-us/board-of-directors`,
        'Milestones': `${basePath}/about-us/milestones`,
        'Values & Vision': `${basePath}/about-us/vision-values`,
        'Code of Conduct': `${basePath}/about-us/code-of-conduct`,
        'Facilities': `${basePath}/about-us/facility`
      },
      Support: {
        // 'Contact Us': `${basePath}/contact-us`,
        'Locations': `${basePath}/contact-us/locations`,
        'Inquiry': `${basePath}/contact-us/inquiry`

      },
    };

    return routeMap[category]?.[linkName] || '#';
  };

  const footerLinks: Record<string, string[]> = {
    Products: [
      'Truck Cranes',
      'Pick n Carry Cranes',
      'Rough Terrain Cranes',
      'Articulating Cranes',
      'Grove Range',
      'Crawler Cranes',
      'Forklift Trucks',
      'Reachstackers',
      'Boom Lifts',
    ],
    Services: [
      'Maintenance Contract',
      'Parts & Warehouse',
      'Training',
      'Service Locations',
    ],
    Company: [
      'About Us',
      'Board of Directors',
      'Milestones',
      'Values & Vision',
      'Code of Conduct',
      'Facilities'
    ],
    Support: [
      // 'Contact Us',
      'Locations',
      'Inquiry'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/tillimited/', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/til-limited-ind/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/tillimitedindia', label: 'YouTube' }
  ];
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <footer className="bg-[#0f1419] text-white relative">
      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 md:space-y-3 md:bottom-6 md:right-6">
        <motion.button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center rounded-full p-3 md:p-4 shadow-lg bg-[#25D366] hover:bg-[#128C7E] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="WhatsApp chat"
        >
          <FaWhatsapp size={isMobile ? 20 : 24} className="text-white" />
        </motion.button>

        <motion.button
          onClick={handleEmergencyClick}
          className="flex items-center justify-center rounded-full p-3 md:p-4 shadow-lg"
          style={{ backgroundColor: brandYellow }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Emergency support"
        >
          <Phone size={isMobile ? 18 : 20} className="text-white" />
        </motion.button>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 xl:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 - Brand & Social */}
          <div className="md:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: isMobile ? '0px' : '-50px' }}
            >
              <a href="/" className="mb-4 md:mb-6 inline-block">
                <img
                  src={`${basePath}/logo1.png`}
                  alt="TIL India"
                  className="h-12 md:h-15 w-auto brightness-0 invert"
                />
              </a>

              <p className="text-slate-300 mb-4 md:mb-6 text-sm leading-relaxed">
                Leading the future of heavy machinery with innovative solutions that power the world&apos;s most ambitious projects.
              </p>

              <div className="mb-4 md:mb-6">
                <h4 className="text-sm font-medium mb-3 text-slate-400 uppercase tracking-wider">
                  Stay Updated
                </h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-[#1a2233] border border-[#F1B434]/20 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                  />
                  <motion.button
                    className="p-2 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: brandYellow }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* <span className="text-xs font-medium mr-1 hidden sm:block">SUBSCRIBE</span> */}
                    <ArrowRight size={16} className="text-white" />
                  </motion.button>
                </div>
              </div>

              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="w-8 h-8 md:w-9 md:h-9 bg-[#1a2233] hover:bg-[#F1B434] rounded-lg flex items-center justify-center transition-all border border-[#F1B434]/20"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={14} className="text-slate-300 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 2–3 - Links (row on desktop) */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
              {Object.entries(footerLinks).map(([category, links], index) => {
  const isProducts = category === 'Products';
  const [showAllProducts, setShowAllProducts] = useState(false);

  // For Products: show only 3 unless expanded
  const displayedLinks = isProducts && !showAllProducts ? links.slice(0, 3) : links;

  return (
    <motion.div
      key={category}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: isMobile ? '0px' : '-50px' }}
      className="border-b border-[#F1B434]/10 md:border-none pb-4 md:pb-0 flex-1"
    >
      <div
        className="flex justify-between items-center cursor-pointer md:cursor-auto"
        onClick={() => isMobile && toggleSection(category)}
      >
        <h4
          className="text-sm font-medium uppercase tracking-wider"
          style={{ color: brandYellow }}
        >
          {category}
        </h4>
        {isMobile && (
          <span className="md:hidden">
            {expandedSections[category] ? (
              <ChevronUp size={18} className="text-slate-300" />
            ) : (
              <ChevronDown size={18} className="text-slate-300" />
            )}
          </span>
        )}
      </div>

      {(isMobile ? expandedSections[category] : true) && (
        <ul className="mt-3 md:mt-4 space-y-2 md:space-y-2.5">
          {displayedLinks.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              viewport={{ once: true, margin: isMobile ? '0px' : '-20px' }}
            >
              <a
                href={getLinkPath(category, link)}
                className="text-slate-300 hover:text-white text-sm transition-colors hover:underline underline-offset-4 block py-1 md:py-0"
                style={{ textDecorationColor: brandYellow }}
              >
                {link}
              </a>
            </motion.li>
          ))}

          {/* Show more / less toggle only for Products */}
          {isProducts && (
            <li>
              <button
                onClick={() => setShowAllProducts(!showAllProducts)}
                className="text-xs text-[#F1B434] hover:underline mt-1"
              >
                {showAllProducts ? 'Show less' : 'Show more'}
              </button>
            </li>
          )}
        </ul>
      )}
    </motion.div>
  );
})}

            </div>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: isMobile ? '0px' : '-50px' }}
            >
              <motion.button
                onClick={() => setIsLoginModalOpen(true)}
                className="w-full bg-[#1a2233] border border-[#F1B434]/20 rounded-xl p-3 md:p-4 mb-4 md:mb-6 group cursor-pointer"
                whileHover={{
                  scale: isMobile ? 1 : 1.02,
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-[#1a2233] group-hover:bg-[#F1B434] p-2 rounded-lg">
                    <Download size={16} className="text-[#F1B434] group-hover:text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">Product Catalog</div>
                    <div className="text-xs text-slate-400">Download PDF (12MB)</div>
                  </div>
                </div>
              </motion.button>

              {/* Rest of your contact info remains the same */}
              <div className="space-y-2.5 text-sm">
                <h4 className="mb-3 font-medium uppercase tracking-wider" style={{ color: brandYellow }}>
                  Quick Contact
                </h4>
                <div className="flex items-center space-x-3">
                  <Mail size={14} style={{ color: brandYellow }} className="flex-shrink-0" />
                  <a href="mailto:mktg-til@tilindia.com" className="text-slate-300 hover:text-white break-words">
                    mktg-til@tilindia.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={14} style={{ color: brandYellow }} className="flex-shrink-0" />
                  <a href="tel:+9103366332000" className="text-slate-300 hover:text-white">
                    +91 033 6633 2000
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={14} style={{ color: brandYellow }} className="mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 hover:text-white">
                    Taratolla Road, Garden Reach<br />
                    Kolkata 700 024, West Bengal
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-2.5 text-sm">
                <h4 className="mb-3 font-medium uppercase tracking-wider" style={{ color: brandYellow }}>
                  Toll Free Number
                </h4>
                <div className="flex items-center space-x-3">
                  <Phone size={14} style={{ color: brandYellow }} className="flex-shrink-0" />
                  <a href="tel:+9103366332000" className="text-slate-300 hover:text-white">
                    1800 266 1535
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Login Modal */}
          <AnimatePresence>
            {isLoginModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                onClick={() => setIsLoginModalOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="bg-white rounded-xl max-w-md w-full p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Login Required</h3>
                    <p className="text-gray-600">Please login to download the Product Catalog</p>
                  </div>

                  {/* Google Login Button */}
                  <button
                    onClick={() => {
                      // Add your Google OAuth login logic here
                      console.log('Google login clicked');
                      // For now, just close the modal
                      setIsLoginModalOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors mb-4"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google
                  </button>

                  <div className="text-center">
                    <button
                      onClick={() => setIsLoginModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#F1B434]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 xl:px-20 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-xs text-slate-400 text-center md:text-left">
              © 2025 Tractors India Limited. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-slate-400">
              {[
                { text: 'Privacy Policy', path: '/privacy-policy' },
                { text: 'Terms of Service', path: '/terms-of-service' },
                { text: 'Cookie Policy', path: '/cookie-policy' }
              ].map((item) => (
                <motion.a
                  key={item.text}
                  href={item.path}
                  className="hover:text-white hover:underline underline-offset-4"
                  style={{ textDecorationColor: brandYellow }}
                  whileHover={{ y: -1 }}
                >
                  {item.text}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SleekFooter;