
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const PageTransition = ({ children }: Props) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState<React.ReactNode>(children);
  const location = useLocation();

  useEffect(() => {
    // Start transition - fade to black
    setIsTransitioning(true);

    // Wait for fade out to complete before updating children
    const fadeOutTimeout = setTimeout(() => {
      // Now that screen is black, update children
      setDisplayChildren(children);
      
      // Wait for content to load, then fade back in
      const fadeInTimeout = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsTransitioning(false);
      }, 800); // Longer delay before fade in to ensure content is loaded
      
      return () => clearTimeout(fadeInTimeout);
    }, 600); // Ensure fade-out is complete before loading new content (slightly longer than transition-duration)

    return () => clearTimeout(fadeOutTimeout);
  }, [location.pathname, children]);

  return (
    <div
      className={`min-h-screen transition-opacity duration-600 ease-in-out ${
        isTransitioning ? 'opacity-0 bg-black' : 'opacity-100'
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
