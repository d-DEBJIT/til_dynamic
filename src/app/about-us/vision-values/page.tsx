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
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative h-60 w-full overflow-hidden">
                <img
                    src={`${basePath}/vision_values.png`}
                    alt="Vision and Values"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                                What We <span className="text-[#F1B434]">Stand For</span>
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
                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
                        {/* Left side — Image + Title */}
                        <div className="flex items-center md:items-start gap-4 w-full md:w-1/3">
                            <div className="col-md-4">
                                {/* Replace SVG with local image */}
                                <img
                                    src={`${basePath}/vision-123.png`}
                                    alt="Vision Icon"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        {/* Right side — Text */}
                        <div className="md:w-2/3">
                            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                                {contentData.vision.content}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-16"
                >
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
                        {/* Left side — Text */}
                        <div className="md:w-2/3">
                            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                                {contentData.mission.content}
                            </p>
                        </div>
                        {/* Right side — Image + Title */}
                        <div className="flex items-center md:items-start gap-4 w-full md:w-1/3">
                            <div className="col-md-4">
                                {/* Replace SVG with local image */}
                                <img
                                    src={`${basePath}/mission-123.png`}
                                    alt="mission Icon"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                        <img
                            src={`${basePath}/values.png`}
                            alt="mission Icon"
                            className="w-72 h-72 object-contain mx-auto"
                        />


                        {/* Values Grid - 2 columns */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {contentData.values.values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                                >
                                    <img
                                        src={value.image}
                                        className="w-24 h-24 object-contain mx-auto"
                                        loading="lazy"
                                    />
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                
                {/* Impact Section */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-gradient-to-r from-[#f1b434] to-[#f1b434] rounded-2xl p-8 text-white mb-12"
                >
                    <h2 className="text-2xl font-bold text-center mb-8">Living Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">80+</div>
                            <p className="font-medium">Years of Ethical Business</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
                            <p className="font-medium">Employees Living Our Values</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                            <p className="font-medium">Countries Trust Our Values</p>
                        </div>
                    </div>
                </motion.div> */}

                {/* Contact CTA */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Want to learn more about our values?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Our team is ready to share how our values drive everything we do
                            and how they can benefit your partnership with us.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/contact-us" passHref>
                                <motion.button
                                    className="px-6 py-3 bg-[#f1b434] text-white font-medium rounded-lg hover:bg-[#d9a122] transition-colors shadow-md"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                            <motion.button
                                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Culture Deck
                            </motion.button>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </div>
    );
};

export default VisionValuesPage;