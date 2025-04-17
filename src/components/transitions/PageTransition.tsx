
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
      }, 300); // Match the exit animation duration
    }
  }, [location, displayLocation]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={displayLocation.pathname}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "beforeChildren" // Ensures parent fades in before children
          }
        }}
        exit={{ 
          opacity: 0,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
            when: "afterChildren" // Ensures children fade out before parent
          }
        }}
        className="min-h-screen"
      >
        {!isExiting && children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
