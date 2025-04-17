
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
      // Update children only after the screen is black
      setDisplayChildren(children);
      
      // Wait a bit longer before starting the fade in
      const fadeInTimeout = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsTransitioning(false);
      }, 600); // Longer delay before fade in
      
      return () => clearTimeout(fadeInTimeout);
    }, 500); // Wait for fade-out to complete (matches duration-500)

    return () => clearTimeout(fadeOutTimeout);
  }, [location.pathname, children]);

  return (
    <div
      className={`min-h-screen transition-opacity duration-500 ease-in-out ${
        isTransitioning ? 'opacity-0 bg-black' : 'opacity-100'
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
