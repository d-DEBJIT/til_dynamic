'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Briefcase,
  GraduationCap,
  Mail,
  Linkedin,
  Globe
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  // Updated links for each section
  const sectionLinks = [
    { icon: <Users className="w-8 h-8 text-[#F1B434] mb-3" />, title: "Life @ TIL", link: "/careers/life-til" },
    { icon: <Briefcase className="w-8 h-8 text-[#F1B434] mb-3" />, title: "Current Vacancies", link: "/careers/vacancies" },
    { icon: <Users className="w-8 h-8 text-[#F1B434] mb-3" />, title: "Meet Our Team", link: "/careers/meet-our-team" },
    { icon: <GraduationCap className="w-8 h-8 text-[#F1B434] mb-3" />, title: "Equal Opportunity", link: "/careers/equal-opportunity-employer" }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/corporate_profile_new.jpg`}
          alt="Careers at TIL"
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
                TIL <span className="text-[#F1B434]">Careers</span>
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
          {/* Introductory Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Growing Team</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/2 space-y-6">
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  At TIL, we believe our people are our greatest asset. We're committed to creating an environment where
                  talented individuals can thrive, innovate, and grow professionally while contributing to India's industrial growth.
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Whether you're an experienced professional or just starting your career, we offer opportunities across various
                  domains in engineering, manufacturing, corporate functions, and more.
                </motion.p>

                <div className="grid grid-cols-2 gap-4">
                  {sectionLinks.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all hover:border-[#F1B434]/30"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {item.icon}
                      <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                      <Link href={item.link} className="text-sm text-[#F1B434] font-medium hover:underline">
                        KNOW MORE
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg self-stretch"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={`${basePath}/innovation-in-action.avif`}
                  alt="TIL team working together"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ minHeight: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Innovation in Action</h3>
                  <p className="text-sm">Our team collaborates to build India's future infrastructure</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Why Work With Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-xl shadow-lg p-8 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
                <p className="mb-6">
                  At TIL, we don't just build equipment - we build careers. Join a team that values innovation,
                  collaboration and professional growth in the heavy equipment industry.
                </p>
                <motion.button
                  className="inline-flex items-center px-6 py-2.5 bg-white text-[#F1B434] rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:bg-gray-100"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  LEARN ABOUT OUR CULTURE
                  <ArrowRight size={16} className="ml-2" />
                </motion.button>
              </div>
              <div>
                <ul className="space-y-4">
                  {[
                    'Competitive compensation and benefits',
                    'Continuous learning opportunities',
                    'Diverse and inclusive workplace',
                    'Opportunities for career advancement',
                    'Employee wellness programs',
                    'Cutting-edge technology exposure'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start group"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 h-6 w-6 text-white mr-3 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium group-hover:underline decoration-white/50">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h2>
            <div className="space-y-6">
              <motion.div className="flex items-start gap-4 hover:bg-gray-50 p-4 rounded-lg transition-colors" whileHover={{ x: 5 }}>
                <div className="p-3 bg-[#F1B434]/10 rounded-lg hover:bg-[#F1B434]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#F1B434]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:careers@tilindia.com" className="text-gray-600 hover:text-[#F1B434] transition-colors">
                    careers@tilindia.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4 hover:bg-gray-50 p-4 rounded-lg transition-colors" whileHover={{ x: 5 }}>
                <div className="p-3 bg-[#F1B434]/10 rounded-lg hover:bg-[#F1B434]/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-[#F1B434]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">LinkedIn</h3>
                  <a href="https://linkedin.com/company/til-limited" className="text-gray-600 hover:text-[#F1B434] transition-colors">
                    linkedin.com/company/til-limited
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4 hover:bg-gray-50 p-4 rounded-lg transition-colors" whileHover={{ x: 5 }}>
                <div className="p-3 bg-[#F1B434]/10 rounded-lg hover:bg-[#F1B434]/20 transition-colors">
                  <Globe className="w-6 h-6 text-[#F1B434]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Website</h3>
                  <a href="https://www.tilindia.com" className="text-gray-600 hover:text-[#F1B434] transition-colors">
                    www.tilindia.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Page;
