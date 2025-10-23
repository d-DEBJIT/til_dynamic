import React from "react";
import { prisma } from "../../../lib/prisma";
import BaumaClient from "./BaumaClient";

interface BaumaArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  readMoreLink: string;
  precedence: number;
}

async function getBaumaArticles(): Promise<BaumaArticle[]> {
  try {
    const documents = await prisma.document_details.findMany({
      where: {
        ref_id: 4,
        is_disabled: false,
      },
      orderBy: {
        precedence: "asc",
      },
    });

    return documents.map((doc) => ({
      id: doc.doc_id,
      title: doc.publication || `Bauma Article ${doc.doc_id}`,
      description: doc.uploaded_file_desc || "No description available",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${doc.random_file_name || "default.jpg"}`,
      readMoreLink: doc.url || "#",
      precedence: doc.precedence || 0,
    }));
  } catch (error) {
    console.error("Error fetching Bauma articles:", error);
    return [];
  }
}

export default async function Page() {
  const articles = await getBaumaArticles(); // SSR fetch
  return <BaumaClient initialArticles={articles} />; // Pass to client component
}
