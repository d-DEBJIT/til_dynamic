'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Zap } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type Milestone = {
    year: string;
    event: string;
    image?: string;
};

type DecadeGroup = {
    decade: string;
    events: Milestone[];
};

const groupByDecade = (milestones: Milestone[]): DecadeGroup[] => {
    const decadeMap: Record<string, Milestone[]> = {};

    milestones.forEach(m => {
        const yearNum = parseInt(m.year.split('-')[0]);
        const decade = `${Math.floor(yearNum / 10) * 10}s`;
        if (!decadeMap[decade]) decadeMap[decade] = [];
        decadeMap[decade].push(m);
    });

    return Object.entries(decadeMap).map(([decade, events]) => ({
        decade,
        events
    }));
};

const HistoryRoulette: React.FC<{ decades: DecadeGroup[]; autoPlayInterval?: number }> = ({
    decades,
    autoPlayInterval = 3000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const currentDecade = decades[currentIndex];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % decades.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + decades.length) % decades.length);

    useEffect(() => {
        if (autoPlayInterval > 0) {
            timerRef.current = setInterval(nextSlide, autoPlayInterval);
            return () => {
                if (timerRef.current) clearInterval(timerRef.current);
            };
        }
    }, [autoPlayInterval]);

    return (
        <div className="relative w-full mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Journey Through Decades</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] mx-auto mt-3 rounded-full" />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                    <div className="absolute w-full h-full rounded-full border-2 border-dashed border-gray-200" />
                    <div className="absolute w-6 h-6 rounded-full bg-[#F1B434] z-10 shadow-lg" />

                    {decades.map((d, i) => {
                        const angle = (2 * Math.PI * (i - currentIndex)) / decades.length;
                        const distance = 140;
                        const x = distance * Math.cos(angle);
                        const y = distance * Math.sin(angle);
                        const isActive = i === currentIndex;

                        return (
                            <motion.button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`absolute flex items-center justify-center rounded-full cursor-pointer transition-all duration-500 ${isActive
                                    ? 'bg-[#F1B434] text-white scale-125 shadow-xl font-bold ring-4 ring-[#F1B434] z-20 w-16 h-16'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 shadow-md z-10 w-12 h-12'
                                    }`}
                                style={{ transform: `translate(${x}px, ${y}px)` }}
                                aria-label={`View events from ${d.decade}`}
                            >
                                <span className={`${isActive ? 'text-xs' : 'text-[10px]'} font-medium`}>
                                    {d.decade}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-inner">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-gray-500">
                                Decade {currentIndex + 1} of {decades.length}
                            </span>
                            <div className="flex items-center gap-2">
                                <motion.button
                                    onClick={prevSlide}
                                    className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-all shadow-sm text-gray-700"
                                    aria-label="Previous decade"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </motion.button>
                                <motion.button
                                    onClick={nextSlide}
                                    className="p-2 bg-[#F1B434] text-white rounded-lg hover:bg-[#F1B434] transition-all shadow-sm"
                                    aria-label="Next decade"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-bold text-[#F1B434] mb-4">
                                    {currentDecade.decade}
                                </h3>
                                <ul className="text-gray-700 mb-6 leading-relaxed space-y-2">
                                    {currentDecade.events.map((e, idx) => (
                                        <li key={idx}>
                                            <strong>{e.year}:</strong> {e.event}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

const HistoryCarousel: React.FC<{
    milestones: Milestone[];
    baseIntervalMs?: number;
    acceleratedIntervalMs?: number;
    accelerationDurationMs?: number;
}> = ({
    milestones,
    baseIntervalMs = 3000,
    acceleratedIntervalMs = 1000,
    accelerationDurationMs = 5000
}) => {
        const [index, setIndex] = useState(0);
        const [paused, setPaused] = useState(false);
        const [speedUp, setSpeedUp] = useState(false);
        const timerRef = useRef<NodeJS.Timeout | null>(null);
        const accelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

        const total = milestones.length;

        const next = useCallback(() => {
            setIndex(prev => (prev + 1) % total);
        }, [total]);

        const prev = useCallback(() => {
            setIndex(prev => (prev - 1 + total) % total);
        }, [total]);

        const clearTimer = () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };

        const startTimer = useCallback(() => {
            clearTimer();
            if (!paused) {
                const interval = speedUp ? acceleratedIntervalMs : baseIntervalMs;
                timerRef.current = setInterval(next, interval);
            }
        }, [paused, speedUp, baseIntervalMs, acceleratedIntervalMs, next]);

        useEffect(() => {
            startTimer();
            return clearTimer;
        }, [startTimer]);

        const handleMouseEnter = () => {
            setPaused(true);
            clearTimer();
        };

        const handleMouseLeave = () => {
            setPaused(false);
            startTimer();
        };

        const handleSpeedUp = () => {
            setSpeedUp(true);
            if (accelTimeoutRef.current) clearTimeout(accelTimeoutRef.current);
            accelTimeoutRef.current = setTimeout(() => setSpeedUp(false), accelerationDurationMs);
        };

        useEffect(() => {
            return () => {
                if (accelTimeoutRef.current) clearTimeout(accelTimeoutRef.current);
            };
        }, []);

        const handleWheel = (e: React.WheelEvent) => {
            if (Math.abs(e.deltaY) < 2) return;
            if (e.deltaY > 0) next();
            else prev();
        };

        const current = milestones[index];

        return (
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onWheel={handleWheel}
                // className="relative w-full bg-white rounded-2xl shadow-xl p-6"
                role="region"
                aria-label="Company history timeline"
            >
                {/* <div className="flex flex-col lg:flex-row gap-8">
                    <div className="hidden lg:block lg:w-1/2"></div>

                    <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-hidden">
                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Timeline View</h2>
                            <div className="w-20 h-1.5 bg-gradient-to-r from-[#F1B434] to-yellow-300 mx-auto mt-3 rounded-full" />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm text-gray-500 font-medium">
                                {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
                            </div>
                            <div className="flex items-center gap-2">
                                <motion.button
                                    onClick={prev}
                                    className="px-3 py-1.5 text-sm rounded bg-white border border-gray-200 hover:bg-gray-50 shadow-sm flex items-center gap-1"
                                    aria-label="Previous milestone"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Prev
                                </motion.button>
                                <motion.button
                                    onClick={next}
                                    className="px-3 py-1.5 text-sm rounded bg-white border border-gray-200 hover:bg-gray-50 shadow-sm flex items-center gap-1"
                                    aria-label="Next milestone"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </motion.button>
                                <motion.button
                                    onClick={handleSpeedUp}
                                    className={`px-3 py-1.5 text-sm rounded border flex items-center gap-1 ${speedUp
                                        ? 'bg-[#F1B434] text-white border-[#F1B434]'
                                        : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
                                        } shadow-sm`}
                                    aria-pressed={speedUp}
                                    aria-label="Speed up timeline"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Zap className="w-4 h-4" />
                                    Speed Up
                                </motion.button>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-[#F1B434] text-white text-sm font-bold px-2 py-1 rounded">
                                {current.year}
                            </div>
                        </div>

                        <div className="relative h-32 md:h-40 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.year + current.event}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 flex flex-col justify-center"
                                >
                                    <p className="text-gray-700 text-lg leading-relaxed line-clamp-4">
                                        {current.event}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {current.image && (
                            <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={current.image}
                                    alt={current.year}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                            </div>
                        )}

                        <div className="mt-6">
                            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                <motion.div
                                    key={index + (speedUp ? '-fast' : '-base')}
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{
                                        duration: (speedUp ? acceleratedIntervalMs : baseIntervalMs) / 1000,
                                        ease: 'linear'
                                    }}
                                    className="h-2 bg-gradient-to-r from-[#F1B434] to-yellow-300"
                                />
                            </div>
                            <div className="mt-2 text-xs text-gray-500 flex justify-between">
                                <span>
                                    {paused ? 'Paused' : speedUp ? 'Fast Mode' : 'Auto-rotating'}
                                </span>
                                <span>
                                    {Math.round((speedUp ? acceleratedIntervalMs : baseIntervalMs) / 1000)}s interval
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    };

const MilestonesPage = () => {
    const milestonesData = [
        { year: '1944', event: 'Tractors India is incorporated.' },
        { year: '1950', event: 'Tractors India becomes a Coles Crane Distributor.' },
        { year: '1955', event: 'Tractors India goes public.' },
        { year: '1960', event: 'Enters Joint Venture with Coles Cranes.' },
        {
            year: '1962',
            event: "India's first indigenously manufactured mobile crane rolls out of the company's Kamarhati plant in Calcutta."
        },
        { year: '1972', event: 'Coles Crane of India changes name to Indian Crane Company Ltd.' },
        {
            year: '1976',
            event: 'Indian Crane Company amalgamated with Tractors India. Mr. Avijit Mazumdar takes over as Managing Director.'
        },
        { year: '1982', event: "Manufactures India's first rough terrain crane." },
        { year: '1985', event: 'Changes its name to become TIL Limited.' },
        {
            year: '1988',
            event: "Manufactures India's first 100-tonne truck-mounted mobile crane."
        },
        {
            year: '1994',
            event: 'Completes 50 years of its corporate journey. Gets ISO 9001 Material Handling Division certified by BVQI. TIL ties up with Grove USA for Rough Terrain & Truck Cranes.'
        },
        { year: '1995', event: 'Mr. Sumit Mazumder takes over as Managing Director.' },
        { year: '1996', event: 'TIL ties up with National Cranes, USA for Loader Cranes.' },
        {
            year: '1998',
            event: 'TIL ties up with Manitowoc, USA for Crawler Cranes dealership.'
        },
        {
            year: '2002-03',
            event: "TIL is awarded the Highest Exporter's Trophy for the Eastern region by the Engineering Export Promotion Council in the capital goods category."
        },
        { year: '2007', event: '5000th crane rolls out of the Kamarhati manufacturing plant.' },
        {
            year: '2008',
            event: 'Ties up with Nacco Material Handling Group (now Hyster-Yale Group) for forklifts and container handlers.'
        },
        {
            year: '2009',
            event: 'Ties up with Astec Inc for Hot Mix Asphalt Plants, bringing road building solutions to India.'
        },
        {
            year: '2010',
            event: 'Ties up with Astec Aggregate Mining Group, USA for Crushing & Screening Equipment.'
        },
        {
            year: '2011',
            event: 'Inaugurates the new factory at Changual, Kharagpur, and commences phase 1 production.'
        },
        { year: '2012', event: 'Kamarhati Plant completes 50 years of successful operations.' },
        { year: '2013', event: 'TIL receives L.N. Birla Memorial Award for Corporate Excellence.' },
        { year: '2016', event: 'CAT Distributorship divested and becomes part of TIPL (now Gainwell).' },
        {
            year: '2018',
            event: 'TIL Limited wins Indywood CSR Excellence Awards for Best CSR Campaign in Employee Engagement.'
        },
        { year: '2019', event: 'TIL completes 75 years of its existence on 22nd July 2019.' },
        {
            year: '2024',
            event: 'Acquired by the Gainwell Group through its group entity Indocrest Defence Services Private Limited (IDSPL) and new management is appointed.'
        }
    ];

    const groupedMilestones = groupByDecade(milestonesData);

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/milestone-banners.png`}
                    alt="Milestones"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
                
                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                                Our <span className="text-[#F1B434]">Milestones</span>
                            </h1>
                            <div className="w-24 h-1.5 bg-[#F1B434] rounded-full mb-4" />
                            <motion.p
                                            className="text-xl text-gray-100 max-w-xl leading-relaxed font-medium tracking-wide"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5, duration: 0.8 }}
                                          >
                                            Our Step Towards Success
                                          </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
                    <div className="flex items-center space-x-4 text-black mb-4">
                            <Link href="/about-us" className="flex items-center space-x-2 hover:text-[#F1B434] transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                <span>Back to About</span>
                            </Link>
                        </div>
                    {/* Decade Roulette */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <HistoryRoulette decades={groupedMilestones} autoPlayInterval={4000} />
                    </motion.div>

                    {/* Timeline Carousel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <HistoryCarousel milestones={milestonesData} />
                    </motion.div>

                    {/* Key Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-16 bg-white rounded-2xl shadow-xl p-8"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Achievements</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                Throughout our journey, we've achieved significant milestones that have shaped the construction equipment industry in India.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl font-bold text-[#F1B434] mb-2">80+</div>
                                <div className="text-gray-800 font-medium">Years of Experience</div>
                                <p className="text-gray-600 text-sm mt-2">Serving India's infrastructure since 1944</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl font-bold text-[#F1B434] mb-2">10+</div>
                                <div className="text-gray-800 font-medium">Countries Served</div>
                            </div>
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl font-bold text-[#F1B434] mb-2">3000+</div>
                                <div className="text-gray-800 font-medium">Active Machines</div>
                            </div>                           
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default MilestonesPage;