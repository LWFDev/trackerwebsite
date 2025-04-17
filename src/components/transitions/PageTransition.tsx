
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [transitionClass, setTransitionClass] = useState('opacity-100');
  
  useEffect(() => {
    // Fade out
    setTransitionClass('opacity-0 transition-opacity duration-300');
    
    const timer = setTimeout(() => {
      // Update content
      setDisplayedChildren(children);
      
      // Scroll to top
      window.scrollTo(0, 0);
      
      // Fade in after a short delay to ensure DOM has updated
      setTimeout(() => {
        setTransitionClass('opacity-100 transition-opacity duration-300');
      }, 50);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname, children]);
  
  return (
    <div className={`min-h-screen ${transitionClass}`}>
      {displayedChildren}
    </div>
  );
};

export default PageTransition;
