'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Building2, Globe } from 'lucide-react';
import Link from 'next/link';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const AboutSection: React.FC = () => {
  const [counts, setCounts] = useState({
    years: 0,
    satisfaction: 0,
    equipment: 0,
    countries: 0
  });

  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const achievements = [
    { icon: Target, value: `${counts.years}+`, label: 'Years In Material Handling', target: 80 },
    // { icon: Shield, value: `${counts.satisfaction}%`, label: 'Countries ', target: 10 },
    { icon: Building2, value: `${counts.equipment.toLocaleString()}+`, label: 'Active Machines', target: 3000 },
    { icon: Globe, value: `${counts.countries}+`, label: 'Countries Served', target: 10 }
  ];

  // Brand colors from guidelines
  const brandYellow = '#F1B434'; // RGB: R241 G180 B52
  const color = '#F6EB61'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          { threshold: 0.5 }
          
          // Animate the counts
          const duration = 3000; // 2 seconds
          const steps = 20; // Number of steps
          const interval = duration / steps;

          // Years counter
          let yearStep = 0;
          const yearInterval = setInterval(() => {
            yearStep++;
            const progress = yearStep / steps;
            const value = Math.floor(80 * progress);
            setCounts(prev => ({ ...prev, years: value }));
            
            if (yearStep >= steps) clearInterval(yearInterval);
          }, interval);

          // Satisfaction counter
          let satisfactionStep = 0;
          const satisfactionInterval = setInterval(() => {
            satisfactionStep++;
            const progress = satisfactionStep / steps;
            const value = Math.floor(95 * progress);
            setCounts(prev => ({ ...prev, satisfaction: value }));
            
            if (satisfactionStep >= steps) clearInterval(satisfactionInterval);
          }, interval);

          // Equipment counter
          let equipmentStep = 0;
          const equipmentInterval = setInterval(() => {
            equipmentStep++;
            const progress = equipmentStep / steps;
            const value = Math.floor(3000 * progress);
            setCounts(prev => ({ ...prev, equipment: value }));
            
            if (equipmentStep >= steps) clearInterval(equipmentInterval);
          }, interval);

          // Countries counter
          let countriesStep = 0;
          const countriesInterval = setInterval(() => {
            countriesStep++;
            const progress = countriesStep / steps;
            const value = Math.floor(10 * progress);
            setCounts(prev => ({ ...prev, countries: value }));
            
            if (countriesStep >= steps) clearInterval(countriesInterval);
          }, interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block text-lg font-bold tracking-tight"
            style={{ color: brandYellow }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            OUR LEGACY
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Building India's Infrastructure <span style={{ color: brandYellow }}>Since 1944</span>
          </h2>
          <div 
            className="w-24 h-1.5 mx-auto rounded-full mb-6"
            style={{ backgroundColor: brandYellow }}
          ></div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
              <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">
                TIL Limited (formerly Tractors India Limited) was established in 1944 as India's
                first heavy equipment distributor. Today, as part of the Gainwell Group, we've
                adopted new values while maintaining our commitment to excellence.
              </p>

              <Link
                href={`/about-us`}
                className="inline-flex items-center text-lg font-semibold mb-8 group"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                <motion.span
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                  <span 
                    className="group-hover:underline"
                    style={{ color: '[#F6EB61]' }}
                  >
                    Read More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    style={{ color: brandYellow }}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </motion.span>
              </Link>

              {/* Achievement Grid - Preserved as requested */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    className="p-4 rounded-xl bg-yellow-100 text-yellow-700 shadow-[0_4px_20px_rgba(241,180,52,0.3)] hover:shadow-[0_0_25px_8px_rgba(255,215,0,0.5)] transition-all duration-300 relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Enhanced golden glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-yellow-400/60 via-yellow-300/40 to-transparent pointer-events-none"></div>

                    <div className="flex items-center gap-3 relative z-10">
                      <div className="p-2 rounded-lg bg-yellow-200 bg-opacity-50 flex-shrink-0 group-hover:bg-opacity-70 transition-all duration-300">
                        <achievement.icon size={20} className="opacity-90" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xl sm:text-2xl font-bold">{achievement.value}</div>
                        <div className="text-sm opacity-80 leading-tight">{achievement.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96 lg:h-full">
              <motion.img
                src={`${basePath}/about.jpg`}
                alt="TIL Limited heavy equipment"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
                    Engineering Excellence Since 1944
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    Pioneering India's infrastructure development with world-class equipment
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;