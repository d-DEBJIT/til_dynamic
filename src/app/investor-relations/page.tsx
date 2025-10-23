// app/investor-relations/page.tsx
import React from 'react';
import { prisma } from '../../lib/prisma';
import InvestorRelationsClient from './investor_relations_client';

// Types
export type ContentPage = {
  id: string;
  title: string;
  description: string | null; // HTML content from description column
};

export type InvestorRelationDetail = {
  relations_dtl_id: number;
  relations_master_id: number | null;
  title: string | null;
  page_url: string | null;
  description: string | null; // This contains the HTML content
  is_file_uploaded: any;
  fileupload_count: number | null;
  is_disabled: boolean | null;
};

export type InvestorRelationMaster = {
  relations_master_id: number;
  investor_relation_head: string | null;
  is_disabled: number | null;
};

export type SidebarData = {
  id: string;
  title: string;
  subItems: InvestorRelationDetail[];
  content: string;
};

// Server-side data fetching
async function getInvestorRelationsData(): Promise<SidebarData[]> {
  try {
    // First, get all master records
    const masters = await prisma.investor_relations_master.findMany({
      where: {
        is_disabled: 0
      }
    });

    // Then, get all details for these masters
    const details = await prisma.investor_relations_details.findMany({
      where: {
        is_disabled: false,
        relations_master_id: {
          in: masters.map(master => master.relations_master_id)
        }
      }
    });

    // Group details by master_id
    const detailsByMasterId = details.reduce((acc, detail) => {
      const masterId = detail.relations_master_id;
      if (masterId !== null) {
        if (!acc[masterId]) {
          acc[masterId] = [];
        }
        acc[masterId].push(detail);
      }
      return acc;
    }, {} as Record<number, InvestorRelationDetail[]>);

    // Transform data for sidebar
    const sidebarData: SidebarData[] = masters.map(master => ({
      id: master.relations_master_id.toString(),
      title: master.investor_relation_head || 'Untitled',
      subItems: detailsByMasterId[master.relations_master_id] || [],
      content: `Explore our ${master.investor_relation_head?.toLowerCase() || 'investor'} information and resources.`
    }));

    return sidebarData;
  } catch (error) {
    console.error('Error fetching investor relations:', error);
    return [];
  }
}

// Transform to content pages using description column
function transformToContentPages(sidebarData: SidebarData[]): Record<string, ContentPage> {
  const contentPages: Record<string, ContentPage> = {};

  sidebarData.forEach(master => {
    master.subItems.forEach(detail => {
      if (detail.title) {
        const pageId = detail.title.toLowerCase().replace(/\s+/g, '-');
        
        contentPages[pageId] = {
          id: detail.relations_dtl_id.toString(),
          title: detail.title,
          description: detail.description // This is the HTML content
        };
      }
    });
  });

  return contentPages;
}

export default async function InvestorRelationsPage() {
  // Fetch data directly from database
  const sidebarData = await getInvestorRelationsData();
  const contentPages = transformToContentPages(sidebarData);

  return (
    <InvestorRelationsClient 
      sidebarData={sidebarData} 
      contentPages={contentPages} 
    />
  );
}