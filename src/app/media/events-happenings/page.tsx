'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'EXCON 2025 - International Construction Equipment Trade Fair',
      date: '2025-11-15',
      endDate: '2025-11-18',
      location: 'Bangalore International Exhibition Centre, India',
      description: 'Join us at India\'s largest construction equipment exhibition showcasing our latest innovations in material handling and construction equipment.',
      image: `${basePath}/excon-event.jpg`,
      category: 'Trade Show',
      featured: true
    },
    {
      id: 2,
      title: 'India Construction Summit 2025',
      date: '2025-09-05',
      endDate: '2025-09-07',
      location: 'Hyderabad Convention Center, India',
      description: 'Keynote presentation on sustainable construction practices and exhibition of our eco-friendly equipment solutions.',
      image: `${basePath}/construction-summit.jpg`,
      category: 'Conference',
      featured: true
    },
    {
      id: 3,
      title: 'TIL Product Roadshow - Eastern Region',
      date: '2025-08-20',
      endDate: '2025-08-22',
      location: 'Kolkata, Bhubaneswar, Guwahati',
      description: 'Hands-on demonstrations of our latest material handling equipment across multiple cities in Eastern India.',
      image: `${basePath}/product-roadshow.jpg`,
      category: 'Roadshow'
    },
    {
      id: 4,
      title: 'Crane Operators Training Program',
      date: '2025-10-10',
      endDate: '2025-10-15',
      location: 'TIL Training Center, Kharagpur',
      description: 'Certification program for crane operators featuring our latest crane models and safety technologies.',
      image: `${basePath}/training-event.jpg`,
      category: 'Training'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'bauma CONEXPO INDIA 2024',
      date: '2024-01-31',
      endDate: '2024-02-03',
      location: 'Delhi-NCR, India',
      description: 'Showcased our new range of compact construction equipment and hydrogen-powered solutions.',
      image: `${basePath}/bauma-event.jpg`,
      category: 'Trade Show'
    },
    {
      id: 6,
      title: 'TIL Customer Meet 2024',
      date: '2024-03-15',
      endDate: '2024-03-16',
      location: 'Goa, India',
      description: 'Annual gathering of TIL customers featuring product demonstrations and networking opportunities.',
      image: `${basePath}/customer-meet.jpg`,
      category: 'Networking'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start.getMonth() === end.getMonth()) {
      return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}-${end.getDate()}, ${start.getFullYear()}`;
    } else {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/events-bg.jpg`}
          alt="TIL Events"
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
                EVENTS & EXHIBITIONS
              </motion.span>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                TIL <span className="text-[#F1B434]">Events</span>
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
                Discover upcoming trade shows, exhibitions, and corporate events from TIL Limited.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.filter(e => e.featured).map((event, index) => (
              <motion.article
                key={event.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#F1B434] text-black text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <span className="inline-block bg-white text-black text-xs font-bold px-2 py-1 rounded mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F1B434] transition-colors">
                      {event.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 gap-4 mb-2">
                  <span className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-1 text-[#F1B434]" />
                    {formatDateRange(event.date, event.endDate)}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-[#F1B434]" />
                    {event.location}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link 
                  href={`/media/events/${event.id}`} 
                  className="inline-flex items-center text-[#F1B434] font-medium hover:underline"
                >
                  View event details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {upcomingEvents.filter(e => !e.featured).map((event, index) => (
              <motion.article
                key={event.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#F1B434] transition-colors">
                      {event.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 gap-2 mb-1">
                  <span className="flex items-center">
                    <CalendarDays className="w-3 h-3 mr-1 text-[#F1B434]" />
                    {formatDateRange(event.date, event.endDate)}
                  </span>
                </div>
                <Link 
                  href={`/media/events/${event.id}`} 
                  className="inline-flex items-center text-sm text-[#F1B434] hover:underline"
                >
                  More info
                  <ChevronRight className="w-3 h-3 ml-1" />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">Past Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <motion.article
                key={event.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-40">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="flex items-center text-xs text-gray-500 gap-2 mb-1">
                  <span className="flex items-center">
                    <CalendarDays className="w-3 h-3 mr-1 text-[#F1B434]" />
                    {formatDateRange(event.date, event.endDate)}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-[#F1B434] transition-colors">
                  {event.title}
                </h3>
                <Link 
                  href={`/media/events/${event.id}`} 
                  className="inline-flex items-center text-xs text-[#F1B434] hover:underline"
                >
                  View highlights
                  <ChevronRight className="w-3 h-3 ml-1" />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Event Calendar CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 my-12 rounded-lg border-l-4 border-[#F1B434]"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with TIL Events</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Get notified about upcoming events, exhibitions, and product demonstrations. 
              Subscribe to our events calendar or download our annual events schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-[#F1B434] text-black font-semibold hover:bg-[#FFE352] transition-all rounded-lg">
                Subscribe to Calendar
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all rounded-lg">
                Download Schedule
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Page;