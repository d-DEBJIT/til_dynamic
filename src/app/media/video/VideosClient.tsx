// app/videos/VideosClient.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { VideosData } from './page';

interface VideosClientProps {
  videosData: VideosData;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const VideosClient: React.FC<VideosClientProps> = ({ videosData }) => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const { featuredVideos, recentVideos } = videosData;

  // Helper: build thumbnail + embed URL from video_id
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
              <motion.div
                                              className="w-24 sm:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-4 sm:mb-6 shadow-lg"
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
                Explore our collection of product demonstrations, event coverage,
                and corporate videos.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
        {/* Featured Videos Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">Featured Videos</h2>
          </div>

          {featuredVideos.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredVideos.map((video, index) => {
                const embedUrl = getEmbedUrl(video.video_id);
                const thumbnailUrl = getThumbnailUrl(video.video_id);
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
                            onError={(e) => {
                              // Fallback to a different quality if maxresdefault doesn't exist
                              const target = e.target as HTMLImageElement;
                              target.src = `https://img.youtube.com/vi/${video.video_id}/hqdefault.jpg`;
                            }}
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No featured videos available.</p>
              <p className="text-gray-400 mt-2">Please check back later for updates.</p>
            </div>
          )}
        </section>

        {/* Recent Videos Section */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b-2 border-gray-200 pb-2">
            <h2 className="text-2xl font-bold text-gray-800">Recent Videos</h2>
            <Link
              href="https://www.youtube.com/@TILLimitedIndia"
              className="text-sm text-[#F1B434] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Videos
            </Link>
          </div>

          {recentVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentVideos.map((video, index) => {
                const embedUrl = getEmbedUrl(video.video_id);
                const thumbnailUrl = getThumbnailUrl(video.video_id);
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
                            onError={(e) => {
                              // Fallback to a different quality if maxresdefault doesn't exist
                              const target = e.target as HTMLImageElement;
                              target.src = `https://img.youtube.com/vi/${video.video_id}/hqdefault.jpg`;
                            }}
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
                    <h3 className="text-base text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                      {video.title}
                    </h3>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No recent videos available.</p>
              <p className="text-gray-400 mt-2">Please check back later for updates.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default VideosClient;