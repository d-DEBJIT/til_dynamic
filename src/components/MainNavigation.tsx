'use client'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronDown,
  Eye,
  ChevronRight,
  Calendar,
  Construction,
  Ship,
  Truck,
  Wrench,
  Mountain,
  Anchor,
  Building,
  Fuel,
  Train,
  Shield,
  Zap,
  MapPin,
  Phone,
  Download,
  Star,
  Package,
  Settings,
  Award,
  Users,
  Briefcase,
  MessageSquare,
  Mail,
  Linkedin,
  MessageCircle,
  FileText,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import router from 'next/router';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
type Point = { name: string; description: string; image?: string };

type Contact = {
  label: string;
  value: string;
  icon: React.ReactNode;
  description: string;
};

function hasContacts(submenu: any): submenu is { contacts: Contact[] } {
  return Array.isArray(submenu?.contacts);
}


function hasPoints(submenu: any): submenu is { points: Point[] } {
  return Array.isArray(submenu?.points);
}

type Member = {
  name: string;
  title: string;
  image: string;
};

type SubmenuWithMembers = {
  members: Member[];
};

function hasMembers(submenu: any): submenu is SubmenuWithMembers {
  return Array.isArray(submenu?.members);
}


type AboutMedia = {
  image: string;
  title: string;
  description: string;
  cta: string;
  features: string[];
};

