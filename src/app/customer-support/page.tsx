// app/support/page.tsx
import React from 'react';
import { prisma } from '../../lib/prisma';
import SupportClient from './SupportClient';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface SupportData {
  faqs: FAQ[];
}

async function getSupportData(): Promise<SupportData> {
  try {
    // Fetch FAQs from your database
    const faqData = await prisma.faq_details.findMany({
      where: {
        is_disabled: false
      },
      orderBy: {
        precedence: 'asc'
      },
      select: {
        faq_del_id: true,
        faq_question: true,
        faq_answer: true,
        product_id: true,
        model_id: true,
        is_product: true
      }
    });

    // Transform FAQ data to match your frontend structure
    const faqs: FAQ[] = faqData.map(faq => ({
      id: faq.faq_del_id,
      question: faq.faq_question || 'No question available',
      answer: faq.faq_answer || 'No answer available',
      category: mapToCategory(faq.is_product, faq.product_id, faq.model_id)
    }));

    return {
      faqs
    };
  } catch (error) {
    console.error('Error fetching support data:', error);
    return {
      faqs: []
    };
  }
}

// Helper function to map database fields to frontend categories
function mapToCategory(isProduct: any, productId: number | null, modelId: number | null): string {
  // You can customize this mapping based on your business logic
  if (isProduct) {
    return 'products';
  }
  
  if (productId) {
    return 'products';
  }
  
  if (modelId) {
    return 'technical';
  }
  
  // Default categories based on your existing frontend
  const categories = ['products', 'services', 'warranty', 'technical'];
  return categories[Math.floor(Math.random() * categories.length)];
}

export default async function SupportPage() {
  const supportData = await getSupportData();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <SupportClient 
      faqs={supportData.faqs}
      basePath={basePath}
    />
  );
}