
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Sparkle, Droplet, Circle } from "lucide-react";

// This component will handle all the decorative elements
const VisualElements: React.FC = () => {
  const bubbleContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(bubbleContainerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Generate random positions that don't overlap too much
  const generateRandomPositions = (count: number) => {
    const positions = [];
    const minDistance = 100; // Minimum distance between elements
    
    for (let i = 0; i < count; i++) {
      let x, y;
      let tooClose = true;
      let attempts = 0;
      
      // Try to find a position that's not too close to others
      while (tooClose && attempts < 20) {
        x = Math.random() * 100; // percentage within container
        y = Math.random() * 100;
        
        tooClose = positions.some(pos => {
          const dx = pos.x - x;
          const dy = pos.y - y;
          return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });
        
        attempts++;
      }
      
      positions.push({ x, y });
    }
    
    return positions;
  };

  const bubblePositions = generateRandomPositions(10);
  const splashPositions = generateRandomPositions(6);
  const sparklePositions = generateRandomPositions(8);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Floating bubbles */}
      <div ref={bubbleContainerRef} className="absolute inset-0">
        {bubblePositions.map((pos, index) => (
          <motion.div
            key={`bubble-${index}`}
            className="absolute"
            style={{ 
              left: `${pos.x}%`, 
              top: `${pos.y}%`,
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={controls}
            variants={{
              visible: {
                opacity: [0, 0.7, 0.3],
                scale: [0, 1, 0.8],
                y: [0, -20, -40],
                transition: { 
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.7,
                  ease: "easeInOut",
                }
              }
            }}
            custom={index}
          >
            <Droplet
              size={10 + Math.random() * 15}
              className="text-gold/20 transform rotate-180"
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </div>

      {/* Water splashes */}
      {splashPositions.map((pos, index) => (
        <motion.div
          key={`splash-${index}`}
          className="absolute opacity-0"
          style={{ 
            left: `${pos.x}%`, 
            top: `${pos.y + 50}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [0.5, 1, 0.8],
            transition: { 
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 2.5,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }
          }}
        >
          <div 
            className="rounded-full border border-gold/10"
            style={{ 
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
            }}
          />
        </motion.div>
      ))}

      {/* Sparkling elements */}
      {sparklePositions.map((pos, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute"
          style={{ 
            left: `${pos.x}%`, 
            top: `${pos.y}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.8, 1, 0.8],
            transition: { 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: index * 0.8,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }
          }}
        >
          <Sparkle
            size={6 + Math.random() * 8}
            className="text-gold"
            strokeWidth={1.5}
          />
        </motion.div>
      ))}

      {/* Large circular elements */}
      <motion.div
        className="absolute -bottom-[300px] -left-[150px] opacity-10"
        animate={{
          y: [0, -20, 0],
          transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Circle size={600} className="text-gold/10" strokeWidth={1} />
      </motion.div>
      
      <motion.div
        className="absolute -top-[200px] -right-[100px] opacity-10"
        animate={{
          y: [0, 20, 0],
          transition: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      >
        <Circle size={400} className="text-gold/10" strokeWidth={1} />
      </motion.div>
    </div>
  );
};

export default VisualElements;
