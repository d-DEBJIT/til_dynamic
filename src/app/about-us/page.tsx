'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Factory,
    Users,
    Clock,
    HeartHandshake,
    Trophy,
    Globe,
    Shield
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const AboutOverviewPage = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const menuItems = [
        {
            id: 'corporate',
            title: 'Corporate Profile',
            icon: <Factory className="w-6 h-6" />,
            description: 'Learn about our company structure and profile',
            image: `${basePath}/corporate.jpg`,
            path: '/about/corporate'
        },
        {
            id: 'board-of-directors',
            title: 'Board of Directors',
            icon: <Users className="w-6 h-6" />,
            description: 'Meet our leadership and governance team',
            image: `${basePath}/leadership.jpg`,
            path: '/about/board-of-directors'
        },
        {
            id: 'milestones',
            title: 'Milestones',
            icon: <Clock className="w-6 h-6" />,
            description: 'Explore our journey through decades',
            image: `${basePath}/milestone.png`,
            path: '/about/milestones'
        },
        {
            id: 'vision-values',
            title: 'Vision and Values',
            icon: <HeartHandshake className="w-6 h-6" />,
            description: 'Our mission, vision and core values',
            image: `${basePath}/vision.jpg`,
            path: '/about/vision-values'
        },
        {
            id: 'csr',
            title: 'Corporate Social Responsibility',
            icon: <Trophy className="w-6 h-6" />,
            description: 'Our commitment to society and environment',
            image: `${basePath}/csr.jpg`,
            path: '/about/csr'
        },
        {
            id: 'code-of-conduct',
            title: 'Code of Conduct',
            icon: <Shield className="w-6 h-6" />,
            description: 'Our ethical business practices',
            image: `${basePath}/code_of_conduct.png`,
            path: '/about/code-of-conduct'
        },
        {
            id: 'facility',
            title: 'Facility',
            icon: <Globe className="w-6 h-6" />,
            description: 'Our manufacturing plants and offices',
            image: `${basePath}/facilities.jpg`,
            path: '/about/facility'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/about-us-bg.png`}
                    alt="About TIL"
                    className="w-full h-full object-cover object-[10%_bottom] scale-105"
                    loading="eager"
                />

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/50 to-transparent z-10" />

                {/* Content Container */}
                <div className="absolute inset-0 z-20 flex items-center pt-8">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
                        <motion.div
                            className="max-w-2xl"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
                        >
                            <motion.span
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-yellow-300 text-sm font-bold tracking-wider mb-2 mt-8 uppercase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                {/* ABOUT US */}
                            </motion.span>

                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                TIL <span className="text-[#F1B434] drop-shadow-lg">Limited</span>
                            </motion.h1>

                            <motion.div
                                className="w-32 h-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-6 shadow-lg"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />

                            <motion.p
                                className="text-xl text-gray-100 max-w-xl leading-relaxed font-medium tracking-wide"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                Pioneering Indian industrial equipment manufacturing since 1944.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
                    {/* Overview Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-2xl p-10 mb-16 border border-gray-100"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4 tracking-tight">
                                        <span className="text-[#F1B434] drop-shadow-sm">Technology.</span>{' '}
                                        <span className="text-gray-900">Innovation. Leadership.</span>
                                    </h2>
                                    <p className="text-gray-900 text-lg font-semibold mb-6 tracking-wide">
                                        Setting new standards in design and manufacturing excellence
                                    </p>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-base mb-4 tracking-wide">
                                    Partnering India's Infrastructure growth since 1944, TIL Limited is one of the leading providers of a wide range of infrastructure equipment that represent some of the finest in global technology. Based out of Kolkata, West Bengal, we are engaged in the design, manufacture and marketing of a comprehensive range of material handling, lifting, port equipment and road building solutions – duly supported by an integrated after-sales support that is geared to enhancing customer satisfaction. With a pan-India network of branch offices and recognized as a market leader in Mobile Cranes and Reach Stackers, TIL is a name that is synonymous with reliability, productivity and efficiency…
                                </p>
                                <Link 
                                    href="/about-us/corporate" 
                                    className="text-[#F1B434] font-semibold hover:text-[#e0a42d] transition-colors duration-300 text-lg tracking-wide inline-block"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                                <img
                                    src={`${basePath}/about-us.jpg`}
                                    alt="TIL Overview"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default AboutOverviewPage;