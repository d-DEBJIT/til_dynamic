'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, X } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const BoardOfDirectorsPage = () => {
  const [selectedLeader, setSelectedLeader] = useState<null | {
    name: string;
    title: string;
    description: string[]; // array of paragraphs
    image: string;
    address?: string;
    din?: string;
  }>(null);

  // Leadership Team
  const leadershipTeam = [
    {
      name: 'Pinaki Niyogy',
      title: 'Chief Executive Officer',
      image: `${basePath}/pinaki.jpg`,
      description: [
        "Pinaki Niyogy, has been a senior executive in the manufacturing industry with over 31 years of dedicated service at TIL Limited, where he began as a Management Trainee in 1992. With a profound journey spanning various key roles, Pinaki's expertise evolved from 15 years of impactful Product Development to a decade of steering Manufacturing and Operations for TILs plants. For the past six years, he has been the visionary Chief Technology Officer, concurrently spearheading the Defence Business, and earned the title of Vice President since 2014.",
        "Pinaki has played a pivotal role in numerous product launches, contributing to TIL's success in Defence and Civilian applications. His strategic acumen was instrumental in introducing Grove and Hyster products to the Indian market. His illustrious career underscores a commitment to innovation, operational excellence, and fostering international collaborations, making Pinaki a driving force in TIL's continued growth.",
        "Pinaki holds a Bachelor's in Engineering (Mechanical) from Bengal Engineering College and has received numerous awards, including the Chairman's Award for Leadership in 2010. Pinaki is an active member of industry committees and holds management development credentials from IIM Kolkata and IIM Bangalore."
      ],
    },
    {
      name: 'Arvind Rishi',
      title: 'AVP- Sales & After Market',
      image: `${basePath}/arvind.jpeg`,
      description: [
        "Arvind Rishi is a seasoned professional with more than 40 years of extensive experience in the energy and transportation sectors. He is recognised for his sharp operational insight and deep customer-centric approach, offering TIL a strategic combination of leadership in sales, aftermarket services, and business development.",
        "Arvind has held leadership positions at major companies like Cummins, Greaves, and Gainwell CAT during his professional career. He built a solid base in service excellence and business leadership while at Cummins. His time at Greaves strengthened his expertise in go-to-market strategy and network expansion, while at Gainwell CAT, he played a key role in aligning sales and aftermarket functions for the premium Caterpillar brand across industries such as Coal, Railways, Oil, Defence, Marine, and Mining.",
        "At TIL, Arvind is responsible for nationwide sales and aftermarket operations, focusing on growth, enhancing customer satisfaction, and strengthening TIL’s market presence. His strategic vision strengthens the company’s objectives of merging engineering excellence with top-tier service across the substantial equipment lifecycle.",
        "Arvind holds a Post-Diploma in Automobile Engineering from GNE Ludhiana and a Master’s degree in Materials Science from Pune University. His ability to pivot on both technical and managerial expertise allows him to address multifaceted business challenges.",
        "Arvind Rishi, known for his integrity, operational discipline, and unwavering commitment to value creation, is poised to guide TIL Limited into its next growth phase in the material handling and infrastructure equipment sectors."
      ],
    },
    //ehiuewyudhuiqwbwbd chbwbuceib ewhbhfidueuih
    {
      name: 'Mr. Kanhaiya Gupta',
      title: 'Chief Financial Officer',
      image: `${basePath}/Kanhaiya.png`,
      description: [
        "Kanhaiya Gupta is a seasoned CFO with a diverse skill set, extensive experience in blue-chip companies, and a history of driving financial excellence, business growth, and operational efficiency with a proven track record spanning over 23 years.",
        "An academically driven BCom. Hons. holder he is also a Fellow Chartered Accountant (FCA), Fellow Company Secretary (FCS), and Fellow Cost and Works Accountant (FICWA). In the past he has been Chief Financial Officer (CFO) at Rashmi Metaliks Limited (RML), Deputy CFO (Finance Controller) at ACC Cements (Lafarge-Holcim Group) and has held key positions at IFB Industries Limited and ITC Limited.",
        "Over the year, Kanhaiya has been pivotal in formulating business strategies, managing fund flow, and enhancing the company's bottom line. He has experience is managing a large treasury function, directing annual business plans, and e In this role, he piloted financial and accounting functions, driving strategic planning, financial effectiveness, and operational metrics. From managing accounts for 20+ manufacturing locations and strategic business units to implementing robust SAP environments, and handling M&A and regulatory compliance, Kanhaiya has had been critical to the growth of several large scale businesses, project implementations and mega-expansions.",
        "He is a result-oriented leader with strong analytical skills, effective communication, and inter-personal capabilities and is known for his proactive approach, strong business acumen, and ability to identify potential risks and develop mitigation plans."
      ],
    },
    {
      name: 'Ms. Shamita Nandi',
      title: 'Chief Human Resource Officer',
      image: `${basePath}/Shamita.png`,
      description: [
        "Shamita Nandi is a seasoned Chief HR Officer known for translating business visions into strategic HR initiatives. Shamita comes with more than two decades of experience in building and translating the people agenda across various industries, including manufacturing, e-commerce, shared services, consulting and financial services. She excels in creating Employee Value Proposition, building sustainable Organization Culture, Capability Building, strong Business Partnership, Employee Relations and Compensation & Rewards",
        "She has played a pivotal role in human capital management and has held key positions such as General Manager HR at Texmaco Rail & Engineering Ltd., Kolkata, where she spearheaded the HR function, focusing on efficiency and building a high-performance organisation.",
        "Similarly, as the Head of HR at mjunction services ltd., Shamita contributed significantly to drive employee engagement and innovation while in her role at Barclays Shared Service, Chennai, as HR Business Partner – Vice President, helped her showcase global expertise in driving business strategies as trusted partner of global leaders and enhancing the employer brand.",
        "Apart from these she has also significantly contributed in her other stints with E&Y Kolkata, Timken – Jamshedpur or Hewlett Packard - Bangalore.",
        "With a PG Diploma in Personnel Management from XISS, Shamita possesses a strong foundation in strategic HR planning, leadership, and diversity & wellness initiatives. Her differential competencies include being a diversity and inclusion champion, executive coach, and an empathetic and intuitive leader. Shamita’s career reflects her dedication to building high-performing organizations through innovative HR strategies and transformative leadership."
      ],
    },
    {
      name: 'Chandrani Chatterjee',
      title: 'Company Secretary',
      image: `${basePath}/chandrani.jpg`,
      description: [
        "Ms. Chandrani Chatterjee is a seasoned professional with more than 22 years of experience in company secretary & legal functions. She is an Associate Member of the Institute of Company Secretaries of India (ICSI) and also holds a Post Graduate Diploma in Business Management from the Bhavan’s College of Comm and Mgmt.. Her expertise lies in corporate law, legal and governance, accompanied by exceptional leadership capabilities.",
        "Ms. Chatterjee has wide range of experience in varied Industries viz. Information Technology, Manufacturing, Textile and Education Management. During her past stints, she has worked with various renowned business groups namely, M/s. Usha Martin Technologies Group, M/s. Stewarts and Lloyds of India Ltd, etc.",
      ],
    },
    {
      name: 'Mr. Saikat Bagchi',
      title: 'Head - Supply Chain & Commercial',
      image: `${basePath}/saiket.png`,
      description: [
        "Saikat Bagchi has 34 years of professional experience in Project Management, Project Execution, Supply Chain Management, Vendor Development, New Product Development, Sales & Marketing, Branding & Advertising, Business Strategy, Operations and Sustainable development.",
        "Prior to joining TIL for his second stint, he has worked with Caterpillar India Limited, Cummins India Limited, RSB Transmissions India Limited, AVTEC Limited, Ripley Group. He has done B.E. in Mechanical Engineering from Birla Institute Of Technology, Ranchi & MBA from IIM, Kolkata. Mr. Bagchi has a Doctorate in Occult Science.",
      ],
    },
    {
      name: 'Rishabh P Nair',
      title: 'Head Of Brand, Content & PR',
      image: `${basePath}/Risabh.png`,
      description: [
        "Rishabh P Nair, is a seasoned brand and marketing professional, with a diverse career spanning creative roles across marketing, branding, and content management functions for brands like Citrus Pay (Now PayU), Ratan Tata backed CashKaro.com, Cube Wealth and Grip Invest. With a robust creative marketing and branding background, he has consistently excelled in helping establishing new brands, leaving an indelible mark on the identities of brands he has helped build.",
        "Starting his journey in the world of journalism, Rishabh over time transitioned into advertising, marketing and branding. Notably, he has served as AVP Creative Marketing, Head of Brand Content, and Creative Director for Fintech and e-commerce start-ups in India, contributing to creation and establishment of renowned start-up brands.",
        "Rishabh has spearheaded PR & Branding initiatives across companies, focusing on diverse ecommerce, wealth management and alternative investment products. He has led teams across SEO, Design, Public Relations and Marketing. He holds a Post Graduate Certification in Marketing & Brand Management from MICA and a Bachelor's degree in Journalism and Mass Communication from Guru Gobind Singh Indraprastha University, (GGSIPU) New Delhi. He demonstrates strong work ethic, creative prowess, and brings with him keen insights in terms of branding and marketing strategies."
      ],
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
                      <img
                          src={`${basePath}/meet_our_team_new.png`}
                          alt="Our Team"
                          className="w-full h-full object-cover"
                      />
      
                      {/* Enhanced Gradient Overlay - Top and Bottom */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-10" />
      
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
                                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-sm font-bold tracking-tight mb-2 mt-8"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: 0.2, duration: 0.8 }}
                                  >
      
                                  </motion.span>
      
                                  <motion.h1
                                      className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.3, duration: 0.8 }}
                                  >
                                      The Core <span className="text-[#F1B434]">Team</span>
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
                                      Build your career with a pioneer in India's heavy equipment industry.
                                  </motion.p>
                              </motion.div>
                          </div>
                      </div>
                  </div>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">

          {/* Leadership Team */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our leaders and Go-getters who are driven by our values and vision…The Team that brings positive energy to our place of work and values to our stakeholders.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedLeader(member)}
                >
                  <div className="p-6 text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#F1B434] mb-4 mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `${basePath}/placeholder_avatar.jpg`;
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-[#F1B434] font-medium mb-3">{member.title}</p>
                    <div className="text-gray-600 text-sm line-clamp-3">
                      {member.description.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                    <button className="mt-4 text-[#F1B434] font-medium text-sm hover:underline">
                      Read More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leader Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-6 md:p-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Left: Leader Image */}
                  <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#F1B434] mx-auto md:mx-0">
                    <img
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `${basePath}/placeholder_avatar.jpg`;
                      }}
                    />
                  </div>

                  {/* Right: Name, Title, Description */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedLeader.name}</h3>
                    <p className="text-[#F1B434] font-medium text-lg md:text-xl mb-4">{selectedLeader.title}</p>
                    <div className="space-y-4">
                      {selectedLeader.description.map((para, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Optional: Address / DIN */}
                {selectedLeader.address && (
                  <div className="mt-6 text-gray-700 text-sm md:text-base">
                    <p>
                      <strong>Address:</strong> {selectedLeader.address}
                    </p>
                    <p>
                      <strong>DIN No:</strong> {selectedLeader.din}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BoardOfDirectorsPage;




