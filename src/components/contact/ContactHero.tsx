
import React from "react";

const ContactHero = () => {
  return (
    <div className="pt-24 pb-16 bg-zinc-900 text-white relative overflow-hidden flex items-center min-h-[30vh]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675]">Touch</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          We're here to help with any questions about our platform
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
