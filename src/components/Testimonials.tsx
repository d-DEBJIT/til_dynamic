'use client';
import React, { useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Testimonials: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [expandedCard, setExpandedCard] = useState<{ 
    id: number; 
    row: 'top' | 'bottom'; 
    direction: 'up' | 'down';
    position: { left: number; top: number; height: number } 
  } | null>(null);

  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const hoverCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        expandedCard &&
        hoverCardRef.current &&
        !hoverCardRef.current.contains((event.target as Node))
      ) {
        setExpandedCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [expandedCard]);

  const topTestimonials = [
    { id: 1, name: 'Sarah Johnson', position: 'Marketing Director', company: 'TechCorp', image: `${basePath}/no_image.jpg`, rating: 5, text: "TIL's equipment revolutionized our construction projects. The reliability and performance exceeded our expectations." },
    { id: 2, name: 'Michael Chen', position: 'CTO', company: 'StartUp Labs', image: `${basePath}/no_image.jpg`, rating: 4, text: "We've been using TIL cranes for 5 years. Their durability in harsh conditions is unmatched in the industry." },
    { id: 3, name: 'Emma Williams', position: 'Project Manager', company: 'DesignHub', image: `${basePath}/no_image.jpg`, rating: 5, text: "The technical support from TIL is exceptional. They've helped us optimize our equipment usage significantly." },
    { id: 4, name: 'David Kim', position: 'Operations Lead', company: 'LogiChain', image: `${basePath}/no_image.jpg`, rating: 5, text: "TIL's reach stackers have transformed our port operations. The efficiency gains have been remarkable." },
  ];

  const bottomTestimonials = [
    { id: 5, name: 'Neeraj Arora', position: 'Construction Head', company: 'InfraBuild', image: `${basePath}/no_image.jpg`, rating: 5, text: "With 15 years in construction, I can confidently say TIL's equipment is the backbone of our major projects." },
    { id: 6, name: 'Priya Patel', position: 'Site Engineer', company: 'Metro Rail Corp', image: `${basePath}/no_image.jpg`, rating: 5, text: "The precision of TIL's cranes is crucial for our metro rail projects. Their safety features are industry-leading." },
    { id: 7, name: 'Rajesh Kumar', position: 'Project Director', company: 'L&T Construction', image: `${basePath}/no_image.jpg`, rating: 5, text: "Our metro rail projects rely on TIL equipment. The durability and performance are unmatched in the industry." },
    { id: 8, name: 'Ananya Singh', position: 'Plant Manager', company: 'SteelWorks', image: `${basePath}/no_image.jpg`, rating: 4, text: "TIL's material handling solutions have streamlined our steel plant operations with minimal downtime." },
  ];

  const doubledTop = [...topTestimonials, ...topTestimonials];
  const doubledBottom = [...bottomTestimonials, ...bottomTestimonials];

  const handleReadMoreClick = (
    e: React.MouseEvent | React.TouchEvent,
    testimonial: any,
    row: 'top' | 'bottom'
  ) => {
    e.stopPropagation();

    const target = e.currentTarget as HTMLDivElement;
    const rect = target.closest('.testimonial-card')?.getBoundingClientRect();
    if (!rect) return;

    const hoverCardHeight = 208; // approximate height of HoverCardContent
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - (rect.top + rect.height);

    let direction: 'up' | 'down';
    if (spaceBelow >= hoverCardHeight) {
      direction = 'down';
    } else if (spaceAbove >= hoverCardHeight) {
      direction = 'up';
    } else {
      direction = spaceBelow > spaceAbove ? 'down' : 'up';
    }

    const alreadyExpanded = expandedCard?.id === testimonial.id;
    if (alreadyExpanded) {
      setExpandedCard(null);
    } else {
      setExpandedCard({
        id: testimonial.id,
        row,
        direction,
        position: {
          left: rect.left,
          top: rect.top,
          height: rect.height,
        },
      });
    }
  };

  const shouldPause = hovered || expandedCard !== null;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-8 md:py-16 w-full overflow-hidden relative" style={{ fontFamily: 'Arial, sans-serif' }}>
      <motion.div
        className="text-center mb-8 md:mb-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#F1B434] text-lg font-bold tracking-tight"
          initial={{ 
            opacity: 0,
            letterSpacing: "-0.05em"
          }}
          whileInView={{
            opacity: 1,
            letterSpacing: "0.02em",
          }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 0.77, 0.47, 0.97]
          }}
          viewport={{ once: true, margin: "-20%" }}
        >
          A LEGACY OF EXCELLENCE
        </motion.span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          What Our <span className="text-[#F1B434]">Clients Say</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] mx-auto rounded-full mb-6"></div>
        <p className="mt-4 md:mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed">
          Find our offices across India with dedicated support teams ready to assist you.
        </p>
      </motion.div>

      {/* Top Row */}
      <div
        className="relative w-full overflow-hidden mb-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        <div
          ref={topRowRef}
          className={`flex gap-4 md:gap-6 w-max animate-scroll-left whitespace-nowrap px-4 ${shouldPause ? 'pause' : ''}`}
        >
          {doubledTop.map((testimonial, i) => (
            <div key={`top-${i}`} className="relative h-auto">
              <TestimonialCard
                testimonial={testimonial}
                onReadMore={(e) => handleReadMoreClick(e, testimonial, 'top')}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row
      <div
        className="relative w-full overflow-hidden mt-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        <div
          ref={bottomRowRef}
          className={`flex gap-4 md:gap-6 w-max animate-scroll-right whitespace-nowrap px-4 ${shouldPause ? 'pause' : ''}`}
        >
          {doubledBottom.map((testimonial, i) => (
            <div key={`bottom-${i}`} className="relative h-auto">
              <TestimonialCard
                testimonial={testimonial}
                onReadMore={(e) => handleReadMoreClick(e, testimonial, 'bottom')}
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* Expanded Hover Card */}
      <AnimatePresence>
        {expandedCard && (
          <motion.div
            ref={hoverCardRef}
            initial={{ opacity: 0, y: expandedCard.row === 'top' ? -10 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: expandedCard.row === 'top' ? -10 : 10 }}
            transition={{ duration: 0.2 }}
            className="fixed z-30 w-[calc(100%-2rem)] md:w-[380px] mx-4 md:mx-0"
            style={{
              left: window.innerWidth < 768 ? '1rem' : expandedCard.position.left,
              top:
                expandedCard.direction === 'down'
                  ? expandedCard.position.top + expandedCard.position.height
                  : expandedCard.position.top - 208,
            }}
          >
            <HoverCardContent
              testimonial={[...topTestimonials, ...bottomTestimonials].find((t) => t.id === expandedCard.id)!}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .animate-scroll-left, .animate-scroll-right {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: any; onReadMore: (e: React.MouseEvent | React.TouchEvent) => void }> = ({ testimonial, onReadMore }) => (
  <div 
    className="testimonial-card w-[300px] md:w-[380px] bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
    style={{ fontFamily: 'Arial, sans-serif' }}
  >
    <div className="flex items-center mb-3 md:mb-4">
      <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 border-2 border-yellow-100" />
      <div className="text-left">
        <h3 className="font-bold text-gray-800 text-sm md:text-base" style={{ fontFamily: 'Arial Narrow, sans-serif' }}>{testimonial.name}</h3>
        <p className="text-xs md:text-sm text-yellow-600 font-medium">{testimonial.position} | {testimonial.company}</p>
      </div>
    </div>
    <div className="flex mb-2 md:mb-3">
      {Array(testimonial.rating).fill(0).map((_, j) => (
        <Star key={j} size={14} className="text-yellow-500 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4 leading-relaxed line-clamp-3 overflow-hidden">
      "{testimonial.text}"
    </p>
    <div 
      onClick={(e) => onReadMore(e)}
      onTouchStart={(e) => onReadMore(e)}
      className="text-xs text-yellow-600 font-medium cursor-pointer select-none hover:text-yellow-700 transition-colors"
    >
      Read full review →
    </div>
  </div>
);

const HoverCardContent: React.FC<{ testimonial: any }> = ({ testimonial }) => (
  <div 
    className="bg-gradient-to-r from-[#0f1419] to-[#1a2233] border border-yellow-500/20 rounded-xl p-4 md:p-6 shadow-lg"
    style={{ fontFamily: 'Arial, sans-serif' }}
  >
    <div className="flex items-center mb-3 md:mb-4">
      <img 
        src={testimonial.image} 
        alt={testimonial.name} 
        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 border-2 border-yellow-400/30" 
      />
      <div className="text-left">
        <h3 className="font-bold text-white text-sm md:text-base" style={{ fontFamily: 'Arial Narrow, sans-serif' }}>{testimonial.name}</h3>
        <p className="text-xs md:text-sm text-yellow-400/80 font-medium">
          {testimonial.position} | {testimonial.company}
        </p>
      </div>
    </div>
    <div className="flex mb-2 md:mb-3">
      {Array(testimonial.rating).fill(0).map((_, j) => (
        <Star key={j} size={14} className="text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4 leading-relaxed whitespace-normal">
      "{testimonial.text}"
    </p>
  </div>
);

export default Testimonials;