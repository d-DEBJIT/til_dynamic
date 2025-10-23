// app/media/blog/[slug]/BlogViewPage.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ArrowLeft,
  User,
  BookOpen,
  ArrowRight,
  Search,
  TrendingUp,
  Clock as ClockIcon
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Skeleton Loader Component (keep your existing one)
const SkeletonLoader = () => {
  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen">
      {/* Your existing skeleton loader JSX */}
      <div className="relative h-72 w-full overflow-hidden bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
            <div className="mb-4">
              <div className="h-6 w-24 bg-gray-400 rounded-md animate-pulse"></div>
            </div>
            <div className="h-6 w-40 bg-gray-400 rounded-md animate-pulse mb-4"></div>
            <div className="h-12 bg-gray-400 rounded-md animate-pulse mb-6 w-3/4"></div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="h-8 w-8 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-400 rounded-md animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-400 rounded-md animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-400 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Rest of your skeleton loader */}
    </div>
  );
};

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
  content: string;
  author: BlogAuthor;
  column: string;
  date: string;
  readTime: string;
  likes: string;
  comments: string;
  image: string;
  thumbnail: string;
  featuredImage: string;
  tags: string[];
  slug: string;
}

interface BlogViewPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogViewPage: React.FC<BlogViewPageProps> = ({ post, relatedPosts }) => {
  const router = useRouter();
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [expandedAuthor, setExpandedAuthor] = useState(false);
  const [likes, setLikes] = useState(parseInt(post.likes.replace(/,/g, '')) || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample comments data
  const sampleComments = [
    {
      id: 1,
      author: 'Industry Professional',
      avatar: `${basePath}/no_image.jpg`,
      date: new Date().toISOString().split('T')[0],
      content: 'Great insights on heavy equipment technology! This article provides valuable information for professionals in the field.',
      likes: 12
    }
  ];

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No date';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleSavePost = () => {
    setSavedPosts(prev =>
      prev.includes(post.id) ? prev.filter(id => id !== post.id) : [...prev, post.id]
    );
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'Current User',
        avatar: '',
        date: new Date().toISOString().split('T')[0],
        content: newComment,
        likes: 0
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }

