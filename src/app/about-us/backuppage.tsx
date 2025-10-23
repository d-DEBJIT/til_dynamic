'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from "react";
import {
    ArrowRight,
    ChevronDown,
    Phone,
    Mail,
    MapPin,
    Factory,
    Users,
    Trophy,
    Globe,
    Clock,
    Shield,
    HeartHandshake,
    Zap,
    X
} from 'lucide-react';
import Link from "next/link";
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
        const yearNum = parseInt(m.year.split('-')[0]); // Handles cases like "2002-03"
        const decade = `${Math.floor(yearNum / 10) * 10}s`; // e.g., 1994 → "1990s"
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

    // autoplay
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
            {/* Header */}
            <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Journey Through Decades</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#F1B434] to-yellow-300 mx-auto mt-3 rounded-full" />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Circular Timeline */}
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

                {/* Detail Panel */}
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

                        <div className="flex gap-4 justify-center">
                            <motion.button
                                onClick={() => {
                                    const randomIndex = Math.floor(Math.random() * decades.length);
                                    setCurrentIndex(randomIndex);
                                }}
                                className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all shadow-sm text-sm font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Milestones
                            </motion.button>
                        </div>
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
                className="relative w-full bg-white rounded-2xl shadow-xl p-6"
                role="region"
                aria-label="Company history timeline"
            >
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="hidden lg:block lg:w-1/2"></div>

                    <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-hidden">
                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-800">Our Timeline</h2>
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
                </div>
            </div>
        );
    };

