import React, { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Star, Award, ShieldCheck, Sparkles, Circle } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useLocalization } from "@/contexts/LocalizationContext";

const PricingHero = () => {
  const { t } = useLocalization();
  const glowRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({
    x: 0,
    y: 0
  });
  const animationFrameRef = useRef<number | null>(null);
  const controls = useAnimation();

  // Add mouse follow effect for the glow with optimized performance
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Store the mouse position
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      };
    };

    // Update function that will be called via requestAnimationFrame
    const updateGlowPosition = () => {
      if (glowRef.current) {
        // Apply the transform
        glowRef.current.style.transform = `translate(${(mouseRef.current.x - 0.5) * 40}%, ${(mouseRef.current.y - 0.5) * 40}%)`;

        // Request next frame
        animationFrameRef.current = requestAnimationFrame(updateGlowPosition);
      }
    };

    // Start the animation
    animationFrameRef.current = requestAnimationFrame(updateGlowPosition);

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Random burst animations
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        scale: [1, 1.3, 1],
        opacity: [0.1, 0.3, 0.1],
        transition: {
          duration: 2,
          ease: "easeInOut"
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [controls]);
  return <div className="pt-32 md:pt-36 pb-20 bg-gradient-to-b from-zinc-900 to-black text-white relative overflow-hidden flex items-center min-h-[50vh]">
      {/* Interactive background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Animated gradient blob with optimized animation - green accent */}
        <div ref={glowRef} className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-emerald-500/15 to-gold-opacity-10 blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ease-out z-1" style={{
        willChange: 'transform'
      }}></div>
        
        {/* Floating elements - using transform instead of position for better performance */}
        <div className="absolute inset-0 pointer-events-none z-2">
          <motion.div className="absolute top-20 left-[10%] w-16 h-16 border border-emerald-400/30 rounded-full opacity-40 z-2" animate={{
          y: [0, -20, 0]
        }} transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }} style={{
          willChange: 'transform'
        }} />
          <motion.div className="absolute bottom-40 right-[15%] w-24 h-24 border border-gold-opacity-20 rounded-full opacity-30 z-2" animate={{
          y: [0, -30, 0]
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} style={{
          willChange: 'transform'
        }} />
          <motion.div className="absolute top-[30%] right-[10%] w-32 h-32 border-2 border-gold-opacity-10 rounded-xl rotate-45 opacity-20 z-2" animate={{
          rotate: [45, 90, 45]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }} style={{
          willChange: 'transform'
        }} />
        </div>
        
        {/* Decorative circles that pulse randomly */}
        <motion.div className="absolute top-[20%] left-[20%] opacity-10 z-3" animate={controls} style={{
        willChange: 'transform, opacity'
      }}>
          <Circle size={120} className="text-gold" strokeWidth={1} />
        </motion.div>
        
        <motion.div className="absolute bottom-[30%] right-[25%] opacity-10 z-3" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }
      }} style={{
        willChange: 'transform, opacity'
      }}>
          <Circle size={200} className="text-gold" strokeWidth={1} />
        </motion.div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 z-1"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-700 mb-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-opacity-0 via-gold-opacity-10 to-gold-opacity-0 animate-shimmer"></div>
            <Sparkles size={16} className="text-emerald-400" />
            <span className="text-sm text-emerald-400 uppercase font-medium tracking-wider">{t("Premium Solutions")}</span>
          </div>
          
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }}>
            {t("Simple, Transparent")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-gold relative">
              {t("Pricing")}
              <motion.div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-emerald-300 to-gold" initial={{
              width: 0
            }} animate={{
              width: "100%"
            }} transition={{
              delay: 0.7,
              duration: 0.5
            }}></motion.div>
            </span>
          </motion.h1>
          
          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3,
          duration: 0.5
        }}>
            {t("Choose the plan that's right for your business without hidden fees or complicated terms")}
          </motion.p>
          
          
        </motion.div>
      </div>
    </div>;
};
export default PricingHero;