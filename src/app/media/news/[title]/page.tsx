// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowLeft, CalendarDays, Clock, Mail, Share2, Bookmark } from 'lucide-react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useRouter } from "next/navigation";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';



// interface NewsArticle {
//   id: number;
//   title: string;
//   excerpt: string;
//   content: string;
//   image: string;
//   date: string;
//   readTime: string;
//   category: string;
//   featured: boolean;
//   source?: string;
// }

// const Page: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
  
//   // Sample news data matching the NewsPage component
//   const news: NewsArticle[] = [
//     {
//       id: 1,
//       title: 'We will launch new cranes and forklifts in next 4 years',
//       excerpt: 'TIL announces expansion of product portfolio with new cranes and forklifts',
//       content: 'TIL Limited has announced plans to launch new cranes and forklifts in the next four years as part of its smart manufacturing initiative. The company revealed this strategic product expansion during its annual investor day presentation.\n\n' +
//       'The new product line will include:\n' +
//       '- 5 new crane models with capacities from 25 to 250 tons\n' +
//       '- 3 new forklift series with advanced automation features\n' +
//       '- Hybrid and fully electric options across all new products\n\n' +
//       'CEO Sanjay Gupta stated: "This expansion represents our commitment to innovation and meeting evolving customer needs in material handling. The new products will incorporate IoT capabilities for predictive maintenance and fleet management."\n\n' +
//       'The development timeline includes:\n' +
//       '- Q3 2025: First prototype testing\n' +
//       '- Q1 2026: Customer trials\n' +
//       '- Q3 2026: Commercial launch\n\n' +
//       'This initiative is part of TIL\'s ₹250 crore investment in R&D over the next four years.',
//       image: `${basePath}/no_image.jpg`,
//       date: '2025-07-28',
//       readTime: '4 min read',
//       category: 'Product Launch',
//       featured: true,
//       source: 'Smart Manufacturing and Enterprises'
//     },
//     {
//       id: 2,
//       title: 'TIL forms dedicated Strategic Business Unit (SBU) called "TIL Defence"',
//       excerpt: 'New SBU to focus on defense sector opportunities',
//       content: 'TIL Limited has established a new strategic business unit dedicated to supporting its growing defense portfolio. The "TIL Defence" SBU will focus on developing specialized material handling solutions for military applications.\n\n' +
//       'The formation of this unit comes as India increases its defense manufacturing capabilities under the "Make in India" initiative. TIL Defence will work closely with domestic and international partners to deliver customized solutions for the armed forces.\n\n' +
//       'Key focus areas include:\n' +
//       '- Mobile harbor cranes for naval applications\n' +
//       '- Heavy-duty forklifts for ammunition handling\n' +
//       '- Specialized container handlers for border logistics\n' +
//       '- Ruggedized equipment for extreme environments\n\n' +
//       'The SBU will be headed by industry veteran Rajiv Mehra, who brings over 25 years of experience in defense logistics. Initial projects include a contract with the Indian Navy to supply 12 units of specialized 45-ton capacity harbor cranes, with delivery scheduled for Q3 2025.',
//       image: `${basePath}/no_image.jpg`,
//       date: '2025-07-25',
//       readTime: '5 min read',
//       category: 'Company News',
//       featured: true,
//       source: 'Business Standard'
//     },
//     {
//       id: 3,
//       title: 'TIL Returns to Profit, Reports Highest EBITDA In Six Years',
//       excerpt: 'Company shows strong financial turnaround',
//       content: 'TIL Limited has reported its highest EBITDA in six years, marking a significant return to profitability. The Q2 FY25 results show an EBITDA of ₹42 crore, a dramatic improvement from the ₹15 crore loss reported in the same quarter last year.\n\n' +
//       'Key factors contributing to this turnaround include:\n' +
//       '- 35% increase in aftermarket parts sales\n' +
//       '- Successful cost optimization measures\n' +
//       '- Strong demand in infrastructure and defense sectors\n' +
//       '- Improved operational efficiency\n\n' +
//       'Revenue grew by 28% year-over-year to ₹280 crore, with the material handling equipment segment contributing 65% of total sales. The company also reduced its debt by ₹50 crore during the quarter.\n\n' +
//       'CFO Anjali Patel commented: "Our focus on working capital management and inventory optimization has significantly improved our cash flow position. We expect this positive trend to continue through the fiscal year."\n\n' +
//       'The company has revised its full-year guidance upward, projecting 15-20% revenue growth and EBITDA margins of 12-14%.',
//       image: `${basePath}/no_image.jpg`,
//       date: '2025-07-22',
//       readTime: '6 min read',
//       category: 'Financial Results',
//       featured: false,
//       source: 'Construction World'
//     },
//     {
//       id: 4,
//       title: 'TIL Limited Q4FY25 Results: 398% Revenue Growth and Return to Profitability',
//       excerpt: 'Record quarterly performance for the company',
//       content: 'TIL Limited reported a staggering 398% revenue growth in Q4 FY25 along with a return to profitability, marking one of the most dramatic turnarounds in India\'s capital goods sector.\n\n' +
//       'Key highlights:\n' +
//       '- Revenue: ₹450 crore (up from ₹90 crore in Q4 FY24)\n' +
//       '- Net profit: ₹32 crore (vs. loss of ₹28 crore in Q4 FY24)\n' +
//       '- Order book: ₹1,200 crore (highest in company history)\n\n' +
//       'The exceptional performance was driven by:\n' +
//       '- Large infrastructure projects in Middle East and Southeast Asia\n' +
//       '- Defense sector orders under "Make in India"\n' +
//       '- Aftermarket services growth\n' +
//       '- Export market expansion\n\n' +
//       'Managing Director Ravi Kumar stated: "Our strategic investments in product development and global partnerships are yielding results. The 398% growth, while exceptional, reflects our new baseline performance."\n\n' +
//       'The company announced a dividend of ₹2 per share, its first payout in five years. Analysts have upgraded the stock to "buy" across major brokerages following these results.',
//       image: `${basePath}/no_image.jpg`,
//       date: '2025-07-20',
//       readTime: '5 min read',
//       category: 'Financial Results',
//       featured: false,
//       source: 'Finance Saathi'
//     }
//   ];

