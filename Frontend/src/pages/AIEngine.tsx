import React from 'react';
import { Brain, Database, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

const AIEngine = () => {
  const capabilities = [
    {
      icon: <Brain className="w-6 h-6 text-[#0B1222]" />,
      title: "Machine Learning Algorithms",
      description: "Advanced ML models that learn from market patterns and user behavior to improve matching accuracy over time."
    },
    {
      icon: <Database className="w-6 h-6 text-[#0B1222]" />,
      title: "Big Data Processing",
      description: "Process millions of data points from supplier profiles, market trends, and industry standards in real-time."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#0B1222]" />,
      title: "Predictive Analytics",
      description: "Forecast market trends, price fluctuations, and supplier performance to help you make proactive decisions."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#0B1222]" />,
      title: "Risk Assessment",
      description: "Automatically assess supplier risk factors including financial stability, compliance, and delivery reliability."
    }
  ];

  const metrics = [
    { label: "Data Points Analyzed", value: "50M+", suffix: "daily" },
    { label: "Matching Accuracy", value: "96%", suffix: "success rate" },
    { label: "Processing Speed", value: "< 2s", suffix: "response time" },
    { label: "Learning Efficiency", value: "24/7", suffix: "continuous" }
  ];

  return (
    <div className="min-h-screen bg-[#0B1222] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
              SupplyAI Intelligence Engine
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Powered by cutting-edge artificial intelligence, our engine processes vast amounts of data 
            to deliver precise supplier matches and actionable business insights.
          </p>
        </div>

        {/* AI Overview */}
        <div className="mb-20">
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Next-Generation AI Technology
                </h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Our proprietary AI engine combines natural language processing, machine learning, 
                  and predictive analytics to understand your unique requirements and deliver 
                  personalized supplier recommendations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-[#00E3FF]" />
                    <span className="text-gray-300">Real-time data processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-[#00E3FF]" />
                    <span className="text-gray-300">Global market intelligence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-[#00E3FF]" />
                    <span className="text-gray-300">Advanced security protocols</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#00E3FF]/10 to-[#2ED47A]/10 rounded-xl p-8 flex items-center justify-center">
                <Brain className="w-32 h-32 text-[#00E3FF]" />
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Core AI Capabilities
            </h2>
            <p className="text-xl text-gray-400">
              Discover the powerful features that make our AI engine the industry leader
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:border-[#00E3FF]/30">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-lg flex items-center justify-center mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-400">
              Real-time statistics showcasing our AI engine's performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-white font-semibold mb-1">{metric.label}</div>
                <div className="text-gray-400 text-sm">{metric.suffix}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Algorithm Explanation */}
        <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How Our Algorithm Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0B1222] font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Ingestion</h3>
              <p className="text-gray-400">
                Continuously ingests supplier data, market trends, and user preferences from multiple sources.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0B1222] font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Processing</h3>
              <p className="text-gray-400">
                Applies advanced algorithms to analyze patterns, relationships, and performance indicators.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0B1222] font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Matching</h3>
              <p className="text-gray-400">
                Generates personalized recommendations with confidence scores and detailed explanations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEngine;