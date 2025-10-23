'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, MapPin, Building, Cpu, Users, Truck, Shield, Award } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const FacilityPage = () => {
    const facilities = [
        // {
        //     name: 'Kolkata Headquarters',
        //     type: 'Corporate Office & Main Facility',
        //     image: `${basePath}/kol.jpeg`,
        //     location: 'Kolkata, West Bengal',
        //     area: '50,000 sq. ft.',
        //     features: [
        //         'Corporate Headquarters',
        //         'R&D Center',
        //         'Training Academy',
        //         'Central Warehouse'
        //     ],
        //     description: 'Our flagship facility housing corporate offices, research and development center, and main administrative functions.'
        // },
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
            description: `
        <p>
            TIL’s Kamarhati factory started operations in 1962 – the first and only purpose-built Mobile Crane Factory in India.
            The plant is equipped with fully modern machine shop, fabrication and assembly shop and test bed.
            The state-of-the-art fabrication shop has automatic welding machines and processes that conform to ISO 3834, AWSD 14.3, etc.
            Other than TIL’s own indigenous range of products, the facility also manufactures products under technical collaboration with Grove, a part of Manitowoc Group.
            TIL’s plant at Kamarhati, Kolkata, is located approximately 5 km from the Netaji Subhas Chandra Bose International Airport, and about 16 km and 100 km from the maritime ports at Kolkata and Haldia respectively.
        </p>
        <p>    
            The track record of TIL’s Kamarhati plant shows many <b>“Firsts”</b> in India.
        </p>
    `,
            highlights: [
                'The First Rough Terrain Crane',
                'The First Truck Crane',
                'The First 100 Tonne Crane',
                'The First Hydraulic Crane',
                'The First Self Propelled Diesel Electric Crane'
            ]
        },

        // {
        //     name: 'Regional Offices Network',
        //     type: 'Sales & Service Centers',
        //     image: `${basePath}/regional-offices.jpg`,
        //     location: 'Pan-India Presence',
        //     area: 'Multiple Locations',
        //     features: [
        //         'Sales & Marketing',
        //         'After-Sales Service',
        //         'Spare Parts Distribution',
        //         'Customer Training'
        //     ],
        //     description: 'Strategic network of regional offices across India ensuring prompt service and support to our customers nationwide.'
        // }
    ];

    // const certifications = [
    //     {
    //         name: 'ISO 9001:2015',
    //         description: 'Quality Management System Certification',
    //         icon: <Award className="w-6 h-6" />
    //     },
    //     {
    //         name: 'DIN EN ISO 3834-2',
    //         description: 'Quality Requirements for Fusion Welding',
    //         icon: <Shield className="w-6 h-6" />
    //     },
    //     {
    //         name: 'ISO 14001:2015',
    //         description: 'Environmental Management System',
    //         icon: <Shield className="w-6 h-6" />
    //     },
    //     {
    //         name: 'OHSAS 18001',
    //         description: 'Occupational Health & Safety',
    //         icon: <Shield className="w-6 h-6" />
    //     }
    // ];

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

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-60 w-full overflow-hidden">
                <img
                    src={`${basePath}/facilities.jpg`}
                    alt="Facilities"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />

                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                                Precision <span className="text-[#F1B434]">Meets Innovation</span>
                            </h1>
                            <div className="w-24 h-1.5 bg-[#F1B434] rounded-full mb-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
                    <div className="flex items-center space-x-4 text-black mb-4">
                        <Link href="/about-us" className="flex items-center space-x-2 hover:text-[#F1B434] transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to About</span>
                        </Link>
                    </div>
                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Facilities</h2>
                        
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                            TIL has two factories in Eastern India, located at Kamarhati (Kolkata) and Changual (Kharagpur) in West Bengal – representing cutting-edge technology in material handling and road building solutions. In areas of design excellence, our dedicated team of engineers and R&D experts work constantly at the R&D center equipped with the latest software and cutting edge technologies to enhance design excellence.
                        </p>
                    </motion.div>

                    {/* Facilities Grid */}
                    <div className="space-y-12 mb-16">
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={facility.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-start`}
                            >
                                {/* Facility Image */}
                                <div className="lg:w-1/2">
                                    <div className="rounded-2xl overflow-hidden shadow-xl">
                                        <img
                                            src={facility.image}
                                            alt={facility.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Facility Content */}
                                <div className="lg:w-1/2">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Building className="w-6 h-6 text-[#F1B434]" />
                                        <h3 className="text-2xl font-bold text-gray-800">{facility.name}</h3>
                                    </div>

                                    {/* Description with bold support */}
                                    <div
                                        className="text-gray-600 mb-6 leading-relaxed space-y-4"
                                        dangerouslySetInnerHTML={{ __html: facility.description }}
                                    />
                                    {facility.videoUrl && (
                                        <div className="my-6 rounded-2xl overflow-hidden shadow-lg">
                                            <iframe
                                                width="100%"
                                                height="400"
                                                src={facility.videoUrl}
                                                title={`${facility.name} Video`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-80 rounded-2xl"
                                            ></iframe>
                                        </div>
                                    )}
                                    {/* Highlight Cards (if available) */}
                                    {facility.highlights && facility.highlights.length > 0 && (
                                        <div className="flex flex-wrap gap-4 mt-4">
                                            {facility.highlights.map((highlight, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#F1B434] border border-[#F1B434]/30 
                           rounded-full shadow-sm font-medium text-gray-800 whitespace-nowrap 
                           hover:bg-[#F1B434]/10 transition"
                                                >
                                                    {highlight}
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* Capabilities */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-gray-50 rounded-2xl p-8 mb-16"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Manufacturing Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {capabilities.map((capability, index) => (
                                <motion.div
                                    key={capability.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    className="bg-white rounded-xl p-6 text-center shadow-md"
                                >
                                    <div className="w-12 h-12 bg-[#F1B434] rounded-lg flex items-center justify-center mx-auto mb-4">
                                        {React.cloneElement(capability.icon, { className: "w-6 h-6 text-white" })}
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">{capability.title}</h4>
                                    <p className="text-gray-600 text-sm">{capability.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div> */}

                    {/* Certifications */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Quality Certifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {certifications.map((certification, index) => (
                                <motion.div
                                    key={certification.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow"
                                >
                                    <div className="w-12 h-12 bg-[#F1B434] rounded-full flex items-center justify-center mx-auto mb-4">
                                        {React.cloneElement(certification.icon, { className: "w-6 h-6 text-white" })}
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">{certification.name}</h4>
                                    <p className="text-gray-600 text-sm">{certification.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div> */}

                    {/* Stats */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="mt-16 bg-gradient-to-r from-[#F1B434] to-yellow-400 rounded-2xl p-8 text-white text-center"
                    >
                        <h3 className="text-2xl font-bold mb-8">Facility Statistics</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-3xl font-bold mb-2">2</div>
                                <div className="text-sm">Manufacturing Plants</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">350,000+</div>
                                <div className="text-sm">Sq. Ft. Total Area</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">50+</div>
                                <div className="text-sm">Years of Operation</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold mb-2">4</div>
                                <div className="text-sm">Quality Certifications</div>
                            </div>
                        </div>
                    </motion.div> */}
                </div>
            </section>
        </>
    );
};

export default FacilityPage;