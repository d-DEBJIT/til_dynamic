'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, MapPin, Building, Cpu, Users, Truck, Shield, Award } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const FacilityPage = () => {
    const facilities = [
        {
            name: 'Kharagpur Manufacturing Plant',
            type: 'ERP-Enabled Factory',
            image: `${basePath}/kharagpur-facility.jpg`,
            location: 'Kharagpur, West Bengal',
            area: '150,000 sq. ft.',
            features: [
                'ERP-Enabled Operations',
                'ISO 9001:2015 Certified',
                'Advanced Assembly Lines',
                'Component Manufacturing'
            ],
            description: "The state-of-the-art Changual facility at Kharagpur, West Bengal, rolls out loaded container handling reach Stackers under licence from Hyster Yale Group. The facility also manufactures other specialized products. The factory is designed and built to facilitate smooth and accelerated flow of materials based on concepts of Demand Flow and Lean Principles, resulting in efficient and safe working condition. The factory has a built up area of 58000 sq.m with a shop floor area of 21600 sq.m. and is equidistant from the state capital, Kolkata and Jamshedpur and likewise from the two maritime ports at Kolkata and Haldia.",
            videoUrl: "https://www.youtube.com/embed/W9_nGYlRMs0"
        },
        {
            name: 'Kamarhati Manufacturing Plant',
            type: 'Mobile Crane Manufacturing',
            image: `${basePath}/kamarhati-facility.jpg`,
            location: 'Kolkata, West Bengal',
            area: '200,000 sq. ft.',
            features: [
                'Dedicated Crane Manufacturing',
                'ISO 9001:2015 Certified',
                'Testing & Quality Control',
                'Spare Parts Production'
            ],
            description: "TIL's Kamarhati factory started operations in 1962 – the first and only purpose-built Mobile Crane Factory in India. The plant is equipped with fully modern machine shop, fabrication and assembly shop and test bed. The state-of-the-art fabrication shop has automatic welding machines and processes that conform to ISO 3834, AWSD 14.3, etc. Other than TIL's own indigenous range of products, the facility also manufactures products under technical collaboration with Grove, a part of Manitowoc Group. TIL's plant at Kamarhati, Kolkata, is located approximately 5 km from the Netaji Subhas Chandra Bose International Airport, and about 16 km and 100 km from the maritime ports at Kolkata and Haldia respectively. The track record of TIL's Kamarhati plant shows many Firsts in India.",
            highlights: [
                'The First Rough Terrain Crane',
                'The First Truck Crane',
                'The First 100 Tonne Crane',
                'The First Hydraulic Crane',
                'The First Self Propelled Diesel Electric Crane'
            ]
        },
    ];

    const capabilities = [
        {
            icon: <Cpu className="w-8 h-8" />,
            title: 'Advanced Manufacturing',
            description: 'State-of-the-art CNC machines, robotic welding, and automated assembly lines'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Skilled Workforce',
            description: 'Highly trained engineers and technicians with decades of experience'
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: 'Supply Chain Excellence',
            description: 'Robust supply chain management ensuring timely delivery and quality'
        },
        {
            icon: <Building className="w-8 h-8" />,
            title: 'R&D Innovation',
            description: 'Dedicated research and development center driving product innovation'
        }
    ];

    // Fixed TypeScript variants with proper typing
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    const slideInLeft: any = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    const slideInRight: any = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <motion.img
                    src={`${basePath}/facilities.jpg`}
                    alt="Facilities"
                    className="w-full h-full object-cover"
                    loading="eager"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/50 to-transparent z-10" />

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
                                {/* OUR INFRASTRUCTURE */}
                            </motion.span>

                            <motion.h1
                                className="text-4xl md:text-5xl base:text-[3.5rem] font-bold text-white mb-6 leading-tight tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Precision <span className="text-[#F1B434] drop-shadow-lg">Meets Innovation</span>
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
                                State-of-the-art manufacturing facilities driving excellence
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center space-x-4 text-gray-600 mb-8"
                    >
                        <Link
                            href="/about-us"
                            className="flex items-center space-x-2 hover:text-[#F1B434] transition-colors duration-300 font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to About</span>
                        </Link>
                    </motion.div>

                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-2xl p-10 mb-16 border border-gray-100"
                    >
                        <div className="text-center max-w-4xl mx-auto">
                            <motion.h2
                                className="text-3xl font-bold mb-4 tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-[#F1B434] drop-shadow-sm">World-Class</span>{' '}
                                <span className="text-gray-900">Manufacturing Facilities</span>
                            </motion.h2>
                            <motion.div
                                className="w-24 h-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mx-auto shadow-lg mb-6"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />
                            <motion.p
                                className="text-gray-600 text-lg leading-relaxed tracking-wide"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                TIL has two factories in Eastern India, located at Kamarhati (Kolkata) and Changual (Kharagpur) in West Bengal – representing cutting-edge technology in material handling and road building solutions. In areas of design excellence, our dedicated team of engineers and R&D experts work constantly at the R&D center equipped with the latest software and cutting edge technologies to enhance design excellence.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Facilities Grid */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="space-y-20 mb-20"
                    >
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={facility.name}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}
                            >
                                {/* Facility Image/Video */}
                                <motion.div
                                    className="lg:w-1/2"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <motion.div
                                        className="relative rounded-2xl overflow-hidden shadow-2xl"
                                        variants={index % 2 === 0 ? slideInLeft : slideInRight}
                                    >
                                        <img
                                            src={facility.image}
                                            alt={facility.name}
                                            className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors duration-300" />
                                    </motion.div>

                                    {/* Video Embed */}
                                    {facility.videoUrl && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            whileInView={{ opacity: 1, height: 'auto' }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                            viewport={{ once: true }}
                                            className="mt-6 rounded-2xl overflow-hidden shadow-2xl"
                                        >
                                            <iframe
                                                width="100%"
                                                height="400"
                                                src={facility.videoUrl}
                                                title={`${facility.name} Video`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-80 rounded-2xl"
                                            />
                                        </motion.div>
                                    )}
                                </motion.div>

                                {/* Facility Content */}
                                <motion.div
                                    className="lg:w-1/2"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <motion.div
                                        className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                                        variants={index % 2 === 0 ? slideInRight : slideInLeft}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[#F1B434] to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                                                <Building className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-800 tracking-tight">{facility.name}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <MapPin className="w-4 h-4 text-[#F1B434]" />
                                                    <span className="text-gray-600 text-sm">{facility.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="text-gray-700 mb-8 leading-relaxed tracking-wide text-base">
                                            {facility.description}
                                        </div>

                                        {/* Features */}
                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            {facility.features.map((feature, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center gap-2 text-sm text-gray-600"
                                                >
                                                    <div className="w-2 h-2 bg-[#F1B434] rounded-full" />
                                                    {feature}
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Highlights */}
                                        {facility.highlights && facility.highlights.length > 0 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6 }}
                                                viewport={{ once: true }}
                                                className="border-t border-gray-200 pt-6"
                                            >
                                                <h4 className="font-semibold text-gray-800 mb-4 text-lg">Key Achievements:</h4>
                                                <div className="flex flex-wrap gap-3">
                                                    {facility.highlights.map((highlight, i) => (
                                                        <motion.span
                                                            key={i}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.4, delay: i * 0.1 }}
                                                            viewport={{ once: true }}
                                                            className="px-4 py-2 bg-gradient-to-r from-[#F1B434]/10 to-yellow-400/10 border border-[#F1B434]/20 
                                                            rounded-full text-sm font-medium text-gray-700 whitespace-nowrap
                                                            hover:shadow-lg hover:border-[#F1B434]/30 transition-all duration-300"
                                                        >
                                                            {highlight}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Capabilities Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-2xl p-10 mb-16 border border-gray-100"
                    >
                        <div className="text-center mb-12">
                            <motion.h2
                                className="text-3xl font-bold mb-4 tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-[#F1B434] drop-shadow-sm">Manufacturing</span>{' '}
                                <span className="text-gray-900">Capabilities</span>
                            </motion.h2>
                            <motion.div
                                className="w-24 h-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mx-auto shadow-lg mb-6"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {capabilities.map((capability, index) => (
                                <motion.div
                                    key={capability.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <motion.div
                                        className="w-16 h-16 bg-gradient-to-br from-[#F1B434] to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        {React.cloneElement(capability.icon, { className: "w-8 h-8 text-white" })}
                                    </motion.div>
                                    <h4 className="font-bold text-gray-800 mb-3 text-lg tracking-tight">{capability.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed tracking-wide">{capability.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
 
                </div>
            </section>
        </>
    );
};

export default FacilityPage;