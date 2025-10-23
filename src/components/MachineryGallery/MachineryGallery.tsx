// MachineryGallery.tsx (Server Component)
import React from "react";
import prisma from "../../lib/prisma";
import MachineryGalleryClient from "./MachineryGalleryClient";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export interface Machine {
  id: string;
  title: string;
  img: string;
  specs: string[];
}

async function getMachineryData(): Promise<Machine[]> {
  try {
    console.log("🔍 Fetching machinery data from product_master table...");
    
    // First, let's see ALL products to understand the data structure
    const allProducts = await prisma.product_master.findMany({
      where: {
        is_disabled: 0,
      },
      select: {
        product_master_id: true,
        name: true,
        parent_id: true,
        precedence: true,
        catagory_image: true,
        banner_image: true,
        left_image: true,
        short_description: true
      }
    });

    console.log("📊 ALL products in database:", allProducts);
    console.log("Parent IDs found:", [...new Set(allProducts.map(p => p.parent_id))]);

    // Try different filtering approaches
    let products;
    
    // Approach 1: Get products that are actual machinery (not top-level categories)
    products = await prisma.product_master.findMany({
      where: {
        is_disabled: 0,
        AND: [
          { parent_id: { not: "0" } },
          { parent_id: { not: "1" } },
          { name: { not: null } }
        ]
      },
      orderBy: [
        { precedence: "asc" },
        { product_master_id: "asc" },
      ],
      take: 9,
    });

    console.log(`📋 Approach 1 - Products with parent_id not 0 or 1:`, products.length);

    // If still no products, try Approach 2: Get any products that are not the main categories
    if (products.length === 0) {
      console.log("🔄 Trying Approach 2 - Any products except 'Products' category");
      products = await prisma.product_master.findMany({
        where: {
          is_disabled: 0,
          name: {
            not: "Products"
          }
        },
        orderBy: [
          { precedence: "asc" },
          { product_master_id: "asc" },
        ],
        take: 9,
      });
      console.log(`📋 Approach 2 results:`, products.length);
    }

    // If still no products, try Approach 3: Get ALL enabled products
    if (products.length === 0) {
      console.log("🔄 Trying Approach 3 - ALL enabled products");
      products = await prisma.product_master.findMany({
        where: {
          is_disabled: 0,
        },
        orderBy: [
          { precedence: "asc" },
          { product_master_id: "asc" },
        ],
        take: 9,
      });
      console.log(`📋 Approach 3 results:`, products.length);
    }

    console.log(`📊 Final product count: ${products.length}`);
    
    if (products.length === 0) {
      console.log("❌ No products found after all approaches");
      return [];
    }

    const transformedMachines = products.map((product, index) => {
      const title = product.name || `Product ${product.product_master_id}`;
      
      const specs = product.short_description 
        ? [product.short_description.substring(0, 100) + "..."]
        : ["High performance", "Reliable operation", "Advanced features"];

      const img = getProductImage(product, index);

      return {
        id: `product-${product.product_master_id}`,
        title,
        img,
        specs: specs.length > 0 ? specs : ["Versatile performance", "Robust construction", "Easy maintenance"],
      };
    });

    console.log("✅ Successfully transformed products:", transformedMachines);
    return transformedMachines;

  } catch (error) {
    console.error("❌ Error fetching machinery data:", error);
    return [];
  }
}

// Helper function to get product image
function getProductImage(product: any, index: number): string {
  if (product.catagory_image && product.catagory_image.trim() !== "") {
    return `${basePath}/${product.catagory_image}`;
  }
  if (product.banner_image && product.banner_image.trim() !== "") {
    return `${basePath}/${product.banner_image}`;
  }
  if (product.left_image && product.left_image.trim() !== "") {
    return `${basePath}/${product.left_image}`;
  }
  
  return `${basePath}/default-machine.png`;
}

export default async function MachineryGallery() {
  const machines = await getMachineryData();
  
  // Add debug info
  console.log("🎯 Final machines data sent to client:", machines);
  
  return <MachineryGalleryClient products={machines} />;
}