//   // Find the current article or default to first if not found
//   const article = news.find(item => item.id === Number(id)) || news[0];

//   // Format date to readable format
//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   // Handle sharing the article
//   const handleShare = async (e: React.MouseEvent) => {
//     e.stopPropagation();
//     try {
//       if (navigator.share) {
//         await navigator.share({
//           title: article.title,
//           text: article.excerpt,
//           url: window.location.href,
//         });
//       } else {
//         await navigator.clipboard.writeText(window.location.href);
//         const notification = document.createElement('div');
//         notification.className = 'fixed bottom-4 right-4 bg-[#F1B434] text-black px-4 py-2 rounded-lg shadow-lg animate-fade-in-up';
//         notification.textContent = 'Link copied to clipboard!';
//         document.body.appendChild(notification);
//         setTimeout(() => {
//           notification.classList.add('animate-fade-out');
//           setTimeout(() => notification.remove(), 300);
//         }, 3000);
//       }
//     } catch (err) {
//       console.error('Error sharing:', err);
//     }
//   };

//   // Handle bookmarking the article
//   const handleBookmark = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
//     const updatedBookmarks = bookmarks.includes(article.id)
//       ? bookmarks.filter((id: number) => id !== article.id)
//       : [...bookmarks, article.id];
//     localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    
//     const notification = document.createElement('div');
//     notification.className = 'fixed bottom-4 right-4 bg-[#F1B434] text-black px-4 py-2 rounded-lg shadow-lg animate-fade-in-up';
//     notification.textContent = bookmarks.includes(article.id)
//       ? 'Article removed from bookmarks'
//       : 'Article bookmarked!';
//     document.body.appendChild(notification);
//     setTimeout(() => {
//       notification.classList.add('animate-fade-out');
//       setTimeout(() => notification.remove(), 300);
//     }, 3000);
//   };

//   // Handle newsletter subscription
//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;
//     const formData = new FormData(form);
//     const email = formData.get('email') as string;

//     try {
//       const button = form.querySelector('button[type="submit"]');
//       if (button) {
//         button.innerHTML = '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...';
//         button.setAttribute('disabled', 'true');
//       }

//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       const notification = document.createElement('div');
//       notification.className = 'fixed bottom-4 right-4 bg-[#F1B434] text-black px-4 py-2 rounded-lg shadow-lg animate-fade-in-up';
//       notification.textContent = 'Thank you for subscribing!';
//       document.body.appendChild(notification);
//       setTimeout(() => {
//         notification.classList.add('animate-fade-out');
//         setTimeout(() => notification.remove(), 300);
//       }, 3000);
      
//       form.reset();
//     } catch (error) {
//       const notification = document.createElement('div');
//       notification.className = 'fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-up';
//       notification.textContent = 'Subscription failed. Please try again.';
//       document.body.appendChild(notification);
//       setTimeout(() => {
//         notification.classList.add('animate-fade-out');
//         setTimeout(() => notification.remove(), 300);
//       }, 3000);
//     } finally {
//       const button = form.querySelector('button[type="submit"]');
//       if (button) {
//         button.textContent = 'Subscribe';
//         button.removeAttribute('disabled');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Arial', sans-serif" }}>
//       {/* Article Header Section */}
//       <motion.section 
//         className="relative bg-[#1a2233]"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
//           <div className="text-left">
//             <motion.button
//               onClick={() => navigate('/media/news')}
//               className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
//               aria-label="Back to news"
//               whileHover={{ x: -3 }}
//               transition={{ type: 'spring', stiffness: 300 }}
//             >
//               <ArrowLeft className="w-5 h-5 mr-2" />
//               Back to News
//             </motion.button>
            
