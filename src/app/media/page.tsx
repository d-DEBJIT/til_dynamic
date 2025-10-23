'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CalendarDays, Newspaper } from 'lucide-react';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Page = () => {
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
                                            Let’s try to decide between diesel and electric mobile cranes for your next project.
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
                                title: 'TIL Limited: Engineering India’s Crane Legacy and Future',
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
                <section>
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
                                description: 'Join us at India\'s largest construction equipment exhibition showcasing our latest innovations'
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
            </main>
        </div>
    );
};

export default Page;