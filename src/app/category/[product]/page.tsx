'use client';
import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import GetQuoteModal from '../../../components/GetQuote';
import BrochureDownloadModal from '../../../components/BrochureDownload';
import { motion } from 'framer-motion';
const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const allProducts = [
  {
    id: 'truck-cranes',
    category: 'all-products',
    name: 'Truck Cranes',
    description: 'Backed by a pan-India network of offices and over seven decades of domain expertise in material handling and port equipment solutions, TIL sets the standard in quality, performance, durability and value.',
    introTitle: "",
    introDescription: "TIL is engaged in the design, manufacture and marketing of a comprehensive range of material handling, lifting and port equipment solutions. Acknowledged as a market leader in Mobile Cranes and ReachStackers, TIL is a name that is synonymous with reliability, productivity and efficiency. To complement its wide portfolio of products, TIL offers a range of value-added services and integrated product support with a view to enhancing customer profitability.",
    image: `${basePath}/truck-cranes.jpeg`,
    features: ['Telescopic Boom', 'High Lifting Range', 'On-road Mobility'],
    brochure: `${basePath}/brochures/truck-cranes.pdf`,
    specifications: [
      { name: 'Max Capacity', value: '25-100 Tons' },
      { name: 'Boom Length', value: '30-60 Meters' },
      { name: 'Engine Power', value: '300-450 HP' }
    ]
  },
  {
    id: 'pick-n-carry-cranes',
    category: 'all-products',
    name: 'Pick n Carry Cranes',
    description: 'Mobile cranes suitable for fast on-site operations',
    introTitle: "",
    introDescription: "",
    image: `${basePath}/about.jpg`,
    features: ['360° Mobility', 'Operator Cabin Comfort', 'Quick Load Handling'],
    brochure: `${basePath}/brochures/pick-n-carry.pdf`,
    specifications: [
      { name: 'Max Capacity', value: '5-20 Tons' },
      { name: 'Lifting Height', value: '10-20 Meters' },
      { name: 'Engine Power', value: '100-200 HP' }
    ]
  },
  {
    id: 'rough-terrain-cranes',
    category: 'all-products',
    name: 'Rough Terrain Cranes',
    description: 'Designed for challenging job site conditions',
    introTitle: "",
    introDescription: "",
    image: `${basePath}/rough-terrain.png`,
    features: ['All-Terrain Tyres', 'Four-Wheel Steering', 'Hydraulic Outriggers'],
    brochure: `${basePath}/brochures/rough-terrain.pdf`,
    specifications: [
      { name: 'Max Capacity', value: '15-50 Tons' },
      { name: 'Boom Length', value: '25-45 Meters' },
      { name: 'Engine Power', value: '250-350 HP' }
    ]
  },
  {
    id: 'articulating-crane',
    category: 'all-products',
    name: 'TIL N80A',
    description: 'Flexible, jointed cranes ideal for tight spaces',
    introTitle: "",
    introDescription: "",
    image: `${basePath}/articulating.jpg`,
    features: ['Knuckle Boom Design', 'Compact Operation', 'Remote Control'],
    brochure: `${basePath}/brochures/articulating.pdf`,
    specifications: [
      { name: 'Max Capacity', value: '5-15 Tons' },
      { name: 'Reach', value: '15-30 Meters' },
      { name: 'Engine Power', value: '100-200 HP' }
    ]
  },
  {
    id: 'grove-range',
    category: 'new-arrivals',
    name: 'Grove Range',
    description: 'Smart lifting solutions engineered for precision and durability',
    introTitle: "",
    introDescription: "",
    image: `${basePath}/grove-range.png`,
    features: ['Advanced Safety Systems', 'Optimized Weight Distribution', 'Digital Load Monitoring'],
    brochure: `${basePath}/brochures/grove-range.pdf`,
    specifications: [
      { name: 'Max Capacity', value: '30-120 Tons' },
      { name: 'Boom Length', value: '40-80 Meters' },
      { name: 'Engine Power', value: '350-500 HP' }
    ]
  },
  {
    id: 'crawler-cranes',
    category: 'new-arrivals',
    name: 'Crawler Cranes',
    description: 'Robust tracked cranes for heavy-duty lifting',
    introTitle: "",
    introDescription: "",
    image: `${basePath}/crawler-cranes.png`,
    features: ['Track Mobility', 'High Stability', 'Heavy Lifting Capacity'],
    brochure: `${basePath}/brochures/crawler-cranes.pdf`,
    specifications: [
      { name: 'Max Capacity', value: '50-300 Tons' },
      { name: 'Boom Length', value: '60-120 Meters' },
      { name: 'Engine Power', value: '400-600 HP' }
    ]
  },
  {
    id: 'forklift-trucks',
    category: 'best-sellers',
    name: 'Forklift Trucks',
    description: 'Efficient material handling for warehouses and logistics',
    introTitle: "",
    introDescription: "",
    image: `${basePath}/forklift.png`,
    features: ['Precision Steering', 'High Load Capacity', 'Compact Turning Radius'],
    brochure: `${basePath}/brochures/forklift.pdf`,
    specifications: [
      { name: 'Max Capacity', value: '2-10 Tons' },
      { name: 'Lift Height', value: '3-8 Meters' },
      { name: 'Engine Power', value: '50-150 HP' }
    ]
  },
  {
    id: 'reachstackers',
    category: 'best-sellers',
    name: 'Reachstackers',
    description: 'Container handling equipment for ports and yards',
    introTitle: "",
    introDescription: "",
    image: `${basePath}/reachstackers.png`,
    features: ['Extended Reach', 'Twistlock Compatibility', 'High Stack Efficiency'],
    brochure: `${basePath}/brochures/reachstackers.pdf`,
    specifications: [
      { name: 'Max Capacity', value: '30-50 Tons' },
      { name: 'Lift Height', value: '4-6 Containers' },
      { name: 'Engine Power', value: '200-300 HP' }
    ]
  },
  {
    id: 'boom-lifts',
    category: 'services',
    name: 'Boom Lifts',
    description: 'Elevated work platforms for maintenance and construction',
    introTitle: "",
    introDescription: "",
    image: `${basePath}/boomlifts.png`,
    features: ['Articulating Arm', 'Vertical and Horizontal Reach', 'Safe Cage Platform'],
    brochure: `${basePath}/brochures/boomlifts.pdf`,
    specifications: [
      { name: 'Max Height', value: '20-50 Meters' },
      { name: 'Platform Capacity', value: '200-300 kg' },
      { name: 'Engine Power', value: '50-100 HP' }
    ]
  }
];

