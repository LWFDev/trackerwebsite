
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isExiting, setIsExiting] = useState(false);
  
  useEffect(() => {
    if (location !== displayLocation) {
      setIsExiting(true);
      // Wait for exit animation to complete before updating location
      setTimeout(() => {
        setDisplayLocation(location);
        setIsExiting(false);
      }, 400); // Match the exit animation duration
    }
  }, [location, displayLocation]);

  // Customize variants based on navigation direction
  const getVariants = () => {
    // Simple implementation - you could expand this to track actual navigation direction
    const direction = Math.random() > 0.5 ? 1 : -1;
    
    return {
      initial: { 
        opacity: 0,
        x: 10 * direction,
        scale: 0.98
      },
      animate: { 
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1], // Custom easing
          when: "beforeChildren",
          staggerChildren: 0.1
        }
      },
      exit: { 
        opacity: 0,
        x: -10 * direction,
        scale: 0.98,
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          when: "afterChildren"
        }
      }
    };
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={displayLocation.pathname}
        variants={getVariants()}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen"
      >
        {!isExiting && children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
