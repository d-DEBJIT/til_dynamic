// app/media/blog/page.tsx
import React from "react";
import prisma from "../../../lib/prisma";
import ClientPage from "./ClientPage"; // Your client component for rendering blogs

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    bio?: string;
    avatar?: string;
  };
  column?: string;
  date: string;
  readTime: string;
  likes: string;
  comments: string;
  image: string;
  thumbnail: string;
  featuredImage: string;
  tags?: string[];
}

async function getBlogsData(): Promise<BlogPost[]> {
  try {
    const blogsData = await prisma.blogs.findMany({
      where: { is_active: "Y" },
      orderBy: { publish_date: "desc" },
    });

    return blogsData.map((blog) => ({
      id: blog.id,
      title: blog.title || "",
      slug: blog.slug || "",
      excerpt: blog.short_description || "",
      author: {
        name: blog.publisher || "Admin",
        role: "Publisher",
        bio: "",
        avatar: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/rima_chaudhuri.jpg`,
      },
      column: "General",
      date: blog.publish_date ? blog.publish_date.toISOString() : "",
      readTime: "5 min",
      likes: "0",
      comments: "0",
      // image: blog.banner_image || "/no_image.jpg",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${blog.banner_image}`,
      // thumbnail: blog.banner_image || "/no_image.jpg",
      thumbnail: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${blog.banner_image}`,
      // featuredImage: blog.banner_image || "/no_image.jpg",
      featuredImage: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${blog.banner_image}`,
      tags: [],
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function Page() {
  const blogs = await getBlogsData(); // SSR fetch
  return <ClientPage initialPosts={blogs} />;
}
