import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, Zap, Users, Award, Globe, Sparkles, ChevronDown } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const words = ['Suppliers', 'Partners', 'Solutions', 'Innovation'];
  const fullText = 'Find the Perfect ';

  useEffect(() => {
    setIsVisible(true);
    
    const typeWriter = () => {
      const word = words[currentWord];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < word.length) {
          setTypedText(prev => prev + word[charIndex]);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          
          setTimeout(() => {
            const deleteInterval = setInterval(() => {
              if (charIndex > 0) {
                setTypedText(prev => prev.slice(0, -1));
                charIndex--;
              } else {
                clearInterval(deleteInterval);
                setCurrentWord((prev) => (prev + 1) % words.length);
              }
            }, 100);
          }, 2000);
        }
      }, 150);
    };

    const timeout = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeout);
  }, [currentWord]);

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-[#0B1222]" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze your requirements and connect you with suppliers that best match your quality standards, pricing needs, and delivery requirements."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#0B1222]" />,
      title: "Smart Recommendations",
      description: "Receive intelligent supplier recommendations tailored to your industry, business size, and procurement history for optimal partnership decisions."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0B1222]" />,
      title: "Real-time Insights",
      description: "Access comprehensive market data, supplier performance metrics, and trend analysis to make informed procurement decisions instantly."
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+", icon: <Users className="w-8 h-8" /> },
    { label: "Satisfaction Rate", value: "98%", icon: <Award className="w-8 h-8" /> },
    { label: "Global Suppliers", value: "10K+", icon: <Globe className="w-8 h-8" /> },
  ];

  // Floating particles animation
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          <Sparkles className="text-[#00E3FF] w-4 h-4" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0B1222] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1222] via-[#1a2332] to-[#0B1222]" />
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E3FF] to-transparent transform -skew-y-12 animate-slide-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2ED47A] to-transparent transform skew-y-12 animate-slide-left" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Animated Title */}
          <div className={`transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent animate-gradient">
                {fullText}
                <span className="inline-block border-r-2 border-[#00E3FF] animate-blink">
                  {typedText}
                </span>
              </span>
              <br />
              <span className="text-white animate-fade-in-up">with AI-Powered Intelligence</span>
            </h1>
          </div>
          
          <p className={`text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Transform your procurement strategy with intelligent supplier discovery, comprehensive market analysis, 
            and AI-driven insights that streamline operations and reduce costs.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-20 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link
              to="/catalog"
              className="bg-[#00E3FF] text-[#0B1222] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00E3FF]/90 transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-[#00E3FF]/25 animate-pulse-glow"
            >
              Explore Suppliers
            </Link>
            <Link
              to="/how-it-works"
              className="border border-[#00E3FF] text-[#00E3FF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00E3FF]/10 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#00E3FF]/20"
            >
              Learn More
            </Link>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#00E3FF] mx-auto animate-pulse" />
          </div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#00E3FF]/20 to-[#2ED47A]/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-[#2ED47A]/20 to-[#00E3FF]/20 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-[#00E3FF]/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#2ED47A]/30 rounded-full animate-ping-slow"></div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Why Choose 
              <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent animate-gradient">
                {" "}SupplyAI
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Experience the future of procurement with cutting-edge AI technology designed to optimize your supply chain operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in-up transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-r from-[#00E3FF]/10 to-[#2ED47A]/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-gradient-to-r from-[#2ED47A]/10 to-[#00E3FF]/10 rounded-full blur-xl animate-float"></div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 bg-gray-800/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">
              Trusted by Businesses 
              <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent animate-gradient">
                {" "}Worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-400 animate-fade-in-up animation-delay-200">
              Join thousands of companies worldwide who have transformed their procurement processes with SupplyAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up transform hover:scale-110 transition-all duration-500"
                style={{ animationDelay: `${(index + 1) * 300}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center animate-pulse-glow group-hover:animate-spin transition-all duration-500 shadow-lg shadow-[#00E3FF]/25">
                    <div className="text-[#0B1222] transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent mb-2 animate-counter">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg transform group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E3FF] to-transparent animate-slide-right-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#2ED47A] to-transparent animate-slide-left-slow"></div>
        </div>
      </section>

      {/* Floating Action Elements */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          <div className="w-4 h-4 bg-[#00E3FF] rounded-full animate-ping absolute top-2 right-2"></div>
          <div className="w-4 h-4 bg-[#2ED47A] rounded-full animate-ping absolute top-4 right-4 animation-delay-500"></div>
          <div className="w-4 h-4 bg-[#00E3FF] rounded-full animate-ping absolute top-6 right-6 animation-delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;