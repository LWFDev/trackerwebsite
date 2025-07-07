
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const StatsBanner = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 light:from-emerald-50 light:to-green-50 py-8 md:py-12 relative overflow-hidden transition-colors duration-300">
      {/* Enhanced background elements with green theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1/2 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-50"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-400/5 blur-[100px] -top-1/4 -right-1/4"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="grid grid-cols-2 gap-4 sm:gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white light:text-gray-900 mb-1 sm:mb-2 transition-colors duration-300">500+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">Active Businesses</div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400 mb-1 sm:mb-2">1M+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">Orders Processed</div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white light:text-gray-900 mb-1 sm:mb-2 transition-colors duration-300">99.9%</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">Uptime</div>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400 mb-1 sm:mb-2">24/7</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 light:text-gray-600 transition-colors duration-300">Customer Support</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBanner;
