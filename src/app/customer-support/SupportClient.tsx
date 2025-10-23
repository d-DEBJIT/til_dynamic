'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageCircle, Clock, Search, FileText, HelpCircle, Wrench, Calendar, User, MapPin } from 'lucide-react';

interface FAQ {
    id: number;
    question: string;
    answer: string;
    category: string;
}

interface SupportClientProps {
    faqs: FAQ[];
    basePath: string;
}

const SupportClient = ({ faqs, basePath }: SupportClientProps) => {
    const [activeTab, setActiveTab] = useState<'contact' | 'faq' | 'request'>('contact');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        product: '',
        serialNumber: '',
        issue: '',
        description: '',
        urgency: 'medium'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Service request submitted:', formData);
    };

    const supportMethods = [
        {
            icon: <Phone className="w-6 h-6 text-[#F1B434]" />,
            title: "24/7 Support Hotline",
            description: "Immediate assistance for urgent issues",
            details: "+91 33 6633 2000",
            link: "tel:+913366332000",
            availability: "Available 24/7"
        },
        {
            icon: <Mail className="w-6 h-6 text-[#F1B434]" />,
            title: "Email Support",
            description: "Send us your queries and we'll respond within 24 hours",
            details: "support@tilindia.com",
            link: "mailto:support@tilindia.com",
            availability: "Response within 24 hours"
        },
        {
            icon: <MessageCircle className="w-6 h-6 text-[#F1B434]" />,
            title: "Live Chat",
            description: "Chat with our support agents in real-time",
            details: "Start Chat",
            link: "#chat",
            availability: "Mon-Sat: 8AM-8PM IST"
        }
    ];

    const faqCategories = [
        {
            id: 'products',
            name: 'Products',
            icon: <Wrench className="w-4 h-4" />
        },
        {
            id: 'services',
            name: 'Services',
            icon: <Wrench className="w-4 h-4" />
        },
        {
            id: 'warranty',
            name: 'Warranty',
            icon: <FileText className="w-4 h-4" />
        },
        {
            id: 'technical',
            name: 'Technical',
            icon: <HelpCircle className="w-4 h-4" />
        }
    ];

    // Filter FAQs based on search query and category
    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    const resources = [
        {
            title: "Product Manuals",
            description: "Download manuals for all TIL products",
            icon: <FileText className="w-6 h-6" />,
            link: "#manuals"
        },
        {
            title: "Maintenance Guides",
            description: "Step-by-step maintenance instructions",
            icon: <Wrench className="w-6 h-6" />,
            link: "#maintenance"
        },
        {
            title: "Video Tutorials",
            description: "Watch instructional videos for your equipment",
            icon: <MessageCircle className="w-6 h-6" />,
            link: "#videos"
        },
        {
            title: "Safety Guidelines",
            description: "Important safety information for equipment operation",
            icon: <HelpCircle className="w-6 h-6" />,
            link: "#safety"
        }
    ];

    const regionalServiceCenters = [
        {
            city: "Kolkata",
            address: "1, Taratolla Road, Garden Reach, Kolkata - 700 024",
            phone: "+91 33 2469 5000",
            hours: "Mon-Sat: 8:00 AM - 6:00 PM"
        },
        {
            city: "Delhi",
            address: "Plot No. 1, Sector 11, Noida - 201301",
            phone: "+91 120 456 7890",
            hours: "Mon-Sat: 8:00 AM - 6:00 PM"
        },
        {
            city: "Mumbai",
            address: "401, 4th Floor, Trade Center, Bandra Kurla Complex, Mumbai - 400051",
            phone: "+91 22 6789 1234",
            hours: "Mon-Sat: 8:00 AM - 6:00 PM"
        },
        {
            city: "Bangalore",
            address: "No. 123, Richmond Road, Bangalore - 560025",
            phone: "+91 80 2345 6789",
            hours: "Mon-Sat: 8:00 AM - 6:00 PM"
        },
        {
            city: "Chennai",
            address: "101 Industrial Estate, Guindy, Chennai - 600032",
            phone: "+91 44 5678 9012",
            hours: "Mon-Sat: 8:00 AM - 6:00 PM"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={`${basePath}/customer_support-bg.jpg`}
                    alt="Customer Support"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Gradient Overlay from Top */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10" />
                {/* Gradient Overlay */}
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
                                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#FFE352] text-sm font-bold tracking-tight mb-2 mt-8"
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
                                TIL <span className="text-[#F1B434]">Support</span>
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
                                We're here to help you get the most out of your TIL equipment with comprehensive support services.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16">
                {/* Support Tabs */}
                <div className="mb-12">
                    <div className="flex flex-wrap border-b border-gray-200">
                        <button
                            className={`px-6 py-3 text-sm font-medium ${activeTab === 'contact' ? 'border-b-2 border-[#F1B434] text-[#F1B434]' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('contact')}
                        >
                            Contact Support
                        </button>
                        <button
                            className={`px-6 py-3 text-sm font-medium ${activeTab === 'faq' ? 'border-b-2 border-[#F1B434] text-[#F1B434]' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('faq')}
                        >
                            FAQ
                        </button>
                        <button
                            className={`px-6 py-3 text-sm font-medium ${activeTab === 'request' ? 'border-b-2 border-[#F1B434] text-[#F1B434]' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('request')}
                        >
                            Service Request
                        </button>
                    </div>
                </div>

                {/* Contact Support Tab */}
                {activeTab === 'contact' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Help Quickly</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {supportMethods.map((method, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-[#F1B434]/30"
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-[#F1B434]/10 rounded-lg">
                                                {method.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800">{method.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-3">{method.description}</p>
                                        <a
                                            href={method.link}
                                            className="text-[#F1B434] font-medium hover:underline inline-flex items-center mb-2"
                                        >
                                            {method.details}
                                        </a>
                                        <div className="flex items-center text-sm text-gray-500 mt-2">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>{method.availability}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Regional Service Centers */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Regional Service Centers</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {regionalServiceCenters.map((center, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-[#F1B434]/30"
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <h3 className="text-lg font-bold text-gray-800 mb-3">{center.city}</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <MapPin className="w-5 h-5 text-[#F1B434] mt-0.5 flex-shrink-0" />
                                                <p className="text-gray-600 text-sm">{center.address}</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Phone className="w-5 h-5 text-[#F1B434]" />
                                                <a href={`tel:${center.phone.replace(/\s+/g, '')}`} className="text-gray-600 text-sm hover:text-[#F1B434]">
                                                    {center.phone}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Clock className="w-5 h-5 text-[#F1B434]" />
                                                <span className="text-gray-600 text-sm">{center.hours}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            {/* Search */}
                            <div className="relative w-full md:max-w-md">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search FAQs..."
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434] sm:text-sm"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Categories */}
                            <div className="flex flex-wrap gap-2">
                                {faqCategories.map(category => (
                                    <button
                                        key={category.id}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#F1B434]/10 hover:text-[#F1B434] transition-colors"
                                    >
                                        {category.icon}
                                        <span>{category.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* FAQ List */}
                        <div className="space-y-4">
                            {filteredFaqs.length > 0 ? (
                                filteredFaqs.map(faq => (
                                    <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                        <button
                                            onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                            className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex justify-between items-center"
                                        >
                                            <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                                            <svg
                                                className={`w-5 h-5 text-[#F1B434] transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {expandedFaq === faq.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6">
                                                    <p className="text-gray-600">{faq.answer}</p>
                                                    <div className="mt-4 flex items-center gap-2">
                                                        <span className="text-xs px-2 py-1 bg-[#F1B434]/10 text-[#F1B434] rounded-full">
                                                            {faqCategories.find(c => c.id === faq.category)?.name}
                                                        </span>
                                                        <button className="text-sm text-[#F1B434] hover:underline">
                                                            Was this helpful?
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">No FAQs found matching your search.</p>
                                </div>
                            )}
                        </div>

                        {/* Resources */}
                        <div className="bg-gray-50 rounded-xl p-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-800 mb-6">Support Resources</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {resources.map((resource, index) => (
                                    <motion.a
                                        key={index}
                                        href={resource.link}
                                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-[#F1B434]/30 group"
                                        whileHover={{ y: -5 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-[#F1B434]/10 rounded-lg group-hover:bg-[#F1B434]/20 transition-colors">
                                                {React.cloneElement(resource.icon, { className: "w-5 h-5 text-[#F1B434]" })}
                                            </div>
                                            <h4 className="font-medium text-gray-800 group-hover:text-[#F1B434] transition-colors">
                                                {resource.title}
                                            </h4>
                                        </div>
                                        <p className="text-sm text-gray-600">{resource.description}</p>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Service Request Tab */}
                {activeTab === 'request' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                        {/* Request Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Submit Service Request</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                                            placeholder="Phone Number"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                                            Product/Equipment <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="product"
                                            name="product"
                                            value={formData.product}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                                            placeholder="Product Model"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                        Serial Number
                                    </label>
                                    <input
                                        type="text"
                                        id="serialNumber"
                                        name="serialNumber"
                                        value={formData.serialNumber}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                                        placeholder="Equipment Serial Number"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
                                        Issue Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="issue"
                                        name="issue"
                                        value={formData.issue}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                                    >
                                        <option value="">Select Issue Type</option>
                                        <option value="mechanical">Mechanical Issue</option>
                                        <option value="electrical">Electrical Issue</option>
                                        <option value="hydraulic">Hydraulic Issue</option>
                                        <option value="software">Software/Control System</option>
                                        <option value="maintenance">Scheduled Maintenance</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                                        Urgency <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="urgency"
                                        name="urgency"
                                        value={formData.urgency}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                                    >
                                        <option value="low">Low - No impact on operations</option>
                                        <option value="medium">Medium - Minor impact on operations</option>
                                        <option value="high">High - Significant impact on operations</option>
                                        <option value="critical">Critical - Equipment completely down</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Issue Description <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F1B434] focus:border-[#F1B434]"
                                        placeholder="Please describe the issue in detail..."
                                    />
                                </div>

                                <div className="pt-4">
                                    <motion.button
                                        type="submit"
                                        className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#F1B434] hover:bg-[#E8AC30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F1B434]"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Submit Request
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </motion.button>
                                </div>
                            </form>
                        </div>

                        {/* Support Information */}
                        <div className="space-y-8">
                            <div className="bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-xl shadow-lg p-8 text-white">
                                <h2 className="text-2xl font-bold mb-6">What to Expect</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white/20 rounded-lg">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Response Time</h3>
                                            <p className="text-white/90">
                                                We acknowledge all service requests within 2 hours and provide an estimated resolution time based on urgency level.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white/20 rounded-lg">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Dedicated Support</h3>
                                            <p className="text-white/90">
                                                Your request will be assigned to a qualified service engineer who will coordinate with you throughout the resolution process.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white/20 rounded-lg">
                                            <Wrench className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">On-site Service</h3>
                                            <p className="text-white/90">
                                                For issues that cannot be resolved remotely, our field service team will schedule an on-site visit at your convenience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Support</h2>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg">
                                        <Phone className="w-6 h-6 text-red-500" />
                                        <div>
                                            <h3 className="font-bold text-red-800">24/7 Emergency Hotline</h3>
                                            <p className="text-red-600">+91 33 6633 2999</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600">
                                        For critical issues that require immediate attention outside business hours, call our emergency hotline. This service is available for situations where equipment failure poses safety risks or significant operational disruption.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </main>
        </div>
    );
};

export default SupportClient;