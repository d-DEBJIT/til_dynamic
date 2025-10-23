'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Zap, Star, Settings, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import BrochureDownloadModal from '../../components/BrochureDownload';

interface FuelCategory {
  id: number;
  name: string;
  slug: string;
  banner_image: string | null;
  catagory_image: string | null;
  short_description: string | null;
  about: string | null;
}

interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  bgColor: string;
}

interface ProductsClientProps {
  categories: Category[];
  categoryProducts: Record<string, FuelCategory[]>;
  allProducts: FuelCategory[];
  quickLinks: { name: string; url: string }[];
  basePath: string;
}

// Icon mapping (same design)
const getCategoryIcon = (categoryName: string) => {
  const icons = {
    'Petrol Range': <Package className="w-4 h-4" />,
    'Diesel Range': <Zap className="w-4 h-4" />,
    'Biofuel Range': <Star className="w-4 h-4" />,
    'Electric Range': <Settings className="w-4 h-4" />,
  };

  return icons[categoryName as keyof typeof icons] || <Package className="w-4 h-4" />;
};

export default function ProductsClient({
  categories,
  categoryProducts,
  allProducts,
  quickLinks,
  basePath,
}: ProductsClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextSlide = () => {
    if (!activeCategory) return;
    const products = categoryProducts[activeCategory] || [];
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const handlePrevSlide = () => {
    if (!activeCategory) return;
    const products = categoryProducts[activeCategory] || [];
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleCategoryClick = (categoryId: string) => {
    setCurrentSlide(0);
    setActiveCategory(categoryId);
  };

  return (
    <>
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <motion.section
          className="lg:w-2/3 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { clipPath: 'inset(0 100% 0 0)' },
            visible: {
              clipPath: 'inset(0 0% 0 0)',
              transition: { duration: 1, ease: 'easeInOut' },
            },
          }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Explore Our Comprehensive Fuel Range
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="h-1.5 bg-[#F1B434] rounded-full mb-6"
          />
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our advanced range of fuel products designed for efficiency, reliability, and
            sustainability across diverse industrial applications.
          </p>
        </motion.section>

        {/* Quick Links Section (hidden by default for your backup design consistency) */}
        <motion.div
          className="lg:w-1/3 ml-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
      </div>

      {/* Category Navigation */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`relative p-6 rounded-xl cursor-pointer transition-all ${
                activeCategory === category.id
                  ? `bg-[${category.color}] text-white`
                  : 'bg-white hover:bg-gray-50 border border-gray-200'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`p-2 rounded-lg ${
                    activeCategory === category.id
                      ? 'bg-white/20'
                      : `bg-[${category.bgColor}]`
                  }`}
                >
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="text-lg font-bold">{category.name}</h3>
              </div>
              <p
                className={`text-sm ${
                  activeCategory === category.id ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Carousel */}
      <AnimatePresence>
        {activeCategory &&
          categoryProducts[activeCategory] &&
          categoryProducts[activeCategory].length > 0 && (
            <motion.div
              key={`gradient-${activeCategory}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: {
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="relative mb-16"
            >
              <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {categories.find((c) => c.id === activeCategory)?.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrevSlide}
                        className="p-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm border border-gray-300"
                        disabled={categoryProducts[activeCategory].length <= 1}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNextSlide}
                        className="p-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm border border-gray-300"
                        disabled={categoryProducts[activeCategory].length <= 1}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className="relative h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentSlide}
                          src={
                            categoryProducts[activeCategory][currentSlide].catagory_image ||
                            `${basePath}/default-product.jpg`
                          }
                          alt={
                            categoryProducts[activeCategory][currentSlide].name ??
                            'Fuel image'
                          }
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                    </div>

                    {/* Info */}
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl font-bold text-gray-800 mb-2"
                      >
                        {categoryProducts[activeCategory][currentSlide].name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 mb-6"
                      >
                        {categoryProducts[activeCategory][currentSlide].short_description ||
                          'No description available'}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-3"
                      >
                        <button className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md">
                          <Link
                            href={`/category/${categoryProducts[activeCategory][currentSlide].slug}`}
                          >
                            View Details
                          </Link>
                        </button>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                        >
                          Download Brochure
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>

      {/* Static Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="bg-[#F1B434] rounded-xl shadow-sm p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose Our Fuels?</h2>
              <p className="mb-6">
                Our fuels are engineered for optimal performance, durability, and sustainability,
                supporting a cleaner and more efficient future.
              </p>
              <button className="px-6 py-3 bg-white text-[#F1B434] font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md">
                Contact Our Experts
              </button>
            </div>
            <div>
              <ul className="space-y-4">
                {[
                  'High efficiency output',
                  'Environment-friendly formulations',
                  'Nationwide supply network',
                  'Custom fuel solutions available',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 h-6 w-6 text-white mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Need Help Choosing the Right Fuel?
          </h2>
          <p className="text-gray-600 mb-6">
            Our specialists are ready to help you select the most efficient and sustainable fuel
            solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md">
              Get Fuel Consultation
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              Call Us Now
            </button>
          </div>
        </div>
      </motion.section>

      <BrochureDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
