'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const Hero3D: React.FC = () => {
  const images = [
    {
      src: `${basePath}/rough-terrain-crane.png`,
      height: 'h-[73.75vh]',
      maxWidth: 'max-w-[106.25vw]',
    },
    {
      src: `${basePath}/Grove_Range.png`,
      height: 'h-[47.5vh]',
      maxWidth: 'max-w-[66.5vw]',
    },
    {
      src: `${basePath}/ok3.png`,
      height: 'h-[65.5vh]',
      maxWidth: 'max-w-[115.5vw]',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Slideshow container */}
      <div className="relative z-20 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Blurred background shadow */}
              <div
                className="absolute z-0 blur-3xl opacity-40"
                style={{
                  height: currentImage.height.replace('h-[', '').replace(']', ''),
                  width: '100%',
                  backgroundImage: `url(${currentImage.src})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  filter: 'blur(60px)',
                }}
              />

              {/* Foreground Image */}
              <img
                src={currentImage.src}
                alt="Heavy Equipment"
                className={`relative z-10 object-contain pr-6 ${currentImage.height} ${currentImage.maxWidth} filter brightness-110 contrast-110 saturate-110`}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Gradient Shadow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20 blur-xl rounded-full" />
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 border border-white/20 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-1/3 right-20 w-12 h-12 border border-yellow-500/30 rotate-12 animate-float" />
      <div className="absolute top-1/2 right-32 w-6 h-6 bg-yellow-500/20 rounded-full animate-pulse" />
    </div>
  );
};

export default Hero3D;
