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

                {/* Dark Gradient Overlay from Top */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent z-10" />

                {/* Existing Darker Gradient Overlay from Left to Right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

                {/* Content Container */}
                <div className="absolute inset-0 z-20 flex items-center pt-6">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
                        <motion.div
                            className="max-w-2xl"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
                        >
                            <motion.span
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-yellow-300 text-sm font-bold tracking-tight mb-2 mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                {/* ABOUT US */}
                            </motion.span>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                TIL <span className="text-[#F1B434]">Limited</span>
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
                                Pioneering Indian industrial equipment manufacturing since 1944.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
                    {/* Overview Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl shadow-lg p-8 mb-12"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">
                                    <span className="text-[#F1B434]">Technology.</span>{' '}
                                    <span className="text-gray-800">Innovation. Leadership.</span>
                                </h2>
                                <p className="text-gray-900 mb-6">
                                    Setting new standards in design and manufacturing excellence
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Partnering India’s Infrastructure growth since 1944, TIL Limited is one of the leading providers of a wide range of infrastructure equipment that represent some of the finest in global technology. Based out of Kolkata, West Bengal, we are engaged in the design, manufacture and marketing of a comprehensive range of material handling, lifting, port equipment and road building solutions – duly supported by an integrated after-sales support that is geared to enhancing customer satisfaction. With a pan-India network of branch offices and recognized as a market leader in Mobile Cranes and Reach Stackers, TIL is a name that is synonymous with reliability, productivity and efficiency…
                                </p>
                                <Link href="/about/corporate" passHref>
                                    <motion.button
                                        className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#e0a42d] transition-colors shadow-md"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Read More
                                    </motion.button>
                                </Link>
                            </div>
                            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={`${basePath}/about-us.jpg`}
                                    alt="TIL Overview"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation Grid */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Explore About TIL</h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                            Discover our corporate profile, leadership, milestones, and values that have shaped our journey over the decades.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <Link href={item.path} passHref>
                                        <motion.div
                                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full cursor-pointer group"
                                            whileHover={{ y: -5 }}
                                            onMouseEnter={() => setHoveredItem(item.id)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <div className="flex items-center gap-3 text-white">
                                                        <div className="p-2 bg-[#F1B434] rounded-lg">
                                                            {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                                                        </div>
                                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-gray-600 text-sm">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div> */}

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-gradient-to-r from-[#f1b434] to-[#f1b434] rounded-xl shadow-lg p-8 text-white mt-12"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">75+</div>
                                <div className="text-sm font-medium">Years of Experience</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">700+</div>
                                <div className="text-sm font-medium">Employees</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">10+</div>
                                <div className="text-sm font-medium">Countries Served</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">3K+</div>
                                <div className="text-sm font-medium">Active Machines</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default AboutOverviewPage;