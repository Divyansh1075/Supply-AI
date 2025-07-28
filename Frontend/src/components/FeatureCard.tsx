import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/60 transition-all duration-500 hover:border-[#00E3FF]/50 group hover-lift relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00E3FF]/5 to-[#2ED47A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      
      {/* Floating particles on hover */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-[#00E3FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#2ED47A] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 animation-delay-200"></div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 animate-pulse-glow">
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-glow transition-all duration-300">{title}</h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] p-[1px]">
          <div className="w-full h-full bg-gray-800/30 backdrop-blur-sm rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;