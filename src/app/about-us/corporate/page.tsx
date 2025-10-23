'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
      {/* Hero Section */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={`${basePath}/corporate-profile-banner.png`}
          alt="Corporate Profile"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                Corporate <span className="text-[#F1B434]">Profile</span>
              </h1>
              <div className="w-24 h-1.5 bg-[#F1B434] rounded-full mb-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
          {/* Back Link */}
          <div className="flex items-center space-x-4 text-black mb-4">
            <Link
              href="/about-us"
              className="flex items-center space-x-2 hover:text-[#F1B434] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to About</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={contentData.image}
                  alt="TIL Corporate"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                {contentData.content.map((paragraph, index) => {
                  // Special case for first paragraph with "here" hyperlink
                  if (index === 0) {
                    return (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-gray-700 leading-relaxed text-base"
                      >
                        TIL Limited was formerly known as Tractors India Limited. Today TIL is now expanded and the company is simply known as TIL Limited. The company has adopted new values after becoming a part of the Gainwell Group. You can learn more about the values{' '}
                        <Link
                          href="/about-us/vision-values"
                          className="text-gray-700 font-bold underline decoration-gray-700 hover:decoration-[#F1B434] hover:text-[#F1B434]"
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
                      className="text-gray-700 leading-relaxed text-base"
                    >
                      {paragraph}
                    </motion.p>
                  );
                })}
              </div>
            </motion.div>

            
          </div>

          {/* Products on Offer Section */}
          <div className="flex flex-col items-center mt-16">
            <div className="max-w-2xl text-center">
              <h2 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-[#F1B434] mb-4 leading-tight">
                Products on <span className="text-black">offer include</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#F1B434] rounded-full mx-auto mb-8" />
            </div>

            {/* Highlight Cards */}
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
              {contentData.highlights.map((item, index) => (
                <Link
                  key={index}
                  href={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-6 py-3 bg-[#F1B434] border border-[#F1B434]/30 
                    rounded-full shadow-sm font-medium text-gray-800 whitespace-nowrap
                    hover:bg-[#F1B434]/10 transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Image + Text Section */}
          <div className="mt-16 max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              

              {/* Left Side - Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-gray-700 text-base leading-relaxed">
                  Our unwavering commitment lies in the pursuit of establishing a sustainable institution and securing a sustainable future for all stakeholders.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  The ISO 9001 certification signifies our unwavering dedication to upholding the utmost quality standards. The numerous CSR initiatives TIL undertakes are aimed at the betterment of society, community and environment.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  At TIL, quality is engineered to stringent and predetermined process parameters. Engineers, workmen, marketers and even vendors, all committed to a shared singular purpose…Customer Satisfaction. The unyielding commitment of the entire TIL team is reflected in the ISO: 9001 certification from the Bureau Veritas Quality International.
                </p>
              </motion.div>
              {/* Right Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src={`${basePath}/iso.jpg`}
                  alt="Highlight Image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateProfilePage;
