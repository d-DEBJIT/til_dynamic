'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Factory, Users, Clock, HeartHandshake, Trophy, Globe, Shield } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const CorporateProfilePage = () => {
  const contentData = {
    title: 'Corporate Profile',
    description:
      'TIL Limited was formerly known as Tractors India Limited. Today TIL is now expanded and the company is simply known as TIL Limited.',
    content: [
      "TIL Limited was formerly known as Tractors India Limited. Today TIL is now expanded and the company is simply known as TIL Limited. The company has adopted new values after becoming a part of the Gainwell Group. You can learn more about the values here.",
      "TIL Limited has been a valuable partner in India's infrastructure development since 1944, and is reckoned for offering a diverse range of infrastructure equipment representing some of the finest in global technology. Starting from 2024, TIL Limited has seamlessly integrated itself into Indocrest Defence Services Private Limited (IDSPL), a subsidiary of Gainwell Group.",
      "We are engaged in the design, manufacturing, and marketing of a comprehensive selection of material handling and port equipment specifically tailored for the Indian market. These products are supported by a seamless after-sales service. TIL has earned a reputation as a market leader in mobile cranes and reach stackers, with our offerings known for their unwavering reliability, productivity, and efficiency. The company's values of integrity, transparency, accountability, leadership, teamwork, knowledge, and customer orientation serve as the guiding principles that shape and define our everyday actions.",
      "Headquartered in Kolkata, we have regional offices in major cities across India, ensuring a widespread presence. The company operates two factories in Eastern India, including a state-of-the-art, purpose-built mobile crane manufacturing facility in Kamarhati, Kolkata - the sole of its kind in the country. Additionally, TIL boasts an ERP-enabled factory in Kharagpur. Both factories hold certifications under ISO 9001:2015 and DIN EN ISO 3834-2 international quality management system standards.",
      "We have established global alliances with Grove Worldwide and Manitowoc Crane Group of the USA, as well as Hyster® (a division of Hyster-Yale Group, Inc.) of the USA."
    ],
    image: `${basePath}/about-us.png`,
    highlights: [
      'Rough Terrain Cranes',
      'Truck Cranes',
      'Pick n Carry Cranes',
      'Grove Range',
      'Crawler Cranes',
      'ReachStackers',
      'Forklift Trucks',
      'Boom Lifts',
      'Articulating Crane'
    ]
  };

  return (
    <>
      {/* Hero Section - Mobile Responsive */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/corporate-profile-banner.png`}
          alt="Corporate Profile"
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
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Corporate <span className="text-[#F1B434] drop-shadow-lg">Profile</span>
              </motion.h1>

              <motion.div
                className="w-24 sm:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-4 sm:mb-6 shadow-lg"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed font-medium tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Learn about our company structure and profile
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-6 sm:p-8 md:p-10 mb-12 sm:mb-16 border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 order-2 lg:order-1"
              >
                <img
                  src={contentData.image}
                  alt="TIL Corporate"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6 order-1 lg:order-2"
              >
                {contentData.content.map((paragraph, index) => {
                  // Special case for first paragraph with "here" hyperlink
                  if (index === 0) {
                    return (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-gray-700 leading-relaxed text-sm sm:text-base tracking-wide"
                      >
                        TIL Limited was formerly known as Tractors India Limited. Today TIL is now expanded and the company is simply known as TIL Limited. The company has adopted new values after becoming a part of the Gainwell Group. You can learn more about the values{' '}
                        <Link
                          href="/about-us/vision-values"
                          className="text-[#F1B434] font-semibold hover:text-[#e0a42d] transition-colors duration-300"
                        >
                          here
                        </Link>
                        .
                      </motion.p>
                    );
                  }

                  // Other paragraphs
                  return (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-gray-700 leading-relaxed text-sm sm:text-base tracking-wide"
                    >
                      {paragraph}
                    </motion.p>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Products on Offer Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-6 sm:p-8 md:p-10 mb-12 sm:mb-16 border border-gray-100"
          >
            <div className="flex flex-col items-center">
              <div className="max-w-2xl text-center mb-8 sm:mb-12">
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-[#F1B434] drop-shadow-sm">Products</span>{' '}
                  <span className="text-gray-900">on offer include</span>
                </motion.h2>
                <motion.div
                  className="w-20 sm:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mx-auto shadow-lg"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Highlight Cards */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {contentData.highlights.map((item, index) => (
                  <Link
                    key={index}
                    href={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-[#F1B434] border border-[#F1B434]/30 
                      rounded-full shadow-lg font-medium text-gray-800 whitespace-nowrap
                      hover:shadow-xl hover:scale-105 transition-all duration-300 transform
                      text-xs sm:text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Commitment Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
              {/* Left Side - Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6 order-2 lg:order-1"
              >
                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Our <span className="text-[#F1B434]">Commitment</span> to Excellence
                </motion.h3>

                <motion.p
                  className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Our unwavering commitment lies in the pursuit of establishing a sustainable institution and securing a sustainable future for all stakeholders.
                </motion.p>

                <motion.p
                  className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  The ISO 9001 certification signifies our unwavering dedication to upholding the utmost quality standards. The numerous CSR initiatives TIL undertakes are aimed at the betterment of society, community and environment.
                </motion.p>

                <motion.p
                  className="text-gray-700 text-sm sm:text-base leading-relaxed tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  At TIL, quality is engineered to stringent and predetermined process parameters. Engineers, workmen, marketers and even vendors, all committed to a shared singular purpose…Customer Satisfaction. The unyielding commitment of the entire TIL team is reflected in the ISO: 9001 certification from the Bureau Veritas Quality International.
                </motion.p>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full min-h-64 sm:min-h-80 md:min-h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 order-1 lg:order-2"
              >
                <img
                  src={`${basePath}/iso.jpg`}
                  alt="ISO Certification"
                  className="w-full h-full object-contain object-center bg-white"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CorporateProfilePage;