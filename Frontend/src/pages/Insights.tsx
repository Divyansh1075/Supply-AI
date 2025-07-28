import React from 'react';
import { Calendar, User, TrendingUp, Globe, BarChart, Zap } from 'lucide-react';

const Insights = () => {
  const articles = [
    {
      id: 1,
      title: "AI-Driven Supply Chain Optimization: The Future is Here",
      excerpt: "Discover how artificial intelligence is revolutionizing supply chain management and procurement processes across industries.",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Global Supply Chain Trends: What to Expect in 2025",
      excerpt: "Analysis of emerging trends in global supply chains and their impact on business operations and supplier relationships.",
      author: "Michael Chen",
      date: "March 12, 2025",
      readTime: "7 min read",
      category: "Market Analysis",
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Sustainable Sourcing: Building Eco-Friendly Supply Networks",
      excerpt: "How businesses are leveraging sustainable sourcing practices to build resilient and environmentally responsible supply chains.",
      author: "Emma Rodriguez",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Sustainability",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Risk Management in Modern Procurement",
      excerpt: "Essential strategies for identifying, assessing, and mitigating risks in today's complex procurement landscape.",
      author: "David Park",
      date: "March 8, 2025",
      readTime: "8 min read",
      category: "Risk Management",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Data Analytics in Supplier Selection",
      excerpt: "Leveraging big data and analytics to make informed supplier selection decisions and optimize procurement outcomes.",
      author: "Lisa Wang",
      date: "March 5, 2025",
      readTime: "6 min read",
      category: "Data Analytics",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "The Rise of Digital Procurement Platforms",
      excerpt: "How digital transformation is reshaping procurement processes and creating new opportunities for business growth.",
      author: "James Thompson",
      date: "March 3, 2025",
      readTime: "5 min read",
      category: "Digital Transformation",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const categories = [
    { name: "AI & Technology", icon: <Zap className="w-4 h-4" />, count: 8 },
    { name: "Market Analysis", icon: <TrendingUp className="w-4 h-4" />, count: 12 },
    { name: "Sustainability", icon: <Globe className="w-4 h-4" />, count: 6 },
    { name: "Risk Management", icon: <BarChart className="w-4 h-4" />, count: 5 },
    { name: "Data Analytics", icon: <BarChart className="w-4 h-4" />, count: 9 },
    { name: "Digital Transformation", icon: <Zap className="w-4 h-4" />, count: 7 }
  ];

  return (
    <div className="min-h-screen bg-[#0B1222] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
              Industry Insights
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert analysis, trends, and insights 
            from the world of supply chain management and procurement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/30 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="text-[#00E3FF]">{category.icon}</div>
                      <span className="text-gray-300 text-sm">{category.name}</span>
                    </div>
                    <span className="text-gray-500 text-xs bg-gray-700 px-2 py-1 rounded">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-gray-800/30 border border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 hover:border-[#00E3FF]/30 group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#00E3FF] text-[#0B1222] px-3 py-1 rounded-lg text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00E3FF] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <span className="text-[#00E3FF]">{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-[#00E3FF] text-[#0B1222] px-8 py-3 rounded-xl font-semibold hover:bg-[#00E3FF]/90 transition-all">
                Load More Articles
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest supply chain insights, 
            market trends, and AI innovations delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-[#00E3FF] focus:outline-none"
            />
            <button className="bg-[#00E3FF] text-[#0B1222] px-6 py-3 rounded-lg font-semibold hover:bg-[#00E3FF]/90 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;