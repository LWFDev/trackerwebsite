
import React from "react";

const AboutHero = () => {
  return (
    <div className="pt-24 pb-16 bg-black text-white relative overflow-hidden flex flex-col items-center min-h-[30vh]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gold-DEFAULT/10 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gold-gradient-text">
          Our mission is to empower <br />businesses to work smarter
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          We're building the tools that help businesses streamline their workflows, reduce manual work, and focus on what matters most.
        </p>
        <div className="mt-12 max-w-4xl mx-auto">
          <img 
            src="/lovable-uploads/27c70a05-dca6-4c0b-a0d7-aaf05443a139.png" 
            alt="Our team" 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
