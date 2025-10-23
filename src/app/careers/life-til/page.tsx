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
          src={`${basePath}/life_til.jpg`}
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
                Life @ <span className="text-[#F1B434]">TIL</span>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our People, Our Strength</h2>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-1/2 space-y-6">
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Employees are the key driving force of TIL's 80 years of legacy. Over the years TIL has created a culture that enables people to produce their best work every day - work that changes lives for the better. Whatever sphere of work we do - we remain focused on serving our customers. Maximization of human potential is the cornerstone of TIL. To this end TIL contributes positively to the quality of life of its employees with growth opportunities - creating a cohesive and collaborative work environment. The culture of people development is a continuous process at TIL aimed at attracting, retaining and rewarding the best talents in the industry. We encourage a performance-oriented culture and ensure a safe, healthy and clean working environment.
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  At TIL employee development is a continuous process catalyzed by various training and developmental initiatives with an objective to hone talent, improve capabilities and enhance productivity. We look for people who are adaptable, self-motivated, passionate, hardworking and are team players. We strive to enhance competencies for every individual which translates into overall organizational growth. We provide adequate scope to all our people to hone their functional and behavioral capabilities through various training and developmental interventions.
                </motion.p>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  TIL also undertakes various employee engagement activities round the year such as 'Tilotsav', Foundation Day, TIL Caring Day, Annual Recreation Club Social and other celebrations that include celebrating Women’s Day, Christmas and New Year to foster better employee bonding - making TIL a happy and productive workplace.
                </motion.p>
              </div>

              <motion.div
                className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg self-stretch"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={`${basePath}/life_til2.jpg`}                 
                  alt="TIL team working together"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ minHeight: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Empowering Our Workforce</h3>
                  <p className="text-sm">Fostering a Culture of Growth, Collaboration, and Celebration</p>
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