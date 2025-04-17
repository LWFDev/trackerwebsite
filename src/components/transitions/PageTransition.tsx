
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'fadeOut' | 'loading' | 'fadeIn'>('idle');
  const pendingChildrenRef = useRef<React.ReactNode>(null);
  
  // This effect handles the page transition sequence
  useEffect(() => {
    // Store the new children in the ref but don't update the state yet
    pendingChildrenRef.current = children;
    
    // Only trigger transition if we have new content to show
    if (!transitioning) {
      // Start transition sequence
      setTransitioning(true);
      setTransitionPhase('fadeOut');
      
      // Phase 1: Fade out current content
      const fadeOutTimer = setTimeout(() => {
        // Phase 2: Load new content
        setTransitionPhase('loading');
        setDisplayedChildren(pendingChildrenRef.current);
        
        // Phase 3: Fade in new content after a short delay to ensure DOM updates
        const loadingTimer = setTimeout(() => {
          window.scrollTo(0, 0);
          setTransitionPhase('fadeIn');
          
          // Phase 4: Return to idle state after fade in completes
          const fadeInTimer = setTimeout(() => {
            setTransitionPhase('idle');
            setTransitioning(false);
          }, 400);
          
          return () => clearTimeout(fadeInTimer);
        }, 250); 
        
        return () => clearTimeout(loadingTimer);
      }, 400);
      
      return () => clearTimeout(fadeOutTimer);
    }
  }, [location.pathname, children, transitioning]);
  
  // Compute the CSS classes based on the current transition phase
  const getTransitionClasses = () => {
    switch (transitionPhase) {
      case 'fadeOut':
        return 'opacity-0';
      case 'loading':
        return 'opacity-0';
      case 'fadeIn':
        return 'opacity-100';
      case 'idle':
      default:
        return 'opacity-100';
    }
  };
  
  return (
    <div 
      className={`min-h-screen transition-opacity duration-400 ease-in-out bg-black ${getTransitionClasses()}`}
    >
      {displayedChildren}
    </div>
  );
};

export default PageTransition;
