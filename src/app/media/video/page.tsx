// app/videos/page.tsx
import React from 'react';
import { prisma } from '../../../lib/prisma';
import VideosClient from './VideosClient';

// Types
export type Video = {
  id: number;
  title: string;
  video_id: string;
  precedence: number;
  time_modified: Date;
  is_disabled: boolean;
};

export type VideosData = {
  featuredVideos: Video[];
  recentVideos: Video[];
};

// Server-side data fetching
async function getVideosData(): Promise<VideosData> {
  try {
    // Fetch all active videos ordered by precedence and modification time
    const allVideos = await prisma.fuel_videos.findMany({
      where: {
        is_disabled: false
      },
      orderBy: [
        { precedence: 'asc' },
        { time_modified: 'desc' }
      ]
    });

    // Split into featured (first 2) and recent (rest)
    const featuredVideos = allVideos.slice(0, 2);
    const recentVideos = allVideos.slice(2);

    return {
      featuredVideos,
      recentVideos
    };
  } catch (error) {
    console.error('Error fetching videos:', error);
    return {
      featuredVideos: [],
      recentVideos: []
    };
  }
}

export default async function VideosPage() {
  // Fetch data directly from database
  const videosData = await getVideosData();

  return <VideosClient videosData={videosData} />;
}