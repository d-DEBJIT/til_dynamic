'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const CSRPage = () => {
    const contentData = {
        title: 'Building a better world',
        achievements: [
            {
                title: 'Social Responsibility of TIL',
                organization: 'As a responsible corporate citizen, TIL is engaged in a range of CSR initiatives aimed at the betterment of society, community and environment – reaching out to the underprivileged, the differently abled, the old and infirm – not only by way of ongoing welfare initiatives and one-off events, but also by responding swiftly to humanitarian crises.',
            }
        ],
    };

    return (
        <>
            {/* Hero Section - Mobile Responsive */}
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/corporate-social-responsibility.jpg`}
                    alt="Corporate Social Responsibility"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/50 to-transparent z-10" />

                {/* Content Container */}
                <div className="absolute inset-0 z-20 flex items-center pt-4 sm:pt-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 xl:px-20 w-full">
                        <motion.div
                            className="max-w-2xl"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
                        >
                            <motion.span
                                className="inline-block text-[#F1B434] text-sm font-bold mb-2 mt-4 sm:mt-8 uppercase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                style={{ fontFamily: 'Arial, sans-serif' }}
                            >
                                {/* CORPORATE RESPONSIBILITY */}
                            </motion.span>

                            <motion.h1
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                style={{ fontFamily: 'Arial, sans-serif' }}
                            >
                                Building <span className="text-[#F1B434] drop-shadow-lg">a better World</span>
                            </motion.h1>

                            <motion.div
                                className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 md:h-2 bg-[#F1B434] rounded-full mb-3 sm:mb-4 md:mb-6 shadow-lg"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />

                            <motion.p
                                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-xl leading-relaxed font-medium"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                style={{ fontFamily: 'Arial, sans-serif' }}
                            >
                                Our commitment to social and environmental responsibility
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 xl:px-20">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center space-x-2 sm:space-x-4 text-gray-600 mb-6 sm:mb-8"
                    >
                        <Link 
                            href="/about-us" 
                            className="flex items-center space-x-1 sm:space-x-2 hover:text-[#F1B434] transition-colors duration-300 font-medium text-sm sm:text-base"
                            style={{ fontFamily: 'Arial, sans-serif' }}
                        >
                            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Back to About</span>
                        </Link>
                    </motion.div>

                    {/* Main Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl border border-gray-100 overflow-hidden"
                    >
                        {/* Content Header */}
                        <div className="bg-[#F1B434] p-6 sm:p-8 md:p-10 text-center">
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                style={{ fontFamily: 'Arial, sans-serif' }}
                            >
                                Social Responsibility of TIL
                            </motion.h2>
                            <motion.div
                                className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 md:h-2 bg-white/30 rounded-full mx-auto shadow-lg"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>

                        {/* Main Achievement */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                            {contentData.achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
                                >
                                    <div className="flex items-start">
                                        <div className="flex-1">
                                            <motion.p
                                                className="text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                                style={{ fontFamily: 'Arial, sans-serif' }}
                                            >
                                                {achievement.organization}
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default CSRPage;