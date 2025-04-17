
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const PageTransition = ({ children }: Props) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState<React.ReactNode>(children);
  const [shouldRenderNewContent, setShouldRenderNewContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start transition - fade to black
    setIsTransitioning(true);
    
    // Wait for the fade-out to complete before swapping content
    const fadeOutTimeout = setTimeout(() => {
      // Once faded out, we can update the content
      setShouldRenderNewContent(true);
      
      // After content is updated, allow time for content to load and render
      const contentLoadTimeout = setTimeout(() => {
        // Now fade back in 
        setIsTransitioning(false);
        window.scrollTo(0, 0);
      }, 300); // Give time for content to render
      
      return () => clearTimeout(contentLoadTimeout);
    }, 300); // Wait until fully faded out

    return () => clearTimeout(fadeOutTimeout);
  }, [location.pathname]);
  
  // Only update displayed children when we should render new content
  useEffect(() => {
    if (shouldRenderNewContent) {
      setDisplayChildren(children);
      setShouldRenderNewContent(false);
    }
  }, [shouldRenderNewContent, children]);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ease-in-out ${
        isTransitioning ? 'opacity-0 bg-black' : 'opacity-100'
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
