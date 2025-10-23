// app/investor-relations/InvestorRelationsClient.tsx
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  Building2,
  User,
  Download,
} from 'lucide-react';
import { SidebarData, ContentPage } from './page';

interface InvestorRelationsClientProps {
  sidebarData: SidebarData[];
  contentPages: Record<string, ContentPage>;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const InvestorRelationsClient: React.FC<InvestorRelationsClientProps> = ({ 
  sidebarData, 
  contentPages 
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activePage, setActivePage] = useState<string | null>(null);

  const handleMenuToggle = (id: string) => {
    setActiveMenu(prev => (prev === id ? null : id));
  };

  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
  };

  const renderContentPage = () => {
    if (!activePage) return null;
    
    const page = contentPages[activePage];
    if (!page) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{page.title}</h2>
          <button
            onClick={() => setActivePage(null)}
            className="text-gray-500 hover:text-gray-700 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Back to Resources
          </button>
        </div>

<div className="entry-content prose prose-lg max-w-none 
  [&_h2]:font-bold [&_h2]:text-gray-800 [&_h2]:text-2xl 
  [&_h3]:font-semibold [&_h3]:text-xl 
  [&_p]:text-gray-700 [&_p]:leading-relaxed
  [&_p+p]:mt-4 
  [&_p+h2]:mt-6 [&_p+h3]:mt-5 
  [&_h2+p]:mt-4 [&_h3+p]:mt-3
">          {page.description ? (
            <div 
              className="entry-content"
              dangerouslySetInnerHTML={{ __html: page.description }}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No content available for this section.</p>
              <p className="text-gray-400 mt-2">Please check back later for updates.</p>
            </div>
          )}
        </div>

        {/* Optional: Add download button if there are files */}
        {/* {page.description && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => window.print()}
              className="flex items-center px-4 py-2 text-sm bg-[#F1B434] text-white rounded-md hover:bg-[#E8AC30] transition-colors"
            >
              <Download size={16} className="mr-2" />
              Print this page
            </button>
          </div>
        )} */}
      </motion.div>
    );
  };

  // Rest of your component remains the same...
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/investor-relation-bg.jpg`}
          alt="Investor Relations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-start justify-center pt-32 md:pt-48 lg:pt-32">
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
              <span className="text-[#F1B434]">Fostering Trust Through Transparency</span>
              </motion.h1>
              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* <motion.p
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Connecting with our investors and providing transparent financial information.
              </motion.p> */}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-16 bg-[#f8f9fa]"></div>

      {/* Main Content */}
      <section className="pb-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to TIL Investor Relations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to maintaining transparent communication with our investors and stakeholders. 
              Explore our corporate governance, financial performance, and shareholder resources below.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Dynamic Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-full lg:w-1/3"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 sticky top-6">
                <div className="bg-[#F1B434] p-6">
                  <h2 className="text-2xl font-bold text-white">Investor Resources</h2>
                </div>
                
                <div className="p-4">
                  {sidebarData.map(item => (
                    <div key={item.id} className="mb-2 last:mb-0">
                      <button
                        onClick={() => handleMenuToggle(item.id)}
                        className={`w-full flex items-center justify-between p-4 text-left rounded-lg font-medium hover:bg-gray-50 focus:outline-none ${
                          activeMenu === item.id ? 'bg-gray-50 text-[#F1B434]' : 'text-gray-800'
                        }`}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${activeMenu === item.id ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeMenu === item.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 py-3 bg-gray-50 rounded-lg mt-1">
                              <p className="text-gray-700 mb-3 text-sm">{item.content}</p>
                              <ul className="space-y-2">
                                {item.subItems.map(subItem => {
                                  const pageId = subItem.title?.toLowerCase().replace(/\s+/g, '-') || '';
                                  return (
                                    <li key={subItem.relations_dtl_id}>
                                      <button
                                        onClick={() => handlePageChange(pageId)}
                                        className="flex items-center text-gray-600 hover:text-[#F1B434] transition-colors text-sm w-full"
                                      >
                                        <ArrowRight size={12} className="text-[#F1B434] mr-2" />
                                        {subItem.title || 'Untitled'}
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <div className="w-full lg:w-2/3 space-y-8">
              {activePage ? (
                renderContentPage()
              ) : (
                <>
                  {/* Your existing static content grids */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {/* Share Queries */}
                    <motion.div
                      className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#F1B434]/50 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        For share-related queries, assistance, or information
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="p-2.5 mr-4 bg-[#F1B434]/10 rounded-lg">
                            <Building2 size={20} className="text-[#F1B434]" />
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800">TIL Limited</h5>
                            <p className="text-sm text-gray-600 mt-1">
                              Secretarial Department<br />
                              1, Taratolla Road, Garden Reach, Kolkata-700 024
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="p-2 mr-3 bg-[#F1B434]/10 rounded-md">
                            <Phone size={16} className="text-[#F1B434]" />
                          </div>
                          <p className="text-gray-700">+91 33 2469 3251/3252</p>
                        </div>
                        <div className="flex items-center">
                          <div className="p-2 mr-3 bg-[#F1B434]/10 rounded-md">
                            <Mail size={16} className="text-[#F1B434]" />
                          </div>
                          <p className="text-gray-700">secretarial@tilindia.com</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Investor Contact */}
                    <motion.div
                      className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#F1B434]/50 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        For investor queries and information
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="p-2.5 mr-4 bg-[#F1B434]/10 rounded-lg">
                            <User size={20} className="text-[#F1B434]" />
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800">Mr. Partha Sengupta</h5>
                            <p className="text-sm text-gray-600 mt-1">
                              Vice President - Finance & Chief Financial Officer
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="p-2 mr-3 bg-[#F1B434]/10 rounded-md">
                            <Phone size={16} className="text-[#F1B434]" />
                          </div>
                          <p className="text-gray-700">+91 33 2469 3251/3252</p>
                        </div>
                        <div className="flex items-center">
                          <div className="p-2 mr-3 bg-[#F1B434]/10 rounded-md">
                            <Mail size={16} className="text-[#F1B434]" />
                          </div>
                          <p className="text-gray-700">cfo@tilindia.com</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Stock Information */}
                  {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="bg-white p-6 rounded-xl border border-gray-200"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Stock Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">BSE</p>
                        <p className="text-lg font-semibold text-gray-800">₹ 1,250.75</p>
                        <p className="text-sm text-green-600 mt-1">+2.45%</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">NSE</p>
                        <p className="text-lg font-semibold text-gray-800">₹ 1,252.30</p>
                        <p className="text-sm text-green-600 mt-1">+2.60%</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">ISIN</p>
                        <p className="text-lg font-semibold text-gray-800">INE806A01017</p>
                      </div>
                    </div>
                  </motion.div> */}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestorRelationsClient;