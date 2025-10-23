// app/products/page.tsx
import React from 'react';
import { prisma } from '../../lib/prisma';
import ProductsClient from './ProductsClient';

interface Product {
  product_master_id: number;
  name: string | null;              // <- made nullable
  slug: string | null;
  banner_image: string | null;
  catagory_image: string | null;
  parent_id: string | null;
  short_description: string | null;
  about: string | null;
  general_description: string | null;
  content: string | null;
  left_image: string | null;
}

// Server component that fetches data
async function getProducts(): Promise<{
  categories: Product[];
  allProducts: Product[];
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
      categories: categories.map(cat => ({
        ...cat,
        banner_image: cat.banner_image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${cat.banner_image}` : null,
        catagory_image: cat.catagory_image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${cat.catagory_image}` : null
      })),
      allProducts: allProducts.map(product => ({
        ...product,
        banner_image: product.banner_image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${product.banner_image}` : null,
        catagory_image: product.catagory_image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${product.catagory_image}` : null,
        left_image: product.left_image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${product.left_image}` : null
      }))
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { categories: [], allProducts: [] };
  }
}

export default async function ProductsPage() {
  const { categories, allProducts } = await getProducts();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // TIL brand colors
  const TIL_PRIMARY = '#F1B434';

  // Map categories to the format expected by the UI
  const primaryCategories = categories.map(category => ({
    id: category.slug || category.product_master_id.toString(),
    name: category.name || 'Unnamed Category',
    description: category.short_description || 'No description available',
    color: TIL_PRIMARY,
    bgColor: `${TIL_PRIMARY}20`
  }));

  // Group products by category
  const categoryProducts = categories.reduce((acc, category) => {
    const categoryId = category.slug || category.product_master_id.toString();
    acc[categoryId] = allProducts.filter(
      product => product.parent_id === category.product_master_id.toString()
    );
    return acc;
  }, {} as Record<string, Product[]>);

  const quickLinks = [
    { name: 'Product Brochures', url: '#brochures' },
    { name: 'Product Comparisons', url: '#compare' },
    { name: 'Maintenance Guides', url: '#maintenance' },
    { name: 'Safety Standards', url: '#safety' }
  ];

  return (
    <div className="bg-white min-h-screen font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-black/80 h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/productspage_bg.jpg`}
          alt="TIL Products"
          className="w-full h-full object-cover"
        />

        {/* Left-to-right overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-20" />

        <div className="absolute inset-0 z-30 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                Material Handling <span className="text-[#F1B434]">Solutions</span>
              </h1>

              <div className="w-24 h-1.5 bg-[#F1B434] rounded-full mb-4" />

              <p className="text-lg text-gray-200 max-w-xl leading-relaxed">
                Complete Range of Cranes. ReachStackers. Forklifts…
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16 -mt-6 relative z-10">
        <ProductsClient 
          categories={primaryCategories}
          categoryProducts={categoryProducts}
          allProducts={allProducts}
          quickLinks={quickLinks}
          basePath={basePath}
        />
      </main>
    </div>
  );
}