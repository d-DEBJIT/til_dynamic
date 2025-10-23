// app/media/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import prisma from "../../../../lib/prisma";
import BlogViewPage from './BlogViewPage';

async function getBlogPost(slug: string) {
  try {
    const post = await prisma.blogs.findFirst({
      where: {
        slug: slug,
        is_active: "Y"
      }
    });

    if (!post) {
      return null;
    }

    // Transform the database data to match your component structure
    const transformedPost = {
      id: post.id,
      title: post.title || "",
      slug: post.slug || "",
      excerpt: post.short_description || "",
      content: post.description || "",
      author: {
        name: post.publisher || "Admin",
        role: "Publisher",
        bio: "",
        avatar: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/rima_chaudhuri.jpg`,
      },
      column: "General",
      date: post.publish_date ? post.publish_date.toISOString() : "",
      readTime: "5 min",
      likes: "0",
      comments: "0",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${post.banner_image}`,
      thumbnail: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${post.banner_image}`,
      featuredImage: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${post.banner_image}`,
      tags: [],
    };

    return transformedPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

async function getRelatedPosts(currentPostId: number) {
  try {
    const posts = await prisma.blogs.findMany({
      where: {
        id: { not: currentPostId },
        is_active: "Y"
      },
      orderBy: {
        publish_date: "desc"
      },
      take: 3
    });

    return posts.map(post => ({
      id: post.id,
      title: post.title || "",
      slug: post.slug || "",
      excerpt: post.short_description || "",
      content: post.description || "",
      author: {
        name: post.publisher || "Admin",
        role: "Publisher",
        bio: "",
        avatar: "/no_image.jpg",
      },
      column: "General",
      date: post.publish_date ? post.publish_date.toISOString() : "",
      readTime: "5 min",
      likes: "0",
      comments: "0",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${post.banner_image}`,
      thumbnail: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${post.banner_image}`,
      featuredImage: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${post.banner_image}`,
      tags: [],
    }));
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page(props: PageProps) {
  // Await the params promise
  const params = await props.params;
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.id);

  return <BlogViewPage post={post} relatedPosts={relatedPosts} />;
}

// Generate static params for better performance
export async function generateStaticParams() {
  try {
    const posts = await prisma.blogs.findMany({
      where: {
        is_active: "Y"
      },
      select: {
        slug: true
      }
    });

    return posts
      .filter(post => post.slug)
      .map(post => ({
        slug: post.slug!,
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export const dynamicParams = true;