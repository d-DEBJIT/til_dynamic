'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';


const Page = () => {
  const [playingVideo, setPlayingVideo] = React.useState<number | null>(null);

  const featuredVideos = [
    {
      id: 1,
      title: 'TIL India Limited | 50th Annual General Meeting | Growth, Legacy & Future Vision',
      videoId: 'N4pN5jf4PqI', // ✅ Only keep YouTube ID
    },
    {
      id: 2,
      title: "TIL Limited's 49th AGM 2024",
      videoId: 'rGemV-aemgA',
    },
  ];

  const recentVideos = [
    {
      id: 3,
      title: 'Hyster TIL RS 46-33 CH ReachStacker ...',
      videoId: 'cxTn4Kqw-F0',
    },
    {
      id: 4,
      title: 'IndianArmy inducts 40 Heavy Duty ...',

      videoId: 'U9VYisdLuTM',
    },
    {
      id: 5,
      title: 'A Message from TIL HR',
  
      videoId: 'hD1UCDGGdaY',
    },
    {
      id: 6,
      title: 'TIL Limited Customer Key Handover 2024',

      videoId: '7uLmMRX7MX0',
    },
    {
      id: 7,
      title: 'SAMPLE',
      videoId: 'cxTn4Kqw-F0',
    },
    {
      id: 8,
      title: 'SAMPLE',

      videoId: 'U9VYisdLuTM',
    },
    {
      id: 9,
      title: 'SAMPLE',
  
      videoId: 'hD1UCDGGdaY',
    },
    {
      id: 10,
      title: 'SAMPLE',

      videoId: '7uLmMRX7MX0',
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Helper: build thumbnail + embed URL from videoId
  const getEmbedUrl = (videoId: string) =>
    `https://www.youtube.com/embed/${videoId}`;
  const getThumbnailUrl = (videoId: string) =>
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/Media-page.jpg`}
          alt="TIL Videos"
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
                TIL <span className="text-[#F1B434]">Videos</span>
              </motion.h1>
              <motion.p
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Explore our collection of product demonstrations, event coverage,
                and corporate videos.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">

        {/* Featured */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">Featured Videos</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => {
              const embedUrl = getEmbedUrl(video.videoId);
              const thumbnailUrl = getThumbnailUrl(video.videoId);
              return (
                <motion.article
                  key={video.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                    {playingVideo === video.id ? (
                      <iframe
                        src={`${embedUrl}?autoplay=1`}
                        title={video.title}
                        className="w-full h-full rounded-xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          src={thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                        />
                        <div
                          className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer"
                          onClick={() => setPlayingVideo(video.id)}
                        >
                          <div className="w-16 h-16 bg-[#F1B434] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white fill-current" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                    {video.title}
                  </h3>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Recent */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">Recent Videos</h2>
            <Link
              href="https://www.youtube.com/@TILLimitedIndia"
              className="text-sm text-[#F1B434] hover:underline"
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Security best practice
            >
              View All Videos
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVideos.map((video, index) => {
              const embedUrl = getEmbedUrl(video.videoId);
              const thumbnailUrl = getThumbnailUrl(video.videoId);
              return (
                <motion.article
                  key={video.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                    {playingVideo === video.id ? (
                      <iframe
                        src={`${embedUrl}?autoplay=1`}
                        title={video.title}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          src={thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                        />
                        <div
                          className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer"
                          onClick={() => setPlayingVideo(video.id)}
                        >
                          <div className="w-12 h-12 bg-[#F1B434] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-white fill-current" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                    {video.title}
                  </h3>
                </motion.article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
