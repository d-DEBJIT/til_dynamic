'use client';
import React, { useEffect, useState, useRef } from 'react';
import { useSearch } from '../context/SearchContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const MACHINES = [
  {
    id: 'rough-terrain',
    title: 'Rough-Terrain Crane',
    img: `${basePath}/rough-terrain.png`,
    specs: ['Off-road ready', '32 m boom', '80 t capacity'],
    price: '$185,000',
    tag: 'POPULAR',
    type: 'machine'
  },
  {
    id: 'truck-crane',
    title: 'Truck Crane',
    img: `${basePath}/truck-cranes.jpeg`,
    specs: ['High mobility', '200 t max', 'Long-reach boom'],
    price: '$220,000',
    tag: 'POPULAR',
    type: 'machine'
  },
  {
    id: 'pick-carry',
    title: 'Pick-n-Carry Crane',
    img: `${basePath}/pick-n-carry.png`,
    specs: ['Compact design', '25 t capacity', 'Tight radius'],
    price: '$95,000',
    tag: 'NEW',
    type: 'machine'
  },
  {
    id: 'all-terrain',
    title: 'All-Terrain Crane',
    img: `${basePath}/grove-range.png`,
    specs: ['High speed', '120 t capacity', '60 m boom'],
    price: '$350,000',
    tag: 'FEATURED',
    type: 'machine'
  },
  {
    id: 'crawler-crane',
    title: 'Crawler Crane',
    img: `${basePath}/crawler-cranes.png`,
    specs: ['Heavy lifting', '400 t capacity', 'Stable platform'],
    price: '$500,000',
    tag: 'FEATURED',
    type: 'machine'
  },
  {
    id: 'tower-crane',
    title: 'Tower Crane',
    img: `${basePath}/tower-crane.jpg`,
    specs: ['High rise', '20 t capacity', '80 m reach'],
    price: '$280,000',
    tag: 'NEW',
    type: 'machine'
  }
];

const NEWS = [
  {
    id: 1,
      title: 'NBM&CW',
      excerpt: 'Sunil Chaturvedi, The Man Behind Gainwell Group',
      image: `${basePath}/news1.png`,
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Business',
    type: 'news'
  },
  {
    id: 2,
      title: 'Manufacturing Today',
      excerpt: 'India Gainwell Group secures majority stake in TIL Ltd, eyes $1 Billion tur...',
      image: `${basePath}/news6.jpg`,
      date: '2023-12-10',
      readTime: '4 min read',
      category: 'Corporate',
    type: 'news'
  },
  {
    id: 3,
    title: 'EPC&I',
    excerpt: 'Built to Meet the Toughest Demands',
    image: `${basePath}/news3.png`,
    date: '2024-12-15',
    readTime: '4 min read',
    category: 'Awards',
    type: 'news'
  },
  {
    id: 4,
      title: 'Equipment Times',
      excerpt: "Handling The Future! MHE's Role in Construction & Infrastructure",
      image: `${basePath}/news4.png`,
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Technology',
    type: 'news'
  }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Ultimate Rough Terrain Cranes Guide in 2025 For Your Next Project',
    excerpt: 'When you picture a Rough Terrain crane, you probably imagine a beastly machine...',
    author: {
      name: 'Rima Chaudhuri',
      role: 'Digital Marketing Executive'
    },
    column: 'Industry Insights',
    date: '2024-11-28',
    readTime: '10 min',
    likes: '7K',
    comments: '426',
    image: `${basePath}/blog4.jpg`,
    type: 'blog'
  },
  {
    id: 2,
    title: '7 Proven Ways Rough Terrain Cranes Power Up Business Efficiency',
    excerpt: 'In the world of construction and heavy lifting, the right equipment isn\'t just helpful—it\'s business critical...',
    author: {
      name: 'Rima Chaudhuri',
      role: 'Digital Marketing Executive'
    },
    column: 'Green Tech',
    date: '2024-12-05',
    readTime: '15 min',
    likes: '3.9K',
    comments: '116',
    image: `${basePath}/blog3.jpg` ,
    type: 'blog'
  },
  {
    id: 3,
    title: '6 Powerful Cranes Used in Modern Construction',
    excerpt: 'Let\'s be real—on any serious construction site, cranes aren\'t treated as just any other machine...',
    author: {
      name: 'Rima Chaudhuri',
      role: 'Digital Marketing Executive'
    },
    column: 'Tech Trends',
    date: '2024-12-10',
    readTime: '12 min',
    likes: '5.2K',
    comments: '238',
    image: `${basePath}/blog2.jpg`,
    type: 'blog'
  },
  {
    id: 4,
    title: 'How to Buy a Reachstacker? 6 Factors to Consider',
    excerpt: 'When comparing reachstackers, the specifications listed on paper are only the first step. If you..',
    author: {
      name: 'Rima Chaudhuri',
      role: 'Digital Marketing Executive'
    },
    column: 'Workplace Safety',
    date: '2024-12-15',
    readTime: '8 min',
    likes: '4.1K',
    comments: '189',
    image: `${basePath}/blog1.png`,
    type: 'blog'
  }
];

