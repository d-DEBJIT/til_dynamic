'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CalendarDays, Newspaper, X, Download } from 'lucide-react';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Coffee Table Book Modal Component
function CoffeeTableBookModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    organization: '',
    fullName: '',
    phoneNumber: '',
    email: '',
    country: '',
    state: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add your download logic here
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">DOWNLOAD TIL COFFEE TABLE BOOK</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                Organization*
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organization"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              />
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone no."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country*
              </label>
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
                <option value="Japan">Japan</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State*
              </label>
              <select
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
              >
                <option value="">Select State</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Delhi">Delhi</option>
                {/* Add more states as needed */}
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Submit and Download
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

const Page = () => {
    const [isCoffeeTableModalOpen, setIsCoffeeTableModalOpen] = useState(false);
    
    const mediaCategories = [
        {
            id: 'blog',
            title: 'Blog',
            description: 'Industry insights and expert articles',
            icon: <Newspaper className="w-6 h-6" />,
            link: '/media/blog',
            image: `${basePath}/bbb.jpg`,
            buttonText: 'KNOW MORE'
        },
        {
            id: 'video',
            title: 'Video',
            description: 'Product showcases and company updates',
            icon: <Play className="w-6 h-6" />,
            link: '/media/video',
            image: `${basePath}/vvv.jpg`,
            buttonText: 'KNOW MORE'
        },
        {
            id: 'news',
            title: 'News',
            description: 'Latest announcements and press releases',
            icon: <Newspaper className="w-6 h-6" />,
            link: '/media/news',
            image: `${basePath}/nnn.jpg`,
            buttonText: 'KNOW MORE'
        },
        {
            id: 'events',
            title: 'Events',
            description: 'Upcoming trade shows and exhibitions',
            icon: <CalendarDays className="w-6 h-6" />,
            link: '/media/events',
            image: `${basePath}/eee.jpg`,
            buttonText: 'KNOW MORE'
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/media_page.jpg`}
                    alt="Media Center"
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
                                TIL <span className="text-[#F1B434]">Media</span>
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
                                Explore our latest content, news, and events in the heavy equipment industry.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
                {/* Media Categories Grid */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mediaCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{ y: -5 }}
                                className="group relative overflow-hidden rounded-xl shadow-lg"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Bottom gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                    {/* Top gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
                                </div>

                                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-[#F1B434]/20 rounded-lg">
                                            {React.cloneElement(category.icon, {
                                                className: `${category.icon.props.className} text-[#F1B434]`
                                            })}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                    </div>
                                    <p className="text-gray-200 mb-4">{category.description}</p>
                                    <Link href={category.link}>
                                        <motion.button
                                            className="inline-flex items-center px-4 py-2 bg-[#F1B434] text-black font-medium rounded-lg hover:bg-[#FFE352] transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {category.buttonText}
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Featured Content Section */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Featured Blogs</h2>
                        <Link href="/media/blog" className="text-sm text-[#F1B434] hover:underline">
                            View All
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Featured Blog Post 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <Link href="/media/blog/5-key-benefits-of-hydraulic-cranes-in-india">
                                <div className="relative h-64 md:h-80 overflow-hidden group">
                                    <img
                                        src={`${basePath}/1756125424_1755059716_1320-x-720_12826_BLOG.jpg`}
                                        alt="Featured Blog Post"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                            5 Key Benefits of Hydraulic Cranes in India
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            For India's expanding infrastructure, hydraulic cranes are proving to be a game-changer.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Featured Blog Post 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <Link href="/media/blog/diesel-vs-electric-engines-comparing-hydraulic-mobile-cranes-in-2025">
                                <div className="relative h-64 md:h-80 overflow-hidden group">
                                    <img
                                        src={`${basePath}/1756976822_1755059715_1320-x-720_12825_BLOG.jpg`}
                                        alt="Featured Video"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-xl font-bold text-white">
                                            Let's try to decide between diesel and electric mobile cranes for your next project.
                                        </h3>
                                        <p className="text-gray-200 text-sm">
                                            As construction projects are becoming more complex, simply depending on raw power will not be enough. You need to consider speed, agility
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                </section>

                {/* Latest News Section */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Latest News</h2>
                        <Link href="/media/news" className="text-sm text-[#F1B434] hover:underline">
                            View All News
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                image: `${basePath}/news1.png`,
                                date: 'July 28, 2025',
                                title: 'NBM & CW',
                                description: 'Sunil Chaturvedi, The Man Behind Gainwell Group',
                                url: 'https://www.tilindia.in/tilindia/assets/pdf/NBMCW-May-2025-SunilSir.pdf'
                            },
                            {
                                image: `${basePath}/pdf_file_689e926e3808b4.67632405_outlook.jpeg`,
                                date: 'July 15, 2025',
                                title: "Visionaries of $5 TRILLION ECONOMY",
                                description: 'Accelerated Journey to $5Trillion Economy',
                                url: 'https://www.tilindia.in/assets/docs/pdf/outlook-india.pdf'
                            },
                            {
                                image: `${basePath}/pdf_file_682585f4528146.15705021_TIL-Spotligh-April-2025.png`,
                                date: 'June 30, 2025',
                                title: "TIL Limited: Engineering India's Crane Legacy and Future",
                                description: "TIL Limited, in India's infrastructure evolution, carries a legacy of innovation and resilience. Established in 1944",
                                url: 'https://www.tilindia.in/tilindia/assets/pdf/ConstructionOpportunities.pdf'
                            }
                        ].map((news, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm overflow-hidden group"
                            >
                                <a href={news.url} target="_blank" rel="noopener noreferrer">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-4 w-full">
                                            <div className="flex items-center gap-2 text-xs text-gray-200 mb-1">
                                                <CalendarDays className="w-3 h-3" />
                                                <span>{news.date}</span>
                                            </div>
                                            <h3 className="text-sm font-bold text-white line-clamp-2">
                                                {news.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {news.description}
                                        </p>
                                        <div className="flex items-center text-sm text-[#F1B434] font-medium">
                                            <span>Read More</span>
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </section>


                {/* Upcoming Events Section */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-800">Events</h2>
                        {/* <Link href="/media/events" className="text-sm text-[#F1B434] hover:underline">
                            View All Events
                        </Link> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                image: `${basePath}/gallery_image_d08ee53ed4e304803de31d03fed03698.jpeg`,
                                date: 'November 15-18, 2025',
                                title: 'Diwali Celebration 2025',
                                description: "Join us at India's largest construction equipment exhibition showcasing our latest innovations"
                            },
                            {
                                image: `${basePath}/gallery_image_1f97c50034d5281cc66aa6ea06912ede.jpg`,
                                date: 'September 5-7, 2025',
                                title: 'Partnered Crane Owners Association AGM Meet ...',
                                description: 'Keynote presentation on sustainable construction practices'
                            }
                        ].map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm overflow-hidden group"
                            >
                                <Link href="/media/events">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3 h-48 md:h-36 relative overflow-hidden">
                                            <img
                                                src={event.image}
                                                alt="Event"
                                                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                                            />
                                            {/* <div className="absolute top-4 left-4 bg-[#F1B434] text-black text-xs font-bold px-2 py-1 rounded">
                                                Upcoming
                                            </div> */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                                            <div className="absolute bottom-0 left-0 p-4 w-full md:hidden">
                                                <h3 className="text-sm font-bold text-white line-clamp-2">
                                                    {event.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="md:w-2/3 p-6">
                                            {/* <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                                                <CalendarDays className="w-4 h-4" />
                                                <span>{event.date}</span>
                                            </div> */}
                                            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                                                {event.title}
                                            </h3>
                                            {/* <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                                {event.description}
                                            </p> */}
                                            <div className="flex items-center text-sm text-[#F1B434] font-medium">
                                                <span>All Events</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Coffee Table Book Section */}
                <section className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                    >
                        <div className="flex flex-col lg:flex-row">
                            {/* Left: Image */}
                            <div className="lg:w-1/2 h-64 lg:h-96 relative overflow-hidden">
                                <img
                                    src={`${basePath}/coffee-table-book.jpg`} // Replace with your actual image path
                                    alt="TIL Coffee Table Book"
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
                            </div>

                            {/* Right: Content */}
                            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                                    TIL Coffee Table Book
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Discover the rich legacy and innovative journey of TIL through our beautifully crafted coffee table book. 
                                    Featuring stunning visuals and inspiring stories from our decades of excellence in the heavy equipment industry.
                                </p>
                                <motion.button
                                    onClick={() => setIsCoffeeTableModalOpen(true)}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#F1B434] text-black font-medium rounded-lg hover:bg-[#FFE352] transition-colors w-fit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    Download Now
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Coffee Table Book Modal */}
            <CoffeeTableBookModal 
                isOpen={isCoffeeTableModalOpen} 
                onClose={() => setIsCoffeeTableModalOpen(false)} 
            />
        </div>
    );
};

export default Page;