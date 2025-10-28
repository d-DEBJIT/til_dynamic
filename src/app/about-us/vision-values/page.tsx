'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const VisionValuesPage = () => {
    const contentData = {
        title: 'Vision and Values',
        description: 'Our guiding principles and aspirations for the future',
        vision: {
            title: "OUR VISION",
            content: "To be a globally trusted engineering solutions provider that adds sustainable value to the lives of people and the planet"
        },
        mission: {
            title: "OUR MISSION",
            content: "To deliver customer delight globally through engineering and service solutions, while living our values and building a safe, sustainable and engaging place to work."
        },
        values: {
            title: "Our Values",
            values: [
                {
                    image: `${basePath}/item-1.png`,
                    title: 'Integrity: We Are Ethically Unwavering',
                    description: "Integrity stands for honesty, strong morals, and a commitment to being truthful, transparent in one's actions and maintaining high ethical standards."
                },
                {
                    image: `${basePath}/item-2.png`,
                    title: 'Excellence: We Pursure Greatness',
                    description: "Excellence stands for being passionate about offering the highest standards of quality and striving for superior outcomes."
                },
                {
                    image: `${basePath}/item-3.png`,
                    title: 'Entrepreneurship: We Embrace Risks As Opportunities',
                    description: "Entrepreneurship stands for innovation, taking calculated risks, and proactively seeking opportunities to drive growth and change."
                },
                {
                    image: `${basePath}/item-4.png`,
                    title: 'Caring: We Are, Because We Care',
                    description: "Caring stands for providing a safe, healthy, empowering, inclusive and sustainable place for people."
                },
                {
                    image: `${basePath}/item-5.png`,
                    title: 'Collaboration: We Achieve Together',
                    description: "Collaboration stands for combining our skills and perspectives to achieve extraordinary results."
                },               
                {
                    image: `${basePath}/item-6.png`,
                    title: 'Customer-Centricity: We Work To Delight',
                    description: "Customer centricity stands for creating a positive customer experience through world class products and services that add value to their business."
                }
            ]
        }
    };

    return (
        <>
            {/* Hero Section - Mobile Responsive */}
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/vision_values.png`}
                    alt="Vision and Values"
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
                                className="inline-block text-[#F1B434] text-sm font-bold tracking-wider mb-2 mt-4 sm:mt-8 uppercase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                style={{ fontFamily: 'Arial, sans-serif' }}
                            >
                                {/* OUR FOUNDATION */}
                            </motion.span>

                            <motion.h1
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                style={{ fontFamily: 'Arial, sans-serif' }}
                            >
                                What We <span className="text-[#F1B434] drop-shadow-lg">Stand For</span>
                            </motion.h1>

                            <motion.div
                                className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 md:h-2 bg-[#F1B434] rounded-full mb-3 sm:mb-4 md:mb-6 shadow-lg"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />

                            <motion.p
                                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-xl leading-relaxed font-medium tracking-wide"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                Our guiding principles and aspirations for the future
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

                    {/* Vision Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 sm:mb-16 md:mb-20"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16">
                            {/* Image - Top on mobile, Left on desktop */}
                            <motion.div
                                initial={{ opacity: 0, x: 200, scale: 0.7 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ 
                                    duration: 1, 
                                    ease: [0.22, 1, 0.36, 1],
                                    type: "spring",
                                    stiffness: 50
                                }}
                                className="flex-shrink-0 w-full lg:w-2/5 order-1 lg:order-1"
                            >
                                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transform hover:scale-[1.03] transition-transform duration-700">
                                    <img
                                        src={`${basePath}/vision-123.png`}
                                        alt="Vision Icon"
                                        className="w-full h-full object-contain p-6 sm:p-8 md:p-10 lg:p-12"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>

                            {/* Content - Bottom on mobile, Right on desktop */}
                            <motion.div
                                initial={{ opacity: 0, x: -200, scale: 0.7 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ 
                                    duration: 1, 
                                    ease: [0.22, 1, 0.36, 1],
                                    type: "spring",
                                    stiffness: 50,
                                    delay: 0.3
                                }}
                                className="flex-1 order-2 lg:order-2"
                            >
                                <motion.p
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4 sm:mb-6 md:mb-8 text-center lg:text-left"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.8, 
                                        delay: 0.6,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    style={{ fontFamily: 'Arial, sans-serif' }}
                                >
                                    {contentData.vision.content}
                                </motion.p>
                                <motion.div
                                    className="w-24 sm:w-28 md:w-32 h-1 sm:h-1.5 md:h-2 bg-[#F1B434] rounded-full shadow-xl mx-auto lg:mx-0"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ 
                                        duration: 1, 
                                        delay: 0.9,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12 sm:mb-16 md:mb-20"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16">
                            {/* Content - Top on mobile, Left on desktop */}
                            <motion.div
                                initial={{ opacity: 0, x: -200, scale: 0.7 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ 
                                    duration: 1, 
                                    ease: [0.22, 1, 0.36, 1],
                                    type: "spring",
                                    stiffness: 50
                                }}
                                className="flex-1 order-2 lg:order-1"
                            >
                                <motion.p
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4 sm:mb-6 md:mb-8 text-center lg:text-left"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.8, 
                                        delay: 0.6,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    style={{ fontFamily: 'Arial, sans-serif' }}
                                >
                                    {contentData.mission.content}
                                </motion.p>
                                <motion.div
                                    className="w-24 sm:w-28 md:w-32 h-1 sm:h-1.5 md:h-2 bg-[#F1B434] rounded-full shadow-xl mx-auto lg:mx-0"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ 
                                        duration: 1, 
                                        delay: 0.9,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                />
                            </motion.div>

                            {/* Image - Bottom on mobile, Right on desktop */}
                            <motion.div
                                initial={{ opacity: 0, x: 200, scale: 0.7 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ 
                                    duration: 1, 
                                    ease: [0.22, 1, 0.36, 1],
                                    type: "spring",
                                    stiffness: 50,
                                    delay: 0.3
                                }}
                                className="flex-shrink-0 w-full lg:w-2/5 order-1 lg:order-2"
                            >
                                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transform hover:scale-[1.03] transition-transform duration-700">
                                    <img
                                        src={`${basePath}/mission-123.png`}
                                        alt="Mission Icon"
                                        className="w-full h-full object-contain p-6 sm:p-8 md:p-10 lg:p-12"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Values Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* Values Header Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ 
                                duration: 1, 
                                ease: [0.22, 1, 0.36, 1],
                                type: "spring",
                                stiffness: 60
                            }}
                            className="text-center mb-8 sm:mb-12 md:mb-16"
                        >
                            <img
                                src={`${basePath}/values.png`}
                                alt="Our Values"
                                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain mx-auto transform hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                        </motion.div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                            {contentData.values.values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 60, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ 
                                        duration: 0.8, 
                                        delay: 0.6 + (index * 0.15),
                                        ease: [0.22, 1, 0.36, 1],
                                        type: "spring",
                                        stiffness: 70
                                    }}
                                    className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg sm:shadow-xl md:shadow-2xl border border-gray-200 hover:shadow-xl sm:hover:shadow-2xl md:hover:shadow-3xl transform hover:scale-[1.02] sm:hover:scale-[1.03] md:hover:scale-[1.05] hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 group"
                                >
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ 
                                            duration: 0.8, 
                                            delay: 0.8 + (index * 0.15),
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-2 sm:p-3 md:p-4 lg:p-5 shadow-inner group-hover:shadow-lg transition-all duration-500"
                                    >
                                        <img
                                            src={value.image}
                                            alt={value.title}
                                            className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </motion.div>
                                    <motion.h3
                                        className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 text-center leading-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            duration: 0.6, 
                                            delay: 1 + (index * 0.15),
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        style={{ fontFamily: 'Arial, sans-serif' }}
                                    >
                                        {value.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            duration: 0.6, 
                                            delay: 1.2 + (index * 0.15),
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        style={{ fontFamily: 'Arial, sans-serif' }}
                                    >
                                        {value.description}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default VisionValuesPage;