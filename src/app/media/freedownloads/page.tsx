'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, BookOpen, Search, Filter, Calendar } from 'lucide-react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileType: 'PDF' | 'ZIP' | 'JPG';
  fileSize: string;
  category: 'brochure' | 'coffee-table' | 'catalog';
  date: string;
  thumbnail: string;
  downloadUrl: string;
  pages?: number;
  language?: string;
}

const DownloadsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'brochure' | 'coffee-table' | 'catalog'>('all');
  const [selectedItem, setSelectedItem] = useState<DownloadItem | null>(null);

  const downloadItems: DownloadItem[] = [
    // Brochures
    {
      id: 'brochure-1',
      title: 'Mobile Cranes Product Brochure',
      description: 'Complete technical specifications and features of our mobile crane range',
      fileType: 'PDF',
      fileSize: '2.4 MB',
      category: 'brochure',
      date: '2024-01-15',
      thumbnail: `${basePath}/brochure-cranes.jpg`,
      downloadUrl: `${basePath}/downloads/brochures/mobile-cranes.pdf`,
      pages: 24,
      language: 'English'
    },
    {
      id: 'brochure-2',
      title: 'Reach Stackers Overview',
      description: 'Comprehensive guide to our reach stacker models and capabilities',
      fileType: 'PDF',
      fileSize: '1.8 MB',
      category: 'brochure',
      date: '2024-01-10',
      thumbnail: `${basePath}/brochure-reach-stackers.jpg`,
      downloadUrl: `${basePath}/downloads/brochures/reach-stackers.pdf`,
      pages: 18,
      language: 'English'
    },
    {
      id: 'brochure-3',
      title: 'Material Handling Solutions',
      description: 'Complete range of material handling equipment and solutions',
      fileType: 'PDF',
      fileSize: '3.1 MB',
      category: 'brochure',
      date: '2024-01-05',
      thumbnail: `${basePath}/brochure-material-handling.jpg`,
      downloadUrl: `${basePath}/downloads/brochures/material-handling.pdf`,
      pages: 32,
      language: 'English'
    },
    {
      id: 'brochure-4',
      title: 'Road Construction Equipment',
      description: 'Advanced road building and construction machinery portfolio',
      fileType: 'PDF',
      fileSize: '2.7 MB',
      category: 'brochure',
      date: '2023-12-20',
      thumbnail: `${basePath}/brochure-road-equipment.jpg`,
      downloadUrl: `${basePath}/downloads/brochures/road-equipment.pdf`,
      pages: 28,
      language: 'English'
    },

    // Coffee Table Books
    {
      id: 'coffee-table-1',
      title: 'TIL Legacy: 80 Years of Excellence',
      description: 'A visual journey through eight decades of innovation and leadership',
      fileType: 'PDF',
      fileSize: '15.2 MB',
      category: 'coffee-table',
      date: '2024-01-20',
      thumbnail: `${basePath}/coffee-table-legacy.jpg`,
      downloadUrl: `${basePath}/downloads/coffee-table/80-years-legacy.pdf`,
      pages: 120,
      language: 'English'
    },
    {
      id: 'coffee-table-2',
      title: 'Engineering Marvels: The TIL Story',
      description: 'Showcasing our most iconic engineering achievements and projects',
      fileType: 'PDF',
      fileSize: '12.8 MB',
      category: 'coffee-table',
      date: '2023-11-15',
      thumbnail: `${basePath}/coffee-table-engineering.jpg`,
      downloadUrl: `${basePath}/downloads/coffee-table/engineering-marvels.pdf`,
      pages: 96,
      language: 'English'
    },
    {
      id: 'coffee-table-3',
      title: 'Infrastructure Nation Builders',
      description: 'TILs contribution to Indias infrastructure development',
      fileType: 'PDF',
      fileSize: '18.5 MB',
      category: 'coffee-table',
      date: '2023-10-30',
      thumbnail: `${basePath}/coffee-table-infrastructure.jpg`,
      downloadUrl: `${basePath}/downloads/coffee-table/nation-builders.pdf`,
      pages: 150,
      language: 'English'
    },

    // Catalogs
    {
      id: 'catalog-1',
      title: 'Complete Product Catalog 2024',
      description: 'Full range of TIL products and services for 2024',
      fileType: 'PDF',
      fileSize: '8.9 MB',
      category: 'catalog',
      date: '2024-01-25',
      thumbnail: `${basePath}/catalog-2024.jpg`,
      downloadUrl: `${basePath}/downloads/catalogs/complete-catalog-2024.pdf`,
      pages: 84,
      language: 'English'
    },
    {
      id: 'catalog-2',
      title: 'Spare Parts Catalog',
      description: 'Comprehensive spare parts and components listing',
      fileType: 'PDF',
      fileSize: '4.2 MB',
      category: 'catalog',
      date: '2023-12-15',
      thumbnail: `${basePath}/catalog-spare-parts.jpg`,
      downloadUrl: `${basePath}/downloads/catalogs/spare-parts-catalog.pdf`,
      pages: 45,
      language: 'English'
    }
  ];

  const filteredItems = downloadItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (item: DownloadItem) => {
    // Simulate download
    const link = document.createElement('a');
    link.href = item.downloadUrl;
    link.download = `${item.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // You can add analytics tracking here
    console.log(`Downloaded: ${item.title}`);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'brochure': return <FileText className="w-5 h-5" />;
      case 'coffee-table': return <BookOpen className="w-5 h-5" />;
      case 'catalog': return <FileText className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'brochure': return 'bg-blue-100 text-blue-800';
      case 'coffee-table': return 'bg-amber-100 text-amber-800';
      case 'catalog': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/downloads-bg.jpg`}
          alt="Downloads"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/50 to-transparent z-10" />
        
        <div className="absolute inset-0 z-20 flex items-center pt-8">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            >
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-yellow-300 text-sm font-bold tracking-wider mb-2 mt-8 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                RESOURCES & DOWNLOADS
              </motion.span>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Download <span className="text-[#F1B434] drop-shadow-lg">Center</span>
              </motion.h1>

              <motion.div
                className="w-32 h-2 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-6 shadow-lg"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.p
                className="text-xl text-gray-100 max-w-xl leading-relaxed font-medium tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Access brochures, catalogs, and coffee table books showcasing our products and legacy.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex-1 w-full lg:max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search downloads..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F1B434] focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === 'all'
                      ? 'bg-[#F1B434] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  All Resources
                </button>
                <button
                  onClick={() => setSelectedCategory('brochure')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === 'brochure'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  Brochures
                </button>
                <button
                  onClick={() => setSelectedCategory('coffee-table')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === 'coffee-table'
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  Coffee Table Books
                </button>
                <button
                  onClick={() => setSelectedCategory('catalog')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === 'catalog'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  Catalogs
                </button>
              </div>
            </div>
          </motion.div>

          {/* Downloads Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getCategoryColor(item.category)}`}>
                      {getCategoryIcon(item.category)}
                      {item.category === 'coffee-table' ? 'Coffee Table Book' : 
                       item.category === 'brochure' ? 'Brochure' : 'Catalog'}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#F1B434] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {item.fileType} • {item.fileSize}
                    </span>
                    {item.pages && (
                      <span>{item.pages} pages</span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleDownload(item)}
                    className="w-full bg-gradient-to-r from-[#F1B434] to-amber-500 hover:from-amber-500 hover:to-[#F1B434] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl"
                  >
                    <Download className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                    Download Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <FileText className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-600 mb-4">No downloads found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default DownloadsPage;