    setShowShareOptions(false);
  };

  // Initialize comments
  React.useEffect(() => {
    setComments(sampleComments);
  }, []);

  // Popular posts for right column
  const popularPosts = [...relatedPosts, post]
    .sort((a, b) => parseInt(b.likes.replace(/,/g, '')) - parseInt(a.likes.replace(/,/g, '')))
    .slice(0, 4);

  // Recent posts for right column
  const recentPosts = [...relatedPosts, post]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Calculate read time based on content length
  const calculateContentReadTime = () => {
    const wordCount = post.content.split(/\s+/).length;
    return Math.ceil(wordCount / 200);
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen">
      {/* Header */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent z-20" />

        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
            

            {/* <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-sm font-bold tracking-tight mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {post.column.toUpperCase()}
            </motion.span> */}

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {post.title}
            </motion.h1>
<div className="w-24 h-1.5 bg-[#F1B434] rounded-full mb-4" />
            <motion.div
              className="flex flex-wrap items-center gap-4 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{post.readTime} read</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen size={14} />
                <span>{calculateContentReadTime()} min read</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-12 -mt-6 relative z-10">
        <button
              onClick={() => router.push(`/media/blog`)}
              className="flex items-center text-[#F1B434] hover:text-gray-800 mb-4 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </button>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Article Content */}
              <article className="prose prose-lg max-w-none p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F1B434]/10 text-[#F1B434] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="lead text-gray-700 text-xl mb-8 font-medium">
                  {post.excerpt}
                </p>

                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Action Bar */}
              <div className="border-t border-gray-200 p-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLike}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#F1B434] transition-colors"
                  >
                    <Heart
                      size={20}
                      fill={isLiked ? "#F1B434" : "none"}
                      className={isLiked ? "text-[#F1B434]" : ""}
                    />
                    <span>{likes.toLocaleString()}</span>
                  </motion.button>

                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#F1B434] transition-colors">
                    <MessageCircle size={20} />
                    <span>{comments.length}</span>
                  </button>

                  <div className="relative">
                    <button
                      onClick={() => setShowShareOptions(!showShareOptions)}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#F1B434] transition-colors"
                    >
                      <Share2 size={20} />
                      <span>Share</span>
                    </button>

                    {showShareOptions && (
                      <motion.div
                        className="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 border border-gray-200"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <button
                          onClick={() => handleShare('facebook')}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Facebook size={16} className="mr-2 text-blue-600" />
                          Share on Facebook
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Twitter size={16} className="mr-2 text-blue-400" />
                          Share on Twitter
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Linkedin size={16} className="mr-2 text-blue-700" />
                          Share on LinkedIn
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <LinkIcon size={16} className="mr-2" />
                          Copy Link
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>

                <button
                  onClick={toggleSavePost}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#F1B434] transition-colors"
                >
                  <Heart
                    size={20}
                    fill={savedPosts.includes(post.id) ? "#F1B434" : "none"}
                    className={savedPosts.includes(post.id) ? "text-[#F1B434]" : ""}
                  />
                  <span>{savedPosts.includes(post.id) ? 'Saved' : 'Save for later'}</span>
                </button>
              </div>

              {/* Author Bio */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{post.author.name}</h3>
                    <p className="text-sm text-[#F1B434]">{post.author.role}</p>
                    <p className="text-gray-600 mt-2">{post.author.bio}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <button className="text-sm text-[#F1B434] hover:underline flex items-center">
                        <User size={14} className="mr-1" />
                        View Profile
                      </button>
                      <span className="text-gray-400">•</span>
                      <button className="text-sm text-[#F1B434] hover:underline">
                        More Articles
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="border-t border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Comments ({comments.length})</h3>

                <form onSubmit={handleCommentSubmit} className="mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                        <User size={20} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                        rows={3}
                      />
                      <div className="mt-2 flex justify-end">
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#F1B434] text-white rounded-md hover:bg-[#d89c2a] transition-colors flex items-center"
                        >
                          Post Comment
                          <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="space-y-6">
                  {comments.map(comment => (
                    <div key={comment.id} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={comment.avatar}
                          alt={comment.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-800">{comment.author}</h4>
                          <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{comment.content}</p>
                        <div className="flex items-center gap-4">
                          <button className="text-sm text-gray-500 hover:text-[#F1B434] flex items-center gap-1">
                            <Heart size={14} />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="text-sm text-gray-500 hover:text-[#F1B434]">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <motion.div
                      key={relatedPost.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      whileHover={{ y: -5 }}
                      onClick={() => router.push(`/media/blog/${relatedPost.slug}`)}
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-medium text-[#F1B434]">{relatedPost.column}</span>
                        <h4 className="font-bold text-gray-800 mt-1 mb-2 line-clamp-2">{relatedPost.title}</h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{formatDate(relatedPost.date).split(',')[0]}</span>
                          <span className="mx-2">•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 relative">
  <div className="sticky top-24 space-y-8">

            {/* Search Box */}
            {/* <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Search Articles</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
              </div>
              <button className="mt-3 text-sm text-[#F1B434] hover:underline">
                Advanced Search
              </button>
            </div> */}

            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <TrendingUp size={20} className="mr-2 text-[#F1B434]" />
                Popular Articles
              </h3>
              <div className="space-y-4">
                {popularPosts.map(post => (
                  <div 
                    key={post.id} 
                    className="flex gap-3 cursor-pointer group"
                    onClick={() => router.push(`/media/blog/${post.slug}`)}
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-800 text-sm leading-tight group-hover:text-[#F1B434] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <ClockIcon size={12} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <ClockIcon size={20} className="mr-2 text-[#F1B434]" />
                Recent Articles
              </h3>
              <div className="space-y-3">
                {recentPosts.map(post => (
                  <div 
                    key={post.id}
                    className="cursor-pointer group"
                    onClick={() => router.push(`/media/blog/${post.slug}`)}
                  >
                    <h4 className="font-medium text-gray-800 text-sm group-hover:text-[#F1B434] transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <span>{formatDate(post.date).split(',')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            {/* <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {['Industry Insights', 'Construction Technology', 'Sustainable Technology', 'Equipment Management', 'Logistics Innovation'].map(category => (
                  <div key={category} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-sm text-gray-700 hover:text-[#F1B434] cursor-pointer transition-colors">
                      {category}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                      {relatedPosts.filter(p => p.column === category).length}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default BlogViewPage;