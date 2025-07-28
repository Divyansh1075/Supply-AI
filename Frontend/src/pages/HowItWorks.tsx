import React from 'react';
import { Search, Brain, CheckCircle, Rocket } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-[#0B1222]" />,
      title: "Define Your Requirements",
      description: "Tell us what you're looking for - product specifications, quantity, quality standards, and delivery preferences. Our smart forms guide you through the process."
    },
    {
      icon: <Brain className="w-8 h-8 text-[#0B1222]" />,
      title: "AI Analysis & Matching",
      description: "Our advanced AI engine analyzes your requirements and scans our database of verified suppliers to find the best matches based on your criteria."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#0B1222]" />,
      title: "Review & Compare",
      description: "Get detailed supplier profiles with ratings, certifications, pricing, and past performance data. Compare options side-by-side to make informed decisions."
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#0B1222]" />,
      title: "Connect & Collaborate",
      description: "Directly connect with selected suppliers, negotiate terms, and manage your partnerships through our integrated platform with real-time communication tools."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1222] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
              How SupplyAI Works
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover how our AI-powered platform simplifies supplier discovery and management 
            in four easy steps, helping you build stronger supply chain relationships.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
              <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center mr-4">
                    {step.icon}
                  </div>
                  <div className="text-[#00E3FF] text-lg font-semibold">
                    Step {index + 1}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
              </div>

              <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300">
                  <div className="w-full h-64 bg-gradient-to-r from-[#00E3FF]/10 to-[#2ED47A]/10 rounded-xl flex items-center justify-center">
                    <div className="text-6xl text-gray-600 font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-gray-800/30 border border-gray-700/50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have streamlined their procurement process with SupplyAI.
          </p>
          <button className="bg-[#00E3FF] text-[#0B1222] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00E3FF]/90 transition-all transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;