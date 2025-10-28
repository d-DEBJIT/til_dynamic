'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, X } from 'lucide-react';
import CoffeeTableBook from '../../../components/CoffeeTableBook';


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

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

interface DownloadsClientProps {
    categories: ProductMaster[];
    allProducts: ProductMaster[];
}

interface FormData {
    fullName: string;
    organization: string;
    phoneNumber: string;
    email: string;
    product: string;
}

export function DownloadsClient({ categories, allProducts }: DownloadsClientProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedItem, setSelectedItem] = useState<ProductMaster | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        organization: '',
        phoneNumber: '',
        email: '',
        product: ''
    });
    const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

    // Product options based on product name
    const productOptions: { [key: string]: string[] } = {
        'Rough Terrain Cranes': ['HUSKY 620', 'RT 630C', 'RT 740B', 'RT 760', 'RT 880'],
        'Forklift Trucks': ['Hyster H10-16XD', 'Hyster H25-32XD', 'Hyster H36-48XD', 'Hyster H8.0-10.0XT', 'Hyster H8-11XD EC B3C0'],
        'ReachStackers': ['RS 46 - 33CH', 'RS 45 - 31CH A366 / A404'],
        'Boom Lifts': ['A62JRT'],
        'Truck Cranes': ['HYDRA 830M', 'TMS 750B MK II', 'TMS 830', 'TMS 845', 'TMS 850', 'TMS 855', 'TMS 860', 'TMS 880M'],
        'Crawler Cranes': ['MLC 80A-1', 'MLC 90A-1', 'MLC 100-1', 'MLC 150-1', 'MLC 165-1', '14000', 'MLC 250', '999', 'MLC 300', '16000', 'MLC 650', '18000', '31000'],
        'Pick n Carry Cranes': ['PIXEF 215', 'MOBILOAD 315'],
        'Grove Range': ['RT 530E-2', 'RT 540E', 'RT 550E', 'RT 765E-2', 'RT 770E', 'RT 9130E-2', 'GRT 9165', 'GRT 655', 'GRT 655L', 'GRT 880', 'GRT 8100-1', 'GRT 8120', 'TMS 500-2', 'TMS 800-2', 'TMS 875-2', 'TMS 9000-2', 'TTS 9000-2', 'GMK 3050-2', 'GMK 3060L', 'GMK 4070L', 'GMK 4080-2', 'GMK 4080L', 'GMK 4090', 'GMK 6400', 'GCD 09', 'GCD 15', 'GCD 20', 'GCD 25'],
        'Articulating Crane': ['TIL N80A']
    };

    // Filter products based on search term and selected category
    const filteredProducts = allProducts.filter(product => {
        const productName = product.name || '';
        const matchesSearch = productName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.parent_id === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    // Get category name by ID
    const getCategoryName = (categoryId: string) => {
        const category = categories.find(cat => cat.product_master_id.toString() === categoryId);
        return category?.name || 'Unknown Category';
    };

    const handleDownloadClick = (product: ProductMaster) => {
        setSelectedItem(product);
        setFormData({
            fullName: '',
            organization: '',
            phoneNumber: '',
            email: '',
            product: ''
        });
        setFormErrors({});
        setShowModal(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (formErrors[name as keyof FormData]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = (): boolean => {
        const errors: Partial<FormData> = {};

        if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
        if (!formData.organization.trim()) errors.organization = 'Organization is required';
        if (!formData.phoneNumber.trim()) errors.phoneNumber = 'Phone Number is required';
        if (!formData.email.trim()) errors.email = 'Email Address is required';
        if (!formData.product) errors.product = 'Product selection is required';

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm() && selectedItem) {
            // Simulate download - you can replace this with actual file download logic
            const fileName = selectedItem.name || 'product_brochure';
            console.log('Download submitted:', {
                ...formData,
                product: selectedItem.name,
                productId: selectedItem.product_master_id
            });
            console.log(`Downloaded: ${fileName}`);

            // Reset form and close modal
            setFormData({
                fullName: '',
                organization: '',
                phoneNumber: '',
                email: '',
                product: ''
            });
            setShowModal(false);
            setSelectedItem(null);

            // Show success message
            alert(`Thank you! Your download for ${fileName} will begin shortly.`);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedItem(null);
        setFormErrors({});
    };

    // Helper function to get image URL
    const getImageUrl = (imagePath: string | null) => {
        if (!imagePath) return `${basePath}/placeholder-image.jpg`;

        // Remove leading slash if present
        const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
        return `${basePath}/${cleanPath}`;
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/Media-page.jpg`}
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
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight tracking-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Down<span className="text-[#F1B434] drop-shadow-lg">load </span>
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
            <div className="mt-20">
                <CoffeeTableBook />
            </div>
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
                    {/* Filters and Search */}
                    <div className="mb-8 space-y-4">
                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === 'all'
                                    ? 'bg-[#F1B434] text-white'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#F1B434]'
                                    }`}
                            >
                                All Products
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category.product_master_id}
                                    onClick={() => setSelectedCategory(category.product_master_id.toString())}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.product_master_id.toString()
                                        ? 'bg-[#F1B434] text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:border-[#F1B434]'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative max-w-md">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent shadow-sm"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Downloads Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.product_master_id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={getImageUrl(product.catagory_image)}
                                        alt={product.name || 'Product Image'}
                                        className="w-full h-48 object-fill group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            e.currentTarget.src = `${basePath}/placeholder-image.jpg`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                <div className="p-6">
                                    <div className="mb-2">
                                        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                                            {getCategoryName(product.parent_id || '')}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#F1B434] transition-colors duration-300">
                                        {product.name || 'Unnamed Product'}
                                    </h3>

                                    <button
                                        onClick={() => handleDownloadClick(product)}
                                        className="w-full bg-gradient-to-r from-[#F1B434] to-[#F1B434] hover:from-[#F1B434] hover:to-[#F1B434] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl"
                                    >
                                        <Download className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                                        Download Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No products found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Download Modal */}
            {showModal && selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                    >
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-900">DOWNLOAD BROCHURE FORM</h2>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
                                    placeholder="Name"
                                />
                                {formErrors.fullName && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
                                )}
                            </div>

                            {/* Organization */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Organization *
                                </label>
                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
                                    placeholder="Organization"
                                />
                                {formErrors.organization && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.organization}</p>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
                                    placeholder="Phone no."
                                />
                                {formErrors.phoneNumber && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
                                )}
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
                                    placeholder="E-mail"
                                />
                                {formErrors.email && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                                )}
                            </div>

                            {/* Select Category (Read-only) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Select Category *
                                </label>
                                <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700">
                                    {selectedItem.name || 'Product Brochure'}
                                </div>
                                <input type="hidden" name="category" value={selectedItem.name || ''} />
                            </div>

                            {/* Select Product */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Select product *
                                </label>
                                <select
                                    name="product"
                                    value={formData.product}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F1B434] focus:border-transparent"
                                >
                                    <option value="">Select one...</option>
                                    {selectedItem.name && productOptions[selectedItem.name]?.map((product, index) => (
                                        <option key={index} value={product}>
                                            {product}
                                        </option>
                                    ))}
                                    {(!selectedItem.name || !productOptions[selectedItem.name]) && (
                                        <option value="General Product">General Product</option>
                                    )}
                                </select>
                                {formErrors.product && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.product}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#F1B434] to-[#F1B434] hover:from-[#F1B434] hover:to-[#F1B434] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </>
    );
}