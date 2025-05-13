
import React from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

// Define the types of objects that can float
type FloatingObjectType = "circle" | "square" | "hexagon" | "triangle";

interface FloatingObjectProps {
  type: FloatingObjectType;
  size: number;
  color: string;
  delay?: number;
  duration?: number;
}

const FloatingObject = ({ type, size, color, delay = 0, duration = 10 }: FloatingObjectProps) => {
  // Create different shapes based on type
  const renderShape = () => {
    switch (type) {
      case "circle":
        return <Circle size={size} className={`${color}`} strokeWidth={1} />;
      case "square":
        return <div className={`w-${size} h-${size} border ${color}`} />;
      case "hexagon":
        return (
          <div 
            className={`${color}`}
            style={{
              width: `${size}px`,
              height: `${size * 0.866}px`,
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
            }}
          />
        );
      case "triangle":
        return (
          <div 
            className={`${color}`}
            style={{
              width: `${size}px`,
              height: `${size * 0.866}px`,
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"
            }}
          />
        );
      default:
        return <Circle size={size} className={`${color}`} strokeWidth={1} />;
    }
  };

  return (
    <motion.div
      className="absolute"
      style={{
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        opacity: 0.1,
        willChange: 'transform, opacity',
      }}
      animate={{
        y: [0, -30, 0],
        rotate: [0, Math.random() > 0.5 ? 360 : -360, 0],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
    >
      {renderShape()}
    </motion.div>
  );
};

const FloatingObjects = () => {
  // Create an array of random floating objects
  const objects = Array.from({ length: 15 }, (_, index) => {
    const types: FloatingObjectType[] = ["circle", "square", "hexagon", "triangle"];
    const colors = [
      "text-[#D4AF37]/10", 
      "text-[#D4AF37]/20", 
      "text-white/5", 
      "text-white/10",
      "border-[#D4AF37]/10",
      "border-white/10",
    ];
    
    return {
      id: index,
      type: types[Math.floor(Math.random() * types.length)],
      size: 10 + Math.floor(Math.random() * 40),
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: index * 0.5,
      duration: 8 + Math.random() * 10,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {objects.map((obj) => (
        <FloatingObject 
          key={obj.id} 
          type={obj.type} 
          size={obj.size} 
          color={obj.color} 
          delay={obj.delay} 
          duration={obj.duration}
        />
      ))}
    </div>
  );
};

export default FloatingObjects;
