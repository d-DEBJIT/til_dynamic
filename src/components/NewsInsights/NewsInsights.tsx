import React from "react";
import prisma from "../../lib/prisma";
import NewsInsightsClient from "./NewsInsightsClient";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  position?: "top" | "bottom";
  size?: "small" | "medium";
}

async function getNewsData(): Promise<NewsArticle[]> {
  try {
    const documents = await prisma.document_details.findMany({
      where: {
        ref_id: 1,
        is_disabled: false,
      },
      orderBy: [
        { precedence: "asc" },
        { uploaded_on: "desc" },
      ],
      take: 6,
    });

    const transformedNews = documents.map((doc, index) => {
      // Use publication as title, uploaded_file_desc as excerpt
      const title = doc.publication || "TIL News";
      const excerpt = doc.uploaded_file_desc || "Latest news from TIL Limited";

      // Generate image URL (same logic as BlogSection)
      const image =
        doc.random_file_name && doc.random_file_name.trim() !== ""
          ? `${basePath}/${doc.random_file_name}`
          : `${basePath}/news${(index % 6) + 1}.png`;

      // Calculate read time
      const wordCount = excerpt.split(/\s+/).length || 0;
      const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

      // Determine layout
      let featured = false;
      let position: "top" | "bottom" | undefined;
      let size: "small" | "medium" | undefined;

      if (index < 2) {
        featured = true;
        position = index === 0 ? "top" : "bottom";
      } else {
        featured = false;
        if (index === 2 || index === 5) size = "medium";
        else size = "small";
      }

      return {
        id: doc.doc_id,
        title,
        excerpt,
        image,
        date:
          doc.uploaded_on?.toISOString().split("T")[0] ||
          new Date().toISOString().split("T")[0],
        readTime,
        category: doc.file_type || "News",
        featured,
        position,
        size,
      };
    });

    return transformedNews.length > 0
      ? transformedNews
      : getFallbackNewsData();
  } catch (error) {
    console.error("Error fetching news:", error);
    return getFallbackNewsData();
  }
}

// Fallback data (in case DB fails or is empty)
function getFallbackNewsData(): NewsArticle[] {
  return [
    {
      id: 1,
      title: "NBM&CW",
      excerpt: "Sunil Chaturvedi, The Man Behind Gainwell Group",
      image: `${basePath}/news1.png`,
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Business",
      featured: true,
      position: "top",
    },
    {
      id: 2,
      title: "Indian Defence Review",
      excerpt:
        "The Vanguard of India's Defence: High Technology Ground Support Equipment",
      image: `${basePath}/news2.jpg`,
      date: "2024-01-10",
      readTime: "3 min read",
      category: "Defence",
      featured: true,
      position: "bottom",
    },
    {
      id: 3,
      title: "EPC&I",
      excerpt: "Built to Meet the Toughest Demands",
      image: `${basePath}/news3.png`,
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Financial",
      featured: false,
      size: "medium",
    },
    {
      id: 4,
      title: "Equipment Times",
      excerpt:
        "Handling The Future! MHE's Role in Construction & Infrastructure",
      image: `${basePath}/news4.png`,
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Technology",
      featured: false,
      size: "small",
    },
    {
      id: 5,
      title: "Business World",
      excerpt:
        "TIL Inks Agreement With Snorkel Europe To Become S&S Partner In South Asian...",
      image: `${basePath}/news5.jpg`,
      date: "2023-12-15",
      readTime: "3 min read",
      category: "Education",
      featured: false,
      size: "small",
    },
    {
      id: 6,
      title: "Manufacturing Today",
      excerpt:
        "India Gainwell Group secures majority stake in TIL Ltd, eyes $1 Billion turnover...",
      image: `${basePath}/news6.jpg`,
      date: "2023-12-10",
      readTime: "4 min read",
      category: "Corporate",
      featured: false,
      size: "medium",
    },
  ];
}

export default async function NewsInsights() {
  const news = await getNewsData();
  return <NewsInsightsClient news={news} />;
}
