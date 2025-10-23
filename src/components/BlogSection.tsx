import prisma from "../lib/prisma";
import BlogSectionClient from "./BlogSectionClient";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';


async function getFeaturedPosts() {
  try {
    const posts = await prisma.blogs.findMany({
      where: {
        is_active: 'Y',
      },
      orderBy: {
        publish_date: 'desc',
      },
      take: 3,
    });

    const transformedPosts = posts.map((post) => {
      // Static author details
      const defaultAuthor = {
        role: "Digital Marketing Executive",
        bio: "With 15 years experience in heavy machinery development and innovation",
        avatar: `${basePath}/rima_chaudhuri.jpg`,
      };

      // Get author name from DB
      const authorName = post.publisher || "TIL Marketing Team";

      // Calculate read time
      const wordCount = post.description?.split(/\s+/).length || 0;
      const readTime = Math.ceil(wordCount / 200);

      return {
        id: post.id,
        title: post.title || "Untitled",
        slug:
          post.slug ||
          post.title?.toLowerCase().replace(/\s+/g, "-") ||
          "",
        excerpt:
          post.short_description ||
          post.description?.substring(0, 150) + "..." ||
          "No description available",
        author: {
          name: authorName,
          role: defaultAuthor.role,
          bio: defaultAuthor.bio,
          avatar: defaultAuthor.avatar,
        },
        column: "Industry Insights",
        date:
          post.publish_date?.toISOString().split("T")[0] ||
          new Date().toISOString().split("T")[0],
        readTime: `${readTime > 0 ? readTime : 5} min`,
        likes: "0",
        comments: "0",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${post.banner_image}`,
        thumbnail: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${post.banner_image}`,
        featuredImage: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${post.banner_image}`,
      };
    });

    return transformedPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogSection() {
  const featuredPosts = await getFeaturedPosts();
  return <BlogSectionClient featuredPosts={featuredPosts} />;
}
