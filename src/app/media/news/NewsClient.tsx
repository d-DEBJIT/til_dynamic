'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock, Mail, Share2, Bookmark } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface NewsArticle {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
    featured: boolean;
    source?: string;
    breaking?: boolean;
    url?: string;
}

interface NewsClientProps {
    initialNews: NewsArticle[];
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const NewsClient: React.FC<NewsClientProps> = ({ initialNews }) => {
    const navigate = useRouter();
    const [news, setNews] = React.useState<NewsArticle[]>(initialNews);
    const [visibleCount, setVisibleCount] = React.useState(6);


    // Rest of your existing component code remains the same, 
    // but remove the hardcoded news array

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const handleArticleClick = (article: NewsArticle) => {
        const slug = article.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');

        navigate.push(
            `/media/news/${slug}?article=${encodeURIComponent(JSON.stringify(article))}`
        );
    };

    const handleShare = async (e: React.MouseEvent, article: NewsArticle) => {
        e.stopPropagation();
        try {
            if (navigator.share) {
                await navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: `${window.location.origin}/news/${article.id}`,
                });
            } else {
                await navigator.clipboard.writeText(
                    `${window.location.origin}/news/${article.id}`
                );
                const notification = document.createElement('div');
                notification.className = 'fixed bottom-4 right-4 bg-[#F1B434] text-black px-4 py-2 rounded-lg shadow-lg animate-fade-in-up';
                notification.textContent = 'Link copied to clipboard!';
                document.body.appendChild(notification);
                setTimeout(() => {
                    notification.classList.add('animate-fade-out');
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    const handleBookmark = (e: React.MouseEvent, articleId: number) => {
        e.stopPropagation();
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
        const updatedBookmarks = bookmarks.includes(articleId)
            ? bookmarks.filter((id: number) => id !== articleId)
            : [...bookmarks, articleId];
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));

        const notification = document.createElement('div');
        notification.className = 'fixed bottom-4 right-4 bg-[#F1B434] text-black px-4 py-2 rounded-lg shadow-lg animate-fade-in-up';
        notification.textContent = bookmarks.includes(articleId)
            ? 'Article removed from bookmarks'
            : 'Article bookmarked!';
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.classList.add('animate-fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    };

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const email = formData.get('email') as string;

        try {
            const button = form.querySelector('button[type="submit"]');
            if (button) {
                button.innerHTML = '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...';
                button.setAttribute('disabled', 'true');
            }

            await new Promise(resolve => setTimeout(resolve, 1000));

            const notification = document.createElement('div');
            notification.className = 'fixed bottom-4 right-4 bg-[#F1B434] text-black px-4 py-2 rounded-lg shadow-lg animate-fade-in-up';
            notification.textContent = 'Thank you for subscribing!';
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.classList.add('animate-fade-out');
                setTimeout(() => notification.remove(), 300);
            }, 3000);

            form.reset();
        } catch (error) {
            const notification = document.createElement('div');
            notification.className = 'fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-up';
            notification.textContent = 'Subscription failed. Please try again.';
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.classList.add('animate-fade-out');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        } finally {
            const button = form.querySelector('button[type="submit"]');
            if (button) {
                button.textContent = 'Subscribe';
                button.removeAttribute('disabled');
            }
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
    };

    const hoverEffect = {
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
    };

    const tapEffect = {
        scale: 0.98
    };

    const nonFeaturedNews = React.useMemo(
        () => news.filter((article) => !article.featured),
        [news]
    );

    const visibleNews = React.useMemo(
        () => nonFeaturedNews.slice(0, visibleCount),
        [nonFeaturedNews, visibleCount]
    );

    return (
        <div className="bg-white min-h-screen font-sans" style={{ fontFamily: "'Arial', sans-serif" }}>
            {/* Header with Brand Colors */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/news-bg.jpg`}
                    alt="TIL News"
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
                                style={{ fontFamily: "'Arial', sans-serif" }}
                            >
                                TIL <span className="text-[#F1B434]">News</span>
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
                                style={{ fontFamily: "'Arial', sans-serif" }}
                            >
                                Stay updated with the latest news and media coverage about TIL.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Breaking News Ticker */}
            <div className="bg-[#F1B434] text-black py-2">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 flex items-center">
                    <span
                        className="font-bold mr-4 whitespace-nowrap"
                        style={{ fontFamily: "'Arial Narrow', sans-serif" }}
                    >
                        BREAKING:
                    </span>

                    {/* Marquee container */}
                    <div className="relative overflow-hidden flex-1">
                        <div className="flex whitespace-nowrap animate-marquee">
                            {/* First copy */}
                            {news.filter(article => article.breaking).map(article => (
                                <span
                                    key={article.id}
                                    className="inline-block mr-8 cursor-pointer"
                                    onClick={() => {
                                        if (article.url) window.open(article.url, "_blank");
                                        else console.warn("No URL available for this article");
                                    }}
                                    style={{ fontFamily: "'Arial', sans-serif" }}
                                >
                                    {article.content} •
                                </span>
                            ))}

                            {/* Second copy (duplicate for seamless loop) */}
                            {news.filter(article => article.breaking).map(article => (
                                <span
                                    key={`dup-${article.id}`}
                                    className="inline-block mr-8 cursor-pointer"
                                    onClick={() => {
                                        if (article.url) window.open(article.url, "_blank");
                                        else console.warn("No URL available for this article");
                                    }}
                                    style={{ fontFamily: "'Arial', sans-serif" }}
                                >
                                    {article.content} •
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-8">
                {/* Top Stories Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6 border-b-2 border-gray-200 pb-2">
                        <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Arial Narrow', sans-serif" }}>Top Stories</h2>
                        <div className="text-sm text-gray-500" style={{ fontFamily: "'Arial', sans-serif" }}>
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main Featured Story */}
                        <div className="lg:col-span-2">
                            {news.filter(article => article.featured).slice(0, 1).map(article => (
                                <motion.article
                                    key={article.id}
                                    className="group cursor-pointer"
                                    onClick={() => {
                                        if (article.url) {
                                            window.open(article.url, "_blank"); // open DB URL
                                        } else {
                                            handleArticleClick(article); // fallback to your internal page
                                        }
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                    whileHover={{ y: -2 }}
                                >
                                    <div className="relative overflow-hidden rounded-lg mb-4">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-96 object-fill transform group-hover:scale-105 transition duration-500"
                                        />

                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        </div>
                                        {article.breaking && (
                                            <div className="absolute top-4 left-4 bg-[#F1B434] text-black text-xs font-bold px-2 py-1 rounded">
                                                BREAKING
                                            </div>
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-[#F1B434] transition-colors" style={{ fontFamily: "'Arial', sans-serif" }}>
                                                {article.title}
                                            </h3>
                                            <div className="flex items-center text-sm text-gray-300 mt-2" style={{ fontFamily: "'Arial', sans-serif" }}>
                                                <span className="flex items-center mr-4">
                                                    <CalendarDays className="w-4 h-4 mr-1" />
                                                    {formatDate(article.date)}
                                                </span>
                                                <span className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {article.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-lg mb-4" style={{ fontFamily: "'Arial', sans-serif" }}>{article.excerpt}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500" style={{ fontFamily: "'Arial', sans-serif" }}>Source: {article.source}</span>
                                        <div className="flex space-x-3">
                                            <button
                                                onClick={(e) => handleShare(e, article)}
                                                className="text-gray-500 hover:text-[#F1B434] transition-colors"
                                                aria-label="Share"
                                            >
                                                <Share2 size={18} />
                                            </button>
                                            <button
                                                onClick={(e) => handleBookmark(e, article.id)}
                                                className="text-gray-500 hover:text-[#F1B434] transition-colors"
                                                aria-label="Bookmark"
                                            >
                                                <Bookmark size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {/* Secondary Featured Stories */}
                        {/* Secondary Featured Stories */}
                        {/* Secondary Featured Stories */}
<div className="space-y-6">
  {news
    .filter(article => article.featured)
    .slice(1)
    .map(article => (
      <motion.article
        key={article.id}
        className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition p-3"
        onClick={() => {
          if (article.url) {
            window.open(article.url, "_blank"); // open DB URL
          } else {
            handleArticleClick(article); // fallback to internal page
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -2 }}
      >
        <div className="flex gap-5 items-start">
          {/* Image Thumbnail */}
          <div className="flex-shrink-0 w-40 h-28 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-contain transition duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3
              className="text-lg font-semibold text-gray-900 group-hover:text-[#F1B434] transition-colors line-clamp-2"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              {article.title}
            </h3>

            <div
              className="flex items-center text-xs text-gray-500 mt-2 space-x-3"
              style={{ fontFamily: "'Arial', sans-serif" }}
            >
              <span className="flex items-center">
                <CalendarDays className="w-3 h-3 mr-1" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    ))}
</div>


                    </div>
                </section>

                {/* Latest News Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6 border-b-2 border-gray-200 pb-2">
                        <h2
                            className="text-2xl font-bold text-gray-900"
                            style={{ fontFamily: "'Arial Narrow', sans-serif" }}
                        >
                            Latest News
                        </h2>
                        <div
                            className="text-sm text-gray-500"
                            style={{ fontFamily: "'Arial', sans-serif" }}
                        >
                            Updated{" "}
                            {new Date().toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleNews.map((article) => (
                            <motion.article
                                key={article.id}
                                className="group cursor-pointer"
                                onClick={() => {
                                    if (article.url) {
                                        window.open(article.url, "_blank"); // open DB URL
                                    } else {
                                        console.warn("No URL available for this article");
                                    }
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -2 }}
                            >
                                <div className="relative overflow-hidden rounded-lg mb-3 group">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-64 object-fill transform group-hover:scale-105 transition duration-500"
                                    />

                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                        <span className="text-white font-semibold text-lg">Read More</span>
                                    </div>
                                </div>

                                <h3
                                    className="text-lg font-bold text-gray-900 group-hover:text-[#F1B434] transition-colors mb-2"
                                    style={{ fontFamily: "'Arial', sans-serif" }}
                                >
                                    {article.title}
                                </h3>
                                <p
                                    className="text-gray-600 text-sm mb-3 line-clamp-2"
                                    style={{ fontFamily: "'Arial', sans-serif" }}
                                >
                                    {article.excerpt}
                                </p>

                                <div
                                    className="flex justify-between items-center text-xs text-gray-500"
                                    style={{ fontFamily: "'Arial', sans-serif" }}
                                >
                                    <span>
                                        {formatDate(article.date)} • {article.readTime}
                                    </span>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={(e) => handleShare(e, article)}
                                            className="text-gray-400 hover:text-[#F1B434] transition-colors"
                                            aria-label="Share"
                                        >
                                            <Share2 size={16} />
                                        </button>
                                        <button
                                            onClick={(e) => handleBookmark(e, article.id)}
                                            className="text-gray-400 hover:text-[#F1B434] transition-colors"
                                            aria-label="Bookmark"
                                        >
                                            <Bookmark size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Read More News Button */}
                    {visibleCount < news.filter((article) => !article.featured).length && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setVisibleCount((prev) => prev + 9)}
                                className="px-6 py-3 bg-[#F1B434] text-black font-semibold rounded-lg hover:bg-[#FFE352] transition-all"
                                style={{ fontFamily: "'Arial Narrow', sans-serif" }}
                            >
                                Read More News
                            </button>
                        </div>
                    )}
                </section>


                {/* Newsletter Subscription */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-8 my-12 rounded-lg border-l-4 border-[#F1B434]"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Arial Narrow', sans-serif" }}>Stay Updated with TIL News</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: "'Arial', sans-serif" }}>
                            Get the latest news and updates from TIL delivered straight to your inbox.
                            Our newsletter keeps you informed about company developments, product launches,
                            and industry insights.
                        </p>
                        <form
                            onSubmit={handleSubscribe}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="flex-1 max-w-md px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] transition-all rounded-lg"
                                required
                                style={{ fontFamily: "'Arial', sans-serif" }}
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-[#F1B434] text-black font-semibold hover:bg-[#FFE352] transition-all rounded-lg"
                                style={{ fontFamily: "'Arial Narrow', sans-serif" }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </motion.div>
            </main>

            {/* Global Styles for Animations */}
            <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        .animate-fade-out {
          animation: fadeOut 0.3s ease-out forwards;
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }
      `}</style>
        </div>
    );
};

export default NewsClient;