//             <div className="mb-4">
//               <span className="text-xs font-semibold text-[#1a2233] bg-[#F1B434] px-3 py-1 rounded" style={{ fontFamily: "'Arial Narrow', sans-serif" }}>
//                 {article.category}
//               </span>
//               {article.source && (
//                 <span className="ml-3 text-sm text-gray-300">{article.source}</span>
//               )}
//             </div>
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Arial', sans-serif" }}>
//               {article.title}
//             </h1>
//             <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm">
//               <div className="flex items-center">
//                 <CalendarDays className="w-4 h-4 mr-2" />
//                 {formatDate(article.date)}
//               </div>
//               <div className="flex items-center">
//                 <Clock className="w-4 h-4 mr-2" />
//                 {article.readTime}
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Article Content Section */}
//       <motion.section 
//         className="py-12"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <div className="max-w-4xl mx-auto px-6 md:px-10">
//           <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
//             <div className="p-6 md:p-8">
//               <div className="flex justify-end gap-3 mb-6">
//                 <motion.button 
//                   onClick={handleShare}
//                   className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//                   aria-label="Share article"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Share2 className="w-5 h-5 text-gray-600" />
//                 </motion.button>
//                 <motion.button 
//                   onClick={handleBookmark}
//                   className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//                   aria-label="Bookmark article"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Bookmark className="w-5 h-5 text-gray-600" />
//                 </motion.button>
//               </div>
              
//               <div className="prose max-w-none">
//                 {article.content.split('\n\n').map((paragraph, index) => (
//                   <motion.p 
//                     key={index} 
//                     className="text-gray-700 leading-relaxed mb-4"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
//                   >
//                     {paragraph}
//                   </motion.p>
//                 ))}
//               </div>
              
//               <div className="mt-8 pt-6 border-t border-gray-200">
//                 <div className="flex flex-wrap gap-2">
//                   <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium" style={{ fontFamily: "'Arial Narrow', sans-serif" }}>
//                     #{article.category.replace(/\s+/g, '')}
//                   </span>
//                   <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium" style={{ fontFamily: "'Arial Narrow', sans-serif" }}>
//                     #TILUpdates
//                   </span>
//                   <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium" style={{ fontFamily: "'Arial Narrow', sans-serif" }}>
//                     #IndustryNews
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Related Articles Section */}
//       <motion.section 
//         className="pb-16"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
//           <div className="flex items-center mb-8 border-b border-gray-200 pb-4">
//             <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Arial Narrow', sans-serif" }}>
//               Related News
//             </h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {news
//               .filter(item => item.id !== article.id)
//               .slice(0, 3)
//               .map((relatedArticle) => (
//                 <motion.article
//                   key={relatedArticle.id}
//                   className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-gray-200"
//                   onClick={() => navigate(`/media/news/${relatedArticle.id}`)}
//                   whileHover={{ y: -5 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <div className="h-40 overflow-hidden">
//                     <img 
//                       src={relatedArticle.image} 
//                       alt={relatedArticle.title} 
//                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                       loading="lazy"
//                     />
//                   </div>
//                   <div className="p-5">
//                     <div className="flex justify-between items-start mb-2">
//                       <span className="text-xs font-semibold text-[#1a2233] bg-gray-100 px-2 py-1 rounded" style={{ fontFamily: "'Arial Narrow', sans-serif" }}>
//                         {relatedArticle.category}
//                       </span>
//                       {relatedArticle.source && (
//                         <span className="text-xs text-gray-500">{relatedArticle.source}</span>
//                       )}
//                     </div>
//                     <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Arial', sans-serif" }}>{relatedArticle.title}</h3>
//                     <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-3">
//                       <div className="text-xs text-gray-500">
//                         {formatDate(relatedArticle.date)}
//                       </div>
//                       <div className="flex items-center text-sm text-[#1a2233] font-medium">
//                         Read more
//                         <ArrowLeft className="ml-1 w-4 h-4 rotate-180" />
//                       </div>
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Newsletter Subscription Section */}
//       <motion.div 
//         className="bg-[#1a2233] rounded-lg mx-6 md:mx-10 xl:mx-auto mb-16 p-8 max-w-7xl"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <div className="max-w-3xl mx-auto text-center">
//           <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Arial Narrow', sans-serif" }}>Stay Updated with TIL</h3>
//           <p className="text-gray-300 mb-6" style={{ fontFamily: "'Arial', sans-serif" }}>
//             Subscribe to receive the latest news and updates from TIL
//           </p>
//           <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//             <input 
//               type="email" 
//               name="email"
//               placeholder="Your email address" 
//               className="flex-1 px-4 py-3 rounded bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#F1B434]"
//               required
//               style={{ fontFamily: "'Arial', sans-serif" }}
//             />
//             <motion.button 
//               type="submit" 
//               className="px-6 py-3 bg-[#F1B434] text-[#1a2233] font-semibold rounded hover:bg-[#FFE352] transition-colors"
//               style={{ fontFamily: "'Arial Narrow', sans-serif" }}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               Subscribe
//             </motion.button>
//           </form>
//         </div>
//       </motion.div>

//       {/* Global Styles */}
//       <style jsx global>{`
//         .prose {
//           line-height: 1.75;
//         }
//         .prose p {
//           margin-bottom: 1.5rem;
//         }
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes fadeOut {
//           from {
//             opacity: 1;
//           }
//           to {
//             opacity: 0;
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.3s ease-out forwards;
//         }
//         .animate-fade-out {
//           animation: fadeOut 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Page;