const INVESTOR_RELATIONS = [
  {
    id: 1,
    title: 'Annual Report 2023',
    excerpt: 'Complete financial and operational performance for fiscal year 2023',
    date: '2024-03-15',
    type: 'investor',
    fileType: 'PDF',
    size: '5.2 MB'
  },
  {
    id: 2,
    title: 'Quarterly Earnings Q2 2024',
    excerpt: 'Financial results for the second quarter of 2024',
    date: '2024-07-25',
    type: 'investor',
    fileType: 'PDF',
    size: '2.8 MB'
  },
  {
    id: 3,
    title: 'Investor Presentation',
    excerpt: 'Latest corporate presentation for investors and analysts',
    date: '2024-06-10',
    type: 'investor',
    fileType: 'PPT',
    size: '8.1 MB'
  },
  {
    id: 4,
    title: 'Sustainability Report 2023',
    excerpt: 'Our environmental, social and governance performance',
    date: '2024-04-22',
    type: 'investor',
    fileType: 'PDF',
    size: '4.5 MB'
  }
];

const ALL_DATA = [...MACHINES, ...NEWS, ...BLOG_POSTS, ...INVESTOR_RELATIONS];
const SUGGESTIONS = [
  { text: 'products', type: 'category', filter: 'machine' },
  { text: 'machines', type: 'category', filter: 'machine' },
  { text: 'news', type: 'category', filter: 'news' },
  { text: 'blogs', type: 'category', filter: 'blog' },
  { text: 'investors', type: 'category', filter: 'investor' },
  { text: 'Rough-Terrain Crane', type: 'machine' },
  { text: 'Truck Crane', type: 'machine' },
  { text: 'Electric Excavator', type: 'news' },
  { text: 'Sustainable Manufacturing', type: 'blog' },
  { text: 'Annual Report', type: 'investor' }
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'machine', label: 'Products' },
  { id: 'news', label: 'News' },
  { id: 'blog', label: 'Blogs' },
  { id: 'investor', label: 'Investor Relations' }
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
};

