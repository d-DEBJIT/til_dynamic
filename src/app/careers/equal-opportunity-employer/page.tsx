'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  X
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/equal_opportunity.jpg`}
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
                Equal Voices, <span className="text-[#F1B434]">Equal Choices</span>
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
                Where every voice matters and every talent thrives
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
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Image Left */}
              <motion.div
                className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg self-stretch"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={`${basePath}/equal-opportunity.jpg`}                 
                  alt="TIL team working together"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ minHeight: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Equal Opportunities for All</h3>
                  <p className="text-sm">Where every individual's potential is recognized and valued</p>
                </div>
              </motion.div>

              {/* Content Right */}
              <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Equal Opportunity Employer</h2>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  TIL is an equal opportunity employer - diversity and inclusion are an integral part of our people policy and we do not promote or support any discrimination based on race, gender, color, religion, nationality, age and ability. The company provides a safe work environment for all its employees free from discrimination on any ground including harassment. We believe that if employees get the right environment to flourish, they become an integral part of your business and add value all the way.
                </motion.p>
                <h4 className="text-xl font-bold text-gray-800 mb-6">Our Pledge</h4>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                    <span className="font-bold">To</span> promote gender parity and equal opportunity in the workplace.
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                    <span className="font-bold">To</span> encourage all to achieve their optimum potential, thereby bringing about a positive change in the organization that is beneficial to all employees.
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                    <span className="font-bold">To</span> have an inclusive and supportive work environment.
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                    <span className="font-bold">To</span> respect the uniqueness of each individual.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Page;