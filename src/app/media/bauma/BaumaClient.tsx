'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BaumaArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  readMoreLink: string;
  precedence: number;
}

interface BaumaClientProps {
  initialArticles: BaumaArticle[];
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function BaumaClient({ initialArticles }: BaumaClientProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleArticles = initialArticles.slice(0, visibleCount);
  const hasMoreArticles = visibleCount < initialArticles.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 9);
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
                TIL@bauma<span className="text-[#F1B434]">2024</span>
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
                Stay updated with the latest Bauma coverage.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
        {/* Articles Section */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">Bauma Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleArticles.map((article) => (
              <motion.article
                key={article.id}
                className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-t-lg h-60 bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-600 mb-3 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>

                  <Link
                    href={article.readMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-[#F1B434] font-medium hover:underline group-hover:text-[#F1B434] transition-colors"
                  >
                    Read More
                    <ChevronRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreArticles && (
            <div className="flex justify-center mt-12">
              <motion.button
                onClick={loadMore}
                className="px-8 py-3 bg-[#F1B434] text-black font-semibold hover:bg-[#FFE352] transition-all rounded-lg shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More
              </motion.button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