const subProducts = {
  'rough-terrain-cranes': [
    { id: 'husky-620', name: 'HUSKY 620', image: `${basePath}/husky-620.jpg` },
    { id: 'rt630c', name: 'RT 630C', image: `${basePath}/rt630c.jpg` },
    { id: 'rt740b', name: 'RT 740B', image: `${basePath}/rt740b.jpg` },
    { id: 'rt760', name: 'RT 760', image: `${basePath}/rt760.jpg` },
    { id: 'rt880', name: 'RT 880', image: `${basePath}/rt880.png` }
  ],
  'forklift-trucks': [
    { id: 'hyster-h10-16xd', name: 'Hyster H10-16XD', image: `${basePath}/hyster-h10-16xd.jpg` },
    { id: 'hyster-h25-32xd', name: 'Hyster H25-32XD', image: `${basePath}/hyster-h25-32xd.jpg` },
    { id: 'hyster-h36-48xd', name: 'Hyster H36-48XD', image: `${basePath}/hyster-h36-48xd.jpg` },
    { id: 'hyster-h8-10xt', name: 'Hyster H8.0-10.0XT', image: `${basePath}/hyster-h8-10xt.jpg` },
    { id: 'hyster-h8-11xd', name: 'Hyster H8-11XD EC B3C0', image: `${basePath}/hyster-h8-11xd.png` }
  ],
  'reachstackers': [
    { id: 'rs46-33ch', name: 'RS 46 - 33CH', image: `${basePath}/rs46-33ch.jpg` },
    { id: 'rs45-31cha336-a404', name: 'RS 45 - 31CH A366 / A404', image: `${basePath}/rs45-31cha336-a404.jpg` },
  ],
  'boom-lifts': [
    { id: 'a62jrt', name: 'A62JRT', image: `${basePath}/a62jrt.jpg` }
  ],
  'truck-cranes': [
    { id: 'hydra-830m', name: 'HYDRA 830M', image: `${basePath}/hydra830m.jpg` },
    { id: 'tms-750b-mk-ii', name: 'TMS 750B MK II', image: `${basePath}/tms750b.jpg` },
    { id: 'tms-830', name: 'TMS 830', image: `${basePath}/tms830.jpg` },
    { id: 'tms-845', name: 'TMS 845', image: `${basePath}/tms845.jpg` },
    { id: 'tms-850', name: 'TMS 850', image: `${basePath}/tms850.jpg` },
    { id: 'tms-855', name: 'TMS 855', image: `${basePath}/tms855.jpg` },
    { id: 'tms-860', name: 'TMS 860', image: `${basePath}/tms860.jpg` },
    { id: 'tms-880m', name: 'TMS 880M', image: `${basePath}/tms880m.png` }
  ],
  'crawler-cranes': [
    { id: 'mlc80a-1', name: 'MLC 80A-1', image: `${basePath}/mlc80a-1.jpg` },
    { id: 'mlc90A-1', name: 'MLC 90A-1', image: `${basePath}/mlc90a-1.jpg` },
    { id: 'mlc100-1', name: 'MLC 100-1', image: `${basePath}/mlc100-1.jpg` },
    { id: 'mlc150-1', name: 'MLC 150-1', image: `${basePath}/mlc150a-1.jpg` },
    { id: 'mlc165-1', name: 'MLC 165-1', image: `${basePath}/mlc165-1.jpg` },
    { id: '14000', name: '14000', image: `${basePath}/14000.jpg` },
    { id: 'mlc250', name: 'MLC 250', image: `${basePath}/mlc250.jpg` },
    { id: '999', name: '999', image: `${basePath}/999.jpg` },
    { id: 'mlc300', name: 'MLC 300', image: `${basePath}/mlc300.jpg` },
    { id: '16000', name: '16000', image: `${basePath}/16000.jpg` },
    { id: 'mlc650', name: 'MLC 650', image: `${basePath}/mlc650.jpg` },
    { id: '18000', name: '18000', image: `${basePath}/18000.jpg` },
    { id: '31000', name: '31000', image: `${basePath}/31000.jpg` },

  ],
  'pick-n-carry-cranes': [
    { id: 'pixef-215', name: 'PIXEF 215', image: `${basePath}/pixef215.jpg` },
    { id: 'mobiload-315', name: 'MOBILOAD 315', image: `${basePath}/pixef315.jpg` }
  ],
  'grove-range': [
    { id: 'rt-530e-2', name: 'RT 530E-2', image: `${basePath}/rt530e2.jpg` },
    { id: 'rt-540e', name: 'RT 540E', image: `${basePath}/rt540e.jpg` },
    { id: 'rt-550e', name: 'RT 550E', image: `${basePath}/rt550e.jpg` },
    { id: 'rt765e-2', name: 'RT 765E-2', image: `${basePath}/rt765e-2.jpg` },
    { id: 'rt770e', name: 'RT 770E', image: `${basePath}/rt770e.jpg` },
    { id: 'rt9130e-2', name: 'RT 9130E-2', image: `${basePath}/rt9130e-2.jpg` },
    { id: 'grt9165', name: 'GRT 9165', image: `${basePath}/grt9165.jpg` },
    { id: 'grt655', name: 'GRT 655', image: `${basePath}/grt655.jpg` },
    { id: 'grt655l', name: 'GRT 655L', image: `${basePath}/grt655l.jpg` },
    { id: 'grt880', name: 'GRT 880', image: `${basePath}/grt880.jpg` },
    { id: 'grt8100-1', name: 'GRT 8100-1', image: `${basePath}/grt8100-1.jpg` },
    { id: 'grt8120', name: 'GRT 8120', image: `${basePath}/grt8120.jpg` },
    { id: 'tms500-2', name: 'TMS 500-2', image: `${basePath}/tms500-2.jpg` },
    { id: 'tms800-2', name: 'TMS 800-2', image: `${basePath}/tms800-2.jpg` },
    { id: 'tms875-2', name: 'TMS 875-2', image: `${basePath}/tms875-2.jpg` },
    { id: 'tms9000-2', name: 'TMS 9000-2', image: `${basePath}/tms9000-2.jpg` },
    { id: 'tts9000-2', name: 'TTS 9000-2', image: `${basePath}/tts9000-2.jpg` },
    { id: 'gmk-3050-2', name: 'GMK 3050-2', image: `${basePath}/gmk3050-2.jpg` },
    { id: 'gmk-3060l', name: 'GMK 3060L', image: `${basePath}/gmk3060l.jpg` },
    { id: 'gmk-4070l', name: 'GMK 4070L', image: `${basePath}/gmk4070l.jpg` },
    { id: 'gmk-4080-2', name: 'GMK 4080-2', image: `${basePath}/gmk4080-2.jpg` },
    { id: 'gmk-4080l', name: 'GMK 4080L', image: `${basePath}/gmk4080l.jpg` },
    { id: 'gmk-4090', name: 'GMK 4090', image: `${basePath}/gmk4090.jpg` },
    { id: 'gmk-6400', name: 'GMK 6400', image: `${basePath}/gmk6400.jpg` },
    { id: 'gcd-09', name: 'GCD 09', image: `${basePath}/gcd09.jpg` },
    { id: 'gcd-15', name: 'GCD 15', image: `${basePath}/gcd15.jpg` },
    { id: 'gcd-20', name: 'GCD 20', image: `${basePath}/gcd20.jpg` },
    { id: 'gcd-25', name: 'GCD 25', image: `${basePath}/gcd25.jpg` }
  ]
  // Add other categories with their sub-products similarly
};

