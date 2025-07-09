
import React from "react";
import { motion } from "framer-motion";

interface SplashEffectProps {
  position?: "left" | "right" | "center";
  topOffset?: string;
  size?: "small" | "medium" | "large";
  color?: string;
}

const SplashEffect: React.FC<SplashEffectProps> = ({
  position = "left",
  topOffset = "20%",
  size = "medium",
  color = "hsl(var(--gold))" // Default to gold color from CSS variables
}) => {
  // Size mapping
  const sizeMap = {
    small: { outer: "w-32 h-32", inner: "w-16 h-16" },
    medium: { outer: "w-64 h-64", inner: "w-32 h-32" },
    large: { outer: "w-96 h-96", inner: "w-48 h-48" }
  };
  
  // Position mapping
  const positionMap = {
    left: "-left-20",
    right: "-right-20",
    center: "left-1/2 transform -translate-x-1/2"
  };
  
  // Define a unique animation for each splash to prevent layout thrashing
  const generateVariants = () => {
    const baseDelay = Math.random() * 2;
    const scaleFactor = size === "small" ? 1.1 : size === "medium" ? 1.2 : 1.3;
    
    return {
      animate: {
        scale: [1, scaleFactor, 1],
        opacity: [0.1, 0.3, 0.1],
        transition: {
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          delay: baseDelay,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }
      }
    };
  };
  
  const variants = generateVariants();

  return (
    <div 
      className={`absolute ${positionMap[position]}`}
      style={{ top: topOffset, willChange: "transform" }}
    >
      <motion.div
        className={`${sizeMap[size].outer} rounded-full opacity-10 border-4`}
        style={{ borderColor: `${color}20` }}
        variants={variants}
        animate="animate"
      >
        <motion.div
          className={`${sizeMap[size].inner} rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20`}
          style={{ backgroundColor: `${color}10` }}
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.2, 0.1, 0.2],
            transition: { 
              duration: 6,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }
          }}
        />
      </motion.div>
    </div>
  );
};

export default SplashEffect;
