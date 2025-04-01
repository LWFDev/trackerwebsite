
import React from "react";
import { Users, Award, RefreshCw, Target } from "lucide-react";

const AboutValues = () => {
  // Values data
  const values = [
    {
      icon: <Users className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Customer First",
      description: "We always view our customer interactions through the lens of how to solve real problems."
    },
    {
      icon: <Award className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product quality to customer service."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Innovation",
      description: "We're constantly innovating and improving our software to make it as powerful as possible."
    },
    {
      icon: <Target className="h-10 w-10 text-gold-DEFAULT" />,
      title: "Integrity",
      description: "We act with integrity and transparency in all our interactions."
    }
  ];

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg text-gold-DEFAULT mb-4">Our Values</h3>
          <h2 className="text-3xl font-bold mb-6 gold-gradient-text">What drives us every day</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our core values guide everything we do. Every product detail and feature is created to embody these values.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-gold-DEFAULT/40 transition-all duration-300 group">
              <div className="mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gold-DEFAULT transition-colors">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
