// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export interface NewsArticle {
//   id: number;
//   title: string;
//   excerpt: string;
//   image: string;
//   date: string;
//   readTime: string;
//   category: string;
//   featured: boolean;
//   position?: 'top' | 'bottom';
//   size?: 'small' | 'medium';
// }

// export async function getNewsArticles(): Promise<NewsArticle[]> {
//   try {
//     console.log('🔍 Fetching news articles from database (ref_id = 1, table_name = media_master)...');

//     const documents = await prisma.document_details.findMany({
//   where: {
//     ref_id: 1,
//     table_name: { equals: 'media_master' },
//     OR: [
//       { is_disabled: false },
//       { is_disabled: null },
//     ],
//     AND: [
//       {
//         OR: [
//           { url: { not: null } },
//           { uploaded_file_desc: { not: null } },
//           { publication: { not: null } },
//           { url: { not: '' } },
//           { uploaded_file_desc: { not: '' } },
//           { publication: { not: '' } },
//         ],
//       },
//     ],
//   },
//   orderBy: [
//     { uploaded_on: 'desc' },
//     { precedence: 'asc' },
//   ],
// });

//     console.log(`📊 Found ${documents.length} media_master documents for ref_id = 1`);

//     if (documents.length === 0) {
//       console.log('❌ No media_master documents found for ref_id = 1');
//       return getSampleNews();
//     }

//     const newsArticles = documents.map((doc, index) =>
//       transformToNewsArticle(doc, index)
//     );

//     console.log('✅ Successfully transformed media_master documents to news articles');
//     return newsArticles;
//   } catch (error) {
//     console.error('❌ Error fetching media_master news articles:', error);
//     return getSampleNews();
//   }
// }

// function transformToNewsArticle(doc: any, index: number): NewsArticle {
//   // Layout properties
//   let featured = false;
//   let position: 'top' | 'bottom' | undefined = undefined;
//   let size: 'small' | 'medium' | undefined = undefined;

//   // First two documents are featured (left column)
//   if (index < 2) {
//     featured = true;
//     position = index === 0 ? 'top' : 'bottom';
//   } else {
//     // Right column sizes
//     if (index === 2) size = 'medium';
//     else if (index === 3 || index === 4) size = 'small';
//     else if (index === 5) size = 'medium';
//   }

//   // Generate title: prefer 'publication', fallback to file description, fallback generic
//   let title = doc.publication?.trim();
//   if (!title && doc.uploaded_file_desc) {
//     title = doc.uploaded_file_desc.split(' ').slice(0, 6).join(' ') + '...';
//   }
//   if (!title) title = `News Article ${index + 1}`;

//   // Generate excerpt: use uploaded_file_desc or generic text
//   let excerpt = doc.uploaded_file_desc?.trim();
//   if (!excerpt) {
//     excerpt = 'Stay updated with the latest news and announcements from TIL Limited.';
//   }
//   // Limit to 120 characters
//   if (excerpt.length > 120) excerpt = excerpt.substring(0, 120) + '...';

//   // Image: prefer url, fallback to placeholder
//   const image = doc.url?.trim() || `/news-placeholder-${(index % 3) + 1}.jpg`;

//   // Date: use uploaded_on or today's date
//   const date = doc.uploaded_on
//     ? new Date(doc.uploaded_on).toISOString().split('T')[0]
//     : new Date().toISOString().split('T')[0];

//   // Read time: simple estimate based on excerpt length
//   const readTime = `${Math.max(2, Math.ceil(excerpt.length / 200))} min read`;

//   // Category: use file_type or default
//   const category = doc.file_type?.trim() || 'News';

//   return {
//     id: doc.doc_id,
//     title,
//     excerpt,
//     image,
//     date,
//     readTime,
//     category,
//     featured,
//     position,
//     size
//   };
// }


// function getSampleNews(): NewsArticle[] {
//   console.log('🔄 Using sample news data as fallback');
//   return [
//     {
//       id: 1,
//       title: 'Sample Business News',
//       excerpt:
//         'This is sample data showing that your news section is working. Real data will appear when you have documents in your database.',
//       image: '/news-placeholder-1.jpg',
//       date: new Date().toISOString().split('T')[0],
//       readTime: '2 min read',
//       category: 'Business',
//       featured: true,
//       position: 'top',
//     },
//     {
//       id: 2,
//       title: 'Sample Technology Update',
//       excerpt:
//         'Your database connection is working! Add real documents to see actual news articles here.',
//       image: '/news-placeholder-2.jpg',
//       date: new Date().toISOString().split('T')[0],
//       readTime: '3 min read',
//       category: 'Technology',
//       featured: true,
//       position: 'bottom',
//     },
//     {
//       id: 3,
//       title: 'Sample Industry Report',
//       excerpt:
//         'This demonstrates the news layout. Your dynamic news section is ready!',
//       image: '/news-placeholder-3.jpg',
//       date: new Date().toISOString().split('T')[0],
//       readTime: '4 min read',
//       category: 'Industry',
//       featured: false,
//       size: 'medium',
//     },
//   ];
// }
