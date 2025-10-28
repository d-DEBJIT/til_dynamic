import { prisma } from '../../../lib/prisma';
import { DownloadsClient } from './DownloadsClient';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Define type based on your Prisma schema
type ProductMaster = {
  product_master_id: number;
  name: string | null;
  slug: string | null;
  banner_image: string | null;
  catagory_image: string | null;
  parent_id: string | null;
  short_description: string | null;
  about: string | null;
  general_description: string | null;
  content: string | null;
  precedence: string | null;
  is_disabled: number | null;
  left_image: string | null;
  route_parent_id: number | null;
};

// Server component that fetches data
async function getProducts(): Promise<{
  categories: ProductMaster[];
  allProducts: ProductMaster[];
}> {
  try {
    // Fetch main categories (parent_id = '2' for Material Handling Solutions)
    const categories = await prisma.product_master.findMany({
      where: {
        parent_id: '2',
        is_disabled: 0
      },
      orderBy: {
        precedence: 'asc'
      }
    });

    // Fetch all products under these categories
    const allProducts = await prisma.product_master.findMany({
      where: {
        parent_id: {
          in: categories.map(cat => cat.product_master_id.toString())
        },
        is_disabled: 0
      },
      orderBy: {
        precedence: 'asc'
      }
    });

    return {
      categories,
      allProducts
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      categories: [],
      allProducts: []
    };
  }
}

export default async function DownloadsPage() {
  const { categories, allProducts } = await getProducts();

  return <DownloadsClient categories={categories} allProducts={allProducts} />;
}

export const dynamic = 'force-dynamic';