interface SearchModalProps {
  placeholder?: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ placeholder = "Search products, news, blogs..." }) => {
  const { isOpen, close } = useSearch();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showAllResults, setShowAllResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [manuallySelectedFilter, setManuallySelectedFilter] = useState(false);
  const [loadedItems, setLoadedItems] = useState<{[key: string]: number}>({
    machine: 3,
    news: 3,
    blog: 3,
    investor: 3
  });
  const resultsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const DEFAULT_CARDS = {
    machine: MACHINES.slice(0, 3),
    news: NEWS.slice(0, 3),
    blog: BLOG_POSTS.slice(0, 3),
    investor: INVESTOR_RELATIONS.slice(0, 3)
  };
  

  useEffect(() => {
    if (isOpen) {
      window.history.pushState({}, '', `${window.location.pathname}?search=open`);
    } else {
      if (window.location.search.includes('search=open')) {
        window.history.pushState({}, '', window.location.pathname);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handlePopState = () => {
      if (!window.location.search.includes('search=open') && isOpen) {
        close();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const rawQuery = searchQuery.toLowerCase().trim();
    const query = rawQuery.endsWith('s') ? rawQuery.slice(0, -1) : rawQuery;

    const keywordMap: { [key: string]: string } = {
      product: 'machine',
      products: 'machine',
      machine: 'machine',
      machines: 'machine',
      blog: 'blog',
      blogs: 'blog',
      news: 'news',
      new: 'news',
      investor: 'investor',
      investors: 'investor'
    };

    // Only set filter from query if no active filter is already set
   // FIXED
     // Auto-apply filter only if not already manually set
    if (!manuallySelectedFilter) {
  if (keywordMap[rawQuery]) {
    setActiveFilter(keywordMap[rawQuery]);
  } else if (searchQuery.trim() === '') {
    setActiveFilter(null);
  }
}



    const filteredSuggestions = SUGGESTIONS.filter(suggestion =>
      suggestion.text.toLowerCase().includes(query)
    );
    setSuggestions(filteredSuggestions);

    setIsSearching(true);

    const timer = setTimeout(() => {
      let filteredData = ALL_DATA;

      // Apply filter based on current category
      if (activeFilter && activeFilter !== 'all') {
        filteredData = filteredData.filter(item => item.type === activeFilter);
      }

      // Apply keyword filter only if searchQuery has text
    if (query !== '' && !keywordMap[rawQuery]) {
   filteredData = filteredData.filter((item) => {
      const titleMatch = item.title?.toLowerCase().includes(query);
      const excerptMatch = 'excerpt' in item && item.excerpt?.toLowerCase().includes(query);
      const specsMatch = 'specs' in item && Array.isArray(item.specs) && item.specs.some(spec => spec.toLowerCase().includes(query));
      const categoryMatch = 'category' in item && item.category?.toLowerCase().includes(query);
      return titleMatch || excerptMatch || specsMatch || categoryMatch;
    });

    }


      setSearchResults(filteredData);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, activeFilter]);

 const handleKey = (e: globalThis.KeyboardEvent) => {
  if (e.key === 'Escape') close();
};


  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [close]);

  const handleSuggestionClick = (suggestion: { text: string; filter?: string }) => {
    setSearchQuery(suggestion.text);
    if (suggestion.filter) {
      setActiveFilter(suggestion.filter);
    }
    inputRef.current?.focus();
  };
  const clearSearch = () => {
    setSearchQuery('');
    setActiveFilter(null);
    setManuallySelectedFilter(false); // reset manual tracking
    inputRef.current?.focus();
  };


  const handleScroll = (direction: 'up' | 'down') => {
    if (resultsRef.current) {
      const scrollAmount = direction === 'down' ? 300 : -300;
      resultsRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  const loadMoreItems = (type: string) => {
    setLoadedItems(prev => ({
      ...prev,
      [type]: prev[type] + 3
    }));
  };

 const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const viewAllItems = (type: string) => {
  window.location.href = `${basePath}/${type}`; // ✅
};


  const displayedResults = showAllResults ? searchResults : searchResults.slice(0, 3);


  const MachineSkeleton = () => (
    <div className="result-card">
      <div className="w-full h-full bg-[#3a3a3a] animate-pulse"></div>
    </div>
  );

  const NewsSkeleton = () => (
    <div className="result-card">
      <div className="w-full h-full bg-[#3a3a3a] animate-pulse"></div>
    </div>
  );

  const BlogSkeleton = () => (
    <div className="result-card">
      <div className="w-full h-full bg-[#3a3a3a] animate-pulse"></div>
    </div>
  );

  const InvestorSkeleton = () => (
    <div className="result-card">
      <div className="w-full h-full bg-[#3a3a3a] animate-pulse"></div>
    </div>
  );

  const getFilterLabel = (filter: string | null) => {
    switch (filter) {
      case 'machine': return 'Products';
      case 'news': return 'News';
      case 'blog': return 'Blogs';
      case 'investor': return 'Investor Relations';
      default: return 'All';
    }
  };

  const handleCardClick = (item: any) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    let url = basePath;
    switch (item.type) {
      case 'machine':
        url += `/category`;
        break;
      case 'news':
        url += `/media/news`;
        break;
      case 'blog':
        url += `/media/blog`;
        break;
      case 'investor':
        url += `/investor/${item.id}`;
        break;
      default:
        url += '/';
    }
    window.location.href = url;
  };

  const renderMachineItem = (item: any) => (
  <div className="result-card" onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
    <div className="image-overlay-container">
      <div className="relative w-full h-full">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 z-10" />
      </div>
      <div className="card-content z-20">
        <h3 className="text-white font-semibold">{item.title}</h3>
        
      </div>
    </div>
  </div>
);

const renderNewsItem = (item: any) => (
  <div className="result-card" onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
    <div className="image-overlay-container">
      <div className="relative w-full h-full">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 z-10" />
      </div>
      <div className="card-content z-20">
        <h3 className="text-white font-semibold">{item.title}</h3>
        
      </div>
    </div>
  </div>
);

const renderBlogItem = (item: any) => (
  <div className="result-card" onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
    <div className="image-overlay-container">
      <div className="relative w-full h-full">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90 z-10" />
      </div>
      <div className="card-content z-20">
        <h3 className="text-white font-semibold">{item.title}</h3>
        <div className="text-xs text-white mt-2">
          <span className="font-medium">{item.author.name}</span>
        </div>
      </div>
    </div>
  </div>
);

  const renderInvestorItem = (item: any) => (
    <div className="result-card" onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
      <div className="image-overlay-container">
        {/* No image for investor, but keep overlay for consistency */}
        <div className="top-black-overlay"></div>
      </div>
      <div className="w-full h-full bg-[#2c2c2c] p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-white font-semibold">{item.title}</h3>
          <p className="text-gray-400 text-sm mt-2">{item.excerpt}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-500">{formatDate(item.date)}</span>
          <span className="text-xs px-2 py-1 bg-[#3a3a3a] text-gray-300 rounded-full">
            {item.fileType} • {item.size}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center"
          style={{ fontFamily: "'Arial Narrow', Arial, sans-serif" }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#1e1e1e] w-full max-w-3xl mx-4 rounded-lg shadow-xl p-6 relative border border-[#F1B434]/20"
          >
            <button 
              onClick={close} 
              className="absolute -top-10 right-0 text-white hover:text-[#F1B434] p-2 bg-[#1e1e1e] rounded-full border border-[#3a3a3a]"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder={placeholder}
                className="w-full pl-10 p-4 rounded-md bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F1B434]"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#F1B434]"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setManuallySelectedFilter(true); // mark as manually clicked
                    setActiveFilter(category.id === 'all' ? null : category.id);
                  }}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap ${
                    (activeFilter === category.id || (!activeFilter && category.id === 'all'))
                      ? 'bg-[#F1B434]/10 text-[#F1B434] border-[#F1B434]/20'
                      : 'bg-[#2c2c2c] text-gray-300 border-[#3a3a3a] hover:bg-[#3a3a3a]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <div 
                ref={resultsRef}
                className="mt-4 pr-2 mega-menu-height scroll-hover overflow-y-auto"
              >
                {searchQuery || activeFilter ? (
                  <>
                    {activeFilter && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-2 py-1 bg-[#F1B434]/10 text-[#F1B434] rounded-full border border-[#F1B434]/20">
                          Showing: {getFilterLabel(activeFilter)}
                        </span>
                      </div>
                    )}

                    {suggestions.length > 0 && searchResults.length === 0 && !isSearching && (
                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Try searching for:</div>
                        <div className="flex flex-wrap gap-2">
                          {suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                                suggestion.type === 'category' 
                                  ? 'bg-[#F1B434]/10 text-[#F1B434] border-[#F1B434]/20 hover:bg-[#F1B434]/20'
                                  : 'bg-[#2c2c2c] text-gray-300 border-[#3a3a3a] hover:bg-[#3a3a3a] hover:text-white'
                              }`}
                            >
                              {suggestion.text}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {isSearching ? (
                      <div className="space-y-4">
                        <div className="results-grid gap-4">
                          <MachineSkeleton />
                          <NewsSkeleton />
                          <BlogSkeleton />
                          <InvestorSkeleton />
                        </div>
                      </div>
                    ) : searchResults.length > 0 ? (
                      <>
                        <div className="text-sm text-gray-400 mb-3">
                          Found {searchResults.length} {getFilterLabel(activeFilter).toLowerCase()} 
                          {searchResults.length !== 1 ? 's' : ''} matching "{searchQuery}"
                        </div>
                        
                        <div className="results-grid gap-4">
                          {displayedResults.map((item) => (
                            <motion.div
                              key={`${item.type}-${item.id}`}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              {item.type === 'machine' && renderMachineItem(item)}
                              {item.type === 'news' && renderNewsItem(item)}
                              {item.type === 'blog' && renderBlogItem(item)}
                              {item.type === 'investor' && renderInvestorItem(item)}
                            </motion.div>
                          ))}
                        </div>

                        {searchResults.length > 3 && !showAllResults && (
                          <div className="flex gap-2 mt-4">
                            <button 
                              onClick={() => setShowAllResults(true)}
                              className="text-sm text-[#F1B434] hover:underline"
                            >
                              See more results
                            </button>
                            <span className="text-gray-500">|</span>
                            <button 
                              onClick={() => viewAllItems(activeFilter || 'all')}
                              className="text-sm text-[#F1B434] hover:underline"
                            >
                              View all {searchResults.length} results
                            </button>
                          </div>
                        )}
                        {searchResults.length > 3 && showAllResults && (
                          <div className="flex gap-2 mt-4">
                            <button 
                              onClick={() => setShowAllResults(false)}
                              className="text-sm text-[#F1B434] hover:underline"
                            >
                              Show less
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-gray-400 text-sm py-4 text-center">
                        No results found for "{searchQuery}"
                        {activeFilter && ` in ${getFilterLabel(activeFilter).toLowerCase()}`}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="mt-6">
                    <div className="text-sm text-gray-400 mb-3">Popular Searches</div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Products</h3>
                        <div className="results-grid gap-4">
                          {MACHINES.slice(0, loadedItems.machine).map((item) => (
                            <motion.div
                              key={`machine-${item.id}`}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              {renderMachineItem(item)}
                            </motion.div>
                          ))}
                        </div>
                        {MACHINES.length > 3 && (
                          <div className="flex gap-2 mt-3">
                            {loadedItems.machine <= 3 ? (
                              <>
                                <button 
                                  onClick={() => loadMoreItems('machine')}
                                  className="text-sm text-[#F1B434] hover:underline"
                                >
                                  See more products
                                </button>
                                <span className="text-gray-500">|</span>
                                <button 
                                  onClick={() => viewAllItems('category')}
                                  className="text-sm text-[#F1B434] hover:underline"
                                >
                                  View all products
                                </button>
                              </>
                            ) : (
                              <button 
                                onClick={() => setLoadedItems(prev => ({ ...prev, machine: 3 }))}
                                className="text-sm text-[#F1B434] hover:underline"
                              >
                                Show less
                              </button>
                            )}
                          </div>
                        )}

                      </div>

                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">News</h3>
                        <div className="results-grid gap-4">
                          {NEWS.slice(0, loadedItems.news).map((item) => (
                            <motion.div
                              key={`news-${item.id}`}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              {renderNewsItem(item)}
                            </motion.div>
                          ))}
                        </div>
                        {NEWS.length > 3 && (
                          <div className="flex gap-2 mt-3">
                            {loadedItems.news <= 3 ? (
                              <>
                                <button 
                                  onClick={() => loadMoreItems('news')}
                                  className="text-sm text-[#F1B434] hover:underline"
                                >
                                  See more news
                                </button>
                                <span className="text-gray-500">|</span>
                                <button 
                                  onClick={() => viewAllItems('media/news')}
                                  className="text-sm text-[#F1B434] hover:underline"
                                >
                                  View all news
                                </button>
                              </>
                            ) : (
                              <button 
                                onClick={() => setLoadedItems(prev => ({ ...prev, news: 3 }))}
                                className="text-sm text-[#F1B434] hover:underline"
                              >
                                Show less
                              </button>
                            )}
                          </div>
                        )}

                      </div>

                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Blogs</h3>
                        <div className="results-grid gap-4">
                          {BLOG_POSTS.slice(0, loadedItems.blog).map((item) => (
                            <motion.div
                              key={`blog-${item.id}`}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              {renderBlogItem(item)}
                            </motion.div>
                          ))}
                        </div>
                        {BLOG_POSTS.length > 3 && (
                          <div className="flex gap-2 mt-3">
                            {loadedItems.blog <= 3 ? (
                              <>
                                <button 
                                  onClick={() => loadMoreItems('blog')}
                                  className="text-sm text-[#F1B434] hover:underline"
                                >
                                  See more blogs
                                </button>
                                <span className="text-gray-500">|</span>
                                <button 
                                  onClick={() => viewAllItems('media/blog')}
                                  className="text-sm text-[#F1B434] hover:underline"
                                >
                                  View all blogs
                                </button>
                              </>
                            ) : (
                              <button 
                                onClick={() => setLoadedItems(prev => ({ ...prev, blog: 3 }))}
                                className="text-sm text-[#F1B434] hover:underline"
                              >
                                Show less
                              </button>
                            )}
                          </div>
                        )}

                      </div>

                      <div>
                        <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Investor Relations</h3>
                        <div className="results-grid gap-4">
                          {INVESTOR_RELATIONS.slice(0, loadedItems.investor).map((item) => (
                            <motion.div
                              key={`investor-${item.id}`}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                            >
                              {renderInvestorItem(item)}
                            </motion.div>
                          ))}
                        </div>
                        {INVESTOR_RELATIONS.length > 3 && (
                          <div className="flex gap-2 mt-3">
                            {loadedItems.investor <= 3 ? (
                              <>
                                <button 
                                  onClick={() => loadMoreItems('investor')}
                                  className="text-sm text-[#F1B434] hover:underline"
                                >
                                  See more documents
                                </button>
                                <span className="text-gray-500">|</span>
                                <button 
                                  onClick={() => viewAllItems('investor-relations')}
                                  className="text-sm text-[#F1B434] hover:underline"
                                >
                                  View all documents
                                </button>
                              </>
                            ) : (
                              <button 
                                onClick={() => setLoadedItems(prev => ({ ...prev, investor: 3 }))}
                                className="text-sm text-[#F1B434] hover:underline"
                              >
                                Show less
                              </button>
                            )}
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                )}
              </div>

              {searchQuery && searchResults.length > 3 && (
                <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center">
                  <button 
                    onClick={() => handleScroll('up')}
                    className="p-1 rounded-full bg-[#3a3a3a] hover:bg-[#F1B434]/20 mb-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F1B434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleScroll('down')}
                    className="p-1 rounded-full bg-[#3a3a3a] hover:bg-[#F1B434]/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F1B434" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <div className="text-xs text-gray-500 mt-6 flex justify-between">
              <div>↵ to select • ↑ ↓ to navigate</div>
              <div>esc to close</div>
            </div>

            <style>{`
              .result-card {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                height: 220px;
                overflow: hidden;
                border: none;
                padding: 0;
                margin: 0;
              }
              .image-overlay-container {
                position: relative;
                width: 100%;
                height: 100%;
              }
              .image-overlay-container .relative {
                width: 100%;
                height: 100%;
              }
              .result-card img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.4s ease;
                display: block;
              }
              .card-content {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 20;
                padding: 1rem;
                background: none;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              }
              .result-card:hover img {
                transform: scale(1.05);
                filter: drop-shadow(0 0 8px rgba(241,179,52,0.6));
              }
              .results-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                gap: 1rem;
                align-items: stretch;
              }

              .mega-menu-height {
                height: 60vh;
                max-height: 60vh;
                overflow-y: auto;
              }
              .mobile-menu-height {
                height: auto;
                max-height: 50vh;
              }
              .scroll-hover::-webkit-scrollbar {
                width: 4px;
                height: 4px;
              }
              .scroll-hover::-webkit-scrollbar-track {
                background: transparent;
              }
              .scroll-hover::-webkit-scrollbar-thumb {
                background: transparent;
                border-radius: 4px;
                transition: all 0.3s ease;
              }
              .scroll-hover:hover::-webkit-scrollbar-thumb {
                background: rgba(255, 193, 7, 0.3);
              }
              .scroll-hover::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 193, 7, 0.5);
              }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;