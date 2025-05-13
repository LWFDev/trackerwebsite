
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

export const HeroImage = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className="md:w-1/2 w-full animate-fade-in" 
      style={{ animationDelay: '0.5s' }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] opacity-20 blur-lg rounded-xl transform group-hover:scale-105 transition-all duration-300"></div>
        <div className="rounded-xl shadow-2xl overflow-hidden relative border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent z-10"></div>
          <img alt="Platform dashboard" className="w-full h-auto" src="https://mebuisworks.com/wp-content/uploads/2024/11/1-1024x680.webp" />
        </div>
        
        {/* Floating feature badges - simplified for mobile */}
        {!isMobile && (
          <>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-4 py-2 rounded-lg font-medium shadow-lg z-30 animate-float flex items-center gap-1">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
              New Features
            </div>
            
            <div className="absolute top-10 -right-8 bg-zinc-900/90 backdrop-blur-sm px-4 py-3 rounded-lg font-medium shadow-lg z-30 animate-float border border-[#D4AF37]/30 text-white" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#D4AF37]">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span>Real-time Updates</span>
              </div>
            </div>
            
            <div className="absolute -left-6 bottom-20 bg-zinc-900/90 backdrop-blur-sm px-4 py-3 rounded-lg font-medium shadow-lg z-30 animate-float border border-[#D4AF37]/30 text-white" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#D4AF37]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Advanced Security</span>
              </div>
            </div>
          </>
        )}
        
        {/* Mobile-only feature badge */}
        {isMobile && (
          <div className="absolute -bottom-2 right-2 bg-gradient-to-r from-[#D4AF37] to-[#F2D675] text-black px-3 py-1 rounded-lg text-xs font-medium shadow-lg z-30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
            New Features
          </div>
        )}
        
        {/* Decorative elements - reduced for mobile */}
        <div className={`absolute -top-6 -left-6 w-12 h-12 border border-[#D4AF37]/30 rounded-full animate-spin-slow ${isMobile ? 'hidden sm:block' : ''}`}></div>
        <div className="absolute -bottom-10 left-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent rounded-full"></div>
      </div>
    </motion.div>
  );
};
