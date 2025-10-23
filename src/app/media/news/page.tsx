import React from 'react';
import { prisma } from '../../../lib/prisma';
import NewsClient from './NewsClient';

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
  url: string;
}

async function getNewsData(): Promise<NewsArticle[]> {
  try {
    const documents = await prisma.document_details.findMany({
      where: {
        ref_id: 1,
        is_disabled: false
      },
      orderBy: {
        precedence: 'asc'
      }
    });

    // Transform the database data to match your NewsArticle interface
    const newsArticles: NewsArticle[] = documents.map((doc, index) => {
      // You'll need to map your database fields to the NewsArticle structure
      // This is an example - adjust based on how you store data in your table
      return {
        id: doc.doc_id,
        title: doc.publication || `News ${doc.doc_id}`,
        excerpt: doc.uploaded_file_desc || 'No description available',
        content: doc.uploaded_file_desc || 'No content available',
        // image: doc.random_file_name || `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/default-news.jpg`,
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${doc.random_file_name}`,
        date: doc.uploaded_on?.toISOString().split('T')[0] || new Date().toISOString().split('T')[0],
        readTime: '3 min read', // You might want to calculate this or store it in DB
        category: doc.file_type || 'General',
        featured: index < 3, // Make first 3 featured, adjust as needed
        source: doc.publication || 'TIL',
        breaking: index === 0, // Make first article breaking
        url: doc.url ?? '',

      };
    });

    return newsArticles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export default async function NewsPage() {
  const news = await getNewsData();

  return <NewsClient initialNews={news} />;
}