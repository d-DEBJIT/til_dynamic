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

  // Board Members
  const boardMembers = [
    {
      name: 'Saroj Punhani',
      title: 'Non-Executive Independent Director',
      image: `${basePath}/saroj.png`,
      description: [
        'Saroj Punhani is a distinguished member of the Indian Audit and Accounts Service in the Provincial & Federal government. With an experience spanning over almost four decade, she has successfully navigated complex bureaucratic landscapes, implemented effective policies, and delivered impactful results.',
        'Through her career, she has held key positions with various Ministries of GOI and office of CAG of India . She worked as Central Information Commissioner with the Central Information Commission ,Deputy Comptroller & Auditor General (HR, Training & International Relations )Additional Deputy Comptroller & Auditor General looking after Audit reports , Joint Secretary & Financial Advisor, Department of Post, Ministry of Communications, GOI , Director General (Commercial) looking after audit of PSUs; Executive Vice President (Finance & Support Services) PTC India , Ministry of Power, GOI , First Secretary (Economic Cooperation), Embassy of India, Kathmandu , Nepal, MEA, GOI and Under/Secretary Deputy Secretary (Navy and Coast Guard) Ministry of Defence, GOI.',
        // 'Her expertise in governance, risk management, and compliance makes her invaluable.'
      ],
    },
    {
      name: 'General N.B Singh (Retired)',
      title: 'Non Executive Independent Director',
      image: `${basePath}/GeneralSingh.png`,
      description: [
        "Lt Gen N B Singh, a distinguished veteran, served in the Indian Army for 41 years, reaching the pinnacle as Director General, Electronics and Mechanical Engineering (EME) Corps. He also led the Information Systems Directorate at Army HQs .Specializing in Armoured Fighting Vehicles, he commanded units on Western, Eastern, and Northern borders, overseeing system readiness of Army's hardware from rifles to UAVs. Trained in Germany , General Singh strategized the establishment of assembly line for recapitalization of T72 tanks.",
        "As Military Attache Technical at the Indian Embassy at Moscow , he handled the induction of T90 tanks .As head of the Army’s industrial base at Meerut, he brought to fruition D level reset infrastructure for T-90 tanks, UAVs, rocket systems, missiles and radars. He gave a new direction to the Army’s indigenisation efforts by introducing projects aimed at sub system level indigenisation and technology insertion like the BRDM, BMP mobility upgrade and VT 72 indigenisation.",
        "As DG Information Systems, he was responsible for accelerating the pace of development of Army’s operational and management information systems contributing significantly to availability of inputs for decision support at highest level. General Singh pioneered mission engineering analytics and reliability prediction using big data, significantly transforming Army equipment readiness strategies.",
        "Recognized with Param Vishishtha, Ati Vishishtha, and Vishishtha Seva medals, he is a Fellow of the Institution of Engineers, an SAE Member, and holds a PhD in Knowledge Leadership. As Commandant of Military College of EME ,he played a key role in skill development of over one lakh EME technicians across 44 technical streams, leaving an enduring legacy of excellence and innovation."
      ],
    },
    {
      name: 'Alok Kumar Tripathi',
      title: 'Whole Time Director & President',
      image: `${basePath}/AlokTripathi.png`,
      description: [
        "Alok is an engineering graduate from BMS College of Engineering, Bengaluru, and completed his PGDBM from IMT, Ghaziabad. With over three decades of extensive industry experience, Alok embarked on his professional journey with BEML, Bengaluru, and then went on to serve at HMEED, Thiruvallur. In 1995, Alok joined Tractors India Limited and has since held various leadership positions in Branch Operations, Parts Marketing Operations, Spare Parts and Construction Machine Sales verticals. Prior to assuming his current role as National Product Support Head at the Gainwell Group, he was the Head Territory East for the Construction Business.",
        "His endearing personality, and people skills have helped him drive excellence in customer engagement and deliver measurable impact in terms of profitability for the aftermarket business. Today he wears many hats as he provides strategic guidance to the Product Support team and takes charge of designing, constructing, and leading the product support operations with the ultimate objective of achieving customer loyalty, market share, and profitability.",
        // 'His strategic vision and customer-centric approach have been instrumental in expanding TIL\'s market presence across India.'
      ],
    },
    {
      name: 'Ayan Banerjee',
      title: 'Whole Time Director',
      image: `${basePath}/AyanBanerjee.png`,
      description: [
        "Ayan Banerjee boasts an illustrious career spanning nearly three decades, showcasing extensive expertise in heavy engineering, refractory, electronics, and media across global business landscapes. With a proven track record in startup ventures, he has been pivotal in establishing robust accounting and commercial processes, shaping direct and indirect tax environments, and steering treasury functions. A qualified Chartered Accountant from the prestigious M/S Lovelock & Lewes audit firm, Ayan currently serves as the Group Chief Financial Officer at Gainwell Group, where his dynamic leadership has been instrumental in achieving unparalleled financial success. His accomplishments include optimizing working capital management, overseeing international transfer pricing, ensuring SOX compliance, facilitating seamless merger and acquisition activities, and mitigating different direct and indirect tax cases . Ayan's multifaceted experience and strategic acumen underscore his significant contributions to the financial landscape of the organizations he has served.",
        // 'He has over 30 years of experience in the construction equipment industry, with expertise in sales, marketing, and business development.',
        // 'His strategic vision and customer-centric approach have been instrumental in expanding TIL\'s market presence across India.'
      ],
    },
    {
      name: 'Sunil Kumar Chaturvedi',
      title: 'Chairman and Managing Director',
      image: `${basePath}/SunilChaturvedi.png`,
      description: [
        "Sunil Chaturvedi, a Fellow Chartered Accountant by training has worked for two decades as a member of the Civil Services in Indian Administrative Service (IAS). During these years, he has held various positions in the State Government of West Bengal as well as in different Ministries of Government of India including Director in the Department of Economic Affairs, Ministry of Finance, Private Secretary to the Railways Minister, Govt of India, Director in the Ministry of Heavy Industries and Public Enterprises, Project Director of the National Automotive Testing and R&D Infrastructure Project (NATRiP), and finally, Commissioner and Special Secretary in the Department of Micro and Small Scale Enterprises, Government of West Bengal. He has represented Government of India on various international fora including the United Nations in its Woking Party-29 for harmonization of global automotive standards. After voluntarily retiring from the Government in 2008, Sunil served on the board of Bharat Forge Limited as an Executive Director and Chief Operating Officer for the Capital Goods Business till December 2013.",
        "Sunil joined Gainwell (then known as Tractors India Private Limited) in January 2014 and completed its management buyout in June 2016. Since then, he has been chairing the board of Gainwell. He is a member of various professional and trade bodies within and outside India including Society of Automotive Engineers (SAE), Confederation of Indian Industry (CII), Federation of Indian Chambers of Commerce and Industry (FICCI)and Associated Chambers of Commerce (Assocham), Bengal Chambers of Commerce (BCC). Presently he is also on the Board of renowned companies like Vesuvius India Limited and Assets Care & Reconstruction Enterprise Limited.",
        // 'His strategic vision and customer-centric approach have been instrumental in expanding TIL\'s market presence across India.'
      ],
    },
    {
      name: 'Amit Mukherjee',
      title: 'Non-Executive Independent Director',
      image: `${basePath}/AmitMukherjee.jpg`,
      description: [
        "Amit is one of the co-founders of Unigrow Solutions, a business consulting firm. He brings in a rich and varied corporate experience as a business and functional leader in the field of technology and supply chain. Amit is one of the few who has a very deep understanding of business coupled with his domain knowledge of technology. Amit started his career in Tata Steel where he worked in planning, supply chain and in the technology group. His subsequent stints were with SAP India, Hewlett Packard, Reliance Energy, RPG group as Group CIO and Executive Director.",
        "During his tenure at RPG group, he transitioned from a functional head to a business head and managed the Spencer’s Retail business as Executive Director responsible for four functions namely: Operations, IT, Supply Chain and Projects. His last assignment was as the Chief Operating Officer of Srei Sahaj e-Village Limited, a company formed under the aegis of NEGP for providing online government and consumer facing services to the rural population using ICT.",
        // 'His strategic vision and customer-centric approach have been instrumental in expanding TIL\'s market presence across India.'
      ],
    }
  ];

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
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={`${basePath}/bod-banner.png`}
          alt="Board of Directors"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                Board of <span className="text-[#F1B434]">Directors</span>
              </h1>
              <div className="w-24 h-1.5 bg-[#F1B434] rounded-full mb-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
          <div className="flex items-center space-x-4 text-black mb-4">
            <Link href="/about-us" className="flex items-center space-x-2 hover:text-[#F1B434] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to About</span>
            </Link>
          </div>

          {/* Board of Directors */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Board of Directors</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our board members bring diverse expertise and extensive experience to guide TIL's strategic direction and ensure sustainable growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
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

          {/* Leadership Team */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Management Team</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our executive leadership team drives TIL's vision with expertise, dedication, and a commitment to excellence.
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