// Helper function for kebab-case links
function kebab(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const AboutMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('company');
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const router = useRouter();

  const primaryCategories = [
    {
      id: 'company',
      name: 'Corporate Profile',
      icon: <Building className="w-4 h-4" />,
      description: 'Our heritage and leadership in construction equipment',
      link: '/about-us/corporate'
    },
    {
      id: 'leadership',
      name: 'Board of Directors',
      icon: <Users className="w-4 h-4" />,
      description: 'Meet our executive team and board of directors',
      link: '/about-us/board-of-directors'
    },
    {
      id: 'milestones',
      name: 'Milestones',
      icon: <Shield className="w-4 h-4" />,
      description: 'Key achievements and historical moments',
      link: '/about-us/milestones'
    },
    {
      id: 'values',
      name: 'Values & Vision',
      icon: <Star className="w-4 h-4" />,
      description: 'Our mission, vision, and core values',
      link: '/about-us/vision-values'
    },
    {
      id: 'corporate',
      name: 'Corporate Social Responsibility',
      icon: <Shield className="w-4 h-4" />,
      description: 'Environmental responsibility and green initiatives',
      link: '/about-us/csr'
    },
    {
      id: 'codeofconduct',
      name: 'Code of Conduct',
      icon: <Shield className="w-4 h-4" />,
      description: 'Our ethical guidelines and business practices',
      link: '/about-us/code-of-conduct'
    },
    {
      id: 'facilities',
      name: 'Facilities',
      icon: <Shield className="w-4 h-4" />,
      description: 'Our manufacturing plants and offices',
      link: '/about-us/facility'
    }
  ];

  const aboutContentData = {
    company: {
      title: 'Corporate Profile',
      description: 'TIL Limited was formerly known as Tractors India Limited. Today TIL is now expanded and the company is simply known as TIL Limited. The company has adopted new values after becoming a part of the Gainwell Group.',
      image: `${basePath}/about-us.png`,
      link: '/about-us/corporate',
      features: ['80+ Years Experience', 'Global Presence', 'ISO Certified']
    },
    leadership: {
      title: 'Board of Directors',
      description: 'Our board members bring diverse expertise and extensive experience to guide TIL\'s strategic direction and ensure sustainable growth. Meet our leadership and governance team.',
      image: `${basePath}/leadership.jpg`,
      link: '/about-us/board-of-directors',
      features: ['Industry Veterans', 'Global Experience', 'Strategic Guidance']
    },
    milestones: {
      title: 'Our Journey',
      description: 'Key milestones that define our growth and success in the industry. Explore our historical achievements and future aspirations.',
      image: `${basePath}/milestone.png`,
      link: '/about-us/milestones',
      features: ['80+ Years', '100+ Innovations', 'Global Reach']
    },
    values: {
      title: 'Our Values',
      description: 'Committed to excellence, innovation, and sustainable growth. Discover our mission, vision, and the core principles that guide our actions.',
      image: `${basePath}/vision.jpg`,
      link: '/about-us/vision-values',
      features: ['Customer First', 'Innovation', 'Sustainability']
    },
    corporate: {
      title: 'Sustainability',
      description: 'Leading the way in environmentally responsible manufacturing and operations. Our commitment to corporate social responsibility and community development.',
      image: `${basePath}/social.jpg`,
      link: '/about-us/csr',
      features: ['Carbon Neutral', 'Green Tech', 'Eco-Friendly']
    },
    codeofconduct: {
      title: 'Code of Conduct',
      description: 'Our commitment to ethical business practices and corporate governance. These guidelines outline the expected behavior and ethical standards for our organization.',
      image: `${basePath}/code_of_conduct.png`,
      link: '/about-us/code-of-conduct',
      features: ['Ethical Standards', 'Compliance', 'Transparency']
    },
    facilities: {
      title: 'Our Facilities',
      description: 'World-class manufacturing plants and offices supporting our operations. Discover our state-of-the-art infrastructure and production capabilities.',
      image: `${basePath}/facilities.jpg`,
      link: '/about-us/facility',
      features: ['Modern Infrastructure', 'Advanced Equipment', 'Sustainable Design']
    }
  };

  const currentContent = aboutContentData[activeCategory as keyof typeof aboutContentData];

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-white/100 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-white/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        router.push(category.link);
                        onClose();
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <div>
                            <span className="text-black font-medium block">
                              {category.name}
                            </span>
                            <span className="text-xs text-gray-600">
                              {category.description}
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Simplified Mega Menu */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-4 border-r border-r-gray-700/50 border-l-2 border-l-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      About Us
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                          ${activeCategory === category.id
                              ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => {
                            setActiveCategory(category.id);
                          }}
                          onClick={() => {
                            router.push(category.link);
                            onClose();
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-black'
                                }`}>
                                {category.name}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {category.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Content Description with Image */}
                <div className="lg:col-span-8 border-r-2 border-r-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Information'}
                    </h3>
                  </div>
                  <div className="p-6">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col lg:flex-row gap-6 items-start"
                    >
                      {/* Image Section */}
                      <div className="lg:w-2/5 w-full">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={currentContent.image}
                            alt={currentContent.title}
                            className="w-full h-48 lg:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = `${basePath}/placeholder_avatar.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-3/5 w-full space-y-4">
                        <h4 className="text-2xl font-bold text-gray-800 tracking-tight">
                          {currentContent.title}
                        </h4>

                        <p className="text-gray-700 leading-relaxed text-base">
                          {currentContent.description}
                        </p>

                        {/* Features */}
                        {currentContent.features && (
                          <div className="space-y-2">
                            <h5 className="font-semibold text-[#fbb53d] text-sm">Key Highlights:</h5>
                            <div className="flex flex-wrap gap-2">
                              {currentContent.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 text-[#fbb53d] text-xs font-medium"
                                >
                                  <Award className="w-3 h-3 mr-1" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Read More Button */}
                        <motion.button
                          onClick={() => {
                            router.push(currentContent.link);
                            onClose();
                          }}
                          className="flex items-center space-x-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] hover:from-[#e0a42d] hover:to-[#e0a42d] text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-4 h-4" />
                          <span>Read More</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/[^a-z0-9\-]/g, ''); // Remove characters that are not letters, numbers, or hyphens
}


const ProductsMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('all-products');

  const [activeProduct, setActiveProduct] = useState<{
    name: string;
    description: string;
    image: string;
    features: string[];
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const primaryCategories = [
    {
      id: 'all-products',
      name: 'TIL Range',
      icon: <Package className="w-4 h-4" />,
      description: 'Reliable lifting and handling for Indian industries',
      link: `/category`
    },
    {
      id: 'new-arrivals',
      name: 'Manitowoc Range',
      icon: <Zap className="w-4 h-4" />,
      description: 'Heavy-duty cranes with global performance',
      link: `/category`
    },
    {
      id: 'best-sellers',
      name: 'Hyster TIL Range',
      icon: <Star className="w-4 h-4" />,
      description: 'Reliable forklifts and handling systems from Hyster-TIL',
      link: `/category`
    },
    {
      id: 'services',
      name: 'Snorkel Range',
      icon: <Settings className="w-4 h-4" />,
      description: 'Aerial work platforms and access equipment by Snorkel',
      link: `/category`
    }
  ];

  const productsSubmenuData = {
    'all-products': {
      products: [
        {
          name: 'Truck Cranes',
          description: 'High-capacity cranes ideal for tall construction sites',
          image: `${basePath}/truck-cranes.jpeg`,
          features: ['Telescopic Boom', 'High Lifting Range', 'On-road Mobility'],
          link: `/category/${createSlug('Truck Cranes')}`
        },
        {
          name: 'Pick n Carry Cranes',
          description: 'Mobile cranes suitable for fast on-site operations',
          image: `${basePath}/pick-n-carry.png`,
          features: ['360° Mobility', 'Operator Cabin Comfort', 'Quick Load Handling'],
          link: `/category/${createSlug('Pick n Carry Cranes')}`
        },
        {
          name: 'Rough Terrain Cranes',
          description: 'Designed for challenging job site conditions',
          image: `${basePath}/rough-terrain.png`,
          features: ['All-Terrain Tyres', 'Four-Wheel Steering', 'Hydraulic Outriggers'],
          link: `/category/${createSlug('Rough Terrain Cranes')}`
        },
        {
          name: 'Articulating Cranes',
          description: 'Flexible, jointed cranes ideal for tight spaces',
          image: `${basePath}/articulating.jpg`,
          features: ['Knuckle Boom Design', 'Compact Operation', 'Remote Control'],
          link: `/category/${createSlug('Articulating Crane')}`
        }
      ],
      media: {
        image: `${basePath}/articulating.jpg`,
        title: 'TIL Product Range',
        description: 'Comprehensive lifting solutions for all your construction needs.',
        features: ['Durable Construction', 'Advanced Safety', 'Easy Maintenance']
      }
    },
    'new-arrivals': {
      products: [
        {
          name: 'Grove Range',
          description: 'Smart lifting solutions engineered for precision and durability',
          image: `${basePath}/grove-range.png`,
          features: ['Advanced Safety Systems', 'Optimized Weight Distribution', 'Digital Load Monitoring'],
          link: `/category/${createSlug('Grove Range')}`
        },
        {
          name: 'Crawler Cranes',
          description: 'Robust tracked cranes for heavy-duty lifting',
          image: `${basePath}/crawler-cranes.png`,
          features: ['Track Mobility', 'High Stability', 'Heavy Lifting Capacity'],
          link: `/category/${createSlug('Crawler Cranes')}`
        }
      ],
      media: {
        image: `${basePath}/crawler-cranes.png`,
        title: 'Latest Innovations',
        description: 'Cutting-edge technology and smart features for enhanced productivity.',
        features: ['Smart Telematics', 'Eco-Friendly Powertrain', 'IoT Integration']
      }
    },
    'best-sellers': {
      products: [
        {
          name: 'Forklift Trucks',
          description: 'Efficient material handling for warehouses and logistics',
          image: `${basePath}/forklift.png`,
          features: ['Precision Steering', 'High Load Capacity', 'Compact Turning Radius'],
          link: `/category/${createSlug('Forklift Trucks')}`
        },
        {
          name: 'Reachstackers',
          description: 'Container handling equipment for ports and yards',
          image: `${basePath}/reachstackers.png`,
          features: ['Extended Reach', 'Twistlock Compatibility', 'High Stack Efficiency'],
          link: `/category/${createSlug('Reachstackers')}`
        }
      ],
      media: {
        image: `${basePath}/forklift.png`,
        title: 'Proven Performers',
        description: 'Most trusted equipment by businesses across India.',
        features: ['Uptime Guarantee', 'Nationwide Service', 'Spare Part Availability']
      }
    },
    'services': {
      products: [
        {
          name: 'Boom Lifts',
          description: 'Elevated work platforms for maintenance and construction',
          image: `${basePath}/boomlifts.png`,
          features: ['Articulating Arm', 'Vertical and Horizontal Reach', 'Safe Cage Platform'],
          link: `/category/${createSlug('Boom Lifts')}`
        }
      ],
      media: {
        image: `${basePath}/boomlifts.png`,
        title: 'Complete Support',
        description: 'Comprehensive after-sales support and services.',
        features: ['Certified Engineers', 'Rapid On-Site Service', 'OEM Spare Assurance']
      }
    }
  };
  const currentSubmenu = productsSubmenuData[activeCategory as keyof typeof productsSubmenuData];
  const activeMedia = activeProduct || currentSubmenu?.media;

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-white/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-white/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        router.push(category.link);
                        onClose();
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <div>
                            <span className="text-black font-medium block">
                              {category.name}
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Full Mega Menu */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-3 border-r border-r-gray-700/50 border-l-2 border-l-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Product Categories
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full ${activeCategory === category.id
                            ? 'bg-[#F1B434] ring-0'
                            : 'hover:bg-yellow-500/10 ring-0'
                            }`}

                          onClick={() => {
                            setActiveCategory(category.id);
                            setActiveProduct(null);
                          }}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setActiveCategory(category.id);
                              setActiveProduct(null);
                            }
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-black text-[#F1B434]'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>

                            <div className={`font-semibold text-sm ${activeCategory === category.id ? 'text-black' : 'text-black'}`}>
                              {category.name}
                            </div>

                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Product Items */}
                <div className="lg:col-span-6 border-r border-r-gray-700/50 border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Products'}
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <ul className="space-y-4">
                      {currentSubmenu?.products.map((product, index) => (
                        <li
                          key={index}
                          onMouseEnter={() => setActiveProduct(product)}
                          className="flex items-start gap-3 border border-gray-700/40 p-3 rounded hover:border-yellow-500 transition duration-200 bg-white/20 cursor-pointer"
                          onClick={() => {
                            router.push(product.link);
                            onClose();
                          }}
                        >
                          <div className="pt-1">
                            <ChevronRight className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-black hover:text-[#fbb53d] transition">
                              {product.name}
                            </p>
                            <p className="text-xs text-black mt-1">{product.description}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {product.features.map((feature, i) => (
                                <span key={i} className="text-xs bg-yellow-500/10 text-[#fbb53d] px-2 py-0.5 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Dynamic Media Panel */}
                <div className="lg:col-span-3 bg-gradient-to-br from-white to-white min-w-0 h-full overflow-y-auto scroll-hover border-r-2 border-b-2 border-[#F1B434]">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Details
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <motion.div
                      key={activeProduct ? activeProduct.name : activeCategory}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <div className="relative mb-3 overflow-hidden rounded">
                        <img
                          src={activeProduct ? activeProduct.image : activeMedia.image}
                          alt={activeProduct ? activeProduct.name : ('title' in activeMedia ? activeMedia.title : 'name' in activeMedia ? activeMedia.name : '')}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base text-[#fbb53d] mb-2">
                          {activeProduct
                            ? activeProduct.name
                            : 'title' in activeMedia
                              ? activeMedia.title
                              : 'name' in activeMedia
                                ? activeMedia.name
                                : ''}
                        </h4>
                        <p className="text-black mb-3 leading-relaxed text-xs">
                          {activeProduct ? activeProduct.description : activeMedia.description}
                        </p>

                        {activeMedia.features && (
                          <div className="mb-4">
                            <h5 className="font-semibold text-[#fbb53d] mb-2 text-xs">Key Features:</h5>
                            <div className="space-y-1">
                              {activeMedia.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                  <span className="text-black text-xs">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div >
      </div >
    </>
  );
};

const InvestorRelationsMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('corporate-governance');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const router = useRouter();

  const primaryCategories = [
    {
      id: 'corporate-governance',
      name: 'Corporate Governance',
      icon: <Shield className="w-4 h-4" />,
      description: 'Board structure, policies and governance framework',
      link: `/investor-relations?page=corporate-governance`
    },
    {
      id: 'shareholders-information',
      name: 'Shareholders Information',
      icon: <Users className="w-4 h-4" />,
      description: 'Ownership patterns and investor services',
      link: `/investor-relations?page=shareholders-information`
    },
    {
      id: 'financials',
      name: 'Financials',
      icon: <FileText className="w-4 h-4" />,
      description: 'Financial reports and performance data',
      link: `/investor-relations?page=financials`
    },
    {
      id: 'notice',
      name: 'Notice & Announcements',
      icon: <Calendar className="w-4 h-4" />,
      description: 'Regulatory filings and press releases',
      link: `/investor-relations?page=notice`
    }
  ];

  const investorContentData = {
    'corporate-governance': {
      title: 'Corporate Governance',
      description: 'TIL Limited is committed to maintaining the highest standards of corporate governance, ensuring transparency, accountability, and ethical business practices. Our governance framework includes robust policies, board oversight, and compliance mechanisms.',
      image: `${basePath}/corporate-governance.jpg`,
      link: '/investor-relations?page=corporate-governance',
      features: ['Board Committees', 'Ethical Policies', 'Compliance Framework', 'Risk Management']
    },
    'shareholders-information': {
      title: 'Shareholders Information',
      description: 'Access comprehensive information for our valued shareholders including ownership patterns, dividend history, AGM details, and investor services. We are dedicated to protecting shareholder interests and maintaining transparent communication.',
      image: `${basePath}/shareholders.jpg`,
      link: '/investor-relations?page=shareholders-information',
      features: ['Dividend History', 'AGM Information', 'Shareholding Pattern', 'Investor Services']
    },
    'financials': {
      title: 'Financial Performance',
      description: 'Stay updated with TIL\'s financial performance through detailed quarterly and annual reports. Our financial disclosures provide comprehensive insights into our business performance, growth trajectory, and future outlook.',
      image: `${basePath}/financials.jpg`,
      link: '/investor-relations?page=financials',
      features: ['Quarterly Results', 'Annual Reports', 'Financial Statements', 'Performance Metrics']
    },
    'notice': {
      title: 'Notices & Announcements',
      description: 'Keep track of important corporate announcements, regulatory filings, press releases, and investor alerts. Stay informed about company developments and market-sensitive information.',
      image: `${basePath}/notice.jpg`,
      link: '/investor-relations?page=notice',
      features: ['Regulatory Filings', 'Press Releases', 'Corporate Updates', 'Investor Alerts']
    }
  };

  const currentContent = investorContentData[activeCategory as keyof typeof investorContentData];

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-white/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-white/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        router.push(category.link);
                        onClose();
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <div>
                            <span className="text-black font-medium block">
                              {category.name}
                            </span>
                            <span className="text-xs text-gray-600">
                              {category.description}
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Two Panel Layout (Like About Us & Careers) */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-4 border-r border-r-gray-700/50 border-l-2 border-l-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Investor Relations
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                          ${activeCategory === category.id
                              ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => {
                            setActiveCategory(category.id);
                          }}
                          onClick={() => {
                            router.push(category.link);
                            onClose();
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-black'
                                }`}>
                                {category.name}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {category.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Content Description with Image */}
                <div className="lg:col-span-8 border-r-2 border-r-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Information'}
                    </h3>
                  </div>
                  <div className="p-6">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col lg:flex-row gap-6 items-start"
                    >
                      {/* Image Section */}
                      <div className="lg:w-2/5 w-full">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={currentContent.image}
                            alt={currentContent.title}
                            className="w-full h-48 lg:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = `${basePath}/placeholder_avatar.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-3/5 w-full space-y-4">
                        <h4 className="text-2xl font-bold text-gray-800 tracking-tight">
                          {currentContent.title}
                        </h4>

                        <p className="text-gray-700 leading-relaxed text-base">
                          {currentContent.description}
                        </p>

                        {/* Features */}
                        {currentContent.features && (
                          <div className="space-y-2">
                            <h5 className="font-semibold text-[#fbb53d] text-sm">Key Highlights:</h5>
                            <div className="flex flex-wrap gap-2">
                              {currentContent.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 text-[#fbb53d] text-xs font-medium"
                                >
                                  <Award className="w-3 h-3 mr-1" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Read More Button */}
                        <motion.button
                          onClick={() => {
                            router.push(currentContent.link);
                            onClose();
                          }}
                          className="flex items-center space-x-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] hover:from-[#e0a42d] hover:to-[#e0a42d] text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-4 h-4" />
                          <span>Explore More</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const CustomerSupportMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('heavy-industries');
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const router = useRouter();
  const primaryCategories = [
    { id: 'heavy-industries', name: 'Maintenance Contract', icon: <Mountain className="w-4 h-4" />, link: `/customer-support/maintenance-contract` },
    { id: 'infrastructure', name: 'Parts & Warehouse', icon: <Building className="w-4 h-4" />, link: `/customer-support/parts-warehouse` },
    { id: 'specialized', name: 'Training', icon: <Shield className="w-4 h-4" />, link: `/customer-support/training` },
    { id: 'energy', name: 'Service Locations', icon: <Zap className="w-4 h-4" />, link: `/contact-us/locations` }
  ];

  const submenuData = {
    'heavy-industries': {
      title: 'Maintenance Contracts',
      description: 'Keep your machines in peak condition with our comprehensive annual maintenance services. Our expert technicians provide preventive care, emergency support, and lifecycle management to maximize your equipment uptime and ROI.',
      image: `${basePath}/maintenance.jpg`,
      link: '/customer-support/maintenance-contract',
      features: ['Annual Service Contracts', 'Pre-Purchase Consultancy', 'Quick Parts Delivery', 'Pan-India Support', 'Rebuild & Refurbishment']
    },
    'infrastructure': {
      title: 'Parts & Warehouse',
      description: 'Rapid access to critical parts with optimized logistics and warehouse coverage. Our centralized inventory system ensures authentic TIL parts are available when you need them most.',
      image: `${basePath}/parts-warehouse.png`,
      link: '/customer-support/parts-warehouse',
      features: ['Authentic TIL Parts', 'Real-Time Inventory', 'Wide Range Availability', 'Expert Support', 'ERP-Enabled Warehouse']
    },
    'specialized': {
      title: 'Training Programs',
      description: 'Empower your workforce with certified technical and operator training. Our comprehensive modules cover safety protocols, operational efficiency, and maintenance best practices.',
      image: `${basePath}/training-banner.jpg`,
      link: '/customer-support/training',
      features: ['Operator Training', 'Hands-On Sessions', 'Customized Modules', 'Downtime Prevention', 'Competitive Edge']
    },
    'energy': {
      title: 'Service Locations',
      description: 'Our nationwide network of service centers and support facilities ensures prompt response times and local expertise across all major industrial regions in India.',
      image: `${basePath}/location-banner.png`,
      link: '/customer-support/locations',
      features: ['Kolkata Service Center', 'Chennai Service Center', 'Delhi NCR Service Center', 'Mumbai Service Center', 'Singrauli Service Depot']
    }
  };

  const currentContent = submenuData[activeCategory as keyof typeof submenuData];

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-white/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-white/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        router.push(category.link);
                        onClose();
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <div>
                            <span className="text-black font-medium block">
                              {category.name}
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Simplified Mega Menu (Like About Us) */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-4 border-r border-r-gray-700/50 border-l-2 border-l-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Customer Support
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                          ${activeCategory === category.id
                              ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => {
                            setActiveCategory(category.id);
                          }}
                          onClick={() => {
                            router.push(category.link);
                            onClose();
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-black'
                                }`}>
                                {category.name}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Content Description with Image (Like About Us) */}
                <div className="lg:col-span-8 border-r-2 border-r-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">

                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Information'}
                    </h3>
                  </div>
                  <div className="p-6">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col lg:flex-row gap-6 items-start"
                    >
                      {/* Image Section */}
                      <div className="lg:w-2/5 w-full">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={currentContent.image}
                            alt={currentContent.title}
                            className="w-full h-48 lg:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = `${basePath}/placeholder_avatar.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-3/5 w-full space-y-4">
                        <h4 className="text-2xl font-bold text-gray-800 tracking-tight">
                          {currentContent.title}
                        </h4>

                        <p className="text-gray-700 leading-relaxed text-base">
                          {currentContent.description}
                        </p>

                        {/* Features */}
                        {currentContent.features && (
                          <div className="space-y-2">
                            <h5 className="font-semibold text-[#fbb53d] text-sm">Key Features:</h5>
                            <div className="flex flex-wrap gap-2">
                              {currentContent.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 text-[#fbb53d] text-xs font-medium"
                                >
                                  <Award className="w-3 h-3 mr-1" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Read More Button */}
                        <motion.button
                          onClick={() => {
                            router.push(currentContent.link);
                            onClose();
                          }}
                          className="flex items-center space-x-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] hover:from-[#e0a42d] hover:to-[#e0a42d] text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-4 h-4" />
                          <span>Read More</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};


const MediaMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const router = useRouter();
  console.log('MediaMegamenu component rendering...');

  const [activeCategory, setActiveCategory] = useState('blogs');
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    description: string;
    embedUrl: string;
    [key: string]: any;
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  console.log('Active category:', activeCategory);

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  const primaryCategories = [
    {
      id: 'blogs',
      name: 'Blogs',
      icon: <Building className="w-4 h-4" />,
      description: 'Industry insights and company updates',
      link: '/media/blog'
    },
    {
      id: 'video',
      name: 'Videos',
      icon: <Users className="w-4 h-4" />,
      description: 'Product demos and company highlights',
      link: '/media/videos'
    },
    {
      id: 'news',
      name: 'News',
      icon: <Shield className="w-4 h-4" />,
      description: 'Latest company announcements',
      link: '/media/news'
    },
    {
      id: 'til',
      name: 'TIL@bauma2024',
      icon: <Star className="w-4 h-4" />,
      description: 'Trade show highlights and innovations',
      link: '/media/bauma'
    },
    {
      id: 'events',
      name: 'Events',
      icon: <Calendar className="w-4 h-4" />,
      description: 'Upcoming events and exhibitions',
      link: '/media/events'
    },
    {
      id: 'press',
      name: 'Press Release',
      icon: <FileText className="w-4 h-4" />,
      description: 'Official press announcements',
      link: '/media//press-release'
    },
    {
      id: 'downloads',
      name: 'Downloads',
      icon: <Download className="w-4 h-4" />,
      description: 'Brochures and technical documents',
      link: '/media/freedownloads'
    }
  ];

  const submenuData = {
    blogs: {
      items: [
        {
          title: '6 Proven Factors That Affect Truck Crane Durability',
          description: 'In the heavy-lifting and infrastructure sector, truck cranes are more than just machines. They are...',
          image: `${basePath}/1761127133_1755059720_1320-x-720_12830_BLOG.jpg`,
          link: '/media/blog/how-to-buy-reachstacker',
          type: 'blog',
          date: '2025-10-22'
        },
        {
          title: 'How to Read Rough Terrain Crane Load Charts?',
          description: 'If you read a crane load chart incorrectly, you could be on the verge of a major accident.',
          image: `${basePath}/1760341612_1755059719_1320-x-720_12829_BLOG.jpg`,
          link: '/media/blog/cranes-in-construction',
          type: 'blog',
          date: '2025-10-13'
        },
        {
          title: 'New vs. Used Crane: Which is a Smarter Investment in 2025?',
          description: 'When it comes to heavy lifting, the question of whether to buy a new vs used crane is never...',
          image: `${basePath}/1758349399_1755059718_1320-x-720_12828_BLOG.jpg`,
          link: '/media/blog/new-vs.-used-crane-which-is-a-smarter-investment-in-2025',
          type: 'blog',
          date: '2025-09-20'
        },
        {
          title: 'Hydraulic vs Mechanical Crane: How to Choose the Right Crane?',
          description: 'Contractors, fleet owners, and project managers who buy cranes often find themselves...',
          image: `${basePath}/1757331853_1755059717_1320-x-720_12827_BLOG.jpg`,
          link: '/media/blog/hydraulic-vs-mechanical-crane-how-to-choose-the-right-crane',
          type: 'blog',
          date: '2024-09-08'
        }
      ],
      media: {
        image: `${basePath}/Media-page.jpg`,
        title: 'Industry Insights',
        description: 'Stay ahead with our expert analysis, equipment guides, and industry best practices.',
        cta: 'Read All Blogs',
        features: ['Expert Analysis', 'Equipment Guides', 'Industry Trends']
      }
    },

    video: {
      items: [
        {
          title: 'Why Operators Prefer Hyster TIL ReachStackers',
          description: 'What’s it like to operate a Hyster TIL ReachStacker in one of India’s busiest logistics hubs?',
          videoId: 'RDgU-xTDyZc',
          embedUrl: 'https://www.youtube.com/embed/RDgU-xTDyZc',
          thumbnail: `${basePath}/video1.jpg`,
          link: '/media/videos/hyster-til-reachstackers',
          type: 'youtube',
          duration: '4:32'
        },
        {
          title: 'How Hyster-TIL’s Reach Stacker Revolutionizing Material Handling | TIL Limited',
          description: 'Join us as Mr. Rajesh Wazarkar, MD of Hyster India, shares his favorite features of TIL’s new High Series Reach Stacker...',
          videoId: 'ABC123XYZ',
          embedUrl: 'https://www.youtube.com/embed/ABC123XYZ',
          thumbnail: `${basePath}/video2.jpg`,
          link: '/media/videos/reach-stacker-revolution',
          type: 'youtube',
          duration: '8:15'
        },
        {
          title: 'How TIL Built India’s First Mobile Crane | Factory Tour',
          description: 'In this exclusive conversation with Mr. Jayanta Kumar Patra, Production Head at TIL Limited, we trace the incredible journey of our factory...',
          videoId: 'DEF456GHI',
          embedUrl: 'https://www.youtube.com/embed/DEF456GHI',
          thumbnail: `${basePath}/video3.jpg`,
          link: '/media/videos/first-mobile-crane',
          type: 'youtube',
          duration: '6:45'
        },
        {
          title: 'How TIL Hyster ReachStacker Redefines Material Handling ft Ben Newey',
          description: 'Revolutionizing Material Handling! In this exclusive interview, Ben Newey, VP of Sales & Marketing APIC at Hyster-Yale Materials Handling...',
          videoId: 'JKL789MNO',
          embedUrl: 'https://www.youtube.com/embed/JKL789MNO',
          thumbnail: `${basePath}/video4.jpg`,
          link: '/media/videos/redefines-material-handling',
          type: 'youtube',
          duration: '5:20'
        }
      ],
      media: {
        image: `${basePath}/Media-page.jpg`,
        title: 'Video Library',
        description: 'Comprehensive collection of product demos, training videos, and customer testimonials.',
        cta: 'Watch All Videos',
        features: ['HD Quality', 'Multiple Languages', 'Mobile Optimized']
      }
    },

    news: {
      items: [
        {
          title: 'Smart Manufacturing and Enterprises',
          description: 'We will launch new cranes and forklifts in next 4 years',
          image: `${basePath}/news1.png`,
          link: '/media/news/smart-manufacturing',
          type: 'news',
          date: '2024-12-20'
        },
        {
          title: 'NDTV',
          description: 'TIL Forms Strategic Business Unit Supporting Its Defence Portfolio Read mo...',
          image: `${basePath}/news2.jpg`,
          link: '/media/news/strategic-business-unit',
          type: 'news',
          date: '2024-12-18'
        },
        {
          title: 'EPC&I',
          description: 'Built to Meet the Toughest Demands',
          image: `${basePath}/news3.png`,
          link: '/media/news/toughest-demands',
          type: 'news',
          date: '2024-12-15'
        },
        {
          title: 'Equipment Times',
          description: 'Handling The Future! MHE\'s Role in Construction & Infrastructure',
          image: `${basePath}/news4.png`,
          link: '/media/news/mhe-role',
          type: 'news',
          date: '2024-12-12'
        }
      ],
      media: {
        image: `${basePath}/Media-page.jpg`,
        title: 'Latest News',
        description: 'Stay informed with our latest announcements, partnerships, and industry developments.',
        cta: 'Read All News',
        features: ['Breaking News', 'Industry Analysis', 'Market Insights']
      }
    },

    til: {
      items: [
        {
          title: 'Construction And Architecture Magazine',
          description: 'FUELING INNOVATION AND GROWTH IN INDIA\'S MATERIAL HANDLING AND CONSTRUCTION...',
          image: `${basePath}/til1.png`,
          link: '/media/til/innovation-growth',
          type: 'event',
          date: '2024-10-15'
        },
        {
          title: 'Construction And Architecture Magazine',
          description: 'TIL: A LEGACY OF INNOVATION AND STRATEGIC GROWTH IN MATERIAL HANDLING AT BA...',
          image: `${basePath}/til2.jpeg`,
          link: '/media/til/legacy-innovation',
          type: 'event',
          date: '2024-10-12'
        },
        {
          title: 'BAUMA 2024',
          description: 'We are committed to increasing local manufacturing in India.',
          image: `${basePath}/til3.jpg`,
          link: '/media/til/local-manufacturing',
          type: 'event',
          date: '2024-10-10'
        },
        {
          title: 'Construction Week',
          description: 'Bauma ConExpo India 2024: TIL debuts Snorkel A62JRT articulating boom lift',
          image: `${basePath}/til4.jpg`,
          link: '/media/til/snorkel-debut',
          type: 'event',
          date: '2024-10-08'
        }
      ],
      media: {
        image: `${basePath}/Media-page.jpg`,
        title: 'TIL@bauma2024',
        description: 'Discover innovations and highlights from Bauma 2024 and our ongoing technology initiatives.',
        cta: 'Explore TIL',
        features: ['Innovation Showcase', 'Live Demos', 'Expert Talks']
      }
    },

    events: {
      items: [
        {
          title: 'TIL Annual Picnic',
          image: `${basePath}/event1.jpeg`,
          link: '/media/events/annual-picnic',
          date: '2025-03-14'
        },
        {
          title: 'Republic day 2025 celebration at TIL',
          image: `${basePath}/event2.jpeg`,
          link: '/media/events/republic-day',
          date: '2025-02-20'
        },
        {
          title: 'TIL 49th AGM',
          image: `${basePath}/event3.jpg`,
          link: '/media/events/49th-agm',
          date: '2025-02-15'
        },
        {
          title: 'Viswakarma Puja 2024',
          image: `${basePath}/event4.jpg`,
          link: '/media/events/viswakarma-puja',
          date: '2025-01-30'
        }
      ],
      media: {
        image: `${basePath}/Media-page.jpg`,
        title: 'Upcoming Events',
        description: 'Join us at our upcoming events, trade shows, and training sessions worldwide.',
        cta: 'View All Events',
        features: ['Global Events', 'Expert Sessions', 'Networking']
      }
    },

    press: {
      items: [
        {
          title: 'TIL Limited Reports Record Q4 2024 Performance',
          description: 'Official press release detailing financial results and growth milestones.',
          image: `${basePath}/press1.jpg`,
          link: '/media/press/q4-2024-performance',
          type: 'press',
          date: '2024-12-22'
        },
        {
          title: 'New CEO Appointment Announcement',
          description: 'Leadership transition and strategic vision for the company\'s future.',
          image: `${basePath}/press2.jpg`,
          link: '/media/press/ceo-appointment',
          type: 'press',
          date: '2024-12-20'
        },
        {
          title: 'Environmental Sustainability Initiative Launch',
          description: 'Commitment to carbon neutrality and sustainable manufacturing practices.',
          image: `${basePath}/press3.jpg`,
          link: '/media/press/sustainability-initiative',
          type: 'press',
          date: '2024-12-18'
        },
        {
          title: 'International Expansion Plans Revealed',
          description: 'Strategic expansion into new markets and establishment of regional offices.',
          image: `${basePath}/press4.jpg`,
          link: '/media/press/international-expansion',
          type: 'press',
          date: '2024-12-15'
        }
      ],
      media: {
        image: `${basePath}/media.jpg`,
        title: 'Press Releases',
        description: 'Official company announcements, press statements, and media resources.',
        cta: 'View All Press',
        features: ['Official News', 'Media Kit', 'Contact Info']
      }
    },

    downloads: {
      items: [
        {
          title: 'Rough Terrain Cranes',
          image: `${basePath}/rough-terrain.png`,
          link: '/media/downloads/rough-terrain-cranes',
          fileType: 'PDF'
        },
        {
          title: 'Truck Cranes',
          image: `${basePath}/truck-cranes.jpeg`,
          link: '/media/downloads/truck-cranes',
          fileType: 'PDF'
        },
        {
          title: 'Pick-n-Carry Crane',
          image: `${basePath}/pick-n-carry.png`,
          link: '/media/downloads/pick-n-carry',
          fileType: 'PDF'
        },
        {
          title: 'Grove™ Range',
          image: `${basePath}/grove-range.png`,
          link: '/media/downloads/grove-range',
          fileType: 'PDF'
        },
        {
          title: 'Crawler Crane',
          image: `${basePath}/crawler-cranes.png`,
          link: '/media/downloads/crawler-cranes',
          fileType: 'PDF'
        },
        {
          title: 'ReachStacker',
          image: `${basePath}/reachstackers.png`,
          link: '/media/downloads/reachstackers',
          fileType: 'PDF'
        },
        {
          title: 'Forklift Truck',
          image: `${basePath}/forklift.png`,
          link: '/media/downloads/forklift',
          fileType: 'PDF'
        },
        {
          title: 'Boom Lift',
          image: `${basePath}/boomlifts.png`,
          link: '/media/downloads/boomlifts',
          fileType: 'PDF'
        }
      ],
      media: {
        image: `${basePath}/free.jpeg`,
        title: 'TIL Coffee Table Book',
        description: 'Access our comprehensive library of brochures, manuals, and technical documents.',
        cta: 'Browse All Downloads',
        features: ['Product Specs', 'User Manuals', 'Technical Guides']
      }
    }
  };

  const currentSubmenu = submenuData[activeCategory as keyof typeof submenuData];
  console.log('Current submenu data:', currentSubmenu);

  // Safe hover handler with debouncing
  const handleCategoryHover = (categoryId: string) => {
    console.log('Category hovered:', categoryId);
    try {
      setActiveCategory(categoryId);
      console.log('Category set successfully to:', categoryId);
    } catch (error) {
      console.error('Error setting category on hover:', error);
    }
  };

  // Video modal handler
  const openVideoModal = (item: any) => {
    setSelectedVideo(item);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  console.log('Rendering MediaMegamenu with activeCategory:', activeCategory);

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-white/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-white/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => handleNavigation(category.link)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <div>
                            <span className="text-black font-medium block">
                              {category.name}
                            </span>
                            <span className="text-xs text-black">
                              {category.description}
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Full Mega Menu */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-3 border-r border-r-gray-700/50 border-l-2 border-l-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Media Center
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                          ${activeCategory === category.id
                              ? 'bg-yellow-500/10 shadow-[0_0_15px_rgba(255,193,7,0.1)] border border-yellow-500/30'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          onClick={() => handleNavigation(category.link)}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-3">
                            <div className={`p-2 rounded-lg flex-shrink-0 transition-all duration-200 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black shadow-lg'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm transition-colors duration-200 ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-black'
                                }`}>
                                {category.name}
                              </div>
                              <div className="text-xs text-gray-500 truncate mt-0.5">
                                {category.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Content Items */}
                <div className="lg:col-span-6 border-r border-r-gray-700/50 border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Content'}
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    {activeCategory === 'downloads' ? (
                      // Downloads Section
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentSubmenu?.items.map((item, index) => (
                          <a
                            key={index}
                            href={item.link}
                            className="group bg-white border border-gray-700/40 rounded-lg overflow-hidden hover:border-yellow-500/60 hover:shadow-lg transition-all duration-300 flex flex-col"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(item.link);
                            }}
                          >
                            <div className="relative bg-white p-4 flex items-center justify-center min-h-[120px]">
                              <img
                                src={("image" in item && item.image) || ""}
                                alt={item.title}
                                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                style={{ maxHeight: "100px", width: "auto", height: "auto" }}
                              />
                              <div className="absolute top-2 right-2 bg-yellow-500 text-black rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Download className="w-3 h-3" />
                              </div>

                              {"fileType" in item && item.fileType && (
                                <div className="absolute bottom-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded font-semibold">
                                  {item.fileType}
                                </div>
                              )}
                            </div>

                            <div className="p-3 flex-1 flex flex-col justify-between">
                              <h4 className="text-sm font-semibold text-[#fbb53d] group-hover:text-yellow-300 transition-colors duration-200 text-center leading-tight mb-2">
                                {item.title}
                              </h4>

                              <div className="mt-auto pt-2 border-t border-gray-700/40">
                                <div className="flex items-center justify-center space-x-1 text-xs text-black group-hover:text-[#fbb53d] transition-colors duration-200">
                                  <Download className="w-3 h-3" />
                                  <span>Download</span>
                                </div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    ) : activeCategory === 'press' ? (
                      // Press Release Table Layout
                      <div className="bg-white border border-gray-700/40 rounded-lg overflow-hidden">
                        <div className="grid grid-cols-12 bg-yellow-500 text-black font-bold text-sm">
                          <div className="col-span-8 px-4 py-3 border-r border-yellow-500">
                            Details
                          </div>
                          <div className="col-span-4 px-4 py-3">
                            Actions
                          </div>
                        </div>

                        <div className="divide-y divide-gray-700/40">
                          {currentSubmenu?.items.map((item, index) => (
                            <div key={index} className="grid grid-cols-12 hover:bg-gray-700/20 transition-colors duration-200">
                              <div className="col-span-8 px-4 py-3 border-r border-gray-700/40">
                                <div className="text-sm font-medium text-black mb-1">
                                  {item.title}
                                </div>
                                {'description' in item && item.description && (
                                  <div className="text-xs text-black leading-relaxed">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                              <div className="col-span-4 px-4 py-3 flex items-center space-x-2">
                                <button
                                  className="flex items-center space-x-1 text-[#fbb53d] hover:text-yellow-300 text-xs transition-colors duration-200"
                                  onClick={() => handleNavigation(item.link)}
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                  <span>View</span>
                                </button>
                                <span className="text-gray-500">|</span>
                                <button className="flex items-center space-x-1 text-[#fbb53d] hover:text-yellow-300 text-xs transition-colors duration-200">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  <span>Download Document</span>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Regular Card Layout for Other Sections
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {currentSubmenu?.items.map((item, index) => (
                          <div
                            key={index}
                            className="group bg-white border border-gray-700/40 rounded-lg overflow-hidden hover:border-yellow-500/60 hover:shadow-lg transition-all duration-300 cursor-pointer"
                            onClick={() => {
                              if ("type" in item && item.type === "youtube") {
                                openVideoModal(item);
                              } else {
                                handleNavigation(item.link);
                              }
                            }}
                          >
                            {"type" in item && item.type === "youtube" ? (
                              // YouTube Video Card
                              <div className="h-full">
                                <div className="h-32 overflow-hidden relative">
                                  <img
                                    src={("thumbnail" in item && item.thumbnail) || ""}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    style={{ objectPosition: "top center" }}
                                  />

                                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                                    <div className="bg-red-600 hover:bg-red-700 rounded-full p-3 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                      </svg>
                                    </div>
                                  </div>

                                  {"duration" in item && item.duration && (
                                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                      {item.duration}
                                    </div>
                                  )}

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                                </div>
                                <div className="p-3">
                                  <h4 className="text-sm font-semibold text-[#fbb53d] group-hover:text-yellow-300 mb-1 transition-colors duration-200">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-black leading-relaxed line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              // Regular Content Card
                              <div className="h-full">
                                <div className="h-32 overflow-hidden relative">
                                  <img
                                    src={("image" in item && item.image) || ""}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    style={{ objectPosition: "top center" }}
                                  />

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                  {"date" in item && item.date && (
                                    <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                      {new Date(item.date).toLocaleDateString()}
                                    </div>
                                  )}

                                </div>
                                <div className="p-3">
                                  <h4 className="text-sm font-semibold text-[#fbb53d] group-hover:text-yellow-300 mb-1 transition-colors duration-200">
                                    {item.title}
                                  </h4>

                                  {"description" in item && typeof item.description === "string" && (
                                    <p className="text-xs text-black leading-relaxed line-clamp-2">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Media Panel */}
                <div className="lg:col-span-3 bg-gradient-to-br from-white to-white min-w-0 h-full overflow-y-auto scroll-hover border-r-2 border-b-2 border-[#F1B434]">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Highlights
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <div className="relative mb-4 overflow-hidden rounded-lg">
                        <img
                          src={currentSubmenu?.media.image}
                          alt={currentSubmenu?.media.title}
                          className="w-full h-40 object-cover"
                          style={{ objectPosition: 'top center' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-2 left-3 right-3">
                          <h4 className="font-bold text-white text-sm">
                            {currentSubmenu?.media.title}
                          </h4>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-black mb-4 leading-relaxed text-sm">
                          {currentSubmenu?.media.description}
                        </p>

                        <div className="mb-6">
                          <h5 className="font-semibold text-[#fbb53d] mb-3 text-sm">Key Features:</h5>
                          <div className="space-y-2">
                            {currentSubmenu?.media.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                                <span className="text-black text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3 sticky bottom-0 bg-white/80 backdrop-blur-sm py-3 -mx-4 px-4">
                          <button
                            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-500 hover:from-[#fbb53d] hover:to-yellow-500 text-black py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                            onClick={() => handleNavigation(`/media`)}
                          >
                            <Eye className="w-4 h-4" />
                            <span>{currentSubmenu?.media.cta}</span>
                          </button>

                          <button className="w-full border border-yellow-500/50 hover:bg-yellow-500/10 text-[#fbb53d] py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2">
                            <Download className="w-4 h-4" />
                            <span>Download Resources</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};


const CareersMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('life');
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const router = useRouter();
  const primaryCategories = [
    {
      id: 'life',
      name: 'Life @TIL',
      icon: <Users className="w-4 h-4" />,
      description: 'Our vibrant workplace culture and employee experience',
      link: `/careers/life-til`
    },
    {
      id: 'team',
      name: 'Meet our Team',
      icon: <Users className="w-4 h-4" />,
      description: 'Get to know our passionate team members',
      link: `/careers/meet-our-team`
    },
    {
      id: 'vacant',
      name: 'Vacancies',
      icon: <Briefcase className="w-4 h-4" />,
      description: 'Current job openings and career opportunities',
      link: `/careers/vacancies`
    },
    {
      id: 'equal',
      name: 'Equal Opportunity Employer',
      icon: <Award className="w-4 h-4" />,
      description: 'Our commitment to diversity and inclusion',
      link: `/careers/equal-opportunity-employer`
    }
  ];

  const careersContentData = {
    life: {
      title: 'Life @TIL',
      description: 'Experience our vibrant workplace culture that fosters innovation, collaboration, and personal growth. At TIL, we believe in creating an environment where every employee can thrive and reach their full potential through continuous learning and development opportunities.',
      image: `${basePath}/life_til.jpg`,
      link: '/careers/life-til',
      features: ['Inclusive Culture', 'Flexible Work Options', 'Wellness Programs', 'Career Growth']
    },
    team: {
      title: 'Meet Our Team',
      description: 'Get to know the passionate professionals who drive TIL\'s success. Our diverse team brings together expertise from various fields to create innovative solutions and build India\'s infrastructure future.',
      image: `${basePath}/meet_our_team_new.png`,
      link: '/careers/meet-our-team',
      features: ['Industry Experts', 'Diverse Talent', 'Collaborative Spirit', 'Leadership Excellence']
    },
    vacant: {
      title: 'Career Opportunities',
      description: 'Explore exciting career opportunities with TIL Limited. Join us in building India\'s infrastructure with cutting-edge technology and be part of our 80+ years legacy of excellence in heavy equipment manufacturing.',
      image: `${basePath}/vacancies_new.jpg`,
      link: '/careers/vacancies',
      features: ['Competitive Packages', 'Skill Development', 'Growth Paths', 'Pan-India Locations']
    },
    equal: {
      title: 'Equal Opportunity Employer',
      description: 'TIL is committed to creating an inclusive workplace where diversity is celebrated. We provide equal opportunities for all employees regardless of background, fostering an environment of respect and equal growth potential.',
      image: `${basePath}/equal_opportunity.jpg`,
      link: '/careers/equal-opportunity-employer',
      features: ['Diversity & Inclusion', 'Zero Discrimination', 'Women Leadership', 'Accessible Workplace']
    }
  };

  const currentContent = careersContentData[activeCategory as keyof typeof careersContentData];

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-white/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-white/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        router.push(category.link);
                        onClose();
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <div>
                            <span className="text-black font-medium block">
                              {category.name}
                            </span>
                            <span className="text-xs text-gray-600">
                              {category.description}
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Simplified Mega Menu (Like About Us) */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-4 border-r border-r-gray-700/50 border-l-2 border-l-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Careers
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                          ${activeCategory === category.id
                              ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => {
                            setActiveCategory(category.id);
                          }}
                          onClick={() => {
                            router.push(category.link);
                            onClose();
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-black'
                                }`}>
                                {category.name}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {category.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Content Description with Image */}
                <div className="lg:col-span-8 border-r-2 border-r-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Information'}
                    </h3>
                  </div>
                  <div className="p-6">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col lg:flex-row gap-6 items-start"
                    >
                      {/* Image Section */}
                      <div className="lg:w-2/5 w-full">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={currentContent.image}
                            alt={currentContent.title}
                            className="w-full h-48 lg:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = `${basePath}/placeholder_avatar.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-3/5 w-full space-y-4">
                        <h4 className="text-2xl font-bold text-gray-800 tracking-tight">
                          {currentContent.title}
                        </h4>

                        <p className="text-gray-700 leading-relaxed text-base">
                          {currentContent.description}
                        </p>

                        {/* Features */}
                        {currentContent.features && (
                          <div className="space-y-2">
                            <h5 className="font-semibold text-[#fbb53d] text-sm">Key Highlights:</h5>
                            <div className="flex flex-wrap gap-2">
                              {currentContent.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 text-[#fbb53d] text-xs font-medium"
                                >
                                  <Award className="w-3 h-3 mr-1" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Read More Button */}
                        <motion.button
                          onClick={() => {
                            router.push(currentContent.link);
                            onClose();
                          }}
                          className="flex items-center space-x-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] hover:from-[#e0a42d] hover:to-[#e0a42d] text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-4 h-4" />
                          <span>Explore More</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const ContactMegamenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState('locations');
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection hook
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const router = useRouter();
  const primaryCategories = [
    {
      id: 'locations',
      name: 'Locations',
      icon: <MapPin className="w-4 h-4" />,
      description: 'Find our offices and service centers across India',
      link: `/contact-us/locations`
    },
    {
      id: 'inquiry',
      name: 'Inquiry',
      icon: <Mail className="w-4 h-4" />,
      description: 'Get in touch with our team for any questions',
      link: `/contact-us/inquiry`
    }
  ];

  const contactContentData = {
    locations: {
      title: 'Our Locations',
      description: 'With a strong presence across India, TIL ensures prompt service and support wherever you are. Our strategically located offices and service centers are equipped to handle your equipment needs with local expertise and global standards.',
      image: `${basePath}/location-banner.png`,
      link: '/contact-us/locations',
      features: ['Pan-India Network', 'Local Expertise', 'Quick Response', 'Service Centers']
    },
    inquiry: {
      title: 'Get In Touch',
      description: 'Reach out to our dedicated team through multiple channels. Whether you have product inquiries, need technical support, or want to explore partnerships, we\'re here to help you find the right solutions for your business needs.',
      image: `${basePath}/contact.jpg`,
      link: '/contact-us/inquiry',
      features: ['Multiple Channels', 'Quick Response', 'Expert Support', '24/7 Availability']
    }
  };

  const currentContent = contactContentData[activeCategory as keyof typeof contactContentData];

  return (
    <>
      <style>{`
        .mega-menu-height {
          height: 60vh;
          max-height: 60vh;
        }
        .mobile-menu-height {
          height: auto;
          max-height: 50vh;
        }
        .scroll-hover::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .scroll-hover::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-hover::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .scroll-hover:hover::-webkit-scrollbar-thumb {
          background: rgba(255, 193, 7, 0.3);
        }
        .scroll-hover::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 193, 7, 0.5);
        }
      `}</style>

      <div onMouseLeave={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className={`bg-white/95 backdrop-blur-md shadow-2xl border-t border-yellow-500/20 ${isMobile ? 'mobile-menu-height' : 'mega-menu-height'
            } overflow-y-auto scroll-hover`}>

            {/* Mobile View - Clean Simple List */}
            {isMobile ? (
              <div className="p-4">
                <div className="space-y-2">
                  {primaryCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      className="w-full text-left px-4 py-3 rounded-lg bg-white/40 hover:bg-yellow-500/10 border-l-4 border-yellow-500 transition-all duration-200"
                      onClick={() => {
                        router.push(category.link);
                        onClose();
                      }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-[#fbb53d]">
                            {category.icon}
                          </div>
                          <div>
                            <span className="text-black font-medium block">
                              {category.name}
                            </span>
                            <span className="text-xs text-gray-600">
                              {category.description}
                            </span>
                          </div>
                        </div>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop View - Simplified Mega Menu (Like About Us) */
              <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-0">

                {/* Left: Categories */}
                <div className="lg:col-span-4 border-r border-r-gray-700/50 border-l-2 border-l-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      Contact Us
                    </h3>
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-1">
                      {primaryCategories.map((category) => (
                        <motion.div
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 rounded w-full
                          ${activeCategory === category.id
                              ? 'bg-yellow-500/8 shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                              : 'hover:bg-yellow-500/8 hover:shadow-[0_0_15px_rgba(255,193,7,0.08)]'
                            }`}
                          onMouseEnter={() => {
                            setActiveCategory(category.id);
                          }}
                          onClick={() => {
                            router.push(category.link);
                            onClose();
                          }}
                          whileHover={{ x: 2 }}
                        >
                          <div className="flex items-center space-x-3 px-3 py-2.5">
                            <div className={`p-1.5 rounded flex-shrink-0 ${activeCategory === category.id
                              ? 'bg-yellow-500 text-black'
                              : 'bg-gray-700 text-[#fbb53d]'
                              }`}>
                              {category.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm ${activeCategory === category.id ? 'text-[#fbb53d]' : 'text-black'
                                }`}>
                                {category.name}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {category.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle: Content Description with Image */}
                <div className="lg:col-span-8 border-r-2 border-r-[#F1B434] border-b-2 border-b-[#F1B434] min-w-0 h-full overflow-y-auto scroll-hover">
                  <div className="p-4 sticky top-0 bg-white z-10">
                    <h3 className="text-sm font-bold text-[#fbb53d] mb-4 border-b border-yellow-700/30 pb-2 uppercase tracking-wider">
                      {primaryCategories.find(cat => cat.id === activeCategory)?.name || 'Information'}
                    </h3>
                  </div>
                  <div className="p-6">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col lg:flex-row gap-6 items-start"
                    >
                      {/* Image Section */}
                      <div className="lg:w-2/5 w-full">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={currentContent.image}
                            alt={currentContent.title}
                            className="w-full h-48 lg:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = `${basePath}/placeholder_avatar.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-3/5 w-full space-y-4">
                        <h4 className="text-2xl font-bold text-gray-800 tracking-tight">
                          {currentContent.title}
                        </h4>

                        <p className="text-gray-700 leading-relaxed text-base">
                          {currentContent.description}
                        </p>

                        {/* Features */}
                        {currentContent.features && (
                          <div className="space-y-2">
                            <h5 className="font-semibold text-[#fbb53d] text-sm">Key Highlights:</h5>
                            <div className="flex flex-wrap gap-2">
                              {currentContent.features.map((feature, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500/10 text-[#fbb53d] text-xs font-medium"
                                >
                                  <Award className="w-3 h-3 mr-1" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Read More Button */}
                        <motion.button
                          onClick={() => {
                            router.push(currentContent.link);
                            onClose();
                          }}
                          className="flex items-center space-x-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] hover:from-[#e0a42d] hover:to-[#e0a42d] text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="w-4 h-4" />
                          <span>Explore More</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};


const MainNavigation: React.FC = () => {
  const router = useRouter();                 // ✅ works now

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before applying responsive logic
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Your existing scroll handling logic
  useEffect(() => {
    if (!isMounted) return;

    let ticking = false;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 100);
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMounted]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen, isMounted]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'About Us', hasSubmenu: true, path: '/about-us' },
    { name: 'Products', hasSubmenu: true, path: '/category' },
    { name: 'Customer Support', hasSubmenu: true, path: '/customer-support' },
    { name: 'Investor Relations', hasSubmenu: true, path: '/investor-relations' },
    { name: 'Media', hasSubmenu: true, path: '/media' },
    { name: 'Careers', hasSubmenu: true, path: '/careers' },
    { name: 'Contact Us', hasSubmenu: true, path: '/contact-us/inquiry' },
  ];



  const handleDesktopMenuHover = useCallback((menuName: string) => {
    if (isMounted && window.innerWidth >= 1024) {
      setActiveMenu(menuName);
    }
  }, [isMounted]);

  const handleMobileMenuClick = useCallback((menuName: string) => {
    if (isMounted && window.innerWidth < 1024) {
      setActiveMenu(prev => prev === menuName ? null : menuName);
    }
  }, [isMounted]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, []);

  const closeDesktopMenu = useCallback(() => {
    if (isMounted && window.innerWidth >= 1024) {
      setActiveMenu(null);
    }
  }, [isMounted]);

  const renderMegamenu = useCallback((menuName: string) => {
    const closeHandler = () => setActiveMenu(null);

    switch (menuName) {
      case 'About Us':
        return <AboutMegamenu onClose={closeHandler} />;
      case 'Products':
        return <ProductsMegamenu onClose={closeHandler} />;
      case 'Customer Support':
        return <CustomerSupportMegamenu onClose={closeHandler} />;
      case 'Investor Relations':
        return <InvestorRelationsMegamenu onClose={closeHandler} />;
      case 'Media':
        return <MediaMegamenu onClose={closeHandler} />;
      case 'Careers':
        return <CareersMegamenu onClose={closeHandler} />;
      case 'Contact Us':
        return <ContactMegamenu onClose={closeHandler} />;
      default:
        return null;
    }
  }, []);

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <nav className="bg-white h-14" style={{ marginTop: '60px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 xl:px-20">
          <div className="flex h-14 items-center justify-center">
            <div className="text-white text-sm">Loading...</div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <div
      className="relative"
      onMouseLeave={closeDesktopMenu}
    >
      <motion.nav
        data-component="MainNavigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrollingDown && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'
          } ${isScrolled ? 'bg-white/85 backdrop-blur-md shadow-2xl' : 'bg-[#ffffff14]'
          }`}
        style={{ marginTop: isScrolled ? '53px' : '60px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 xl:px-20">

          {/* Desktop Navigation */}
          <div className="hidden lg:flex h-14 overflow-x-hidden whitespace-nowrap">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="flex-1"
                onMouseEnter={() => item.hasSubmenu && handleDesktopMenuHover(item.name)}
              >
                <motion.button
                  onClick={() => {
                    router.push(`${item.path}`);
                    setActiveMenu(null); // close hover menu
                  }}
                  className={`flex items-center justify-center space-x-1 px-4 font-bold text-sm uppercase tracking-wide transition-all duration-200 w-full h-full ${activeMenu === item.name
                    ? 'bg-[#fbb53d] text-[#000]'
                    : 'text-[#fbb53d] hover:text-black hover:bg-[#fbb53d]'
                    }`}
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                >
                  <span>{item.name}</span>
                  {item.hasSubmenu && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </motion.button>
              </div>
            ))}
          </div>


          {/* Mobile Navigation Header */}
          <div className="flex lg:hidden items-center justify-between h-14">
            <div className="flex items-center gap-4 pl-3">

              {/* Social Icons */}
              <div className="flex items-center gap-6 ">

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  {/* WhatsApp */}
                  <a href="https://wa.me/918981530153" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white hover:text-[#25D366] transition-colors duration-200">
                      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.48 6.52l-1.48 5.48 5.48-1.48A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12a11.94 11.94 0 00-3.48-8.52zM12 21.5a9.5 9.5 0 01-5.2-1.5l-.4-.25-3.1.83.83-3.1-.25-.4A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5 9.5 9.5 0 0121.5 12 9.5 9.5 0 0112 21.5z" />
                      <path d="M17.5 14.5c-.3 0-1.7-.8-2-1-.3-.2-.5-.2-.7 0-.2.2-.8.9-1 1.1-.2.2-.4.3-.7.1s-1.3-.5-2.5-1.5c-.9-.8-1.5-1.8-1.7-2-.2-.2 0-.3.1-.5.1-.1.2-.3.3-.5.1-.2.1-.3 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.6-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.2-.7.5s-1 1-1 2.5 1 2.9 1.2 3.1c.2.2 2 3 4.8 4.2 2.8 1.2 2.8.8 3.3.7.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a href="https://www.youtube.com/tillimitedindia" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white hover:text-[#FF0000] transition-colors duration-200">
                      <path d="M23.498 6.186a2.998 2.998 0 00-2.11-2.11C19.668 3.5 12 3.5 12 3.5s-7.668 0-9.388.576a2.998 2.998 0 00-2.11 2.11C.5 7.906.5 12 .5 12s0 4.094.002 5.814a2.998 2.998 0 002.11 2.11c1.72.576 9.388.576 9.388.576s7.668 0 9.388-.576a2.998 2.998 0 002.11-2.11c.002-1.72.002-5.814.002-5.814s0-4.094-.002-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a href="https://www.facebook.com/tillimited/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white hover:text-[#1877F2] transition-colors duration-200">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/til-limited-ind/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white hover:text-[#0077B5] transition-colors duration-200">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 11-.001-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.554V9h3.565v11.452z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>


            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menus */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 z-50"
              >
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
                  {renderMegamenu(activeMenu)}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div className="lg:hidden">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={closeMobileMenu}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-auto invert"
                      src={`${basePath}/logo1.png`}
                      alt="TIL Limited"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-md text-black hover:text-white hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Close mobile menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => item.hasSubmenu && handleMobileMenuClick(item.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-all duration-200 ${activeMenu === item.name
                          ? 'text-[#fbb53d] bg-white'
                          : 'text-black hover:text-[#fbb53d] hover:bg-white'
                          }`}
                        disabled={!item.hasSubmenu}
                      >
                        <span className="font-medium uppercase tracking-wide text-sm">{item.name}</span>
                        {item.hasSubmenu && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''
                              }`}
                          />
                        )}
                      </button>

                      {/* Mobile Submenu */}
                      <AnimatePresence>
                        {activeMenu === item.name && item.hasSubmenu && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-2"
                          >
                            <div className="bg-white/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                              {renderMegamenu(item.name)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* Mobile Footer */}
                  <div className="pt-6 mt-6 border-t border-gray-700">
                    <p className="text-center text-gray-500 text-xs">
                      © 2025 TIL Limited. All rights reserved.
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default MainNavigation;