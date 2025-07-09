
import React from "react";
import { Users, Award, RefreshCw, Target } from "lucide-react";

const AboutValues = () => {
  // Values data
  const values = [
    {
      icon: <Users className="h-10 w-10 text-gold" />,
      title: "Customer First",
      description: "We always view our customer interactions through the lens of how to solve real problems.",
      bgColor: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Award className="h-10 w-10 text-gold" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product quality to customer service.",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-gold" />,
      title: "Innovation",
      description: "We're constantly innovating and improving our software to make it as powerful as possible.",
      bgColor: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <Target className="h-10 w-10 text-gold" />,
      title: "Integrity",
      description: "We act with integrity and transparency in all our interactions.",
      bgColor: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gold-opacity-5 rounded-full blur-3xl top-10 left-10 animate-pulse-light"></div>
        <div className="absolute w-80 h-80 bg-blue-500/5 rounded-full blur-3xl bottom-10 right-10 animate-float"></div>
        <div className="absolute w-60 h-60 bg-purple-500/5 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-light"></div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gold-opacity-10 rounded-full border border-gold-opacity-20 mb-6">
            <h3 className="text-lg text-gold font-semibold">Our Values</h3>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gold-gradient-text">
            What drives us every day
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our core values guide everything we do. Every product detail and feature is created to embody these values.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card background with gradient - always visible */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} rounded-xl`}></div>
              
              {/* Main card */}
              <div className="relative bg-zinc-900/80 backdrop-blur-sm p-8 rounded-xl border border-gold-opacity-40 transform scale-105 shadow-2xl shadow-gold h-full">
                {/* Icon container with glow effect - always visible */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gold-opacity-20 rounded-full blur-xl"></div>
                  <div className="relative w-16 h-16 bg-gold-opacity-10 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gold">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
                
                {/* Bottom accent - always visible */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-opacity-50 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold-opacity-50"></div>
            <span className="text-sm font-medium">Building the future together</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gold-opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
