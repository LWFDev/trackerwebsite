
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const PageTransition = ({ children }: Props) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start transition when location changes
    setIsTransitioning(true);

    // Allow more time for content to load before starting to fade back in
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Delay the fade-in to ensure content has loaded
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Additional delay before starting to fade in
    }, 600); // Longer initial transition time (was 300ms)

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div
      className={`min-h-screen transition-opacity duration-500 ease-in-out ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