const PageContent = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<string>('overview');
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const [selectedLeader, setSelectedLeader] = useState<null | {
        name: string;
        title: string;
        description: string;
        image: string;
    }>(null);

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && tabs.some(t => t.id === tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        router.push(`${pathname}?tab=${tabId}`);
    };

    const submenuData = {
        company: {
            items: [
                {
                    name: 'Company History',
                    description: 'Explore our 80+ years of engineering excellence',
                    image: `${basePath}/company-history.jpeg`
                },
                {
                    name: 'Milestones',
                    description: 'Key achievements in our journey',
                    image: `${basePath}/milestone.png`
                },
                {
                    name: 'Awards & Recognition',
                    description: 'Industry accolades and certifications',
                    image: `${basePath}/awards.jpg`
                },
                {
                    name: 'Our Presence',
                    description: 'Our international footprint and partnerships',
                    image: `${basePath}/our-presence.jpg`
                },
                {
                    name: 'Manufacturing Facilities',
                    description: 'State-of-the-art production plants',
                    image: `${basePath}/manufacturing.jpg`
                },
                {
                    name: 'Quality Standards',
                    description: 'Our commitment to excellence',
                    image: `${basePath}/quality-standards.jpg`
                }
            ],
            media: {
                image: `${basePath}/legacy.jpg`,
                title: 'Our Legacy',
                description:
                    '80+ years of engineering excellence in construction and material handling equipment.',
                cta: 'Learn More',
                features: ['80+ Years Experience', 'Global Presence', 'ISO Certified']
            }
        },
        leadership: {
            items: [
                {
                    name: "Board of Directors",
                    description: "Meet our governing body and strategic advisors",
                    image: `${basePath}/board-directors.jpg`,
                },
                {
                    name: "Executive Team",
                    description: "Our day-to-day leadership team",
                    image: `${basePath}/executive-team.jpg`,
                },
                {
                    name: "Management Committee",
                    description: "Department heads and functional leaders",
                    image: `${basePath}/management-committee.jpg`,
                },
                {
                    name: "Advisory Board",
                    description: "Industry experts guiding our strategy",
                    image: `${basePath}/advisory-board.jpg`,
                },
            ],
            media: {
                image: `${basePath}/leadership.jpg`,
                title: "Leadership Team",
                description:
                    "Experienced leaders driving innovation and growth in the construction industry.",
                cta: "Meet Our Team",
                features: [
                    "Industry Veterans",
                    "Global Experience",
                    "Innovation Focus",
                ],
            },
        },
        milestones: {
            items: [
                {
                    name: 'Foundation & Early Years',
                    description: 'Our humble beginnings and initial successes',
                    image: `${basePath}/foundation.jpg`
                },
                {
                    name: 'Key Innovations',
                    description: 'Breakthrough products and technologies',
                    image: `${basePath}/innovations.jpg`
                },
                {
                    name: 'Expansion Phases',
                    description: 'Growth of our operations and facilities',
                    image: `${basePath}/expansion.jpg`
                },
                {
                    name: 'Recent Achievements',
                    description: 'Our latest accomplishments and awards',
                    image: `${basePath}/achievements.jpg`
                }
            ],
            media: {
                image: `${basePath}/milestone.png`,
                title: 'Our Journey',
                description: 'Key milestones that define our growth and success in the industry.',
                cta: 'View Timeline',
                features: ['80+ Years', '100+ Innovations', 'Global Reach']
            }
        },
        values: {
            items: [
                {
                    name: 'Mission Statement',
                    description: 'Our purpose and reason for being',
                    image: `${basePath}/mission.jpg`
                },
                {
                    name: 'Vision 2030',
                    description: 'Our aspirations for the future',
                    image: `${basePath}/vision.jpg`
                },
                {
                    name: 'Core Values',
                    description: 'Principles that guide our actions',
                    image: `${basePath}/values.jpg`
                },
                {
                    name: 'Ethics & Integrity',
                    description: 'Our commitment to doing business right',
                    image: `${basePath}/ethics.jpg`
                }
            ],
            media: {
                image: `${basePath}/vision.jpg`,
                title: 'Our Values',
                description: 'Committed to excellence, innovation, and sustainable growth.',
                cta: 'Our Philosophy',
                features: ['Customer First', 'Innovation', 'Sustainability']
            }
        },
        corporate: {
            items: [
                {
                    name: 'Environmental Policy',
                    description: 'Our commitment to sustainable operations',
                    image: `${basePath}/environmental.jpg`
                },
                {
                    name: 'Green Manufacturing',
                    description: 'Eco-friendly production processes',
                    image: `${basePath}/green-manufacturing.jpg`
                },
                {
                    name: 'Community Impact',
                    description: 'Initiatives that benefit local communities',
                    image: `${basePath}/community.jpg`
                },
                {
                    name: 'Employee Welfare',
                    description: 'Programs for our workforce wellbeing',
                    image: `${basePath}/employee-welfare.jpg`
                }
            ],
            media: {
                image: `${basePath}/social.jpg`,
                title: 'Sustainability',
                description:
                    'Leading the way in environmentally responsible manufacturing and operations.',
                cta: 'Green Initiatives',
                features: ['Carbon Neutral', 'Green Tech', 'Eco-Friendly']
            }
        },
        codeofconduct: {
            items: [
                {
                    name: 'Business Ethics',
                    description: 'Our standards for ethical business practices',
                    image: `${basePath}/ethics.jpg`
                },
                {
                    name: 'Anti-Corruption',
                    description: 'Policies against bribery and corruption',
                    image: `${basePath}/anti-corruption.jpg`
                },
                {
                    name: 'Compliance Framework',
                    description: 'Ensuring adherence to laws and regulations',
                    image: `${basePath}/compliance.jpg`
                }
            ],
            media: {
                image: `${basePath}/code_of_conduct.png`,
                title: 'Code of Conduct',
                description:
                    'Our commitment to ethical business practices and corporate governance.',
                cta: 'View Policy',
                features: ['Ethical Standards', 'Compliance', 'Transparency']
            }
        },
        facilities: {
            items: [
                {
                    name: 'Kolkata Headquarters',
                    description: 'Our corporate office and main facility',
                    image: `${basePath}/kol.jpeg`,
                },
                {
                    name: 'Manufacturing Plants',
                    description: 'State-of-the-art production facilities',
                    image: `${basePath}/plants.jpg`
                },
                {
                    name: 'R&D Centers',
                    description: 'Innovation hubs driving product development',
                    image: `${basePath}/rd-centers.jpg`
                },
                {
                    name: 'Regional Offices',
                    description: 'Our presence across India',
                    image: `${basePath}/regional-offices.jpg`
                }
            ],
            media: {
                image: `${basePath}/facilities.jpg`,
                title: 'Our Facilities',
                description: 'World-class manufacturing plants and offices supporting our operations.',
                cta: 'Virtual Tour',
                features: ['Modern Infrastructure', 'Advanced Equipment', 'Sustainable Design']
            }
        }
    };

    const tabs = [
        {
            id: 'overview',
            title: 'Overview',
            icon: <Factory className="w-5 h-5" />,
            submenu: submenuData.company
        },
        {
            id: 'corporate',
            title: 'Corporate Profile',
            icon: <Factory className="w-5 h-5" />,
            submenu: submenuData.corporate,
        },
        {
            id: 'leadership',
            title: 'Board of Directors',
            icon: <Users className="w-5 h-5" />,
            submenu: submenuData.leadership
        },
        {
            id: 'history',
            title: 'Milestones',
            icon: <Clock className="w-5 h-5" />,
            submenu: submenuData.milestones
        },
        
        {
            id: 'values',
            title: 'Vision and Values',
            icon: <HeartHandshake className="w-5 h-5" />,
            submenu: submenuData.values
        },
        
        {
            id: 'awards',
            title: 'Corporate Social Responsibility',
            icon: <Trophy className="w-5 h-5" />,
            submenu: submenuData.company
        },
        {
            id: 'global',
            title: 'Code of Conduct',
            icon: <Globe className="w-5 h-5" />,
            submenu: submenuData.company
        },
        {
            id: 'facility',
            title: 'Facility',
            icon: <Globe className="w-5 h-5" />,
            submenu: submenuData.company
        }
    ];

    const contentData = {
        overview: {
            title: 'About TIL Limited',
            description:
                'TIL Limited is a leading Indian industrial equipment manufacturer with a rich legacy of over 75 years in material handling and construction equipment.',
            content: [
                'Partnering India’s Infrastructure growth since 1944, TIL Limited is one of the leading providers of a wide range of infrastructure equipment that represent some of the finest in global technology. Based out of Kolkata, West Bengal, we are engaged in the design, manufacture and marketing of a comprehensive range of material handling, lifting, port equipment and road building solutions – duly supported by an integrated after-sales support that is geared to enhancing customer satisfaction. With a pan-India network of branch offices and recognized as a market leader in Mobile Cranes and Reach Stackers, TIL is a name that is synonymous with reliability, productivity and efficiency…'
            ],
            image: `${basePath}/about-us.jpg`,
            
        },
        corporate: {
            title: 'Corporate Profile',
            description: 'TIL Limited was formerly known as Tractors India Limited. Today TIL is now expanded and the company is simply known as TIL Limited.',
            content: [
                "TIL Limited has been a valuable partner in India's infrastructure development since 1944, and is reckoned for offering a diverse range of infrastructure equipment representing some of the finest in global technology. Starting from 2024, TIL Limited has seamlessly integrated itself into Indocrest Defence Services Private Limited (IDSPL), a subsidiary of Gainwell Group.",
                "We are engaged in the design, manufacturing, and marketing of a comprehensive selection of material handling and port equipment specifically tailored for the Indian market. These products are supported by a seamless after-sales service. TIL has earned a reputation as a market leader in mobile cranes and reach stackers, with our offerings known for their unwavering reliability, productivity, and efficiency. The company's values of integrity, transparency, accountability, leadership, teamwork, knowledge, and customer orientation serve as the guiding principles that shape and define our everyday actions.",
                "Headquartered in Kolkata, we have regional offices in major cities across India, ensuring a widespread presence. The company operates two factories in Eastern India, including a state-of-the-art, purpose-built mobile crane manufacturing facility in Kamarhati, Kolkata - the sole of its kind in the country. Additionally, TIL boasts an ERP-enabled factory in Kharagpur. Both factories hold certifications under ISO 9001:2015 and DIN EN ISO 3834-2 international quality management system standards.",
                "We have established global alliances with Grove Worldwide and Manitowoc Crane Group of the USA, as well as Hyster® (a division of Hyster-Yale Group, Inc.) of the USA."
            ],
            image: `${basePath}/about-us.png`
        },
        history: {
            title: 'Our Journey',
            description:
                "From humble beginnings to becoming an industry leader, our journey mirrors India's industrial growth story.",
            milestones: [
                { year: '1944', event: 'Tractors India is incorporated.' },
                { year: '1950', event: 'Tractors India becomes a Coles Crane Distributor.' },
                { year: '1955', event: 'Tractors India goes public.' },
                { year: '1960', event: 'Enters Joint Venture with Coles Cranes.' },
                {
                    year: '1962',
                    event:
                        "India's first indigenously manufactured mobile crane rolls out of the company's Kamarhati plant in Calcutta."
                },
                { year: '1972', event: 'Coles Crane of India changes name to Indian Crane Company Ltd.' },
                {
                    year: '1976',
                    event:
                        'Indian Crane Company amalgamated with Tractors India. Mr. Avijit Mazumdar takes over as Managing Director.'
                },
                { year: '1982', event: "Manufactures India's first rough terrain crane." },
                { year: '1985', event: 'Changes its name to become TIL Limited.' },
                {
                    year: '1988',
                    event: "Manufactures India's first 100-tonne truck-mounted mobile crane."
                },
                {
                    year: '1994',
                    event:
                        'Completes 50 years of its corporate journey. Gets ISO 9001 Material Handling Division certified by BVQI. TIL ties up with Grove USA for Rough Terrain & Truck Cranes.'
                },
                { year: '1995', event: 'Mr. Sumit Mazumder takes over as Managing Director.' },
                { year: '1996', event: 'TIL ties up with National Cranes, USA for Loader Cranes.' },
                {
                    year: '1998',
                    event: 'TIL ties up with Manitowoc, USA for Crawler Cranes dealership.'
                },
                {
                    year: '2002-03',
                    event:
                        "TIL is awarded the Highest Exporter's Trophy for the Eastern region by the Engineering Export Promotion Council in the capital goods category."
                },
                { year: '2007', event: '5000th crane rolls out of the Kamarhati manufacturing plant.' },
                {
                    year: '2008',
                    event:
                        'Ties up with Nacco Material Handling Group (now Hyster-Yale Group) for forklifts and container handlers.'
                },
                {
                    year: '2009',
                    event:
                        'Ties up with Astec Inc for Hot Mix Asphalt Plants, bringing road building solutions to India.'
                },
                {
                    year: '2010',
                    event:
                        'Ties up with Astec Aggregate Mining Group, USA for Crushing & Screening Equipment.'
                },
                {
                    year: '2011',
                    event:
                        'Inaugurates the new factory at Changual, Kharagpur, and commences phase 1 production.'
                },
                { year: '2012', event: 'Kamarhati Plant completes 50 years of successful operations.' },
                { year: '2013', event: 'TIL receives L.N. Birla Memorial Award for Corporate Excellence.' },
                { year: '2016', event: 'CAT Distributorship divested and becomes part of TIPL (now Gainwell).' },
                {
                    year: '2018',
                    event:
                        'TIL Limited wins Indywood CSR Excellence Awards for Best CSR Campaign in Employee Engagement.'
                },
                { year: '2019', event: 'TIL completes 75 years of its existence on 22nd July 2019.' },
                {
                    year: '2024',
                    event:
                        'Acquired by the Gainwell Group through its group entity Indocrest Defence Services Private Limited (IDSPL) and new management is appointed.'
                }
            ],
            image: `${basePath}/about-history.jpg`
        },
        values: {
            title: 'Our Core Values',
            description:
                'These principles guide every decision we make and every relationship we build.',
            values: [
                {
                    title: 'Integrity',
                    description:
                        'We conduct business with honesty, fairness and respect for all stakeholders.',
                    icon: <Shield className="w-6 h-6 text-[#F1B434]" />
                },
                {
                    title: 'Innovation',
                    description:
                        'Continuous improvement drives our product development and customer solutions.',
                    icon: <Zap className="w-6 h-6 text-[#F1B434]" />
                },
                {
                    title: 'Customer Focus',
                    description:
                        'We build lasting relationships by understanding and exceeding customer expectations.',
                    icon: <HeartHandshake className="w-6 h-6 text-[#F1B434]" />
                },
                {
                    title: 'Excellence',
                    description:
                        'We strive for the highest standards in quality, safety and performance.',
                    icon: <Trophy className="w-6 h-6 text-[#F1B434]" />
                }
            ]
        },
        leadership: {
            title: 'Leadership Team',
            description:
                "Our experienced leadership team guides TIL's vision and strategic direction.",
            executives: [
                {
                    name: 'Mr. Sumit Mazumder',
                    position: 'Chairman & Managing Director',
                    experience: 'Over 35 years in industrial equipment sector',
                    image: `${basePath}/executive1.jpg`
                },
                {
                    name: 'Mr. Rahul Sen',
                    position: 'CEO - Cranes Division',
                    experience: '25+ years in heavy equipment manufacturing',
                    image: `${basePath}/executive2.jpg`
                },
                {
                    name: 'Ms. Priya Chatterjee',
                    position: 'CEO - Material Handling Division',
                    experience: 'Former VP at Hyster-Yale, 20+ years experience',
                    image: `${basePath}/executive3.jpg`
                },
                {
                    name: 'Mr. Amit Sharma',
                    position: 'CFO',
                    experience: 'Former finance head at Tata Motors',
                    image: `${basePath}/executive4.jpg`
                }
            ]
        },
        awards: {
            title: 'Awards & Recognition',
            description:
                'Our commitment to excellence has been recognized by industry and government bodies.',
            awards: [
                {
                    year: '2022',
                    title: 'Best Construction Equipment Manufacturer',
                    by: 'Indian Construction Equipment Manufacturers Association'
                },
                {
                    year: '2021',
                    title: 'Export Excellence Award',
                    by: 'Engineering Export Promotion Council of India'
                },
                {
                    year: '2020',
                    title: 'Safety Innovation Award',
                    by: 'National Safety Council'
                },
                {
                    year: '2019',
                    title: 'Best Employer in Manufacturing',
                    by: 'Great Place to Work Institute'
                },
                {
                    year: '2018',
                    title: 'Product Innovation Award',
                    by: 'Confederation of Indian Industry'
                }
            ],
            image: `${basePath}/news6.jpg`
        },
        global: {
            title: 'Global Footprint',
            description: 'While rooted in India, our operations span across continents.',
            presence: [
                {
                    region: 'Asia',
                    countries: ['India', 'Bangladesh', 'Nepal', 'Sri Lanka', 'Myanmar', 'Indonesia']
                },
                {
                    region: 'Middle East',
                    countries: ['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait']
                },
                {
                    region: 'Africa',
                    countries: ['South Africa', 'Nigeria', 'Kenya', 'Tanzania', 'Ethiopia']
                },
                {
                    region: 'Latin America',
                    countries: ['Brazil', 'Chile', 'Peru']
                }
            ],
            image: `${basePath}/our-presence.jpg`
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/about-us-bg.png`}
                    alt="About TIL"
                    className="w-full h-full object-cover object-[10%_bottom] scale-105"
                    loading="eager"
                />

                {/* Dark Gradient Overlay from Top */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent z-10" />

                {/* Existing Darker Gradient Overlay from Left to Right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

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
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-yellow-300 text-sm font-bold tracking-tight mb-2 mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                ABOUT US
                            </motion.span>

                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                TIL <span className="text-[#F1B434]">Limited</span>
                            </motion.h1>

                            <motion.div
                                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-yellow-300 rounded-full mb-4"
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
                                Pioneering Indian industrial equipment manufacturing since 1944.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className="pb-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 space-y-12">
                    {/* Tab Navigation with Submenu */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.8,
                            ease: [0.175, 0.885, 0.32, 1.275],
                            type: 'spring',
                            stiffness: 100,
                            damping: 15
                        }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F1B434] to-yellow-300 rounded-xl blur-lg opacity-30 -z-10" />
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="flex flex-col sm:flex-row items-stretch relative">
                                {tabs.map(tab => (
                                    <div
                                        key={tab.id}
                                        className="relative"
                                        onMouseEnter={() => setHoveredTab(tab.id)}
                                        onMouseLeave={() => {
                                            if (tab.id !== activeTab) setHoveredTab(null);
                                        }}

                                    >
                                        <motion.button
                                            onClick={() => handleTabChange(tab.id)}
                                            className={`flex-1 flex items-center justify-center gap-2 p-4 font-medium transition-colors ${activeTab === tab.id
                                                ? 'bg-[#F1B434] text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                                } w-full`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {React.cloneElement(tab.icon, {
                                                className: `${(tab.icon as any).props.className} ${activeTab === tab.id ? 'text-white' : 'text-[#F1B434]'
                                                    }`
                                            })}
                                            {tab.title}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${hoveredTab === tab.id ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </motion.button>

                                        {/* Submenu Dropdown */}
                                        {(hoveredTab === tab.id || activeTab === tab.id) && (

                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute left-0 right-0 top-full z-50 bg-white shadow-xl rounded-b-lg border border-gray-100"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                                                    <div className="space-y-4">
                                                        <h3 className="font-bold text-lg text-gray-800">
                                                            {tab.submenu.media.title}
                                                        </h3>
                                                        <img
                                                            src={tab.submenu.media.image}
                                                            alt={tab.submenu.media.title}
                                                            className="w-full h-40 object-cover rounded-lg"
                                                            loading="lazy"
                                                        />
                                                        <p className="text-gray-600">{tab.submenu.media.description}</p>
                                                        <button
                                                            className="text-[#F1B434] font-medium flex items-center gap-1 hover:text-[#F1B434] transition-colors"
                                                            onClick={() => handleTabChange(tab.id)}
                                                        >
                                                            {tab.submenu.media.cta}
                                                            <ArrowRight className="w-4 h-4" />
                                                        </button>
                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                            {tab.submenu.media.features.map((feature: string, index: number) => (
                                                                <span key={index} className="text-xs bg-[#F1B434] text-[#F1B434] px-2 py-1 rounded-full">
                                                                    {feature}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="md:col-span-1 lg:col-span-2">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            {tab.submenu.items.map(
                                                                (item: { name: string; description: string; image: string }, index: number) => (
                                                                    <motion.div
                                                                        key={index}
                                                                        className="p-3 hover:bg-[#F1B434] rounded-lg transition-colors cursor-pointer border border-transparent hover:border-[#F1B434]"
                                                                        onClick={() => handleTabChange(tab.id)}
                                                                        whileHover={{ scale: 1.02 }}
                                                                        whileTap={{ scale: 0.98 }}
                                                                    >
                                                                        <div className="flex items-start gap-3">
                                                                            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                                                                                <img
                                                                                    src={item.image}
                                                                                    alt={item.name}
                                                                                    className="w-full h-full object-cover"
                                                                                    loading="lazy"
                                                                                />
                                                                            </div>
                                                                            <div>
                                                                                <h4 className="font-medium text-gray-800">{item.name}</h4>
                                                                                <p className="text-sm text-gray-500">{item.description}</p>
                                                                            </div>
                                                                        </div>
                                                                    </motion.div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                        >
                            {activeTab === 'overview' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.overview.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.overview.description}</p>
                                        {Array.isArray(contentData.overview.content) ? (
                                            <ul className="space-y-3">
                                                {contentData.overview.content.map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                >
                                                    <div className="flex-shrink-0 h-5 w-5 text-[#F1B434] mr-2">
                                                    </div>
                                                    <span className="text-gray-700">{item}</span>
                                                </motion.li>
                                                ))}
                                            </ul>
                                            ) : (
                                            <p className="text-gray-700 leading-relaxed">
                                                {contentData.overview.content}
                                            </p>                                           
                                            )}
                                            <motion.button
                onClick={() => handleTabChange('corporate')}
                className="mt-6 px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#e0a42d] transition-colors shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Read More
            </motion.button>
        </div>
        <div className="h-full rounded-lg overflow-hidden shadow-lg">
            <img src={contentData.overview.image} alt="TIL Overview" className="w-full h-full object-cover" loading="lazy" />
        </div>
         </div>
        )}
                            {activeTab === 'history' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.history.title}</h2>
                                    <p className="text-gray-600 mb-6">{contentData.history.description}</p>

                                    {/* Group milestones by decade */}
                                    {(() => {
                                        const groupedMilestones = groupByDecade(contentData.history.milestones);
                                        return <HistoryRoulette decades={groupedMilestones} autoPlayInterval={3000} />;
                                    })()}
                                </div>
                            )}

                            {activeTab === 'corporate' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.corporate.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.corporate.description}</p>
                                        {Array.isArray(contentData.corporate.content) ? (
                                            <ul className="space-y-3">
                                                {contentData.corporate.content.map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                >
                                                    <div className="flex-shrink-0 h-5 w-5 text-[#F1B434] mr-2">
                                                    </div>
                                                    <span className="text-gray-700">{item}</span>
                                                </motion.li>
                                                ))}
                                            </ul>
                                            ) : (
                                            <p className="text-gray-700 leading-relaxed">
                                                {contentData.corporate.content}
                                            </p>
                                            )}

                                    </div>
                                    <div className="h-full rounded-lg overflow-hidden shadow-lg">
                                        <img src={contentData.corporate.image} alt="TIL Overview" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                </div>
                            )}


                            {activeTab === 'values' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.values.title}</h2>
                                    <p className="text-gray-600 mb-8">{contentData.values.description}</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {contentData.values.values.map((value, index) => (
                                            <motion.div
                                                key={index}
                                                className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#F1B434]"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1 }}
                                                whileHover={{ y: -5 }}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="p-2 bg-[#F1B434] rounded-lg">{value.icon}</div>
                                                    <div>
                                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h3>
                                                        <p className="text-gray-600">{value.description}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'leadership' && (
                                <div>
                                    {/* Board of Directors Section */}
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>Board of Directors</h2>
                                    <p className="text-gray-600 mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>Our esteemed board members provide strategic guidance and oversight to ensure TIL's continued success and growth.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                        {[
                                            {
                                                name: 'Saroj Punhani',
                                                title: 'Non-Executive Independent Director',
                                                image: `${basePath}/saroj.png`,
                                                description: 'Saroj Punhani is a distinguished member of the Indian Audit and Accounts Service with over 35 years of experience in public finance management, audit, and accounts. She has held several key positions in the Government of India, including Director General in the Office of the Comptroller and Auditor General of India. Her expertise in governance, risk management, and compliance makes her an invaluable asset to our board.'
                                        
                                            },
                                            {
                                                name: 'General N.B Singh (Retired)',
                                                title: 'Non Executive Independent Director',
                                                image: `${basePath}/GeneralSingh.png`,
                                                description: 'A distinguished veteran, served in the Indian Army for 41 years. He held various command, staff and instructional appointments and was the Director General of Military Operations at Army Headquarters. He brings extensive strategic planning and leadership experience to our board, having handled complex operational scenarios and national security matters at the highest levels.'
                                            },
                                            {
                                                name: 'Alok Kumar Tripathi',
                                                title: 'Whole Time Director & President',
                                                image: `${basePath}/AlokTripathi.png`,
                                                description: 'His endearing personality, and people skills have helped him drive excellence in all his assignments. He has over 30 years of experience in the construction equipment industry, with expertise in sales, marketing, and business development. His strategic vision and customer-centric approach have been instrumental in expanding TIL\'s market presence across India.'
                                            },
                                            {
                                                name: 'Ayan Banerjee',
                                                title: 'Whole Time Director',
                                                image: `${basePath}/AyanBanerjee.png`,
                                                description: 'Ayan Banerjee boasts an illustrious career spanning nearly three decades in the construction and mining equipment industry. He has held leadership positions in several renowned organizations, driving business growth and operational excellence. His expertise in strategic planning, market expansion, and customer relationship management has been pivotal in strengthening TIL\'s position in the industry.'
                                            },
                                            {
                                                name: 'Sunil Kumar Chaturvedi',
                                                title: 'Chairman and Managing Director',
                                                image: `${basePath}/SunilChaturvedi.png`,
                                                description: 'Sunil Chaturvedi, a Fellow Chartered Accountant by training, brings over 35 years of rich and varied experience in the automotive and engineering sectors. He has held leadership positions in several prestigious organizations, including as CEO of CASE New Holland and President of TAFE. His strategic vision and deep industry knowledge guide TIL\'s growth trajectory and innovation initiatives.'
                                            },
                                            {
                                                name: 'Amit Mukherjee',
                                                title: 'Non-Executive Independent Director',
                                                image: `${basePath}/AmitMukherjee.jpg`,
                                                description: 'Focusing on sustainability and corporate social responsibility. With over 25 years of experience in environmental management and sustainable development, he has advised numerous Fortune 500 companies on implementing ESG initiatives. His expertise helps TIL maintain its commitment to environmentally responsible operations and community development.'
                                            }
                                        ].map((member, index) => (
                                            <motion.div
                                                key={`board-${index}`}
                                                className="relative bg-white rounded-lg overflow-hidden border border-gray-200 group h-40"
                                                style={{ fontFamily: 'Arial, sans-serif' }}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1 }}
                                                whileHover={{ y: -5 }}
                                            >
                                                <div className="flex h-full">
                                                    {/* Image Section */}
                                                    <div className="relative flex-shrink-0 w-40 h-full overflow-hidden">
                                                        <div className="absolute inset-0 flex items-center justify-center p-4">
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className="w-28 h-28 object-cover rounded-full border-4 shadow-md z-10 relative transition-transform duration-300 group-hover:scale-110"
                                                                style={{ borderColor: '#F1B434' }}
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.currentTarget.src = `${basePath}/placeholder_avatar.jpg`;
                                                                }}
                                                            />

                                                        </div>
                                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent"
                                                            style={{ backgroundColor: 'rgba(241, 180, 52, 0.2)' }}></div>
                                                    </div>

                                                    {/* Content Section */}
                                                    <div className="flex-1 p-4 flex flex-col justify-center">
                                                        <h3 className="font-bold text-gray-800 text-lg group-hover:text-yellow-600 transition-colors duration-300"
                                                            style={{ color: '#000000' }}>{member.name}</h3>
                                                        <p className="text-sm font-medium" style={{ color: '#F1B434' }}>{member.title}</p>
                                                    </div>

                                                    {/* Hover description that appears on the side */}
                                                    <div className="absolute top-0 left-40 right-0 h-full text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center shadow-lg rounded-r-lg"
                                                        style={{
                                                            background: 'linear-gradient(to right, #F1B434, #f1b434)', // TIL Yellow to Light Yellow
                                                            color: '#000000'
                                                        }}>
                                                        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                                                        <p className="text-sm font-medium mb-2">{member.title}</p>
                                                        <p className="text-xs leading-tight line-clamp-4">
                                                            {member.description}
                                                        </p>
                                                        <button 
                                                            onClick={() => setSelectedLeader(member)}
                                                            className="mt-2 text-xs font-medium text-blue-700 hover:underline self-start"
                                                        >
                                                            Read More
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Leadership Team Section */}
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>Leadership Team</h2>
                                    <p className="text-gray-600 mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>Our leadership team drives TIL's vision with expertise and dedication.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {[
                                            {
                                                name: 'Pinaki Niyogy',
                                                title: 'Chief Executive Officer',
                                                image: `${basePath}/pinaki.jpg`,
                                                description: 'Leading TIL with strategic vision and extensive industry experience. With over 28 years in the construction equipment sector, he has been instrumental in driving innovation, operational excellence, and market expansion. Under his leadership, TIL has strengthened its position as a market leader and expanded its global footprint through strategic partnerships and customer-centric solutions.'
                                            },
                                            {
                                                name: 'Arvind Rishi',
                                                title: 'AVP- Sales & After Market',
                                                image: `${basePath}/arvind.jpeg`,
                                                description: 'Driving sales growth and ensuring exceptional customer service. With over 20 years of experience in sales and marketing, he has successfully led teams to achieve record-breaking revenue targets. His customer-first approach and deep understanding of market dynamics have been key to building long-term relationships with clients across various industries.'
                                            },
                                            {
                                                name: 'Mr. Kanhaiya Gupta',
                                                title: 'Chief Financial Officer',
                                                image: `${basePath}/Kanhaiya.png`,
                                                description: 'Managing financial strategy and ensuring sustainable growth. A seasoned finance professional with over 25 years of experience, he has expertise in financial planning, risk management, and corporate governance. His strategic financial insights have been crucial in guiding TIL through periods of expansion while maintaining fiscal discipline and operational efficiency.'
                                            },
                                            {
                                                name: 'Ms. Shamita Nandi',
                                                title: 'Chief Human Resource Officer',
                                                image: `${basePath}/Shamita.png`,
                                                description: 'Developing talent and fostering a positive organizational culture. With over 22 years in human resources management, she has implemented innovative talent development programs and diversity initiatives. Her focus on employee engagement and leadership development has created a high-performance culture that attracts and retains top industry talent.'
                                            },
                                            {
                                                name: 'Chandrani Chatterjee',
                                                title: 'Company Secretary',
                                                image: `${basePath}/chandrani.jpg`,
                                                description: 'Ensuring corporate governance and regulatory compliance. A qualified company secretary with over 18 years of experience, she has extensive knowledge of corporate laws and governance practices. Her meticulous approach to compliance and board management ensures that TIL maintains the highest standards of corporate governance and ethical business practices.'
                                            },
                                            {
                                                name: 'Mr. Saikat Bagchi',
                                                title: 'Head - Supply Chain & Commercial',
                                                image: `${basePath}/saiket.png`,
                                                description: 'Optimizing supply chain operations and commercial excellence. With over 15 years of experience in supply chain management, he has implemented lean processes and digital transformation initiatives that have significantly improved operational efficiency and reduced costs. His expertise in vendor management and logistics has strengthened TIL\'s supply chain resilience.'
                                            },
                                            {
                                                name: 'Rishabh P Nair',
                                                title: 'Head Of Brand, Content & PR',
                                                image: `${basePath}/Risabh.png`,
                                                description: 'Building brand reputation and strategic communication. A marketing professional with over 12 years of experience, he has developed and executed successful brand strategies that have enhanced TIL\'s market presence. His expertise in digital marketing, content strategy, and public relations has been instrumental in building TIL\'s brand equity and customer engagement.'
                                            }
                                        ].map((member, index) => (
                                            <motion.div
                                                key={index}
                                                className="relative bg-white rounded-lg overflow-hidden border border-gray-200 group h-40"
                                                style={{ fontFamily: 'Arial, sans-serif' }}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1 }}
                                                whileHover={{ y: -5 }}
                                            >
                                                <div className="flex h-full">
                                                    {/* Image Section */}
                                                    <div className="relative flex-shrink-0 w-40 h-full overflow-hidden">
                                                        <div className="absolute inset-0 flex items-center justify-center p-4">
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className="w-28 h-28 object-cover rounded-full border-4 shadow-md z-10 relative transition-transform duration-300 group-hover:scale-110"
                                                                style={{ borderColor: '#F1B434' }} // TIL Yellow: RGB R241 G180 B52
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent"
                                                            style={{ backgroundColor: 'rgba(241, 180, 52, 0.2)' }}></div>
                                                    </div>

                                                    {/* Content Section */}
                                                    <div className="flex-1 p-4 flex flex-col justify-center">
                                                        <h3 className="font-bold text-gray-800 text-lg group-hover:text-yellow-600 transition-colors duration-300"
                                                            style={{ color: '#000000' }}>{member.name}</h3>
                                                        <p className="text-sm font-medium" style={{ color: '#F1B434' }}>{member.title}</p>
                                                    </div>

                                                    {/* Hover description that appears on the side */}
                                                    <div className="absolute top-0 left-40 right-0 h-full text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center shadow-lg rounded-r-lg"
                                                        style={{
                                                            background: 'linear-gradient(to right, #F1B434, #f1b434)', // TIL Yellow to Light Yellow
                                                            color: '#000000'
                                                        }}>
                                                        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                                                        <p className="text-sm font-medium mb-2">{member.title}</p>
                                                        <p className="text-xs leading-tight line-clamp-4">
                                                            {member.description}
                                                        </p>
                                                        <button 
                                                            onClick={() => setSelectedLeader(member)}
                                                            className="mt-2 text-xs font-medium text-blue-700 hover:underline self-start"
                                                        >
                                                            Read More
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeTab === 'awards' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.awards.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.awards.description}</p>
                                        <div className="space-y-4">
                                            {contentData.awards.awards.map((award, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#F1B434]"
                                                    initial={{ opacity: 0, x: 10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div className="bg-[#F1B434] text-white text-sm font-bold px-3 py-1 rounded">
                                                            {award.year}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-bold text-gray-800">{award.title}</h3>
                                                            <p className="text-sm text-gray-600">by {award.by}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-full rounded-lg overflow-hidden shadow-lg">
                                        <img src={contentData.awards.image} alt="TIL Awards" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'global' && (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{contentData.global.title}</h2>
                                        <p className="text-gray-600 mb-6">{contentData.global.description}</p>
                                        <div className="space-y-6">
                                            {contentData.global.presence.map((region, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 + index * 0.1 }}
                                                >
                                                    <h3 className="font-bold text-[#F1B434] mb-2">{region.region}</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {region.countries.map((country, i) => (
                                                            <span key={i} className="text-sm bg-[#F1B434] text-[#F1B434] px-3 py-1 rounded-full">
                                                                {country}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-full rounded-lg overflow-hidden shadow-lg">
                                        <img src={contentData.global.image} alt="TIL Global Presence" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Leader Modal */}
                    <AnimatePresence>
                        {selectedLeader && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                                onClick={() => setSelectedLeader(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="relative p-6">
                                        <button
                                            onClick={() => setSelectedLeader(null)}
                                            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
                                            aria-label="Close modal"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                        
                                        <div className="flex flex-col md:flex-row gap-6 items-start">
                                            <div className="flex-shrink-0 w-32 h-32 mx-auto md:mx-0">
                                                <img
                                                    src={selectedLeader.image}
                                                    alt={selectedLeader.name}
                                                    className="w-full h-full object-cover rounded-full border-4 border-[#F1B434]"
                                                    onError={(e) => {
                                                        e.currentTarget.src = `${basePath}/placeholder_avatar.jpg`;
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-gray-800">{selectedLeader.name}</h3>
                                                <p className="text-lg text-[#F1B434] font-medium mb-4">{selectedLeader.title}</p>
                                                <p className="text-gray-700 leading-relaxed">{selectedLeader.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="bg-gradient-to-r from-[#f1b434] to-[#f1b434] rounded-xl shadow-lg p-8 text-white"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">75+</div>
                                <div className="text-sm font-medium">Years of Experience</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">700+</div>
                                <div className="text-sm font-medium">Employees</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">10+</div>
                                <div className="text-sm font-medium">Countries Served</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-bold mb-2">3K+</div>
                                <div className="text-sm font-medium">Actives Machines</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
                    >
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">Want to learn more about TIL?</h2>
                            <p className="text-gray-600 mb-6">
                                Our team is ready to answer any questions you may have about our company, products, or services.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link href={`/contact-us`} passHref>
                                    <motion.button
                                        className="px-6 py-3 bg-[#f1b434] text-white font-medium rounded-lg hover:bg-[#F1B434] transition-colors shadow-md"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Contact Us
                                    </motion.button>
                                </Link>
                                <motion.button
                                    className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Download Company Profile
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default function Page() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F1B434]"></div>
            </div>
        }>
            <PageContent />
        </Suspense>
    );
}