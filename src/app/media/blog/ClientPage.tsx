'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, MessageCircle, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface Author {
  name: string;
  avatar: string;
  role?: string;
  bio?: string;
}


interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: Author;
  tags: string[];
  date: string;
  readTime: string;
  likes: string; // e.g. "5K"
  comments: string; // could also be number if stored differently
  image: string;
  thumbnail: string;
  column?: string;
}

interface ClientPageProps {
  initialPosts?: any[];
}
const ClientPage: React.FC<ClientPageProps> = ({ initialPosts = [] }) => {
  const navigate = useRouter();
  const [activeTab, setActiveTab] = useState<'featured' | 'popular' | 'latest'>('featured');
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [expandedAuthor, setExpandedAuthor] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // ✅ use posts from DB instead of hardcoded
  const featuredPosts = initialPosts;

  const allTags = Array.from(new Set(featuredPosts.flatMap(post => post.tags || [])));

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });

  const toggleSavePost = (postId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedPosts(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const toggleAuthorDetails = (postId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedAuthor(prev => (prev === postId ? null : postId));
  };

  const handlePostClick = (slug: string) => {
    navigate.push(`/media/blog/${slug}`);
  };


  const handleTagClick = (tag: string) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: 'featured' | 'popular' | 'latest') => {
    setActiveTab(category);
    setCurrentPage(1);
  };

  // Filter posts based on search query, active tags, and category
  const filteredPosts = featuredPosts.filter((post: Post) => {
    if (searchQuery) {
      return (
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag: string) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (activeTags.length > 0) {
      return activeTags.every(tag => post.tags.includes(tag));
    }

    if (activeTab === 'popular') {
      return parseInt(post.likes.replace('K', '000')) > 5000;
    } else if (activeTab === 'latest') {
      const postDate = new Date(post.date);
      const cutoffDate = new Date();
      cutoffDate.setMonth(cutoffDate.getMonth() - 1);
      return postDate >= cutoffDate;
    }

    return true;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTags, activeTab]);

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen">
      {/* Updated Header with Left-Aligned Heading */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/blogpage-bg.jpg`}
          alt="Investor Relations"
          className="w-full h-full object-cover"
        />

        {/* Darker Gradient Overlay */}
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
                TIL <span className="text-[#F1B434]">Blog</span>
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
                Stay updated with the latest trends, innovations, and news in the heavy equipment industry.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>


      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16 -mt-6 relative z-10">
        {/* Search and Tabs */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] sm:text-sm"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setActiveTags([]);
              }}
            />
          </div>

          <div className="flex space-x-4">
            <button
              className={`text-sm font-medium px-4 py-2 rounded-md ${activeTab === 'featured' ? 'bg-[#F1B434] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => handleCategoryChange('featured')}
            >
              Featured
            </button>
            <button
              className={`text-sm font-medium px-4 py-2 rounded-md ${activeTab === 'popular' ? 'bg-[#F1B434] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => handleCategoryChange('popular')}
            >
              Popular
            </button>
            <button
              className={`text-sm font-medium px-4 py-2 rounded-md ${activeTab === 'latest' ? 'bg-[#F1B434] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => handleCategoryChange('latest')}
            >
              Latest
            </button>
          </div>
        </div>

        {(activeTags.length > 0 || searchQuery) && (
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-gray-600">Showing results for:</span>

              {searchQuery && (
                <span className="px-3 py-1 bg-[#F1B434]/10 text-[#F1B434] rounded-full flex items-center">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-[#F1B434] hover:text-[#d89c2a]"
                  >
                    &times;
                  </button>
                </span>
              )}

              {activeTags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#F1B434]/10 text-[#F1B434] rounded-full flex items-center">
                  {tag}
                  <button
                    onClick={() => setActiveTags(prev => prev.filter(t => t !== tag))}
                    className="ml-2 text-[#F1B434] hover:text-[#d89c2a]"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                setActiveTags([]);
                setSearchQuery('');
              }}
              className="text-sm text-[#F1B434] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Articles Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Articles</h3>
            <div className="space-y-8">
              {currentPosts.map(post => (
                <motion.article
                  key={post.id}
                  className="group cursor-pointer bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => handlePostClick(post.slug)}
                >
                  <div className="flex gap-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <button
                          onClick={e => toggleAuthorDetails(post.id, e)}
                          className="flex-shrink-0"
                        >
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full object-cover hover:ring-2 hover:ring-[#F1B434] transition-all"
                          />
                        </button>
                        <div className="text-xs text-gray-600">
                          {/* <span>In </span>
                          <span className="font-semibold text-gray-700">{post.column}</span> */}
                          <span> by </span>
                          <button
                            onClick={e => toggleAuthorDetails(post.id, e)}
                            className="font-medium text-gray-700 hover:text-[#F1B434]"
                          >
                            {post.author.name}
                          </button>
                        </div>
                      </div>

                      {expandedAuthor === post.id && (
                        <div
                          className="bg-white p-3 rounded-lg shadow-md mb-3 border border-gray-200 text-sm"
                          onClick={e => e.stopPropagation()}
                        >
                          <div className="flex items-start gap-3">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              width={40}
                              height={40}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-bold text-gray-800">{post.author.name}</h4>
                              <p className="text-xs text-[#F1B434]">{post.author.role}</p>
                              <p className="text-xs text-gray-600 mt-1">{post.author.bio}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} className="text-[#F1B434]" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} className="text-[#F1B434]" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#F1B434]"
                            onClick={e => toggleSavePost(post.id, e)}
                          >
                            <Heart
                              size={14}
                              fill={savedPosts.includes(post.id) ? "#F1B434" : "none"}
                              className={savedPosts.includes(post.id) ? "text-[#F1B434]" : ""}
                            />
                            <span>{post.likes}</span>
                          </button>
                          <button
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#F1B434]"
                            onClick={e => e.stopPropagation()}
                          >
                            <MessageCircle size={14} />
                            <span>{post.comments}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={600}
                        className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">No articles found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
              </div>
            )}

            {filteredPosts.length > postsPerPage && (
              <div className="mt-12">
                <nav className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <div className="flex flex-1 justify-between sm:hidden">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                        : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`relative ml-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                        : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">{indexOfFirstPost + 1}</span> to{' '}
                      <span className="font-medium">{Math.min(indexOfLastPost, filteredPosts.length)}</span> of{' '}
                      <span className="font-medium">{filteredPosts.length}</span> results
                    </p>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
                          }`}
                      >
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === page
                            ? 'bg-[#F1B434] text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1B434]'
                            : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                            }`}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
                          }`}
                      >
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </nav>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-6 self-start">
            {/* <h3 className="text-2xl font-bold text-gray-800 mb-6">Popular Reads</h3> */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden self-start">
              <div
                className="block group relative cursor-pointer"
                onClick={() => navigate.push('/media/blog')}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={`${basePath}/1761127133_1755059720_1320-x-720_12830_BLOG.jpg`}
                    alt="Featured Blog Post"
                    width={1200}
                    height={628}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5">
                    <div>
                      {/* <span className="text-xs font-medium text-[#F1B434] mb-1 block">Editor's Pick</span> */}
                      <h3 className="text-xl font-bold text-white">6 Proven Factors That Affect Truck Crane Durability</h3>
                      <div className="flex items-center gap-2 text-xs text-white/80 mt-2">
                        <span>Oct 22, 2025</span>
                        <span>•</span>
                        <span>12 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Posts</h4>
                <div className="space-y-4 mb-6">
                  {featuredPosts.slice(0, 3).map(post => (
                    <div
                      key={`recent-${post.id}`}
                      className="flex gap-3 items-start pb-3 border-b border-gray-100 cursor-pointer"
                      onClick={() => handlePostClick(post.slug)}
                    >
                      <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden relative">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          width={150}
                          height={150}
                          className="absolute w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-800 line-clamp-2">{post.title}</h5>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span>{formatDate(post.date)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
                  <span>
                    Last updated: {new Date().toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1">
                    <span>{featuredPosts.length} articles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Topics</h3>
                <button
                  className="text-sm text-[#F1B434] hover:underline"
                  onClick={() => setActiveTags([])}
                >
                  See all
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map(topic => (
                  <button
                    key={topic}
                    onClick={() => handleTagClick(topic)}
                    className={`text-sm px-3 py-1.5 rounded-full transition-colors ${activeTags.includes(topic)
                      ? 'bg-[#F1B434] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div> */}

            <div className="bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-xl shadow-sm p-6 mt-8 text-white">
              <h3 className="text-lg font-bold mb-2">Subscribe to our newsletter</h3>
              <p className="text-sm mb-4">Get the latest articles and industry news delivered to your inbox</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md border border-white/30 bg-white/20 placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white"
                />
                <button className="w-full bg-white text-[#F1B434] font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientPage;