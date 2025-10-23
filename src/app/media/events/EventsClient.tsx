'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, MapPin, ChevronRight, X, ChevronLeft, ChevronRight as RightIcon } from 'lucide-react';

interface EventImage {
  banner_alt: string;
  banner_image: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  endDate: string;
  location: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  images: EventImage[];
  modification_time: Date | null;
}

interface EventsClientProps {
  initialUpcomingEvents: Event[];
  initialPastEvents: Event[];
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const EventsClient: React.FC<EventsClientProps> = ({ 
  initialUpcomingEvents, 
  initialPastEvents 
}) => {
  const [upcomingEvents] = useState<Event[]>(initialUpcomingEvents);
  const [pastEvents] = useState<Event[]>(initialPastEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}-${end.getDate()}, ${start.getFullYear()}`;
    } else {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    }
  };

  const openEventModal = (event: Event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/Media-page.jpg`}
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
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                TIL <span className="text-[#F1B434]">Events</span>
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
                Stay Updated, Stay Connected
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
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
                  onClick={() => openEventModal(event)}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
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
                  <div className="inline-flex items-center text-[#F1B434] font-medium hover:underline cursor-pointer">
                    View event details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
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
                  onClick={() => openEventModal(event)}
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
                  <div className="inline-flex items-center text-sm text-[#F1B434] hover:underline cursor-pointer">
                    More info
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Past Events */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">Past Events</h2>
          </div>

          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openEventModal(event)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 h-40">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1 group-hover:text-[#F1B434] transition-colors">
                    {event.title}
                  </h3>
                  <div className="inline-flex items-center text-xs text-[#F1B434] hover:underline cursor-pointer">
                    View highlights
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No events available.</p>
            </div>
          )}
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

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEventModal}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800">{selectedEvent.title}</h3>
                <button
                  onClick={closeEventModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {/* Main Image */}
                <div className="relative mb-6">
                  {selectedEvent.images.length > 0 ? (
                    <>
                      <img
                        src={`${basePath}/${selectedEvent.images[currentImageIndex].banner_image}`}
                        alt={selectedEvent.images[currentImageIndex].banner_alt}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                      
                      {/* Navigation Arrows */}
                      {selectedEvent.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          >
                            <RightIcon className="w-6 h-6" />
                          </button>
                        </>
                      )}

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {selectedEvent.images.length}
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">No images available</span>
                    </div>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                {selectedEvent.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
                    {selectedEvent.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                          index === currentImageIndex ? 'border-[#F1B434]' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={`${basePath}/${image.banner_image}`}
                          alt={image.banner_alt}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Event Details</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-2 text-[#F1B434]" />
                        <span>{formatDateRange(selectedEvent.date, selectedEvent.endDate)}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-[#F1B434]" />
                        <span>{selectedEvent.location}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                    <p className="text-sm text-gray-600">{selectedEvent.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsClient;