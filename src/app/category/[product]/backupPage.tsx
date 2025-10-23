// app/category/[product]/page.tsx
import React from 'react';
import { prisma } from '../../../lib/prisma';
import ProductClient from './ProductClient';

interface Product {
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
  left_image: string | null;
}

interface SubProduct {
  product_master_id: number;
  name: string | null;
  slug: string | null;
  catagory_image: string | null;
  short_description: string | null;
}

async function getProductData(slug: string): Promise<{
  product: Product | null;
  subProducts: SubProduct[];
}> {
  try {
    // Fetch the main product by slug
    const product = await prisma.product_master.findFirst({
      where: {
        slug: slug,
        is_disabled: 0
      }
    });

    if (!product) {
      return { product: null, subProducts: [] };
    }

    // Fetch sub-products (products where parent_id = current product's ID)
    const subProducts = await prisma.product_master.findMany({
      where: {
        parent_id: product.product_master_id.toString(),
        is_disabled: 0
      },
      select: {
        product_master_id: true,
        name: true,
        slug: true,
        catagory_image: true,
        short_description: true
      },
      orderBy: {
        precedence: 'asc'
      }
    });

    return {
      product: {
        ...product,
        banner_image: product.banner_image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${product.banner_image}` : null,
        catagory_image: product.catagory_image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${product.catagory_image}` : null,
        left_image: product.left_image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${product.left_image}` : null
      },
      subProducts: subProducts.map(sp => ({
        ...sp,
        catagory_image: sp.catagory_image ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${sp.catagory_image}` : null
      }))
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { product: null, subProducts: [] };
  }
}

// Generate static params for all product slugs
export async function generateStaticParams() {
  try {
    const products = await prisma.product_master.findMany({
      where: {
        is_disabled: 0,
        slug: {
          not: null
        }
      },
      select: {
        slug: true
      }
    });

    return products
      .filter(product => product.slug)
      .map((product) => ({
        product: product.slug!,
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function ProductPage({ 
  params 
}: { 
  params: { product: string } 
}) {
  const { product, subProducts } = await getProductData(params.product);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Transform data for the client component
  const productData = {
  id: product.slug || product.product_master_id.toString(),
  name: product.name || 'Unnamed Product',
  description: product.short_description || 'No description available',
  introDescription: product.about || product.general_description || '',
  image: product.catagory_image || product.banner_image || `${basePath}/default-product.jpg`,
  left_image: product.left_image || product.banner_image || `${basePath}/default-product.jpg`,
  banner_image: product.banner_image || product.banner_image || `${basePath}/default-product.jpg`,
  features: extractFeatures(product.content || product.general_description),
  specifications: extractSpecifications(product.content || product.general_description)
};


  const transformedSubProducts = subProducts.map(sp => ({
    id: sp.slug || sp.product_master_id.toString(),
    name: sp.name || 'Unnamed Sub-Product',
    image: sp.catagory_image || `${basePath}/default-product.jpg`,
    description: sp.short_description || ''
  }));

  return (
    <ProductClient 
      product={productData}
      subProducts={transformedSubProducts}
      basePath={basePath}
      params={params}
    />
  );
}

// Helper functions to extract data from your content fields
function extractFeatures(content: string | null): string[] {
  if (!content) return ['Advanced engineering', 'Reliable performance', 'Easy maintenance'];
  
  // Simple extraction logic - you can customize this based on your content structure
  const features: string[] = [];
  
  // Example: Look for bullet points or specific patterns in your content
  if (content.includes('telescopic boom') || content.includes('Telescopic')) {
    features.push('Telescopic Boom');
  }
  if (content.includes('hydraulic') || content.includes('Hydraulic')) {
    features.push('Hydraulic System');
  }
  if (content.includes('safety') || content.includes('Safety')) {
    features.push('Advanced Safety Features');
  }
  
  return features.length > 0 ? features : ['Advanced engineering', 'Reliable performance', 'Easy maintenance'];
}

function extractSpecifications(content: string | null): { name: string; value: string }[] {
  if (!content) return [
    { name: 'Max Capacity', value: 'Customizable' },
    { name: 'Boom Length', value: 'Varies by model' },
    { name: 'Engine Power', value: 'High performance' }
  ];
  
  const specifications: { name: string; value: string }[] = [];
  
  // Extract capacity information
  const capacityMatch = content.match(/(\d+\s*tons?|\d+\s*tonnes?)/i);
  if (capacityMatch) {
    specifications.push({ name: 'Max Capacity', value: capacityMatch[0] });
  }
  
  // Extract other specifications as needed
  if (content.includes('rough terrain') || content.includes('Rough Terrain')) {
    specifications.push({ name: 'Terrain Type', value: 'Rough Terrain' });
  }
  
  return specifications.length > 0 ? specifications : [
    { name: 'Max Capacity', value: 'Customizable' },
    { name: 'Application', value: 'Various industrial uses' },
    { name: 'Reliability', value: 'Proven performance' }
  ];
}