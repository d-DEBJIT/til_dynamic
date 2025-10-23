'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ArrowLeft,
  User,
  BookOpen,
  ArrowRight,
  Search,
  TrendingUp,
  Clock as ClockIcon
} from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

// Skeleton Loader Component
const SkeletonLoader = () => {
  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen">
      {/* Header Skeleton */}
      <div className="relative h-72 w-full overflow-hidden bg-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
            <div className="mb-4">
              <div className="h-6 w-24 bg-gray-400 rounded-md animate-pulse"></div>
            </div>

            <div className="h-6 w-40 bg-gray-400 rounded-md animate-pulse mb-4"></div>

            <div className="h-12 bg-gray-400 rounded-md animate-pulse mb-6 w-3/4"></div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="h-8 w-8 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-400 rounded-md animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-400 rounded-md animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-400 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-12 -mt-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Article Content Skeleton */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="h-8 w-20 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="h-8 w-24 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="h-8 w-28 bg-gray-300 rounded-full animate-pulse"></div>
                </div>

                <div className="h-6 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-6 w-3/4 bg-gray-300 rounded-md animate-pulse mb-8"></div>

                <div className="h-6 w-64 bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse mb-8"></div>

                <div className="h-40 w-full bg-gray-300 rounded-lg animate-pulse mb-4"></div>

                <div className="h-6 w-64 bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
              </div>

              {/* Action Bar Skeleton */}
              <div className="border-t border-gray-200 p-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-6 w-16 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="h-6 w-16 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="h-6 w-16 bg-gray-300 rounded-md animate-pulse"></div>
                </div>

                <div className="h-6 w-32 bg-gray-300 rounded-md animate-pulse"></div>
              </div>

              {/* Author Bio Skeleton */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-32 bg-gray-300 rounded-md animate-pulse mb-4"></div>
                    <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Comments Section Skeleton */}
              <div className="border-t border-gray-200 p-6">
                <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse mb-6"></div>

                <div className="flex gap-4 mb-8">
                  <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-20 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                    <div className="h-10 w-32 bg-gray-300 rounded-md animate-pulse ml-auto"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  {[1, 2].map(item => (
                    <div key={item} className="flex gap-4">
                      <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <div className="h-4 w-40 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                        <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                        <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                        <div className="h-4 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Posts Skeleton */}
            <div className="mt-12">
              <div className="h-6 w-56 bg-gray-300 rounded-md animate-pulse mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map(item => (
                  <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-40 bg-gray-300 animate-pulse"></div>
                    <div className="p-4">
                      <div className="h-4 w-20 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                      <div className="h-6 w-full bg-gray-300 rounded-md animate-pulse mb-4"></div>
                      <div className="h-4 w-32 bg-gray-300 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse mb-4"></div>
              <div className="h-10 w-full bg-gray-300 rounded-md animate-pulse mb-3"></div>
              <div className="h-6 w-24 bg-gray-300 rounded-md animate-pulse"></div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse mb-6"></div>
              {[1, 2, 3, 4].map(item => (
                <div key={item} className="flex gap-3 mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                    <div className="h-3 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse mb-6"></div>
              {[1, 2, 3].map(item => (
                <div key={item} className="mb-4">
                  <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                  <div className="h-3 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  column: string;
  date: string;
  readTime: string;
  likes: string;
  comments: string;
  image: string;
  thumbnail: string;
  featuredImage: string;
  tags: string[];
}

interface BlogViewProps {
  basePath?: string;
  featuredPosts?: BlogPost[];
  sampleComments?: Comment[];
}

const BlogView: React.FC<BlogViewProps> = ({
  basePath = '',
  featuredPosts = [],
  sampleComments = []
}) => {
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [expandedAuthor, setExpandedAuthor] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Default featured posts if none provided
  const defaultFeaturedPosts: BlogPost[] = [
    {
      id: 1,
      title: 'How to Buy a Reachstacker? 6 Critical Factors to Consider',
      excerpt: 'When comparing reachstackers, the specifications listed on paper are only the first step. If you want to make a smart investment that will serve your operations for years to come, you need to look beyond the basic specs.',
      content: `
        <h2>Introduction</h2>
        <p>Purchasing heavy machinery like a reachstacker is a significant capital investment that requires careful consideration and strategic planning. With various models, specifications, and manufacturers in the market, making the right choice can seem daunting. This comprehensive guide will walk you through the six most critical factors to consider when purchasing a reachstacker for your container handling operations.</p>
        
        <h2>1. Load Capacity and Stacking Height Requirements</h2>
        <p>The primary purpose of a reachstacker is to lift, move, and stack heavy containers efficiently and safely. The first and most crucial factor to consider is the machine's load capacity, which should align with your typical container weights and operational requirements.</p>
        
        <p>Modern reachstackers typically offer capacities ranging from 45 to 60 tons, with some specialized models handling up to 90 tons. It's essential to consider not just your current needs but also potential future requirements as your business grows and container weights potentially increase.</p>
        
        <div class="bg-gray-100 p-6 rounded-lg border-l-4 border-[#F1B434] my-6">
          <h3 class="text-xl font-bold text-gray-800 mb-2">Industry Insight</h3>
          <p class="text-gray-700">Always consider the "second tier" capacity, which is often 10-15% lower than the first tier capacity. This can significantly impact your operational efficiency and stacking capabilities in real-world scenarios.</p>
        </div>
        
        <p>Additionally, consider the stacking capability. How many containers high do you need to stack? Standard models typically stack containers 4-5 high, but some high-capacity models can stack up to 7 containers high. Remember that stacking height directly impacts your yard's storage density and operational efficiency.</p>
        
        <h2>2. Maneuverability and Yard Conditions Analysis</h2>
        <p>Reachstackers operate in container yards with varying conditions and space constraints. A thorough assessment of your operational environment is essential before selecting the right equipment.</p>
        
        <p>Consider the following yard factors:</p>
        <ul class="list-disc pl-5 my-4">
          <li class="mb-2"><strong>Yard surface type and condition:</strong> Paved, gravel, or mixed surfaces require different tire types and suspension systems</li>
          <li class="mb-2"><strong>Available turning radius:</strong> Compact yards require machines with excellent maneuverability and possibly all-wheel steering</li>
          <li class="mb-2"><strong>Gradeability requirements:</strong> Yards with slopes require machines with adequate power and braking systems</li>
          <li class="mb-2"><strong>Space constraints between rows:</strong> Narrow passages require specific dimensions and possibly specialized attachments</li>
          <li><strong>Environmental conditions:</strong> Operations in extreme temperatures, rain, or snow require additional features and protections</li>
        </ul>
        
        <h2>3. Fuel Efficiency and Environmental Impact Considerations</h2>
        <p>With rising fuel costs and increasingly stringent environmental regulations, fuel efficiency has become a crucial consideration in equipment selection. While diesel engines remain the industry standard, many manufacturers now offer hybrid options that can significantly reduce fuel consumption and emissions by up to 30%.</p>
        
        <p>Evaluate the total cost of ownership, not just the purchase price. A more expensive but fuel-efficient model may save you substantial money in the long run through reduced operating costs. Consider these environmental factors:</p>
        
        <ul class="list-disc pl-5 my-4">
          <li class="mb-2"><strong>Fuel consumption rates:</strong> Compare documented fuel efficiency under similar working conditions</li>
          <li class="mb-2"><strong>Emissions standards compliance:</strong> Ensure compliance with current regulations (EPA Tier 4, EU Stage V) and potential future requirements</li>
          <li class="mb-2"><strong>Noise pollution levels:</strong> Important for operations near residential areas or with noise restrictions</li>
          <li><strong>Potential for alternative fuel options:</strong> Consider future conversion possibilities to electric or other alternative power sources</li>
        </ul>
        
        <div class="bg-blue-50 p-6 rounded-lg my-6">
          <h3 class="text-xl font-bold text-blue-800 mb-2">Case Study: Port of Rotterdam Efficiency Project</h3>
          <p class="text-blue-700">After conducting a comprehensive analysis and switching to hybrid reachstackers, the Port of Rotterdam reported a 28% reduction in fuel costs and a 32% decrease in emissions while maintaining the same operational efficiency and even improving performance in certain metrics.</p>
        </div>
        
        <h2>4. Maintenance Requirements and Service Support Networks</h2>
        <p>Equipment downtime directly translates to lost revenue in container handling operations. Therefore, reliable service support and maintenance considerations are paramount in the selection process.</p>
        
        <p>Key maintenance considerations include:</p>
        <ul class="list-disc pl-5 my-4">
          <li class="mb-2"><strong>Service network availability:</strong> Ensure manufacturer support exists in your region with adequate response capabilities</li>
          <li class="mb-2"><strong>Average response time:</strong> Documented response times for technical support and emergency repairs</li>
          <li class="mb-2"><strong>Availability of spare parts:</strong> Parts inventory levels and supply chain reliability</li>
          <li class="mb-2"><strong>Training programs:</strong> Availability and quality of training for your maintenance team</li>
          <li><strong>Remote diagnostics capabilities:</strong> Advanced telematics and remote troubleshooting capabilities</li>
        </ul>
        
        <h2>5. Operator Comfort and Safety Features Integration</h2>
        <p>A comfortable operator is a productive, attentive, and safe operator. Modern reachstackers incorporate advanced ergonomic designs and comprehensive safety systems that significantly impact operational efficiency and accident prevention.</p>
        
        <p>Look for these operator-focused features during your evaluation:</p>
        <ul class="list-disc pl-5 my-4">
          <li class="mb-2"><strong>Ergonomic cabin design:</strong> Adjustable seating, intuitive control placement, and adequate space</li>
          <li class="mb-2"><strong>Climate control systems:</strong> Effective heating, ventilation and air conditioning for all weather conditions</li>
          <li class="mb-2"><strong>Visibility enhancements:</strong> 360-degree camera systems, additional mirrors, and window configurations</li>
          <li class="mb-2"><strong>Advanced stability control:</strong> Systems that prevent tipping and enhance safety during operations</li>
          <li><strong>Intuitive control interfaces:</strong> User-friendly displays and control systems that reduce operator fatigue</li>
        </ul>
        
        <h2>6. Technology Integration and Automation Capabilities</h2>
        <p>Advanced reachstackers now incorporate sophisticated technology systems that enhance operational efficiency, provide valuable business intelligence, and enable various levels of automation. These technological advancements represent significant value additions beyond basic equipment functionality.</p>
        
        <p>Consider these technological capabilities during your evaluation process:</p>
        <ul class="list-disc pl-5 my-4">
          <li class="mb-2"><strong>Fleet management integration:</strong> Compatibility with existing or planned fleet management systems</li>
          <li class="mb-2"><strong>Remote diagnostics and monitoring:</strong> Real-time equipment health monitoring and predictive maintenance capabilities</li>
          <li class="mb-2"><strong>Semi-automated operations:</strong> Systems that assist with container handling, reducing operator workload and improving precision</li>
          <li class="mb-2"><strong>Data reporting capabilities:</strong> Comprehensive operational data collection and reporting functionalities</li>
          <li><strong>Future upgrade pathways:</strong> Capacity for technology upgrades as new systems become available</li>
        </ul>
        
        <h2>Conclusion: Making an Informed Investment Decision</h2>
        <p>Selecting the right reachstacker requires a comprehensive evaluation of multiple factors specific to your operation. By carefully considering these six critical aspects—load capacity, maneuverability, fuel efficiency, maintenance, operator comfort, and technology integration—you can make an informed decision that will serve your business effectively for years to come.</p>
        
        <p>Remember that the cheapest initial option isn't always the most cost-effective in the long run. Consider the total cost of ownership, including maintenance, fuel consumption, potential downtime, and resale value when making your final decision.</p>
        
        <div class="bg-green-50 p-6 rounded-lg my-6">
          <h3 class="text-xl font-bold text-green-800 mb-2">Professional Recommendation</h3>
          <p class="text-green-700">Before making a final decision, we strongly recommend testing multiple models in your actual working environment. Many manufacturers offer demonstration units for comprehensive on-site evaluation. There's no substitute for seeing how a machine performs under your specific operational conditions and constraints.</p>
        </div>
      `,
      author: {
        name: 'Rajesh Kumar',
        role: 'Chief Engineer, Port Equipment Division',
        bio: 'With over 15 years of specialized experience in heavy machinery development and port operations innovation, Rajesh has led numerous container handling projects across major ports in Asia and Europe. He specializes in optimizing port operations through strategic equipment selection and process improvement methodologies. Rajesh holds a Master\'s degree in Mechanical Engineering from IIT Delhi and has authored several influential papers on port equipment efficiency in international journals.',
        avatar: `${basePath}/rima_chaudhuri.jpg`,
      },
      column: 'Industry Insights',
      date: '2024-04-05',
      readTime: '12 min',
      likes: '7,240',
      comments: '426',
      image: `${basePath}/blog1.png`,
      thumbnail: `${basePath}/blog1.png`,
      featuredImage: `${basePath}/blog1.png`,
      tags: ['Reachstackers', 'Heavy Machinery', 'Container Handling', 'Equipment Selection', 'Port Operations']
    },
    {
      id: 2,
      title: '6 Powerful Cranes Revolutionizing Modern Construction Projects',
      excerpt: 'Modern construction sites rely on specialized crane technology to achieve unprecedented efficiency and capability. These six crane types represent the cutting edge of construction equipment innovation.',
      content: `
        <h2>Introduction</h2>
        <p>The construction industry has witnessed remarkable technological advancements in recent years, with crane technology leading the charge in innovation. From towering skyscrapers to complex infrastructure projects, modern cranes have become indispensable tools that enable construction companies to tackle increasingly ambitious projects with precision and efficiency.</p>
        
        <h2>1. Tower Cranes: The Skyline Giants</h2>
        <p>Tower cranes remain the most recognizable feature of urban construction sites, capable of lifting heavy materials to impressive heights with remarkable precision. Modern tower cranes incorporate advanced safety systems, remote operation capabilities, and sophisticated load monitoring technology.</p>
        
        <div class="bg-gray-100 p-6 rounded-lg border-l-4 border-[#F1B434] my-6">
          <h3 class="text-xl font-bold text-gray-800 mb-2">Did You Know?</h3>
          <p class="text-gray-700">The world's tallest tower crane can reach heights of over 265 meters (869 feet) and lift loads up to 64 metric tons. These engineering marvels can often assemble themselves through a process called "climbing."</p>
        </div>
        
        <h2>2. Mobile Cranes: Versatility on Wheels</h2>
        <p>Mobile cranes offer unparalleled flexibility, combining lifting power with mobility. These self-propelled machines can quickly move between job sites and handle a wide variety of lifting tasks. Modern mobile cranes feature advanced outrigger systems, telescopic booms, and computerized load management.</p>
        
        <h2>3. Crawler Cranes: Stability on Challenging Terrain</h2>
        <p>With their tracked undercarriages, crawler cranes provide exceptional stability and mobility on rough or soft terrain. These heavy-lift specialists excel in infrastructure projects, power plant construction, and heavy industrial applications where ground conditions would challenge other crane types.</p>
        
        <h2>4. Overhead Cranes: Precision in Controlled Environments</h2>
        <p>Overhead cranes, also known as bridge cranes, operate on elevated runways to provide precise material handling in manufacturing facilities, warehouses, and industrial plants. Modern versions incorporate automation, precision positioning systems, and advanced control interfaces.</p>
        
        <h2>5. Rough-Terrain Cranes: Off-Road Capability</h2>
        <p>Designed specifically for off-road and rough terrain applications, these cranes feature robust four-wheel drive systems, large flotation tires, and enhanced ground clearance. They're indispensable for construction projects in remote or undeveloped areas.</p>
        
        <h2>6. Floating Cranes: Marine Construction Specialists</h2>
        <p>Floating cranes mounted on barges or specialized vessels handle heavy lifting tasks in marine environments, including port construction, bridge building, and offshore projects. These massive machines can lift thousands of tons and represent some of the most impressive engineering in the crane world.</p>
        
        <h2>Conclusion</h2>
        <p>The evolution of crane technology continues to push the boundaries of what's possible in construction. From smart cranes with IoT connectivity to hybrid power systems that reduce environmental impact, the future of crane technology promises even greater efficiency, safety, and capability.</p>
      `,
      author: {
        name: 'Priya Sharma',
        role: 'Senior Construction Equipment Specialist',
        bio: 'Head of Equipment Innovation at TIL with a focus on construction technology and sustainable building practices. Priya has over 12 years of experience in construction equipment consulting and has worked on major infrastructure projects across India and Southeast Asia.',
        avatar: `${basePath}/rima_chaudhuri.jpg`,
      },
      column: 'Construction Technology',
      date: '2024-05-21',
      readTime: '15 min',
      likes: '3,920',
      comments: '116',
      image: `${basePath}/blog2.jpg`,
      thumbnail: `${basePath}/blog2.jpg`,
      featuredImage: `${basePath}/blog2.jpg`,
      tags: ['Cranes', 'Construction', 'Heavy Equipment', 'Building Technology']
    },
    {
      id: 3,
      title: 'The Future of Electric Heavy Machinery: Trends and Predictions',
      excerpt: 'As sustainability becomes increasingly important, the heavy machinery industry is rapidly transitioning toward electric power. This shift represents both a challenge and an opportunity for construction and logistics companies.',
      content: `Full content for electric machinery article...`,
      author: {
        name: 'Arjun Patel',
        role: 'Sustainable Technology Analyst',
        bio: 'Leading researcher in electric heavy machinery with publications in multiple industry journals.',
        avatar: `${basePath}/rima_chaudhuri.jpg`,
      },
      column: 'Sustainable Technology',
      date: '2024-06-15',
      readTime: '10 min',
      likes: '2,450',
      comments: '89',
      image: `${basePath}/blog3.jpg`,
      thumbnail: `${basePath}/blog3.jpg`,
      featuredImage: `${basePath}/blog3.jpg`,
      tags: ['Electric Vehicles', 'Sustainability', 'Heavy Machinery', 'Innovation']
    },
    {
      id: 4,
      title: 'Maintenance Best Practices for Extending Equipment Lifespan',
      excerpt: 'Proper maintenance isn\'t just about fixing problems—it\'s about preventing them. Implementing these best practices can significantly extend the operational life of your heavy equipment while reducing downtime and repair costs.',
      content: `Full content for maintenance article...`,
      author: {
        name: 'Michael Chen',
        role: 'Equipment Maintenance Director',
        bio: '20+ years of experience in heavy equipment maintenance and reliability engineering.',
        avatar: `${basePath}/rima_chaudhuri.jpg`,
      },
      column: 'Equipment Management',
      date: '2024-03-12',
      readTime: '14 min',
      likes: '4,120',
      comments: '203',
      image: `${basePath}/blog4.jpg`,
      thumbnail: `${basePath}/blog4.jpg`,
      featuredImage: `${basePath}/blog4.jpg`,
      tags: ['Maintenance', 'Equipment Management', 'Best Practices', 'Operations']
    },
    {
      id: 5,
      title: 'Automation in Logistics: How Smart Equipment is Transforming Ports',
      excerpt: 'From autonomous cranes to AI-powered logistics systems, automation is revolutionizing port operations worldwide. This transformation is increasing efficiency, improving safety, and reshaping the global supply chain.',
      content: `Full content for automation article...`,
      author: {
        name: 'Lisa Wang',
        role: 'Port Technology Specialist',
        bio: 'Expert in port automation systems with implementation experience across three continents.',
        avatar: `${basePath}/rima_chaudhuri.jpg`,
      },
      column: 'Logistics Innovation',
      date: '2024-07-08',
      readTime: '18 min',
      likes: '5,340',
      comments: '312',
      image: `${basePath}/blog5.jpg`,
      thumbnail: `${basePath}/blog5.jpg`,
      featuredImage: `${basePath}/blog5.jpg`,
      tags: ['Automation', 'Logistics', 'Port Technology', 'AI']
    }
  ];

  // Default sample comments if none provided
  const defaultSampleComments: Comment[] = [
    {
      id: 1,
      author: 'Rahul Mehta',
        avatar: `${basePath}/rima_chaudhuri.jpg`,
      date: '2024-04-07',
      content: 'This comprehensive guide covers all critical aspects of reachstacker selection. The maintenance considerations section particularly resonates with our experience - we learned the importance of service network availability the hard way after purchasing equipment without adequate local support.',
      likes: 12
    },
    {
      id: 2,
      author: 'Sneha Joshi',
        avatar: `${basePath}/rima_chaudhuri.jpg`,
      date: '2024-04-06',
      content: 'Excellent analysis of the total cost of ownership concept. Many procurement teams focus solely on initial purchase price without considering long-term operational expenses. Could you provide more details about lifecycle cost calculation methodologies in a future article?',
      likes: 8
    },
    {
      id: 3,
      author: 'Vikram Singh',
        avatar: `${basePath}/rima_chaudhuri.jpg`,
      date: '2024-04-05',
      content: 'The technology integration section is particularly relevant as we move toward Industry 4.0 in port operations. We recently implemented IoT sensors on our reachstackers, and the predictive maintenance capabilities have already saved us significant downtime and repair costs.',
      likes: 15
    }
  ];

  // Use provided props or defaults
  const posts = featuredPosts.length > 0 ? featuredPosts : defaultFeaturedPosts;
  const commentsData = sampleComments.length > 0 ? sampleComments : defaultSampleComments;

  // Popular posts for right column
  const popularPosts = posts
    .filter(p => post ? p.id !== post.id : true)
    .sort((a, b) => parseInt(b.likes.replace(/,/g, '')) - parseInt(a.likes.replace(/,/g, '')))
    .slice(0, 4);

  // Recent posts for right column
  const recentPosts = posts
    .filter(p => post ? p.id !== post.id : true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      // Find the current post based on URL parameter
      const slug = params.title as string;

      // Create a normalized version for comparison (remove special chars, lowercase)
      const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ');

      const foundPost = posts.find(p => {
        // Normalize the post title similarly for comparison
        const normalizedTitle = p.title.toLowerCase()
          .replace(/[^a-z0-9\s]/g, '') // Remove special characters
          .replace(/\s+/g, ' ');        // Normalize spaces

        return normalizedTitle.includes(normalizedSlug) ||
          normalizedSlug.includes(normalizedTitle);
      });

      if (foundPost) {
        setPost(foundPost);
        setLikes(parseInt(foundPost.likes.replace(/,/g, '')));
        setComments(commentsData);

        // Find related posts (same tags or same column)
        const related = posts
          .filter(p => p.id !== foundPost.id)
          .filter(p =>
            p.tags.some(tag => foundPost.tags.includes(tag)) ||
            p.column === foundPost.column
          )
          .slice(0, 3);

        setRelatedPosts(related);
      } else {
        // Fallback: if no match found, use the first post
        console.warn('Post not found by slug, using first post as fallback');
        setPost(posts[0]);
        setLikes(parseInt(posts[0].likes.replace(/,/g, '')));
        setComments(commentsData);
        setRelatedPosts(posts.filter(p => p.id !== posts[0].id).slice(0, 3));
      }

      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [params.title, posts, commentsData]);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    if (post) {
      if (savedPosts.includes(post.id)) {
        setSavedPosts(savedPosts.filter(id => id !== post.id));
      } else {
        setSavedPosts([...savedPosts, post.id]);
      }
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        author: 'Current User',
        avatar: `${basePath}/rima_chaudhuri.jpg`,
        date: new Date().toISOString().split('T')[0],
        content: newComment,
        likes: 0
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }

    setShowShareOptions(false);
  };

  if (loading || !post) {
    return <SkeletonLoader />;
  }

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen">
      {/* Header Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        
        <motion.img
          src={post.featuredImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        />
        
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <ArrowLeft size={18} />
                <span>Back to Blog</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 text-white/80 mb-4"
            >
              <span className="text-sm font-medium">{post.column}</span>
              <span className="text-xs">•</span>
              <span className="text-sm">Featured Post</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-white/90"
            >
              <div className="flex items-center gap-2">
                <User size={16} />
                <span className="text-sm">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span className="text-sm">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="text-sm">{post.readTime} read</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-12 -mt-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Article Content */}
              <article className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </article>

              {/* Action Bar */}
              <div className="border-t border-gray-200 p-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isLiked
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                    <span className="font-medium">{likes.toLocaleString()}</span>
                  </button>

                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                    <MessageCircle size={18} />
                    <span className="font-medium">{comments.length}</span>
                  </button>

                  <button
                    onClick={handleSave}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      savedPosts.includes(post.id)
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <BookOpen size={18} />
                    <span className="font-medium">
                      {savedPosts.includes(post.id) ? 'Saved' : 'Save'}
                    </span>
                  </button>
                </div>

                <div className="relative">
                  <button
                    onClick={() => setShowShareOptions(!showShareOptions)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Share2 size={18} />
                    <span className="font-medium">Share</span>
                  </button>

                  {showShareOptions && (
                    <div className="absolute right-0 bottom-full mb-2 bg-white rounded-lg shadow-lg p-3 z-10">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                          aria-label="Share on Facebook"
                        >
                          <Facebook size={18} />
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                          aria-label="Share on Twitter"
                        >
                          <Twitter size={18} />
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin size={18} />
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                          aria-label="Copy link"
                        >
                          <LinkIcon size={18} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Author Bio */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex items-start gap-6">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {post.author.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.author.role}</p>
                    <p className={`text-gray-700 ${expandedAuthor ? '' : 'line-clamp-3'}`}>
                      {post.author.bio}
                    </p>
                    <button
                      onClick={() => setExpandedAuthor(!expandedAuthor)}
                      className="text-blue-600 hover:text-blue-800 font-medium mt-2"
                    >
                      {expandedAuthor ? 'Show less' : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="border-t border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Comments ({comments.length})
                </h3>

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="flex gap-4 mb-8">
                  <img
                    src={`${basePath}/no_image.jpg`}
                    alt="Your avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Join the discussion..."
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={3}
                    />
                    <button
                      type="submit"
                      className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Post Comment
                    </button>
                  </div>
                </form>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4">
                      <img
                        src={comment.avatar}
                        alt={comment.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">
                            {comment.author}
                          </h4>
                          <span className="text-gray-500 text-sm">
                            {new Date(comment.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{comment.content}</p>
                        <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                          <Heart size={14} />
                          <span className="text-sm">{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={relatedPost.thumbnail}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                          {relatedPost.column}
                        </span>
                        <h3 className="font-semibold text-gray-900 mt-1 mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Search Blog</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <ClockIcon size={12} />
                        <span className="ml-1">{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Posts</h3>
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 group"
                  >
                    <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Calendar size={12} />
                      <span className="ml-1">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogView;