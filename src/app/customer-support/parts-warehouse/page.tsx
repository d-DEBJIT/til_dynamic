'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
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
                                Genuine Parts for{' '}
                                <span className="text-[#F1B434]">
                                    Enhanced Value of Operations
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
                                Genuine parts and efficient support for maximum machine performance.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="pb-16 bg-[#f8f9fa]">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 space-y-16">
                    {/* Customer Support Offerings Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="pt-12 flex flex-col lg:flex-row items-center gap-10"
                    >
                        {/* Left Column - Image */}
                        <motion.div
                            className="w-full lg:w-1/3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <img
                                src={`${basePath}/parts-warehouse.png`}
                                alt="Customer Support"
                                className="rounded-2xl shadow-lg w-full object-contain h-full"
                            />
                        </motion.div>

                        {/* Right Column - Text */}
                        <div className="w-full lg:w-2/3 space-y-4">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Parts & Warehouse
                            </h2>

                            <p className="text-gray-700 leading-relaxed">
                                To ensure the longevity and productivity of your machines, it is crucial to invest in high-quality parts. At TIL, we offer genuine parts that not only lower maintenance and repair costs but also enhance the value of your operations. Whether you need general parts like filters, oils, and fluids or undercarriage components, TIL is here to get the job done with the right parts. Our parts guarantee safety, proper functioning, reliability, and a long lifespan for your equipment. With the help of our knowledgeable product specialists, you can rest assured that you will receive exactly what you need to get your equipment back on track.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                Located in Dankuni on National Highway near Kolkata, TIL's new ERP enabled warehouse provides extensive support for all product models. Equipped with a Warehouse Management System, our team at TIL can achieve higher levels of efficiency, profitability, and availability, ultimately leading to customer satisfaction. By implementing warehouse practices that focus on preventing shipping errors, reducing spoilage, and maintaining precise inventory control in real time, we effectively manage the overall orders received from our valued customers.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>
        </>
    );
};

export default Page;
