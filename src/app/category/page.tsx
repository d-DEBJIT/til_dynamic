// app/products/page.tsx
import React from "react";
import { prisma } from "../../lib/prisma";
import ProductsClient from "./ProductsClient";

// Type aligned with your Prisma model
interface FuelCategory {
  id: number;
  name: string;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  banner_image: string | null;
  banner_alt: string | null;
  catagory_image: string | null;
  catagory_img_alt: string | null;
  parent_id: number;
  short_description: string | null;
  about: string | null;
  precedence: number;
  is_disabled: boolean;
}

// Fetch categories and products from Prisma
async function getProducts(): Promise<{
  categories: FuelCategory[];
  allProducts: FuelCategory[];
}> {
  try {
    // Fetch all main categories (parent_id = 2 → “Material Handling Solutions”)
    const categories = await prisma.fuel_catagory.findMany({
      where: {
        parent_id: 2,
        is_disabled: false,
      },
      orderBy: {
        precedence: "asc",
      },
    });

    // Fetch all products under these categories
    const allProducts = await prisma.fuel_catagory.findMany({
      where: {
        parent_id: {
          in: categories.map((cat) => cat.id),
        },
        is_disabled: false,
      },
      orderBy: {
        precedence: "asc",
      },
    });

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    // Helper: prepend base path for image URLs
    const formatImagePaths = (item: FuelCategory): FuelCategory => ({
      ...item,
      banner_image: item.banner_image
        ? `${basePath}/${item.banner_image}`
        : null,
      catagory_image: item.catagory_image
        ? `${basePath}/${item.catagory_image}`
        : null,
    });

    return {
      categories: categories.map(formatImagePaths),
      allProducts: allProducts.map(formatImagePaths),
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { categories: [], allProducts: [] };
  }
}

export default async function ProductsPage() {
  const { categories, allProducts } = await getProducts();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const TIL_PRIMARY = "#F1B434";

  // Format categories for UI
  const primaryCategories = categories.map((category) => ({
    id: category.slug || category.id.toString(),
    name: category.name || "Unnamed Category",
    description: category.short_description || "No description available",
    color: TIL_PRIMARY,
    bgColor: `${TIL_PRIMARY}20`,
  }));

  // Group products by category
  const categoryProducts = categories.reduce(
    (acc, category) => {
      const categoryId = category.slug || category.id.toString();

      acc[categoryId] = allProducts.filter(
        (product) => product.parent_id === category.id
      );

      return acc;
    },
    {} as Record<string, FuelCategory[]>
  );

  const quickLinks = [
    { name: "Product Brochures", url: "#brochures" },
    { name: "Product Comparisons", url: "#compare" },
    { name: "Maintenance Guides", url: "#maintenance" },
    { name: "Safety Standards", url: "#safety" },
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

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-20" />

        <div className="absolute inset-0 z-30 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                Material Handling{" "}
                <span className="text-[#F1B434]">Solutions</span>
              </h1>

              <div className="w-24 h-1.5 bg-[#F1B434] rounded-full mb-4" />

              <p className="text-lg text-gray-200 max-w-xl leading-relaxed">
                Complete Range of Cranes. ReachStackers. Forklifts…
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
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
