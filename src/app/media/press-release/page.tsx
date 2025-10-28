import { prisma } from '../../../lib/prisma';
import { PressReleaseClient } from './PressReleaseClient';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Define type based on your Prisma schema
type DocumentDetail = {
  doc_id: number;
  file_type: string | null;
  table_name: string | null;
  ref_id: number | null;
  uploaded_file_desc: string | null;
  random_file_name: string | null;
  url: string | null;
  publication: string | null;
  user_file_name: string | null;
  precedence: number | null;
  is_disabled: boolean | null;
  uploaded_by_user: number | null;
  uploaded_on: Date | null;
  modified_on: Date | null;
};

async function getPressReleaseDocuments() {
  try {
    const documents = await prisma.document_details.findMany({
      where: {
        ref_id: 44,
        is_disabled: false
      },
      orderBy: [
        { precedence: 'asc' }
      ]
    });

    return documents;
  } catch (error) {
    console.error('Error fetching press release documents:', error);
    return [];
  }
}

export default async function PressReleasePage() {
  const documents = await getPressReleaseDocuments();

  return <PressReleaseClient documents={documents} />;
}

export const dynamic = 'force-dynamic';