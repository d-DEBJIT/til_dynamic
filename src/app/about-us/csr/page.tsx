'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users, Heart, Globe, Shield } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const CSRPage = () => {
    const contentData = {
        title: 'Building a better world',
        // description: 'Our commitment to social and environmental responsibility',
        achievements: [
            {
                title: 'Social Responsibility of TIL',
                organization: 'As a responsible corporate citizen, TIL is engaged in a range of CSR initiatives aimed at the betterment of society, community and environment – reaching out to the underprivileged, the differently abled, the old and infirm – not only by way of ongoing welfare initiatives and one-off events, but also by responding swiftly to humanitarian crises.',
            }
        ],
        // initiatives: [
        //     {
        //         title: 'Community Development',
        //         description: 'Empowering local communities through education, healthcare, and skill development programs.',
        //         icon: <Users className="w-8 h-8" />,
        //         color: 'from-blue-500 to-blue-600'
        //     },
        //     {
        //         title: 'Environmental Sustainability',
        //         description: 'Implementing eco-friendly practices and reducing our carbon footprint across all operations.',
        //         icon: <Globe className="w-8 h-8" />,
        //         color: 'from-green-500 to-green-600'
        //     },
        //     {
        //         title: 'Employee Welfare',
        //         description: 'Creating a safe, inclusive, and empowering workplace for all our employees.',
        //         icon: <Shield className="w-8 h-8" />,
        //         color: 'from-orange-500 to-orange-600'
        //     },
        //     {
        //         title: 'Ethical Business Practices',
        //         description: 'Maintaining transparency and integrity in all our business dealings.',
        //         icon: <Heart className="w-8 h-8" />,
        //         color: 'from-purple-500 to-purple-600'
        //     }
        // ]
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative h-60 w-full overflow-hidden">
                <img
                    src={`${basePath}/corporate-social-responsibility.jpg`}
                    alt="Corporate Social Responsibility"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                                Building <span className="text-[#F1B434]">a better World</span>
                            </h1>
                            <div className="w-24 h-1.5 bg-[#F1B434] rounded-full mb-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-12">
                <div className="flex items-center space-x-4 text-black mb-4">
                                            <Link href="/about" className="flex items-center space-x-2 hover:text-[#F1B434] transition-colors">
                                                <ArrowLeft className="w-4 h-4" />
                                                <span>Back to About</span>
                                            </Link>
                                        </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
                >
                    {/* Content Header */}
                    <div className="bg-gradient-to-r from-[#f1b434] to-[#f1b434] text-white p-8 text-center">
                        <h2 className="text-3xl font-bold mb-2">Social Responsibility of TIL</h2>
                    </div>


                    {/* Main Achievement */}
                    <div className="p-8">
                        {contentData.achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-1">
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            {achievement.organization}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact CTA */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mt-12"
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Want to partner with us on CSR initiatives?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Join us in making a difference. Contact our CSR team to explore 
                            partnership opportunities and collaborative projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/contact-us" passHref>
                                <motion.button
                                    className="px-6 py-3 bg-[#f1b434] text-white font-medium rounded-lg hover:bg-[#d9a122] transition-colors shadow-md"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact CSR Team
                                </motion.button>
                            </Link>
                            <motion.button
                                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download CSR Report
                            </motion.button>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </div>
    );
};

export default CSRPage;