// Skeleton Loader Component
function ProductSkeleton() {
  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen font-sans">
      {/* Hero Section Skeleton */}
      <div className="relative bg-gray-300 h-72 w-full overflow-hidden animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-300 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <div className="max-w-2xl">
              <div className="h-4 bg-gray-400 rounded w-1/4 mb-4"></div>
              <div className="h-10 bg-gray-400 rounded w-3/4 mb-4"></div>
              <div className="w-24 h-1.5 bg-gray-400 rounded-full mb-4"></div>
              <div className="h-6 bg-gray-400 rounded w-full mb-2"></div>
              <div className="h-6 bg-gray-400 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16 -mt-6 relative z-10">
        <div className="mb-8">
          <div className="h-5 bg-gray-300 rounded w-32"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image Skeleton */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-300 h-96 animate-pulse"></div>

          {/* Product Details Skeleton */}
          <div>
            <div className="mb-8">
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-gray-300 rounded-full mr-3"></div>
                    <div className="h-5 bg-gray-300 rounded w-full"></div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
              <div className="bg-gray-100 rounded-lg p-6">
                <ul className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex justify-between border-b border-gray-200 pb-2">
                      <div className="h-5 bg-gray-300 rounded w-1/3"></div>
                      <div className="h-5 bg-gray-300 rounded w-1/4"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="h-10 bg-gray-300 rounded w-40"></div>
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>

        {/* Sub-Products Section Skeleton */}
        <div className="mb-16">
          <div className="h-7 bg-gray-300 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="bg-gray-300 h-48 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA Skeleton */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-7 bg-gray-300 rounded w-3/4 mx-auto mb-3"></div>
            <div className="h-5 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto mb-6"></div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="h-10 bg-gray-300 rounded w-40"></div>
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ProductContent({ params }: { params: { product: string } }) {
  const product = allProducts.find(p => p.id === params.product);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  if (!product) {
    return notFound();
  }

  const currentSubProducts = subProducts[params.product as keyof typeof subProducts] || [];

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black/80 to-black/35 h-72 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            >
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#F1B434] text-sm font-bold tracking-tight mb-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {product.name}
              </motion.h1>

              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.p
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {product.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16 -mt-6 relative z-10">
        <div className="mb-8">
          <Link href="/category" className="flex items-center text-[#F1B434] hover:underline mb-4">
            <ChevronRight className="w-4 h-4 transform rotate-180 mr-1" />
            Back to Products
          </Link>
        </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 h-5 w-5 text-[#F1B434] mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Specifications</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <motion.li
                      key={index}
                      className="flex justify-between border-b border-gray-100 pb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <span className="text-gray-600 font-medium">{spec.name}</span>
                      <span className="text-gray-800">{spec.value}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center"
              >
                Download Brochure
              </button>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Products Section */}
        {currentSubProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSubProducts.map((subProduct, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={subProduct.image}
                      alt={subProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                      {subProduct.name}
                    </h3>
                    <div>
                      <Link href={`/category/${params.product}/${subProduct.id}`} passHref>
                        <button
                          className="flex items-center px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md"
                        >
                          View Product
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Need more information about {product.name}?
            </h2>
            <p className="text-gray-600 mb-6">
              Our product specialists are ready to help you with specifications, pricing, and any other questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md"
              >
                Contact Our Experts
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                Call Us Now
              </button>
            </div>
          </div>
        </motion.div>
        <BrochureDownloadModal
          isOpen={isBrochureModalOpen}
          onClose={() => setIsBrochureModalOpen(false)}
        />
        <GetQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
      </main>
    </div>

  );
}

export default function ProductPage({ params }: { params: { product: string } }) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductContent params={params} />
    </Suspense>
  );
}