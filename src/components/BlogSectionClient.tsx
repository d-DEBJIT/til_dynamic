// app/components/BlogSectionClient.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, MessageCircle, Share2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Brand colors from guidelines
const brandYellow = '#F1B434';
const brandBlack = '#000000';

interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: BlogAuthor;
  column: string;
  date: string;
  readTime: string;
  likes: string;
  comments: string;
  image: string;
  thumbnail: string;
  featuredImage: string;
  slug: string;
}

interface BlogSectionClientProps {
  featuredPosts: BlogPost[];
}

const BlogSectionClient: React.FC<BlogSectionClientProps> = ({ featuredPosts }) => {
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [expandedAuthor, setExpandedAuthor] = useState<number | null>(null);
  const [showShareOptions, setShowShareOptions] = useState<number | null>(null);
  const router = useRouter();

  const handlePostClick = (slug: string) => {
    router.push(`/media/blog/${slug}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const toggleSavePost = (postId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleAuthorDetails = (postId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedAuthor(prev => prev === postId ? null : postId);
  };

  const toggleShareOptions = (postId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setShowShareOptions(prev => prev === postId ? null : postId);
  };

  const sharePost = (platform: string, post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/media/blog/${post.slug}`;
    const text = `Check out this article: ${post.title}`;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }

    setShowShareOptions(null);
  };

  return (
    <section className="py-16 bg-white">
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
            INDUSTRY INSIGHTS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            TIL <span style={{ color: brandYellow }}>Blog</span>
          </h2>
          <div
            className="w-24 h-1.5 mx-auto rounded-full mb-6"
            style={{ backgroundColor: brandYellow }}
          ></div>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
            Stay updated with the latest trends, innovations, and news in the heavy equipment industry.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Featured Posts (Left) */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Articles</h3>
            <div className="space-y-8">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  className="group cursor-pointer bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onClick={() => handlePostClick(post.slug)}
                >
                  <div className="flex gap-5">
                    {/* Content on the left */}
                    <div className="flex-1">
                      {/* Author Info */}
                      <div className="flex items-center gap-3 mb-2">
                        <button
                          onClick={(e) => toggleAuthorDetails(post.id, e)}
                          className="flex-shrink-0"
                        >
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full object-cover hover:ring-2 transition-all"
                            style={{ borderColor: brandYellow }}
                          />
                        </button>
                        <div className="text-xs text-gray-600">
                          <span> by </span>
                          <button
                            onClick={(e) => toggleAuthorDetails(post.id, e)}
                            className="font-medium text-gray-700 hover:text-[#F1B434]"
                            style={{ color: brandYellow }}
                          >
                            {post.author.name}
                          </button>
                        </div>
                      </div>

                      {/* Author Details Popup */}
                      {expandedAuthor === post.id && (
                        <div className="bg-white p-3 rounded-lg shadow-md mb-3 border border-gray-200 text-sm">
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
                              <p className="text-xs" style={{ color: brandYellow }}>{post.author.role}</p>
                              <p className="text-xs text-gray-600 mt-1">{post.author.bio}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Post Content */}
                      <h4 className="text-xl font-bold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-[#F1B434]">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>

                      {/* Post Actions and Metadata */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} style={{ color: brandYellow }} />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} style={{ color: brandYellow }} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700"
                            onClick={(e) => toggleSavePost(post.id, e)}
                          >
                            <Heart size={14} />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
                            <MessageCircle size={14} />
                            <span>{post.comments}</span>
                          </button>
                          <div className="relative">
                            <button
                              className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700"
                              onClick={(e) => toggleShareOptions(post.id, e)}
                            >
                              <Share2 size={14} />
                            </button>

                            {/* Share Options Dropdown */}
                            {showShareOptions === post.id && (
                              <div className="absolute right-0 bottom-full mb-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                                <button
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={(e) => sharePost('twitter', post, e)}
                                >
                                  Twitter
                                </button>
                                <button
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={(e) => sharePost('facebook', post, e)}
                                >
                                  Facebook
                                </button>
                                <button
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={(e) => sharePost('linkedin', post, e)}
                                >
                                  LinkedIn
                                </button>
                                <button
                                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={(e) => sharePost('copy', post, e)}
                                >
                                  Copy Link
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image on the right */}
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Posts (Right) */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Popular Reads</h3>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
              {/* Featured Image Card with Text Overlay */}
              <div className="space-y-4 mb-6">
                {featuredPosts.slice(0, 1).map((post) => (
                  <div
                    onClick={() => handlePostClick(post.slug)}
                    key={`featured-${post.id}`}
                    className="relative w-full h-48 overflow-hidden rounded-lg group"
                  >
                    {/* Banner Image */}
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      width={1200}
                      height={628}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-end p-5">
                      <div>
                        <h3 className="text-sm font-bold text-white line-clamp-2 hover:text-[#F1B434] transition-colors duration-300">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-white/80 mt-2">
                          <span>
                            {post.date
                              ? new Date(post.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })
                              : "Unknown Date"}
                          </span>
                          <span>•</span>
                          <span>12 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Recent Posts</h4>

                <div className="space-y-4 mb-6">
                  <div className="space-y-4 mb-6">
                    {featuredPosts.slice(0, 3).map((post) => (
                      <div 
                      onClick={() => handlePostClick(post.slug)}
                      key={`recent-${post.id}`} className="flex gap-3 items-start pb-3 border-b border-gray-100">
                        {/* Thumbnail */}
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
                          <h5 className="text-sm font-semibold text-gray-800 line-clamp-2 transition-colors duration-300 hover:text-[#F1B434]">{post.title}</h5>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <span>{formatDate(post.date)}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Last Updated Section */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1">
                    <Clock size={12} style={{ color: brandYellow }} />
                    <span>Last updated: {new Date().toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <div className="flex items-center gap-1">
                    <span>{featuredPosts.length} articles</span>
                  </div>
                </div>
              </div>
            </div>
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
            href="/media/blog"
            className="inline-flex items-center px-6 py-3 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
            style={{ backgroundColor: brandYellow }}
          >
            <motion.span whileHover={{ scale: 1.05 }}>
              View All Articles
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSectionClient;