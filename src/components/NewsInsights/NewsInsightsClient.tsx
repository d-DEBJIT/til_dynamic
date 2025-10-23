'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  position?: 'top' | 'bottom';
  size?: 'small' | 'medium';
}

interface NewsInsightsClientProps {
  news: NewsArticle[];
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const NewsInsightsClient: React.FC<NewsInsightsClientProps> = ({ news }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Filter articles for different sections
  const featuredArticles = news.filter(article => article.featured);
  const nonFeaturedArticles = news.filter(article => !article.featured);

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            TIL <span className="text-[#F1B434]">Limited</span> in the News
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F1B434] to-[#F1B434] mx-auto rounded-full"></div>
        </motion.div>

        {/* Aligned News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured News (Left) - Vertical Split */}
          <div className="flex flex-col gap-6 h-full">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                className={`relative rounded-xl overflow-hidden shadow-xl flex-1 ${article.position === 'top' ? 'h-1/2' : 'h-1/2'}`}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Image with overlay container */}
                <div className="relative w-full h-full">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-fill"
                  />
                  {/* Enhanced overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2233]/60 via-[#1a2233]/30 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                  <p className="text-gray-200 mb-4 text-sm">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">{formatDate(article.date)} • {article.readTime}</span>
                    <Link href="/media/news" passHref>
                      <motion.button
                        className="flex items-center px-4 py-2 bg-[#F1B434] text-white font-medium rounded-lg group text-sm hover:bg-[#FFE352] hover:text-gray-900 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="group-hover:underline">Read more</span>
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* News List (Right) - Now 3 blocks with different sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {/* Medium sized card (top left) */}
            {nonFeaturedArticles.filter(article => article.size === 'medium').slice(0, 1).map((article, index) => (
              <motion.div
                key={article.id}
                className="relative rounded-xl overflow-hidden shadow-lg md:col-span-2 h-64"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Image with overlay container */}
                <div className="relative w-full h-full">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-fill"
                  />
                  {/* Enhanced overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2233]/90 via-[#1a2233]/60 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{article.title}</h3>
                  <p className="text-gray-200 text-sm mb-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">{formatDate(article.date)} • {article.readTime}</span>
                    <Link href="/media/news" passHref>
                      <motion.button
                        className="flex items-center px-3 py-1.5 bg-[#F1B434] text-white text-sm font-medium rounded-md group hover:bg-[#FFE352] hover:text-gray-900 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="group-hover:underline">Read</span>
                        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Small cards (bottom row) */}
            {nonFeaturedArticles.filter(article => article.size === 'small').map((article, index) => (
              <motion.div
                key={article.id}
                className="relative rounded-xl overflow-hidden shadow-lg h-48"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Image with overlay container */}
                <div className="relative w-full h-full">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-fill"
                  />
                  {/* Enhanced overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2233]/60 via-[#1a2233]/30 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-base font-bold text-white mb-1">{article.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">{formatDate(article.date)} • {article.readTime}</span>
                    <Link href="/media/news" passHref>
                      <motion.button
                        className="flex items-center px-3 py-1.5 bg-[#F1B434] text-white text-sm font-medium rounded-md group hover:bg-[#FFE352] hover:text-gray-900 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="group-hover:underline">Read</span>
                        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Medium sized card (bottom right) */}
            {nonFeaturedArticles.filter(article => article.size === 'medium').slice(1, 2).map((article, index) => (
              <motion.div
                key={article.id}
                className="relative rounded-xl overflow-hidden shadow-lg md:col-span-2 h-64"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Image with overlay container */}
                <div className="relative w-full h-full">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Enhanced overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2233]/60 via-[#1a2233]/30 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{article.title}</h3>
                  <p className="text-gray-200 text-sm mb-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-300">{formatDate(article.date)} • {article.readTime}</span>
                    <Link href="/media/news" passHref>
                      <motion.button
                        className="flex items-center px-3 py-1.5 bg-[#F1B434] text-white text-sm font-medium rounded-md group hover:bg-[#FFE352] hover:text-gray-900 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="group-hover:underline">Read</span>
                        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href={`/media/news`}
            className="inline-flex items-center px-6 py-3 bg-[#F1B434] text-white rounded-lg font-semibold shadow-md hover:bg-[#F1B434] transition-all"
          >
            <motion.span whileHover={{ scale: 1.05 }}>
              View All News 
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsInsightsClient;