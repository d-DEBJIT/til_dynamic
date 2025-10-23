'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  GraduationCap,
  Users,
  Mail,
  Linkedin,
  Globe
} from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobCategories = [
    { id: 'all', name: 'All Jobs' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'operations', name: 'Operations' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'internship', name: 'Internships' }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Mechanical Design Engineer',
      category: 'engineering',
      location: 'Kolkata',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Design and develop mechanical components for heavy equipment and material handling systems.',
      responsibilities: [
        'Create 3D models and technical drawings for crane components',
        'Perform stress analysis and FEA simulations',
        'Collaborate with manufacturing teams on design for manufacturability',
        'Support prototype development and testing'
      ],
      requirements: [
        'Bachelor\'s degree in Mechanical Engineering',
        'Proficiency in SolidWorks or AutoCAD',
        'Experience with FEA tools',
        'Knowledge of manufacturing processes'
      ],
      postedDate: '2024-07-15'
    },
    {
      id: 2,
      title: 'Production Supervisor',
      category: 'operations',
      location: 'Kharagpur',
      type: 'Full-time',
      experience: '5-7 years',
      description: 'Oversee manufacturing operations and ensure production targets are met with quality standards.',
      responsibilities: [
        'Manage daily production activities',
        'Ensure compliance with safety regulations',
        'Optimize production processes',
        'Train and supervise production staff'
      ],
      requirements: [
        'Diploma/B.Tech in Mechanical/Production Engineering',
        'Experience in heavy equipment manufacturing',
        'Strong leadership skills',
        'Knowledge of lean manufacturing principles'
      ],
      postedDate: '2024-07-10'
    },
    {
      id: 3,
      title: 'HR Business Partner',
      category: 'corporate',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '6-8 years',
      description: 'Partner with business units to implement HR strategies and support employee development.',
      responsibilities: [
        'Act as consultant to managers on HR policies',
        'Drive employee engagement initiatives',
        'Manage performance appraisal process',
        'Support talent acquisition and retention'
      ],
      requirements: [
        'MBA in HR or related field',
        'Experience in manufacturing industry',
        'Strong interpersonal skills',
        'Knowledge of labor laws'
      ],
      postedDate: '2024-07-05'
    },
    {
      id: 4,
      title: 'Electrical Engineering Intern',
      category: 'internship',
      location: 'Kolkata',
      type: 'Internship',
      experience: '0-1 years',
      description: 'Gain hands-on experience in electrical systems for heavy equipment.',
      responsibilities: [
        'Assist in electrical system design',
        'Support testing and validation',
        'Document technical specifications',
        'Participate in troubleshooting'
      ],
      requirements: [
        'Pursuing B.Tech in Electrical Engineering',
        'Basic knowledge of circuit design',
        'Strong analytical skills',
        'Willingness to learn'
      ],
      postedDate: '2024-07-01'
    },
    {
      id: 5,
      title: 'Quality Assurance Manager',
      category: 'operations',
      location: 'Chennai',
      type: 'Full-time',
      experience: '8-10 years',
      description: 'Ensure product quality meets company and regulatory standards.',
      responsibilities: [
        'Develop and implement QA processes',
        'Conduct audits and inspections',
        'Analyze quality metrics',
        'Lead continuous improvement initiatives'
      ],
      requirements: [
        'Bachelor\'s degree in Engineering',
        'Certification in Quality Management',
        'Experience in ISO 9001 implementation',
        'Strong problem-solving skills'
      ],
      postedDate: '2024-06-28'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const toggleJobExpansion = (id: number) => {
    setExpandedJob(prev => (prev === id ? null : id));
  };

  const filteredJobs = jobListings.filter(job =>
    activeTab === 'all' || job.category === activeTab
  );

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/careers-bg.jpg`}
          alt="Careers at TIL"
          className="w-full h-full object-cover"
        />

        {/* Left-to-right overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        {/* Top gradient overlay */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />

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
                TIL <span className="text-[#F1B434]">Careers</span>
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


      {/* Main Content */}
      <section className="pb-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 space-y-12">
          {/* Introductory Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Growing Team</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/2 space-y-6">
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  At TIL, we believe our people are our greatest asset. We're committed to creating an environment where
                  talented individuals can thrive, innovate, and grow professionally while contributing to India's industrial growth.
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Whether you're an experienced professional or just starting your career, we offer opportunities across various
                  domains in engineering, manufacturing, corporate functions, and more.
                </motion.p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Users className="w-8 h-8 text-[#F1B434] mb-3" />, title: "Life @ TIL", link: "#" },
                    { icon: <Briefcase className="w-8 h-8 text-[#F1B434] mb-3" />, title: "Current Vacancies", link: "#vacancies" },
                    { icon: <Users className="w-8 h-8 text-[#F1B434] mb-3" />, title: "Meet Our Team", link: "#" },
                    { icon: <GraduationCap className="w-8 h-8 text-[#F1B434] mb-3" />, title: "Equal Opportunity", link: "#" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all hover:border-[#F1B434]/30"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {item.icon}
                      <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                      <a href={item.link} className="text-sm text-[#F1B434] font-medium hover:underline">KNOW MORE</a>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg self-stretch"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={`${basePath}/innovation-in-action.avif`}                 
                  alt="TIL team working together"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ minHeight: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Innovation in Action</h3>
                  <p className="text-sm">Our team collaborates to build India's future infrastructure</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Job Listings Section */}
          <motion.div
            id="vacancies"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold text-gray-800">Current Openings</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <select
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] transition-all"
                  >
                    {jobCategories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {filteredJobs.length === 0 ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-medium text-gray-600">No current openings in this category</h3>
                <p className="text-gray-500 mt-2">Check back later or explore other categories</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`border border-gray-200 rounded-lg overflow-hidden transition-all ${expandedJob === job.id ? 'shadow-md border-[#F1B434]/50' : 'hover:shadow-sm hover:border-[#F1B434]/30'}`}
                  >
                    <button
                      onClick={() => toggleJobExpansion(job.id)}
                      className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-1">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1 text-[#F1B434]" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1 text-[#F1B434]" />
                              {job.type}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1 text-[#F1B434]" />
                              {job.experience}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">Posted: {formatDate(job.postedDate)}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-[#F1B434] transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedJob === job.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 space-y-6">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Job Description</h4>
                              <p className="text-gray-600">{job.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Responsibilities</h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((item, index) => (
                                    <motion.li
                                      key={index}
                                      className="flex items-start"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.05 }}
                                    >
                                      <div className="flex-shrink-0 h-5 w-5 text-[#F1B434] mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                      </div>
                                      <span className="text-gray-700">{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Requirements</h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((item, index) => (
                                    <motion.li
                                      key={index}
                                      className="flex items-start"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.05 + 0.2 }}
                                    >
                                      <div className="flex-shrink-0 h-5 w-5 text-[#F1B434] mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                      </div>
                                      <span className="text-gray-700">{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                              <motion.button
                                className="inline-flex items-center px-6 py-2.5 bg-[#F1B434] text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:bg-[#E8AC30]"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                APPLY NOW
                                <ArrowRight size={16} className="ml-2" />
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Why Work With Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-xl shadow-lg p-8 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
                <p className="mb-6">
                  At TIL, we don't just build equipment - we build careers. Join a team that values innovation,
                  collaboration and professional growth in the heavy equipment industry.
                </p>
                <motion.button
                  className="inline-flex items-center px-6 py-2.5 bg-white text-[#F1B434] rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:bg-gray-100"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  LEARN ABOUT OUR CULTURE
                  <ArrowRight size={16} className="ml-2" />
                </motion.button>
              </div>
              <div>
                <ul className="space-y-4">
                  {[
                    'Competitive compensation and benefits',
                    'Continuous learning opportunities',
                    'Diverse and inclusive workplace',
                    'Opportunities for career advancement',
                    'Employee wellness programs',
                    'Cutting-edge technology exposure'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start group"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 h-6 w-6 text-white mr-3 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium group-hover:underline decoration-white/50">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h2>
            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-[#F1B434]/10 rounded-lg hover:bg-[#F1B434]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#F1B434]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:careers@tilindia.com" className="text-gray-600 hover:text-[#F1B434] transition-colors">
                    careers@tilindia.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-[#F1B434]/10 rounded-lg hover:bg-[#F1B434]/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-[#F1B434]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">LinkedIn</h3>
                  <a href="https://linkedin.com/company/til-limited" className="text-gray-600 hover:text-[#F1B434] transition-colors">
                    linkedin.com/company/til-limited
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start gap-4 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-[#F1B434]/10 rounded-lg hover:bg-[#F1B434]/20 transition-colors">
                  <Globe className="w-6 h-6 text-[#F1B434]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Website</h3>
                  <a href="https://www.tilindia.com" className="text-gray-600 hover:text-[#F1B434] transition-colors">
                    www.tilindia.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Page;