import { prisma } from '../../../lib/prisma';
import { CareersClient } from './CareersClient';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

async function getCareersData() {
  try {
    const functions = await prisma.functions_career.findMany({
      where: {
        is_disabled: 0
      },
      orderBy: [
        { precedence: 'asc' }
      ]
    });

    const roles = await prisma.role_master.findMany({
      where: {
        is_active: 'Y'
      }
    });

    return {
      functions,
      roles
    };
  } catch (error) {
    console.error('Error fetching careers data:', error);
    return {
      functions: [],
      roles: []
    };
  }
}

export default async function CareersPage() {
  const { functions, roles } = await getCareersData();

  return <CareersClient functions={functions} roles={roles} />;
}

export const dynamic = 'force-dynamic';