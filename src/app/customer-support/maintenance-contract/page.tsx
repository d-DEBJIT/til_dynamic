'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
    const [showPDF, setShowPDF] = useState(false);
    const brochureUrl = `https://www.tilindia.in/tilindia/assets/pdf/CSA_brochure.pdf`; // change path if needed

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/Maintanance-contract-banner.png`}
                    alt="Maintanance-contract-banner"
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
                                All Round Support For{' '}
                                <span className="text-[#F1B434]">
                                    Higher Machine Productivity
                                </span>
                            </motion.h1>
                            <motion.div
                                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            />
                            <motion.p
                                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                Ensuring seamless operation and maximum uptime for your equipment.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="pb-16 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 space-y-16">
                    {/* Intro Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="pt-12 text-center"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Maintenance Contract
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            TIL's range of customer support agreements and Service Contracts
                            guarantees an enhanced level of machine productivity. Through
                            prompt identification of machine issues, you will experience a
                            reduced frequency of repairs and unplanned periods of inactivity.
                            In essence, this will result in seamless operation and a sense of
                            tranquillity.
                        </p>
                    </motion.div>

                    {/* Customer Support Offerings Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="pt-12 flex flex-col lg:flex-row items-center gap-10"
                    >
                        {/* Left Column - Bulleted Text */}
                        <div className="w-full lg:w-2/3 space-y-4">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Our customer support offerings include:
                            </h2>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                                <li>Pre-Purchase Consultancy & Equipment Investment Analysis</li>
                                <li>Quick Parts Availability</li>
                                <li>
                                    Preventive Maintenance Through Annual Service Contracts
                                </li>
                                <li>Prompt On-Site Service</li>
                                <li>Complete Equipment Rebuild</li>
                                <li>All-India Network</li>
                                <li>Qualified Engineers on Call</li>
                                <li>
                                    Operation and Maintenance Training for Customers
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Image */}
                        <motion.div
                            className="w-full lg:w-1/3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <img
                                src={`${basePath}/kharagpur.jpg`}
                                alt="Customer Support"
                                className="rounded-2xl shadow-lg w-full object-contain h-full"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Download Brochure Section */}
                    <div
                        className="relative w-full h-[300px] mt-16 rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: `url('${basePath}/Support-Brochure.png')`,
                        }}
                    >
                        {/* Optional overlay for better readability */}
                        <div className="absolute inset-0 bg-black/10" />

                        {/* Centered content */}
                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl font-semibold mb-6 text-white">
                                Download Customer Support Brochure
                            </h3>

                            <div className="flex justify-center">
                                <button
                                    onClick={() => setShowPDF(true)}
                                    className="flex items-center gap-2 bg-white text-gray-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#F1B434] transition-all"
                                >
                                    <Download className="w-5 h-5" />
                                    Download Brochure
                                </button>
                            </div>
                        </div>
                    </div>



                    {/* PDF Viewer Overlay */}
                    {showPDF && (
                        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4">
                            <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-4xl h-[80vh] shadow-2xl">
                                <iframe src={brochureUrl} className="w-full h-full" />
                            </div>
                            <button
                                onClick={() => setShowPDF(false)}
                                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Page;
