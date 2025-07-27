import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, Zap, Users, Award, Globe } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-[#0B1222]" />,
      title: "AI-Powered Matching",
      description: "Our advanced AI algorithms analyze your requirements and match you with the most suitable suppliers based on quality, price, and reliability."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#0B1222]" />,
      title: "Smart Recommendations",
      description: "Get personalized supplier recommendations based on your business needs, past purchases, and market trends."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0B1222]" />,
      title: "Real-time Analytics",
      description: "Access comprehensive analytics and insights to make informed decisions about your supply chain operations."
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+", icon: <Users className="w-8 h-8" /> },
    { label: "Satisfaction Rate", value: "98%", icon: <Award className="w-8 h-8" /> },
    { label: "Global Suppliers", value: "10K+", icon: <Globe className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0B1222]">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
              Find the Perfect Suppliers
            </span>
            <br />
            <span className="text-white">with AI-Powered Intelligence</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionize your procurement process with intelligent supplier matching, 
            real-time market insights, and data-driven recommendations that save time and optimize costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              to="/catalog"
              className="bg-[#00E3FF] text-[#0B1222] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00E3FF]/90 transition-all transform hover:scale-105"
            >
              Start Finding Suppliers
            </Link>
            <Link
              to="/how-it-works"
              className="border border-[#00E3FF] text-[#00E3FF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00E3FF]/10 transition-all"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose SupplyAI?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage cutting-edge AI technology to streamline your supplier discovery and management process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of companies optimizing their supply chain with SupplyAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center">
                    <div className="text-[#0B1222]">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;