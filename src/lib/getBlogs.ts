// // lib/getBlogs.ts
// import prisma from "./prisma";
// import type { blogs } from "@prisma/client";

// export async function getBlogs() {
//   const blogsData: blogs[] = await prisma.blogs.findMany({
//     where: { is_active: "Y" }, // optional: filter only active blogs
//     orderBy: { publish_date: "desc" },
//   });

//   return blogsData.map((blog) => ({
//     id: blog.id,
//     title: blog.title || "",
//     slug: blog.slug || "", // ✅ include slug from DB
//     excerpt: blog.short_description || "",
//     author: {
//       name: blog.publisher || "Admin",
//       role: "Publisher",
//       bio: "",
//       avatar: "/no_image.jpg",
//     },
//     column: "General",
//     date: blog.publish_date ? blog.publish_date.toISOString() : "",
//     readTime: "5 min",
//     likes: "0",
//     comments: "0",
//     image: blog.banner_image || "/no_image.jpg",
//     thumbnail: blog.banner_image || "/no_image.jpg",
//     featuredImage: blog.banner_image || "/no_image.jpg",
//     tags: [],
//   }));
// }
