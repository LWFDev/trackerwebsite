
import React, { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Star, Award, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const PricingHero = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  
  // Add mouse follow effect for the glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Move the glow effect based on mouse position
      glowRef.current.style.transform = `translate(${(x - 0.5) * 40}%, ${(y - 0.5) * 40}%)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-zinc-900 to-black text-white relative overflow-hidden flex items-center min-h-[50vh]">
      {/* Interactive background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Animated gradient blob */}
        <div 
          ref={glowRef}
          className="absolute w-[800px] h-[800px] rounded-full bg-[#D4AF37]/10 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-light transition-transform duration-300 ease-out"
        ></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-16 h-16 border border-[#D4AF37]/20 rounded-full animate-float opacity-20"></div>
          <div className="absolute bottom-40 right-[15%] w-24 h-24 border border-[#D4AF37]/20 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[30%] right-[10%] w-32 h-32 border-2 border-[#D4AF37]/10 rounded-xl rotate-45 animate-float opacity-20" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 mb-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 animate-shimmer"></div>
            <Sparkles size={16} className="text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] uppercase font-medium tracking-wider">Premium Solutions</span>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D675] relative">
              Pricing
              <motion.div 
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#F2D675]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.7, duration: 0.5 }}
              ></motion.div>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Choose the plan that's right for your business without hidden fees or complicated terms
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-2 bg-zinc-800/50 px-3 py-2 rounded-lg"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(212, 175, 55, 0.15)' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Award className="text-[#D4AF37] h-5 w-5" />
              <span className="text-sm text-gray-300">14-day free trial</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 bg-zinc-800/50 px-3 py-2 rounded-lg"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(212, 175, 55, 0.15)' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ShieldCheck className="text-[#D4AF37] h-5 w-5" />
              <span className="text-sm text-gray-300">No credit card required</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 bg-zinc-800/50 px-3 py-2 rounded-lg"
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(212, 175, 55, 0.15)' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Star className="text-[#D4AF37] h-5 w-5" />
              <span className="text-sm text-gray-300">Cancel anytime</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingHero;
