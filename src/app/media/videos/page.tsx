'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CalendarDays, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  const videoCategories = [
    {
      id: 'product',
      name: 'Product Videos',
      description: 'Detailed showcases of our equipment and solutions'
    },
    {
      id: 'event',
      name: 'Event Highlights',
      description: 'Coverage from exhibitions and corporate events'
    },
    {
      id: 'customer',
      name: 'Customer Stories',
      description: 'Success stories from our valued customers'
    },
    {
      id: 'corporate',
      name: 'Corporate Videos',
      description: 'Company updates and leadership messages'
    }
  ];

  const featuredVideos = [
    {
      id: 1,
      title: 'Introducing Our New Hydrogen-Powered Crane',
      description: 'Watch the unveiling of our revolutionary eco-friendly crane with zero emissions technology.',
      category: 'product',
      date: '2025-07-15',
      duration: '2:45',
      thumbnail: `${basePath}/hydrogen-crane-video.jpg`,
      featured: true
    },
    {
      id: 2,
      title: 'EXCON 2025 Day 1 Highlights',
      description: 'Relive the excitement from the first day of India\'s largest construction equipment exhibition.',
      category: 'event',
      date: '2025-07-10',
      duration: '3:22',
      thumbnail: `${basePath}/excon-highlights.jpg`,
      featured: true
    }
  ];

  const recentVideos = [
    {
      id: 3,
      title: 'TIL Manufacturing Process - Behind the Scenes',
      description: 'An exclusive look at how we build our world-class material handling equipment.',
      category: 'corporate',
      date: '2025-06-28',
      duration: '4:15',
      thumbnail: `${basePath}/manufacturing-video.jpg`
    },
    {
      id: 4,
      title: 'Customer Success: Port of Mumbai',
      description: 'How our equipment helps one of India\'s busiest ports operate efficiently.',
      category: 'customer',
      date: '2025-06-20',
      duration: '3:50',
      thumbnail: `${basePath}/customer-video.jpg`
    },
    {
      id: 5,
      title: 'Safety Features in TIL Cranes',
      description: 'Learn about the advanced safety technologies built into our crane systems.',
      category: 'product',
      date: '2025-06-15',
      duration: '2:30',
      thumbnail: `${basePath}/safety-video.jpg`
    },
    {
      id: 6,
      title: 'TIL Annual Innovation Summit 2025',
      description: 'Highlights from our internal innovation challenge and awards ceremony.',
      category: 'corporate',
      date: '2025-06-05',
      duration: '5:10',
      thumbnail: `${basePath}/innovation-summit.jpg`
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/video-bg.jpg`}
          alt="TIL Videos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
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
                VIDEO LIBRARY
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                TIL <span className="text-[#F1B434]">Videos</span>
              </motion.h1>
              
              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#FFE352] rounded-full mb-4"
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
                Explore our collection of product demonstrations, event coverage, and corporate videos.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
        {/* Video Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-40 bg-gradient-to-br from-[#F1B434]/20 to-[#FFE352]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#F1B434] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[#F1B434] transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                <Link 
                  href={`/media/video/category/${category.id}`} 
                  className="inline-flex items-center text-sm text-[#F1B434] hover:underline"
                >
                  View all
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Videos */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">Featured Videos</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.article
                key={video.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#F1B434] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <span className="inline-block bg-white text-black text-xs font-bold px-2 py-1 rounded mb-2">
                      {video.category.toUpperCase()}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F1B434] transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 gap-4 mb-2">
                  <span>{formatDate(video.date)}</span>
                  <span>•</span>
                  <span>{video.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <Link 
                  href={`/media/video/${video.id}`} 
                  className="inline-flex items-center text-[#F1B434] font-medium hover:underline"
                >
                  Watch video
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Recent Videos */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">Recent Videos</h2>
            <Link href="/media/video/all" className="text-sm text-[#F1B434] hover:underline">
              View All Videos
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVideos.map((video, index) => (
              <motion.article
                key={video.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#F1B434] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block bg-[#F1B434] text-black text-xs font-bold px-2 py-1 rounded">
                      {video.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center text-xs text-gray-500 gap-3 mb-2">
                  <span>{formatDate(video.date)}</span>
                  <span>•</span>
                  <span>{video.duration}</span>
                </div>
                <Link 
                  href={`/media/video/${video.id}`} 
                  className="inline-flex items-center text-sm text-[#F1B434] hover:underline"
                >
                  Watch now
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Video Subscription CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 my-12 rounded-lg border-l-4 border-[#F1B434]"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Never Miss a Video</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Subscribe to our YouTube channel to be the first to see our latest videos, 
              product launches, and event coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-[#F1B434] text-black font-semibold hover:bg-[#FFE352] transition-all rounded-lg flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Subscribe on YouTube
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all rounded-lg">
                View Playlists
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Page;